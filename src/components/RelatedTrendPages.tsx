import Link from 'next/link';
import { TREND_SLUGS, slugToLabel } from '@/data/trendSlugs';

// 页脚相关页互链组件：每个趋势新词页底部挂载，注入 4–5 个同主题兄弟页链接，
// 满足 AGENTS.md 节点⑩「正文内链 ≥5」并织密全站内链图谱、消除孤儿页。
//
// 双 API 兼容：
//  - slugs={["a","b"]}        → 显式指定兄弟页
//  - currentSlug="本页slug"    → 自动推导同队/同主题兄弟（Bills 系优先，其余按列表就近）
function relatedFromSlug(currentSlug?: string): string[] {
  if (!currentSlug) return [];
  if (!TREND_SLUGS.includes(currentSlug)) return [];
  const pool = TREND_SLUGS.filter((s) => s !== currentSlug);
  const family = currentSlug.split('-')[0];
  const sameFamily = pool.filter((s) => s.startsWith(family + '-'));
  const rest = pool.filter((s) => !sameFamily.includes(s));
  return [...sameFamily, ...rest].slice(0, 5);
}

export default function RelatedTrendPages({
  slugs,
  currentSlug,
  title = 'Related 2026 Bills & NFL Pages',
}: {
  slugs?: string[];
  currentSlug?: string;
  title?: string;
}) {
  const list = slugs?.length ? slugs : relatedFromSlug(currentSlug);
  if (!list.length) return null;
  return (
    <section className="mt-10 bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-lg font-headline font-bold text-white uppercase tracking-wider border-b border-zinc-800 pb-2 mb-4">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {list.map((s) => (
          <li key={s}>
            <Link
              href={`/${s}`}
              className="text-blue-400 hover:text-blue-300 underline text-sm"
            >
              {slugToLabel(s)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
