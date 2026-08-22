import pandas as pd
import glob
import os
import re
import math
import json

semrush_dir = '/home/piyoko/项目/roguewiki/longtail-seo-modeling/output'
semrush_kw_map = {}
evergreen_games_from_semrush = set()

for fpath in glob.glob(os.path.join(semrush_dir, '*.csv')):
    game_slug = os.path.basename(fpath).replace('.csv', '')
    evergreen_games_from_semrush.add(game_slug)
    try:
        df = pd.read_csv(fpath)
        for _, r in df.iterrows():
            w = str(r['word']).strip().lower()
            if w and w != 'nan':
                semrush_kw_map[w] = {
                    'game': game_slug,
                    'word': w,
                    'intent': str(r.get('intent', '信息')).strip(),
                    'volume': float(r.get('volume', 100)),
                    'kd': float(r.get('kd', 20.0)),
                    'tier': int(r.get('tier', 2)),
                    'build': str(r.get('build', 'yes')).strip().lower()
                }
    except:
        pass

content_dir = '/home/piyoko/项目/roguewiki/content'
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
                        
                        links = re.findall(r'\/[a-z0-9\-]+\/guides\/[a-z0-9\-]+', text)
                        for target in links:
                            inbound_links[target] = inbound_links.get(target, 0) + 1
                            
                        pages[path] = {
                            'filepath': filepath,
                            'game': game,
                            'slug': slug,
                            'title': title,
                            'main_kw': main_kw,
                            'word_count': len(text.split()),
                            'full_text': text.lower(),
                            'is_semrush_longtail': (game in evergreen_games_from_semrush)
                        }
                except:
                    pass

gsc_dir = '/home/piyoko/项目/roguewiki/reference/gsc/gsc-2026-08-20'
g_page = pd.read_csv(os.path.join(gsc_dir, '网页.csv'))
b_page = pd.read_csv('/home/piyoko/下载/roguewiki.com_PageTrafficReport_2026_8_20.csv')

def norm_url(u):
    if not isinstance(u, str): return '/'
    u = u.strip()
    u = re.sub(r'^https?://(www\.)?roguewiki\.com', '', u)
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

diagnostics = []

for path, meta in pages.items():
    if not meta['is_semrush_longtail']:
        continue
        
    main_kw_str = meta['main_kw'].lower()
    sem_data = semrush_kw_map.get(main_kw_str, {'intent': '信息', 'volume': 200.0, 'kd': 22.0, 'tier': 2})
    
    p_data = perf_dict.get(path, {'total_imp': 0, 'total_clicks': 0, 'joint_pos': 99.0})
    imp = p_data['total_imp']
    clicks = p_data['total_clicks']
    pos = p_data['joint_pos']
    in_links = inbound_links.get(path, 0)
    
    sem_vol = sem_data['volume']
    sem_kd = sem_data['kd']
    sem_tier = sem_data['tier']
    sem_intent = sem_data['intent']
    
    reasons = []
    actions = []
    
    title_head = meta['title'].lower()[:30]
    kw_words = [w for w in main_kw_str.split() if len(w) > 3]
    if kw_words and not any(w in title_head for w in kw_words):
        reasons.append('Semrush魔法主词未前置Title头部')
        actions.append(f'Title前置主词"{main_kw_str}"')
        
    if in_links < 3:
        reasons.append(f'站内内链阻断(仅{in_links}条)')
        actions.append('同游戏 Hub 页接入闭环内链')
        
    if sem_kd <= 25.0 and 4.0 <= pos <= 15.0:
        reasons.append(f'低KD黄金词({sem_kd:.0f}KD)腰部突围')
        actions.append('注入 AggregateRating 星级 Schema')
        
    vol_factor = math.log10(max(sem_vol, 10))
    kd_bonus = (30.0 - min(sem_kd, 30.0)) / 30.0
    tier_bonus = 1.3 if sem_tier == 1 else 1.0
    pos_factor = (16.0 - min(pos, 16.0)) / 16.0 if pos < 99 else 0.1
    link_loss = 1.0 - (min(in_links, 5) / 5.0)
    
    sem_opportunity = (vol_factor * 0.35 + pos_factor * 0.30 + kd_bonus * 0.20 + link_loss * 0.15) * tier_bonus
    
    diagnostics.append({
        'path': path,
        'filepath': meta['filepath'],
        'game': meta['game'],
        'title': meta['title'],
        'main_kw': main_kw_str,
        'sem_vol': sem_vol,
        'sem_kd': sem_kd,
        'sem_tier': sem_tier,
        'sem_intent': sem_intent,
        'imp': imp,
        'clicks': clicks,
        'pos': pos,
        'in_links': in_links,
        'sem_opportunity': sem_opportunity,
        'reasons': ' | '.join(reasons) if reasons else '长尾网同步',
        'actions': ' ➜ '.join(actions) if actions else '补充最新 2026 更新与 FAQ'
    })

diag_df = pd.DataFrame(diagnostics).sort_values(by='sem_opportunity', ascending=False).reset_index(drop=True)
top150 = diag_df.head(150)
print(f'成功计算全站 TOP {len(top150)} 个长尾常青树建议优化页面！')

top150.to_json('/tmp/semrush_longtail_top150.json', orient='records', force_ascii=False)
