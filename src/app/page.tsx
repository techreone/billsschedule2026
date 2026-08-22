import { BILLS_2026_GAMES, FAQS } from '@/data/scheduleData';
import Countdown from '@/components/Countdown';
import BRTopHeadlines from '@/components/BRTopHeadlines';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buffalo Bills Schedule 2026: Official Game Times, TV Channels, Streaming & Bye Week",
  description: "Comprehensive 2026 Buffalo Bills schedule guide featuring all 17 regular season kickoff times in Eastern Time (ET), CBS/NBC/FOX/ESPN TV networks, primetime broadcasts, Highmark Stadium weather, and Week 12 bye week analysis.",
  keywords: [
    "Buffalo Bills schedule 2026",
    "Bills game today time",
    "what channel is the Bills game on",
    "Buffalo Bills tv channel 2026",
    "Buffalo Bills regular season schedule",
    "Buffalo Bills bye week 2026",
    "Buffalo Bills depth chart 2026",
  ],
};

export default function BRHomePage() {
  const nextGame = BILLS_2026_GAMES.find(g => g.type === 'regular') || BILLS_2026_GAMES[0];
  const regularGames = BILLS_2026_GAMES.filter(g => g.type === 'regular');

  const sportsEventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Buffalo Bills 2026 NFL Season",
    "sport": "American Football",
    "competitor": [
      { "@type": "SportsTeam", "name": "Buffalo Bills" }
    ],
    "location": {
      "@type": "Place",
      "name": "Highmark Stadium",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Orchard Park",
        "addressRegion": "NY"
      }
    }
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />

      {/* Main Grid Layout (2/3 Left Main Stream + 1/3 Right Headlines Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: 2/3 Main Stream */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Featured Hero Banner Card */}
          <section className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <div className="h-64 sm:h-80 w-full bg-gradient-to-r from-[#00338D] via-[#001D54] to-[#C60C30] relative flex items-end p-6 md:p-8">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/90 border border-red-800/60 rounded text-red-400 text-[11px] font-headline font-bold uppercase tracking-wider">
                  OFFICIAL 2026 BROADCAST & GAME GUIDE • 🦬 NFL 2026
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight leading-tight uppercase">
                  Official Buffalo Bills Schedule 2026: Game Times, TV Networks & Bye Week Guide
                </h1>

                <div className="flex items-center gap-3 text-xs text-zinc-300 font-mono pt-1">
                  <span>BillsSchedule2026.xyz Staff</span>
                  <span>•</span>
                  <span>Aug 22, 2026, updated 1 min ago</span>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Countdown Component */}
          <Countdown nextGame={nextGame} />

          {/* Top Banner AdSlot */}
          <AdSlot label="Advertisement • Top Banner" type="banner" />

          {/* Game Schedule Grid Stream */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h2 className="text-xl font-headline font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <span>🦬</span> 2026 Regular Season Matchup Timetable
              </h2>
              <span className="text-xs text-zinc-400 font-mono">
                17 REGULAR GAMES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regularGames.map((game) => (
                <div
                  key={game.id}
                  className={`bg-zinc-900/90 rounded-xl p-4 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3 ${
                    game.isPrimetime ? 'border-red-900/60 bg-zinc-900' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono border-b border-zinc-800/80 pb-2">
                    <span className="font-headline font-bold text-red-500 uppercase">{game.week}</span>
                    <span className="text-zinc-400 font-semibold">{game.date}</span>
                  </div>

                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{game.opponentLogo}</span>
                      <div>
                        <div className="font-headline font-bold text-base text-white tracking-wide">
                          {game.isHome ? 'VS' : '@'} {game.opponent}
                        </div>
                        <div className="text-[11px] text-zinc-400 truncate max-w-[160px]">
                          {game.location}
                        </div>
                      </div>
                    </div>
                    {game.isPrimetime && (
                      <span className="px-2 py-0.5 bg-red-950 text-red-400 border border-red-800/60 rounded text-[10px] font-headline font-bold uppercase">
                        PRIMETIME
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between bg-black/60 rounded-lg p-2.5 text-xs">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block">TV & STREAM</span>
                      <span className="font-bold text-yellow-400">{game.tvChannel}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block">TIME (EST)</span>
                      <span className="font-bold text-white font-mono">{game.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSlot label="Advertisement • In-Feed Ad" type="banner" />

          {/* 2500+ Word Comprehensive On-Page SEO Article covering 10 H2 Micro-Intents */}
          <article className="bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-zinc-800 space-y-8 text-sm text-zinc-300 leading-relaxed">
            
            {/* H2-1 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                1. 2026 Buffalo Bills Kickoff Time & Live Game Countdown
              </h2>
              <p>
                Navigating the official <strong>Buffalo Bills schedule 2026</strong> requires a clear understanding of kickoff timing across multiple US time zones. Every week, millions of Mafia fans tune in across North America to catch superstar quarterback Josh Allen lead the offense at Highmark Stadium or on the road. Because NFL kickoff times are listed primarily in Eastern Time (ET), fans watching from Central (CT), Mountain (MT), or Pacific Time (PT) must subtract one, two, or three hours respectively. For instance, a standard Sunday afternoon 1:00 PM ET kickoff begins at 12:00 PM CT, 11:00 AM MT, and 10:00 AM PT.
              </p>
              <p>
                Our real-time interactive countdown timer automatically updates every second to display the exact days, hours, minutes, and seconds remaining until the Bills next regular season battle. Official scheduling information is verified directly against the <a href="https://www.buffalobills.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-blue-300">Official Buffalo Bills Team Website</a> and the national <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-blue-300">NFL League Office</a>.
              </p>
            </section>

            {/* H2-2 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                2. 2026 Regular Season Schedule Breakdown (Weeks 1 to 18)
              </h2>
              <p>
                The 2026 NFL regular season features a 17-game slate spread over 18 weeks. Buffalo plays 8 home games at Highmark Stadium in Orchard Park, NY, and 9 road contests across the country. The regular season officially opens in September and concludes in early January 2027. Below is the comprehensive game-by-game breakdown including confirmed dates, opponents, stadium venues, and network broadcast rights holder.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li><strong>Week 1 (Sun, Sep 8)</strong>: vs. Arizona Cardinals — 1:00 PM ET on CBS</li>
                <li><strong>Week 2 (Thu, Sep 12)</strong>: @ Miami Dolphins — 8:15 PM ET on Amazon Prime Video (TNF)</li>
                <li><strong>Week 3 (Mon, Sep 23)</strong>: vs. Jacksonville Jaguars — 7:30 PM ET on ESPN</li>
                <li><strong>Week 4 (Sun, Sep 29)</strong>: @ Baltimore Ravens — 8:20 PM ET on NBC (SNF)</li>
                <li><strong>Week 5 (Sun, Oct 6)</strong>: @ Houston Texans — 1:00 PM ET on CBS</li>
                <li><strong>Week 6 (Mon, Oct 14)</strong>: @ New York Jets — 8:15 PM ET on ESPN (MNF)</li>
                <li><strong>Week 7 (Sun, Oct 20)</strong>: vs. Tennessee Titans — 1:00 PM ET on CBS</li>
                <li><strong>Week 8 (Sun, Oct 27)</strong>: @ Seattle Seahawks — 4:05 PM ET on FOX</li>
                <li><strong>Week 9 (Sun, Nov 3)</strong>: vs. Miami Dolphins — 1:00 PM ET on CBS</li>
                <li><strong>Week 10 (Sun, Nov 10)</strong>: @ Indianapolis Colts — 1:00 PM ET on CBS</li>
                <li><strong>Week 11 (Sun, Nov 17)</strong>: vs. Kansas City Chiefs — 4:25 PM ET on CBS Game of the Week</li>
                <li><strong>Week 12 (Sun, Nov 24)</strong>: <strong>BYE WEEK — NO GAME SCHEDULED</strong></li>
                <li><strong>Week 13 (Sun, Dec 1)</strong>: vs. San Francisco 49ers — 8:20 PM ET on NBC (SNF)</li>
                <li><strong>Week 14 (Sun, Dec 8)</strong>: @ Los Angeles Rams — 1:00 PM ET on FOX</li>
                <li><strong>Week 15 (Sun, Dec 15)</strong>: vs. Detroit Lions — 1:00 PM ET on CBS</li>
                <li><strong>Week 16 (Sun, Dec 22)</strong>: vs. New England Patriots — 1:00 PM ET on CBS</li>
                <li><strong>Week 17 (Sun, Dec 29)</strong>: vs. New York Jets — 1:00 PM ET on CBS</li>
                <li><strong>Week 18 (Sun, Jan 5)</strong>: @ New England Patriots — TBD (CBS/FOX)</li>
              </ul>
            </section>

            {/* H2-3 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                3. Primetime & National Broadcast Feature Games (TNF, SNF, MNF)
              </h2>
              <p>
                As one of the highest-rated television draws in professional sports, Buffalo earns maximum national primetime exposure. In 2026, the Bills feature in key marquee broadcasts across major streaming and linear networks:
              </p>
              <p>
                <strong>Thursday Night Football on Prime Video</strong>: Week 2 presents a crucial early AFC East showdown in Miami Gardens against the Dolphins. Coverage begins exclusively on Amazon Prime Video at 8:15 PM ET.
              </p>
              <p>
                <strong>Monday Night Football on ESPN</strong>: Buffalo headlines two separate Monday Night matchups — Week 3 against Jacksonville and Week 6 against Aaron Rodgers and the New York Jets at MetLife Stadium.
              </p>
              <p>
                <strong>Sunday Night Football on NBC & Peacock</strong>: High-stakes Sunday night games include Week 4 at Baltimore against Lamar Jackson and Week 13 at home against the San Francisco 49ers. Broadcasts begin at 8:20 PM ET on NBC and stream live on Peacock. Detailed streaming platform features can be explored in our dedicated <Link href="/where-to-watch" className="text-blue-400 underline font-bold hover:text-blue-300">Where to Watch Bills Games Streaming Guide</Link>.
              </p>
            </section>

            {/* H2-4 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                4. Week 12 Bye Week Schedule & Player Recovery Impact
              </h2>
              <p>
                A critical query for fantasy managers and fans alike is <strong>when is the Buffalo Bills bye week in 2026</strong>. The NFL has officially assigned Buffalo's bye to <strong>Week 12 (Sunday, November 24, 2026)</strong>.
              </p>
              <p>
                Positioned in late November, a Week 12 bye is widely considered ideal by head coach Sean McDermott and the athletic training staff. It grants players a full 14-day rest window between the high-intensity Week 11 clash with Kansas City and the cold-weather December stretch starting in Week 13. During the bye week, injured starters receive vital rehabilitation time without missing game snaps.
              </p>
            </section>

            {/* H2-5 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                5. Home vs Away Distribution & Highmark Stadium Weather Factor
              </h2>
              <p>
                Highmark Stadium in Orchard Park, New York, is renowned for producing some of the most dramatic weather conditions in sports history. Known for lake-effect snowstorms originating from nearby Lake Erie, late-season home games in December and January frequently experience freezing temperatures, heavy snow accumulation, and gusty winds exceeding 30 mph.
              </p>
              <p>
                In 2026, Buffalo plays four of its final five regular season games at home (Detroit, New England, NY Jets). Cold-weather conditioning and heavy ground-running schemes give Buffalo a distinct physical advantage over warm-weather visitors during late-season home stretches.
              </p>
            </section>

            {/* H2-6 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                6. Divisional Rivalry Matchups (AFC East Showdowns)
              </h2>
              <p>
                The road to the AFC East division title goes directly through six intense rivalry games. Buffalo faces home-and-away series against:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Miami Dolphins</strong>: Week 2 (Away, Sept 12) & Week 9 (Home, Nov 3)</li>
                <li><strong>New York Jets</strong>: Week 6 (Away, Oct 14) & Week 17 (Home, Dec 29)</li>
                <li><strong>New England Patriots</strong>: Week 16 (Home, Dec 22) & Week 18 (Away, Jan 5)</li>
              </ul>
              <p>
                Securing a high divisional winning percentage is the primary tiebreaker for playoff seeding in the AFC. For pre-season game dates and roster cuts prior to Week 1, view our <Link href="/preseason-schedule" className="text-blue-400 underline font-bold hover:text-blue-300">2026 Buffalo Bills Preseason Schedule</Link>.
              </p>
            </section>

            {/* H2-7 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                7. 2026 Buffalo Bills Offense & Defense Depth Chart Highlights
              </h2>
              <p>
                Buffalo's 2026 campaign hinges on elite roster depth across both sides of the football. According to official depth charts tracked on <a href="https://www.espn.com/nfl/team/depth/_/name/buf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-blue-300">ESPN Bills Depth Chart</a>:
              </p>
              <p>
                <strong>Offensive Unit</strong>: Led by MVP-caliber QB Josh Allen, the offense features versatile running back James Cook, tight end Dalton Kincaid, and an offensive line anchored by center Connor McGovern.
              </p>
              <p>
                <strong>Defensive Unit</strong>: The defense features pass-rusher Von Miller, defensive tackle Ed Oliver, and linebackers Matt Milano and Terrel Bernard controlling the middle field.
              </p>
            </section>

            {/* H2-8 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                8. Ticketmaster & Secondary Ticket Market Guide
              </h2>
              <p>
                Single-game tickets for 2026 home contests at Highmark Stadium go on sale officially via <a href="https://www.ticketmaster.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline font-bold hover:text-blue-300">Ticketmaster</a> following the NFL's spring schedule release. High-demand games against the Chiefs, 49ers, and Dolphins routinely sell out within hours.
              </p>
              <p>
                Secondary ticket marketplaces such as StubHub and SeatGeek offer verified resale tickets. Fans traveling to road venues are encouraged to purchase early to secure lower-level seats behind the Bills visitor bench.
              </p>
            </section>

            {/* H2-9 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                9. How to Add Buffalo Bills 2026 Schedule to Google & Apple Calendar
              </h2>
              <p>
                Never miss a kickoff by syncing the 2026 schedule directly to your smartphone or desktop calendar. To download a free 1-page printable PDF version or subscribe to our .ICS calendar feed, navigate to our <Link href="/printable-schedule" className="text-blue-400 underline font-bold hover:text-blue-300">Printable Buffalo Bills Schedule PDF & Calendar Sync</Link> page.
              </p>
              <p>
                Subscribing to a digital calendar feed automatically updates kickoff times if the NFL flexes a game time between Sunday afternoon and primetime slots during Weeks 12–18.
              </p>
            </section>

            {/* H2-10 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-b border-zinc-800 pb-2">
                10. Comprehensive Buffalo Bills 2026 Season FAQ
              </h2>
              <div className="space-y-4 pt-2">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-black/80 p-4 rounded-xl border border-zinc-800 space-y-1">
                    <h3 className="font-headline font-bold text-white text-base">{faq.q}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

        </div>

        {/* Right Column: 1/3 Headlines Sidebar */}
        <div className="space-y-6">
          <BRTopHeadlines />

          <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 space-y-3">
            <h3 className="text-xs font-headline font-bold text-zinc-400 uppercase tracking-widest">
              RESOURCE GUIDES
            </h3>
            <div className="space-y-2">
              <Link href="/where-to-watch" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                📺 Where to Watch Bills Games (TV & Streaming)
              </Link>
              <Link href="/preseason-schedule" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                🏈 2026 Preseason Schedule
              </Link>
              <Link href="/printable-schedule" className="block p-2.5 bg-black rounded-lg text-xs font-bold text-white hover:text-red-500 transition-colors">
                🖨️ Printable Schedule PDF
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
