#!/usr/bin/env python3
"""check-seo-audit.py — Semrush Site Audit 检测规则本地化（提交前 SEO 质量门禁）

规则来源：Semrush 官方 KB「What Issues Can Site Audit Identify?」
https://www.semrush.com/kb/542-site-audit-issues-list （2026-08 抓取，阈值全部取自官方说明）

与现有脚本的分工：
- scripts/lint-guides.py       内容层（content/*.md：词数/CJK/title 长度/图片）
- scripts/check-seo-fixes.py   验收层（Semrush 修复验收，7 项）
- scripts/check-seo-audit.py   【本脚本】产物层（out/ 全页面审计，Semrush 规则全集）
- scripts/check-external-links.mjs  外链层（网络检测外部链接状态码）

用法：
  python3 scripts/check-seo-audit.py [--out-dir out] [--strict] [--json]
  --strict  所有 Warning 视为失败（默认仅 Error 使退出码非 0）
  --json    输出 JSON 报告
退出码：0 = 无 Error；1 = 有 Error（或 --strict 下有 Warning）

阈值速查（官方）：
  Title too long >70 字符；too short <=10；缺 title/description/h1；h1 多于 1 个
  Large HTML page size >2 MB；Low text-HTML ratio <=10%；Low word count <200 词
  Too many on-page links >3000；Duplicate content >=85% 相同
  URLs longer than 200 字符；Too long link URLs >2000 字符；URL 含下划线
  JS/CSS 文件 >100 个；JS/CSS 总大小 >2 MB（网络层）
  Sitemap >50,000 URL 或 >50MB；Outdated content = lastUpdated 超过 6 个月
  2026-08-14 新增防回归：Missing canonical（404 豁免）/ Missing Open Graph（NOTICE）/ JSON-LD 内容校验
    （FAQPage 空答案 ERROR / Article 缺 datePublished·author·publisher.logo ERROR / Breadcrumb 缺 Home·末项 URL WARN / JSON-LD 解析失败 ERROR）
  网络层（--network 未实现，输出提示）：4xx/5xx/DNS/www/HSTS/证书/TLS/SNI/
  压缩/缓存/跳转链/页面速度/交互时间/robots 拦截/X-Robots-Tag
"""
import re
import sys
import glob
import json
import os
from collections import Counter, defaultdict

OUT = 'out'
STRICT = '--strict' in sys.argv
AS_JSON = '--json' in sys.argv
if '--out-dir' in sys.argv:
    OUT = sys.argv[sys.argv.index('--out-dir') + 1]

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, OUT)

LEVELS = {'ERROR': [], 'WARN': [], 'NOTICE': []}

def report(level, check, url, detail=''):
    LEVELS[level].append((check, url, detail))

# ── 页面清单与 URL 规范化 ──
htmls = sorted(glob.glob(os.path.join(OUT_DIR, '**', '*.html'), recursive=True))
def url_of(f):
    rel = os.path.relpath(f, OUT_DIR).replace(os.sep, '/')
    if rel == 'index.html': return '/'
    if rel.endswith('/index.html'): rel = rel[:-len('index.html')]
    rel = rel[:-len('.html')] if rel.endswith('.html') else rel
    return '/' + rel

pages = {}  # url -> {html, text, links, imgs, ...}
for f in htmls:
    raw = open(f, encoding='utf-8', errors='ignore').read()
    pages[url_of(f)] = {'file': f, 'raw': raw}

# 提取函数
def extract(raw, pattern):
    m = re.search(pattern, raw, re.S)
    return m.group(1).strip() if m else ''

