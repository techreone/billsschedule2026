import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Tampa Bay Buccaneers Depth Chart 2026: Starters & Roster",
  description: "Tampa Bay Buccaneers depth chart 2026: Baker Mayfield offense, Mike Evans, Chris Godwin, Rachaad White, Todd Bowles defense, Tristan Wirfs O-line, and NFC South outlook.",
  keywords: [
    "tampa bay buccaneers depth chart 2026",
    "bucs starters 2026",
    "baker mayfield buccaneers depth chart",
    "mike evans chris godwin bucs",
    "rachaad white bucs depth chart",
    "todd bowles buccaneers defense",
    "tristan wirfs bucs o line",
    "bucs 53 man roster projection"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tampa-bay-buccaneers-depth-chart-2026`,
  },
};

export default function BuccaneersDepthChartPage() {
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
        "name": "Tampa Bay Buccaneers Depth Chart 2026",
        "item": "https://billsschedule2026.online/tampa-bay-buccaneers-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is starting at quarterback for Tampa Bay in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Baker Mayfield leads the Tampa Bay Buccaneers as the starting quarterback, operating an aggressive play-action passing scheme under offensive coordinator Liam Coen."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the top wide receivers on the Buccaneers depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perennial Pro Bowler Mike Evans anchors the WR1 position on the boundary, paired with veteran slot wizard Chris Godwin and explosive rookie Tez Johnson."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Buccaneers defensive line and linebackers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nose tackle Vita Vea anchors the interior defensive line, while veteran linebacker Lavonte David commands Todd Bowles' aggressive 3-4 defensive front alongside YaYa Diaby."
        }
      },
      {
        "@type": "Question",
        "name": "Who plays left tackle for Tampa Bay in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro tackle Tristan Wirfs anchors the left side of Tampa Bay's offensive line, providing elite blindside protection for Baker Mayfield."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0b0e14] text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#121722]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/bills/bills.webp"
              alt="Buffalo Bills Schedule 2026 Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="text-xl font-bold text-white tracking-tight">Buffalo Bills Schedule 2026</span>
              <p className="text-xs text-blue-400 font-mono">NFL Depth Charts & Media Hub</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-300">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/preseason-schedule" className="hover:text-blue-400 transition-colors">Preseason</Link>
            <Link href="/where-to-watch" className="hover:text-blue-400 transition-colors">Where to Watch</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#161d2f] to-[#0b0e14] border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <nav className="flex justify-center items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <Link href="/" className="hover:text-blue-400 transition-colors">Buffalo Bills Schedule 2026</Link>
            <span>/</span>
            <span className="text-blue-400">Buccaneers Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/buccaneers.webp" alt="Tampa Bay Buccaneers Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 NFC South Champions Roster</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tampa Bay Buccaneers Depth Chart 2026: Starters & Defensive Scheme
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive position breakdown of the 2026 Tampa Bay Buccaneers depth chart. Analyze Baker Mayfield's passing attack, Todd Bowles' pressure defense, and offensive line pass protection.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Baker Mayfield</div>
            <div><span className="text-slate-500">RB1:</span> Rachaad White</div>
            <div><span className="text-slate-500">WR1:</span> Mike Evans</div>
            <div><span className="text-slate-500">LT Anchor:</span> Tristan Wirfs</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

        {/* Depth Chart Table */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">2026 Tampa Bay Buccaneers Depth Chart Starters</h2>
              <p className="text-sm text-slate-400">Projected offensive and defensive depth hierarchy.</p>
            </div>
            <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono rounded">NFC South</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-rose-400 uppercase tracking-wider">
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Starter (1st String)</th>
                  <th className="p-3.5">Backup (2nd String)</th>
                  <th className="p-3.5">Rotational / Reserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Baker Mayfield</td>
                  <td className="p-3.5 text-slate-300">Kyle Trask</td>
                  <td className="p-3.5 text-slate-400">John Wolford</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Rachaad White</td>
                  <td className="p-3.5 text-slate-300">Bucky Irving</td>
                  <td className="p-3.5 text-slate-400">Chase Edmonds</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 1 (WR-X)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Mike Evans</td>
                  <td className="p-3.5 text-slate-300">Trey Palmer</td>
                  <td className="p-3.5 text-slate-400">Rakim Jarrett</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 2 (WR-Z)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Chris Godwin</td>
                  <td className="p-3.5 text-slate-300">Tez Johnson</td>
                  <td className="p-3.5 text-slate-400">Sterling Shepard</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Cade Otton</td>
                  <td className="p-3.5 text-slate-300">Ko Kieft</td>
                  <td className="p-3.5 text-slate-400">Devin Culp</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Tristan Wirfs</td>
                  <td className="p-3.5 text-slate-300">Justin Skule</td>
                  <td className="p-3.5 text-slate-400">Luke Haggard</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Nose Tackle / DT</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Vita Vea</td>
                  <td className="p-3.5 text-slate-300">Calijah Kancey</td>
                  <td className="p-3.5 text-slate-400">Logan Hall</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Inside Linebacker (ILB)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Lavonte David & K.J. Britt</td>
                  <td className="p-3.5 text-slate-300">SirVocea Dennis</td>
                  <td className="p-3.5 text-slate-400">Vi Jones</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Cornerbacks (CB)</td>
                  <td className="p-3.5 text-rose-300 font-semibold">Jamel Dean & Zyon McCollum</td>
                  <td className="p-3.5 text-slate-300">Tyrek Funderburk</td>
                  <td className="p-3.5 text-slate-400">Bryce Hall</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Starters: Baker Mayfield, Mike Evans & Rachaad White
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Tampa Bay Buccaneers offense operates around veteran quarterback Baker Mayfield, who continues to demonstrate elite chemistry with star wide receiver Mike Evans and slot target Chris Godwin. Official data on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> illustrates Evans' historic 1,000-yard receiving streak, making him the undisputed WR1 on Tampa Bay's depth chart.
            </p>
            <p>
              In the backfield, third-year running back Rachaad White leads the team in touches, paired with explosive rookie Bucky Irving to create a dangerous dual-threat running back room.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Todd Bowles Defensive Scheme: Lavonte David, Vita Vea & Linebacker Core
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Head coach Todd Bowles' signature 3-4 blitzing defense relies heavily on nose tackle Vita Vea to command double-teams in the middle. Behind Vea, perennial linebacking legend Lavonte David continues to erase short crossing routes and diagnose run schemes. Analysis on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> emphasizes Tampa Bay's high blitz percentage from nickel and dime alignments.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Line Protection: Tristan Wirfs & Interior Blocking Tiers
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Left tackle Tristan Wirfs anchors the offensive line, consistently ranking among the top pass-blocking tackles in football according to <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>. Supported by rookie center Graham Barton and guard Ben Bredeson, Tampa Bay's front five gives Mayfield clean pockets to attack deep downfield.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Secondary Rotation & Safety Depth Chart Assignments
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Cornerbacks Jamel Dean and Zyon McCollum provide length and speed on the perimeter, while All-Pro safety Antoine Winfield Jr. serves as the secondary playmaker who disguises coverages and creates turnovers.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              NFC South Title Defense & Roster Cutdown Competitions
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              As the Buccaneers pursue another NFC South crown in 2026, roster battles in August focused on securing rotational depth behind their starting pass rushers and backup tight ends.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To track full game day schedules, kickoff times, and TV channel broadcasts across the league, visit our main <Link href="/" className="text-rose-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> directory.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h3 className="text-base font-bold text-rose-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The First Official Chart: 22 Named Starters
        </h2>
        <p>
          Tampa Bay&apos;s first depth chart listing of the season arrived ahead of the preseason opener, with the club publishing its projected 22 starters across offense and defense through <a href="https://www.buccaneers.com/news/looming-preseason-opener-means-first-bucs-depth-chart-2026" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Buccaneers.com</a> — a transparency level several franchises still avoid until cutdown week. The offensive line anchor points are settled and star-powered: <strong>Tristan Wirfs</strong> holds the left tackle seat with Benjamin Chukwuma listed as his backup, Ben Bredeson mans left guard, and Graham Barton centers the interior per the team&apos;s own <a href="https://www.buccaneers.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">official chart</a>.
        </p>
        <p>
          The receiver room shows a fascinating succession note at the top: Chris Godwin Jr. is listed first with rookie Tez Johnson directly behind him — a mentor-and-development pairing that tells you exactly how the staff views its short-term and long-term boundary plans.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          A Base 3-4 With Defined Edges
        </h2>
        <p>
          Defensively, national projection services like <a href="https://www.ourlads.com/nfldepthcharts/depthchart/TB" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Ourlads</a> frame Tampa Bay as a base 3-4 front — a structure that demands genuinely differentiated edge defenders rather than interchangeable speed. That schematic requirement shaped the back seven&apos;s construction, and it means the fourth and fifth linebacker seats carry more weekly defensive value here than the same numbers do in a 4-3 building.
        </p>
        <p>
          The secondary&apos;s depth slots, meanwhile, function as the roster&apos;s special-teams engine room — the final three or four defensive-back seats will be decided by coverage-unit tape from the preseason finale more than by defensive reps.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Why Tampa&apos;s Window Makes Every Tier Matter
        </h2>
        <p>
          Depth charts are competitive documents only when the top tier can actually cash expectations. Tampa Bay&apos;s construction — an established quarterback, two decorated boundary receivers, and a Pro Bowl-caliber tackle — signals a win-now posture in a division that remains winnable late into Decembers. That makes the middle tiers (interior line rotation, third corner, TE2) legitimate weekly storylines rather than background noise.
        </p>
        <p>
          Fans mapping the NFC picture all season can follow every cross-conference date on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare southern-division builds in the <Link href="/saints-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Saints depth chart guide</Link>.
        </p>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0b0e14] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p>© 2026 billsschedule2026.online. Independent NFL Sports News & Schedule Directory.</p>
          <div className="flex justify-center gap-4 text-slate-400">
            <Link href="/" className="hover:underline">Buffalo Bills Schedule 2026</Link>
            <span>•</span>
            <Link href="/preseason-schedule" className="hover:underline">Preseason Schedule</Link>
            <span>•</span>
            <Link href="/where-to-watch" className="hover:underline">Where to Watch</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
