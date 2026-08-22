# billsschedule2026.xyz — 趋势爆发新词工作流 (WORKFLOW.md)

> **最高定位**：本项目属于 **趋势爆发新词 (Trending Keywords / 新词占坑策略)**，与老游戏常青长尾词有本质区别！
> **核心区别**：
> - **无 Semrush 依赖**：新词窗口期内 Semrush 尚无历史数据（全为 0 或未收录），必须放弃 Semrush！
> - **数据源**：全盘依赖 **Google Trends (Top 热门词 / Rising 飙升词 Breakout)** + **Google Suggest 实时下拉框**。
> - **精简爆破**：不追求成百上千个无用长尾词，而是聚焦 5~15 个真正有暴发热度的极高意图核心词，打爆首页 + 3 个顶级子页。

---

## 0. 趋势新词统一 v3 流水线 (10 大节点)

```
① 趋势选词 (Trends) Google Trends 抓取 Rising 飙升词 (Breakout) + Google Suggest 6 张下拉框截屏
                    → 筛选出 5-15 个真正具备暴发搜索量的黄金新词（放弃 Semrush）
② 意图识别 (先行)★ 对【每一个】选定的趋势词独立深拆 7-10 条意图，写进 INTENT-DECOMPOSITION.md ——
                    揣测球迷在窗口期内最迫切想知道的答案（如 开球时间/电视台/直播/PDF打印）
③ 页面路由收敛     不搞膨胀式的多页面堆砌，按照“一页一词”收敛为 4 个精品 SSG 路由
                    （/ 首页主打, /where-to-watch 频道, /preseason-schedule 季前赛, /printable-schedule PDF）
④ 按意图聚类       高热度主词独占首页，特定搜索意图（播放台/PDF/季前赛）各自独立成子页
⑤ 背景理解 ★       动笔前通过多通道搜索 CLI (`scripts/multi-engine-search.py`) 搜该主词 3-5 次，
                    吃透 2026 赛季最新赛事安排、电视台版权与广播频道，消除 AI 幻觉
⑥ 逐意图写作 ★     GUIDE-WRITING.md 深度版：每个意图 = 一个 H2/H3 实质章节，讲透背景与细节；
                    搜索量不省，关键数值 ≥2 源一致才落笔；
                    ★ 正文自然引用 ≥3 处权威外链（NFL.com / CBS / ESPN / Wikipedia）——提升 AI 检索引用权重；
                    ★ 严禁引用竞争新站
⑦ sources 追溯      在 reference/guides/{slug}-sources.md 记录参考 URL 与数据结论（可追溯）
⑧ 注册 + 配图      图片本地化：`node scripts/fetch-image.mjs <url> --alt "..." --game bills` 转 WebP
                    → 运行 `python3 scripts/dedupe-images.py` 感知哈希去重（相似 >0.90 视为重复）
                    → IMAGE-ASSETS 索引更新
⑨ 对标审查        对标 checklist 自审 + 用户终审（不合格退回重修）
⑩ lint 门禁上线 ★   `python3 scripts/lint-guides.py` 必须 0 错误（覆盖：frontmatter 完整性、
                    展示图唯一、图片引用/去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）
                    → `npm run build` 静态构建绿 → `out/` 验证 → 部署与 IndexNow 快速提交
```

---

## 1. 趋势新词 vs 常青长尾词 差异对照表

| 维度 | 趋势新词（本项目：billsschedule2026） | 常青长尾词（如老游戏词） |
| :--- | :--- | :--- |
| **数据源** | **Google Trends (Top/Rising) + Google Suggest 截屏** | Semrush 导出历史 CSV |
| **Semrush 依赖** | ❌ **完全不依赖** (新词在 Semrush 显示为 0) | ✅ 依赖 Volume × KD 矩阵 |
| **词库规模** | 精简暴发 (5 ~ 15 个高意图核心词) | 庞大海量 (100 ~ 1000 个长尾词) |
| **页面策略** | 精品少页 (4 个高质 SSG 路由，集中权重打爆) | 批量建页 (15 ~ 50 个长尾页) |
| **时效性** | 极强 (赛季开打前/进行中，Last Updated 随动态更新) | 静态 (建好后长期不改) |

---

## 2. 写作与权威外链纪律

- **单篇字数门槛**：单篇 ≥ 2000 ~ 2500 字，按意图展开写透。
- **引用权威源**：正文必须自然包含 ≥3 处权威外链（如 `nfl.com`, `espn.com`, `buffalobills.com`, `wikipedia.org`），提升 Google E-E-A-T 评分与 AI 检索引用权重。

---

## 3. Lint 门禁与构建发布 (Lint Gatekeeper)

在执行 `npm run build` 之前，无条件跑通门禁脚本：

```bash
# 1. 运行全站 0 错误门禁自检
python3 scripts/lint-guides.py

# 2. 门禁全绿后执行静态构建
npm run build

# 3. 提交 IndexNow 极速收录
node scripts/submit-indexnow.mjs
```