def text_of(raw):
    t = re.sub(r'<script[sS]*?</script>', ' ', raw)
    t = re.sub(r'<style[sS]*?</style>', ' ', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    return re.sub(r'\s+', ' ', t)

def visible_text_of(raw):
    """可见文本（去除 head/nav/header/footer/script/style）"""
    t = re.sub(r'<(script|style|nav|header|footer|aside)[\s>][\s\S]*?</\1>', ' ', raw)
    t = re.sub(r'<[^>]+>', ' ', t)
    return re.sub(r'\s+', ' ', t)

def links_of(raw):
    """返回 [(href, anchor_text)]"""
    out = []
    for m in re.finditer(r'<a\b([^>]*)>([\s\S]*?)</a>', raw):
        attrs, inner = m.group(1), m.group(2)
        hm = re.search(r'href="([^"]*)"', attrs)
        if not hm: continue
        href = hm.group(1)
        anchor = re.sub(r'<[^>]+>', ' ', inner).strip()
        out.append((href, anchor))
    return out

if not AS_JSON:
    print(f'=== Semrush 规则本地审计（{len(pages)} 页，out-dir={OUT}）===')

# ── 1. 页面级检查 ──
title_counter = Counter()
desc_counter = Counter()
content_hash = {}  # url -> 正文 shingle 集合（近似重复检测）
for url, p in pages.items():
    raw = p['raw']
    # 1.1 title
    title = extract(raw, r'<title>([^<]*)</title>')
    if not title:
        report('ERROR', 'Title tag is missing or empty', url)
    else:
        title_counter[title] += 1
        if len(title) > 70:
            report('ERROR', 'Title element is too long (>70)', url, f'{len(title)} 字符')
        elif len(title) <= 10:
            report('ERROR', 'Title element is too short (<=10)', url, f'{len(title)} 字符')
    # 1.2 h1
    h1s = re.findall(r'<h1[\s>][\s\S]*?</h1>|<h1[\s>][^<]*</h1>', raw)
    if len(h1s) == 0:
        report('ERROR', 'Missing h1', url)
    elif len(h1s) > 1:
        report('ERROR', 'Multiple h1 tags', url, f'{len(h1s)} 个')
    else:
        h1text = re.sub(r'<[^>]+>', '', h1s[0]).strip()
        if title and title == h1text and len(title) <= 46 and ' | RogueWiki' not in title:
            report('NOTICE', 'Duplicate content in h1 and title', url, f'{len(title)} 字符')
    # 1.3 meta description
    dm = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', raw) or re.search(r'<meta\s+content="([^"]*)"\s+name="description"', raw)
    desc = dm.group(1).strip() if dm else ''
    if not desc:
        report('ERROR', 'Missing meta description', url)
    else:
        desc_counter[desc] += 1
    # 1.4 viewport / charset / doctype
    if '<meta name="viewport"' not in raw:
        report('ERROR', 'Viewport not configured', url)
    elif not re.search(r'<meta name="viewport"[^>]*content="[^"]*width', raw):
        report('ERROR', 'Viewport width not set', url)
    if 'charset' not in raw.lower():
        report('ERROR', 'Encoding not declared', url)
    if '<!doctype html' not in raw.lower():
        report('ERROR', 'Doctype not declared', url)
    # 1.5 canonical
    cans = re.findall(r'<link rel="canonical" href="([^"]+)"', raw)
    if len(cans) > 1:
        report('ERROR', 'Multiple canonical URLs', url, '; '.join(cans))
    elif not cans and url != '/404':
        # 2026-08-14 防回归：曾全站 0 canonical 未被任何 lint 拦截；404 无 canonical 属预期
        report('ERROR', 'Missing canonical URL', url)
    p['canonical'] = cans[0] if cans else ''
    # 1.5b Open Graph（2026-08-14 补齐后防回归；404 无 OG 属预期）
    if 'property="og:title"' not in raw and url != '/404':
        report('NOTICE', 'Missing Open Graph title', url)
    # 1.5c JSON-LD 结构化数据内容校验（2026-08-14 防回归：FAQ 空答案 ×1076 / Article 缺字段曾全站漏检）
    for bm in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', raw, re.S):
        b = bm.group(1).strip()
        try:
            d = json.loads(b)
        except Exception:
            report('ERROR', 'Malformed JSON-LD', url)
            continue
        t = d.get('@type')
        if t == 'FAQPage':
            for q in d.get('mainEntity') or []:
                ans = ((q.get('acceptedAnswer') or {}).get('text') or '').strip()
                if not ans:
                    report('ERROR', 'FAQPage empty answer', url, str(q.get('name', ''))[:80])
        elif t == 'Article':
            miss = [k for k in ('datePublished', 'author', 'publisher') if not d.get(k)]
            if miss:
                report('ERROR', 'Article missing fields', url, ','.join(miss))
            elif not ((d.get('publisher') or {}).get('logo')):
                report('ERROR', 'Article missing publisher.logo', url)
        elif t == 'BreadcrumbList':
            items = d.get('itemListElement') or []
            if items and items[0].get('name') != 'Home':
                report('WARN', 'Breadcrumb first item not Home', url)
            if items and not items[-1].get('item'):
                report('WARN', 'Breadcrumb last item missing URL', url)
    # 1.6 meta refresh
    if re.search(r'<meta\s+http-equiv="refresh"', raw, re.I):
        report('ERROR', 'Meta refresh redirects', url)
    # 1.7 frames / plugin
    if re.search(r'<frameset|<frame\b', raw, re.I):
        report('ERROR', 'Frames used', url)
    if re.search(r'<embed\b|<object\b', raw, re.I):
        report('ERROR', 'Incompatible plugins used', url)
    # 1.8 页面大小 / 文本比 / 词数
    size = len(raw.encode('utf-8'))
    if size > 2 * 1024 * 1024:
        report('ERROR', 'Large HTML page size (>2MB)', url, f'{size // 1024}KB')
    vt = visible_text_of(raw)
    words = len(vt.split())
    if words < 200 and url != '/404':
        report('ERROR', 'Low word count (<200)', url, f'{words} 词')
    elif words > 15000:
        report('NOTICE', 'Too much content', url, f'{words} 词')
    text_bytes = len(vt.encode('utf-8'))
    if size > 0 and text_bytes / size <= 0.10:
        report('WARN', 'Low text to HTML ratio (<=10%)', url, f'{text_bytes * 100 // size}%')
    # 1.9 链接数量
    n_links = len(links_of(raw))
    if n_links > 3000:
        report('ERROR', 'Too many on-page links (>3000)', url, f'{n_links} 个')
    # 1.10 img alt
    for m in re.finditer(r'<img\b([^>]*)>', raw):
        if 'alt=' not in m.group(1):
            report('WARN', 'Missing ALT attributes', url, m.group(1)[:80])
            break
    # 1.11 structured data JSON 解析
    for m in re.finditer(r'<script type="application/ld\+json">([\s\S]*?)</script>', raw):
        try:
            json.loads(m.group(1))
        except Exception:
            report('ERROR', 'Structured data that contains markup errors', url)
    # 1.12 正文 shingle（重复内容 85% 检测用）
    norm = re.sub(r'[^a-z0-9]+', ' ', vt.lower())
    tokens = norm.split()
    shingles = set()
    for i in range(len(tokens) - 9):
        shingles.add(' '.join(tokens[i:i + 10]))
    content_hash[url] = shingles if len(shingles) > 20 else set()
    # 1.13 URL 检查
    if '_' in url:
        report('WARN', 'Underscores in URL', url)
    if len(url) > 200:
        report('WARN', 'Too long URLs (>200)', url, f'{len(url)} 字符')
    # 1.14 内链/外链分类收集
    p['links'] = links_of(raw)

