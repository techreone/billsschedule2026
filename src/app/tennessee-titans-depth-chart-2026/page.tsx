import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Tennessee Titans Depth Chart 2026: Starters & Roster",
  description: "Tennessee Titans depth chart 2026: Brian Callahan offense, Will Levis progression, Calvin Ridley, Tony Pollard & Tyjae Spears tandem, Jeffery Simmons defense, and JC Latham.",
  keywords: [
    "tennessee titans depth chart 2026",
    "titans starters 2026",
    "will levis titans depth chart",
    "calvin ridley titans",
    "tony pollard tyjae spears titans",
    "brian callahan titans offense",
    "jeffery simmons ljarius sneed",
    "jc latham titans o line"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tennessee-titans-depth-chart-2026`,
  },
};

export default function TitansDepthChartPage() {
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
        "name": "Tennessee Titans Depth Chart 2026",
        "item": "https://billsschedule2026.online/tennessee-titans-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is starting at quarterback for the Tennessee Titans in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Will Levis enters his third NFL season as the starting quarterback for the Tennessee Titans, operating head coach Brian Callahan's high-volume passing system."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Titans wide receiver room in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calvin Ridley leads the wide receiver depth chart as the primary boundary target, supported by Wan'Dale Robinson and rookie draft pick Elic Ayomanor."
        }
      },
      {
        "@type": "Question",
        "name": "How is the Titans running back depth chart split?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Titans utilize a 50/50 dual-threat backfield featuring veteran Tony Pollard and explosive third-year back Tyjae Spears."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the Titans defensive front in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pro Bowl defensive tackle Jeffery Simmons anchors the interior defensive line under coordinator Dennard Wilson, supported by lockdown cornerback L'Jarius Sneed in the secondary."
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
            <span className="text-blue-400">Titans Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/titans.webp" alt="Tennessee Titans Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 AFC South Roster Reconstruction</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tennessee Titans Depth Chart 2026: Starters, Offense & Defense Tiers
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In-depth breakdown of the 2026 Tennessee Titans depth chart. Evaluate head coach Brian Callahan's offensive passing scheme for Will Levis, the Pollard-Spears running back tandem, and Jeffery Simmons' defense.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Will Levis</div>
            <div><span className="text-slate-500">RB Tandem:</span> Pollard & Spears</div>
            <div><span className="text-slate-500">WR1:</span> Calvin Ridley</div>
            <div><span className="text-slate-500">DT Anchor:</span> Jeffery Simmons</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Tennessee Titans Depth Chart Starters</h2>
              <p className="text-sm text-slate-400">Verified depth chart order across all units.</p>
            </div>
            <span className="px-3 py-1 bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-mono rounded">AFC South</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-blue-400 uppercase tracking-wider">
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Starter (1st String)</th>
                  <th className="p-3.5">Backup (2nd String)</th>
                  <th className="p-3.5">Rotational / Reserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Will Levis</td>
                  <td className="p-3.5 text-slate-300">Mason Rudolph</td>
                  <td className="p-3.5 text-slate-400">Malik Willis</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Tony Pollard & Tyjae Spears</td>
                  <td className="p-3.5 text-slate-300">Julius Chestnut</td>
                  <td className="p-3.5 text-slate-400">Jabari Small</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 1 (WR-X)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Calvin Ridley</td>
                  <td className="p-3.5 text-slate-300">Elic Ayomanor</td>
                  <td className="p-3.5 text-slate-400">Nick Westbrook-Ikhine</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 2 (Slot)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Wan'Dale Robinson</td>
                  <td className="p-3.5 text-slate-300">Treylon Burks</td>
                  <td className="p-3.5 text-slate-400">Mason Kinsey</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Chigoziem Okonkwo</td>
                  <td className="p-3.5 text-slate-300">Josh Whyle</td>
                  <td className="p-3.5 text-slate-400">Nick Vannett</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">JC Latham</td>
                  <td className="p-3.5 text-slate-300">Nicholas Petit-Frere</td>
                  <td className="p-3.5 text-slate-400">Jaelyn Duncan</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">Jeffery Simmons</td>
                  <td className="p-3.5 text-slate-300">T'Vondre Sweat</td>
                  <td className="p-3.5 text-slate-400">Sebastian Joseph-Day</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Cornerbacks (CB)</td>
                  <td className="p-3.5 text-blue-300 font-semibold">L'Jarius Sneed & Chidobe Awuzie</td>
                  <td className="p-3.5 text-slate-300">Roger McCreary</td>
                  <td className="p-3.5 text-slate-400">Jarvis Brownlee Jr.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Brian Callahan Offense: Will Levis Development & Calvin Ridley
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Head coach Brian Callahan arrived in Tennessee to transform the offense into a modern, pass-centric attack built around young quarterback Will Levis. Levis features a cannon arm and aggressive downfield instincts. Official tracking from <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> details Callahan's emphasis on 11-personnel formations that clear out defenders for wideout Calvin Ridley.
            </p>
            <p>
              Ridley commands the WR1 boundary target load, supported by slot playmaker Wan'Dale Robinson and athletic tight end Chigoziem Okonkwo across the middle.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dennard Wilson Defensive System: Jeffery Simmons & L'Jarius Sneed
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Defensive coordinator Dennard Wilson fields an aggressive 3-4 defense anchored by two-time Pro Bowl defensive tackle Jeffery Simmons and 366-pound nose tackle T'Vondre Sweat. In the secondary, lockdown cornerback L'Jarius Sneed pairs with Chidobe Awuzie to press opposing wide receivers. Reporting on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> highlights Tennessee's top-tier run defense grade.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dynamic Running Back Tandem: Tony Pollard & Tyjae Spears
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Titans backfield is split evenly between veteran Tony Pollard and explosive playmaker Tyjae Spears. Pollard excels on outside zone stretches, while Spears provides rapid lateral acceleration and pass-catching prowess out of the backfield according to <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Line Overhaul: JC Latham & Left Side Pass Protection
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Top pick JC Latham was drafted to solidify left tackle pass protection for Levis' blindside. Paired with former first-round guard Peter Skoronski, the left side of Tennessee's offensive line represents a massive long-term investment.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Roster Battles & Final Cutdown Candidates
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              August exhibition games focused on evaluating backup edge rusher rotation behind Harold Landry and Arden Key.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To check kickoff schedules, broadcast channels, and streaming links across all 32 NFL teams, visit our main <Link href="/" className="text-blue-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> directory.
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
                <h3 className="text-base font-bold text-blue-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Offensive Foundation: Youth at the Controls
        </h2>
        <p>
          Tennessee&apos;s 2026 depth chart is best understood as a construction project entering its most important phase: a franchise quarterback on his rookie trajectory, a true No. 1 receiver in <strong>Calvin Ridley</strong> occupying the X spot, and an offensive line being rebuilt around former first-round tackle <strong>JC Latham</strong>. Camp releases tracked by <a href="https://www.espn.com/nfl/team/depth/_/name/ten" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN</a> and beat reporters show interior competition at right guard — where veteran Cordell Volson entered camp ahead of rookie Jackson Slater — reflecting how aggressively this staff has churned the protection picture in front of its young passer.
        </p>
        <p>
          The receiver room behind Ridley blends a high-upside second-round-style development track with veterans: Elic Ayomanor&apos;s camp emergence has been one of the quieter August storylines in Nashville, and the slot competition remains fluid enough that preseason reps genuinely move the chart week to week.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          Defensive Remodeling Headlined by a Trade Acquisition
        </h2>
        <p>
          The most consequential name change on Tennessee&apos;s defensive depth chart is <strong>Jermaine Johnson II</strong>, listed atop the left end position after arriving from the New York Jets — a swing-for-the-fences pass-rush acquisition that instantly upgrades the front four&apos;s ceiling. Depth-chart services like <a href="https://www.ourlads.com/nfldepthcharts/depthchart/TEN" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Ourlads</a> project him opposite Oluwafemi Oladejo, the second-year edge defender the staff is developing as a complementary threat rather than a finished product.
        </p>
        <p>
          That pairing matters because the AFC South is won in the trench war against Indianapolis and Houston&apos;s protected quarterbacks. A defense that can generate four-man pressure without blitzing support changes every coverage call behind it, and Tennessee&apos;s offseason clearly prioritized exactly that outcome.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          What the Chart Means for the Season Ahead
        </h2>
        <p>
          Depth charts are rosters with opinions, and Tennessee&apos;s tells you the staff believes its competitive window opens now rather than later: veterans were imported at guard and edge, the receiver room was retooled around a true alpha, and the developmental timeline of the quarterback position was accelerated by protection investments rather than weapon-collecting alone. Fans comparing division builds can see the counterpoint approaches in our guides to the <Link href="/colts-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Colts&apos; quarterback reset</Link> and <Link href="/texans-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Houston&apos;s contender roster</Link>, with every interconference date mapped on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Special Teams Foundation Under New Staffs
        </h2>
        <p>
          Coaching transitions quietly reshape special teams more than any other unit, because coverage schemes are staff-specific installations that take full seasons to install properly. Tennessee&apos;s bottom roster seats — the final linebacker, sixth defensive back, and fourth receiver listings — exist almost entirely for this phase of the game, where new coordinators blend inherited personnel with imported specialists.
        </p>
        <p>
          The practical consequence for fans: preseason coverage units reveal more about this staff&apos;s roster philosophy than any offensive series. Watch which young defenders sprint downfield on kickoffs — those are next season&apos;s starters being identified early, and their names rarely match what casual depth-chart readers expect.
        </p>
      </section>

      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Developmental Timeline This Chart Actually Serves
        </h2>
        <p>
          Strip away the weekly results and Tennessee&apos;s depth chart is serving one master: the growth curve of its young quarterback. Every veteran import on the offensive line, every receiver addition, every tight-end retention was purchased to accelerate a single development arc — because the modern NFL&apos;s most reliable path back to relevance runs through maximizing a quarterback&apos;s early contract window while his salary cap hit stays manageable.
        </p>
        <p>
          That framing explains the chart&apos;s apparent contradictions. Why keep aging veterans at guard instead of playing rookies? Because protection consistency accelerates passer development faster than athletic upside. Why import a proven edge rusher rather than draft one? Because the defensive side of the roster needs to hold serve while the offensive investment matures. Nothing on this sheet exists for its own sake.
        </p>
        <p>
          The organizational risk is equally clear: if the young passer stalls, an entire roster construction ages without a contending core around it. This is the bet every rebuilding franchise makes eventually, and Tennessee&apos;s version at least built its supporting infrastructure correctly — which history says matters more than any single draft pick.
        </p>
      </section>

      {/* Footer */}
      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Interior Line Battle With Playoff Implications
        </h2>
        <p>
          The right guard competition — veteran import versus drafted development — deserves more attention than its depth-chart position suggests. Interior protection failures end quarterback development arcs: pressure up the middle destroys timing faster than edge rush because the quarterback cannot climb the pocket to escape it. Whoever wins this seat inherits responsibility for the entire offensive investment&apos;s success.
        </p>
        <p>
          Preseason interior reps are the only honest evaluation window, since joint practices and camp drills rarely feature full-contact interior rush. The staff&apos;s decision timeline here — early cutdown versus post-first-game — will signal how close the competition actually ran.
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
