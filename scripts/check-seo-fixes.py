#!/usr/bin/env python3
"""check-seo-fixes.py — Semrush Site Audit 修复验收脚本（goal z8myb8）

逐项机械检查 Semrush mega export 中可修项的修复状态。
用法: python3 scripts/check-seo-fixes.py [--out-dir out] [--strict]
退出码: 0 = 全部通过; 1 = 有失败项
"""
import re
import sys
import glob
import os

OUT = sys.argv[sys.argv.index('--out-dir') + 1] if '--out-dir' in sys.argv else 'out'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, OUT)

failures = []
checks = []

def check(name, ok, detail=''):
    checks.append(name)
    if ok:
        print(f'  ✅ {name}')
    else:
        failures.append(name)
        print(f'  ❌ {name} {detail}')

print('=== 1. H1 唯一性（渲染 out/ 每页恰 1 个 h1）===')
htmls = glob.glob(os.path.join(OUT_DIR, '**', '*.html'), recursive=True)
multi = 0; zero = 0; checked = 0
for f in htmls:
    t = open(f, encoding='utf-8', errors='ignore').read()
    n = len(re.findall(r'<h1[\s>]', t))
    if n != 1:
        if n > 1: multi += 1
        else: zero += 1
    checked += 1
check('渲染 h1 每页恰 1 个', multi == 0 and zero == 0,
      f'({checked} 页: multi={multi} zero={zero})')

print('=== 2. title 长度（frontmatter ≤60 字符）===')
over = 0; total = 0
for f in glob.glob(os.path.join(ROOT, 'content', '*', 'guides', '*.md')):
    t = open(f, encoding='utf-8').read()
    m = re.search(r'^title:\s*"?(.+?)"?\s*$', t, re.M)
    if m:
        total += 1
        if len(m.group(1).strip().strip('"')) > 60:
            over += 1
check(f'title ≤60 字符（{total} 篇，超长 {over}）', over == 0, f'({over} 超长)')

print('=== 3. h1/title 差异规则（Ahrefs 2026-08-13 审计：Duplicate content in h1 and title）===')
# 规则：title 与 h1 相同时必须带 " | RogueWiki" 品牌后缀（仅 ≤46 字符的短 title 加后缀）；
# 超长 title 保持不加后缀（避免 >60 字符被截断），此时 title==h1 属设计内豁免。
bad3 = []
for f in htmls:
    t = open(f, encoding='utf-8', errors='ignore').read()
    tm = re.search(r'<title>([^<]*)</title>', t)
    hm = re.search(r'<h1[^>]*>([^<]*)</h1>', t)
    if not tm or not hm:
        continue
    title = tm.group(1).strip()
    h1 = re.sub(r'<[^>]+>', '', hm.group(1)).strip()
    if title == h1 and ' | RogueWiki' not in title:
        # 豁免：base title >46 字符（设计上不加后缀）
        base = title.replace(' | RogueWiki', '')
        if len(base) <= 46:
            bad3.append((os.path.relpath(f, OUT_DIR), title))
check('title==h1 时必带品牌后缀（或超长豁免）', len(bad3) == 0, f'({len(bad3)} 页: {bad3[:3]})')

print('=== 4. 站内死链（out/ 内链 href 目标存在）===')
dead = []
for f in htmls:
    t = open(f, encoding='utf-8', errors='ignore').read()
    for href in re.findall(r'href="(/[^"#?]*)"', t):
        p = href.lstrip('/')
        # 兼容 CF clean URLs：目标可为 <path>.html 或 <path>/index.html 或 <path>
        ok = (os.path.exists(os.path.join(OUT_DIR, p + '.html'))
              or os.path.exists(os.path.join(OUT_DIR, p, 'index.html'))
              or os.path.exists(os.path.join(OUT_DIR, p)))
        if not ok:
            dead.append((os.path.relpath(f, OUT_DIR), href))
check('站内死链 0', len(dead) == 0, f'({len(dead)} 处: {dead[:3]})')

print('=== 5. 4xx 幽灵 URL 清零 ===')
ghost = ['/database/items', '/mechanics/crafting', '/tools/build-planner', '/tools/damage-calculator']
ghost_hits = []
for f in htmls:
    t = open(f, encoding='utf-8', errors='ignore').read()
    for g in ghost:
        if f'"{g}"' in t or f"'{g}'" in t:
            ghost_hits.append((os.path.relpath(f, OUT_DIR), g))
check('幽灵 URL 无站内引用', len(ghost_hits) == 0, f'({len(ghost_hits)} 处: {ghost_hits[:3]})')

print('=== 6. lint 门禁不回归 ===')
import subprocess
r = subprocess.run([sys.executable, os.path.join(ROOT, 'scripts', 'lint-guides.py')],
                   capture_output=True, text=True, cwd=ROOT)
ok = '0 错误' in r.stdout and r.returncode == 0
check('lint 0 错误', ok, f'(exit={r.returncode})')

print()
if failures:
    print(f'❌ 未通过: {len(failures)}/{len(checks)} 项')
    for f in failures:
        print(f'   - {f}')
    sys.exit(1)
else:
    print(f'✅ 全部通过: {len(checks)}/{len(checks)} 项')
    sys.exit(0)
