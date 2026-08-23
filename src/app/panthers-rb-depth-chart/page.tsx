import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Panthers RB Depth Chart 2026: Backfield Touch Distribution",
  description: "Carolina Panthers RB depth chart 2026 breakdown: Chuba Hubbard starter role, Jonathon Brooks rookie workload, Miles Sanders usage, goal-line touches, and fantasy advice.",
  keywords: [
    "panthers rb depth chart",
    "carolina panthers running backs 2026",
    "chuba hubbard panthers depth chart",
    "jonathon brooks panthers",
    "miles sanders panthers depth chart",
    "panthers starting running back 2026",
    "panthers backfield fantasy rankings"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/panthers-rb-depth-chart`,
  },
};

export default function PanthersRBDepthChartPage() {
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
        "name": "Panthers RB Depth Chart",
        "item": "https://billsschedule2026.online/panthers-rb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the RB1 on the Carolina Panthers depth chart in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chuba Hubbard is the starting RB1 for the Carolina Panthers entering 2026. After demonstrating outstanding vision and interior toughness, Hubbard commands the primary early-down carry workload."
        }
      },
      {
        "@type": "Question",
        "name": "What is Jonathon Brooks' role in the 2026 Panthers backfield?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jonathon Brooks serves as the dynamic RB2 and high-upside change-of-pace back. He is featured heavily in passing down situations, outside zone stretches, and third-down receiving concepts."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Miles Sanders sit on the 2026 Panthers RB depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miles Sanders is positioned as the RB3 veteran rotational option, providing depth and experienced pass-protection insurance behind Hubbard and Brooks."
        }
      },
      {
        "@type": "Question",
        "name": "How will head coach Dave Canales split running back carries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coach Dave Canales projects a split backfield approach: Chuba Hubbard receives ~55-60% of rushing attempts (particularly goal-line work), while Jonathon Brooks commands ~35-40% along with receiving target priority."
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
            <span className="text-blue-400">Panthers RB Depth Chart</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/panthers.webp" alt="Carolina Panthers Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 Running Back Workload & Projections</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Carolina Panthers RB Depth Chart 2026: Backfield Workload & Touch Share
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdown of the 2026 Carolina Panthers running back depth chart. Analyze Chuba Hubbard's lead role, Jonathon Brooks' explosive upside, Miles Sanders' veteran usage, and Dave Canales' run scheme priorities.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">RB1 Starter:</span> Chuba Hubbard</div>
            <div><span className="text-slate-500">RB2 Dynamic:</span> Jonathon Brooks</div>
            <div><span className="text-slate-500">RB3 Veteran:</span> Miles Sanders</div>
            <div><span className="text-slate-500">RB4 Depth:</span> Raheem Blackshear</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

        {/* Overview Table */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">2026 Carolina Panthers Running Back Depth Chart</h2>
              <p className="text-sm text-slate-400">Positional hierarchy, physical attributes, and projected touch share.</p>
            </div>
            <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono rounded">Ground Attack 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#171e2e] text-xs font-mono text-teal-400 uppercase tracking-wider">
                  <th className="p-3.5">Tier / Order</th>
                  <th className="p-3.5">Player Name</th>
                  <th className="p-3.5">Height / Weight</th>
                  <th className="p-3.5">Primary Specialization</th>
                  <th className="p-3.5">Projected Touch Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">RB1 (Starter)</td>
                  <td className="p-3.5 text-teal-300 font-semibold">Chuba Hubbard</td>
                  <td className="p-3.5 text-slate-400">6'0" / 210 lbs</td>
                  <td className="p-3.5 text-slate-300">Between-the-Tackles & Goal Line</td>
                  <td className="p-3.5 text-teal-400 font-bold">55% - 60% Touches</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">RB2 (Explosive Back)</td>
                  <td className="p-3.5 text-teal-300 font-semibold">Jonathon Brooks</td>
                  <td className="p-3.5 text-slate-400">6'0" / 207 lbs</td>
                  <td className="p-3.5 text-slate-300">Outside Zone & Passing Down YAC</td>
                  <td className="p-3.5 text-teal-400 font-bold">30% - 35% Touches</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">RB3 (Veteran Backup)</td>
                  <td className="p-3.5 text-slate-300">Miles Sanders</td>
                  <td className="p-3.5 text-slate-400">5'11" / 211 lbs</td>
                  <td className="p-3.5 text-slate-300">Third-Down Protection & Change-of-Pace</td>
                  <td className="p-3.5 text-slate-400">8% - 12% Touches</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">RB4 / Special Teams</td>
                  <td className="p-3.5 text-slate-300">Raheem Blackshear</td>
                  <td className="p-3.5 text-slate-400">5'9" / 190 lbs</td>
                  <td className="p-3.5 text-slate-300">Kick Returner & Emergency Depth</td>
                  <td className="p-3.5 text-slate-500">Special Teams Focus</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Lead Workhorse Starter: Chuba Hubbard Workload & Rushing Efficiency
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Chuba Hubbard enters the 2026 NFL season solidified as the primary running back on the Carolina Panthers depth chart. Having earned the trust of the coaching staff through brutal between-the-tackles running and consistent vision, Hubbard represents the physical tone-setter for Dave Canales' offense. Official statistics from <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> show Hubbard averaging over 4.2 yards per carry while ranking in the top echelon of rushers in yards created after contact.
            </p>
            <p>
              Operating behind upgraded interior guards Robert Hunt and Damien Lewis, Hubbard excels in inside-zone power runs where he can press the hole and make one quick cut downfield. His stamina and ball security make him the clear choice for early-down work and goal-line plunge situations.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              High-Draft Pick Dynamic Talent: Jonathon Brooks Touches & Recovery
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Selected high in the draft as Carolina's backfield star of the future, Jonathon Brooks possesses a rare blend of contact balance, 4.45 lateral agility, and natural hands out of the backfield. Reports on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> highlight Brooks' full return to peak physical condition during 2026 training camp practices.
            </p>
            <p>
              Brooks' skill set aligns perfectly with outside zone toss sweeps and angle routes out of the backfield. By pairing Brooks' big-play acceleration with Hubbard's grinding interior style, the Panthers feature one of the most complementary backfield duos in the NFC South.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Veteran Rotational Support: Miles Sanders Role & Third-Down Snaps
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Rounding out the active running back rotation is veteran Miles Sanders. While Sanders has transitioned into a supporting RB3 role, his extensive starting experience and blitz pickup expertise provide critical depth behind Young. As detailed on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a>, Sanders remains a reliable insurance policy should injury strike the top of the depth chart.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Preseason Touch Share & Red Zone Goal-Line Rushing Distribution
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Preseason snap counts revealed a structured workload distribution. In red zone situations inside the 5-yard line, Chuba Hubbard took 75% of first-team snaps, scoring on multiple short-yardage plunges. Meanwhile, Jonathon Brooks led all backs in targets per route run during August exhibition games.
            </p>

            <div className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2 my-6">
              <h4 className="text-sm font-bold text-white">Goal Line vs. Passing Down Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#0b0e14] p-3 rounded border border-slate-800">
                  <div className="text-teal-400 font-bold">Goal-Line / Short Yardage</div>
                  <div className="text-slate-300 mt-1">Chuba Hubbard (75% Snaps) — Preferred heavy power rusher.</div>
                </div>
                <div className="bg-[#0b0e14] p-3 rounded border border-slate-800">
                  <div className="text-teal-400 font-bold">2-Minute / 3rd & Long</div>
                  <div className="text-slate-300 mt-1">Jonathon Brooks (65% Snaps) — Superior receiving YAC capability.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-teal-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Dave Canales Commitment to Ground Attack & Fantasy Football Strategy
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Dave Canales' offensive philosophy centers on running the ball to establish play-action passing. For fantasy managers, Chuba Hubbard projects as a solid RB2/Flex starter with high volume stability, while Jonathon Brooks represents a premium bench target with league-winning upside if he captures the bulk of the workload later in the season.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To check weekly game schedules, TV broadcast networks, and kickoff times for every team across the league, visit our main <Link href="/" className="text-teal-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> homepage.
              </p>
            </div>
          </div>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Chuba Hubbard Leads — With a Genuine Competition Behind Him
        </h2>
        <p>
          Carolina&apos;s running back picture pairs a settled starter with one of the deeper competition charts in the conference. National projections at <a href="https://www.espn.com/nfl/team/depth/_/name/car" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN</a> and <a href="https://www.rotowire.com/football/nfl-depth-charts/carolina-panthers-depth-chart-car" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Rotowire</a> line up <strong>Chuba Hubbard</strong> first — though his listing carried a qualification tag through early August, signaling the staff wanted camp competition documented rather than presumed — with former Texas star <strong>Jonathon Brooks</strong> continuing his development track and rookie <strong>Trevor Etienne</strong> pushing for immediate rotation work.
        </p>
        <p>
          The depth behind that trio is where things get interesting for roster watchers: AJ Dillon brings a proven power profile from Green Bay, giving Carolina a genuinely different run style than its top two, and the final roster math suggests one of these names lands on the practice squad rather than the 53.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          How the Quarterback Situation Shapes This Backfield
        </h2>
        <p>
          No backfield operates in a vacuum, and Carolina&apos;s chart reflects its passer development explicitly. With Bryce Young continuing his own rebuild and Kenny Pickett imported as experienced insurance — both visible on the same ESPN projection — the running game carries elevated importance as the stabilizer for a young passing attack. That means goal-line and short-yardage packages get expanded installs, and the power-back skill set Dillon offers gets a longer evaluation look than it would in a settled offense.
        </p>
        <p>
          For fantasy managers, Hubbard remains the clear projection leader if healthy, but Brooks&apos; recovery trajectory and Etienne&apos;s preseason burst are the two variables most likely to redistribute third-down work by October.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Cutdown Math
        </h2>
        <p>
          Five backs competing for three or four seats means the preseason finale functions as a direct audition. Special teams value separates ties here — Dillon&apos;s coverage-unit history gives him a quiet edge for the final seat, while Etienne&apos;s return-game flashes could force a six-man conversation. Watch the second-half snap distributions in the last exhibition week; coaches reveal their true rankings through who plays when the outcome stops mattering.
        </p>
        <p>
          Follow every Panthers-relevant date and the full league slate on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare backfield builds in the <Link href="/bills-rb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Bills running back guide</Link>.
        </p>
      </section>

        {/* FAQ */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Pass-Protection Learning Curve Nobody Talks About
        </h2>
        <p>
          The single fastest way for a young running back to lose a coaching staff&apos;s trust is blitz-pickup failure, and Carolina&apos;s competition should be read through that lens entirely. Hubbard holds his seat largely because his protection maturity lets the offense keep him on the field for third downs; Brooks&apos; recovery timeline includes relearning those assignments against NFL speed; Etienne&apos;s rookie auditions will be graded more on blocking technique than rushing average.
        </p>
        <p>
          This is why running back competitions resolve later than fans expect and why practice reports matter more than preseason stat lines. A forty-yard breakout against third-team defenders impresses nobody in the meeting room; a perfectly executed pick-up of an unblocked edge rusher earns third-down snaps for a full season.
        </p>
      </section>

        {/* FAQ */}
        {/* FAQ */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-4 bg-[#171e2e] border border-slate-800 rounded-lg space-y-2">
                <h3 className="text-base font-bold text-teal-300">{faq.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          What Hubbard&apos;s Contract Situation Adds to the Picture
        </h2>
        <p>
          Established running backs on team-friendly deals occupy the league&apos;s most valuable roster economics — production above replacement at costs that permit spending elsewhere. Carolina&apos;s construction around its starter reflects exactly that logic: competitive depth behind him raises practice intensity without pressuring the salary structure, and every backfield addition was priced as complementary rather than hierarchical challenge.
        </p>
        <p>
          For the organization, the ideal outcome is boring sustainability: 240 combined touches spread across two healthy backs, a rookie developing on schedule, and zero contract drama through the trade deadline. Boring backfields win divisions; exciting ones sell jerseys and lose locker rooms.
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