# ── 2. 全站链接图 ──
def norm_href(href):
    h = href.split('#')[0].split('?')[0]
    if h.startswith('http://billsschedule2026.online') or h.startswith('https://billsschedule2026.online'):
        h = h.split('billsschedule2026.online')[1]
    if not h.startswith('/'): return None
    h = h.rstrip('/') or '/'
    return h

def _raw_link_attrs(src_url, href):
    raw = pages[src_url]['raw']
    for m in re.finditer(r'<a\b([^>]*)>', raw):
        if f'href="{href}"' in m.group(1):
            return m.group(1)
    return ''

internal_hrefs = defaultdict(list)  # 目标 url -> [来源 url]
for url, p in pages.items():
    for href, anchor in p['links']:
        # 站内判定
        if href.startswith(('/')) or 'billsschedule2026.online' in href and not href.startswith('http'):
            pass
        if href.startswith('http://billsschedule2026.online') or href.startswith('https://billsschedule2026.online'):
            href = href.split('billsschedule2026.online', 1)[1] or '/'
        if not href.startswith('/'):
            continue  # 外部
        if href.startswith('//'):
            continue
        target = norm_href(href)
        if target is None: continue
        internal_hrefs[target].append(url)
        # anchor 质量
        if not anchor:
            report('WARN', 'Links with no anchor text', url, href)
        elif anchor == href or re.match(r'^https?://', anchor):
            report('WARN', 'Links with no anchor text (naked URL)', url, href)
        elif re.fullmatch(r'[\\W_]+', anchor):
            report('WARN', 'Links with no anchor text (symbols only)', url, href)
        if anchor.lower() in ('click here', 'read more', 'link', 'here', 'this page', 'click'):
            report('NOTICE', 'Links with non-descriptive anchor text', url, f'{anchor!r} -> {href}')
        if len(href) > 2000:
            report('WARN', 'Too long link URLs (>2000)', url, f'{len(href)} 字符')
        if re.search(r'\s|\\', href):
            report('ERROR', 'Malformed links', url, href[:100])
        if re.search(r'\.(png|jpe?g|webp|gif|pdf|zip|svg|mp4|mp3|ico)(\?|$)', href, re.I) and not href.startswith('/'):
            report('NOTICE', 'Resources formatted as page links', url, href)
        # nofollow 内链
        if re.search(r'rel="[^"]*nofollow', href if False else _raw_link_attrs(url, href)):
            report('NOTICE', 'Nofollow attributes in internal links', url, href)


