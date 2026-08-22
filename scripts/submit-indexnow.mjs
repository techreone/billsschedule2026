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

// 收集全站静态页面 URL（域名统一为 billsschedule2026.online）
// 与 sitemap.ts 对齐：覆盖全站 57 条路由（7 个原路由 + 50 个趋势新词 SSG 路由）
const routes = [
  '', '/where-to-watch', '/preseason-schedule', '/printable-schedule', '/about', '/privacy', '/terms',
  '/are-there-any-preseason-nfl-games-on-today', '/arizona-cardinals-depth-chart-2026',
  '/bills-kicker-depth-chart', '/bills-quarterback-depth-chart', '/bills-rb-depth-chart',
  '/bills-vs-browns-delay-weather', '/bills-vs-browns-live-stream', '/bills-vs-browns-prediction', '/bills-vs-browns-stats',
  '/broncos-qb-depth-chart', '/browns-qb-depth-chart', '/chargers-depth-chart-2026', '/cleveland-browns-depth-chart-2026',
  '/colts-qb-depth-chart', '/colts-wr-depth-chart', '/commanders-depth-chart-2026', '/commanders-qb-depth-chart',
  '/cowboys-depth-chart-2026', '/damar-hamlin-bills-status', '/denver-broncos-depth-chart-2026',
  '/does-nfl-sunday-ticket-include-preseason-games', '/dolphins-depth-chart-2026', '/eagles-depth-chart-2026',
  '/ed-oliver-son-family-news', '/falcons-qb-depth-chart', '/frank-gore-jr-bills-roster',
  '/giants-qb-depth-chart', '/giants-rb-depth-chart', '/is-josh-allen-playing-today', '/jets-qb-depth-chart',
  '/kansas-city-chiefs-depth-chart-2026', '/kyle-allen-bills-qb2', '/lions-qb-depth-chart', '/matt-milano-injury-status',
  '/minnesota-vikings-depth-chart-2026', '/new-york-giants-depth-chart-2026', '/new-york-jets-depth-chart-2026',
  '/nfl-plus-preseason-live-stream-guide', '/panthers-depth-chart-2026', '/panthers-rb-depth-chart',
  '/ray-davis-bills-rb', '/saints-depth-chart-2026', '/steelers-depth-chart-2026', '/steelers-rb-depth-chart',
  '/stefon-diggs-bills-wr-aftermath', '/tampa-bay-buccaneers-depth-chart-2026', '/tennessee-titans-depth-chart-2026',
  '/texans-depth-chart-2026', '/vikings-qb-depth-chart', '/where-can-i-watch-nfl-preseason-games',
]
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
