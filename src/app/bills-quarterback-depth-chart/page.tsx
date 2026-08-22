import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills Quarterback Depth Chart: Josh Allen & Backups",
  description: "Explore the Bills quarterback depth chart 2026: starter Josh Allen, QB2 backup Kyle Allen, Shane Buechele performance, and offensive scheme fit.",
  keywords: [
    "bills quarterback depth chart",
    "buffalo bills qb depth chart 2026",
    "josh allen starter bills qb",
    "kyle allen bills backup qb",
    "shane buechele bills depth chart",
    "mitch trubisky bills quarterback status"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-quarterback-depth-chart`,
  },
  openGraph: {
    title: "Bills Quarterback Depth Chart 2026: Josh Allen & Backup Q...",
    description: "Detailed evaluation of the Buffalo Bills quarterback room in 2026, featuring Josh Allen, Kyle Allen, and Shane Buechele.",
    url: `${SITE_CONFIG.url}/bills-quarterback-depth-chart`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsQuarterbackDepthChartPage() {
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
        "name": "Bills Quarterback Depth Chart",
        "item": "https://billsschedule2026.online/bills-quarterback-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Buffalo Bills in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Josh Allen is the franchise starting quarterback for the Buffalo Bills, anchored under a long-term contract as one of the NFL's premier dual-threat signal-callers."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the primary backup quarterback behind Josh Allen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kyle Allen is currently listed as the QB2 backup quarterback on the official Bills depth chart following strong preseason performances."
        }
      },
      {
        "@type": "Question",
        "name": "Is Mitch Trubisky still on the Buffalo Bills roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, veteran backup Mitch Trubisky moved on during the 2026 offseason, opening the door for Kyle Allen to secure the QB2 role."
        }
      },
      {
        "@type": "Question",
        "name": "How many quarterbacks do the Bills carry on their 53-man roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bills typically carry 2 quarterbacks (Josh Allen and Kyle Allen) on their active 53-man roster, signing a 3rd QB like Shane Buechele to the practice squad."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bills Quarterback Depth Chart 2026: Josh Allen & Backup QB Role",
    "description": "Comprehensive analysis of the Buffalo Bills quarterback depth chart, player traits, contract values, and offensive scheme fit under Joe Brady.",
    "datePublished": "2026-08-23T00:00:00Z",
    "dateModified": "2026-08-23T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team"
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

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* On-Page Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Bills Quarterback Depth Chart</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          ROSTER EVALUATION • QUARTERBACK ROOM
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Bills Quarterback Depth Chart 2026: Josh Allen & QB2 Competition
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          An in-depth breakdown of the <strong>bills quarterback depth chart</strong>. Examine franchise starter Josh Allen, backup QB2 Kyle Allen, practice squad signal-caller Shane Buechele, and Joe Brady&apos;s offensive passing philosophy.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Verified Depth Chart Roster
          </span>
          <span>•</span>
          <span>Quarterbacks: 3 Active / Reserve</span>
          <span>•</span>
          <span>By BillsSchedule2026 Scouting Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Quarterback Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quarterback Depth Chart Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            2026 Buffalo Bills Quarterback Depth Chart Table
          </h2>
          <p className="text-xs text-zinc-400">
            Data verified via official roster listings on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Rank</th>
                  <th className="p-3 border border-zinc-700">Quarterback</th>
                  <th className="p-3 border border-zinc-700">Height / Weight</th>
                  <th className="p-3 border border-zinc-700">NFL Experience</th>
                  <th className="p-3 border border-zinc-700">College</th>
                  <th className="p-3 border border-zinc-700">Roster Role</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">QB1</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Josh Allen</td>
                  <td className="p-3 border border-zinc-800">6-5 / 237 lbs</td>
                  <td className="p-3 border border-zinc-800">9th Season</td>
                  <td className="p-3 border border-zinc-800">Wyoming</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Franchise Starter</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-blue-400">QB2</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Kyle Allen</td>
                  <td className="p-3 border border-zinc-800">6-3 / 210 lbs</td>
                  <td className="p-3 border border-zinc-800">7th Season</td>
                  <td className="p-3 border border-zinc-800">Houston</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">Primary Backup (53 Lock)</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-zinc-400">QB3</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white">Shane Buechele</td>
                  <td className="p-3 border border-zinc-800">6-0 / 210 lbs</td>
                  <td className="p-3 border border-zinc-800">4th Season</td>
                  <td className="p-3 border border-zinc-800">SMU / Texas</td>
                  <td className="p-3 border border-zinc-800 text-amber-400 font-bold">Practice Squad / Developmental</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/josh-allen-action.webp"
              alt="Bills quarterback depth chart Josh Allen Kyle Allen Shane Buechele"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Franchise QB Josh Allen leading quarter-by-quarter passing drills alongside offensive coordinator Joe Brady.
          </p>
        </div>

        {/* Section 1: Franchise Starter: Josh Allen */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Franchise QB1 Anchor: Josh Allen
          </h2>
          <p>
            The pinnacle of the <strong>bills quarterback depth chart</strong> belongs to superstar signal-caller Josh Allen. Boasting an elite arm, punishing running style, and incredible durability, Allen serves as the foundation for Buffalo&apos;s perennial championship aspirations.
          </p>
          <p>
            Allen has amassed over 40 total touchdowns in four consecutive seasons, combining effortless deep ball accuracy with power rushing inside the red zone.
          </p>
        </section>

        {/* Section 2: QB2 Backup Battle: Kyle Allen */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. QB2 Backup Battle: Kyle Allen Preseason Performance & System Fit
          </h2>
          <p>
            With Mitch Trubisky leaving during free agency, veteran Kyle Allen secured the primary QB2 backup position. Kyle Allen possesses extensive starter experience from his time in Carolina and Houston, making him an ideal backup capable of processing complex defensive coverage disguises.
          </p>
          <p>
            In Preseason Week 2 action against Cleveland, Kyle Allen went 11-of-16 for 128 yards and a touchdown, validating general manager Brandon Beane&apos;s decision to entrust him with the backup clipboard.
          </p>
        </section>

        {/* Section 3: QB3 & Practice Squad Candidate: Shane Buechele */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. QB3 & Practice Squad Candidate: Shane Buechele Breakdown
          </h2>
          <p>
            Former SMU and Texas quarterback Shane Buechele represents the developmental QB3 project. Known for high football intelligence and quick release mechanics, Buechele completed 8-of-13 attempts for 92 yards in second-half preseason play.
          </p>
          <p>
            Buechele provides valuable emergency depth and scout team preparation throughout the regular season.
          </p>
        </section>

        {/* Section 4: Veteran Philosophy Under Brandon Beane */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Veteran Quarterback Philosophy & Roster Construction Under Brandon Beane
          </h2>
          <p>
            Brandon Beane and Sean McDermott prioritize having veteran backups who mirror Josh Allen&apos;s preparation habits. By pairing Allen with seasoned backups like Kyle Allen, the quarterback room maintains an open film study environment where pre-snap defensive keys are dissected efficiently.
          </p>
        </section>

        {/* Section 5: Joe Brady Offensive Scheme */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Joe Brady&apos;s Offensive Scheme & Quarterback Room Dynamics
          </h2>
          <p>
            Under offensive coordinator Joe Brady, Buffalo&apos;s scheme incorporates heavy use of pre-snap motion, play-action rollouts, and intermediate tight end crossing routes. Both Josh Allen and Kyle Allen benefit from Brady&apos;s quick-rhythm passing progressions, keeping defenses off-balance.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Buffalo Bills Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/is-josh-allen-playing-today" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Is Josh Allen Playing Today? Preseason Starter News
            </Link>
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-kicker-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Kicker Depth Chart: Tyler Bass & Special Teams
            </Link>
            <Link href="/bills-vs-browns-stats" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Box Score & Quarterback Stats
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
