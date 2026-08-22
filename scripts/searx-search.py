#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SearXNG 免费搜索 CLI（本地 127.0.0.1:8080，零成本）
=====================================================
长尾游戏生产专用免费搜索工具（禁 anysearch/tavily 付费引擎）。
绕过 MCP 工具的 bug，直接 curl 本地 SearXNG（google cse + wikipedia 等引擎聚合）。

用法：
  python3 scripts/searx-search.py "rimworld best mods guide"
  python3 scripts/searx-search.py "hollow knight silksong styx" -n 10
  python3 scripts/searx-search.py "balatro planet cards" --json
  python3 scripts/searx-search.py --loop "词1|词2|词3"    # 批量搜索（| 分隔）

依赖：SearXNG 服务运行在 127.0.0.1:8080（clash 代理 7897 需在线）
"""
import argparse
import json
import sys
import urllib.parse
import urllib.request

SEARXNG = "http://127.0.0.1:8080/search"


def search(query, n=8):
    url = f"{SEARXNG}?q={urllib.parse.quote(query)}&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            data = json.load(r)
    except Exception as e:
        print(f"⚠️ SearXNG 失败（服务未运行？clash 代理没开？）: {e}", file=sys.stderr)
        return []
    results = []
    for item in data.get("results", [])[:n]:
        results.append({
            "title": item.get("title", ""),
            "url": item.get("url", ""),
            "content": item.get("content", ""),
            "engine": item.get("engine", ""),
        })
    return results


def main():
    ap = argparse.ArgumentParser(description="SearXNG 免费搜索")
    ap.add_argument("query", help="搜索词")
    ap.add_argument("-n", type=int, default=8, help="结果数（默认 8）")
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    ap.add_argument("--loop", action="store_true", help="批量搜索（query 用 | 分隔多个词）")
    args = ap.parse_args()

    if args.loop:
        queries = [q.strip() for q in args.query.split("|") if q.strip()]
        for q in queries:
            print(f"\n{'='*60}\n### {q}")
            for r in search(q, args.n):
                print(f"  [{r['engine']}] {r['title'][:70]}")
                print(f"    {r['url']}")
                if r['content']:
                    print(f"    {r['content'][:150]}")
        return

    results = search(args.query, args.n)
    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=1))
        return
    for r in results:
        print(f"[{r['engine']}] {r['title'][:70]}")
        print(f"  {r['url']}")
        if r['content']:
            print(f"  {r['content'][:150]}")


if __name__ == "__main__":
    main()
