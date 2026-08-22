# billsschedule2026.xyz — 新词站上站全流程 (WORKFLOW.md)

> 本文档规范项目从发现趋势词到部署上线的全套标准 SOP。

---

## 1. 全流程 12 步 SOP

```
① 趋势发现       利用 Google Trends 抓取爆发词（如 Buffalo Bills Schedule 2026）
② Sitemap 建模    运行 longtail-seo-modeling 脚本分析大站 Query Roots 拓扑
③ 下拉框截取     通过 Google Auto-complete 收集 10~20 个真实搜索长尾词
④ 意图拆解       对目标词深拆 3-10 条用户核心疑问（确定 H2/H3 章节）
⑤ 域名注册       注册精准 EMD 域名（如 billsschedule2026.xyz）
⑥ 框架搭建       基于 Next.js SSG + Tailwind 搭建 Bleacher Report 风格前端
⑦ 内容写作       根据 GUIDE-WRITING.md 完成静态页面撰写与内链注入
⑧ 结构化注入     配置 Schema.org FAQPage & SportsEvent 代码
⑨ Sitemap 生成   使用 Next.js sitemap.ts 导出标准 XML 地图
⑩ 静态构建       执行 npm run build 验证全静态 out 目录生成
⑪ 托管部署       上传至 Cloudflare Pages 或 Vercel 免费托管
⑫ GSC 提交      在 Google Search Console 提交 sitemap.xml 触发快速收录
```
