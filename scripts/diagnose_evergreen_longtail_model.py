import pandas as pd
import glob
import os
import re
import math
from datetime import datetime

# ---------------------------------------------------------
# 长尾常青树游戏 (Evergreen Long-tail) SEO 批量诊断模型
# ---------------------------------------------------------

# 1. 常青树游戏白名单与属性定义 (生命周期 > 2年，稳健长尾)
EVERGREEN_GAMES = {
    'the-binding-of-isaac', 'terraria', 'stardew-valley', 'rimworld',
    'valheim', 'quasimorph', 'remnant-2', 'dayz', 'phasmophobia',
    'risk-of-rain-2', 'vampire-survivors', 'warframe', 'factorio',
    'conan-exiles', 'brotato', 'no-more-room-in-hell-2', 'endacopia',
    'iron-nest', 'avatar-legends-the-fighting-game'
}

# 微观意图关键词模式 (Micro-Intent Patterns)
MICRO_INTENT_PATTERNS = {
    'troubleshooting': r'\b(fix|crashing|error|black screen|stuck|not working|fps|lag)\b',
    'mechanics_formula': r'\b(formula|stack|chance|rate|drop|cap|multiplier|stats|calculator)\b',
    'modding_deck': r'\b(mod|mods|steam deck|controller|compatibility|install|patch)\b',
    'database_ids': r'\b(id|ids|code|codes|list|recipe|crafting|unlock|spindown)\b',
    'crossplay_saves': r'\b(crossplay|cross platform|save|location|transfer|multiplayer|coop|co-op)\b'
}

# 2. 扫描全站长尾攻略 md 文件，建立图谱与结构解析
content_dir = '/home/piyoko/项目/billsschedule2026/content'
pages = {}
inbound_links = {}

for root, _, files in os.walk(content_dir):
    for f in files:
        if f.endswith('.md'):
            rel = os.path.relpath(os.path.join(root, f), content_dir)
            parts = rel.split('/')
            if len(parts) >= 3 and parts[1] == 'guides':
                game = parts[0]
                slug = parts[2].replace('.md', '')
                path = f'/{game}/guides/{slug}'
                filepath = os.path.join(root, f)
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as file_obj:
                        text = file_obj.read()
                        
                        # 提取元数据
                        title_m = re.search(r'title:\s*["\']?([^"\n\r]+)["\']?', text)
                        desc_m = re.search(r'description:\s*["\']?([^"\n\r]+)["\']?', text)
                        kw_m = re.search(r'mainKeyword:\s*["\']?([^"\n\r]+)["\']?', text)
                        date_m = re.search(r'lastUpdated:\s*["\']?([^"\n\r]+)["\']?', text)
                        
                        title = title_m.group(1).strip() if title_m else ''
                        desc = desc_m.group(1).strip() if desc_m else ''
                        main_kw = kw_m.group(1).strip() if kw_m else ''
                        last_updated = date_m.group(1).strip() if date_m else ''
                        
                        # 统计内部链接引用 (Inbound Links)
                        links = re.findall(r'\/[a-z0-9\-]+\/guides\/[a-z0-9\-]+', text)
                        for target in links:
                            inbound_links[target] = inbound_links.get(target, 0) + 1
                            
                        # 检查图片与 Alt 规范
                        imgs = re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', text)
                        valid_alts = [alt for alt, src in imgs if len(alt.split()) >= 3]
                        
                        pages[path] = {
                            'filepath': filepath,
                            'game': game,
                            'slug': slug,
                            'title': title,
                            'desc': desc,
                            'main_kw': main_kw,
                            'last_updated': last_updated,
                            'word_count': len(text.split()),
                            'img_count': len(imgs),
                            'valid_alt_count': len(valid_alts),
                            'has_callout': bool(re.search(r'>\s*\[\!(tip|warning|note|critical)\]', text)),
                            'is_evergreen': game in EVERGREEN_GAMES
                        }
                except:
                    pass

# 3. 载入 GSC 与 Bing 数据，融合引擎真实表现
gsc_dir = '/home/piyoko/项目/billsschedule2026/reference/gsc/gsc-2026-08-20'
g_page = pd.read_csv(os.path.join(gsc_dir, '网页.csv'))
b_page = pd.read_csv('/home/piyoko/下载/billsschedule2026.online_PageTrafficReport_2026_8_20.csv')

def norm_url(u):
    if not isinstance(u, str): return '/'
    u = u.strip()
    u = re.sub(r'^https?://(www\.)?billsschedule2026\.online', '', u)
    u = u.split('#')[0].split('?')[0]
    return u.rstrip('/') or '/'

g_page['path'] = g_page['排名靠前的网页'].apply(norm_url)
g_page['g_imp'] = pd.to_numeric(g_page['展示'], errors='coerce').fillna(0).astype(int)
g_page['g_clicks'] = pd.to_numeric(g_page['点击次数'], errors='coerce').fillna(0).astype(int)
g_page['g_pos'] = pd.to_numeric(g_page['排名'], errors='coerce').fillna(99.0)

gp_agg = g_page.groupby('path').agg({'g_imp': 'sum', 'g_clicks': 'sum', 'g_pos': 'mean'}).reset_index()

