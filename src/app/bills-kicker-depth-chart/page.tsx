import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Bills Kicker 2026: Tyler Bass Field Goal Status",
  description: "Buffalo Bills kicker 2026 update: Tyler Bass field goal accuracy, Highmark Stadium wind performance, contract breakdown, punter Sam Martin holding tandem.",
  keywords: [
    "bills kicker",
    "buffalo bills kicker 2026",
    "tyler bass bills kicker",
    "tyler bass field goal stats",
    "bills kicker contract tyler bass",
    "highmark stadium wind field goals"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/bills-kicker-depth-chart`,
  },
  openGraph: {
    title: "Bills Kicker 2026: Tyler Bass Depth Chart Status & Field ...",
    description: "In-depth review of Buffalo Bills starting placekicker Tyler Bass, field goal percentage metrics, Highmark Stadium weather impact, and contract details.",
    url: `${SITE_CONFIG.url}/bills-kicker-depth-chart`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function BillsKickerDepthChartPage() {
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
        "name": "Bills Kicker Depth Chart",
        "item": "https://billsschedule2026.online/bills-kicker-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting kicker for the Buffalo Bills in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass is the starting placekicker for the Buffalo Bills, entering his seventh NFL season as Buffalo's franchise kicker."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tyler Bass' longest career field goal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass hit a career-long 56-yard field goal and holds the Bills franchise record for the longest playoff field goal by a kicker (54 yards)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tyler Bass' contract status with Buffalo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tyler Bass signed a 4-year, $20.4 million contract extension with the Buffalo Bills, securing him through the 2027 season."
        }
      },
      {
        "@type": "Question",
        "name": "Who holds for Tyler Bass on field goal attempts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran punter Sam Martin serves as the primary holder for Tyler Bass, paired with long snapper Reid Ferguson."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bills Kicker 2026: Tyler Bass Depth Chart Status & Field Goals",
    "description": "Comprehensive report on Buffalo Bills placekicker Tyler Bass, special teams unit performance, and kicking conditions at Highmark Stadium.",
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
        <span className="text-white font-semibold">Bills Kicker Depth Chart</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 border border-blue-800 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          SPECIAL TEAMS SPOTLIGHT • PLACEKICKER ANALYSIS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Bills Kicker 2026: Tyler Bass Status, Contract & Field Goal Stats
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Everything you need regarding the <strong>bills kicker</strong> situation. Analyze starter Tyler Bass, field goal percentage trends, Highmark Stadium lakefront wind dynamics, contract extension terms, and the special teams snap-hold-kick operation.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Starting Kicker Verified
          </span>
          <span>•</span>
          <span>Kicker: Tyler Bass (#2)</span>
          <span>•</span>
          <span>By BillsSchedule2026 Special Teams Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Kicker Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Kicker Stats Table */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            Tyler Bass Career Field Goal & Extra Point Metrics
          </h2>
          <p className="text-xs text-zinc-400">
            Source data gathered from official NFL statistical records on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, and <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BuffaloBills.com</a>.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs md:text-sm text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-800 text-white font-headline uppercase">
                  <th className="p-3 border border-zinc-700">Category</th>
                  <th className="p-3 border border-zinc-700">Stat / Metric</th>
                  <th className="p-3 border border-zinc-700">Franchise Rank / Context</th>
                </tr>
              </thead>
              <tbody className="font-mono text-zinc-300">
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Career FG Percentage</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">84.8%</td>
                  <td className="p-3 border border-zinc-800">Top-3 All-Time Bills Franchise Accuracy</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Extra Point Percentage</td>
                  <td className="p-3 border border-zinc-800 text-emerald-400 font-bold">97.2%</td>
                  <td className="p-3 border border-zinc-800">Reliable PAT conversion rate</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Longest Career FG</td>
                  <td className="p-3 border border-zinc-800 text-yellow-400 font-bold">56 Yards</td>
                  <td className="p-3 border border-zinc-800">Nailed in 2024 regular season</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/20">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Playoff Long FG Record</td>
                  <td className="p-3 border border-zinc-800 text-yellow-400 font-bold">54 Yards</td>
                  <td className="p-3 border border-zinc-800">Longest playoff FG in Bills franchise history</td>
                </tr>
                <tr className="border-b border-zinc-800 bg-black/40">
                  <td className="p-3 border border-zinc-800 font-bold text-white">Contract Extension Value</td>
                  <td className="p-3 border border-zinc-800 text-blue-400 font-bold">4 Years / $20.4M</td>
                  <td className="p-3 border border-zinc-800">Signed through 2027 season</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/highmark-stadium-snow.webp"
              alt="Bills kicker Tyler Bass field goal Highmark Stadium wind weather"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            Kicking conditions at Highmark Stadium in Orchard Park feature unpredictable Lake Erie swirl winds.
          </p>
        </div>

        {/* Section 1: Tyler Bass Starting Status */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Tyler Bass Starting Kicker Status & Contract Overview
          </h2>
          <p>
            An evaluation of the <strong>bills kicker</strong> position confirms veteran Tyler Bass as Buffalo&apos;s unchallenged placekicker. Drafted in the sixth round of the 2020 draft out of Georgia Southern, Bass quickly earned trust with a powerful leg and clutch postseason kicks.
          </p>
          <p>
            General Manager Brandon Beane rewarded Bass with a 4-year, $20.4 million contract extension featuring $12.3 million guaranteed, solidifying him among the top 10 highest-paid kickers in the NFL.
          </p>
        </section>

        {/* Section 2: Highmark Stadium Wind Factors */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Highmark Stadium Weather & Wind Factors Impacting Kick Accuracy
          </h2>
          <p>
            Kicking at open-air Highmark Stadium in Orchard Park presents some of the most difficult weather hurdles in professional football. Swirling wind currents off Lake Erie, freezing temperatures, and heavy snow require extraordinary kick trajectory control.
          </p>
          <p>
            Bass has adapted his plant-foot mechanics and leg extension, maintaining an 84.8% career field goal conversion rate despite treacherous home environmental conditions.
          </p>
        </section>

        {/* Section 3: Training Camp Competition */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Training Camp & Preseason Special Teams Competition
          </h2>
          <p>
            During 2026 training camp, special teams coordinator Matthew Smiley brought in camp competition legs to manage preseason kick loads and test field goal consistency. Bass responded well in preseason action, converting 3-of-3 field goals and all extra point attempts across Week 1 and Week 2 games.
          </p>
        </section>

        {/* Section 4: Special Teams Coaching Staff */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Special Teams Unit: Punter Sam Martin & Long Snapper Tandem
          </h2>
          <p>
            Kicking success is a three-man operation. Long snapper Reid Ferguson provides flawless, consistent snaps, while veteran punter Sam Martin handles holding duties.
          </p>
          <p>
            This veteran trio has developed seamless timing, executing 1.2-second snap-to-kick operations under extreme pressure.
          </p>
        </section>

        {/* Section 5: Fantasy Football Kicker Outlook */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. Fantasy Football Kicker Outlook & 50+ Yard Field Goal Range
          </h2>
          <p>
            In fantasy football leagues, Tyler Bass represents a dependable starting kicker option. Because Josh Allen leads an explosive offense that frequently moves inside opponent territory, Bass generates abundant extra point and field goal scoring opportunities weekly.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Special Teams & Depth Chart Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
            <Link href="/damar-hamlin-bills-status" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Damar Hamlin Safety Status & Roster Role
            </Link>
            <Link href="/where-to-watch" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills TV Broadcast & Streaming Guide 2026
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
