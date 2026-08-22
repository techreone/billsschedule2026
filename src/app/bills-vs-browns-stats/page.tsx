import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills vs Browns Stats & Box Score: Bills Win 31-7",
  description: "Official Buffalo Bills vs Cleveland Browns stats 2026: box score breakdown, Kyle Allen 128 passing yards, Ray Davis TD, Shedeur Sanders performance & head-to-head records.",
  keywords: [
    "buffalo bills vs cleveland browns stats",
    "bills vs browns box score 2026",
    "buffalo bills stats preseason week 2",
    "kyle allen stats vs browns",
    "shedeur sanders browns stats vs bills",
    "ray davis touchdown bills browns",
    "bills browns head to head record"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-vs-browns-stats`,
  },
  openGraph: {
    title: "Bills vs Browns Stats & Box Score 2026: Buffalo 31, Cleve...",
    description: "Official Buffalo Bills vs Cleveland Browns stats 2026: complete box score breakdown, quarterback passing numbers, rushing leaders, and defensive stats.",
    url: `${SITE_CONFIG.url}/bills-vs-browns-stats`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsVsBrownsStatsPage() {
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
        "name": "Bills vs Browns Stats",
        "item": "https://billsschedule2026.online/bills-vs-browns-stats"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What was the final score of the Bills vs Browns 2026 preseason game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Buffalo Bills defeated the Cleveland Browns 31-7 on Saturday afternoon, August 22, 2026, at Huntington Bank Field in Cleveland following a one-hour severe weather lightning delay."
        }
      },
      {
        "@type": "Question",
        "name": "Who was the leading passer for the Bills against the Browns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Backup quarterback Kyle Allen led the Buffalo Bills passing attack, completing 11 of 16 passes for 128 yards and one touchdown with zero interceptions."
        }
      },
      {
        "@type": "Question",
        "name": "How did Shedeur Sanders perform for the Browns against Buffalo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rookie Cleveland Browns quarterback Shedeur Sanders struggled against Buffalo's pressure, completing 6 of 12 passes for 48 yards while taking two sacks."
        }
      },
      {
        "@type": "Question",
        "name": "What is the all-time head-to-head record between the Bills and Browns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Including regular season games, the Cleveland Browns lead the all-time series against the Buffalo Bills 13-10, though Buffalo has won three of the last four meetings."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bills vs Browns Stats & Box Score 2026: Buffalo 31, Cleveland 7",
    "description": "Comprehensive statistical breakdown of the 2026 NFL preseason matchup between the Buffalo Bills and Cleveland Browns.",
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
        <span className="text-white font-semibold">Bills vs Browns Stats</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          GAME BOX SCORE & ANALYTICS • PRESEASON WEEK 2
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Bills vs Browns Stats 2026: Buffalo Dominates Cleveland 31-7
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Dive into the complete <strong>buffalo bills vs cleveland browns stats</strong> from the August 22, 2026 preseason showcase at Huntington Bank Field. Explore passing metrics, rushing breakdowns, defensive sack totals, turnover margins, and historical head-to-head records.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Final Score Verified
          </span>
          <span>•</span>
          <span>Game Date: Saturday, August 22, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Analytics Team</span>
        </div>
      </header>

      {/* Adsterra Top Slot */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Stats Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Highlight Score Box */}
        <div className="bg-gradient-to-r from-blue-950/60 via-zinc-900 to-red-950/50 p-6 rounded-xl border border-blue-800/50 space-y-4">
          <h2 className="font-headline font-bold text-white uppercase tracking-wider text-base md:text-lg flex items-center gap-2">
            <span>📊</span> Game Summary: Buffalo Bills 31, Cleveland Browns 7
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono">
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Final Score</span>
              <span className="text-xl font-bold text-white">BUF 31 - 7 CLE</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Total Yards</span>
              <span className="text-xl font-bold text-blue-400">BUF 384 | CLE 192</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Turnover Differential</span>
              <span className="text-xl font-bold text-emerald-400">BUF +2 (3-1)</span>
            </div>
            <div className="bg-black/60 p-4 rounded-lg border border-zinc-800">
              <span className="text-xs text-zinc-400 block uppercase">Time of Possession</span>
              <span className="text-xl font-bold text-yellow-400">34:12 vs 25:48</span>
            </div>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/josh-allen-action.webp"
              alt="Buffalo Bills vs Cleveland Browns stats 2026 box score"
              fill
              className="object-cover"
            />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="bills-vs-browns-stats 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Buffalo Bills quarterback unit delivered crisp passing rhythm during Week 2 preseason action in Cleveland.
          </p>
        </div>

        {/* Section 1: Final Box Score & Game Recap */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            1. Final Box Score & Quarter-by-Quarter Game Recap
          </h2>
          <p>
            The examination of <strong>buffalo bills vs cleveland browns stats</strong> highlights a dominant display of roster depth by head coach Sean McDermott&apos;s squad. Playing at Huntington Bank Field in Cleveland, Ohio, the Bills built an early momentum that survived a 65-minute severe lightning delay during the first quarter.
          </p>
          <p>
            Buffalo seized control early through methodical offensive drives, capitalizing on Cleveland turnovers and short field positions. Official coverage on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> and <a href="https://www.clevelandbrowns.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ClevelandBrowns.com</a> confirmed Buffalo generated 22 first downs compared to Cleveland&apos;s 11, dictating the tempo of the game across all four quarters.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Team</th>
                  <th className="p-3 border border-zinc-700">Q1</th>
                  <th className="p-3 border border-zinc-700">Q2</th>
                  <th className="p-3 border border-zinc-700">Q3</th>
                  <th className="p-3 border border-zinc-700">Q4</th>
                  <th className="p-3 border border-zinc-700 text-right">Total Score</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-blue-400">Buffalo Bills</td>
                  <td className="p-3 border border-zinc-800">7</td>
                  <td className="p-3 border border-zinc-800">10</td>
                  <td className="p-3 border border-zinc-800">7</td>
                  <td className="p-3 border border-zinc-800">7</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white text-right">31</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-amber-500">Cleveland Browns</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800">7</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800 font-bold text-white text-right">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Quarterback Stat Comparison */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            2. Quarterback Stat Comparison: Kyle Allen vs Deshaun Watson & Shedeur Sanders
          </h2>
          <p>
            With starter Josh Allen rested for the contest, backup quarterback Kyle Allen assumed the starting duties for Buffalo. Kyle Allen turned in an efficient outing, going 11-for-16 for 128 yards and a touchdown strike. His poised pocket management provided Buffalo with sustainable third-down conversions.
          </p>
          <p>
            For Cleveland, starter Deshaun Watson saw limited action, while highly touted rookie Shedeur Sanders completed 6 of 12 passes for 48 yards. National game summaries on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> noted that Buffalo&apos;s defensive line forced quick throws, limiting Sanders to short checkdowns.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Quarterback</th>
                  <th className="p-3 border border-zinc-700">Team</th>
                  <th className="p-3 border border-zinc-700">Cmp/Att</th>
                  <th className="p-3 border border-zinc-700">Yards</th>
                  <th className="p-3 border border-zinc-700">TD</th>
                  <th className="p-3 border border-zinc-700">INT</th>
                  <th className="p-3 border border-zinc-700">Passer Rating</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Kyle Allen</td>
                  <td className="p-3 border border-zinc-800 text-blue-400">BUF</td>
                  <td className="p-3 border border-zinc-800">11/16</td>
                  <td className="p-3 border border-zinc-800">128</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400">1</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">113.5</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Shane Buechele</td>
                  <td className="p-3 border border-zinc-800 text-blue-400">BUF</td>
                  <td className="p-3 border border-zinc-800">8/13</td>
                  <td className="p-3 border border-zinc-800">92</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400">1</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800 font-bold text-yellow-400">108.5</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Shedeur Sanders</td>
                  <td className="p-3 border border-zinc-800 text-amber-500">CLE</td>
                  <td className="p-3 border border-zinc-800">6/12</td>
                  <td className="p-3 border border-zinc-800">48</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800">60.4</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Deshaun Watson</td>
                  <td className="p-3 border border-zinc-800 text-amber-500">CLE</td>
                  <td className="p-3 border border-zinc-800">4/7</td>
                  <td className="p-3 border border-zinc-800">35</td>
                  <td className="p-3 border border-zinc-800">0</td>
                  <td className="p-3 border border-zinc-800 text-red-400">1</td>
                  <td className="p-3 border border-zinc-800">30.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Rushing Breakdown */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            3. Rushing Breakdown: Ray Davis 1-yd TD, Frank Gore Jr. & Ian Wheeler
          </h2>
          <p>
            Analyzing the ground game stats reveals Buffalo&apos;s physical offensive line setting the edge early. Second-year power back Ray Davis capped off an 8-play, 65-yard opening drive with a hard-nosed 1-yard touchdown plunge.
          </p>
          <p>
            Rookie fan favorite Frank Gore Jr. added energy in the second half, rushing 10 times for 52 yards and showcasing his vision between the tackles. Speedy back Ian Wheeler broke off a 24-yard scamper in the fourth quarter to set up Buffalo&apos;s final touchdown.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-headline font-bold text-blue-400 text-base">Ray Davis</h3>
              <p className="text-xs text-zinc-400 font-mono">6 Carries | 24 Yards | 1 TD</p>
              <p className="text-xs text-zinc-300">Set the physical tone near the goal line with zero negative yards.</p>
            </div>
            <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-headline font-bold text-blue-400 text-base">Frank Gore Jr.</h3>
              <p className="text-xs text-zinc-400 font-mono">10 Carries | 52 Yards | 5.2 YPC</p>
              <p className="text-xs text-zinc-300">Led all ball carriers in total rushing yards with strong yards after contact.</p>
            </div>
            <div className="p-4 bg-black/80 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-headline font-bold text-blue-400 text-base">Ian Wheeler</h3>
              <p className="text-xs text-zinc-400 font-mono">7 Carries | 48 Yards | 1 TD</p>
              <p className="text-xs text-zinc-300">Showcased elite burst on perimeter stretch plays during fourth-quarter action.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Defensive Highlights */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            4. Defensive Highlights, Turnovers & Sack Statistics
          </h2>
          <p>
            The defensive side of the <strong>buffalo bills vs cleveland browns stats</strong> sheet highlights Buffalo&apos;s secondary and front seven executing relentless pressure. Safety Damar Hamlin recorded a key tackle in space during third-down defense, while defensive end Javon Solomon recorded two sacks.
          </p>
          <p>
            Buffalo recorded 4 total sacks, 7 tackles for loss, and forced three turnovers (two interceptions and one fumble recovery). Detailed box score reports on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a> noted Buffalo held Cleveland to 3-of-13 on third-down conversions.
          </p>
        </section>

        {/* Section 5: Historical Head-to-Head Record */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            5. Historical Head-to-Head Record: Bills vs Browns All-Time Series
          </h2>
          <p>
            The Buffalo Bills and Cleveland Browns possess a rich rivalry dating back to 1972. While Cleveland holds a slight 13-10 advantage in the regular season all-time series, Buffalo has established dominance in recent years, winning three of the past four meetings.
          </p>
          <p>
            From snowstorms at Highmark Stadium in Orchard Park to rainy summer preseason battles in Cleveland, these historic AFC franchises continue to produce hard-hitting, physical football.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Bills vs Browns Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/bills-vs-browns-live-stream" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Live Stream & TV Channels
            </Link>
            <Link href="/bills-vs-browns-delay-weather" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Lightning & Weather Delay Updates
            </Link>
            <Link href="/bills-vs-browns-prediction" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills vs Browns Prediction, Spread & Odds
            </Link>
            <Link href="/is-josh-allen-playing-today" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Is Josh Allen Playing Today? Preseason Starter News
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
