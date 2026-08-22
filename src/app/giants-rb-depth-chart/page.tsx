import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Giants RB Depth Chart 2026: Skattebo & Tracy",
  description: "Comprehensive 2026 New York Giants RB depth chart: analysis of co-starters Cam Skattebo and Tyrone Tracy Jr., Devin Singletary, Najee Harris, and backfield tactics.",
  keywords: [
    "giants rb depth chart",
    "new york giants running back depth chart 2026",
    "giants starting rb 2026",
    "cam skattebo giants depth chart",
    "tyrone tracy jr giants rb",
    "devin singletary giants rb",
    "najee harris giants running back"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/giants-rb-depth-chart`,
  },
};

export default function GiantsRbDepthChartPage() {
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
        "name": "Giants RB Depth Chart",
        "item": "https://billsschedule2026.online/giants-rb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting running back for the New York Giants in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The New York Giants list rookie Cam Skattebo and second-year back Tyrone Tracy Jr. as co-starters with an 'OR' designation on their 2026 depth chart."
        }
      },
      {
        "@type": "Question",
        "name": "What role does Devin Singletary play in the Giants 2026 backfield?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran Devin Singletary serves as RB3 on the depth chart, providing key pass-protection and third-down reliability."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Najee Harris fit on the Giants running back depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran Najee Harris joined the Giants to provide short-yardage and goal-line punch alongside Eric Gray and Dante Miller."
        }
      },
      {
        "@type": "Question",
        "name": "How does Brian Daboll utilize multiple running backs in his offense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brian Daboll rotates running backs based on tactical matchups, combining Cam Skattebo's interior power with Tyrone Tracy Jr.'s perimeter pass-catching skill."
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
        <span className="text-white font-semibold">Giants RB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL POSITION DIRECTORY • NEW YORK GIANTS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Giants RB Depth Chart 2026: Cam Skattebo & Tracy
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete analysis of the 2026 New York Giants running back depth chart. Examine the co-starter battle between Cam Skattebo and Tyrone Tracy Jr., veteran depth from Devin Singletary and Najee Harris, and backfield playcalling under Head Coach Brian Daboll.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified RB Roster Hierarchy
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By NFL Running Back Analytics Desk</span>
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
            src="/images/giants/giants-rb-starter.webp" 
            alt="New York Giants Running Back Depth Chart"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            New York Giants running back room executing handoff drills during 2026 summer training camp.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-blue-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🏃</span> 2026 New York Giants Running Back Depth Chart
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-blue-400">
                  <th className="py-2 px-3">Position</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Role Type</th>
                  <th className="py-2 px-3">Key Strengths</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">RB1 (Co-Starter)</td>
                  <td className="py-2.5 px-3 text-blue-300 font-bold">Cam Skattebo OR Tyrone Tracy Jr.</td>
                  <td className="py-2.5 px-3">Power / Speed Tandem</td>
                  <td className="py-2.5 px-3 text-emerald-400">Contact balance, vision & receiving versatility</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">RB3</td>
                  <td className="py-2.5 px-3 font-bold text-white">Devin Singletary</td>
                  <td className="py-2.5 px-3">Veteran Third-Down Back</td>
                  <td className="py-2.5 px-3 text-zinc-300">Pass blocking, zone patience & ball security</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">RB4</td>
                  <td className="py-2.5 px-3">Najee Harris</td>
                  <td className="py-2.5 px-3">Short-Yardage Specialist</td>
                  <td className="py-2.5 px-3 text-zinc-400">Goal-line power & interior pile-pushing</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">RB5 / Reserves</td>
                  <td className="py-2.5 px-3">Eric Gray / Dante Miller</td>
                  <td className="py-2.5 px-3">Change-of-Pace Reserves</td>
                  <td className="py-2.5 px-3 text-zinc-400">Special teams coverage & pass-catching depth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            1. New York Giants 2026 RB Depth Chart & Co-Starter Hierarchy
          </h2>
          <p>
            The New York Giants enter the 2026 regular season with one of the most versatile backfield rotations in the NFL. Head Coach Brian Daboll released an initial unofficial depth chart that listed rookie Cam Skattebo and second-year running back Tyrone Tracy Jr. as co-starters with an explicit &quot;OR&quot; designation at the RB1 position.
          </p>
          <p>
            Official depth chart announcements on <a href="https://www.nfl.com/teams/new-york-giants/roster" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com New York Giants Roster</a> emphasize that this co-starter setup reflects a complementary two-headed backfield rather than an uncertain depth struggle. Skattebo provides physical, contact-demanding interior running, while Tracy offers explosive lateral agility and soft hands out of the backfield.
          </p>
          <p>
            Behind the starting duo, veteran Devin Singletary holds down the RB3 position, with newly acquired veteran Najee Harris providing short-yardage muscle at RB4. Eric Gray and Dante Miller round out the backfield as reserve dynamic runners.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            2. Cam Skattebo vs. Tyrone Tracy Jr.: Skillset Comparison & Backfield Roles
          </h2>
          <p>
            Evaluating the strengths of Cam Skattebo and Tyrone Tracy Jr. illustrates why Brian Daboll plans to employ a rotation system throughout the regular season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700 space-y-2">
              <h3 className="font-headline font-bold text-blue-400 text-base">Cam Skattebo (Downhill Power)</h3>
              <ul className="text-xs md:text-sm space-y-1.5 list-disc pl-4 text-zinc-300">
                <li>Exceptional contact balance through first-defender tackles.</li>
                <li>Relentless leg drive in short-yardage and goal-line packages.</li>
                <li>Disciplined patience setting up interior zone blocks.</li>
                <li>Fierce pass-blocking effort against blitzing linebackers.</li>
              </ul>
            </div>
            <div className="bg-zinc-800/80 p-5 rounded-xl border border-zinc-700 space-y-2">
              <h3 className="font-headline font-bold text-blue-400 text-base">Tyrone Tracy Jr. (Explosive Playmaker)</h3>
              <ul className="text-xs md:text-sm space-y-1.5 list-disc pl-4 text-zinc-300">
                <li>Elite lateral agility and jump-cut quickness.</li>
                <li>Former wide receiver route-running skills out of the backfield.</li>
                <li>Home-run acceleration when reaching open perimeter grass.</li>
                <li>High efficiency on pass-catching screen concepts.</li>
              </ul>
            </div>
          </div>

          <p>
            Scouting analysis published on <a href="https://www.espn.com/nfl/team/depth/_/name/nyg/new-york-giants" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN Giants Running Back Depth</a> indicates that Tracy averaged over 4.8 yards per carry on perimeter stretch plays during training camp, while Skattebo converted over 85% of third-and-1 rushing attempts into first downs.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            3. Veteran Reserves: Devin Singletary & Najee Harris
          </h2>
          <p>
            In addition to their young co-starters, the Giants boast rare veteran depth with Devin Singletary and Najee Harris. Singletary brings extensive starter experience, excellent vision in gap schemes, and consistent pass-protection capability that reassures rookie QB Jaxson Dart.
          </p>
          <p>
            Najee Harris provides heavy short-yardage insurance. Harris&apos;s physical running style complements Skattebo in goal-line packages, giving New York two punishing options when grinding out late fourth-quarter leads.
          </p>
          <p>
            Roster breakdowns on <a href="https://www.cbssports.com/nfl/teams/NYG/new-york-giants/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports Giants Running Back Roster</a> highlight how this multi-tiered depth protects the offense against injury attrition during a 17-game regular season schedule.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            4. Brian Daboll&apos;s Backfield Scheme & Offensive Integration
          </h2>
          <p>
            Head Coach Brian Daboll&apos;s offensive playcalling emphasizes keeping opposing defensive coordinators off-balance by varying personnel packages. By deploying Skattebo and Tracy in dual-back formations, the Giants force linebackers into difficult coverage mismatches.
          </p>
          <p>
            Operating behind an offensive line led by left tackle Andrew Thomas, the running back unit will benefit from improved perimeter seal-blocking. This combination of strong line play and backfield versatility equips New York to execute both physical inside power and explosive outside sweep plays.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Giants RB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting running back for the New York Giants in 2026?
              </h3>
              <p className="text-zinc-300">
                The New York Giants list rookie Cam Skattebo and second-year back Tyrone Tracy Jr. as co-starters with an &quot;OR&quot; designation on their 2026 depth chart.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                What role does Devin Singletary play in the Giants 2026 backfield?
              </h3>
              <p className="text-zinc-300">
                Veteran Devin Singletary serves as RB3 on the depth chart, providing key pass-protection and third-down reliability.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Where does Najee Harris fit on the Giants running back depth chart?
              </h3>
              <p className="text-zinc-300">
                Veteran Najee Harris joined the Giants to provide short-yardage and goal-line punch alongside Eric Gray and Dante Miller.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does Brian Daboll utilize multiple running backs in his offense?
              </h3>
              <p className="text-zinc-300">
                Brian Daboll rotates running backs based on tactical matchups, combining Cam Skattebo&apos;s interior power with Tyrone Tracy Jr.&apos;s perimeter pass-catching skill.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-blue-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Official NFL Roster Data • New York Giants Coverage</span>
        </div>

      </article>
    </div>
  );
}
