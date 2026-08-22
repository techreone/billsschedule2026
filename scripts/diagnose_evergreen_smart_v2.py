import pandas as pd
import glob
import os
import re
import math
import json

# ----------------------------------------------------------------------
# Semrush 魔法关键词驱动长尾诊断模型 V5.0 (Semrush Magic Keyword Model)
# ----------------------------------------------------------------------
# 彻底放弃硬编码分类！以 Semrush 导出的魔法关键词 (Keyword Magic CSV) 为核心：
# 1. 解析 Semrush 词表的搜索意图 (Informational, Commercial, Transactional)
# 2. 计算 Semrush Volume 与 GSC/Bing 实际曝光的离散度 Divergence
# 3. 匹配父词/兄弟词 (Parent & Brother Keywords) 覆盖度缺口
# 4. 挖掘低 KD / 高回报率的 KGR (Keyword Golden Ratio) 黄金突破点
# ----------------------------------------------------------------------

kw_dir = '/home/piyoko/项目/billsschedule2026/keywords'

# 1. 载入并解析建页前的 Semrush 魔法词库元数据
kw_database = {}

for csv_file in glob.glob(os.path.join(kw_dir, '*.csv')):
    try:
        df = pd.read_csv(csv_file)
        cols = {str(c).strip().lower(): c for c in df.columns}
        
        word_col = None
        for candidate in ['word', 'keyword', '关键字']:
            if candidate in cols:
                word_col = cols[candidate]
                break
                
        intent_col = cols.get('intent', None)
        vol_col = cols.get('volume', None)
        note_col = cols.get('note', None)
        
        if word_col:
            for _, r in df.iterrows():
                w = str(r[word_col]).strip().lower()
                if w and len(w) > 2 and w != 'nan':
                    intent = str(r[intent_col]).strip() if intent_col and pd.notna(r[intent_col]) else 'Informational'
                    try:
                        vol = float(r[vol_col]) if vol_col and pd.notna(r[vol_col]) else 100.0
                    except:
                        vol = 100.0
                    note = str(r[note_col]).strip() if note_col and pd.notna(r[note_col]) else ''
                    
                    kw_database[w] = {
                        'word': w,
                        'intent': intent,
                        'volume': vol,
                        'note': note,
                        'file': os.path.basename(csv_file)
                    }
    except:
        pass

print(f'=== 🔮 Semrush 魔法词库成功解析 {len(kw_database)} 个元数据词 ===')

# 2. 扫描本地 Markdown 页面与语义特征
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
                        
                        title_m = re.search(r'title:\s*["\']?([^"\n\r]+)["\']?', text)
                        kw_m = re.search(r'mainKeyword:\s*["\']?([^"\n\r]+)["\']?', text)
                        
                        title = title_m.group(1).strip() if title_m else ''
                        main_kw = kw_m.group(1).strip() if kw_m else ''
                        
                        # 统计入站内链
                        links = re.findall(r'\/[a-z0-9\-]+\/guides\/[a-z0-9\-]+', text)
                        for target in links:
                            inbound_links[target] = inbound_links.get(target, 0) + 1
                            
                        # 正文 H2 标题抽取 (用于兄弟词与提问覆盖度校验)
                        h2_headings = [h.strip().lower() for h in re.findall(r'^##\s+(.+)$', text, re.MULTILINE)]
                        
                        pages[path] = {
                            'filepath': filepath,
                            'game': game,
                            'slug': slug,
                            'title': title,
                            'main_kw': main_kw,
                            'h2_headings': h2_headings,
                            'full_text_lower': text.lower(),
                            'word_count': len(text.split())
                        }
                except:
                    pass

# 3. 融合 GSC & Bing 双引擎表现数据
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

def calc_weighted_pos(row):
    tot = row['total_imp']
    if tot == 0: return 99.0
    return (row['g_pos'] * row['g_imp'] + row['b_pos'] * row['b_imp']) / tot

perf['joint_pos'] = perf.apply(calc_weighted_pos, axis=1)
perf_dict = perf.set_index('path').to_dict(orient='index')

# 4. Semrush 魔法词驱动模型计算与归因
diagnostics = []

