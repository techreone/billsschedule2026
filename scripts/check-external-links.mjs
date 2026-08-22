#!/usr/bin/env node
// 外链健康检测（billsschedule2026 — Next.js App Router 静态导出版）
// 扫描 src/**/*.{ts,tsx} 中的外部链接，批量请求状态码，输出失效（4xx/5xx/超时/无法解析）清单，
// 区分"真失效"与"目标站反爬（403）"。
// 用法：
//   node scripts/check-external-links.mjs            # 全站检测，输出报告到 /tmp
//   node scripts/check-external-links.mjs --json     # 仅输出 JSON 报告
//   node scripts/check-external-links.mjs --all      # 不跳过反爬高发 host
// 说明：本环境出网需走代理；脚本读取 HTTPS_PROXY/HTTP_PROXY 并自动经 undici ProxyAgent 路由。
//       无代理环境（CI / 用户本机）则直连。
import fs from 'node:fs'
import path from 'node:path'
import { setGlobalDispatcher, ProxyAgent } from 'undici'

const ROOT = process.cwd()
const SRC_DIR = path.join(ROOT, 'src')

// 本站域名（跳过，不算外链）
const OWN_HOSTS = ['billsschedule2026.online', 'billsschedule2026.pages.dev', 'localhost']
// 语义/命名空间域名（跳过）
const SKIP_SCHEMES = ['schema.org', 'www.schema.org', 'w3.org', 'www.w3.org']
// 反爬高发 host，默认跳过（--all 强制检测）
const SKIP_HOSTS = new Set([
  'store.steampowered.com', 'steamcommunity.com', 'github.com',
  'en.wikipedia.org', 'www.wikipedia.org', 'web.archive.org',
])

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
const CONCURRENCY = 8
const TIMEOUT_MS = 20000

// ── 代理（本环境出网）──
const proxy =
  process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.https_proxy || process.env.http_proxy
if (proxy) {
  setGlobalDispatcher(new ProxyAgent(proxy))
  console.log('[proxy] 经 ' + proxy + ' 出网')
}

const args = process.argv.slice(2)
const onlyJson = args.includes('--json')
const forceAll = args.includes('--all')

// ── 递归收集 src 下 ts/tsx ──
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name.startsWith('.')) continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(e.name)) out.push(p)
  }
  return out
}

// ── 收集外链 ──
const links = new Map() // url -> Set(relPath)
if (fs.existsSync(SRC_DIR)) {
  const files = walk(SRC_DIR)
  for (const f of files) {
    const rel = path.relative(ROOT, f)
    let raw
    try {
      raw = fs.readFileSync(f, 'utf-8')
    } catch {
      continue
    }
    // 直接匹配 http(s):// 直到空格/引号/尖括号/括号为止（覆盖 href="..." 与字符串字面量 "..."）
    const urlPattern = /https?:\/\/[^\s"'<>)\]]+/gi
    const found = [...raw.matchAll(urlPattern)].map((m) => m[0])
    for (const u of new Set(found)) {
      const clean = u.replace(/[.,;:!?]+$/, '')
      if (!/^https?:\/\//.test(clean)) continue
      let host
      try {
        host = new URL(clean).host.toLowerCase()
      } catch {
        continue
      }
      if (OWN_HOSTS.some((h) => host === h || host.endsWith('.' + h))) continue
      if (SKIP_SCHEMES.some((s) => host === s || host.endsWith('.' + s))) continue
      if (!links.has(clean)) links.set(clean, new Set())
      links.get(clean).add(rel)
    }
  }
}

if (links.size === 0) {
  console.log('未在 src/ 下发现任何外部链接（请确认页面已引用权威外链）。')
  process.exit(0)
}

// ── 检测 ──
async function check(u) {
  try {
    const ctrl = new AbortController()
    const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    const r = await fetch(u, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'user-agent': UA, 'accept-language': 'en-US,en;q=0.9' },
    })
    clearTimeout(t)
    return { status: r.status, url: u }
  } catch (e) {
    return { status: e.name === 'AbortError' ? 'TIMEOUT' : 'ERR', url: u }
  }
}

const queue = [...links.keys()].filter((u) => forceAll || !SKIP_HOSTS.has(new URL(u).host.toLowerCase()))
const results = []
async function worker() {
  while (queue.length) {
    const u = queue.shift()
    results.push(await check(u))
  }
}
console.log(
  '检测 ' + queue.length + ' 个外链（并发 ' + CONCURRENCY + '，跳过 SKIP_HOSTS ' + (links.size - queue.length) + ' 个）…',
)
await Promise.all(Array.from({ length: CONCURRENCY }, worker))

// ── 报告 ──
const byStatus = {}
for (const r of results) {
  const key = String(r.status)
  byStatus[key] = (byStatus[key] || 0) + 1
}
// 真实失效：4xx(非403)/5xx/超时/网络错误（需修复或移除）；
// 2xx/3xx（含 202 Accepted）视为可达；403 单列"可能反爬"供人工判断（非死链）。
const isRealFail = (r) =>
  (typeof r.status === 'number' && r.status >= 400 && r.status !== 403) ||
  r.status === 'ERR' ||
  r.status === 'TIMEOUT'
const bad = results.filter(isRealFail)
const botblock = results.filter((r) => r.status === 403)
const srcOf = (url) => [...(links.get(url) || [])].slice(0, 3)
const report = {
  generatedAt: new Date().toISOString(),
  checked: results.length,
  summary: byStatus,
  bad: bad.map((r) => ({ status: r.status, url: r.url, pages: srcOf(r.url) })),
  botblock: botblock.map((r) => ({ status: r.status, url: r.url, pages: srcOf(r.url) })),
}
const outPath = '/tmp/billsschedule2026-extlinks-' + Date.now() + '.json'
fs.writeFileSync(outPath, JSON.stringify(report, null, 1))
console.log('状态码汇总:', JSON.stringify(byStatus))
console.log('报告已保存: ' + outPath)
if (onlyJson) {
  console.log(JSON.stringify(report, null, 1))
} else {
  console.log('\n=== 真实失效外链（4xx/5xx/超时/网络错误，需修复）===')
  for (const r of report.bad) {
    const kind = r.status === 'ERR' || r.status === 'TIMEOUT' ? '[网络/超时]' : '[失效 ' + r.status + ']'
    console.log(kind + ' ' + r.url)
    for (const pg of r.pages) console.log('         └ ' + pg)
  }
  if (bad.length === 0) console.log('✅ 无真实失效外链。')
  if (botblock.length) {
    console.log('\n=== 疑似反爬（403，需人工判断是否为真死链）===')
    for (const r of report.botblock) {
      console.log('[可能反爬] 403 ' + r.url)
      for (const pg of r.pages) console.log('         └ ' + pg)
    }
  }
}
