import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Bills Depth Chart 2026: Offense, Defense & Special Teams",
  description: "The full Buffalo Bills depth chart for 2026: projected starters on offense and defense, special teams, the new 3-4 defense, and every unit breakdown.",
  keywords: [
    "buffalo bills depth chart",
    "bills depth chart",
    "bills depth chart 2026",
    "bills offensive depth chart",
    "bills defensive depth chart",
    "bills starting lineup 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-depth-chart`,
  },
  openGraph: {
    title: "Buffalo Bills Depth Chart 2026",
    description: "The full Buffalo Bills depth chart for 2026: projected starters on offense and defense, special teams, the new 3-4 defense, and every unit breakdown.",
    url: `${SITE_CONFIG.url}/bills-depth-chart`,
    type: "article",
  },
};

export default function BillsDepthChartPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://billsschedule2026.online" },
      { "@type": "ListItem", "position": 2, "name": "Bills Depth Chart", "item": "https://billsschedule2026.online/bills-depth-chart" }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Buffalo Bills Depth Chart 2026: Projected Starters on Offense, Defense & Special Teams",
    "description": "Full projected Bills depth chart for the 2026 season after cutdown day: Josh Allen's offense, Jim Leonhard's new 3-4 defense, and special teams.",
    "datePublished": "2026-08-24T10:00:00+00:00",
    "dateModified": "2026-08-24T10:00:00+00:00",
    "author": { "@type": "Organization", "name": "BillsSchedule2026 Editorial Team", "url": "https://billsschedule2026.online" },
    "publisher": { "@type": "Organization", "name": "BillsSchedule2026", "logo": { "@type": "ImageObject", "url": "https://billsschedule2026.online/favicon.ico" } }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the Buffalo Bills' starting receivers in 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "D.J. Moore (X), Keon Coleman and Joshua Palmer on the perimeter with Khalil Shakir in the slot — the deepest receiver room of the Josh Allen era." }
      },
      {
        "@type": "Question",
        "name": "What defense do the Bills run in 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "New defensive coordinator Jim Leonhard has installed a 3-4 base defense, with Ed Oliver, Deone Walker and T.J. Sanders anchoring the line." }
      },
      {
        "@type": "Question",
        "name": "When is the Bills' final roster set for 2026?",
        "acceptedAnswer": { "@type": "Answer", "text": "Cutdown day is Sunday, August 30 at 6:00 PM ET, when the offseason roster is trimmed from 90 players to the regular-season limit of 53." }
      },
      {
        "@type": "Question",
        "name": "Where can I find each Bills position group's full depth chart?",
        "acceptedAnswer": { "@type": "Answer", "text": "This page links dedicated breakdowns for quarterback, running back, wide receiver and kicker — each updated through the preseason." }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">Buffalo Bills Schedule 2026</Link>
        <span>/</span>
        <span className="text-white font-semibold">Bills Depth Chart</span>
      </nav>

      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          FULL DEPTH CHART · CUTDOWN WEEK EDITION
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Buffalo Bills Depth Chart 2026
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          The complete projected Buffalo Bills depth chart for the 2026 season: Josh Allen&apos;s retooled offense with D.J. Moore, the new 3-4 defense under Jim Leonhard, and special teams — with links to every unit-by-unit breakdown.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Updated: August 24, 2026</span>
          <span>•</span><span>Post-cutdown projection</span>
        </div>
      </header>

      <NativeBanner />

      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        <div className="my-2">
          <Image src="/images/bills/depth-chart-hub-card.webp" alt="Buffalo Bills 2026 depth chart infographic: offense, defense and special teams" width={1000} height={406} className="rounded-xl border border-zinc-800 w-full h-auto" />
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">1. Offensive Depth Chart</h2>
          <p>
            The offense returns its core and added its missing piece. <strong>Josh Allen</strong> enters year nine as the undisputed starter with veteran <strong>Kyle Allen</strong> backing him up — our <Link href="/kyle-allen-bills-qb2" className="text-blue-400 hover:underline">QB2 breakdown</Link> covers that battle, and the full pecking order lives in the <Link href="/bills-quarterback-depth-chart" className="text-blue-400 hover:underline">quarterback depth chart</Link>.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]"><tr><th className="p-3">Position</th><th className="p-3">Starter</th><th className="p-3">Backup</th></tr></thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr><td className="p-3 font-bold text-white">QB</td><td className="p-3">Josh Allen</td><td className="p-3">Kyle Allen</td></tr>
                <tr><td className="p-3 font-bold text-white">RB</td><td className="p-3">James Cook</td><td className="p-3">Ray Davis / Ty Johnson</td></tr>
                <tr><td className="p-3 font-bold text-white">WR (X)</td><td className="p-3">D.J. Moore</td><td className="p-3">Keon Coleman (big-X packages)</td></tr>
                <tr><td className="p-3 font-bold text-white">WR (Z)</td><td className="p-3">Keon Coleman / Joshua Palmer</td><td className="p-3">Tyrell Shavers</td></tr>
                <tr><td className="p-3 font-bold text-white">Slot</td><td className="p-3">Khalil Shakir</td><td className="p-3">KJ Hamler</td></tr>
                <tr><td className="p-3 font-bold text-white">TE</td><td className="p-3">Dalton Kincaid</td><td className="p-3">Dawson Knox</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The receiving corps is the story of camp: Moore arrived from Chicago as a true WR1, Coleman enters a pivotal second year, and Shakir remains the NFL&apos;s most efficient slot receiver over the past two seasons. The complete room — including the bubble fight — lives in the <Link href="/bills-wr-depth-chart" className="text-blue-400 hover:underline">wide receiver depth chart</Link>; the backfield battle behind Cook is in the <Link href="/bills-rb-depth-chart" className="text-blue-400 hover:underline">running back depth chart</Link>, including <Link href="/ray-davis-bills-rb" className="text-blue-400 hover:underline">Ray Davis&apos;s role</Link> and <Link href="/frank-gore-jr-bills-roster" className="text-blue-400 hover:underline">Frank Gore Jr.&apos;s bubble case</Link>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">2. Defensive Depth Chart: Welcome to the 3-4</h2>
          <p>
            New coordinator <strong>Jim Leonhard</strong> has switched Buffalo to a 3-4 base, and everything up front flows from that. <strong>Ed Oliver</strong>, second-year nose tackle <strong>Deone Walker</strong> and <strong>T.J. Sanders</strong> form the projected interior trio, with edge rushers standing up rather than hand-in-the-dirt.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>DL:</strong> Oliver / Walker / Sanders — the health of this trio dictates everything (monitor the <Link href="/ed-oliver-son-family-news" className="text-blue-400 hover:underline">Ed Oliver family situation</Link>)</li>
            <li><strong>LB:</strong> Matt Milano and Terrel Bernard headline; Milano&apos;s availability is tracked in our <Link href="/matt-milano-injury-status" className="text-blue-400 hover:underline">injury status update</Link></li>
            <li><strong>Secondary:</strong> Tre&apos;Davious White&apos;s departure era is over — the corner and safety competitions center on Christian Benford, first-round rookie Maxwell Hairston, Taylor Rapp and Damar Hamlin (<Link href="/damar-hamlin-bills-status" className="text-blue-400 hover:underline">Hamlin&apos;s status</Link>)</li>
          </ul>
          <p>
            How many defensive linemen Buffalo keeps is the single biggest cutdown question — see the full analysis in our <Link href="/bills-roster-projection-2026" className="text-blue-400 hover:underline">53-man roster projection</Link>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">3. Special Teams Depth Chart</h2>
          <p>
            <strong>Tyler Bass</strong> remains the incumbent kicker entering his sixth season — his accuracy trends and Highmark wind-performance notes are in the <Link href="/bills-kicker-depth-chart" className="text-blue-400 hover:underline">kicker depth chart</Link>. Punter Sam Martin returns as the holder-and-punt operation, with return duties likely split among the receiver bubble names fighting for the final roster spots.
          </p>
          <p>
            Special teams coordinator Matthew Smiley values coverage versatility highly: several final-roster spots will be decided by gunner and cover-unit ability rather than offensive ceiling, as our <Link href="/bills-roster-projection-2026" className="text-blue-400 hover:underline">roster projection</Link> details position by position.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">4. How the Depth Chart Shakes Out by Kickoff</h2>
          <p>
            Cutdown day lands Sunday, August 30 at 6:00 PM ET, and the first test of this depth chart comes fast: the season opener in Houston on September 13. For live verification against the official listing, cross-check <a href="https://www.espn.com/nfl/team/depth/_/name/buf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN&apos;s Bills depth chart</a> and <a href="https://www.ourlads.com/nfldepthcharts/depthchart/BUF" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ourlads</a>, both updated weekly through the preseason per <a href="https://www.nfl.com/news/2026-27-national-football-league-important-dates" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com&apos;s calendar</a>.
          </p>
          <p>
            Planning your viewing around the lineup? The <Link href="/" className="text-blue-400 hover:underline">full 2026 schedule</Link> lists every kickoff time and TV channel, starting with the <Link href="/when-is-first-bills-game" className="text-blue-400 hover:underline">September 13 opener at Houston</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">FAQ: Bills Depth Chart 2026</h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Who starts at receiver for the Bills?</h3>
              <p className="text-sm text-zinc-400">Moore, Coleman and Palmer outside with Shakir in the slot — the deepest room Allen has had.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Did the Bills change defenses?</h3>
              <p className="text-sm text-zinc-400">Yes — Jim Leonhard installed a 3-4 base, reshaping the defensive line and linebacker depth chart.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Is this depth chart final?</h3>
              <p className="text-sm text-zinc-400">It reflects the post-cutdown projection. Final 53-man assignments lock after August 30; we refresh this page through Week 1.</p>
            </div>
          </div>
        </section>
      </article>

      <RelatedTrendPages slugs={['bills-wr-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-kicker-depth-chart', 'bills-roster-projection-2026']} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
    </div>
  );
}
