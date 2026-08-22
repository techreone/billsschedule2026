#!/usr/bin/env python3
"""
Sitemap Query Root Modeler (Sitemap 词根与路径拓扑建模脚本 - 递归增强版)
用于抓取/解析对标赛程与赛事站点的 Sitemap，自动建模分析出大站的查询词根（Query Roots）与路由骨架。
"""

import sys
import os
import re
import json
import urllib.request
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
from collections import Counter

def fetch_sitemap_urls(sitemap_url, depth=0, max_depth=1):
    """抓取并解析 Sitemap XML 中的所有 URL 列表（支持子 sitemap 递归）"""
    print(f"[*] Fetching Sitemap (depth {depth}): {sitemap_url}")
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'}
    req = urllib.request.Request(sitemap_url, headers=headers)
    
    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read()
    except Exception as e:
        print(f"[!] Error fetching sitemap {sitemap_url}: {e}")
        return []

    urls = []
    sub_sitemaps = []

    try:
        # Regex extraction to handle all XML namespaces & variants
        locs = re.findall(r'<loc>(.*?)</loc>', content.decode('utf-8', errors='ignore'))
        for loc in locs:
            loc_str = loc.strip()
            if loc_str.endswith('.xml') or 'sitemap' in loc_str:
                sub_sitemaps.append(loc_str)
            else:
                urls.append(loc_str)
    except Exception as e:
        print(f"[!] Error parsing sitemap content: {e}")

    # Recursive fetch sub-sitemaps
    if depth < max_depth and sub_sitemaps:
        print(f"[*] Found {len(sub_sitemaps)} sub-sitemaps. Recurse fetching top 5...")
        for sub in sub_sitemaps[:5]:
            urls.extend(fetch_sitemap_urls(sub, depth=depth+1, max_depth=max_depth))

    return urls

def analyze_query_roots(urls):
    """分析 URL 路径，提取词根 Segment 与路由拓扑模式"""
    segment_counter = Counter()
    pattern_counter = Counter()
    token_counter = Counter()

    for url in urls:
        path = urlparse(url).path.strip('/')
        if not path:
            continue

        segments = path.split('/')
        tokens = re.split(r'[-_/]', path.lower())
        
        # Filter out common noise & digits
        cleaned_tokens = [t for t in tokens if len(t) > 2 and not t.isdigit() and t not in ['http', 'https', 'www', 'com', 'html', 'amp']]
        token_counter.update(cleaned_tokens)

        if len(segments) == 1:
            segment_counter[segments[0]] += 1
        elif len(segments) > 1:
            pattern = f"/{segments[0]}/[{segments[1]}]"
            pattern_counter[pattern] += 1

    return {
        "total_urls_analyzed": len(urls),
        "top_query_tokens": token_counter.most_common(50),
        "top_url_segments": segment_counter.most_common(30),
        "top_route_patterns": pattern_counter.most_common(20),
    }

def main():
    target_sitemap = sys.argv[1] if len(sys.argv) > 1 else "https://www.fbschedules.com/sitemap_index.xml"
    urls = fetch_sitemap_urls(target_sitemap)
    
    if not urls:
        print("[!] No URLs retrieved. Exiting.")
        return

    model_results = analyze_query_roots(urls)
    
    # Save output
    output_dir = os.path.join(os.path.dirname(__file__), "../output")
    os.makedirs(output_dir, exist_ok=True)
    
    json_path = os.path.join(output_dir, "query_roots_analysis.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(model_results, f, indent=2, ensure_ascii=False)

    md_path = os.path.join(output_dir, "SITEMAP-QUERY-ROOTS-REPORT.md")
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(f"# Sitemap Query Roots Analysis Report\n\n")
        f.write(f"- Target Sitemap: `{target_sitemap}`\n")
        f.write(f"- Total URLs Analyzed: `{model_results['total_urls_analyzed']}`\n\n")
        
        f.write(f"## Top Query Tokens (核心高频词根)\n\n")
        f.write(f"| Token (词根) | Count (频次) | Category (推荐分类) |\n")
        f.write(f"| :--- | :--- | :--- |\n")
        for token, count in model_results["top_query_tokens"][:25]:
            f.write(f"| `{token}` | {count} | Query Root Token |\n")
        
        f.write(f"\n## Top Route Patterns (路由拓扑模式)\n\n")
        for pattern, count in model_results["top_route_patterns"][:15]:
            f.write(f"- `{pattern}` ({count} pages)\n")

    print(f"\n[+] Full analysis report saved to:\n  - JSON: {json_path}\n  - MD: {md_path}")

if __name__ == "__main__":
    main()