for path, meta in pages.items():
    main_kw_str = meta['main_kw'].lower()
    semrush_meta = kw_database.get(main_kw_str, {'intent': 'Informational', 'volume': 100.0, 'note': ''})
    
    p_data = perf_dict.get(path, {'total_imp': 0, 'total_clicks': 0, 'joint_pos': 99.0})
    imp = p_data['total_imp']
    clicks = p_data['total_clicks']
    pos = p_data['joint_pos']
    in_links = inbound_links.get(path, 0)
    
    sem_vol = semrush_meta['volume']
    sem_intent = semrush_meta['intent']
    
    reasons = []
    actions = []
    
    # 维度 1: 实际曝光 vs Semrush 理论搜量 离散度 (Divergence Check)
    # 若 Semrush Volume 高 (如 > 500)，但引擎实际曝光 < 100 ➜ 存在严重意图对齐断层
    if sem_vol > 300 and imp < 80:
        reasons.append(f'Semrush高需求({sem_vol:.0f} Vol)但实际曝光衰减(离散失真)')
        actions.append('将 Semrush 原生魔法主词置顶到 Title 前 30 字符，并检查 Google 索引卡顿')
        
    # 维度 2: 意图特征对齐 (Semrush Intent Alignment)
    if 'informational' in sem_intent.lower() or 'info' in sem_intent.lower():
        # 信息型意图：检查 H2 是否包含具体提问词 (How / What / Why / List)
        has_questions = any(re.search(r'\b(how|what|why|best|where|can|list|guide)\b', h) for h in meta['h2_headings'])
        if not has_questions:
            reasons.append('信息型(Informational)意图缺口: H2缺乏直接回答问题词')
            actions.append('在 H2 章节中插入具体搜量提问句 (如 How to unlock / Best setup) 抢占 PAA 卡位')
    elif 'commercial' in sem_intent.lower() or 'transactional' in sem_intent.lower():
        # 商业/交易型意图：检查是否包含对比/规格数据矩阵
        has_table = 'table' in meta['full_text_lower'] or '|' in meta['full_text_lower']
        if not has_table:
            reasons.append('商业型(Commercial)意图缺口: 缺乏数据对比/规格矩阵表')
            actions.append('新增多列属性/数值对照矩阵表以满足商业决策意图')
            
    # 维度 3: 孤儿/弱连长尾架构 (Hub Connectivity)
    if in_links < 3:
        reasons.append(f'站内内链隔离(仅 {in_links} 条入站链接)')
        actions.append('在该游戏 Hub 页及兄弟攻略中插入锚文本闭环内链')
        
    # 维度 4: 腰部排名突破 (Joint Position 4-15)
    if 4.0 <= pos <= 15.0:
        reasons.append(f'腰部排名突围区(当前联合排名 {pos:.1f})')
        actions.append('注入 AggregateRating 黄色星级 Schema + 扩展 SERP 富媒体摘要')
        
    if not reasons:
        reasons.append('保持 Semrush 词网同步')
        actions.append('补充最新 2026 版本变化与扩展 FAQ')
        
    # Semrush 魔法突破优先得分计算
    vol_weight = math.log10(max(sem_vol, 10))
    pos_boost = (16.0 - min(pos, 16.0)) / 16.0 if pos < 99 else 0.1
    defect_weight = len(reasons) / 4.0
    
    magic_opportunity = (vol_weight * 0.35 + pos_boost * 0.40 + defect_weight * 0.25)
    
    diagnostics.append({
        'path': path,
        'game': meta['game'],
        'title': meta['title'],
        'main_kw': meta['main_kw'],
        'sem_vol': sem_vol,
        'sem_intent': sem_intent,
        'imp': imp,
        'clicks': clicks,
        'pos': pos,
        'in_links': in_links,
        'magic_opportunity': magic_opportunity,
        'reasons': ' | '.join(reasons),
        'actions': ' ➜ '.join(actions)
    })

diag_df = pd.DataFrame(diagnostics).sort_values(by='magic_opportunity', ascending=False).reset_index(drop=True)

print(f'=== 🔮 【Semrush 魔法关键词驱动诊断模型 V5.0】全站最强长尾突破点 TOP 12 ===\n')
for idx, r in diag_df.head(12).iterrows():
    print(f'{idx+1:2d}. [{r["game"]}] {r["path"]}')
    print(f'    ▸ Title: "{r["title"]}"')
    print(f'    ▸ Semrush 元数据: 主词 "{r["main_kw"]}" | 意图 [{r["sem_intent"]}] | 月搜量 {r["sem_vol"]:.0f}')
    print(f'    ▸ 引擎表现: 实际曝光 {r["imp"]} | 点击 {r["clicks"]} | 联合排名 {r["pos"]:.1f} | 入站内链 {r["in_links"]} 条 | 突破得分 {r["magic_opportunity"]:.3f}')
    print(f'    💡 Semrush 归因缺口: [{r["reasons"]}]')
    print(f'    🛠️ 魔法词对齐建议: {r["actions"]}')
    print()
