# billsschedule2026.xyz — 全局规则与 v3 统一工作流 (AGENTS.md)

> 本文件是 `billsschedule2026.xyz` 项目的最高指导规范。**所有 Agent 与协作流程必须无条件严格遵循本文件**。

---

## ⚠️ 最高纪律与红线

1. **绝对禁止急躁写代码/建水页**：
   - 任何页面动笔前，必须完成 **Sitemap 词根拓扑建模、宽词库收集、意图先行深拆 (一词 10 意图)**。
   - **无主打关键词，绝对不新建页面**（坚决捍卫“一页一词”铁律，防止 Thin Content 薄弱内容与爬虫预算浪费）。

2. **强制使用多通道实时搜索引擎 (`scripts/multi-engine-search.py`)**：
   - 动笔撰写任何章节前，**必须运行多通道搜索 CLI (`agentsearch` / `searxng` / `anysearch` / `ddgs`)** 查实 2026 赛季最新数据，关键数值需 ≥2 源一致才落笔。严禁依赖模型非实时记忆。

3. **图片获取与本地化去重规范 (`scripts/fetch-image.mjs` & `dedupe-images.py`)**：
   - 图片必须由 Agent 自动获取：通过 `node scripts/fetch-image.mjs <url> --alt "..." --game bills` 下载并走代理本地化保存至 `public/images/`，统一转为 WebP 格式。
   - 运行 `python3 scripts/dedupe-images.py` 感知哈希去重，确保展示图同站唯一。

4. **上线与构建 Lint 门禁 (`scripts/lint-guides.py`)**：
   - 在执行 `npm run build` 前，**必须通过 `python3 scripts/lint-guides.py` 门禁自检 0 错误**（覆盖：frontmatter 完整性、展示图唯一、图片去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）。

5. **技术栈红线**：
   - **纯静态 SSG 导出**（`output: 'export'`）：所有页面必须为预渲染静态 HTML，确保 Cloudflare Pages / Vercel 零成本部署与秒级加载。
   - **视觉美学标准**：遵守 Bleacher Report (B/R) 级别的暗黑体育媒体 UI 规范。使用静态高质感 Tag、绝不使用浮夸/廉价的 `animate-ping` 或 `animate-pulse` 动效。
   - **品牌独立性**：任何页面和组件必须使用独立站品牌 `BS26`（对应 `billsschedule2026.xyz`）。

---

## v3 统一工业级流水线 (10 大节点，顺序不可颠倒)

```
① 词库收集 (宽)    Google Trends / Suggest + 黄金后缀组装 + 排列组合 + 疑问式 + 对标大站反查
                    → 形成精准词库候选池
② 意图识别 (先行)★ 对【每一个】候选词独立深拆 3-10 条意图，写进 INTENT-DECOMPOSITION.md ——
                    不是按词面判断，而是揣测"搜这个词的人到底想要什么答案"
③ 质量分级 (通用)  Tier 算法 (volume×KD 矩阵) 分级：
                    Tier 1-2 = 高质主词 → 独立建页 (一个萝卜坑一篇，绝不揉进 combo)；
                    Tier 3-5 = 附属词 (FAQ / H2 章节 / 内链 combo)
④ 按意图聚类        发生在意图拆解【之后】——高热度高质词各占一页，意图相似的低质词归入主词簇
⑤ 背景理解 ★       动笔前通过多通道搜索 CLI (`scripts/multi-engine-search.py`) 搜该赛程主词 3-5 次，
                    吃透 2026 赛季赛程规则、电视台版权、广播频道与球场细节，彻底消除 AI 幻觉
⑥ 逐意图写作 ★     GUIDE-WRITING.md 深度版：每个意图 = 一个 H2/H3 实质章节，讲透背景、开球时间、
                    频道分配与赛事细节；搜索量不省，关键数值 ≥2 源一致才落笔；
                    ★ 正文引用权威外链（NFL.com / CBS / ESPN / Wikipedia）——提升 AI 检索引用权重；
                    ★ 严禁引用竞争新站
⑦ sources 追溯      在 reference/guides/{slug}-sources.md 记录参考 URL 与数据结论（可追溯）
⑧ 注册 + 配图      图片本地化：`node scripts/fetch-image.mjs <url> --alt "..." --game bills` 转 WebP
                    → 运行 `python3 scripts/dedupe-images.py` 感知哈希去重（相似 >0.90 视为重复）
                    → IMAGE-ASSETS 索引更新
⑨ 对标审查        对标 checklist 自审 + 用户终审（不合格退回重修）
⑩ lint 门禁上线 ★   `python3 scripts/lint-guides.py` 必须 0 错误（覆盖：frontmatter 完整性、
                    展示图唯一、图片引用/去重、正文内链 ≥5、权威外链 ≥3、callout/配图、死链）
                    → `npm run build` 静态构建绿 → `out/` 验证 → 提交与 IndexNow 提交
```

---

## 自动化工具脚本清单 (`scripts/`)

| 脚本文件 | 工具用途 | 执行命令 |
| :--- | :--- | :--- |
| `scripts/multi-engine-search.py` | 本地多搜索引擎 (AgentSearch/SearXNG/AnySearch/DDGS) 实时检索 | `python3 scripts/multi-engine-search.py "<query>"` |
| `scripts/fetch-image.mjs` | 图片抓取、代理下载与自动 WebP 本地化 | `node scripts/fetch-image.mjs <url> --alt "..." --game bills` |
| `scripts/dedupe-images.py` | 感知哈希去重，防止配图重复 | `python3 scripts/dedupe-images.py` |
| `scripts/lint-guides.py` | 全站 SEO、死链与 Markdown 质量门禁自检 | `python3 scripts/lint-guides.py` |
| `scripts/check-seo-audit.py` | SEO 结构审计与关键词密度检查 | `python3 scripts/check-seo-audit.py` |
| `scripts/check-external-links.mjs` | 外部权威链接 404 检测 | `node scripts/check-external-links.mjs` |
| `scripts/submit-indexnow.mjs` | IndexNow 引擎快速收录提交 | `node scripts/submit-indexnow.mjs` |
