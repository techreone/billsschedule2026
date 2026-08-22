import fs from 'fs'
import path from 'path'
import { ProxyAgent, setGlobalDispatcher } from 'undici'

// billsschedule2026 — IndexNow 快速提交（域名 billsschedule2026.online）
// 本机需走代理（HTTPS_PROXY/HTTP_PROXY）；CI 环境无代理时自动直连
const proxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY
if (proxy) setGlobalDispatcher(new ProxyAgent(proxy))
const key = fs.readFileSync(path.join(process.cwd(), 'scripts/indexnow-key.txt'), 'utf8').trim()
const host = 'billsschedule2026.online'
const keyLocation = `https://${host}/indexnow-${key}.txt`

// 收集全站静态页面 URL（4 条 SSG 路由，域名统一为 billsschedule2026.online）
// 与 sitemap.ts 对齐：覆盖全站 7 条路由
const routes = ['', '/where-to-watch', '/preseason-schedule', '/printable-schedule', '/about', '/privacy', '/terms']
const urls = routes.map((r) => `https://${host}${r}`)

console.log(`[IndexNow] 共收集到 ${urls.length} 个 URL 准备提交给 Bing/IndexNow API...`)

const payload = {
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urls,
}

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  })

  console.log(`[IndexNow API 响应状态]: ${res.status} ${res.statusText}`)
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ 成功向 IndexNow 广播提交了 ${urls.length} 个 URL！Bing 将快速刷新索引。`)
  } else {
    const text = await res.text()
    console.log(`⚠️ IndexNow 返回状态码 ${res.status}: ${text}`)
  }
} catch (err) {
  console.error(`❌ POST IndexNow API 失败:`, err)
}
