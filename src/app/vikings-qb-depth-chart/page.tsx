import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Vikings QB Depth Chart 2026: Kyler Murray & McCarthy",
  description: "Comprehensive 2026 Minnesota Vikings QB depth chart: analysis of starting quarterback Kyler Murray, J.J. McCarthy's role at QB2, backup depth, and Kevin O'Connell's offense.",
  keywords: [
    "vikings qb depth chart",
    "minnesota vikings quarterback depth chart 2026",
    "vikings starting qb 2026",
    "kyler murray vikings depth chart",
    "jj mccarthy vikings qb2",
    "carson wentz vikings qb",
    "kevin o'connell quarterback system"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/vikings-qb-depth-chart`,
  },
};

export default function VikingsQbDepthChartPage() {
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
        "name": "Vikings QB Depth Chart",
        "item": "https://billsschedule2026.online/vikings-qb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Minnesota Vikings in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kyler Murray is the starting quarterback (QB1) for the Minnesota Vikings entering the 2026 regular season under Head Coach Kevin O'Connell."
        }
      },
      {
        "@type": "Question",
        "name": "What is J.J. McCarthy's status on the 2026 Vikings QB depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "J.J. McCarthy is listed as QB2 on the Vikings depth chart. He continues his development as the franchise's key long-term signal-caller."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the third-string quarterback on the Minnesota Vikings roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran passer Carson Wentz is listed as QB3, providing veteran insurance alongside developmental passer Max Johnson."
        }
      },
      {
        "@type": "Question",
        "name": "How does Kevin O'Connell's system complement Minnesota's quarterbacks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kevin O'Connell's offensive design utilizes play-action bootlegs, half-field reads, and vertical shots to Justin Jefferson and Jordan Addison to elevate passer efficiency."
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
        <span className="text-white font-semibold">Vikings QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/90 border border-purple-800/60 rounded text-purple-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL QUARTERBACK DIRECTORY • MINNESOTA VIKINGS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Vikings QB Depth Chart 2026: Kyler Murray & J.J. McCarthy Breakdown
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed evaluation of the 2026 Minnesota Vikings quarterback position. Track starter metrics for Kyler Murray, J.J. McCarthy&apos;s development as QB2, veteran reserve depth, and tactical execution under head coach Kevin O&apos;Connell.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified Quarterback Hierarchy
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By NFL Quarterback Analytics Desk</span>
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
            src="/images/vikings/vikings-qb-starter.webp" 
            alt="Minnesota Vikings Quarterback Practice Drill"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="vikings-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            Minnesota Vikings quarterbacks working through dropback progressions and target drills during summer practices.
          </div>
        </div>

        {/* Quick Summary Table */}
        <div className="bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-purple-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🎯</span> 2026 Vikings Quarterback Depth Chart Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-purple-400">
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Experience</th>
                  <th className="py-2 px-3">Key Skillset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB1 (Starter)</td>
                  <td className="py-2.5 px-3 text-purple-300 font-bold">Kyler Murray</td>
                  <td className="py-2.5 px-3">8th Year</td>
                  <td className="py-2.5 px-3 text-emerald-400">Dual-threat playmaking & deep arm accuracy</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB2 (Primary Backup)</td>
                  <td className="py-2.5 px-3 font-bold text-white">J.J. McCarthy</td>
                  <td className="py-2.5 px-3">2nd Year</td>
                  <td className="py-2.5 px-3 text-zinc-300">Rhythm passing, mobility & arm talent</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB3 (Veteran Depth)</td>
                  <td className="py-2.5 px-3">Carson Wentz</td>
                  <td className="py-2.5 px-3">11th Year</td>
                  <td className="py-2.5 px-3 text-zinc-400">Pocket presence & emergency starter capability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB4 / Practice Squad</td>
                  <td className="py-2.5 px-3">Max Johnson</td>
                  <td className="py-2.5 px-3">Rookie</td>
                  <td className="py-2.5 px-3 text-zinc-400">Pocket passer & scout team development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            1. Minnesota Vikings 2026 QB Hierarchy & Starter Overview
          </h2>
          <p>
            The Minnesota Vikings enter the 2026 NFL regular season with a clear quarterback dynamic under Head Coach Kevin O&apos;Connell. Commanding the starter reps at QB1 is veteran dynamic passer Kyler Murray, who brings proven elite playmaking capacity to Minnesota&apos;s high-powered passing attack.
          </p>
          <p>
            Official depth chart updates from <a href="https://www.vikings.com/news/preseason-2026-depth-chart-unofficial-nfl" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Vikings Official Depth Chart News</a> show that Murray took the overwhelming majority of first-team snaps throughout training camp, demonstrating sharp rhythm on short-to-intermediate concepts while utilizing his improvisational mobility when pass protection breaks down.
          </p>
          <p>
            Behind Murray, second-year signal-caller J.J. McCarthy occupies the QB2 spot. McCarthy, drafted to be Minnesota&apos;s cornerstone passer, continues to make structural strides while working closely with O&apos;Connell and offensive coordinator Wes Phillips.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            2. Kyler Murray: Skillset, Scheme Fit & 2026 Expectations
          </h2>
          <p>
            Kyler Murray&apos;s addition to the Minnesota Vikings offense elevates the ceiling of O&apos;Connell&apos;s playbook. Murray possesses an uncommon blend of twitchy escape velocity and deep-ball trajectory control that punishes single-high safety coverage.
          </p>
          <p>
            In O&apos;Connell&apos;s offense, Murray benefits from playing behind a top-tier offensive tackle pairing in Christian Darrisaw and Brian O&apos;Neill. Clean perimeter pockets enable Murray to operate from structured platforms before launching explosive perimeter passes to wide receivers Justin Jefferson and Jordan Addison.
          </p>
          <p>
            According to positional tracking on <a href="https://www.espn.com/nfl/team/depth/_/name/min" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">ESPN Vikings Quarterback Depth Chart</a>, Murray&apos;s completion percentage on bootleg passes off play-action ranks among the top metrics in football, making Minnesota&apos;s offense exceptionally difficult to defend in red-zone situations.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            3. J.J. McCarthy & Development at QB2
          </h2>
          <p>
            While Murray holds down the starting job, J.J. McCarthy remains an integral figure in Minnesota&apos;s franchise trajectory. McCarthy&apos;s rapid processing power, quick trigger, and competitive drive make him an ideal young quarterback to hone his skills inside O&apos;Connell&apos;s QB room.
          </p>
          <p>
            During 2026 preseason games, McCarthy displayed composure under pressure, leading successful two-minute drill drives and completing passes with anticipation into tight coverage windows. As detailed on <a href="https://www.cbssports.com/nfl/teams/min/minnesota-vikings/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">CBS Sports Vikings Roster Breakdown</a>, McCarthy&apos;s presence gives Minnesota high confidence should injuries arise during the grueling 17-game regular season schedule.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            4. Veteran Reserves & Tactical Playcalling Considerations
          </h2>
          <p>
            Rounding out the Vikings quarterback room is veteran Carson Wentz at QB3 and rookie Max Johnson on the developmental practice squad. Wentz provides valuable experience as a former starter who can step in without requiring significant alterations to game-week installation packages.
          </p>
          <p>
            O&apos;Connell&apos;s playcalling strategy emphasizes disguising dropback concepts through heavy pre-snap motion and play-action fakes. With a quarterback room featuring dynamic movement skills and strong arm talent, the Vikings possess the flexibility to adapt their gameplan against any defensive look.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-purple-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Vikings QB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback for the Minnesota Vikings in 2026?
              </h3>
              <p className="text-zinc-300">
                Kyler Murray is the starting quarterback (QB1) for the Minnesota Vikings entering the 2026 regular season under Head Coach Kevin O&apos;Connell.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                What is J.J. McCarthy&apos;s status on the 2026 Vikings QB depth chart?
              </h3>
              <p className="text-zinc-300">
                J.J. McCarthy is listed as QB2 on the Vikings depth chart. He continues his development as the franchise&apos;s key long-term signal-caller.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the third-string quarterback on the Minnesota Vikings roster?
              </h3>
              <p className="text-zinc-300">
                Veteran passer Carson Wentz is listed as QB3, providing veteran insurance alongside developmental passer Max Johnson.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does Kevin O&apos;Connell&apos;s system complement Minnesota&apos;s quarterbacks?
              </h3>
              <p className="text-zinc-300">
                Kevin O&apos;Connell&apos;s offensive design utilizes play-action bootlegs, half-field reads, and vertical shots to Justin Jefferson and Jordan Addison to elevate passer efficiency.
              </p>
            </div>
          </div>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          How Minnesota Got Here: The Camp Battle Nobody Predicted
        </h2>
        <p>
          The most stunning quarterback development of the 2026 offseason happened in Minneapolis, where J.J. McCarthy — the hand-picked successor after the Sam Darnold transition — enters the season as Kyler Murray&apos;s backup, per the <a href="https://www.startribune.com/minnesota-vikings-jj-mccarthy-contract-nfl-future-kyler-murray-starting-qb-depth-chart-training-camp/601878028" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Star Tribune&apos;s training camp reporting</a>. What was framed in July as a transition year became a genuine competition by August, and the veteran won it outright.
        </p>
        <p>
          For context on how quickly narratives moved: Minnesota&apos;s own camp preview published mid-July still framed the room around McCarthy&apos;s ascent from the Darnold era, and by mid-August the local beat was running headlines asking whether the organization had moved off its former cornerstone entirely. Few position rooms anywhere in the league swung that far that fast.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          What Murray Brings and Why It Worked Immediately
        </h2>
        <p>
          Kevin O&apos;Connell&apos;s system prizes precision timing, layered throws off play action, and quarterbacks who can win from clean pockets without sacrificing escape discipline. Murray&apos;s profile — elite short-area acceleration, a career of high-end completion percentages, and proven production in structured offenses — slots into that framework with minimal translation friction. The coaching staff&apos;s public comments have consistently emphasized schematic fit over pedigree, which is exactly the lens through which this decision should be read.
        </p>
        <p>
          The offensive construction around him — a legitimate receiving corps and a committee backfield built for zone-heavy concepts — gives Minnesota a floor it did not have during the transition year, and the division race math changes accordingly.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          McCarthy&apos;s Path From Here
        </h2>
        <p>
          Backup quarterback is not a career sentence at twenty-three, but the trade market implications are real: teams desperate for young arms will call, and Minnesota&apos;s front office now holds an asset whose value depends entirely on practice-week evaluation rather than game tape. McCarthy&apos;s development milestones — full-command installs, two-minute operation, red-zone accuracy — will be graded internally every week, and any Murray injury instantly converts this from the league&apos;s most intriguing backup story into its highest-stakes one.
        </p>
        <p>
          Compare stable situations in our <Link href="/bills-quarterback-depth-chart" className="text-blue-400 underline hover:text-blue-300">Bills QB breakdown</Link> and the <Link href="/broncos-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Broncos&apos; settled room</Link>, with every Vikings-relevant date mapped on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub.
        </p>
      </section>

        {/* Footer Navigation Link */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The O&apos;Connell System as Quarterback Accelerator
        </h2>
        <p>
          Coaching fit matters more at quarterback than any other position, and Minnesota&apos;s offensive infrastructure has become one of the league&apos;s recognized passer accelerators: layered play-action concepts, clean launch points, and route combinations engineered to create easy completions that build in-game confidence. Veterans arriving from chaotic situations have historically found the system&apos;s clarity restorative — which is precisely why this particular acquisition pairing generated league-wide interest.
        </p>
        <p>
          For the backup competing behind the starter, the same system offers a genuine development laboratory: practice-week installs against elite defensive looks, with coaching staff experienced in tailoring teaching to individual processing styles. Rooms this well-coached resolve their competitions on merit rather than salary gravity.
        </p>
      </section>

        {/* Footer Navigation Link */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Trade Market Implications Nobody Is Pricing Correctly
        </h2>
        <p>
          A young, drafted, healthy quarterback stuck behind a newly imported starter is the rarest commodity on the NFL trade market — and Minnesota&apos;s situation deserves sharper analysis than the usual &quot;will they trade him&quot; speculation. Backup quarterbacks with starting experience and first-round capital attached historically return second-round compensation when multiple needy teams emerge, which happens every season by Week 6 somewhere in the league.
        </p>
        <p>
          The Vikings&apos; leverage calculation is therefore patient by design: holding the asset through training camp costs nothing, preseason performance either builds or rebuilds trade value, and a single injury elsewhere converts their backup into an auction item. Rival general managers know this, which is why exploratory calls reportedly intensified as camp progressed — and why Minnesota&apos;s asking price has reportedly reflected confidence rather than motivation.
        </p>
        <p>
          For the player himself, the professional calculus is equally clear: practice-week excellence against a first-team defense is now his primary audition tape for thirty-one other organizations, making every closed-door session this season more consequential than most starters&apos; game film.
        </p>
      </section>

        {/* Footer Navigation Link */}
        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-purple-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Minnesota Vikings Coverage • Official NFL Roster Data</span>
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
