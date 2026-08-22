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
