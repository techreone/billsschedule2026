import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Panthers Depth Chart 2026: Carolina Starters & Roster",
  description: "Carolina Panthers depth chart 2026 projection: Dave Canales offensive scheme, Bryce Young progression, Chuba Hubbard & Jonathon Brooks backfield, and rebuilt front seven.",
  keywords: [
    "panthers depth chart 2026",
    "carolina panthers starting lineup 2026",
    "bryce young panthers depth chart",
    "chuba hubbard jonathon brooks",
    "dave canales panthers offense",
    "carolina panthers 53 man roster",
    "panthers defense depth chart 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/panthers-depth-chart-2026`,
  },
};

export default function PanthersDepthChartPage() {
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
        "name": "Panthers Depth Chart 2026",
        "item": "https://billsschedule2026.online/panthers-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the Panthers 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bryce Young is the starter at quarterback for Carolina in 2026, entering his third NFL season under the offensive tutelage of head coach Dave Canales."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Carolina Panthers running back rotation in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chuba Hubbard enters the season as the lead starting running back, with rookie standout Jonathon Brooks operating as the explosive change-of-pace and high-ceiling second option."
        }
      },
      {
        "@type": "Question",
        "name": "What wide receivers feature on the Panthers 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diontae Johnson and rookie draft pick Tetairoa McMillan lead the wide receiver depth chart on the perimeter, alongside Xavier Legette and veteran Adam Thielen operating out of the slot."
        }
      },
      {
        "@type": "Question",
        "name": "How has Carolina upgraded its offensive line for Bryce Young?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Panthers invested heavily in interior pass protection by signing high-profile guards Robert Hunt and Damien Lewis to anchor the interior pocket alongside tackle Ikem Ekwonu."
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
            <span className="text-blue-400">Panthers Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/panthers.webp" alt="Carolina Panthers Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 Carolina Roster Breakdown</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Carolina Panthers Depth Chart 2026: Starters, Upgrades & Roster Breakdown
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In-depth structural breakdown of the 2026 Carolina Panthers depth chart. Discover Dave Canales' QB development strategy for Bryce Young, the running back split, and front-seven defensive rebuild.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> Bryce Young</div>
            <div><span className="text-slate-500">RB1:</span> Chuba Hubbard</div>
            <div><span className="text-slate-500">RB2:</span> Jonathon Brooks</div>
            <div><span className="text-slate-500">Head Coach:</span> Dave Canales</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Carolina Panthers Depth Chart Overview</h2>
              <p className="text-sm text-slate-400">Complete listing of projected starters and key rotational backups.</p>
            </div>
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded">NFC South</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <th className="p-3.5">Position</th>
                  <th className="p-3.5">Starter (1st String)</th>
                  <th className="p-3.5">Primary Backup (2nd String)</th>
                  <th className="p-3.5">Depth / Special Teams</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Quarterback (QB)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Bryce Young</td>
                  <td className="p-3.5 text-slate-300">Andy Dalton</td>
                  <td className="p-3.5 text-slate-400">Jack Plummer</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Chuba Hubbard</td>
                  <td className="p-3.5 text-cyan-400 font-bold">Jonathon Brooks</td>
                  <td className="p-3.5 text-slate-400">Miles Sanders / Raheem Blackshear</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver (WR-X)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Diontae Johnson</td>
                  <td className="p-3.5 text-slate-300">Xavier Legette</td>
                  <td className="p-3.5 text-slate-400">Jalen Coker</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver (WR-Z)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Tetairoa McMillan</td>
                  <td className="p-3.5 text-slate-300">Adam Thielen (Slot)</td>
                  <td className="p-3.5 text-slate-400">Ihmir Smith-Marsette</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Tommy Tremble</td>
                  <td className="p-3.5 text-slate-300">Ja'Tavion Sanders</td>
                  <td className="p-3.5 text-slate-400">Ian Thomas</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Ikem Ekwonu</td>
                  <td className="p-3.5 text-slate-300">Yosh Nijman</td>
                  <td className="p-3.5 text-slate-400">Badara Traore</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Guards (LG/RG)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Damien Lewis & Robert Hunt</td>
                  <td className="p-3.5 text-slate-300">Brady Christensen</td>
                  <td className="p-3.5 text-[#94a3b8]">Cade Mays</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Defensive Tackle (DT)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Derrick Brown</td>
                  <td className="p-3.5 text-slate-300">A'Shawn Robinson</td>
                  <td className="p-3.5 text-slate-400">Shy Tuttle</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Edge Rusher (OLB)</td>
                  <td className="p-3.5 text-cyan-300 font-semibold">Jadeveon Clowney</td>
                  <td className="p-3.5 text-slate-300">DJ Johnson</td>
                  <td className="p-3.5 text-slate-400">K'Lavon Chaisson</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dave Canales Offensive Architecture: Bryce Young & Target Weapons
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Head coach Dave Canales was brought to Carolina specifically to maximize the output of former No. 1 overall pick Bryce Young. In Canales' system, quick-rhythm throws, motion out of the backfield, and defined intermediate reads are engineered to build Young's confidence from the pocket. Reports from <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> emphasize the dramatic reduction in time-to-throw metrics designed into Carolina's playcalling.
            </p>
            <p>
              To bolster Young's weapon cabinet, Carolina acquired veteran Diontae Johnson to serve as the high-volume route separation leader alongside big-bodied rookie Tetairoa McMillan and physical target Xavier Legette. Veteran Adam Thielen continues to operate as a high-reliability third-down target out of the slot.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dynamic Running Back Tandem: Chuba Hubbard & Jonathon Brooks
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The focal point of the Panthers ground attack is a formidable 1-2 punch at running back. Chuba Hubbard, coming off back-to-back productive seasons, serves as the dependable early-down workhorse who excels between the tackles. Detailed roster updates from <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> confirm Hubbard's high snap share on first and second downs.
            </p>
            <p>
              Joining Hubbard is elite rookie talent Jonathon Brooks. Selected to provide game-breaking speed and pass-catching agility, Brooks offers dynamic big-play upside that elevates Carolina's explosive play rate in the second half of games.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Defensive Unit Rebuild: Pass Rush & Front Seven Alignment
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              On defense, Carolina relies heavily on Pro Bowl defensive tackle Derrick Brown to dominate interior run fits. Measuring 6-foot-5 and 320 pounds, Brown's ability to eat double-teams opens up blitz lanes for linebackers Shaq Thompson and Josey Jewell. According to tactical analysis on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>, veteran edge defender Jadeveon Clowney brings essential edge-setting toughness to opposing ground games.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Offensive Line Reinforcement & Pass Protection Metrics
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Recognizing that quarterback protection was paramount, general manager Dan Morgan overhauled the interior offensive line by committing massive contracts to guards Robert Hunt and Damien Lewis. Combined with third-year left tackle Ikem Ekwonu, Carolina's front five features one of the heaviest interior walls in football, designed to keep defensive tackles from pushing the pocket into Bryce Young's face.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Battles & Special Teams Coverage Unit Depth
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Preseason evaluations in August centered on determining final roster cuts among rotational defensive backs and reserve offensive tackles. Kicker Eddy Pineiro and punter Johnny Hekker maintain complete control over special teams duties, providing dependable field position margins.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To check kickoff schedules, broadcast coverage maps, and game times for all 32 teams, visit our master <Link href="/" className="text-cyan-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> directory.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
            6. Bryce Young&apos;s Make-or-Break 2026
          </h2>
          <p>
            Bryce Young enters 2026 under pressure to validate Carolina&apos;s decision to draft him first overall. After an uneven early career, the former Heisman winner has the arm talent and processing to flourish if the Panthers&apos; offensive line and skill-position supporting cast hold up. New weapons and a clearer scheme should let Young operate from cleaner pockets and attack downfield.
          </p>
          <p>
            The Panthers have surrounded their franchise passer with a rebuilt protection unit and a diversified receiver room, signaling a full commitment to his development. For a franchise desperate to end its rebuild, stabilizing the quarterback position is the foundational step toward relevance in the NFC South.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-l-4 border-red-500 pl-3">
            7. Kenny Pickett&apos;s Role as Insurance
          </h2>
          <p>
            Carolina signed Kenny Pickett to back up Young, giving the Panthers a former first-round quarterback with starting reps under his belt. Pickett&apos;s presence means a credible reliever is one snap away, and Haynes King and Kyle Trask add further depth to a room built for contingency.
          </p>
          <p>
            That quarterback security is especially valuable for a young starter learning to navigate live NFL defenses. Knowing a capable veteran can steady the ship allows Young to play free, and it protects Carolina&apos;s season from the volatility that undermines so many rebuilds.
          </p>
        </section>

          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h3 className="text-base font-bold text-cyan-300">{faq.name}</h3>
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
