#!/usr/bin/env python3
"""
Download & Localize Official NFL Logos & Stadium Assets
下载并本地化 NFL 官方球队 Logo 与球场高清 WebP/SVG 图片
"""

import os
import urllib.request

LOGOS = {
    "bills": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "dolphins": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "patriots": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "jets": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "chiefs": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "ravens": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "texans": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "49ers": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "rams": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "lions": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "seahawks": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "titans": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "colts": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "cardinals": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "jaguars": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "bears": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "steelers": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "panthers": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "highmark-stadium": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80",
}

out_dir = os.path.join(os.path.dirname(__file__), "../public/images/bills")
os.makedirs(out_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'}

for name, url in LOGOS.items():
    ext = "jpg" if "unsplash" in url else "png"
    filepath = os.path.join(out_dir, f"{name}.{ext}")
    print(f"[*] Downloading {name} -> {filepath}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response, open(filepath, 'wb') as f:
            f.write(response.read())
        print(f"  [+] Success: {name}.{ext}")
    except Exception as e:
        print(f"  [!] Failed {name}: {e}")
