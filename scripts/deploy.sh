#!/usr/bin/env bash
# roguewiki 一键部署：build（自动更新 sitemap/llms）→ CF Pages 部署 → IndexNow 提交
# 用法：bash scripts/deploy.sh
# 依赖：CLOUDFLARE_API_TOKEN 环境变量（或 ~/.cf-token 文件）
set -e
cd "$(dirname "$0")/.."

# 1. token
if [ -z "$CLOUDFLARE_API_TOKEN" ] && [ -f ~/.cf-token ]; then
  export CLOUDFLARE_API_TOKEN="$(cat ~/.cf-token)"
fi
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ 未设置 CLOUDFLARE_API_TOKEN（或 ~/.cf-token）"
  exit 1
fi

# 2. build（prebuild 自动生成 sitemap/llms）
echo "==> npm run build"
npm run build

# 3. 部署（去代理，wrangler 直连 CF）
echo "==> wrangler pages deploy"
env -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY -u http_proxy -u https_proxy -u all_proxy \
  npx --yes wrangler@4 pages deploy out --project-name roguewiki

# 4. IndexNow 提交（全部 URL）
echo "==> IndexNow 提交"
KEY=$(cat scripts/indexnow-key.txt)
python3 - "$KEY" <<'PYEOF'
import re, json, sys, urllib.request
key = sys.argv[1]
sitemap = urllib.request.urlopen('https://roguewiki.com/sitemap.xml', timeout=30).read().decode()
urls = re.findall(r'<loc>([^<]+)</loc>', sitemap)
payload = json.dumps({
  "host": "roguewiki.com", "key": key,
  "keyLocation": f"https://roguewiki.com/indexnow-{key}.txt",
  "urlList": urls,
}).encode()
req = urllib.request.Request('https://api.indexnow.org/indexnow', data=payload,
  headers={'Content-Type': 'application/json; charset=utf-8'})
try:
    resp = urllib.request.urlopen(req, timeout=30)
    print(f"IndexNow {resp.status}（{len(urls)} URLs）")
except Exception as e:
    print(f"IndexNow 失败: {e}（可忽略，Bing 也会自己抓 sitemap）")
PYEOF

echo "✅ 部署完成"