b_page['path'] = b_page['页面'].apply(norm_url)
b_page['b_imp'] = pd.to_numeric(b_page['印象数'], errors='coerce').fillna(0).astype(int)
b_page['b_clicks'] = pd.to_numeric(b_page['点击次数'], errors='coerce').fillna(0).astype(int)
b_page['b_pos'] = pd.to_numeric(b_page['平均排名'], errors='coerce').fillna(99.0)

bp_agg = b_page.groupby('path').agg({'b_imp': 'sum', 'b_clicks': 'sum', 'b_pos': 'mean'}).reset_index()

perf = pd.merge(gp_agg, bp_agg, on='path', how='outer').fillna({
    'g_imp': 0, 'g_clicks': 0, 'g_pos': 99.0,
    'b_imp': 0, 'b_clicks': 0, 'b_pos': 99.0
})
perf['total_imp'] = perf['g_imp'] + perf['b_imp']
perf['total_clicks'] = perf['g_clicks'] + perf['b_clicks']

perf_dict = perf.set_index('path').to_dict(orient='index')

# 4. 常青树长尾诊断特征算法 (Evergreen Model Scoring & Classification)
diagnostics = []

for path, meta in pages.items():
    if not meta['is_evergreen']:
        continue
        
    p_data = perf_dict.get(path, {'total_imp': 0, 'total_clicks': 0, 'g_pos': 99.0, 'b_pos': 99.0})
    imp = p_data['total_imp']
    clicks = p_data['total_clicks']
    in_links = inbound_links.get(path, 0)
    
    title = meta['title']
    main_kw = meta['main_kw']
    word_count = meta['word_count']
    
    # 维度 1: 孤儿/弱连长尾特征 (Hub-Spoke Connectivity Score)
    link_score = 1.0 if in_links >= 3 else (0.4 if in_links >= 1 else 0.1)
    
    # 维度 2: 微观意图对齐度 (Micro-Intent Alignment)
    matched_intents = []
    for intent_name, pattern in MICRO_INTENT_PATTERNS.items():
        if re.search(pattern, title.lower()) or re.search(pattern, main_kw.lower()):
            matched_intents.append(intent_name)
    intent_richness = len(matched_intents)
    
    # 维度 3: 标题主词前置度 (Title Head Frontload Check)
    title_head = title.lower()[:30]
    kw_head_overlap = any(w in title_head for w in main_kw.lower().split() if len(w) > 3)
    
    # 归因逻辑与动作映射
    reasons = []
    actions = []
    
    if in_links < 2:
        reasons.append('孤儿长尾页(站内权重传递断裂)')
        actions.append('接入同游戏分类 Hub 与 Related Guides 闭环锚文本内链')
        
    if not kw_head_overlap:
        reasons.append('长尾主词未置顶 Title 头部')
        actions.append(f'重写 Title 将 "{main_kw}" 置于前 30 字符')
        
    if intent_richness == 0:
        reasons.append('缺失微观意图修饰词(Fix/Formula/ID/Mod/Coop)')
        actions.append('在 Title/H2 中显式扩充 2026/Fix/Formula 微观修饰词')
        
    if meta['valid_alt_count'] == 0 and meta['img_count'] > 0:
        reasons.append('图片 SERP 流量未激活(Alt泛词/留空)')
        actions.append('重写配图 Alt 为 [Game] [Item/Boss] [Details] 规则')
        
    if '2026' not in title:
        reasons.append('常青树更新标识未带有 2026')
        actions.append('在 Title 尾部注入 (2026 Update) 保持新鲜度')
        
    if not reasons:
        reasons.append('扩充深度长尾对照表')
        actions.append('补充数智化属性对比矩阵与 FAQ 模块')
        
    # 计算常青树优化优先总得分 (Evergreen Priority Index)
    # 权重 = (需求潜力 * 0.4) + (缺陷密度 * 0.4) + (内链提升空间 * 0.2)
    demand_factor = math.log10(imp + 10)
    defect_density = len(reasons) / 5.0
    priority_score = (demand_factor * 0.35 + defect_density * 0.45 + (1.0 - link_score) * 0.20)
    
    diagnostics.append({
        'path': path,
        'game': meta['game'],
        'title': title,
        'main_kw': main_kw,
        'imp': imp,
        'clicks': clicks,
        'in_links': in_links,
        'word_count': word_count,
        'priority_score': priority_score,
        'reasons': ' | '.join(reasons),
        'actions': ' ➜ '.join(actions)
    })

diag_df = pd.DataFrame(diagnostics).sort_values(by='priority_score', ascending=False).reset_index(drop=True)

print(f'=== 🌲 【常青树长尾游戏 SEO 诊断模型】计算出全站 TOP 12 待优化常青树页面 ===\n')
for idx, r in diag_df.head(12).iterrows():
    print(f'{idx+1:2d}. [{r["game"]}] {r["path"]}')
    print(f'    ▸ Title: "{r["title"]}" | 目标词: "{r["main_kw"]}"')
    print(f'    ▸ 指标: 入站内链 {r["in_links"]} 条 | 曝光 {r["imp"]} | 点击 {r["clicks"]} | 词数 {r["word_count"]} | 优先分 {r["priority_score"]:.3f}')
    print(f'    💡 缺陷归因: [{r["reasons"]}]')
    print(f'    🛠️ 建模优化方向: {r["actions"]}')
    print()
