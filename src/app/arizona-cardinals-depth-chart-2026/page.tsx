import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Arizona Cardinals Depth Chart 2026: Starters & Roster",
  description: "Arizona Cardinals depth chart 2026 breakdown: Kyler Murray offense, Marvin Harrison Jr., James Conner, Trey McBride, Jonathan Gannon defense, and NFC West outlook.",
  keywords: [
    "arizona cardinals depth chart 2026",
    "cardinals starters 2026",
    "kyler murray cardinals depth chart",
    "marvin harrison jr cardinals",
    "james conner trey mcbride",
    "jonathan gannon defense cardinals",
    "cardinals 53 man roster projection"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/arizona-cardinals-depth-chart-2026`,
  },
};

export default function CardinalsDepthChartPage() {
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
        "name": "Arizona Cardinals Depth Chart 2026",
        "item": "https://billsschedule2026.online/arizona-cardinals-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is starting at quarterback for the Arizona Cardinals in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Franchise quarterback Kyler Murray leads the Arizona Cardinals offense, combining dual-threat scrambles with deep-ball precision to Marvin Harrison Jr."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the WR1 on the Arizona Cardinals 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marvin Harrison Jr. serves as the clear WR1 alpha wide receiver, supported by Michael Wilson on the boundary and Greg Dortch operating out of the slot."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the starting tight end for Arizona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pro Bowl tight end Trey McBride anchors the starting TE spot, operating as Kyler Murray's high-volume security blanket across the middle of the field."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Cardinals running back room in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran workhorse James Conner commands the starting running back role, backed by dynamic third-year back Trey Benson."
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
            <span className="text-blue-400">Cardinals Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/cardinals.webp" alt="Arizona Cardinals Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 NFC West Contender Roster</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Arizona Cardinals Depth Chart 2026: Projected Starters & Roster Tiers
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Complete position-by-position depth breakdown for the 2026 Arizona Cardinals. Analyze Kyler Murray's passing targets Marvin Harrison Jr. & Trey McBride, James Conner's ground game, and Jonathan Gannon's defense.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Kyler Murray</div>
            <div><span className="text-slate-500">WR1:</span> Marvin Harrison Jr.</div>
            <div><span className="text-slate-500">TE1:</span> Trey McBride</div>
            <div><span className="text-slate-500">RB1:</span> James Conner</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Arizona Cardinals Official Depth Chart</h2>
              <p className="text-sm text-slate-400">Projected offensive and defensive depth assignments.</p>
            </div>
            <span className="px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-mono rounded">NFC West</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-red-400 uppercase tracking-wider">
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Starter (1st String)</th>
                  <th className="p-3.5">Backup (2nd String)</th>
                  <th className="p-3.5">Rotational / Reserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Kyler Murray</td>
                  <td className="p-3.5 text-slate-300">Clayton Tune</td>
                  <td className="p-3.5 text-slate-400">Desmond Ridder</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">James Conner</td>
                  <td className="p-3.5 text-slate-300">Trey Benson</td>
                  <td className="p-3.5 text-slate-400">Emari Demercado / DeeJay Dallas</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 1 (WR-X)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Marvin Harrison Jr.</td>
                  <td className="p-3.5 text-slate-300">Michael Wilson</td>
                  <td className="p-3.5 text-slate-400">Zach Pascal</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 2 (Slot)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Greg Dortch</td>
                  <td className="p-3.5 text-slate-300">Zay Jones</td>
                  <td className="p-3.5 text-slate-400">Tejhuan Palmer</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Trey McBride</td>
                  <td className="p-3.5 text-slate-300">Tip Reiman</td>
                  <td className="p-3.5 text-slate-400">Elijah Higgins</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Paris Johnson Jr.</td>
                  <td className="p-3.5 text-slate-300">Kelvin Beachum</td>
                  <td className="p-3.5 text-slate-400">Christian Jones</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Bilal Nichols & Justin Jones</td>
                  <td className="p-3.5 text-slate-300">Darius Robinson</td>
                  <td className="p-3.5 text-slate-400">L.J. Collier</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Middle Linebacker (MLB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Kyzir White & Mack Wilson Sr.</td>
                  <td className="p-3.5 text-slate-300">Owen Pappoe</td>
                  <td className="p-3.5 text-slate-400">Krys Barnes</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Cornerbacks (CB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Max Melton & Sean Murphy-Bunting</td>
                  <td className="p-3.5 text-slate-300">Garrett Williams</td>
                  <td className="p-3.5 text-slate-400">Starling Thomas V</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Explosiveness: Kyler Murray, Marvin Harrison Jr. & Trey McBride
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Arizona Cardinals offense features elite firepower anchored by franchise quarterback Kyler Murray. Operating in head coach Jonathan Gannon's spread system, Murray commands two elite receiving pillars: rookie sensation Marvin Harrison Jr. on the boundary and Pro Bowl tight end Trey McBride across the seams. Official statistics on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> underline Harrison's high target share on deep sideline routes.
            </p>
            <p>
              In the backfield, power running back James Conner provides punishing interior rushes, setting up high-percentage play-action opportunities for Murray.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Jonathan Gannon Defensive Scheme: Front Seven & Linebacker Unit
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Defensive head coach Jonathan Gannon operates a versatile 3-4 front designed to generate interior pressure while taking away explosive plays. Defensive tackles Bilal Nichols and Justin Jones anchor the line of scrimmage, allowing linebackers Kyzir White and Mack Wilson Sr. to flow freely to the football. Insights from <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> note Arizona's improved run-stopping efficiency.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Secondary & Defensive Back Rotation in the NFC West
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Cornerback Max Melton and veteran Sean Murphy-Bunting provide physical press coverage on the perimeter, while safety Budda Baker commands the secondary with intense tackling energy according to <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Special Teams Starters: Kicking & Return Specialists
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Kicker Matt Prater continues to deliver reliable long-range field goals from 50+ yards, while return specialist DeeJay Dallas locks down kick and punt return duties.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Progress & NFC West Division Competitive Outlook
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              August exhibition games demonstrated strong depth progression along Arizona's offensive line and backup secondary, positioning the Cardinals for a competitive push in the tough NFC West.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To explore complete kickoff schedules, TV broadcast networks, and live streaming info for all 32 NFL teams, visit our main <Link href="/" className="text-red-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> directory.
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
                <h3 className="text-base font-bold text-red-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Marvin Harrison Jr. and the Passing Game Hierarchy
        </h2>
        <p>
          Arizona&apos;s offensive depth chart is organized around a simple bet: <strong>Marvin Harrison Jr.</strong> is a franchise receiver whose second-phase development determines this offense&apos;s ceiling. The club&apos;s own first depth chart of the season, published via <a href="https://www.azcardinals.com/news/the-first-depth-chart-of-the-season-2026" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">AzCardinals.com</a>, lines him up on the boundary with Michael Wilson holding the other outside spot and Xavier Weaver competing in the slot — a trio whose combined chemistry with the quarterback is the single most-watched variable of camp.
        </p>
        <p>
          The tight end position anchors the middle of the field, and the running back rotation remains a committee by design rather than by necessity — a structure this staff has maintained to keep legs fresh across a full desert-heat season schedule.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Quirky &quot;12 Starters&quot; Defense Explained
        </h2>
        <p>
          The most interesting line in Arizona&apos;s initial release was defensive: the team listed twelve starters, because <strong>Sean Murphy-Bunting</strong> is counted as a starting slot corner alongside the two boundary positions. That fifth-secondary emphasis is not cosmetic — it reflects a base 3-4 scheme, per <a href="https://www.ourlads.com/nfldepthcharts/depthchart/ARZ" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Ourlads&apos; projection</a>, that treats nickel personnel as an every-down unit rather than a substitution package.
        </p>
        <p>
          In a division featuring three different quarterback archetypes — mobile veteran, young dual-threat, and reclamation project — defensive coordinators live in nickel almost sixty percent of snaps. Arizona building its chart around six defensive backs-plus tells you exactly which weekly problems this staff expects to solve.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          How to Read This Chart Through the Season
        </h2>
        <p>
          Depth charts published in early August are intentions, not conclusions — Arizona&apos;s own release carried that caveat explicitly. The names worth monitoring weekly are the slot competition behind Weaver, the third defensive end role in the 3-4 front, and any movement on the offensive line where continuity has been the offseason&apos;s stated priority. When those three settle, the roster&apos;s actual identity will be set.
        </p>
        <p>
      Fans tracking NFC West interconference dates — including potential Super Bowl-relevant matchups against AFC powers — can map the whole league slate on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare wide-receiver-room builds in our <Link href="/chargers-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Chargers guide</Link>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Harrison Development Curve: Year-Two Expectations
        </h2>
        <p>
          Elite rookie receiver seasons historically follow a pattern: production arrives through athletic dominance in year one, then jumps again in year two as route sophistication catches up to physical tools. Arizona&apos;s entire passing-game projection hinges on that second jump — contested-catch rate improving, release packages expanding, and the tactical fouling defenses resort to (holding away from the ball) getting officiated differently once a receiver establishes reputation.
        </p>
        <p>
          The supporting chart construction serves this development directly: a legitimate secondary threat prevents bracket coverage, and the tight end presence occupies the middle-field defender who would otherwise rob crossing routes. When fans evaluate this offense weekly, the stat worth watching is not receiving yards but how often double-team alignments appear on first down — that number predicts everything else.
        </p>
      </section>

      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Desert-Heat Factor in Roster Construction
        </h2>
        <p>
          One roster-building variable this chart reflects that analysts rarely discuss: Arizona&apos;s September climate. Early-season home games played in triple-digit heat demand deeper rotation depth than northern venues require, because hydration management and fatigue cycles compress effective rotation windows regardless of talent. The Cardinals&apos; historical preference for keeping extra defensive line bodies active — visible in this chart&apos;s generous front-four tiers — is climate adaptation as much as schematic philosophy.
        </p>
        <p>
          The scheduling asymmetry cuts both ways across a season: divisional rivals visiting in early fall inherit conditions they cannot simulate in practice, while Arizona&apos;s late-season road trips to cold-weather venues test a roster built for speed rather than trench warfare in wind and snow. Front offices that acknowledge these edges in their construction — heavier rotation here, power packages there — quietly bank wins that betting markets undervalue every single season.
        </p>
        <p>
          It is also why preseason snap counts matter differently for this roster: the staff is building heat-acclimatized conditioning baselines in August that pay dividends in November, when opponents who overworked their starters in exhibition play begin breaking down.
        </p>
      </section>

      {/* Footer */}
      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          How to Read Arizona&apos;s Chart Against Its Schedule
        </h2>
        <p>
          Depth charts gain meaning from schedule context, and Arizona&apos;s construction reveals specific divisional planning. Against run-heavy divisional rivals, the interior defensive line rotation matters more than edge statistics suggest; against pass-first opponents, the fifth and sixth defensive backs see their snaps multiply. The chart carries enough two-way depth at both layers to survive either emphasis without schematic compromise.
        </p>
        <p>
          Fans projecting win totals should map each opponent&apos;s offensive identity against these depth strengths rather than averaging generic power ratings: roster-vs-roster matchups explain more variance than talent summaries, especially in a division where coaching styles diverge sharply.
        </p>
      </section>

      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Slot Competition With Downstream Consequences
        </h2>
        <p>
          Arizona&apos;s slot receiver battle deserves attention because the winner inherits production, not just a seat. Modern offenses route their slot through the middle of zone coverage at high frequencies, meaning the third receiver in this system sees genuine weekly targets regardless of game script. The competition between the established interior option and younger challengers therefore decides real fantasy output and real fourth-quarter touches.
        </p>
        <p>
        The staff&apos;s evaluation criteria will be revealing: slot receivers who win with quickness get schemed quick-game targets, while bigger-bodied slots become red-zone priorities. Watch which skill set the early-season target distribution favors — it tells you which prototype won the meeting-room argument, not just the practice field.
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
