import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Minnesota Vikings Depth Chart 2026: Complete Offense & De...",
  description: "Official 2026 Minnesota Vikings depth chart: complete breakdown of starters, backups, QB room hierarchy, offensive line, defense, and special teams.",
  keywords: [
    "minnesota vikings depth chart 2026",
    "vikings 2026 roster depth chart",
    "minnesota vikings starting offense 2026",
    "vikings defense depth chart",
    "kyler murray vikings qb1",
    "jj mccarthy minnesota vikings depth",
    "justin jefferson vikings depth chart",
    "aaron jones jordan mason vikings rb"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/minnesota-vikings-depth-chart-2026`,
  },
};

export default function MinnesotaVikingsDepthChart2026Page() {
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
        "name": "Minnesota Vikings Depth Chart 2026",
        "item": "https://billsschedule2026.online/minnesota-vikings-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the Minnesota Vikings 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kyler Murray is listed as QB1 on the official Minnesota Vikings 2026 depth chart, with second-year passer J.J. McCarthy serving as the primary backup at QB2."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the starting running backs for the Minnesota Vikings in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran Aaron Jones Sr. and powerhouse back Jordan Mason share top billing on the running back depth chart, creating a potent duo in Kevin O'Connell's backfield."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Minnesota Vikings offensive line stack up for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The offensive line is anchored by elite offensive tackles Christian Darrisaw at LT and Brian O'Neill at RT, supported by Garrett Bradbury at center, Blake Brandel at LG, and Ed Ingram at RG."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the Minnesota Vikings defensive unit in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The defense features edge rusher Jonathan Greenard, dynamic rookie linebacker Dallas Turner, Andrew Van Ginkel, middle linebacker Blake Cashman, and veteran safety Harrison Smith."
        }
      }
    ]
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Minnesota Vikings Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/90 border border-purple-800/60 rounded text-purple-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL ROSTER & POSITION DIRECTORY • MINNESOTA VIKINGS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Minnesota Vikings Depth Chart 2026: Complete Offense & Defense
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed position-by-position breakdown of the 2026 Minnesota Vikings depth chart under Head Coach Kevin O&apos;Connell. Examine offensive starters, defensive rotation units, special teams specialists, and active practice squad reserves.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified 2026 Training Camp Roster
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By Vikings Football Analytics Team</span>
        </div>
      </header>

      {/* Adsterra Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/vikings/vikings-depth-chart.webp" 
            alt="Minnesota Vikings Depth Chart 2026 Roster"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="minnesota-vikings-depth-chart-2026 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            Minnesota Vikings first-team offense lining up during 2026 summer training camp preparations at TCO Performance Center.
          </div>
        </div>

        {/* Quick Summary Roster Box */}
        <div className="bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-purple-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🛡️</span> 2026 Minnesota Vikings Starters Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-purple-400 block font-sans text-xs mb-1">OFFENSIVE STARTERS (QB / RB / WR / TE)</strong>
              <p>QB: <span className="text-white font-bold">Kyler Murray</span> (Backup: J.J. McCarthy)</p>
              <p>RB: <span className="text-white font-bold">Aaron Jones Sr. / Jordan Mason</span></p>
              <p>WR1: <span className="text-white font-bold">Justin Jefferson</span></p>
              <p>WR2: <span className="text-white font-bold">Jordan Addison</span></p>
              <p>TE: <span className="text-white font-bold">T.J. Hockenson</span></p>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-yellow-400 block font-sans text-xs mb-1">DEFENSIVE & LINE STARTERS</strong>
              <p>LT / RT: <span className="text-white font-bold">Christian Darrisaw / Brian O&apos;Neill</span></p>
              <p>EDGE: <span className="text-white font-bold">Jonathan Greenard / Dallas Turner</span></p>
              <p>LB: <span className="text-white font-bold">Blake Cashman / Ivan Pace Jr.</span></p>
              <p>CB: <span className="text-white font-bold">Byron Murphy Jr. / Shaquill Griffin</span></p>
              <p>S: <span className="text-white font-bold">Harrison Smith / Camryn Bynum</span></p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            1. Minnesota Vikings 2026 Offensive Depth Chart & Quarterback Structure
          </h2>
          <p>
            The 2026 Minnesota Vikings offense features a potent blend of explosive playmakers and high-caliber passing distribution under Head Coach Kevin O&apos;Connell. At the centerpiece of the quarterback depth chart, veteran passer Kyler Murray commands the starting role at QB1. Murray brings dynamic dual-threat capability, arm strength, and deep-ball accuracy that align seamlessly with O&apos;Connell&apos;s modernized scheme.
          </p>
          <p>
            Position reports on <a href="https://www.vikings.com/news/preseason-2026-depth-chart-unofficial-nfl" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Official Minnesota Vikings Depth Chart Announcements</a> show that second-year passer J.J. McCarthy serves as the primary backup at QB2. McCarthy continues to absorb first-team concepts, giving Minnesota excellent depth and developmental upside. Veteran Carson Wentz provides additional depth at QB3, giving the Vikings three quarterbacks with starting experience across the NFL.
          </p>
          <p>
            At wide receiver, All-Pro target Justin Jefferson anchors the position group as one of the premier offensive engines in football. Opposite Jefferson, third-year receiver Jordan Addison provides lethal route running, while Jalen Nailor operates as the primary slot option in three-receiver sets.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            2. Backfield Rotation & Offensive Line Foundations
          </h2>
          <p>
            Minnesota&apos;s rushing attack relies on a complimentary two-headed backfield featuring Aaron Jones Sr. and Jordan Mason. Jones offers high-level vision, quick lateral cut ability, and soft hands out of the backfield for checkdown passes. Meanwhile, Jordan Mason provides physical, downhill power between the tackles, ideal for converting short-yardage and red-zone opportunities.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-purple-400">
                  <th className="py-2 px-3">Position</th>
                  <th className="py-2 px-3">Starter</th>
                  <th className="py-2 px-3">Second Tier</th>
                  <th className="py-2 px-3">Third Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Tackle (LT)</td>
                  <td className="py-2 px-3 text-purple-300">Christian Darrisaw</td>
                  <td className="py-2 px-3">Walter Rouse</td>
                  <td className="py-2 px-3">Spencer Rolland</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Guard (LG)</td>
                  <td className="py-2 px-3">Blake Brandel</td>
                  <td className="py-2 px-3">Michael Jurgens</td>
                  <td className="py-2 px-3">Henry Byrd</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Center (C)</td>
                  <td className="py-2 px-3 text-purple-300">Garrett Bradbury</td>
                  <td className="py-2 px-3">Dan Feeney</td>
                  <td className="py-2 px-3">Matthew Cindric</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Guard (RG)</td>
                  <td className="py-2 px-3">Ed Ingram</td>
                  <td className="py-2 px-3">Tyrese Robinson</td>
                  <td className="py-2 px-3">Jeremy Flax</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Tackle (RT)</td>
                  <td className="py-2 px-3 text-purple-300">Brian O&apos;Neill</td>
                  <td className="py-2 px-3">David Quessenberry</td>
                  <td className="py-2 px-3">Doug Nester</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Protecting the backfield is an offensive line anchored by tackle tandem Christian Darrisaw and Brian O&apos;Neill. As detailed on <a href="https://www.espn.com/nfl/team/depth/_/name/min" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">ESPN Minnesota Vikings Depth Chart</a>, Darrisaw ranks among the top left tackles in edge-pass protection, allowing O&apos;Connell to dial up deep play-action concepts without requiring extra tight end chip help.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            3. Minnesota Vikings Defensive Front & Linebacker Rotation
          </h2>
          <p>
            Defensively, Minnesota operates an aggressive, pressure-oriented front designed to disrupt opposing passing games. Up front, veteran pass rusher Jonathan Greenard combines with high-upside edge rusher Dallas Turner to form a lethal pass-rushing tandem on third down.
          </p>
          <p>
            At the line-of-scrimmage interior, Harrison Phillips plugs running lanes while nose tackle Jerry Tillery provides interior pocket collapse. In the middle linebacker unit, Blake Cashman commands the defense as the primary caller, teamed alongside fast-tackling linebacker Ivan Pace Jr.
          </p>
          <p>
            Scouting analysis on <a href="https://www.cbssports.com/nfl/teams/min/minnesota-vikings/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">CBS Sports Vikings Roster Page</a> emphasizes how Andrew Van Ginkel&apos;s versatility allows defensive coordinators to drop edge defenders into coverage while bringing exotic blitz packages from safety depth.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            4. Secondary Depth & Special Teams Units
          </h2>
          <p>
            The Vikings defensive secondary combines veteran leadership with athletic perimeter cornerbacks. Byron Murphy Jr. leads the cornerback group, capable of playing both outside boundary and inside slot receiver assignments. Opposite Murphy, veteran Shaquill Griffin provides physical press-man coverage.
          </p>
          <p>
            Safety play remains a strength for Minnesota, anchored by perennial leader Harrison Smith and rangy deep-half safety Camryn Bynum. Third safety Josh Metellus frequently enters in nickel and dime packages, functioning as a hybrid linebacker-safety coverage defender.
          </p>
          <p>
            On special teams, kicker Will Reichard handles placekicking duties with kick-off specialist responsibilities, while veteran punter Ryan Wright maintains field position control. The kick return unit features explosive returners capable of delivering field-position momentum shifts.
          </p>
        </section>

        {/* Section 5: FAQ */}
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-cyan-500 pl-3">
            6. J.J. McCarthy&apos;s First Full Starter Campaign
          </h2>
          <p>
            After the Vikings settled their quarterback question, J.J. McCarthy takes the reins as the full-time starter for the 2026 season. The former first-round pick brings a live arm, athleticism, and the poise that won over the coaching staff during camp battles. Surrounded by Justin Jefferson, Jordan Addison, and a retooled offensive line, McCarthy&apos;s development is the single biggest variable in Minnesota&apos;s NFC North hopes.
          </p>
          <p>
            McCarthy&apos;s ability to attack all three levels and extend plays with his legs gives Kevin O&apos;Connell a versatile centerpiece. The organization has invested heavily in his surrounding cast, signaling a clear belief that the young passer can anchor the franchise for the next decade if he stays healthy.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-orange-500 pl-3">
            7. Carson Wentz as the Veteran Safety Net
          </h2>
          <p>
            Behind McCarthy, Minnesota brought back Carson Wentz to serve as the veteran backup. Wentz, a former Pro Bowl passer, offers a high-upside insurance policy with starting experience across Philadelphia, Indianapolis, and Washington. His presence means the Vikings will not be forced into a total offensive reboot if McCarthy misses time, preserving continuity in O&apos;Connell&apos;s system.
          </p>
          <p>
            The quarterback room&apos;s construction reflects a deliberate balance: an ascending young starter paired with a proven reliever. That combination is exactly what contenders covet, because it insulates the season against the single most destabilizing event in football — an injury to the starting quarterback.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Minnesota Vikings Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback on the Minnesota Vikings 2026 depth chart?
              </h3>
              <p className="text-zinc-300">
                Kyler Murray is listed as QB1 on the official Minnesota Vikings 2026 depth chart, with second-year passer J.J. McCarthy serving as the primary backup at QB2.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who are the starting running backs for the Minnesota Vikings in 2026?
              </h3>
              <p className="text-zinc-300">
                Veteran Aaron Jones Sr. and powerhouse back Jordan Mason share top billing on the running back depth chart, creating a potent duo in Kevin O&apos;Connell&apos;s backfield.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does the Minnesota Vikings offensive line stack up for 2026?
              </h3>
              <p className="text-zinc-300">
                The offensive line is anchored by elite offensive tackles Christian Darrisaw at LT and Brian O&apos;Neill at RT, supported by Garrett Bradbury at center, Blake Brandel at LG, and Ed Ingram at RG.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who leads the Minnesota Vikings defensive unit in 2026?
              </h3>
              <p className="text-zinc-300">
                The defense features edge rusher Jonathan Greenard, dynamic rookie linebacker Dallas Turner, Andrew Van Ginkel, middle linebacker Blake Cashman, and veteran safety Harrison Smith.
              </p>
            </div>
          </div>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Official Source and the Receiver Room Headline
        </h2>
        <p>
          Minnesota publishes its depth chart directly through <a href="https://www.vikings.com/team/depth-chart" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Vikings.com</a>, and national transcription services like <a href="https://www.rotowire.com/football/nfl-depth-charts/minnesota-vikings-depth-chart-min" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Rotowire</a> mirror its receiver hierarchy: <strong>Justin Jefferson</strong> and Jordan Addison forming one of football&apos;s premier duos, with veteran Jauan Jennings imported into the slot rotation alongside rookie Tai Felton — a group deep enough that legitimate NFL receivers are fighting for the fourth and fifth seats.
        </p>
        <p>
          Jefferson remains the offense&apos;s gravitational center: coverage schemes bend toward him weekly, which is precisely why the front office keeps investing in complementary winners who feast on single coverage.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Quarterback Story Colors Every Other Tier
        </h2>
        <p>
          No Vikings position group can be evaluated without the quarterback upheaval as context — Kyler Murray taking the reins with the former franchise investment moved to backup, per our full <Link href="/vikings-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">QB room analysis</Link>. For the skill positions, that means an established big-throwing starter feeding arguably the league&apos;s best pure receiver: a combination whose ceiling keeps Minnesota in every game regardless of defensive script.
        </p>
        <p>
          The offensive line&apos;s continuity is the quiet enabler here; interior stability is what turns elite receiver talent into actual fourth-quarter leads.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          What Would Change This Chart Midseason
        </h2>
        <p>
          Two variables carry mid-season mutation risk: the quarterback health designation (whose backup profile makes every practice report national news) and the third cornerback seat against a division full of elite passing games. Beyond those, this chart is stable by design — a contender&apos;s construction with clearly defined tiers rather than open auditions.
        </p>
        <p>
          Map every Vikings-relevant matchup and the complete league slate on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub, and compare receiver rooms in the <Link href="/colts-wr-depth-chart" className="text-blue-400 underline hover:text-blue-300">Colts WR guide</Link>.
        </p>
      </section>

        {/* Footer Navigation Link */}
        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-purple-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Official NFL Roster Data • Minnesota Vikings Coverage</span>
        </div>

      </article>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/vikings/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/min/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
