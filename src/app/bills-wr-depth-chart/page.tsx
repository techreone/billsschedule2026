import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Bills Wide Receiver Depth Chart 2026: Moore, Coleman, Shakir & Palmer",
  description: "The complete Buffalo Bills wide receiver depth chart for 2026: D.J. Moore as WR1, Keon Coleman's year-two leap, Khalil Shakir in the slot, Joshua Palmer's bounce-back bid and the roster bubble battle.",
  keywords: [
    "buffalo bills wide receivers",
    "bills wr depth chart",
    "buffalo bills wr depth chart 2026",
    "dj moore bills",
    "keon coleman depth chart",
    "khalil shakir slot",
    "joshua palmer bills",
    "bills wide receiver battle 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-wr-depth-chart`,
  },
  openGraph: {
    title: "Buffalo Bills Wide Receiver Depth Chart 2026",
    description: "D.J. Moore, Keon Coleman, Khalil Shakir and Joshua Palmer headline Buffalo's deepest receiver room of the Josh Allen era. Full projected depth chart and bubble watch.",
    url: `${SITE_CONFIG.url}/bills-wr-depth-chart`,
    type: "article",
  },
};

export default function BillsWrDepthChartPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://billsschedule2026.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bills WR Depth Chart",
        "item": "https://billsschedule2026.online/bills-wr-depth-chart"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Buffalo Bills Wide Receiver Depth Chart 2026: Full Projection & Battle Watch",
    "description": "Projected Bills WR depth chart for 2026 featuring D.J. Moore, Keon Coleman, Khalil Shakir and Joshua Palmer, plus the roster bubble fight and fantasy football outlook.",
    "datePublished": "2026-08-24T08:00:00+00:00",
    "dateModified": "2026-08-24T08:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team",
      "url": "https://billsschedule2026.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BillsSchedule2026",
      "logo": {
        "@type": "ImageObject",
        "url": "https://billsschedule2026.online/favicon.ico"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the Buffalo Bills' starting wide receivers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "D.J. Moore is the projected X/WR1 after arriving from Chicago, with Khalil Shakir in the slot and Keon Coleman and Joshua Palmer competing at the perimeter Z spot in Joe Brady's rotation."
        }
      },
      {
        "@type": "Question",
        "name": "Did the Bills trade for D.J. Moore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Buffalo acquired D.J. Moore from the Chicago Bears ahead of the 2026 season, instantly giving Josh Allen the most accomplished perimeter receiver he has played with since Stefon Diggs."
        }
      },
      {
        "@type": "Question",
        "name": "How many wide receivers will the Bills keep on the 53-man roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Five or six is the projection. Moore, Coleman, Shakir and Palmer are locked; the final one or two spots come down to special-teams value among Tyrell Shavers, KJ Hamler and return specialists before the Aug 30 cutdown."
        }
      },
      {
        "@type": "Question",
        "name": "Is Khalil Shakir a WR1 in fantasy football?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shakir profiles as a high-floor PPR asset rather than a volume WR1. His elite efficiency in the slot makes him a reliable WR3/WR4 in fantasy drafts, with weekly flex appeal in deeper leagues."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Bills WR Depth Chart</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          POSITION PREVIEW · TRAINING CAMP EDITION
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Buffalo Bills Wide Receiver Depth Chart 2026
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          For years the question was whether Josh Allen had enough weapons. Not anymore. With D.J. Moore arriving from Chicago to join Keon Coleman, Khalil Shakir and Joshua Palmer, the 2026 Bills carry the deepest receiver room of the Allen era — and the toughest cuts in the NFL.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Projected: 5–6 roster spots · 4 locks
          </span>
          <span>•</span>
          <span>Updated: August 24, 2026</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        <div className="my-2">
          <Image
            src="/images/bills/wr-depth-card.webp"
            alt="Buffalo Bills wide receiver depth chart infographic 2026: Moore, Palmer, Shakir, Coleman"
            width={1000}
            height={406}
            className="rounded-xl border border-zinc-800 w-full h-auto"
          />
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">
            1. The Projected Depth Chart
          </h2>
          <p>
            As training camp broke in late July, <a href="https://billswire.usatoday.com/story/sports/nfl/bills/2026/07/29/2026-buffalo-bills-training-camp-receivers-dj-moore-keon-coleman-khalil-shakir-nfl/91038618007/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Bills Wire&apos;s camp preview</a> framed the competition clearly: Shakir stays in the slot where he has been Buffalo&apos;s most reliable receiver for two straight seasons, while Palmer held the inside track at the other perimeter spot opposite newcomer D.J. Moore. Here&apos;s how it shakes out heading into cutdown weekend:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Slot</th>
                  <th className="p-3">Player</th>
                  <th className="p-3">Profile</th>
                  <th className="p-3">Roster Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">X / WR1</td>
                  <td className="p-3 font-bold text-white">D.J. Moore</td>
                  <td className="p-3">Six-time 900+ yard receiver, contested-catch machine, YAC threat</td>
                  <td className="p-3 text-emerald-400">Locked — WR1</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Z</td>
                  <td className="p-3 font-bold text-white">Keon Coleman</td>
                  <td className="p-3">Year-two leap candidate; big-body jump-ball specialist</td>
                  <td className="p-3 text-emerald-400">Locked</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Slot</td>
                  <td className="p-3 font-bold text-white">Khalil Shakir</td>
                  <td className="p-3">NFL&apos;s most efficient receiver over past two seasons per ESPN tracking</td>
                  <td className="p-3 text-emerald-400">Locked</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Z competitor</td>
                  <td className="p-3 font-bold text-white">Joshua Palmer</td>
                  <td className="p-3">Perimeter speed; quiet first Buffalo year (22 rec, 303 yds)</td>
                  <td className="p-3 text-yellow-400">Safe — contract</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">WR5/6</td>
                  <td className="p-3 font-bold text-white">Shavers / Hamler</td>
                  <td className="p-3">Special-teams-heavy profiles; return game value</td>
                  <td className="p-3 text-red-400">Bubble — one or two spots</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For live verification of the current pecking order as cutdowns approach, <a href="https://www.ourlads.com/nfldepthcharts/depthchart/BUF" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ourlads&apos; Bills depth chart</a> and <a href="https://www.espn.com/nfl/team/depth/_/name/buf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN&apos;s official version</a> are updated weekly through the preseason.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. What D.J. Moore Changes for Josh Allen&apos;s Offense
          </h2>
          <p>
            Moore is the first true alpha perimeter receiver Buffalo has employed since <Link href="/stefon-diggs-bills-wr-aftermath" className="text-blue-400 hover:underline">the Stefon Diggs era ended</Link>. Analysts describing the acquisition call him &quot;the undisputed number one target&quot; — a premium asset whose presence should warp defensive coverage in ways Coleman has not yet commanded. Expect fewer bracket looks on Coleman, softer boxes near the formation, and cleaner intermediate windows for Shakir.
          </p>
          <p>
            The schematic fit under Joe Brady is straightforward: Moore&apos;s yards-after-catch skill set thrives on the same slant/flat concepts Brady already runs at among the league&apos;s highest rates. In two-receiver sets, Moore and Coleman give Allen a classic big-body pairing; in three-receiver packages, Shakir slides inside where his separation rate has been elite since 2024.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. Keon Coleman&apos;s Year-Two Leap Is the X-Factor
          </h2>
          <p>
            The 2024 second-rounder flashed dominance as a rookie and spent this camp turning heads again — he was one of the standouts reported during August practices alongside Ed Oliver. At 6-foot-4 with a 40-inch vertical, Coleman is Buffalo&apos;s red-zone eraser; the development leap that matters now is consistency against press coverage and sharper route stems against top corners.
          </p>
          <p>
            If Coleman takes the expected second-year jump, this unit goes from &quot;very good&quot; to genuinely difficult to game-plan for — four players who each command single coverage somewhere on the field. That&apos;s the whole thesis of Brady&apos;s &quot;everybody eats&quot; rotation: no defense can double everyone.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            4. The Bubble Fight: Who Gets Cut on Aug 30?
          </h2>
          <p>
            The cruel math of a deep room: Buffalo likely keeps five or six receivers, which means cutting a popular name. Tyrell Shavers (special-teams gunner experience) and KJ Hamler (return ability) are the leading candidates for the final spots, with practice squad stashes likely for an undrafted developmental body. Our full <Link href="/bills-roster-projection-2026" className="text-blue-400 hover:underline">53-man roster projection</Link> tracks every position battle through Sunday&apos;s deadline.
          </p>
          <p>
            Fantasy managers should note the hierarchy for drafts: Moore as a low-end WR2 with volume questions but elite quarterback play, Coleman as a boom WR3 with touchdown equity, Shakir as a PPR floor play, and Palmer as a deep-league flier whose cost makes him a free-lunch bet if injuries strike.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            FAQ: Bills Wide Receivers 2026
          </h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Who is the Bills&apos; number one receiver in 2026?</h3>
              <p className="text-sm text-zinc-400">D.J. Moore. Acquired from Chicago, he steps in as the undisputed WR1 — the most complete perimeter player Allen has had since Diggs.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Is Keon Coleman still on the Bills?</h3>
              <p className="text-sm text-zinc-400">Yes — and entering a pivotal year two after a standout training camp. He projects as the starter opposite Moore.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">How many WRs will Buffalo keep?</h3>
              <p className="text-sm text-zinc-400">Five or six. Four jobs are settled; the last spot(s) hinge on special teams value with cutdown day on August 30.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Where does Khalil Shakir rank among NFL slot receivers?</h3>
              <p className="text-sm text-zinc-400">Among the very best by efficiency: he has been Buffalo&apos;s most dependable receiver over the past two seasons and rarely loses the ball or the down.</p>
            </div>
          </div>
        </section>
      </article>

      <RelatedTrendPages slugs={['stefon-diggs-bills-wr-aftermath', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-roster-projection-2026', 'is-josh-allen-playing-today']} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
    </div>
  );
}
