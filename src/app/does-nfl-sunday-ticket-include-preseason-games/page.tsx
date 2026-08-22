import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Does Sunday Ticket Include Preseason Games?",
  description: "Official policy answer: Does NFL Sunday Ticket include preseason games? Learn what Sunday Ticket on YouTube TV covers, blackout rules, and how to stream out-of-market preseason games on NFL+.",
  keywords: [
    "does nfl sunday ticket include preseason games",
    "is preseason on Sunday ticket",
    "nfl sunday ticket youtube tv preseason",
    "does youtube tv sunday ticket have preseason",
    "how to watch out of market preseason games",
    "nfl plus vs sunday ticket preseason",
    "nfl Sunday ticket rules 2026",
    "buffalo bills preseason streaming"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/does-nfl-sunday-ticket-include-preseason-games`,
  },
  openGraph: {
    title: "Does NFL Sunday Ticket Include Preseason Games? 2026 YouT...",
    description: "Definitive breakdown of NFL Sunday Ticket preseason rules, YouTube TV channel integration, NFL+ alternatives, and package differences.",
    url: `${SITE_CONFIG.url}/does-nfl-sunday-ticket-include-preseason-games`,
    type: "article",
  },
};

export default function DoesNFLSundayTicketIncludePreseasonGamesPage() {
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
        "name": "Does Sunday Ticket Include Preseason Games",
        "item": "https://billsschedule2026.online/does-nfl-sunday-ticket-include-preseason-games"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Does NFL Sunday Ticket Include Preseason Games? 2026 YouTube TV Rules & Alternatives",
    "description": "Comprehensive explanation of NFL Sunday Ticket's coverage limitations regarding preseason games, featuring YouTube TV integration rules, NFL+ out-of-market streaming alternatives, and broadcast comparisons.",
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
        "name": "Does NFL Sunday Ticket on YouTube TV include live preseason games?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, NFL Sunday Ticket does NOT include live preseason games. Sunday Ticket is strictly designed to broadcast out-of-market Sunday afternoon regular season games that air on CBS and FOX."
        }
      },
      {
        "@type": "Question",
        "name": "Why are preseason games excluded from NFL Sunday Ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preseason television rights are owned individually by local team broadcast syndicates rather than the NFL's national broadcast packages. Because local affiliates sell localized advertising, Sunday Ticket cannot carry these regional streams."
        }
      },
      {
        "@type": "Question",
        "name": "How can I watch out-of-market preseason games if Sunday Ticket doesn't carry them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Out-of-market fans can watch live preseason games by subscribing to NFL+ (Basic for $6.99/mo or Premium for $14.99/mo), tuning into national broadcasts on NFL Network, or accessing local station streams on Fubo or YouTube TV base plans."
        }
      },
      {
        "@type": "Question",
        "name": "Does NFL Sunday Ticket include primetime games like Thursday, Sunday, or Monday Night Football?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Sunday Ticket does not include primetime games. Thursday Night Football airs exclusively on Amazon Prime Video, Sunday Night Football airs on NBC/Peacock, and Monday Night Football airs on ESPN/ABC."
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
        <span className="text-white font-semibold">Does Sunday Ticket Include Preseason</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          BROADCAST POLICY & STREAMING FAQ • 2026 SEASON
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Does NFL Sunday Ticket Include Preseason Games? 2026 YouTube TV Policy & Guide
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          The short answer is <strong>NO—NFL Sunday Ticket does NOT include live preseason games</strong>. Learn why Sunday Ticket on YouTube TV excludes August exhibition games, how local TV syndication works, and the best low-cost alternatives like NFL+ to stream out-of-market preseason football.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Policy Status: Excluded from Sunday Ticket
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Media Team</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Summary Stat Box */}
        <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-red-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>⚠️</span> Key Takeaway: Sunday Ticket vs Preseason Reality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">SUNDAY TICKET INCLUDES</span>
              <strong className="text-white text-sm font-sans">Regular Season Sun. Afternoon</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">PRESEASON INCLUDED?</span>
              <strong className="text-red-400 text-sm font-sans">NO (Strictly Excluded)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">BEST PRESEASON ALTERNATIVE</span>
              <strong className="text-emerald-400 text-sm font-sans">NFL+ ($6.99 / Month)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">CABLE TV OPTION</span>
              <strong className="text-yellow-400 text-sm font-sans">NFL Network (21+ Live)</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">
            1. Official NFL Sunday Ticket Preseason Coverage Policy
          </h2>
          <p>
            Every August, hundreds of thousands of NFL fans subscribe to NFL Sunday Ticket on YouTube TV or YouTube Primetime Channels, assuming that their premium subscription will allow them to watch out-of-market preseason games. However, according to official support documentation published on Google Help and <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, <strong>NFL Sunday Ticket does not carry preseason games</strong>.
          </p>
          <p>
            The reason for this policy stems from television licensing agreements:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Local Affiliate Contracts:</strong> Preseason games are contracted individually by each NFL franchise with local television affiliate stations (such as WIVB CBS 4 in Buffalo or WOIO CBS 19 in Cleveland). These local stations purchase local advertising and hold regional broadcast rights.</li>
            <li><strong>National Package Scope:</strong> NFL Sunday Ticket is legally defined as a regular-season product covering Sunday afternoon out-of-market games broadcast on local CBS and FOX channels.</li>
            <li><strong>Kickoff Schedule Differences:</strong> Preseason games take place across Thursdays, Fridays, Saturdays, and Sundays, making them incompatible with the Sunday-only structure of Sunday Ticket.</li>
          </ul>

          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/cbs-sports-camera.webp"
              alt="CBS television sports camera filming live NFL game coverage"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Camera operators filming game coverage for local network affiliate stations.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. YouTube TV & Primetime Channels Integration
          </h2>
          <p>
            While NFL Sunday Ticket itself does not include preseason games, ordering Sunday Ticket as a bundle with a standard YouTube TV subscription provides access to many preseason games through YouTube TV&apos;s base channel lineup.
          </p>
          <p>
            With a YouTube TV Base Plan ($72.99/mo), subscribers receive local broadcast channels (CBS, FOX, NBC, ABC) as well as <strong>NFL Network</strong> and <strong>ESPN</strong>:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Package / Subscription</th>
                  <th className="p-3">Preseason Games</th>
                  <th className="p-3">Regular Season Sunday Afternoon</th>
                  <th className="p-3">Primetime Games (TNF, SNF, MNF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-red-400">NFL Sunday Ticket Alone</td>
                  <td className="p-3 text-red-400">❌ NO (0 Games)</td>
                  <td className="p-3 text-emerald-400">✅ YES (Out-of-Market)</td>
                  <td className="p-3 text-red-400">❌ NO</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-yellow-400">YouTube TV Base Plan</td>
                  <td className="p-3 text-yellow-400">⚡ Local & NFL Network Only</td>
                  <td className="p-3 text-yellow-400">⚡ Local CBS/FOX Only</td>
                  <td className="p-3 text-emerald-400">✅ YES (NBC, ESPN, ABC)</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-emerald-400">YouTube TV + Sunday Ticket Bundle</td>
                  <td className="p-3 text-yellow-400">⚡ Local & NFL Network Only</td>
                  <td className="p-3 text-emerald-400">✅ ALL Out-of-Market + Local</td>
                  <td className="p-3 text-emerald-400">✅ YES (Full Package)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. Alternative Preseason Streaming via NFL+ & Local OTA
          </h2>
          <p>
            If you are an out-of-market fan wanting to watch your favorite team&apos;s preseason games live without paying for expensive cable packages, the NFL offers a specific solution: <strong>NFL+</strong>.
          </p>
          <p>
            As detailed on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> and <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>, NFL+ was explicitly built to stream out-of-market preseason games:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>NFL+ Basic ($6.99 / month):</strong> Includes live out-of-market preseason games on all compatible phones, tablets, smart TVs, and connected devices.</li>
            <li><strong>NFL+ Premium ($14.99 / month):</strong> Adds full game replays, condensed game replays, and All-22 coaches film immediately following game completion.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            4. Regular Season vs Preseason Package Differences
          </h2>
          <p>
            Understanding the distinction between preseason rights and regular season rights saves fans hundreds of dollars:
          </p>
          <div className="bg-black/50 p-5 rounded-xl border border-zinc-800 space-y-3 my-6">
            <h3 className="text-lg font-headline font-bold text-white">
              Package Breakdown Summary
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-zinc-300">
              <li><strong>Preseason Focus:</strong> Local over-the-air television (CBS, FOX, NBC) or NFL+ subscription ($6.99/mo).</li>
              <li><strong>Regular Season Out-of-Market Focus:</strong> NFL Sunday Ticket on YouTube TV ($378–$479 season pass).</li>
              <li><strong>Regular Season Local Focus:</strong> Local broadcast stations (CBS, FOX) or live TV streaming packages (Fubo, YouTube TV).</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            5. Frequently Asked Questions for Out-of-Market Viewers
          </h2>
          <p>
            For complete game-by-game kickoff times, broadcast listings, and team updates, visit the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Sunday Ticket & Preseason Rules
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Can I cancel Sunday Ticket if I bought it thinking preseason was included?</h3>
              <p className="text-sm text-zinc-300">
                Generally, NFL Sunday Ticket purchases on YouTube TV are non-refundable. However, if you recently purchased it, contacting Google Support immediately may allow for customer service exceptions.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">How much does NFL+ cost to watch preseason football?</h3>
              <p className="text-sm text-zinc-300">
                NFL+ Basic costs $6.99 per month or $49.99 per year, providing live access to out-of-market preseason games across all your devices.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Where can I see the full 2026 Buffalo Bills schedule?</h3>
              <p className="text-sm text-zinc-300">
                Check out the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link> for complete game schedules, kickoff times, and TV channels.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
