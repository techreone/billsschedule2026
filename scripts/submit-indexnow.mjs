import fs from 'fs'
import path from 'path'

const key = 'ef1f91abc6f37ab88af33ca5e9ecc12f'
const host = 'roguewiki.com'
const keyLocation = `https://${host}/indexnow-${key}.txt`

// 收集全站静态页面 URL
const urls = [
  `https://${host}`,
  `https://${host}/about`,
  `https://${host}/privacy`,
  `https://${host}/tos`
]

const contentDir = path.join(process.cwd(), 'content')
if (fs.existsSync(contentDir)) {
  const games = fs.readdirSync(contentDir)
  for (const game of games) {
    if (game.startsWith('.')) continue
    urls.push(`https://${host}/${game}`)
    urls.push(`https://${host}/${game}/guides`)
    
    const guidesDir = path.join(contentDir, game, 'guides')
    if (fs.existsSync(guidesDir)) {
      const files = fs.readdirSync(guidesDir)
      for (const file of files) {
        if (file.endsWith('.md')) {
          const slug = file.replace(/\.md$/, '')
          urls.push(`https://${host}/${game}/guides/${slug}`)
        }
      }
    }
  }
}

console.log(`[IndexNow] 共收集到 ${urls.length} 个 URL 准备提交给 Bing/IndexNow API...`)

const payload = {
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urls
}

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
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
