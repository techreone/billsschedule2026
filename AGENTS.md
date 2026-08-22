# billsschedule2026.xyz — 项目全局规则与工作流（AGENTS.md）

> 本文件是 `billsschedule2026.xyz`（以及后续赛事/赛程新词站群）的最高指导规范。**所有 Agent 与协作流程必须严格遵循本文件**。

---

## ⚠️ 最高纪律与红线

1. **绝对禁止急躁写代码/建水页**：
   - 任何页面动笔前，必须先完成**数据验证、词根拓扑建模、意图深拆**。
   - **无主打关键词，绝对不新建页面**（坚决捍卫“一页一词”铁律，防止 Thin Content 薄弱内容与爬虫预算浪费）。

2. **技术栈红线**：
   - **纯静态 SSG 导出**（`output: 'export'`）：所有页面必须为预渲染静态 HTML，确保 Cloudflare Pages / Vercel 零成本部署与秒级加载。
   - **视觉美学标准**：遵守 Bleacher Report (B/R) 级别的暗黑体育媒体 UI 规范。使用静态高质感 Tag、绝不使用浮夸/廉价的 `animate-ping` 或 `animate-pulse` 动效。
   - **品牌独立性**：任何页面和组件必须使用独立站品牌 `BS26`（对应 `billsschedule2026.xyz`），严禁硬编码第三方商标。

---

## 核心工作流：从 Sitemap 建模到内容上线（12 步统一流水线）

```
① Sitemap 建模 ★   运行 longtail-seo-modeling 脚本抓取对标站 Sitemap → 提取 Query Root 查询词根
② 数据/联想 ★     通过 Google Suggest / Trends 对核心词（如 Bills Schedule）做横向联想扩展
③ 重组归堆 ★       把联想词按【主题实体】（如 赛程表/频道/季前赛/门票/轮空周）归堆
④ 意图深拆 ★       对每个目标词深拆 3-10 条用户核心疑问（作为页面 H2/H3 章节骨架）
⑤ 聚类与选词       优先选择 KD<29 且有爆发现象的新词；高质词单独建页，低质词作为 FAQ/长尾段落
⑥ 内链骨架定义 ★   在路由规划阶段即定义互链关系（所有长尾页必带面包屑与指向首页的锚文本）
⑦ 找对标文         动笔前先分析 1-2 篇同类大站对应页面的结构与排版，拆解其信息密度
⑧ 写作与内容填充   逐意图展开讲透，插入官方/权威数据，保持关键词密度在 3% ~ 5%
⑨ 结构化数据       嵌入 Schema.org (FAQPage / SportsEvent / ItemList) JSON-LD 代码
⑩ 门禁自检         代码校验 + 静态编译 `npm run build` 测试，确保 0 报错
⑪ 静态产物验证     检查 `out/` 目录结构、`sitemap.xml` 与 `robots.txt` 完整性
⑫ 上线与提交       部署至托管平台，提交 GSC 并启动索引监测
```

---

## 词根建模与拓扑定义（Query Roots）

在赛事与赛程类站点中，查询词根（Query Roots）代表了用户对于某一特定球队/赛事的完整搜索空间：

1. **赛程与时间根 (`/schedule`, `/[year]`)**
   - 目标意图：查找整季或某一周的开球时间、主客场。
2. **广播与通道根 (`/where-to-watch`, `/channel`, `/stream`)**
   - 目标意图：查找 CBS / NBC / FOX / ESPN / Prime Video 的播放版权分配。
3. **季前与轮空根 (`/preseason`, `/bye-week`)**
   - 目标意图：查找特定阶段的赛程安排与球员修整期。
4. **工具与可打印根 (`/printable`, `/pdf`, `/add-to-calendar`)**
   - 目标意图：寻找单页 PDF 下载与日历同步。

---

## 项目文档目录索引

* `AGENTS.md`：本文件（项目最高指导规则）
* `longtail-seo-modeling/`：Sitemap 抓取、词根解析与分析建模脚本目录
* `KEYWORDS.md`：关键词筛选、Google Suggest 下拉框数据归档
* `ARCHITECTURE.md`：Next.js App Router 静态架构与路由树
* `WORKFLOW.md`：新词站快速上线 SOP
