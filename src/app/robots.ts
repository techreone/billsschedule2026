import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/scheduleData';

export const dynamic = 'force-static';

// 显式放行 AI 爬虫（GEO / AI 搜索发现，wiki 上线清单硬性要求）
// 注意：Cloudflare zone 的 AI Bot Control 会在边缘注入 Disallow 覆盖本文件，
// 需在 Cloudflare 控制台关掉"托管 robots.txt"后，以下放行才生效。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
