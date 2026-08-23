import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Ray Davis: Bills RB Stats & Profile",
  description: "Complete player profile for Buffalo Bills running back Ray Davis: 2026 preseason touchdown vs Browns, career rushing stats, Joe Brady offensive fit, and fantasy football outlook.",
  keywords: [
    "ray davis",
    "ray davis bills rb",
    "ray davis stats 2026",
    "buffalo bills running back ray davis",
    "ray davis touchdown browns preseason",
    "james cook ray davis depth chart",
    "ray davis fantasy football dynasty",
    "kentucky ray davis bills"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ray-davis-bills-rb`,
  },
  openGraph: {
    title: "Ray Davis: Bills RB Stats, Touchdowns, Draft Profile & Dy...",
    description: "Ray Davis stats breakdown, preseason goal-line touchdowns, career metrics, and depth chart role behind James Cook.",
    url: `${SITE_CONFIG.url}/ray-davis-bills-rb`,
    type: "article",
  },
};

export default function RayDavisBillsRBPage() {
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
        "name": "Ray Davis Bills RB",
        "item": "https://billsschedule2026.online/ray-davis-bills-rb"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ray Davis: Bills RB Preseason Highlights, Career Stats & Roster Impact",
    "description": "Comprehensive evaluation of Buffalo Bills running back Ray Davis, featuring red-zone efficiency, preseason scoring, Joe Brady's offense, and fantasy dynasty projections.",
    "datePublished": "2026-08-23T07:00:00+08:00",
    "dateModified": "2026-08-23T07:00:00+08:00",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team",
      "url": "https://billsschedule2026.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BillsSchedule2026",
      "logo": {
        "@type": "ImageObject",
        "url": "https://billsschedule2026.online/favicon.ico"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Ray Davis's career stats with the Buffalo Bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Across his tenure with Buffalo, Ray Davis (#22) has recorded over 171 carries for 717 rushing yards, 27 receptions for 275 receiving yards, and 9 total touchdowns, serving as a primary red-zone finisher."
        }
      },
      {
        "@type": "Question",
        "name": "Where was Ray Davis drafted in the NFL Draft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ray Davis (Reuel Davis) was drafted by the Buffalo Bills in the 4th round (128th overall selection) of the 2024 NFL Draft after a standout collegiate career at Kentucky, Vanderbilt, and Temple."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Ray Davis play in Joe Brady's Bills offense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ray Davis serves as Buffalo's primary power running back and short-yardage specialist, pairing with explosive starter James Cook in a 'Thunder and Lightning' backfield combination."
        }
      },
      {
        "@type": "Question",
        "name": "Did Ray Davis score a touchdown in the 2026 preseason?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ray Davis scored a physical 1-yard goal-line touchdown during Buffalo's 31-7 preseason victory over the Cleveland Browns on August 22, 2026."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
        <span className="text-white font-semibold">Ray Davis Bills RB</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          PLAYER SPOTLIGHT & OFFENSIVE BACKFIELD METRICS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Ray Davis: Bills RB Goal-Line Touchdowns, Career Stats & Fantasy Profile
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          An extensive scouting and analytical breakdown of Buffalo Bills running back Ray Davis (#22). Reviewing his goal-line efficiency, 2026 preseason touchdown performance against Cleveland, college draft profile at Kentucky, pass protection, and backfield tandem with James Cook.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Locked: Primary Power RB (RB2)
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 Analytics Team</span>
        </div>
      </header>

      {/* Ads */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Quick Summary Stat Box */}
        <div className="bg-gradient-to-r from-blue-950/50 via-zinc-900 to-zinc-950 p-6 rounded-xl border border-blue-800/40 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>📊</span> Ray Davis Career Snapshot & Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">JERSEY / DRAFT</span>
              <strong className="text-white text-sm font-sans">#22 / 2024 Pick 128 (4th Rd)</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">HEIGHT / WEIGHT</span>
              <strong className="text-yellow-400 text-sm font-sans">5-8 / 215 lbs</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">CAREER TOUCHDOWNS</span>
              <strong className="text-emerald-400 text-sm font-sans">9 Total TDs</strong>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 block text-[11px]">CAREER SCRIMMAGE YDS</span>
              <strong className="text-blue-400 text-sm font-sans">992 Scrimmage Yards</strong>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-blue-600 pl-3">
            1. Ray Davis Goal-Line Touchdown & Short-Yardage Efficiency
          </h2>
          <p>
            When the Buffalo Bills offense reaches the opponent&apos;s 5-yard line, Head Coach Sean McDermott and Offensive Coordinator Joe Brady frequently dial up number #22. Ray Davis, a 5-foot-8, 215-pound thumper out of Kentucky, has established himself as one of the most reliable goal-line options in the AFC East.
          </p>
          <p>
            In Buffalo&apos;s second 2026 preseason matchup against the Cleveland Browns on August 22, 2026, Davis showcased his trademark short-yardage power. On a 1st-and-goal sequence from the 1-yard line following a lightning delay, Davis took a direct handoff, lowered his shoulder into Cleveland&apos;s interior defensive line, and drove through initial contact for a physical touchdown in Buffalo&apos;s 31-7 victory.
          </p>
          <p>
            Official game logs on <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a> and <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a> highlight that Davis converts goal-to-go situations at an exceptional 68.4% success rate, giving Josh Allen a dependable rushing alternative that minimizes wear and tear on the franchise quarterback during heavy collision situations.
          </p>

          <div className="my-6 relative h-64 md:h-80 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/bills/training-camp-practice.webp"
              alt="Buffalo Bills running back drill work during goal line preparation"
              fill
              className="object-cover"
            />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="ray-davis-bills-rb 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-xs font-mono text-zinc-300">
              Ray Davis practicing short-yardage bursts and interior line reads during team drills.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-yellow-500 pl-3">
            2. Draft Profile & Fit in Joe Brady&apos;s Offense
          </h2>
          <p>
            General Manager Brandon Beane targeted Ray Davis in the fourth round (128th overall) of the 2024 NFL Draft specifically to add physical balance to Buffalo&apos;s aerial attack. Prior to entering the NFL, Davis built an incredible collegiate resume:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>Collegiate Journey:</strong> Played for Temple, Vanderbilt, and Kentucky, becoming the first player in SEC history to post 1,000-yard rushing seasons at two different SEC schools.</li>
            <li><strong>Historic Kentucky Performance:</strong> Rushed for 280 yards and 4 touchdowns against Florida in 2023, showcasing elite contact balance against SEC defenses.</li>
            <li><strong>NFL Scouting Metrics:</strong> Measured 215 pounds with a low center of gravity, posting a 4.52 40-yard dash and a 35-inch vertical jump.</li>
          </ul>
          <p>
            In Joe Brady&apos;s system, Davis serves as the perfect inside zone and gap-scheme runner. While starter James Cook excels on perimeter sweeps and outside zone stretches, Davis slams through the A- and B-gaps, forcing safety tackles in secondary seams.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-emerald-500 pl-3">
            3. Backup RB Snaps & &quot;Thunder & Lightning&quot; Tandem Behind James Cook
          </h2>
          <p>
            The tandem of James Cook (&quot;Lightning&quot;) and Ray Davis (&quot;Thunder&quot;) gives Buffalo one of the most complementary backfields in the NFL. Rather than relying on a single bell-cow running back, Joe Brady rotates both backs based on game script and down-and-distance:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs font-mono text-zinc-300 border border-zinc-800">
              <thead className="bg-zinc-800 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Situation</th>
                  <th className="p-3">Primary Running Back</th>
                  <th className="p-3">Tactical Objective</th>
                  <th className="p-3">Efficiency Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 bg-black/40">
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">1st & 10 / Open Field</td>
                  <td className="p-3 text-emerald-400">James Cook</td>
                  <td className="p-3">Perimeter speed, home-run threat, wheel routes</td>
                  <td className="p-3 font-bold text-emerald-400">4.8 YPC Average</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">3rd & Short / Red Zone</td>
                  <td className="p-3 text-blue-400">Ray Davis</td>
                  <td className="p-3">Inside power, short-yardage conversion, goal line</td>
                  <td className="p-3 font-bold text-blue-400">68.4% Red-Zone TD Success</td>
                </tr>
                <tr className="hover:bg-zinc-800/40">
                  <td className="p-3 font-bold text-white">4th Quarter Closing</td>
                  <td className="p-3 text-yellow-400">Ray Davis / Ty Johnson</td>
                  <td className="p-3">Clock draining, physical attrition against defenders</td>
                  <td className="p-3 font-bold text-yellow-400">3.9 YAC After Contact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-purple-500 pl-3">
            4. Receiving Out of the Backfield & Pass Blocking
          </h2>
          <p>
            While Davis is celebrated for his physical ground style, his pass-catching ability out of the backfield is heavily underrated. During his NFL career with Buffalo, Davis has compiled 27 receptions for 275 receiving yards and touchdown catches.
          </p>
          <p>
            His breakout receiving performance occurred during a Monday Night Football matchup against the New York Jets, where Davis racked up 152 total scrimmage yards (129 rushing, 23 receiving with a TD), stepping up as the starting RB when Cook was sidelined.
          </p>
          <p>
            Scouting analysis on <a href="https://www.cbssports.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CBS Sports</a> highlights his blitz pickup chops. At 215 pounds, Davis anchors firmly against blitzing linebackers, keeping Josh Allen clean in the pocket during 3rd-and-medium dropbacks.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-red-500 pl-3">
            5. Fantasy Football Dynasty & Red-Zone Target Projection
          </h2>
          <p>
            For fantasy football managers in dynasty and redraft leagues, Ray Davis represents one of the premier premier handcuff and stand-alone flexible assets in the NFL.
          </p>
          <div className="bg-black/50 p-5 rounded-xl border border-zinc-800 space-y-3 my-6">
            <h3 className="text-lg font-headline font-bold text-white">
              Fantasy Football Outlook for Ray Davis
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-zinc-300">
              <li><strong>Stand-Alone Value:</strong> Projects for 8-12 touches per game with high goal-line touchdown priority, making him a viable Flex play in deeper formats.</li>
              <li><strong>Elite Handcuff Upside:</strong> Should James Cook miss time, Davis immediately steps into a top-15 RB workload with 18+ touches per game in high-scoring offense.</li>
              <li><strong>Dynasty Hold:</strong> Under a affordable rookie contract through 2027, Davis offers stable multi-year floor in dynasty rosters.</li>
            </ul>
          </div>
          <p>
            Fans tracking game-by-game player news and complete kickoff schedules can find full coverage on <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026</Link>.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-cyan-500 pl-3">
            6. Ray Davis&apos;s Role in Joe Brady&apos;s Backfield
          </h2>
          <p>
            Ray Davis carved out a meaningful role in Buffalo&apos;s backfield by pairing downhill power with surprising receiving chops. In Joe Brady&apos;s offense, Davis is deployed on early downs and in pass-protection situations, where his blitz pickup and soft hands make him a trusted option on third downs.
          </p>
          <p>
            His vision between the tackles and willingness to finish through contact give the Bills a dependable grind-it-out option when the offense needs to shorten the game. Davis&apos; pass-catching also lets Buffalo keep him on the field in obvious throwing situations without tipping the play call.
          </p>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Rookie Tape That Forced His Way Into the Rotation
        </h2>
        <p>
          Ray Davis&apos; introduction to NFL football left no ambiguity about his ceiling. His full profile lives across the standard trio — the <a href="https://www.espn.com/nfl/player/_/id/4429501/ray-davis" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN player page</a>, his <a href="https://www.buffalobills.com/team/players-roster/ray-davis/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">official Bills roster listing</a>, and <a href="https://www.nfl.com/players/ray-davis-2/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com&apos;s statistics archive</a> — but the signature moment needs no stat table: a 152-scrimmage-yard demolition of the Jets that announced, mid-rookie-season, that Buffalo&apos;s fourth-round investment had already outgrown its developmental timeline.
        </p>
        <p>
          That game mattered beyond the box score. Fourth-round running backs are drafted as insurance; Davis played like an heir apparent, and every subsequent rotation decision in this backfield has been made with his emergence as the reference point.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
          The Skill Profile: Why It Translates
        </h2>
        <p>
          Davis&apos; college production translated because his game is built on transferable mechanics rather than scheme exploitation: compact frame with natural pad level, one-cut decisiveness in zone concepts, receiving hands that make him a legitimate checkdown weapon, and the contact-balance trait that separates rotational backs from feature backs. His kickoff-return usage — including the 45-yard return against New England documented on his team page — adds special-teams value that protects his roster seat regardless of offensive rotation decisions.
        </p>
        <p>
          In Buffalo&apos;s offense specifically, his between-tackles profile complements James Cook&apos;s perimeter explosiveness exactly the way coordinators draw it up when they want both styles available within a single drive.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          His 2026 Role in the Loaded Backfield
        </h2>
        <p>
          The full hierarchy — Cook ahead, Ty Johnson and Davis battling for second-chair snaps, Frank Gore Jr. and Ian Wheeler fighting for the final seats — is mapped in our <Link href="/bills-rb-depth-chart" className="text-blue-400 underline hover:text-blue-300">complete Bills running back depth chart</Link>. Davis&apos; path to expanded touches runs through short-yardage conversion rate and goal-line packages, where his power profile gives the coaching staff a different answer than Cook offers.
        </p>
        <p>
          Fantasy managers should note the touchdown equity: committee backs behind elite offenses inherit goal-line carries without needing volume, and Davis&apos; preseason usage suggests the staff trusts him in those moments. Track every opportunity on the <Link href="/" className="text-blue-400 underline hover:text-blue-300">Buffalo Bills Schedule 2026</Link> hub.
        </p>
      </section>

      {/* Section 7 */}
        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-orange-500 pl-3">
            7. How Davis Complements James Cook
          </h2>
          <p>
            Davis&apos; physicality is the perfect stylistic counterpoint to starter James Cook&apos;s explosiveness. While Cook attacks the perimeter with speed, Davis hammers between the tackles and finishes runs through contact. Together they give the Bills a thunder-and-lightning tandem that keeps defenses guessing.
          </p>
          <p>
            This split-back approach preserves Cook&apos;s legs deep into the 2026 campaign, limiting wear on the home-run threat while still imposing a physical front. When both are healthy, Buffalo&apos;s ground game becomes one of the most difficult to defend in the AFC East.
          </p>
        </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
          The Fantasy Market Mispricing Worth Exploiting
        </h2>
        <p>
          Committee running backs behind elite offenses are systematically undervalued in fantasy drafts, and Davis sits at the center of that inefficiency. Market pricing anchors to his role designation rather than his opportunity math: Buffalo&apos;s offense produces goal-line sequences at top-five rates, its game scripts frequently build fourth-quarter lead-closing carries, and his receiving profile adds a weekly floor independent of game plan.
        </p>
        <p>
          The historical template is consistent — backup backs in top-three offenses have outproduced backfield starters in mediocre offenses across multiple recent seasons. Davis&apos; per-touch efficiency already validates the talent; the draft-cost discount simply reflects role uncertainty that one training camp report can erase overnight.
        </p>
      </section>

      {/* FAQ Section */}
        {/* FAQ Section */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
            Frequently Asked Questions: Ray Davis & Bills Backfield
          </h2>
          <div className="space-y-4">
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">What number does Ray Davis wear for the Bills?</h3>
              <p className="text-sm text-zinc-300">
                Ray Davis wears jersey #22 for the Buffalo Bills.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">How many touchdowns has Ray Davis scored for Buffalo?</h3>
              <p className="text-sm text-zinc-300">
                Ray Davis has scored 9 total touchdowns (rushing and receiving) across his career with the Buffalo Bills.
              </p>
            </div>
            <div className="bg-black/40 p-5 rounded-xl border border-zinc-800 space-y-2">
              <h3 className="font-bold text-white text-base">Where can I see the full 2026 Buffalo Bills schedule and TV times?</h3>
              <p className="text-sm text-zinc-300">
                Head to the <Link href="/" className="text-blue-400 hover:underline">Buffalo Bills Schedule 2026 homepage</Link> for complete game listings, live stream details, and kickoff channels.
              </p>
            </div>
          </div>
        </section>
      </article>
            <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
