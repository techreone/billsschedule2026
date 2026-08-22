#!/usr/bin/env bash
# billsschedule2026 一键部署：build → CF Pages 部署 → IndexNow 提交
# 用法：bash scripts/deploy.sh
# 依赖：CLOUDFLARE_API_TOKEN 环境变量（或 ~/.cf-token 文件）
# 部署域名：billsschedule2026.online  CF 项目名：billsschedule2026
set -e
cd "$(dirname "$0")/.."

DOMAIN="billsschedule2026.online"
PROJECT="billsschedule2026"

# 1. token
if [ -z "$CLOUDFLARE_API_TOKEN" ] && [ -f ~/.cf-token ]; then
  export CLOUDFLARE_API_TOKEN="$(cat ~/.cf-token)"
fi
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ 未设置 CLOUDFLARE_API_TOKEN（或 ~/.cf-token）"
  exit 1
fi

# 2. build（next export 产出 out/，含 sitemap.xml / robots.txt / llms.txt）
echo "==> npm run build"
npm run build

# 3. 部署（去代理，wrangler 直连 CF）
echo "==> wrangler pages deploy -> 项目: $PROJECT"
env -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY -u http_proxy -u https_proxy -u all_proxy \
  npx --yes wrangler@4 pages deploy out --project-name "$PROJECT"

# 4. IndexNow 提交（全部 URL，从线上 sitemap 读取）
echo "==> IndexNow 提交 -> $DOMAIN"
KEY=$(cat scripts/indexnow-key.txt)
python3 - "$KEY" "$DOMAIN" <<'PYEOF'
import re, json, sys, urllib.request
key, domain = sys.argv[1], sys.argv[2]
sitemap = urllib.request.urlopen(f'https://{domain}/sitemap.xml', timeout=30).read().decode()
urls = re.findall(r'<loc>([^<]+)</loc>', sitemap)
payload = json.dumps({
  "host": domain, "key": key,
  "keyLocation": f"https://{domain}/indexnow-{key}.txt",
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

echo "✅ 部署完成 -> https://$DOMAIN"
