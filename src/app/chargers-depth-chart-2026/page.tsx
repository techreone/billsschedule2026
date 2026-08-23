import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Chargers Depth Chart 2026: Los Angeles Starters & Roster",
  description: "Los Angeles Chargers depth chart 2026 breakdown: Jim Harbaugh physical offense, Justin Herbert, Ladd McConkey, Gus Edwards, Joey Bosa, Khalil Mack, and Joe Alt.",
  keywords: [
    "chargers depth chart 2026",
    "los angeles chargers starters 2026",
    "justin herbert chargers depth chart",
    "jim harbaugh chargers offense",
    "ladd mcconkey chargers wr",
    "joey bosa khalil mack chargers",
    "joe alt rashawn slater tackles",
    "chargers 53 man roster projection"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/chargers-depth-chart-2026`,
  },
};

export default function ChargersDepthChartPage() {
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
        "name": "Chargers Depth Chart 2026",
        "item": "https://billsschedule2026.online/chargers-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is starting at quarterback for the Chargers in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Justin Herbert anchors the Los Angeles Chargers as franchise QB1, executing head coach Jim Harbaugh's physical play-action and power-rushing offense."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Chargers receiving corps on the 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ladd McConkey serves as the primary receiving target out of the slot, backed by Quentin Johnston, Joshua Palmer, and rookie speedster Brenen Thompson."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the offensive tackle positions for Los Angeles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro Rashawn Slater protects Herbert's blindside at left tackle, while top draft pick Joe Alt locks down the right tackle position."
        }
      },
      {
        "@type": "Question",
        "name": "Who commands the Chargers pass rush in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pro Bowl edge rushers Joey Bosa and Khalil Mack return to lead the Chargers pass rush front under defensive coordinator Jesse Minter."
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
            <span className="text-blue-400">Chargers Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/chargers.webp" alt="Los Angeles Chargers Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 Jim Harbaugh Era Roster</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Los Angeles Chargers Depth Chart 2026: Starters & Harbaugh Scheme
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdown of the 2026 Los Angeles Chargers depth chart under Jim Harbaugh. Analyze Justin Herbert's offensive weapons, Joe Alt & Rashawn Slater's line protection, and the Bosa-Mack edge rush.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Justin Herbert</div>
            <div><span className="text-slate-500">LT/RT Duo:</span> Slater & Alt</div>
            <div><span className="text-slate-500">WR1:</span> Ladd McConkey</div>
            <div><span className="text-slate-500">Edge Duo:</span> Bosa & Mack</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Los Angeles Chargers Depth Chart Overview</h2>
              <p className="text-sm text-slate-400">Projected starters across offense, defense, and special teams.</p>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono rounded">AFC West</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-sky-400 uppercase tracking-wider">
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Starter (1st String)</th>
                  <th className="p-3.5">Backup (2nd String)</th>
                  <th className="p-3.5">Rotational / Reserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Justin Herbert</td>
                  <td className="p-3.5 text-slate-300">Trey Lance</td>
                  <td className="p-3.5 text-slate-400">DJ Uiagalelei</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Gus Edwards & J.K. Dobbins</td>
                  <td className="p-3.5 text-slate-300">Kimani Vidal</td>
                  <td className="p-3.5 text-slate-400">Jaret Patterson</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver (Slot/WR)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Ladd McConkey</td>
                  <td className="p-3.5 text-slate-300">Quentin Johnston</td>
                  <td className="p-3.5 text-slate-400">Joshua Palmer</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Will Dissly</td>
                  <td className="p-3.5 text-slate-300">Hayden Hurst</td>
                  <td className="p-3.5 text-slate-400">Stone Smartt</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Rashawn Slater</td>
                  <td className="p-3.5 text-slate-300">Jamaree Salyer</td>
                  <td className="p-3.5 text-slate-400">Foster Sarell</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Right Tackle (RT)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Joe Alt</td>
                  <td className="p-3.5 text-slate-300">Zion Johnson</td>
                  <td className="p-3.5 text-slate-400">Alex Leatherwood</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Edge Rushers (OLB)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Joey Bosa & Khalil Mack</td>
                  <td className="p-3.5 text-slate-300">Tuli Tuipulotu</td>
                  <td className="p-3.5 text-slate-400">Bud Dupree</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Safeties (S)</td>
                  <td className="p-3.5 text-sky-300 font-semibold">Derwin James Jr. & Alohi Gilman</td>
                  <td className="p-3.5 text-slate-300">AJ Finley</td>
                  <td className="p-3.5 text-slate-400">Tony Jefferson</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Jim Harbaugh Physical Offense: Justin Herbert & Power Ground Game
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Under head coach Jim Harbaugh and offensive coordinator Greg Roman, the Los Angeles Chargers have embraced a bone-crushing, physical identity. Quarterback Justin Herbert operates behind a heavy-protection offensive line that utilizes 6-man protections, tight end chips, and downhill power-rushing tracks. Official stats on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> show Herbert's play-action efficiency soaring under Harbaugh's run-first setup.
            </p>
            <p>
              Running backs Gus Edwards and J.K. Dobbins rotate in a bruising tandem, setting up explosive play-action strikes downfield to sophomore slot sensation Ladd McConkey.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Edge Pass Rushers: Joey Bosa & Khalil Mack Defensive Front
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The defensive edge is anchored by Pro Bowl pass rushers Joey Bosa and Khalil Mack. Under defensive coordinator Jesse Minter, Bosa and Mack set hard edges against the run while creating relentless pressure against opposing quarterbacks. Insights on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> detail how second-year defender Tuli Tuipulotu provides high-octane rotational relief to keep Bosa and Mack fresh for fourth-quarter pass rush drives.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Line Dominance: Joe Alt & Rashawn Slater Tackle Pillars
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Chargers offensive tackle pairing of Rashawn Slater (Left Tackle) and Joe Alt (Right Tackle) represents one of the premier offensive tackle tandems in football. Analysis on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a> highlights their dominance against elite AFC edge rushers.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Secondary Rotation & Safety Depth Chart Assignments
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              All-Pro safety Derwin James Jr. functions as a defensive weapon, lining up in the box, in the slot, or deep in coverage alongside safety Alohi Gilman and cornerback Asante Samuel Jr.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Physicality & Roster Cutdown Competitions
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              During August exhibition games, Harbaugh emphasized physical line scrimmage play to establish final roster cuts among interior guards and special teams units.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To track kickoff schedules, broadcast coverage maps, and game times for all 32 teams, visit our master <Link href="/" className="text-sky-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> directory.
              </p>
            </div>
          </div>
        </section>

        {/* Expanded Analysis Sections */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Greg Roman Run-First Architecture & Tight End Volume
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Offensive coordinator Greg Roman has built his reputation on a run-first, play-action heavy architecture that maximizes Justin Herbert&apos;s platform throws. The Chargers&apos; 2026 offense leans on condensed formations, East-West stretches, and lead-power concepts that wear down defensive fronts before attacking downfield. Tight end Will Dissly and Hayden Hurst are deployed as inline blockers on early downs before releasing into intermediate crossing routes, giving Herbert reliable outlets against blitz packages.
            </p>
            <p>
              Roman&apos;s scheme also emphasizes pre-snap motion to stress linebacker run fits. Motioning Ladd McConkey from the slot into the backfield forces defenses to declare coverage, and Herbert&apos;s decision-making thrives when the picture is simplified. This architectural patience — controlling the clock and field position — is precisely what Harbaugh prioritized when reshaping the Chargers&apos; offensive identity.
            </p>
            <p>
              The tight end room&apos;s blocking value cannot be overstated. When Dissly or Hurst stays in to chip an edge rusher, Herbert gains the extra beat required to deliver strikes to McConkey on deep over routes. This symbiosis between the offensive line, tight ends, and Herbert&apos;s release is the engine behind the Chargers&apos; red-zone efficiency inside the AFC West.
            </p>
          </div>
        </section>

        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Jesse Minter Defensive Vision & Secondary Rotation
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Defensive coordinator Jesse Minter operates a multiple-front system that disguises pressures post-snap. With Joey Bosa and Khalil Mack as the edge anchors, Minter frequently deploys simulated blitzes — dropping a defensive lineman into coverage while sending a defensive back or linebacker — to confuse opposing pass protectors. The goal is to generate free rushers without exposing the secondary to one-on-one deep shots.
            </p>
            <p>
              Behind the front, Derwin James Jr. functions as the ultimate chess piece, rotating from box safety to slot corner to deep third defender based on down-and-distance. His rangy physicality allows Alohi Gilman to play single-high center field, while cornerbacks Asante Samuel Jr. and the boundary rotation handle perimeter receivers. Minter&apos;s emphasis on tackling in space has reduced explosive plays allowed, a hallmark of the unit&apos;s 2026 improvement.
            </p>
            <p>
              The depth behind the stars is what separates good defenses from great ones. Tuli Tuipulotu&apos;s growth as a pass-rush chess piece and Bud Dupree&apos;s veteran burst off the edge ensure the Chargers never lose pressure rate even when Bosa or Mack are rotated out. That rotational health is why Los Angeles entered 2026 projected among the AFC&apos;s most complete defensive units.
            </p>
          </div>
        </section>

        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              2026 AFC West Slate & Starters Availability Watch
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Chargers enter the 2026 AFC West slate as a physical, trench-dominated contender. Divisional clashes with Kansas City, Denver, and Las Vegas will hinge on offensive line sustainability and turnover margin. Herbert&apos;s ability to extend plays with his legs — a trait Roman has increasingly featured — adds a dimension that pure drop-back passing cannot replicate.
            </p>
            <p>
              From an availability standpoint, the Chargers have prioritized veteran depth at offensive tackle and edge rusher precisely because the AFC West schedule is a war of attrition. Monitoring snap counts for Bosa and Mack across a 17-game slate remains critical; the rotational contributions of Tuipulotu and Dupree are what keep the pass rush elite deep into January.
            </p>
            <p>
              Special teams consistency also factors into divisional outcomes. A reliable kicking operation and disciplined punt coverage swing field position in low-scoring, defensive-minded AFC West affairs. The Chargers&apos; attention to these hidden yards reflects Harbaugh&apos;s holistic coaching philosophy.
            </p>
          </div>
        </section>

        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Rookie Development & Training Camp Battle Breakdowns
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              August practices revealed intense position battles along the interior offensive line and at the third receiver spot. Young blockers competing for guard reps must demonstrate pass-protection anchor against the Bosa-Mack duo daily, the ultimate proving ground for NFL readiness. Winners of these camp reps typically translate directly into regular-season rotation snaps.
            </p>
            <p>
              The Chargers&apos; player development staff emphasizes mental processing as much as athletic traits. Rookies are drilled on split-second recognition of defensive fronts, ensuring they can execute Roman&apos;s motion-heavy concepts without hesitation. This developmental patience underpins the franchise&apos;s belief that homegrown talent can sustain contention beyond the star-power window.
            </p>
            <p>
              For fans tracking the roster, the final preseason exhibition provides the clearest signal of which bubble players earned a 53-man spot. Harbaugh&apos;s history suggests he rewards physicality and special-teams value, meaning camp standouts often secure roster spots over more polished but softer prospects.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h3 className="text-base font-bold text-sky-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Justin Herbert and the Harbaugh Identity
        </h2>
        <p>
          Every Los Angeles Chargers depth chart conversation begins with the same two facts: Justin Herbert is a top-tier AFC quarterback, and Jim Harbaugh&apos;s program has rebuilt this roster in a deliberately old-school image — big offensive lines, committed running games, and a defense built to protect fourth-quarter leads. The club&apos;s own unofficial depth chart, published through <a href="https://www.chargers.com/news/depth-chart-2026-season" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Chargers.com</a>, reflects that identity in structure if not in star power: functional, role-defined, and ruthlessly matchup-driven.
        </p>
        <p>
          Herbert&apos;s supporting cast philosophy under this staff differs sharply from his earlier years. Instead of collecting downfield threats, the front office invested in trenches and timing — which is why the receiver pecking order below matters more for conversion rates than highlight reels.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Receiver Room: McConkey Sets the Standard
        </h2>
        <p>
          <strong>Ladd McConkey</strong> heads the chart as the offense&apos;s uncontested chain-mover, with Quentin Johnston&apos;s continued development and a camp battle featuring Brenen Thompson&apos;s speed profile filling out the depth slots, per the <a href="https://www.espn.com/nfl/team/depth/_/name/lac" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN depth projection</a>. The question marks cluster behind the top line: KeAndre Lambert-Smith and JaQuae Jackson are fighting for roles that will be defined almost entirely by special-teams value, the same tiebreaker that decides the final offensive seats across the league.
        </p>
        <p>
          McConkey&apos;s separation skill against man coverage is the engine of third-down conversions in this scheme, and his chemistry progression with Herbert remains the single most predictive stat line for this offense&apos;s ceiling.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          How the AFC West Context Frames This Roster
        </h2>
        <p>
          The Chargers&apos; depth chart reads differently depending on the divisional lens. Against Kansas City, the trench investments are survival gear; against Denver&apos;s defense, McConkey-vs-slot-coverage becomes the weekly chess match. Los Angeles enters the season with a roster built to win now within a narrow style profile — which makes injury resilience, more than raw talent, the variable that decides whether this group contends or merely competes.
        </p>
        <p>
          Track every Chargers-relevant AFC date and the full league slate on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare conference builds in our <Link href="/kansas-city-chiefs-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Chiefs depth chart guide</Link>.
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