# ── 3. 断链 / 孤儿 / 深度 ──
url_set = set(pages.keys())
# 归一化 sitemap/链接目标到页面 key
def to_page_key(path):
    if path in url_set: return path
    if path == '/': return '/'
    for k in url_set:
        if k == path or k == path + '/': return k
    return None

broken = []
for url, p in pages.items():
    for href in internal_hrefs:
        pass
RES_EXT = re.compile(r'\.(png|jpe?g|webp|gif|pdf|zip|svg|mp4|mp3|ico|woff2?|ttf)(\?|$)', re.I)
for target, sources in internal_hrefs.items():
    key = to_page_key(target)
    if key is None:
        if RES_EXT.search(target):
            for s in sources[:3]:
                report('NOTICE', 'Resources formatted as page links', s, target)
        else:
            for s in sources[:3]:
                report('ERROR', 'Broken internal links', s, target)
# 孤儿：sitemap 页无入链
sitemap_pages = set()
sm_file = os.path.join(OUT_DIR, 'sitemap.xml')
if os.path.exists(sm_file):
    sm = open(sm_file, encoding='utf-8').read()
    sitemap_pages = set(re.findall(r'<loc>https?://billsschedule2026\.online([^<]+)</loc>', sm))
else:
    report('ERROR', 'Sitemap.xml not found', '/')

incoming_count = Counter()
for target, sources in internal_hrefs.items():
    key = to_page_key(target)
    if key: incoming_count[key] += len(sources)
# 首页入链默认 +1（自身）
incoming_count['/'] += 1

for url in pages:
    if url == '/': continue
    n_in = incoming_count.get(url, 0)
    if n_in == 0 and url != '/404':
        report('WARN', 'Orphaned pages (no internal links)', url)
    elif n_in == 1:
        report('NOTICE', 'Pages with only one internal link', url)
    elif n_in == 2:
        pass

# sitemap 孤儿
for loc in sitemap_pages:
    if incoming_count.get(loc, 0) == 0:
        report('NOTICE', 'Orphaned sitemap pages', loc)

# ── 4. sitemap / robots / llms 文件 ──
if os.path.exists(sm_file):
    try:
        import xml.etree.ElementTree as ET
        ET.fromstring(sm)
    except Exception as e:
        report('ERROR', 'Invalid sitemap.xml format', '/', str(e)[:100])
    # sitemap 中页面不存在（404 代理）
    for loc in sitemap_pages:
        if to_page_key(loc) is None:
            report('ERROR', 'Incorrect pages found in sitemap.xml', '/', loc)
    # HTTP URLs in sitemap
    for m in re.finditer(r'<loc>(http://[^<]+)</loc>', sm):
        report('ERROR', 'HTTP URLs in sitemap.xml for HTTPS site', '/', m.group(1))
    urls_count = len(sitemap_pages)
    if urls_count > 50000 or os.path.getsize(sm_file) > 50 * 1024 * 1024:
        report('ERROR', 'Sitemap file too large', '/', f'{urls_count} URLs')

