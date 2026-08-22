#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Multi-Engine Search CLI (多引擎全通道搜索工具)
=====================================================
整合四大搜索通道：
  1. agentsearch (127.0.0.1:3939 - AgentSearch 本地 Docker，支持抓正文/README)
  2. searxng     (127.0.0.1:8080 - SearXNG 本地聚合)
  3. ddgs        (DuckDuckGo 本地免费搜索)
  4. anysearch   (云端聚合兜底)

用法：
  python3 scripts/multi-engine-search.py "buffalo bills schedule 2026" --engine agentsearch
  python3 scripts/multi-engine-search.py "what channel is bills game on today" --engine searxng
  python3 scripts/multi-engine-search.py "buffalo bills preseason dates" --engine ddgs
  python3 scripts/multi-engine-search.py "bills radio broadcast wgr 550" --engine auto
"""

import sys
import os
import json
import argparse
import urllib.request
import urllib.parse

def search_searxng(query, n=8):
    url = f"http://127.0.0.1:8080/search?q={urllib.parse.quote(query)}&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.load(r)
            return [{
                "engine": "searxng",
                "title": item.get("title", ""),
                "url": item.get("url", ""),
                "snippet": item.get("content", "")
            } for item in data.get("results", [])[:n]]
    except Exception as e:
        return [{"engine": "searxng", "error": str(e)}]

def search_agentsearch(query, n=8):
    url = f"http://127.0.0.1:3939/search?q={urllib.parse.quote(query)}&limit={n}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.load(r)
            results = data.get("results", []) if isinstance(data, dict) else data
            return [{
                "engine": "agentsearch",
                "title": item.get("title", ""),
                "url": item.get("url", ""),
                "snippet": item.get("snippet", item.get("content", ""))
            } for item in results[:n]]
    except Exception as e:
        return [{"engine": "agentsearch", "error": str(e)}]

def search_ddgs(query, n=8):
    try:
        from duckduckgo_search import DDGS
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=n))
            return [{
                "engine": "ddgs",
                "title": item.get("title", ""),
                "url": item.get("href", item.get("url", "")),
                "snippet": item.get("body", item.get("snippet", ""))
            } for item in results]
    except Exception as e:
        return [{"engine": "ddgs", "error": str(e)}]

def main():
    parser = argparse.ArgumentParser(description="Multi-Engine Search CLI")
    parser.add_argument("query", help="Search Query String")
    parser.add_argument("--engine", choices=["agentsearch", "searxng", "ddgs", "auto"], default="auto", help="Search Engine Choice")
    parser.add_argument("-n", type=int, default=8, help="Number of results")
    parser.add_argument("--json", action="store_true", help="Output JSON format")

    args = parser.parse_args()
    results = []

    if args.engine == "agentsearch":
        results = search_agentsearch(args.query, args.n)
    elif args.engine == "searxng":
        results = search_searxng(args.query, args.n)
    elif args.engine == "ddgs":
        results = search_ddgs(args.query, args.n)
    else:  # Auto priority mode: agentsearch -> searxng -> ddgs
        results = search_agentsearch(args.query, args.n)
        if not results or "error" in results[0]:
            results = search_searxng(args.query, args.n)
        if not results or "error" in results[0]:
            results = search_ddgs(args.query, args.n)

    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
    else:
        print(f"=== Multi-Engine Search Results [{args.engine.upper()}] ===")
        for r in results:
            if "error" in r:
                print(f"⚠️ Engine {r['engine']} error: {r['error']}")
            else:
                print(f"[{r['engine']}] {r['title']}")
                print(f"  URL: {r['url']}")
                if r['snippet']:
                    print(f"  Snippet: {r['snippet'][:150]}...")
                print()

if __name__ == "__main__":
    main()
