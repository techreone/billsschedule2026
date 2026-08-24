import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/scheduleData';
import { TREND_SLUGS } from '@/data/trendSlugs';

export const dynamic = 'force-static';

// 全站 57 条路由：4 大主路由 + 3 法务页 + 50 个趋势新词 SSG 页（自动从 TREND_SLUGS 生成，防漏）
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/where-to-watch`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preseason-schedule`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/printable-schedule`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const trendRoutes: MetadataRoute.Sitemap = TREND_SLUGS.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const contentRoutes: MetadataRoute.Sitemap = [
    '/bills-roster-projection-2026',
    '/when-is-first-bills-game',
    '/bills-wr-depth-chart',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...contentRoutes, ...trendRoutes];
}
