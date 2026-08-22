# 赛事站 Sitemap 词根建模与长尾工作流 (LONGTAIL WORKFLOW)

> 本文档由老项目 `roguewiki` 完整复刻并针对赛事/赛程新词站（`billsschedule2026.xyz`）重构。
> **核心哲学**：不靠凭空感觉造页，通过分析对标大站 Sitemap 跑出**查询词根（Query Roots）**，按 **联想 → 重组 → 深度意图分析 → 聚类** 的统一流水线构建精品的独立站。

---

## 统一流水线（顺序不可颠倒）

```
① Sitemap 建模     运行 python3 scripts/sitemap_modeler.py 提取对标大站的 Query Roots
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

## 词根（Query Roots）与意图深拆规则

### 1. 意图深拆标准 (Intent Decomposition)
任何被选定建页的长尾词，在动笔前必须拆解出 **3 ~ 10 条明确的用户搜索意图**（每条意图对应正文一个 H2/H3 章节）：

- **赛程词 (`buffalo bills schedule 2026`)**：
  1. 常规赛 17 场完整时间表（包含开球时间 EST、主客场）
  2. 黄金时间（Primetime: TNF, SNF, MNF）独家播放频道
  3. 轮空周（Bye Week）具体是哪一周
  4. 季前赛（Preseason）3 场比赛日期
- **播放渠道词 (`where to watch buffalo bills game today`)**：
  1. CBS / NBC / FOX / ESPN 电视台分工
  2. Paramount+ / Peacock / Prime Video 流媒体平台
  3. 无缆线（Cord-cutting）替代方案（FuboTV / YouTube TV）
  4. 收音机广播电台（WGR 550 AM 听直播）
- **PDF 与日历词 (`printable buffalo bills schedule 2026 pdf free download`)**：
  1. 单页纸可打印 PDF 格式下载
  2. 一键同步 Google / Apple Calendar 教程

---

## 脚本工具与使用

```bash
# 抓取并解析对标赛程大站的 Sitemap 词根
python3 longtail-seo-modeling/scripts/sitemap_modeler.py https://www.fbschedules.com/sitemap_index.xml
```
