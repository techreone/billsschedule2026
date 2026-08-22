import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Are There Any Preseason NFL Games on Today?",
  description: "Find out if there are any preseason NFL games on today: full 2026 game schedule, kickoff times in EST, TV channels (NFL Network, CBS, FOX), and live stream links.",
  keywords: [
    "are there any preseason nfl games on today",
    "is there an nfl game today",
    "nfl preseason schedule today",
    "nfl games on today tv channel",
    "bills vs browns game today",
    "what nfl games play today",
    "nfl preseason kickoff times est",
    "nfl network games today live stream"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/are-there-any-preseason-nfl-games-on-today`,
  },
  openGraph: {
    title: "Are There Any Preseason NFL Games on Today? 2026 Schedule...",
    description: "Today's complete NFL preseason game schedule, kickoff times, broadcast TV channels, and live score tracking.",
    url: `${SITE_CONFIG.url}/are-there-any-preseason-nfl-games-on-today`,
    type: "article",
  },
};

export default function AreThereAnyPreseasonNFLGamesOnTodayPage() {
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
        "name": "Are There Any Preseason NFL Games on Today",
        "item": "https://billsschedule2026.online/are-there-any-preseason-nfl-games-on-today"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Are There Any Preseason NFL Games on Today? 2026 Schedule & Broadcast Directory",
    "description": "Comprehensive daily schedule breakdown showing every 2026 NFL preseason matchup, kickoff time in Eastern Standard Time, TV network channels, and live streaming options.",
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
        "name": "Are there any NFL preseason games on today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, during August 2026, NFL preseason games air primarily on Thursdays, Fridays, Saturdays, and Sundays across Preseason Weeks 1, 2, and 3. Saturday slates feature the largest density of games."
        }
      },
      {
        "@type": "Question",
        "name": "What TV channel is broadcasting NFL preseason games today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "National games air on NFL Network, ESPN, CBS, FOX, and NBC. Local market broadcasts air on over-the-air affiliate stations (such as WIVB CBS 4 in Buffalo or WOIO CBS 19 in Cleveland)."
        }
      },
      {
        "@type": "Question",
        "name": "What time do NFL preseason games kick off today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preseason kickoff times typically range from 1:00 PM ET for afternoon games to 4:00 PM ET, 7:00 PM ET, and 8:00 PM ET for evening broadcasts."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stream today's NFL games online without cable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can stream today's NFL preseason games live on NFL+, FuboTV, YouTube TV, Hulu + Live TV, Paramount+, or the ESPN app."
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
        <span className="text-white font-semibold">Preseason Games on Today</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          LIVE PRESEASON SCHEDULE & BROADCAST MAP • 2026
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Are There Any Preseason NFL Games on Today? 2026 Schedule, Times & TV Guide
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Your master directory for today&apos;s live NFL preseason games. Check exact kickoff times in Eastern Standard Time (EST), television channels (NFL Network, CBS, FOX, NBC), cord-cutting live stream links, quarterback starters, and stadium weather updates.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Updated: August 23, 2026
          </span>
          <span>•</span>
          <span>Preseason Week 2 Action</span>
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
        <div className="bg-gradient-to-r from-blue-950/50 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-blue-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🏈</span> Today&apos;s Preseason Game Day Summary
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">GAMES SCHEDULED</span>
              <strong className="text-white text-sm font-sans">Full Preseason Slate</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">NATIONAL TV CHANNEL</span>
              <strong className="text-yellow-400 text-sm font-sans">NFL Network & ESPN</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">STREAMING HUB</span>
              <strong className="text-emerald-400 text-sm font-sans">NFL+ & FuboTV</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">FEATURED MATCHUP</span>
              <strong className="text-blue-400 text-sm font-sans">Bills vs. Browns (31-7)</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            1. Today&apos;s Full NFL Preseason Matchup Schedule & Kickoff Times
          </h2>
          <p>
            The 2026 NFL preseason features an action-packed slate of games across Thursday, Friday, Saturday, and Sunday windows. Saturday represents the flagship broadcast day of the preseason schedule, with up to 10 matchups kicking off from early afternoon through late evening.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Matchup</th>
                  <th className="p-3">Kickoff Time (EST)</th>
                  <th className="p-3">National & Local TV Channels</th>
                  <th className="p-3">Primary Live Stream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Buffalo Bills at Cleveland Browns</td>
                  <td className="p-3 text-yellow-400 font-bold">1:00 PM ET</td>
                  <td className="p-3">NFL Network | WIVB CBS 4 (BUF) | WOIO CBS 19 (CLE)</td>
                  <td className="p-3 text-emerald-400">NFL+ / Paramount+</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Atlanta Falcons at Indianapolis Colts</td>
                  <td className="p-3 text-yellow-400 font-bold">1:00 PM ET</td>
                  <td className="p-3">Local Affiliate Networks | WXIN FOX 59</td>
                  <td className="p-3 text-emerald-400">Fubo / NFL+</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Kansas City Chiefs at Detroit Lions</td>
                  <td className="p-3 text-yellow-400 font-bold">4:00 PM ET</td>
                  <td className="p-3">NFL Network | KSHB 41 NBC | WJBK FOX 2</td>
                  <td className="p-3 text-emerald-400">NFL+ / YouTube TV</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">New England Patriots at Carolina Panthers</td>
                  <td className="p-3 text-yellow-400 font-bold">7:00 PM ET</td>
                  <td className="p-3">Local Broadcast Affiliates | WBZ CBS 4</td>
                  <td className="p-3 text-emerald-400">Hulu + Live TV / NFL+</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">San Francisco 49ers at Las Vegas Raiders</td>
                  <td className="p-3 text-yellow-400 font-bold">10:00 PM ET</td>
                  <td className="p-3">NFL Network | KPIX CBS 5 | KVVU FOX 5</td>
                  <td className="p-3 text-emerald-400">NFL+ / Fubo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/sports-bar-fans.webp"
              alt="Fans following live NFL game schedules on multi-screen displays"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Sports fans gathering to follow multi-game preseason slates on live TV.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            2. TV Channel Broadcast Map for Today&apos;s Slate
          </h2>
          <p>
            Understanding where to locate games on your cable box or streaming guide relies on local geography:
          </p>
          <p>
            Official broadcast details from <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> and <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> show that games carrying national broadcasts on <strong>NFL Network</strong> are accessible nationwide, except in the immediate home television markets of the participating teams, where local over-the-air affiliates take precedence.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            3. Featured Matchups & Key Quarterback Rotations
          </h2>
          <p>
            Preseason football offers fans an exclusive look at backup quarterback competitions, rookie draft picks, and roster bubble players fighting for 53-man spots.
          </p>
          <p>
            In today&apos;s featured matchup between Buffalo and Cleveland, veteran backup <strong>Kyle Allen</strong> led Buffalo&apos;s offense effectively while franchise starter Josh Allen rested. Allen connected with Mecole Hardman Jr. for a touchdown pass as Buffalo surged to a 31-7 victory.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            4. Live Score Tracking & Box Score Links
          </h2>
          <p>
            Tracking live scores and player stats during preseason Saturday slates is seamless via digital sports platforms on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a>. Real-time updates track passing yards, rushing attempts, sack numbers, and quarter-by-quarter scoring drives.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-500 pl-3">
            5. Weather & Stadium Venue Overview
          </h2>
          <p>
            August weather across outdoor NFL venues can impact kickoff times. For instance, the Buffalo Bills at Cleveland Browns matchup experienced a 60-minute severe weather delay due to lightning in the Lake Erie vicinity before play resumed under mild rain.
          </p>
          <p>
            For full game schedules, team roster breakdowns, and TV streaming options, explore the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Today&apos;s Preseason Games
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">What NFL games are playing today?</h3>
              <p className="text-sm text-zinc-300">
                During Preseason Week 2, matchups include Bills at Browns, Falcons at Colts, Chiefs at Lions, Patriots at Panthers, and 49ers at Raiders.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">What channel is the Bills preseason game on today?</h3>
              <p className="text-sm text-zinc-300">
                The Buffalo Bills preseason game airs on NFL Network nationally, and over-the-air on WIVB CBS Channel 4 in Buffalo.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Where can I see the complete Buffalo Bills schedule?</h3>
              <p className="text-sm text-zinc-300">
                Head to the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link> for complete game dates, kickoff times, and streaming options.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
