import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Texans Depth Chart 2026: Houston Starters & Roster Tiers",
  description: "Official Houston Texans depth chart 2026: C.J. Stroud offense, Nico Collins, Stefon Diggs, Tank Dell, Joe Mixon, DeMeco Ryans defense, and Will Anderson Jr. pass rush.",
  keywords: [
    "texans depth chart 2026",
    "houston texans starting lineup 2026",
    "cj stroud texans depth chart",
    "stefon diggs texans",
    "nico collins tank dell",
    "joe mixon texans depth chart",
    "will anderson danielle hunter",
    "demeco ryans texans defense"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/texans-depth-chart-2026`,
  },
};

export default function TexansDepthChartPage() {
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
        "name": "Texans Depth Chart 2026",
        "item": "https://billsschedule2026.online/texans-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the Houston Texans 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C.J. Stroud enters the 2026 season as the franchise QB1 for the Houston Texans, leading one of the NFL's most dynamic passing offenses under offensive coordinator Bobby Slowik."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the starting wide receivers for the Texans in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Houston features a triple-threat receiver corps headlined by Nico Collins (WR1 boundary), Stefon Diggs (WR2 playmaker), and Tank Dell (WR3 slot/deep threat), backed by Xavier Hutchinson and Noah Brown."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the Texans defensive edge rushing attack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reigning Defensive Rookie of the Year Will Anderson Jr. pairs with veteran Pro Bowl pass-rusher Danielle Hunter to form one of the league's most lethal edge rushing tandems."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the lead running back on the Texans 2026 roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Joe Mixon commands the starting running back position, providing physical early-down rushing and proven red-zone touchdown efficiency alongside Dameon Pierce."
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
            <span className="text-blue-400">Texans Depth Chart 2026</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Image src="/images/bills/texans.webp" alt="Houston Texans Logo" width={18} height={18} className="w-4.5 h-4.5 object-contain" />
            <span>2026 AFC South Contender Roster</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Houston Texans Depth Chart 2026: Starters, Offense & Defensive Tiers
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Complete position-by-position analysis of the 2026 Houston Texans depth chart. Discover C.J. Stroud's elite receiver corps, Joe Mixon's rushing workload, and DeMeco Ryans' formidable defense.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div><span className="text-slate-500">QB1:</span> C.J. Stroud</div>
            <div><span className="text-slate-500">RB1:</span> Joe Mixon</div>
            <div><span className="text-slate-500">WR Core:</span> Collins / Diggs / Dell</div>
            <div><span className="text-slate-500">Head Coach:</span> DeMeco Ryans</div>
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
              <h2 className="text-2xl font-bold text-white">2026 Houston Texans Depth Chart Starters</h2>
              <p className="text-sm text-slate-400">Verified depth order across offense, defense, and special teams.</p>
            </div>
            <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded">Super Bowl Contender</span>
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
                  <td className="p-3.5 text-red-300 font-semibold">C.J. Stroud</td>
                  <td className="p-3.5 text-slate-300">Davis Mills</td>
                  <td className="p-3.5 text-slate-400">Case Keenum</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Running Back (RB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Joe Mixon</td>
                  <td className="p-3.5 text-slate-300">Dameon Pierce</td>
                  <td className="p-3.5 text-slate-400">Jawhar Jordan / Dare Ogunbowale</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 1 (WR-X)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Nico Collins</td>
                  <td className="p-3.5 text-slate-300">Noah Brown</td>
                  <td className="p-3.5 text-slate-400">Ben Skowronek</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 2 (WR-Z)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Stefon Diggs</td>
                  <td className="p-3.5 text-slate-300">Xavier Hutchinson</td>
                  <td className="p-3.5 text-slate-400">John Metchie III</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Wide Receiver 3 (Slot)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Tank Dell</td>
                  <td className="p-3.5 text-slate-300">Robert Woods</td>
                  <td className="p-3.5 text-slate-400">Steven Sims</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Tight End (TE)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Dalton Schultz</td>
                  <td className="p-3.5 text-slate-300">Cade Stover</td>
                  <td className="p-3.5 text-slate-400">Brevin Jordan</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Left Tackle (LT)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Laremy Tunsil</td>
                  <td className="p-3.5 text-slate-300">Blake Fisher</td>
                  <td className="p-3.5 text-slate-400">Charlie Heck</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Edge Rushers (DE)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Will Anderson Jr. & Danielle Hunter</td>
                  <td className="p-3.5 text-slate-300">Denico Autry</td>
                  <td className="p-3.5 text-slate-400">Derek Barnett</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-3.5 font-bold text-white">Cornerbacks (CB)</td>
                  <td className="p-3.5 text-red-300 font-semibold">Derek Stingley Jr. & Kamari Lassiter</td>
                  <td className="p-3.5 text-slate-300">Jeff Okudah</td>
                  <td className="p-3.5 text-slate-400">Desmond King II</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 1 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Powerhouse Offense: C.J. Stroud, Nico Collins, Stefon Diggs & Joe Mixon
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Houston Texans offense enters 2026 ranked among the NFL's premier passing juggernauts. Under head coach DeMeco Ryans and offensive coordinator Bobby Slowik, quarterback C.J. Stroud commands a star-studded cast featuring boundary alpha Nico Collins, explosive playmaker Stefon Diggs, and vertical speedster Tank Dell. Full statistical profiles on <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com</a> demonstrate Stroud's top-tier rating on throws over 20 yards.
            </p>
            <p>
              Adding physical balance to Stroud's arm is veteran running back Joe Mixon. Mixon's ability to grind out tough yards between the tackles ensures that defenses cannot drop eight defenders into coverage without giving up chunk gains on the ground.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              DeMeco Ryans Defense: Edge Rush Duo Will Anderson Jr. & Danielle Hunter
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              On defense, head coach DeMeco Ryans has constructed a terrifying pass rush front. Pairing 2023 Defensive Rookie of the Year Will Anderson Jr. on one edge with veteran sack master Danielle Hunter on the other gives Houston one of the highest pressure rates in football without relying on heavy blitz packages. Insights from <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN.com</a> highlight how Anderson and Hunter collapse opposing pockets from opposite sides.
            </p>
          </div>
        </section>

        <NativeBanner />

        {/* Section 3 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Secondary Alignment: Cornerback Depth & Safety Rotations
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              The Houston secondary is anchored by lockdown cornerback Derek Stingley Jr. and rookie standout Kamari Lassiter. Stingley's ball skills at boundary CB allow Ryans to lock down opposing WR1s in press coverage, while safeties Jalen Pitre and Calen Bullock provide aggressive support against the run. Detailed reporting from <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports</a> confirms Houston's top-5 rating in pass defense efficiency.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Special Teams & Kicking Starters: Ka'imi Fairbairn & Return Specialists
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Veteran kicker Ka'imi Fairbairn provides elite field goal accuracy beyond 50 yards, securing points on drives that stall inside the opponent's 35-yard line. Punter Tommy Townsend controls field position with high hang time punts.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-[#121722] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Super Bowl Contender Roster Depth & Preseason Cutdown Battles
            </h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              With depth solidified across every major positional group, Houston enters 2026 as a legitimate Super Bowl contender in the AFC. Roster battles in August focused primarily on securing backup offensive line spots behind star left tackle Laremy Tunsil.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
              <p className="text-sm text-slate-400">
                To explore complete kickoff times, streaming options, and TV broadcast channels for all upcoming games, visit the main <Link href="/" className="text-red-400 font-bold hover:underline">Buffalo Bills Schedule 2026</Link> portal.
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
          A Contender&apos;s Chart: Talent Stacked at Every Tier
        </h2>
        <p>
          Houston&apos;s 2026 depth chart reads like a team that believes its championship window is open right now. The official release via <a href="https://www.houstontexans.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">HoustonTexans.com</a> and national projections at <a href="https://www.espn.com/nfl/team/depth/_/name/hou" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN</a> show a roster with few genuine battles and many confirmed strengths: an established franchise quarterback, a No. 1 receiver who commands double coverage weekly, and a tight end tandem — <strong>Dalton Schultz</strong> leading Foster Moreau — that might be the conference&apos;s best one-two punch at the position.
        </p>
        <p>
          The receiver room behind the headline names is where Houston&apos;s depth-building shows: Xavier Hutchinson, Justin Watson, and Zay Jones give the quarterback experienced contingency options, while rookie Jaylin Newton-era additions like Jaylin Noel carry qualification tags that signal open competition rather than settled roles.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The 4-3 Foundation and Its Depth Philosophy
        </h2>
        <p>
          Schematic services like <a href="https://www.ourlads.com/nfldepthcharts/depthchart/HOU" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Ourlads</a> project Houston as a base 4-3 defense — the classic four-man-front structure that demands deep, interchangeable defensive line rotation. That requirement shapes the bottom half of this chart: the fourth and fifth defensive ends are not special-teamers here but genuine weekly contributors in a rotation designed to keep fresh legs attacking the AFC&apos;s premium quarterbacks.
        </p>
        <p>
          In a division that also features Indianapolis&apos; rebuilt offense and Tennessee&apos;s remodel, Houston&apos;s ability to pressure with four while dropping seven into coverage remains the divisional gold standard — and the depth chart is built to preserve exactly that advantage through seventeen weeks plus January.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          What Would Actually Change This Chart
        </h2>
        <p>
          Contender charts move only through injury or trade, and Houston&apos;s leverage positions reflect both risks: tackle depth behind two premium anchors, and the third corner seat in a division full of slot-oriented receivers. If the season stays healthy, expect this chart to look nearly identical from September through January — the surest sign of a roster built by continuity rather than hope.
        </p>
        <p>
          Map every Texans-relevant matchup and the full league slate on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare divisional builds in our <Link href="/tennessee-titans-depth-chart-2026" className="text-blue-400 underline hover:text-blue-300">Titans guide</Link> and <Link href="/colts-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Colts quarterback analysis</Link>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Offensive Line Continuity: The Invisible Contender Advantage
        </h2>
        <p>
          Houston&apos;s most underrated roster advantage never appears in skill-position discussions: line continuity across multiple seasons. Five men learning each other&apos;s leverage habits, timing calls, and communication shorthand produces collective protection that exceeds individual talent grades — and the Texans&apos; interior has developed exactly that institutional cohesion while rival front offices churned replacements through their own protection units.
        </p>
        <p>
          The depth behind the starters reflects mature planning rather than uncertainty: swing-tackle insurance, an experienced interior backup, and developmental late-rounders stashed for future years. Championship-caliber rosters are built on precisely this kind of boring, essential redundancy.
        </p>
      </section>

      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Tight End Tandem as an Offensive Identity
        </h2>
        <p>
          Most rosters treat tight end as a complementary position; Houston&apos;s chart treats it as structural. The Schultz-Moreau pairing gives the offense two genuinely different tools — a route-running separator who wins against linebackers and a blocking-first presence who anchors twelve-personnel packages — and the staff uses both identities situationally enough that defenses cannot substitute down into nickel comfortably. That personnel flexibility is why Houston&apos;s play-action game generates explosive plays at rates its receiver talent alone would not predict.
        </p>
        <p>
          The construction also hedges against young-receiver volatility. When boundary targets force contested catches into tight windows, a reliable intermediate tight end converts broken plays into manageable third downs — the invisible stat that keeps scoring drives alive across a seventeen-game season.
        </p>
        <p>
          Rival defensive coordinators have noticed: AFC South game plans increasingly dedicate their best coverage linebacker to this tandem rather than doubling the perimeter, which is the highest compliment scheme can pay a position group.
        </p>
      </section>

      {/* Footer */}
      {/* Footer */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Receiver Room Depth Behind the Headline Names
        </h2>
        <p>
          The qualification tags scattered through Houston&apos;s receiver tiers represent genuine opportunity economics: with an elite quarterback distributing to a proven top pair, the third-through-fifth seats become high-leverage developmental positions where practice performance converts directly into regular-season touches. Rookies with question marks next to their names are not buried here — they are being staged.
        </p>
        <p>
          This construction pattern repeats across contending rosters: premium seats settled, competition concentrated exactly where coaching attention can accelerate development. For fans learning to read depth charts as organizational strategy documents rather than simple rankings, Houston&apos;s chart is a masterclass in tiered intentionality.
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
