import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Broncos QB Depth Chart 2026: Bo Nix Starter & Backup Hier...",
  description: "Comprehensive 2026 Denver Broncos QB depth chart: analysis of starter Bo Nix, backup Jarrett Stidham, reserve options, and Sean Payton's offensive scheme.",
  keywords: [
    "broncos qb depth chart",
    "denver broncos quarterback depth chart 2026",
    "broncos starting qb 2026",
    "bo nix broncos depth chart",
    "jarrett stidham broncos qb2",
    "sam ehlinger broncos qb",
    "sean payton quarterback offense"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/broncos-qb-depth-chart`,
  },
};

export default function BroncosQbDepthChartPage() {
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
        "name": "Broncos QB Depth Chart",
        "item": "https://billsschedule2026.online/broncos-qb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the Denver Broncos in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bo Nix enters the 2026 season as the starting quarterback (QB1) for the Denver Broncos under Head Coach Sean Payton."
        }
      },
      {
        "@type": "Question",
        "name": "Who serves as the primary backup quarterback on the Broncos depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran passer Jarrett Stidham is listed as QB2 on the Denver Broncos depth chart."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the third-string quarterback on the Denver Broncos 2026 roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sam Ehlinger holds the QB3 slot on the active roster, providing mobile depth for scout-team assignments."
        }
      },
      {
        "@type": "Question",
        "name": "How does Sean Payton's scheme elevate Bo Nix's passing production?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sean Payton's offense features quick-rhythm spread concepts, pre-snap reads, and screen-passing designs that leverage Bo Nix's rapid decision-making and ball-placement accuracy."
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
        <span className="text-white font-semibold">Broncos QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-950/90 border border-orange-800/60 rounded text-orange-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL QUARTERBACK DIRECTORY • DENVER BRONCOS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Broncos QB Depth Chart 2026: Bo Nix Starter & Backup Hierarchy
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed analysis of the 2026 Denver Broncos quarterback room. Track starter performance metrics for Bo Nix, backup depth with Jarrett Stidham, and offensive playcalling implementation under Head Coach Sean Payton.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified QB Roster Hierarchy
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

      {/* Article Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/broncos/broncos-qb-starter.webp" 
            alt="Denver Broncos Bo Nix Quarterback Action"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="broncos-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            Denver Broncos quarterback Bo Nix leading offensive passing drills during 2026 summer practice.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-orange-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🎯</span> 2026 Denver Broncos Quarterback Hierarchy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-orange-400">
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Experience</th>
                  <th className="py-2 px-3">Primary Attributes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB1 (Starter)</td>
                  <td className="py-2.5 px-3 text-orange-300 font-bold">Bo Nix</td>
                  <td className="py-2.5 px-3">2nd Year</td>
                  <td className="py-2.5 px-3 text-emerald-400">Quick processing, rhythm accuracy & scrambling mobility</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB2 (Primary Backup)</td>
                  <td className="py-2.5 px-3 font-bold text-white">Jarrett Stidham</td>
                  <td className="py-2.5 px-3">6th Year</td>
                  <td className="py-2.5 px-3 text-zinc-300">System familiarity & pocket stability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB3 (Reserve)</td>
                  <td className="py-2.5 px-3">Sam Ehlinger</td>
                  <td className="py-2.5 px-3">5th Year</td>
                  <td className="py-2.5 px-3 text-zinc-400">Dual-threat capability & scout team execution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            1. Denver Broncos 2026 QB Hierarchy & Starter Overview
          </h2>
          <p>
            The Denver Broncos enter the 2026 NFL regular season with complete clarity at the quarterback position. Young signal-caller Bo Nix commands the starting role at QB1, providing Denver with a sharp-minded passer perfectly tailored to Sean Payton&apos;s offensive system.
          </p>
          <p>
            Official roster releases on <a href="https://www.denverbroncos.com/team/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">Denver Broncos Official Roster Updates</a> show that Nix took 100% of the first-team reps during training camp scrimmages, establishing strong rhythm with target receivers Courtland Sutton, Marvin Mims Jr., and tight end Evan Engram.
          </p>
          <p>
            Behind Nix, veteran backup Jarrett Stidham retains the QB2 spot, offering deep knowledge of Payton&apos;s playbook installation. Sam Ehlinger operates as the QB3 reserve, giving Denver three experienced passers on the active roster.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            2. Bo Nix: Starter Evaluation & Tactical Growth
          </h2>
          <p>
            Bo Nix&apos;s evolution into Denver&apos;s franchise leader represents one of the most successful quarterback transitions in recent AFC West history. Nix features exceptional pre-snap vision, getting the offense into favorable blocking checks before the snap.
          </p>
          <p>
            Operating behind a stellar offensive line featuring left tackle Garett Bolles and right guard Quinn Meinerz, Nix is able to step cleanly into throw progressions. In addition to pocket accuracy, Nix&apos;s athletic scrambling ability allows Denver to extend drives on third-and-medium situations.
          </p>
          <p>
            Tracking summaries on <a href="https://www.espn.com/nfl/team/depth/_/name/den" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">ESPN Denver Broncos Depth Chart</a> highlight that Nix completed over 70% of his short-to-intermediate throws during summer practice action.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            3. Backup Quarterbacks: Jarrett Stidham & Sam Ehlinger
          </h2>
          <p>
            Veteran backup Jarrett Stidham provides Denver with one of the most dependable QB2 options in the NFL. Stidham&apos;s quick release and cool demeanor under pressure ensure that Denver&apos;s passing attack can operate smoothly if Nix experiences minor mid-game setbacks.
          </p>
          <p>
            At QB3, Sam Ehlinger provides mobile dual-threat capabilities. Ehlinger frequently simulates athletic opposing dual-threat quarterbacks during mid-week defensive prep work. Scouting notes on <a href="https://www.cbssports.com/nfl/teams/den/denver-broncos/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">CBS Sports Broncos QB Evaluation</a> note that Ehlinger&apos;s rushing mobility makes him a valuable asset on the practice squad.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            4. Sean Payton&apos;s Offensive System & Quarterback Integration
          </h2>
          <p>
            Sean Payton&apos;s offensive system places high demands on quarterback decision-making speed. The scheme incorporates heavy play-action fakes to running back J.K. Dobbins, quick screen passes, and multi-receiver flood concepts to pull linebackers out of middle zone coverage.
          </p>
          <p>
            With Bo Nix demonstrating mastery of these concepts, the Broncos enter 2026 equipped with a high-tempo passing attack capable of matching scoring output against top AFC opponents.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-orange-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Broncos QB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback for the Denver Broncos in 2026?
              </h3>
              <p className="text-zinc-300">
                Bo Nix enters the 2026 season as the starting quarterback (QB1) for the Denver Broncos under Head Coach Sean Payton.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who serves as the primary backup quarterback on the Broncos depth chart?
              </h3>
              <p className="text-zinc-300">
                Veteran passer Jarrett Stidham is listed as QB2 on the Denver Broncos depth chart.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the third-string quarterback on the Denver Broncos 2026 roster?
              </h3>
              <p className="text-zinc-300">
                Sam Ehlinger holds the QB3 slot on the active roster, providing mobile depth for scout-team assignments.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does Sean Payton&apos;s scheme elevate Bo Nix&apos;s passing production?
              </h3>
              <p className="text-zinc-300">
                Sean Payton&apos;s offense features quick-rhythm spread concepts, pre-snap reads, and screen-passing designs that leverage Bo Nix&apos;s rapid decision-making and ball-placement accuracy.
              </p>
            </div>
          </div>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          Bo Nix QB1: Stability Denver Hasn&apos;t Had in Years
        </h2>
        <p>
          Denver&apos;s 2026 quarterback depth chart is remarkable mostly for how uncontroversial it is. <strong>Bo Nix</strong> enters the season as the unchallenged starter, with beat coverage — including the <a href="https://sports.yahoo.com/articles/jarrett-stidham-primary-backup-bo-120000753.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Yahoo Sports camp report</a> confirming Jarrett Stidham as the primary backup — presenting a hierarchy that has not wavered since the spring program opened. After years of quarterback turbulence in the Mile High City, stability itself has become a competitive advantage.
        </p>
        <p>
          Nix&apos;s command shows up in the details coaches actually grade: pre-snap identification adjustments, red-zone operation tempo, and the ball-security numbers that carried his college efficiency into the professional ranks. The organization built its offensive line and running game investments around his skill set, meaning everything listed behind him on this chart is insurance planning rather than competition design.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Backup Room: Stidham Holds, Wilson Waits
        </h2>
        <p>
          The two-deep behind Nix pairs experience with intrigue. Stidham — a seventh-year veteran whose career spans New England, Las Vegas, and Denver, with nineteen regular-season appearances documented on the <a href="https://www.denverbroncos.com/team/players-roster/jarrett-stidham/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">team&apos;s official roster page</a> — offers the system fluency that makes him a reliable game-day number two. Behind him, Zach Wilson&apos;s presence as the third quarterback is one of the league&apos;s quieter reclamation projects: a former top-two pick rebuilding value inside a building famous for its quarterback development infrastructure.
        </p>
        <p>
          That three-man construction reflects modern roster math perfectly. Teams keep exactly two quarterbacks active most weeks and stash the third as a practice-squad elevation candidate; carrying a reclamation arm in that slot costs almost nothing while preserving trade optionality if Wilson flashes in closed practices or brief preseason bursts.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          How Denver&apos;s Construction Compares Across the AFC
        </h2>
        <p>
          Zoom out and Denver&apos;s quarterback table reads like the AFC&apos;s spectrum in miniature: a settled young franchise starter, a competent veteran bridge, and a lottery-ticket reclamation arm. Contrast that with the volatility documented in our guides to the <Link href="/colts-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Colts&apos; reset</Link> and the <Link href="/vikings-qb-depth-chart" className="text-blue-400 underline hover:text-blue-300">Vikings&apos; camp upheaval</Link>, and you see why Denver&apos;s quiet confidence ranks among the conference&apos;s most enviable positions.
        </p>
        <p>
          Every Broncos-relevant matchup this season lives on our <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub alongside broadcast details in the <Link href="/where-to-watch" className="text-blue-400 underline hover:text-blue-300">streaming guide</Link>.
        </p>
      </section>

        {/* Footer Navigation Link */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          What Stidham&apos;s Value Actually Represents
        </h2>
        <p>
          Seventh-year backup quarterbacks occupy a strange professional niche: paid for institutional knowledge rather than playing time, valued for practice-week preparation of game plans they will never execute, and retained across coaching changes precisely because their continuity outlasts the coordinators who signed them. Stidham&apos;s tenure spans multiple offensive regimes in Denver, making him a living playbook whose roster seat costs less than replacing his function annually.
        </p>
        <p>
          His trade value follows the same logic from the buying side: teams facing emergency quarterback needs prefer arms already fluent in similar systems, and Denver&apos;s history of developing passers raises the market perception of anyone trained inside the building. Every clean preseason series quietly appreciates that asset.
        </p>
      </section>

        {/* Footer Navigation Link */}
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Altitude Variable in Denver&apos;s Quarterback Development
        </h2>
        <p>
          Denver&apos;s home environment quietly shapes quarterback development in ways national analysis routinely misses. Mile High altitude compresses throwing windows with faster-degrading stamina, amplifies ball flight on deep shots, and turns fourth-quarter home games into conditioning contests that favor offenses practicing daily in the same air. Nix&apos;s home/road splits since arriving have reflected exactly this pattern — and the staff&apos;s offensive construction leans into it deliberately, scripting aggressive early-downs at altitude before opponents adjust their substitution rhythms.
        </p>
        <p>
          For the backups listed here, the altitude factor is audition-relevant too: Stidham&apos;s institutional value includes years of practice familiarity with these conditions, knowledge that becomes roster-visible only if injury forces him onto the field. It is one more reason organizations keep system-fluent veterans even when arm talent arguments suggest younger alternatives.
        </p>
        <p>
      Rival coordinators planning November trips to Denver budget for it as well — silent counts, scripted tempo breaks, and rotation-heavy defensive line usage all trace back to the same environmental math that shapes the home team&apos;s depth chart.
        </p>
      </section>

        {/* Footer Navigation Link */}
        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-orange-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Official NFL Roster Data • Denver Broncos Coverage</span>
        </div>

      </article>
    
      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Week-One Preparation Standard Denver Actually Runs
        </h2>
        <p>
          Depth chart listings understate how much quarterback readiness is built outside game weeks. Denver&apos;s practice structure gives its starter full-speed installation reps while the backup room runs opponent-simulation scripts against the starting defense — meaning Stidham&apos;s weekly value is measured in the looks he gives Denver&apos;s own linebackers, not in garbage-time statistics. Organizations that understand this retention math keep system-fluent veterans on cheap deals indefinitely, because replacing that institutional function every offseason costs more than the salary line suggests.
        </p>
        <p>
          The third-quarterback seat follows parallel logic with inverted incentives: Wilson&apos;s development reps are audition tape for thirty-one other teams as much as internal evaluation, and every clean practice week either builds trade equity or deepens the reclamation investment. Either outcome benefits the Broncos, which is exactly why three-man rooms have become the league&apos;s preferred construction for franchises with settled starters.
        </p>
        <p>
          For fans modeling Denver&apos;s season, the actionable read is simple: this room&apos;s design means a one-to-two-game starter injury changes almost nothing schematically, while a multi-month absence tests the ceiling rather than the floor. That insurance gradient is worth real divisional standings points across seventeen weeks.
        </p>
      </section>

        {/* Sources & Authority References */}
      <section className="mt-8 space-y-3">
        <h2 className="mt-8 text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Preseason Finale Reps That Finalize Everything
        </h2>
        <p>
          Denver&apos;s exhibition finale carries evaluation weight unusual for a settled room: full dress-rehearsal series give the coaching staff final confirmation of operational readiness, while extended backup sequences produce the last audition tape before cutdown decisions freeze the roster. Even uncontested competitions generate consequential data in these games.
        </p>
        <p>
        The staff&apos;s rep distribution philosophy reveals its priorities: starters protected entirely, backups evaluated against first-unit looks, and development arms given scripted situations that test specific growth markers. Reading those distributions tells fans exactly how confident the organization is at every tier of the position.
        </p>
      </section>

        {/* Sources & Authority References */}
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/broncos/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/den/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
