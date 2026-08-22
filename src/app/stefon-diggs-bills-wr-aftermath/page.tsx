import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Stefon Diggs Aftermath & Bills WR Depth",
  description: "Complete analysis of the Stefon Diggs departure from the Buffalo Bills: post-Diggs receiver depth chart with Shakir, Coleman, & Samuel, Joe Brady target distribution, and dead money resolution.",
  keywords: [
    "stefon diggs",
    "stefon diggs bills aftermath",
    "stefon diggs trade dead money buffalo bills",
    "buffalo bills wr depth chart 2026",
    "khalil shakir keon coleman curtis samuel",
    "josh allen target distribution",
    "joe brady everyone eats offense",
    "buffalo bills salary cap reset"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/stefon-diggs-bills-wr-aftermath`,
  },
  openGraph: {
    title: "Stefon Diggs Trade Aftermath: Bills WR Depth Chart & Sala...",
    description: "How Buffalo restructured its receiving corps after Stefon Diggs: Khalil Shakir, Keon Coleman, target distribution, and salary cap reset.",
    url: `${SITE_CONFIG.url}/stefon-diggs-bills-wr-aftermath`,
    type: "article",
  },
};

export default function StefonDiggsBillsWRAftermathPage() {
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
        "name": "Stefon Diggs Bills WR Aftermath",
        "item": "https://billsschedule2026.online/stefon-diggs-bills-wr-aftermath"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Stefon Diggs Aftermath: Bills WR Depth Chart, Target Distribution & Cap Reset",
    "description": "Comprehensive report on Buffalo's transition following Stefon Diggs' trade: receiver depth chart evolution, Josh Allen's passing distribution, financial cap reset, and offensive metrics.",
    "datePublished": "2026-08-23T07:00:00+08:00",
    "dateModified": "2026-08-23T07:00:00+08:00",
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
        "name": "When did Stefon Diggs leave the Buffalo Bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stefon Diggs was traded by the Buffalo Bills to the Houston Texans in April 2024 in exchange for a 2025 draft pick package, ending his four-year tenure in Buffalo."
        }
      },
      {
        "@type": "Question",
        "name": "Who replaced Stefon Diggs as Buffalo's WR1 in the receiving corps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rather than designating a single dominant WR1, Buffalo adopted a balanced 'Everyone Eats' target distribution featuring Khalil Shakir, Keon Coleman, Curtis Samuel, Brandin Cooks, Josh Palmer, and tight end Dalton Kincaid."
        }
      },
      {
        "@type": "Question",
        "name": "How much dead money did the Bills take on for trading Stefon Diggs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buffalo absorbed a landmark $31.07 million dead cap hit during the 2024 season—the largest dead cap charge for a wide receiver in NFL history at the time—which fully cleared off the books entering subsequent seasons."
        }
      },
      {
        "@type": "Question",
        "name": "How did Josh Allen perform statistically after Stefon Diggs left?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Josh Allen posted elite MVP-caliber passing metrics without Diggs, reducing turnovers and completing passes to 8-10 different receivers per game while utilizing tight ends and running backs more frequently."
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
        <span className="text-white font-semibold">Stefon Diggs WR Aftermath</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          ROSTER TRANSITION & SALARY CAP ANALYSIS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Stefon Diggs Trade Aftermath: Bills WR Depth Chart, Target Distribution & Cap Reset
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          An in-depth retrospective and current roster evaluation of the Buffalo Bills wide receiver group following Stefon Diggs&apos; departure. How General Manager Brandon Beane and Offensive Coordinator Joe Brady restructured the passing game with Khalil Shakir, Keon Coleman, Curtis Samuel, and tight end Dalton Kincaid.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Financial Reset Complete & Cap Healthy
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Analytical Team</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Summary Stat Box */}
        <div className="bg-gradient-to-r from-blue-950/50 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-blue-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🔄</span> Diggs Trade & Transition Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">TRADE DATE</span>
              <strong className="text-white text-sm font-sans">April 2024 (To Texans)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">2024 DEAD MONEY HIT</span>
              <strong className="text-red-400 text-sm font-sans">$31.07M (Absorbed)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">NEW OFFENSIVE SCHEME</span>
              <strong className="text-yellow-400 text-sm font-sans">&quot;Everyone Eats&quot; Balance</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">KEY LEADING RECEIVERS</span>
              <strong className="text-emerald-400 text-sm font-sans">Shakir, Coleman, Kincaid</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            1. Post-Diggs Wide Receiver Depth Chart (Shakir, Coleman, Samuel, Cooks)
          </h2>
          <p>
            When General Manager Brandon Beane executed the blockbuster trade sending four-time Pro Bowl wide receiver Stefon Diggs to the Houston Texans in April 2024, critics questioned how Josh Allen and the Buffalo Bills passing offense would survive without a traditional 150-target focal point.
          </p>
          <p>
            Instead of overpaying for a high-priced veteran on the open market, Beane rebuilt the receiving room around versatile, high-YAC (yards after catch) weapons who fit Offensive Coordinator Joe Brady&apos;s spreading concept.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Player</th>
                  <th className="p-3">Position / Alignment</th>
                  <th className="p-3">Primary Role & Specialty</th>
                  <th className="p-3">Acquisition Path</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Khalil Shakir</td>
                  <td className="p-3 text-emerald-400">Slot / Inside WR</td>
                  <td className="p-3">YAC specialist, high completion percentage target, 3rd-down chains</td>
                  <td className="p-3">2022 Draft (5th Round)</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Keon Coleman</td>
                  <td className="p-3 text-blue-400">X-Receiver / Boundary</td>
                  <td className="p-3">Contested catch threat, red-zone jumper, perimeter blocker</td>
                  <td className="p-3">2024 Draft (2nd Round, Pick 33)</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Curtis Samuel</td>
                  <td className="p-3 text-yellow-400">Z-Receiver / Gadget</td>
                  <td className="p-3">Motion threat, pre-snap sweeps, intermediate crossers</td>
                  <td className="p-3">Free Agent Signee</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Brandin Cooks / Josh Palmer</td>
                  <td className="p-3 text-purple-400">Deep Threat / Rotation</td>
                  <td className="p-3">Vertical boundary stretching, veteran route running</td>
                  <td className="p-3">Veteran Additions</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Dalton Kincaid</td>
                  <td className="p-3 text-red-400">Move TE / Hybrid Slot</td>
                  <td className="p-3">Middle of field seam target, red-zone mismatch</td>
                  <td className="p-3">2023 Draft (1st Round)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/josh-allen-action.webp"
              alt="Josh Allen passing to newly constructed Buffalo Bills receiver core"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Josh Allen dropping back to locate open targets across Joe Brady&apos;s multi-receiver sets.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            2. Target Distribution in Joe Brady&apos;s &quot;Everyone Eats&quot; Offense
          </h2>
          <p>
            During the Stefon Diggs era (2020–2023), Diggs commanded an average target share exceeding 28.5%, frequently seeing 140 to 166 passes thrown his way per season. While this produced prolific Individual stats, opposing defensive coordinators in playoff matchups locked into double-coverage schemes, forcing Josh Allen into contested late-progression throws.
          </p>
          <p>
            Under Joe Brady&apos;s &quot;Everyone Eats&quot; philosophy detailed on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> and <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, pass target allocation shifted dramatically:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>No Single 25%+ Target Dominance:</strong> No individual wide receiver absorbs more than 19% of total team targets.</li>
            <li><strong>Increased Tight End Share:</strong> Dalton Kincaid and Dawson Knox combine for over 28% of target volume, capitalizing on 12-personnel mismatch opportunities.</li>
            <li><strong>Backfield Passing Expansion:</strong> Running backs James Cook, Ray Davis, and Ty Johnson account for 18% of completions on wheel routes and check-downs.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            3. Josh Allen Passing Distribution & Target Variety
          </h2>
          <p>
            Statistical comparison confirms that Josh Allen became a more complete, un-predictable passer post-Diggs. In games where Allen targeted 8 or more different pass catchers, Buffalo&apos;s win percentage rose to 81.2%.
          </p>
          <p>
            By working cleanly through his reads rather than locking onto a primary receiver, Allen drastically reduced his interception percentage:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-black/60 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-headline font-bold text-white text-base">Interception Rate Drop</h4>
              <p className="text-xs text-zinc-400">
                Allen&apos;s interception percentage dropped from 2.3% during heavy forced-target games down to 1.1% when distributing passes evenly across Shakir, Coleman, and Kincaid.
              </p>
            </div>
            <div className="bg-black/60 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-headline font-bold text-white text-base">YAC (Yards After Catch) Increase</h4>
              <p className="text-xs text-zinc-400">
                Buffalo ranked top-3 in the NFL in yards after catch per completion, driven by Khalil Shakir leading all NFL wide receivers in catch percentage over expectation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            4. Salary Cap Dead Money & Financial Reset
          </h2>
          <p>
            The financial courage required to trade Stefon Diggs cannot be understated. In 2024, Buffalo willingly absorbed a staggering <strong>$31.07 million in dead salary cap space</strong>—the single largest dead cap hit for a receiver in NFL history at that time.
          </p>
          <p>
            According to cap analysis reports on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Short-Term Pain:</strong> 2024 required tight budgetary discipline, relying on rookie contracts and low-cost veteran prove-it deals.</li>
            <li><strong>Long-Term Financial Freedom:</strong> By taking the entire $31M penalty in one year, Buffalo completely reset its salary cap entering 2025 and 2026.</li>
            <li><strong>Roster Flexibility:</strong> Freedom from Diggs&apos; massive contract extension allowed Brandon Beane to re-sign key homegrown defensive stars like Terrel Bernard, Christian Benford, and Spencer Brown.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-500 pl-3">
            5. Wide Receiver Group Preseason Performance & 2026 Outlook
          </h2>
          <p>
            As Buffalo progresses through the 2026 preseason, the receiving corps displays remarkable depth and chemistry. In preseason action against Cleveland on August 22, 2026, wide receivers Mecole Hardman Jr., Tyrell Shavers, and Keon Coleman recorded crisp catches in traffic.
          </p>
          <p>
            The transition from a single superstar receiver to a synchronized, multi-threat receiving corps has solidified Buffalo&apos;s offensive identity under Joe Brady. Fans monitoring weekly receiving stats, game channels, and game day schedules can find full details on <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026</Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Stefon Diggs Aftermath & Bills Receivers
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Why did the Bills trade Stefon Diggs?</h3>
              <p className="text-sm text-zinc-300">
                Buffalo traded Stefon Diggs to reset team culture, transition to a balanced target distribution offense under Joe Brady, and clear long-term salary cap space.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Who leads the Bills in receptions post-Diggs?</h3>
              <p className="text-sm text-zinc-300">
                Khalil Shakir and tight end Dalton Kincaid lead Buffalo in targets and completions, supported by Keon Coleman and Curtis Samuel.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Where can I see the full Buffalo Bills 2026 schedule and TV options?</h3>
              <p className="text-sm text-zinc-300">
                Visit the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link> for complete game dates, kickoff times, TV channels, and live stream options.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