rb_file = os.path.join(OUT_DIR, 'robots.txt')
if os.path.exists(rb_file):
    rb = open(rb_file, encoding='utf-8').read()
    if 'Sitemap:' not in rb:
        report('ERROR', 'Sitemap.xml not specified in robots.txt', '/robots.txt')
    # blocked from crawling 粗检
    for url, p in pages.items():
        if url == '/': continue
        for line in rb.splitlines():
            if line.startswith('Disallow:') and line.split(':', 1)[1].strip() != '':
                d = line.split(':', 1)[1].strip()
                if url.startswith(d):
                    report('ERROR', 'Blocked from crawling', url, f'robots Disallow {d}')
else:
    report('ERROR', 'Robots.txt not found', '/')

# llms.txt
ll_file = os.path.join(OUT_DIR, 'llms.txt')
if not os.path.exists(ll_file):
    report('ERROR', 'Llms.txt not found', '/')
else:
    ll = open(ll_file, encoding='utf-8').read()
    if not ll.strip() or '# ' not in ll:
        report('ERROR', 'Llms.txt has formatting issues', '/')

# ── 5. 重复 title / description / content ──
for title, cnt in title_counter.items():
    if cnt > 1:
        report('ERROR', 'Duplicate title tag', '/', f'{title!r} x{cnt}')
for desc, cnt in desc_counter.items():
    if cnt > 1:
        report('ERROR', 'Duplicate meta descriptions', '/', f'{desc[:50]!r} x{cnt}')
# 重复内容：shingle Jaccard >= 0.85
urls_list = list(content_hash.keys())
for i in range(len(urls_list)):
    for j in range(i + 1, len(urls_list)):
        a, b = content_hash[urls_list[i]], content_hash[urls_list[j]]
        if not a or not b: continue
        inter = len(a & b)
        if inter / min(len(a), len(b)) >= 0.85:
            report('WARN', 'Duplicate content (>=85%)', urls_list[i], f'vs {urls_list[j]}')
            break  # 每页只报一次

# ── 6. 语义 HTML 占比 ──
for url, p in pages.items():
    raw = p['raw']
    total_tags = len(re.findall(r'<[a-z][a-z0-9]*\b', raw))
    semantic = len(re.findall(r'<(main|article|section|nav|header|footer|aside|h[1-6]|ul|ol|table|figure|figcaption|blockquote|address|form|label|fieldset|summary|details|mark|time|code|pre|dl|dt|dd)\b', raw))
    if total_tags > 50 and semantic / total_tags < 0.08:
        report('NOTICE', 'Low Semantic HTML usage', url, f'semantic {semantic}/{total_tags}')

# ── 7. 输出 ──
if AS_JSON:
    print(json.dumps({lvl: [{'check': c, 'url': u, 'detail': d} for c, u, d in items] for lvl, items in LEVELS.items()}, indent=1, ensure_ascii=False))
else:
    for lvl in ('ERROR', 'WARN', 'NOTICE'):
        items = LEVELS[lvl]
        print(f'\n=== {lvl}（{len(items)}）===')
        for check, url, detail in items[:60]:
            print(f'  {check} | {url}' + (f' | {detail}' if detail else ''))
        if len(items) > 60:
            print(f'  ... 其余 {len(items) - 60} 条')
    print('\n--- 网络层检测项（需线上 Site Audit，本地无法验证）---')
    print('  4xx/5xx · DNS · www resolve · HSTS · 证书/TLS/SNI · 重定向链/临时/永久重定向')
    print('  非安全页 · 压缩/缓存 · JS/CSS 数量与大小 · 页面加载速度 · 交互时间')
    print('  外部资源 403/断链（用 scripts/check-external-links.mjs 检测）')

if not AS_JSON:
    n_errors = len(LEVELS['ERROR'])
    n_warn = len(LEVELS['WARN'])
    n_notice = len(LEVELS['NOTICE'])
    print(f'\n汇总: ERROR {n_errors} / WARN {n_warn} / NOTICE {n_notice}')
    fail = n_errors > 0 or (STRICT and n_warn > 0)
    if fail:
        print('❌ 未通过（有 Error' + (' / strict 下 Warning' if STRICT else '') + '）')
    else:
        print('✅ 通过（无 Error' + ('，无 Warning' if STRICT else '') + '）')
    sys.exit(1 if fail else 0)
sys.exit(0)
