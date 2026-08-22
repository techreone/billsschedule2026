#!/usr/bin/env node
// 生成 sitemap.xml + llms.txt（与路由逻辑一致：data/ 目录 = 游戏，content/{game}/guides = 攻略）
// 用法：node scripts/generate-sitemap.mjs（build 前跑，package.json prebuild 已挂）
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const BASE = 'https://billsschedule2026.online'
const DATA_DIR = path.join(ROOT, 'data')
const CONTENT_DIR = path.join(ROOT, 'content')

// ── 收集 URL 列表 ──
const urls = []
const add = (loc, lastmod = '', freq = 'weekly', pri = '0.7') =>
  urls.push({ loc, lastmod, freq, pri })

// 游戏 + 攻略（目录列表）
const games = fs.existsSync(DATA_DIR)
  ? fs.readdirSync(DATA_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()
  : []

// ── 收集全部攻略的 lastUpdated（供首页/索引页 lastmod 使用，避免恒为"今天"）──
const allGuideDates = [] // { game, date }
for (const game of games) {
  const guidesDir = path.join(CONTENT_DIR, game, 'guides')
  if (!fs.existsSync(guidesDir)) continue
  for (const f of fs.readdirSync(guidesDir)) {
    if (!/.(md|mdx)$/.test(f)) continue
    try {
      const raw = fs.readFileSync(path.join(guidesDir, f), 'utf-8')
      const m = raw.match(/^lastUpdated:\s*"?([^"\n]+)"?/m)
      if (!m) continue
      const d = new Date(m[1])
      if (isNaN(d)) continue
      allGuideDates.push({ game, date: d.toISOString().slice(0, 10) })
    } catch { /* 跳过 */ }
  }
}
const newestDate = (list) => (list.length ? list.map((x) => x.date).sort().at(-1) : '')
const gameNewest = (game) => newestDate(allGuideDates.filter((x) => x.game === game))

// 首页 lastmod = 全站最新攻略日期（无则留空，避免恒为"今天"）
add(`${BASE}/`, newestDate(allGuideDates), 'daily', '1.0')

// 静态页：仅收录真实内容页（about + 法律页）；占位骨架页已删除（2026-08-13 审计修复）
for (const slug of ['about', 'privacy', 'tos']) {
  add(`${BASE}/${slug}`, '', 'monthly', '0.3')
}

for (const game of games) {
  if (game.startsWith('_')) continue
  const guidesDir = path.join(CONTENT_DIR, game, 'guides')
  const hasGuides = fs.existsSync(guidesDir)
  if (!hasGuides) continue // 只收录有 content 的游戏

  add(`${BASE}/${game}`, gameNewest(game), 'daily', '0.9')
  add(`${BASE}/${game}/guides`, gameNewest(game), 'daily', '0.8')

  const slugs = fs.readdirSync(guidesDir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/, ''))
    .sort()
  for (const slug of slugs) {
    // 从 frontmatter 取 lastUpdated（无则 lastmod 留空，不写当天日期）
    let lastmod = ''
    try {
      const raw = fs.readFileSync(path.join(guidesDir, `${slug}.md`), 'utf-8')
      const m = raw.match(/^lastUpdated:\s*"?([^"\n]+)"?/m)
      if (m) {
        const d = new Date(m[1])
        if (!isNaN(d)) lastmod = d.toISOString().slice(0, 10)
      }
    } catch { /* mdx 或读取失败则留空 */ }
    add(`${BASE}/${game}/guides/${slug}`, lastmod, 'weekly', '0.8')
  }
}

// ── 写 sitemap.xml ──
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), sitemap)
console.log(`✅ sitemap.xml（${urls.length} 个 URL）→ public/sitemap.xml`)

// ── 写 llms.txt（AI 搜索入口）──
const llms = []
llms.push('# RogueWiki')
llms.push('')
llms.push('> RogueWiki — community game guides: walkthroughs, builds, codes, coordinates and FAQ for popular games.')
llms.push('')
llms.push('Last updated: ' + new Date().toISOString().slice(0, 10))
llms.push('')
llms.push('## Games')
llms.push('')
for (const game of games) {
  if (game.startsWith('_')) continue
  const guidesDir = path.join(CONTENT_DIR, game, 'guides')
  if (!fs.existsSync(guidesDir)) continue
  llms.push(`### ${game.replace(/-/g, ' ')}`)
  llms.push(`- [${game} hub](${BASE}/${game})`)
  llms.push(`- [${game} guides index](${BASE}/${game}/guides)`)
  const slugs = fs.readdirSync(guidesDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort()
  for (const slug of slugs) {
    llms.push(`  - [${slug.replace(/-/g, ' ')}](${BASE}/${game}/guides/${slug})`)
  }
  llms.push('')
}
fs.writeFileSync(path.join(ROOT, 'public', 'llms.txt'), llms.join('\n'))
console.log(`✅ llms.txt（${games.filter((g) => !g.startsWith('_') && fs.existsSync(path.join(CONTENT_DIR, g, 'guides'))).length} 游戏）→ public/llms.txt`)
