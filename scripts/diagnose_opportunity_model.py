import pandas as pd
import glob
import os
import re
import math

# 1. 搜集建页前词库
kw_files = glob.glob('/home/piyoko/项目/billsschedule2026/keywords/*.csv')
kw_data = []

for f in kw_files:
    try:
        df = pd.read_csv(f)
        cols = {str(c).strip(): c for c in df.columns}
        word_col = None
        for candidate in ['word', 'Keyword', 'keyword', '关键字']:
            if candidate in cols:
                word_col = cols[candidate]
                break
        if word_col:
            for _, r in df.iterrows():
                w = str(r[word_col]).strip().lower()
                if w and len(w) > 2 and w != 'nan':
                    game = str(r.get('game', '')).strip().lower()
                    kw_data.append({'word': w, 'game': game, 'file': os.path.basename(f)})
    except Exception:
        pass

kw_df = pd.DataFrame(kw_data).drop_duplicates(subset=['word'])

# 2. 载入 Google GSC 与 Bing 数据
gsc_dir = '/home/piyoko/项目/billsschedule2026/reference/gsc/gsc-2026-08-20'
g_page = pd.read_csv(os.path.join(gsc_dir, '网页.csv'))

b_kw_file = '/home/piyoko/下载/billsschedule2026.online_KeywordReport_2026_8_20.csv'
b_page_file = '/home/piyoko/下载/billsschedule2026.online_PageTrafficReport_2026_8_20.csv'

b_page = pd.read_csv(b_page_file)

def norm_url(u):
    if not isinstance(u, str): return '/'
    u = u.strip()
    u = re.sub(r'^https?://(www\.)?billsschedule2026\.online', '', u)
    u = u.split('#')[0].split('?')[0]
    u = u.rstrip('/')
    return u or '/'

g_page['path'] = g_page['排名靠前的网页'].apply(norm_url)
g_page['g_clicks'] = pd.to_numeric(g_page['点击次数'], errors='coerce').fillna(0).astype(int)
g_page['g_imp'] = pd.to_numeric(g_page['展示'], errors='coerce').fillna(0).astype(int)
g_page['g_pos'] = pd.to_numeric(g_page['排名'], errors='coerce').fillna(99.0)

gp_agg = g_page.groupby('path').agg({'g_imp': 'sum', 'g_clicks': 'sum', 'g_pos': 'mean'}).reset_index()

b_page['path'] = b_page['页面'].apply(norm_url)
b_page['b_clicks'] = pd.to_numeric(b_page['点击次数'], errors='coerce').fillna(0).astype(int)
b_page['b_imp'] = pd.to_numeric(b_page['印象数'], errors='coerce').fillna(0).astype(int)
b_page['b_pos'] = pd.to_numeric(b_page['平均排名'], errors='coerce').fillna(99.0)

bp_agg = b_page.groupby('path').agg({'b_imp': 'sum', 'b_clicks': 'sum', 'b_pos': 'mean'}).reset_index()

joint = pd.merge(gp_agg, bp_agg, on='path', how='outer').fillna({
    'g_imp': 0, 'g_clicks': 0, 'g_pos': 99.0,
    'b_imp': 0, 'b_clicks': 0, 'b_pos': 99.0
})

joint['total_imp'] = (joint['g_imp'] + joint['b_imp']).astype(int)
joint['total_clicks'] = (joint['g_clicks'] + joint['b_clicks']).astype(int)

def calc_weighted_pos(row):
    tot = row['total_imp']
    if tot == 0: return 99.0
    return (row['g_pos'] * row['g_imp'] + row['b_pos'] * row['b_imp']) / tot

joint['joint_pos'] = joint.apply(calc_weighted_pos, axis=1)

# 3. 解析本地 md 文件的现存 Title / H1 状态
content_dir = '/home/piyoko/项目/billsschedule2026/content'
page_meta = {}

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
                        page_meta[path] = {
                            'filepath': filepath,
                            'title': title,
                            'main_kw': main_kw,
                            'word_count': len(text.split())
                        }
                except:
                    pass

# 4. 诊断逻辑模型
diagnostics = []

for idx, r in joint.iterrows():
    path = r['path']
    if path not in page_meta:
        continue
    meta = page_meta[path]
    title = meta['title']
    main_kw = meta['main_kw']
    total_imp = r['total_imp']
    clicks = r['total_clicks']
    pos = r['joint_pos']
    b_imp = r['b_imp']
    
    diag_type = []
    action_plan = []
    
    # 规则 A: Title 缺乏主词前置对齐 (Title Alignment Check)
    kw_words = set(main_kw.lower().split()) if main_kw else set()
    title_words = set(title.lower().split())
    overlap = len(kw_words.intersection(title_words))
    alignment_score = overlap / max(len(kw_words), 1)
    
    if alignment_score < 0.6:
        diag_type.append('Title与建页主词未前置对齐')
        action_plan.append(f'将主词 "{main_kw}" 前置至 Title 头部')
        
    # 规则 B: Bing 高曝光但没点击 (IndexNow API 需刷新)
    if b_imp > 80 and clicks < 5:
        diag_type.append('Bing索引暂挂卡顿')
        action_plan.append('发起 IndexNow 广播促使 Bing 秒刷')
        
    # 规则 C: 排名在 4-12 位，需要提升 CTR 与丰富组件
    if 4.0 <= pos <= 12.0 and total_imp < 500:
        diag_type.append('腰部排名潜力未释放')
        action_plan.append('注入 AggregateRating 黄色打分星级 + 丰富 FAQ 模块')
        
    # 规则 D: 高展现 0 点击
    if total_imp >= 100 and clicks == 0:
        diag_type.append('高展现0点击(SERP摘要缺乏吸引力)')
        action_plan.append('重写 Description (增加直答数字/属性/平台) 提升 CTR')
        
    if not diag_type:
        diag_type.append('长尾词拓展')
        action_plan.append('补充长尾对比表格与同游戏分类 Hub 环形内链网')
        
    # 综合优先评分 (Opportunity Score)
    imp_score = math.log10(total_imp + 1) if total_imp > 0 else 0
    pos_score = (15 - min(pos, 15)) / 15.0 if pos < 99 else 0.1
    opp_score = (imp_score * 0.5 + pos_score * 0.5) * (1.6 if 'Title与建页主词未前置对齐' in diag_type else 1.0)
    
    diagnostics.append({
        'path': path,
        'title': title,
        'main_kw': main_kw,
        'total_imp': total_imp,
        'clicks': clicks,
        'pos': pos,
        'opp_score': opp_score,
        'diag_type': ' | '.join(diag_type),
        'action_plan': ' ➜ '.join(action_plan)
    })

diag_df = pd.DataFrame(diagnostics).sort_values(by='opp_score', ascending=False).reset_index(drop=True)

print('=== 🎯 【多维融合诊断模型】计算出全站最值得优化的页面 TOP 15 ===')
for idx, r in diag_df.head(15).iterrows():
    print(f'{idx+1:2d}. {r["path"]}')
    print(f'    ▸ 页面 Title: "{r["title"]}" | 目标词: "{r["main_kw"]}"')
    print(f'    ▸ 引擎数据: 展示 {r["total_imp"]} | 点击 {r["clicks"]} | 联合排名 {r["pos"]:.1f} | 优先得分 {r["opp_score"]:.3f}')
    print(f'    💡 归因诊断: [{r["diag_type"]}]')
    print(f'    🛠️ 优化方向: {r["action_plan"]}')
    print()
