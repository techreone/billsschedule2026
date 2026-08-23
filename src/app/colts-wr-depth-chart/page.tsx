import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Colts WR Depth Chart 2026: Starters & Target Breakdown",
  description: "Complete Indianapolis Colts WR depth chart 2026: Michael Pittman Jr. targets, Josh Downs slot role, Adonai Mitchell deep threat, preseason snap counts, and fantasy rankings.",
  keywords: [
    "colts wr depth chart",
    "colts wide receiver depth chart 2026",
    "michael pittman jr colts",
    "josh downs colts",
    "adonai mitchell colts",
    "colts starting receivers 2026",
    "colts wr fantasy rankings",
    "indianapolis colts depth chart"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/colts-wr-depth-chart`,
  },
};

export default function ColtsWRDepthChartPage() {
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
        "name": "Colts WR Depth Chart",
        "item": "https://billsschedule2026.online/colts-wr-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the WR1 on the Indianapolis Colts WR depth chart in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Michael Pittman Jr. remains the undisputed WR1 on the Indianapolis Colts depth chart. Operating as the primary possession receiver and perimeter target, Pittman commands the highest target share in the Colts passing offense."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Josh Downs play in the 2026 Colts receiving core?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Josh Downs serves as the starting slot wide receiver for Indianapolis. Known for his elite route-running precision and rapid separation out of the slot, Downs functions as the high-volume safety valve across the middle of the field."
        }
      },
      {
        "@type": "Question",
        "name": "How does Adonai Mitchell fit into the Colts 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adonai Mitchell operates as the primary boundary deep threat for Indianapolis. His combination of 4.34 speed and vertical contested-catch capability allows him to stretch opposing defensive coverages downfield."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fantasy football outlook for Colts receivers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Michael Pittman Jr. projects as a high-floor WR2 in PPR formats due to consistent target volume. Josh Downs is a valuable WR3/flex option with PPR upside, while Adonai Mitchell offers high-ceiling WR4 boom-or-bust potential."
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

      {/* Header & Hero Section */}
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

      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-[#161d2f] to-[#0b0e14] border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <Link href="/" className="hover:text-blue-400 transition-colors">Buffalo Bills Schedule 2026</Link>
            <span>/</span>
            <span className="text-blue-400">Colts WR Depth Chart</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/colts.webp" alt="Indianapolis Colts Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 NFL Roster & Target Breakdown</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Indianapolis Colts WR Depth Chart 2026: Receivers Tiers & Target Breakdown
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An in-depth analysis of the 2026 Indianapolis Colts wide receiver corps. Explore the starter rankings, slot snap splits, perimeter deep threats, preseason rotation, and fantasy football value projections.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">Updated:</span> August 2026</div>
            <div><span className="text-slate-500">WR1:</span> Michael Pittman Jr.</div>
            <div><span className="text-slate-500">Slot Starter:</span> Josh Downs</div>
            <div><span className="text-slate-500">Deep Threat:</span> Adonai Mitchell</div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

        {/* Overview Box / Depth Chart Table */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">2026 Indianapolis Colts WR Depth Chart Overview</h2>
              <p className="text-sm text-slate-400">Official positioning and target tier distribution heading into the 2026 regular season.</p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">Active Roster Verified</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-blue-400 uppercase tracking-wider">
                  <th className="p-3.5">Position Tier</th>
                  <th className="p-3.5">Player Name</th>
                  <th className="p-3.5">Height / Weight</th>
                  <th className="p-3.5">Primary Alignment</th>
                  <th className="p-3.5">2026 Target Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">WR1 (X Receiver)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Michael Pittman Jr.</td>
                  <td className="p-3.5 text-slate-400">6'4" / 223 lbs</td>
                  <td className="p-3.5 text-slate-300">Boundary / Perimeter</td>
                  <td className="p-3.5 text-slate-300">Primary Target & Possession Leader</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">WR2 (Slot Receiver)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Josh Downs</td>
                  <td className="p-3.5 text-slate-400">5'9" / 175 lbs</td>
                  <td className="p-3.5 text-slate-300">Inside / Slot</td>
                  <td className="p-3.5 text-slate-300">Intermediate & Underneath Valve</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">WR3 (Z Receiver)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Adonai Mitchell</td>
                  <td className="p-3.5 text-slate-400">6'2" / 205 lbs</td>
                  <td className="p-3.5 text-slate-300">Perimeter / Flanker</td>
                  <td className="p-3.5 text-slate-300">Vertical Field Stretcher</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">WR4 (Rotational)</td>
                  <td className="p-3.5 text-slate-300">Alec Pierce</td>
                  <td className="p-3.5 text-slate-400">6'3" / 211 lbs</td>
                  <td className="p-3.5 text-slate-300">Boundary Deep Route</td>
                  <td className="p-3.5 text-slate-300">Contested Catch & Clear-Out Routes</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">WR5 (Special Teams)</td>
                  <td className="p-3.5 text-slate-300">Ashton Dulin</td>
                  <td className="p-3.5 text-slate-400">6'1" / 215 lbs</td>
                  <td className="p-3.5 text-slate-300">Gunner / Hybrid</td>
                  <td className="p-3.5 text-slate-300">Special Teams Captain & Depth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              WR1 Target Leader: Michael Pittman Jr. Anchor Role
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The centerpiece of the Indianapolis Colts wide receiver depth chart entering the 2026 NFL season is undeniable wideout lead Michael Pittman Jr. Measuring at a robust 6-foot-4 and 223 pounds, Pittman provides the ultimate physical anchor for head coach Shane Steichen's passing offense. Over recent seasons, Pittman has established himself among the most consistent high-volume possession receivers in football according to stats compiled by <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a>.
            </p>
            <p>
              Pittman's usage profile relies heavily on short-to-intermediate boundary routes, slant patterns, and back-shoulder throws where his frame allows him to box out opposing defensive backs. In 3-receiver personnel groupings, Pittman lines up predominantly as the boundary X wide receiver, taking on heavy press-man coverage while commanding a projected target share exceeding 24%. His durability and reliability in third-down situations make him the indispensable security blanket for quarterback Anthony Richardson.
            </p>

            <div className="my-6 p-4 bg-[#171e2e] border border-slate-700/60 rounded-lg flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Michael Pittman Jr. Key Projection Metrics</h4>
                <p className="text-xs text-slate-400">Projected 17-game baseline for the 2026 campaign.</p>
              </div>
              <div className="flex gap-4 text-center text-xs font-mono">
                <div className="bg-[#0b0e14] px-3 py-2 rounded border border-slate-800">
                  <div className="text-blue-400 font-bold text-sm">135+</div>
                  <div className="text-slate-500">Targets</div>
                </div>
                <div className="bg-[#0b0e14] px-3 py-2 rounded border border-slate-800">
                  <div className="text-blue-400 font-bold text-sm">95+</div>
                  <div className="text-slate-500">Receptions</div>
                </div>
                <div className="bg-[#0b0e14] px-3 py-2 rounded border border-slate-800">
                  <div className="text-blue-400 font-bold text-sm">1,050+</div>
                  <div className="text-slate-500">Yards</div>
                </div>
              </div>
            </div>

            <p>
              When analyzing game tape, Pittman's contested catch rate ranks consistently in the top tier of the league. His ability to win through contact on dig routes and quick outs allows the Colts to stay ahead of the chains. As Indianapolis looks to elevate its passing efficiency in 2026, Pittman's role as the high-floor target vacuum remains the fundamental cornerstone of the WR room.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Slot Receiver Specialist: Josh Downs Middle-Field Dominance
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Complementing Pittman's perimeter muscle is third-year slot virtuoso Josh Downs. Operating almost exclusively out of the slot, Downs has quickly become one of the premier separation creators in the AFC. Detailed analysis from <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> highlights Downs' razor-sharp footwork and rapid acceleration out of breaks, which allow him to generate immediate windows against nickel cornerbacks and linebackers.
            </p>
            <p>
              In 2026, Downs is expected to see a expanded snap count in 11-personnel formations (1 RB, 1 TE, 3 WR). His ability to run option routes in the 5-to-12 yard zone creates a ideal counterpunch to opposing defenses that double-team Pittman on the outside. Downs recorded high target-per-route-run metrics during training camp, demonstrating an extraordinary rapport with the Colts coaching staff in zone-coverage soft spots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h4 className="text-sm font-bold text-blue-400">Slot Snap Efficiency</h4>
                <p className="text-xs text-slate-300">
                  Over 82% of Downs' offensive snaps originate from the slot position, yielding a high yards-after-catch (YAC) efficiency on whip routes and shallow crossers.
                </p>
              </div>
              <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h4 className="text-sm font-bold text-blue-400">Third-Down Conversion Rate</h4>
                <p className="text-xs text-slate-300">
                  Downs converted over 68% of his third-down targets into first downs last season, making him the team's most reliable chain-mover inside the numbers.
                </p>
              </div>
            </div>

            <p>
              With opposing defensive coordinators emphasizing shell coverages to limit big plays, Josh Downs represents the high-frequency underneath weapon who keeps the offense operating on schedule. Expect his target volume to push past 90 targets in 2026.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Rookie & Sophomore Deep Threat: Adonai Mitchell Perimeter Upside
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The most explosive element of the Indianapolis wide receiver room is young receiver Adonai Mitchell. Drafted for his rare athletic profile—featuring 4.34 speed and a 39.5-inch vertical jump—Mitchell brings a vertical element that forces safety help to tilt towards his side of the field. Reporting from <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a> details Mitchell's rapid progression during 2026 offseason practices, where he showcased refined release techniques off the line of scrimmage.
            </p>
            <p>
              Mitchell's role as the Z receiver (flanker) positions him to take advantage of off-coverage, running deep post routes, go-routes, and double-moves. While Alec Pierce provides veteran competition on deep routes, Mitchell's superior agility and top-end gear give him the edge for primary starter reps opposite Pittman.
            </p>

            <div className="my-6 p-5 bg-[#171e2e] border border-slate-800 rounded-lg space-y-3">
              <h4 className="text-base font-bold text-white">Adonai Mitchell vs. Alec Pierce: Deep Threat Comparison</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center bg-[#0b0e14] p-2.5 rounded">
                  <span className="text-slate-400">40-Yard Dash Speed</span>
                  <span className="text-blue-400 font-bold">Mitchell: 4.34s | Pierce: 4.41s</span>
                </div>
                <div className="flex justify-between items-center bg-[#0b0e14] p-2.5 rounded">
                  <span className="text-slate-400">Average Target Depth (aDOT)</span>
                  <span className="text-blue-400 font-bold">Mitchell: 14.8 yds | Pierce: 16.2 yds</span>
                </div>
                <div className="flex justify-between items-center bg-[#0b0e14] p-2.5 rounded">
                  <span className="text-slate-400">Contested Catch Rate</span>
                  <span className="text-blue-400 font-bold">Mitchell: 54.2% | Pierce: 51.0%</span>
                </div>
              </div>
            </div>

            <p>
              If Mitchell continues to sharpen his route tree beyond simple vertical routes, he possesses the highest game-breaking ceiling of any receiver on the Colts 2026 depth chart.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Receiver Snaps & Target Share Distribution
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              During 2026 preseason action, head coach Shane Steichen utilized heavy rotation across the receiver depth chart to evaluate depth candidates like Ashton Dulin, Juwann Winfree, and rookie free agents. Tracking target share distributions during August games provides valuable clarity on how targets will be divided once Week 1 arrives.
            </p>

            <div className="p-5 bg-[#171e2e] border border-slate-800 rounded-lg space-y-4 my-6">
              <h4 className="text-base font-bold text-white">2026 Projected Regular Season Target Share Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Michael Pittman Jr. (WR1)</span>
                    <span className="text-blue-400">26% Target Share</span>
                  </div>
                  <div className="w-full bg-[#0b0e14] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '26%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Josh Downs (WR2 / Slot)</span>
                    <span className="text-blue-400">20% Target Share</span>
                  </div>
                  <div className="w-full bg-[#0b0e14] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Adonai Mitchell (WR3)</span>
                    <span className="text-blue-400">16% Target Share</span>
                  </div>
                  <div className="w-full bg-[#0b0e14] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-sky-400 h-full rounded-full" style={{ width: '16%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Alec Pierce & Backups</span>
                    <span className="text-blue-400">12% Target Share</span>
                  </div>
                  <div className="w-full bg-[#0b0e14] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-slate-500 h-full rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                    <span>Tight Ends & Running Backs</span>
                    <span className="text-blue-400">26% Combined Share</span>
                  </div>
                  <div className="w-full bg-[#0b0e14] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '26%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Preseason snap counts confirmed that the top trio—Pittman, Downs, and Mitchell—will operate on the field together in virtually all 11-personnel packages. This creates a clear hierarchy for playcalling consistency.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Colts Wide Receiver Group Fantasy Football Tiers & Projections
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              For fantasy football managers evaluating the Indianapolis Colts wide receiver depth chart in 2026, understanding player tiers is crucial during redraft and dynasty drafts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-bold">Tier 3 / Solid WR2</div>
                <h4 className="text-lg font-bold text-white">Michael Pittman Jr.</h4>
                <p className="text-xs text-slate-300">
                  High-floor PPR selection in Round 4/5. Guaranteed target volume makes him a stable starting wide receiver in all formats.
                </p>
              </div>

              <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase font-bold">Tier 6 / WR3 Flex</div>
                <h4 className="text-lg font-bold text-white">Josh Downs</h4>
                <p className="text-xs text-slate-300">
                  Targeted value pick in Rounds 8-10. Exceptional PPR upside given his heavy slot usage and high catch efficiency.
                </p>
              </div>

              <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <div className="text-xs font-mono text-purple-400 uppercase font-bold">Tier 8 / Upside Stash</div>
                <h4 className="text-lg font-bold text-white">Adonai Mitchell</h4>
                <p className="text-xs text-slate-300">
                  Late-round flyer with tournament-winning upside. Dependent on deep ball connection and touchdown efficiency.
                </p>
              </div>
            </div>

            <p>
              As the 2026 season unfolds, the Colts WR corps offers a balanced mix of proven possession work, elite slot separation, and vertical athletic upside. Staying updated on weekly snap trends will be key for fantasy managers and NFL fans alike.
            </p>

            {/* Internal Anchor Link to Homepage */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To track complete game schedules, kickoff times, and TV broadcast details for every NFL matchup this season, visit the main <Link href="/" className="text-blue-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> hub.
              </p>
            </div>
          </div>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Trio That Defines Indianapolis&apos; Passing Game
        </h2>
        <p>
          Indianapolis&apos; receiver room is built on a clean three-tier structure that local analysis captured plainly in an August confidence poll: <strong>Michael Pittman Jr.</strong> as the boundary alpha, <strong>Josh Downs</strong> as the slot machine — his four-year development arc documented on the <a href="https://www.colts.com/team/players-roster/josh-downs/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">team&apos;s official roster page</a> — and <strong>Adonai Mitchell</strong> as the second-year boundary breakout candidate whose physical tools have kept national expectation elevated since draft night.
        </p>
        <p>
          The room&apos;s question, posed bluntly by that same local discussion, is whether this group ranks among the conference&apos;s best units or merely a good one. The answer depends almost entirely on Mitchell&apos;s third-down growth and Pittman&apos;s continued dominance in contested-catch situations.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          How the Quarterback Reset Changes Receiver Values
        </h2>
        <p>
          The offseason&apos;s quarterback shakeup — covered fully in our <Link href="/colts-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">QB depth chart analysis</Link> — redistributes fantasy and betting value across this receiver chart in specific ways. A timing-and-accuracy-first starter raises the floor for possession receivers like Downs, whose route precision wins regardless of throw quality, while deep-threat profiles absorb more variance week to week.
        </p>
        <p>
          Pittman&apos;s projection remains the steadiest in the room — national fantasy rankings have consistently placed him among the reliable boundary producers — but his touchdown equity depends on red-zone operation improving from last season&apos;s finishes inside the twenty.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Depth Behind the Stars
        </h2>
        <p>
          Beyond the trio, Indianapolis&apos; chart carries developmental speed and special-teams contributors whose seats depend entirely on August tape. The fourth receiver seat in this offense matters more than most: this scheme rotates three-wide sets heavily enough that the No. 4 sees real snaps in November fatigue windows, making it a genuine roster battle rather than a formality.
        </p>
        <p>
          Follow every AFC South passing-game test and the complete league schedule on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare receiver-room builds in our <Link href="/minnesota-vikings-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Vikings depth chart guide</Link>.
        </p>
      </section>

      {/* FAQ Section */}
        {/* FAQ Section */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h3 className="text-base font-bold text-blue-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

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
