import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Kansas City Chiefs Depth Chart 2026: Starters & Roster",
  description: "Kansas City Chiefs depth chart 2026: Patrick Mahomes, Travis Kelce, Isiah Pacheco, Xavier Worthy, Steve Spagnuolo defense, Chris Jones, and roster depth.",
  keywords: [
    "kansas city chiefs depth chart 2026",
    "chiefs starters 2026",
    "patrick mahomes chiefs depth chart",
    "travis kelce chiefs 2026",
    "isiah pacheco chiefs depth chart",
    "xavier worthy chiefs wr",
    "steve spagnuolo defense chiefs",
    "chris jones chiefs defensive line"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/kansas-city-chiefs-depth-chart-2026`,
  },
};

export default function ChiefsDepthChartPage() {
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
        "name": "Kansas City Chiefs Depth Chart 2026",
        "item": "https://billsschedule2026.online/kansas-city-chiefs-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is starting at quarterback for the Kansas City Chiefs in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three-time Super Bowl MVP Patrick Mahomes commands the Chiefs offense as starting quarterback, supported by veteran Carson Wentz as the primary QB2 backup."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the key wide receivers on the Chiefs 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Chiefs wide receiver depth chart features speedsters Xavier Worthy, Hollywood Brown, and Rashee Rice, paired with veteran JuJu Smith-Schuster and Justin Watson."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the Kansas City Chiefs defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All-Pro defensive tackle Chris Jones anchors the interior defensive line under coordinator Steve Spagnuolo, supported by middle linebacker Nick Bolton and cornerback Trent McDuffie."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the lead running back for Kansas City in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Isiah Pacheco serves as the physical starter at running back, providing relentless legs between the tackles alongside rotational back Clyde Edwards-Helaire and rookie Carson Steele."
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
            <span className="text-blue-400">Chiefs Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/chiefs.webp" alt="Kansas City Chiefs Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 Super Bowl Dynasty Roster</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Kansas City Chiefs Depth Chart 2026: Starters, Offense & Defense
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In-depth structural breakdown of the 2026 Kansas City Chiefs depth chart. Explore Patrick Mahomes' passing weapons, Travis Kelce's tight end role, Steve Spagnuolo's defensive scheme, and roster depth.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Patrick Mahomes</div>
            <div><span className="text-slate-500">TE1:</span> Travis Kelce</div>
            <div><span className="text-slate-500">RB1:</span> Isiah Pacheco</div>
            <div><span className="text-slate-500">DT Anchor:</span> Chris Jones</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Kansas City Chiefs Official Depth Chart</h2>
              <p className="text-sm text-slate-400">Positional alignment across Andy Reid's offense and Steve Spagnuolo's defense.</p>
            </div>
            <span className="px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-mono rounded">AFC West Champions</span>
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
                  <td className="p-3.5 text-red-300 font-semibold">Patrick Mahomes</td>
                  <td className="p-3.5 text-slate-300">Carson Wentz</td>
                  <td className="p-3.5 text-slate-400">Chris Oladokun</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Isiah Pacheco</td>
                  <td className="p-3.5 text-slate-300">Clyde Edwards-Helaire</td>
                  <td className="p-3.5 text-slate-400">Carson Steele / Keaontay Ingram</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Travis Kelce</td>
                  <td className="p-3.5 text-slate-300">Noah Gray</td>
                  <td className="p-3.5 text-slate-400">Jared Wiley</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 1 (WR-X)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Xavier Worthy</td>
                  <td className="p-3.5 text-slate-300">Hollywood Brown</td>
                  <td className="p-3.5 text-slate-400">Justin Watson</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 2 (WR-Z)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Rashee Rice</td>
                  <td className="p-3.5 text-slate-300">JuJu Smith-Schuster</td>
                  <td className="p-3.5 text-slate-400">Mecole Hardman Jr.</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Kingsley Suamataia</td>
                  <td className="p-3.5 text-slate-300">Wanya Morris</td>
                  <td className="p-3.5 text-slate-400">Lucas Niang</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Chris Jones</td>
                  <td className="p-3.5 text-slate-300">Derrick Nnadi</td>
                  <td className="p-3.5 text-slate-400">Tershawn Wharton</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Middle Linebacker (MLB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Nick Bolton</td>
                  <td className="p-3.5 text-slate-300">Drue Tranquill</td>
                  <td className="p-3.5 text-slate-400">Leo Chenal</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Cornerbacks (CB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Trent McDuffie & Jaylen Watson</td>
                  <td className="p-3.5 text-slate-300">Joshua Williams</td>
                  <td className="p-3.5 text-slate-400">Chamarri Conner</td>
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
              Championship Offense: Patrick Mahomes, Travis Kelce & Isiah Pacheco
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Kansas City Chiefs offensive attack remains the gold standard in modern professional football. Spearheaded by generational quarterback Patrick Mahomes, head coach Andy Reid's offense orchestrates motion-heavy concepts, pre-snap reads, and unmatched improvisational big plays. Detailed statistics on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> show Mahomes continuing to dominate third-down passing metrics.
            </p>
            <p>
              Future Hall of Fame tight end Travis Kelce anchors the middle of the field, while hard-running back Isiah Pacheco provides ferocious interior rushing to keep opposing pass rushers honest.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Steve Spagnuolo Defense: Chris Jones, Nick Bolton & Cornerback Press
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Defensive coordinator Steve Spagnuolo commands a championship defense built around game-changing interior pass rusher Chris Jones. Jones' ability to dominate double-teams allows linebackers Nick Bolton and Drue Tranquill to attack run gaps and drop into hook-curl zones. Coverage analysis on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> highlights All-Pro cornerback Trent McDuffie's elite press-man coverage skills in tight game situations.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Wide Receiver Room & Speed Vertical Depth: Xavier Worthy & Hollywood Brown
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Chiefs upgraded receiver corps is defined by historic track speed. Rookie 4.21 speedster Xavier Worthy pairs with veteran Hollywood Brown to force opposing safeties into deep 2-high shell coverages, opening up vast underneath space for Kelce and Rashee Rice according to tactical breakdowns on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Line Protection & Front Wall Mechanics
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Interior offensive linemen Creed Humphrey, Joe Thuney, and Trey Smith form arguably the best interior offensive guard/center trio in football, ensuring Mahomes has a solid pocket base to step up against edge rushes.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Cutdowns & The Chase for Championship Dominance
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              As Kansas City pursues another championship run in 2026, August exhibition games served to finalize rotational edge rusher spots behind George Karlaftis and Felix Anudike-Uzomah.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To check kickoff times, TV channel listings, and live stream options across all NFL games, explore the main <Link href="/" className="text-red-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> portal.
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
