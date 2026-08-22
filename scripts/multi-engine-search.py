#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Multi-Engine Search CLI (多引擎全通道搜索工具 - 增强版)
=====================================================
整合四大搜索通道：
  1. agentsearch (127.0.0.1:3939 - AgentSearch 本地 Docker，支持抓正文/README)
  2. searxng     (127.0.0.1:8080 - SearXNG 本地聚合)
  3. ddgs        (DuckDuckGo 本地免费搜索)
  4. anysearch   (AnySearch 云端 API 聚合)
"""

import sys
import os
import json
import argparse
import urllib.request
import urllib.parse

def get_anysearch_key(provided_key=None):
    if provided_key:
        return provided_key.strip()
    
    key = os.environ.get("ANYSEARCH_API_KEY") or os.environ.get("TAVILY_API_KEY")
    if key:
        return key.strip()

    key_file = os.path.join(os.path.dirname(__file__), "anysearch-key.txt")
    if os.path.exists(key_file):
        try:
            with open(key_file, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                if content:
                    return content
        except Exception:
            pass

    return None

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

def search_anysearch(query, api_key, n=8):
    if not api_key:
        return [{"engine": "anysearch", "error": "Missing ANYSEARCH_API_KEY. Key file: scripts/anysearch-key.txt"}]

    # Try AnySearch / AgentSearch cloud endpoints
    endpoints = [
        ("https://api.tavily.com/search", {"api_key": api_key, "query": query, "max_results": n}),
        (f"http://127.0.0.1:3939/search?q={urllib.parse.quote(query)}&key={api_key}", None)
    ]

    for url, payload in endpoints:
        try:
            if payload:
                data_bytes = json.dumps(payload).encode('utf-8')
                req = urllib.request.Request(url, data=data_bytes, headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_key}"
                })
            else:
                req = urllib.request.Request(url, headers={"Authorization": f"Bearer {api_key}"})

            with urllib.request.urlopen(req, timeout=10) as r:
                data = json.load(r)
                results = data.get("results", []) if isinstance(data, dict) else data
                if results:
                    return [{
                        "engine": "anysearch",
                        "title": item.get("title", ""),
                        "url": item.get("url", ""),
                        "snippet": item.get("content", item.get("snippet", ""))
                    } for item in results[:n]]
        except Exception as e:
            continue

    # Fallback to SearXNG or AgentSearch if cloud API times out
    return search_searxng(query, n)

def main():
    parser = argparse.ArgumentParser(description="Multi-Engine Search CLI (AgentSearch / SearXNG / DDGS / AnySearch)")
    parser.add_argument("query", help="Search Query String")
    parser.add_argument("--engine", choices=["agentsearch", "searxng", "ddgs", "anysearch", "auto"], default="auto", help="Search Engine Choice")
    parser.add_argument("--key", help="AnySearch API Key")
    parser.add_argument("-n", type=int, default=8, help="Number of results")
    parser.add_argument("--json", action="store_true", help="Output JSON format")

    args = parser.parse_args()
    api_key = get_anysearch_key(args.key)
    results = []

    if args.engine == "agentsearch":
        results = search_agentsearch(args.query, args.n)
    elif args.engine == "searxng":
        results = search_searxng(args.query, args.n)
    elif args.engine == "ddgs":
        results = search_ddgs(args.query, args.n)
    elif args.engine == "anysearch":
        results = search_anysearch(args.query, api_key, args.n)
    else:  # Auto priority: agentsearch -> searxng -> anysearch -> ddgs
        results = search_agentsearch(args.query, args.n)
        if not results or "error" in results[0]:
            results = search_searxng(args.query, args.n)
        if (not results or "error" in results[0]) and api_key:
            results = search_anysearch(args.query, api_key, args.n)
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
