import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "When Is the First Bills Game? 2026 Opener Date, Time & TV",
  description: "The Bills open the 2026 season on Sunday, September 13 at the Houston Texans - 1 PM ET on CBS. Plus the preseason finale, home opener and first-month schedule.",
  keywords: [
    "when is the first bills game",
    "bills first game 2026",
    "buffalo bills season opener 2026",
    "bills first game",
    "when do the bills play again",
    "bills vs texans 2026",
    "bills home opener 2026",
    "next bills game"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/when-is-first-bills-game`,
  },
  openGraph: {
    title: "When Is the First Bills Game? 2026 Opener Date, Time & TV",
    description: "The Bills open the 2026 season on Sunday, September 13 at the Houston Texans - 1 PM ET on CBS. Plus the preseason finale, home opener and first-month schedule.",
    url: `${SITE_CONFIG.url}/when-is-first-bills-game`,
    type: "article",
  },
};

export default function WhenIsFirstBillsGamePage() {
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
        "name": "When Is the First Bills Game",
        "item": "https://billsschedule2026.online/when-is-first-bills-game"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When Is the First Buffalo Bills Game of the 2026 Season?",
    "description": "The Bills open the 2026 NFL regular season on Sunday, September 13, 2026 against the Houston Texans at NRG Stadium — 1:00 PM ET on CBS.",
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
        "name": "When is the first Buffalo Bills game of the 2026 season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Bills open the 2026 regular season on Sunday, September 13, 2026, visiting the Houston Texans at NRG Stadium. Kickoff is 1:00 PM ET on CBS."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Bills' first home game in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buffalo's home opener is Thursday, September 17, 2026 against the Detroit Lions — a 8:15 PM ET kickoff on Amazon Prime Video's Thursday Night Football."
        }
      },
      {
        "@type": "Question",
        "name": "Do the Bills have any preseason games left before the regular season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — one. The Bills close the preseason on Thursday, August 27, 2026, hosting the Pittsburgh Steelers at 7:00 PM ET at Highmark Stadium, broadcast nationally on NFL Network."
        }
      },
      {
        "@type": "Question",
        "name": "How can I stream the Bills' season opener?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a CBS national-window game, Bills–Texans streams live on Paramount+ and NFL+, and is available out-of-market through NFL Sunday Ticket."
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
        <span className="text-white font-semibold">When Is the First Bills Game</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-xs font-headline font-bold uppercase tracking-wider">
          SEASON OPENER · COUNTDOWN ON
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          When Is the First Bills Game? 2026 Season Opener: Sept 13 at Texans
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          The wait ends Sunday, September 13, 2026. The Buffalo Bills open the regular season on the road against the Houston Texans — a 1:00 PM ET kickoff on CBS from NRG Stadium. One preseason tune-up remains before the real thing: Thursday, August 27 against Pittsburgh.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Week 1: Sun, Sep 13 · 1:00 PM ET · CBS
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
            src="/images/bills/first-game-card.webp"
            alt="Buffalo Bills 2026 season opener infographic: Bills at Texans, September 13, 1 PM ET on CBS"
            width={1000}
            height={406}
            className="rounded-xl border border-zinc-800 w-full h-auto"
          />
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-600 pl-3">
            1. Bills Season Opener: Everything You Need to Know
          </h2>
          <p>
            Per <a href="https://www.espn.com/nfl/story/_/id/49679821/2026-nfl-season-buffalo-bills-final-roster-projection-depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN&apos;s 2026 Bills preview</a>, Buffalo opens its season with an AFC road trip: <strong>Bills at Texans, Sunday, September 13, 2026, 1:00 PM ET on CBS</strong> from NRG Stadium in Houston. It&apos;s a marquee early test against a Texans team expected to contend for the AFC South, and it doubles as the first data point in the conference seeding picture that could matter in January.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Date:</strong> Sunday, September 13, 2026</li>
            <li><strong>Kickoff:</strong> 1:00 PM ET</li>
            <li><strong>Matchup:</strong> Buffalo Bills @ Houston Texans</li>
            <li><strong>Venue:</strong> NRG Stadium, Houston, TX (roofed — no weather risk)</li>
            <li><strong>TV:</strong> CBS (national Sunday afternoon window)</li>
            <li><strong>Streaming:</strong> Paramount+, NFL+; out-of-market via Sunday Ticket</li>
            <li><strong>Radio:</strong> WGR 550 AM (Buffalo flagship), SiriusXM NFL Radio</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            2. One Preseason Game Left: Bills vs Steelers, Thursday Night
          </h2>
          <p>
            Before the opener counts, there&apos;s one final audition. The Bills host the <strong>Pittsburgh Steelers on Thursday, August 27 at 7:00 PM ET</strong> at Highmark Stadium, with the game airing nationally on NFL Network. Starters typically play into the second quarter in this dress-rehearsal slot, but the bigger story is the fight for roster spots — cutdown day follows just three days later (Sunday, August 30, 6:00 PM ET). Our <Link href="/bills-roster-projection-2026" className="text-blue-400 hover:underline">53-man roster projection</Link> covers who is playing for their job.
          </p>
          <p>
            Buffalo enters the finale 2-0 in exhibition play after handling Carolina and Cleveland — including the <Link href="/bills-vs-browns-prediction" className="text-blue-400 hover:underline">31-7 statement win over the Browns</Link>. If you&apos;re wondering about watching options for preseason leftovers, our guide to where to watch covers every platform: <Link href="/where-to-watch" className="text-blue-400 hover:underline">how to watch Bills games without cable</Link>.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            3. The First Home Game: Thursday Night vs Detroit
          </h2>
          <p>
            Fans asking &quot;when does the Bills home schedule start&quot; get a treat: the <strong>home opener comes fast, on Thursday, September 17 — a standalone Thursday Night Football game against the Detroit Lions at 8:15 PM ET on Amazon Prime Video</strong>. That means just four days after the Houston trip, Orchard Park hosts a presumed NFC contender under the lights in the first regular-season game of the new Highmark Stadium era&apos;s second act.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Week</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Opponent</th>
                  <th className="p-3">Time / TV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Pre W3</td>
                  <td className="p-3">Thu, Aug 27</td>
                  <td className="p-3">vs Pittsburgh Steelers</td>
                  <td className="p-3 text-yellow-400">7:00 PM · NFL Network</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Week 1</td>
                  <td className="p-3">Sun, Sep 13</td>
                  <td className="p-3">@ Houston Texans</td>
                  <td className="p-3 text-emerald-400">1:00 PM · CBS</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Week 2</td>
                  <td className="p-3">Thu, Sep 17</td>
                  <td className="p-3">vs Detroit Lions</td>
                  <td className="p-3 text-yellow-400">8:15 PM · Prime Video</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Week 3</td>
                  <td className="p-3">Sun, Sep 27</td>
                  <td className="p-3">vs LA Chargers</td>
                  <td className="p-3">1:00 PM · CBS</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">Week 4</td>
                  <td className="p-3">Sun, Oct 4</td>
                  <td className="p-3">vs New England Patriots</td>
                  <td className="p-3">1:00 PM · CBS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs font-mono text-zinc-500">Times ET. National windows per league schedule; late-season dates remain subject to flex scheduling.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            4. How to Watch or Stream the Opener From Anywhere
          </h2>
          <p>
            As a CBS single-header window game, Bills–Texans is one of the most accessible broadcasts of the year. In-market fans can watch free over the air on WIVB (CBS Buffalo) or stream on <strong>Paramount+</strong>; NFL+ carries the game on mobile devices. Out-of-market viewers need <strong>NFL Sunday Ticket</strong>, available through YouTube — our breakdown of <Link href="/does-nfl-sunday-ticket-include-preseason-games" className="text-blue-400 hover:underline">what Sunday Ticket does and doesn&apos;t include</Link> explains why preseason games are treated differently.
          </p>
          <p>
            Traveling to Houston? NRG Stadium&apos;s roof means climate control regardless of Texas heat, and single-game tickets were released after the May schedule drop — the secondary market near face value has been the story for early-season road games. For the complete month-by-month view, grab the <Link href="/printable-schedule" className="text-blue-400 hover:underline">free printable Bills schedule PDF</Link>.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            FAQ: Bills First Game 2026
          </h2>
          <div className="space-y-5">
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">When do the Bills play again?</h3>
              <p className="text-sm text-zinc-400">Thursday, August 27 at 7:00 PM ET — the preseason finale against Pittsburgh at Highmark Stadium, live on NFL Network.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Is the season opener at home?</h3>
              <p className="text-sm text-zinc-400">No. Buffalo opens on the road in Houston on September 13. The first home game is Thursday, September 17 against Detroit on Prime Video.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">Who do the Bills play in Week 1?</h3>
              <p className="text-sm text-zinc-400">The Houston Texans, 1:00 PM ET Sunday on CBS at NRG Stadium — an early AFC playoff-picture matchup.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-base">What channel is the Bills game on today?</h3>
              <p className="text-sm text-zinc-400">Check our homepage timetable — it lists today&apos;s game, channel and kickoff time automatically during the season.</p>
            </div>
          </div>
        </section>
      </article>

      <RelatedTrendPages slugs={['preseason-schedule', 'where-to-watch', 'printable-schedule', 'bills-roster-projection-2026', 'is-josh-allen-playing-today']} />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />
    </div>
  );
}
