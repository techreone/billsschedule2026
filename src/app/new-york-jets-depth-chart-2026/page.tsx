import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "New York Jets Depth Chart 2026: Complete Offense & Defense",
  description: "Official 2026 New York Jets depth chart: comprehensive roster analysis covering starters, QB room hierarchy, Breece Hall backfield, defense, and special teams.",
  keywords: [
    "new york jets depth chart 2026",
    "jets 2026 roster depth chart",
    "new york jets starting offense 2026",
    "jets defense depth chart",
    "geno smith jets qb1",
    "breece hall jets depth chart",
    "garrett wilson jets wr1",
    "sauce gardner jets defense"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/new-york-jets-depth-chart-2026`,
  },
};

export default function NewYorkJetsDepthChart2026Page() {
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
        "name": "New York Jets Depth Chart 2026",
        "item": "https://billsschedule2026.online/new-york-jets-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the New York Jets 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geno Smith is listed as QB1 on the official New York Jets 2026 depth chart, backed up by rookie passers Cade Klubnik and Brady Cook."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads the New York Jets backfield on the 2026 running back depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Star running back Breece Hall anchors the Jets backfield as RB1, supported by power runner Braelon Allen at RB2 and Isaiah Davis at RB3."
        }
      },
      {
        "@type": "Question",
        "name": "How is the New York Jets offensive line structured for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The offensive line features tackle Olu Fashanu, guards Alijah Vera-Tucker and John Simpson, center Joe Tippmann, and veteran tackle Morgan Moses."
        }
      },
      {
        "@type": "Question",
        "name": "What are the core strength areas of the New York Jets defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Jets defense is led by interior defensive tackle Quinnen Williams, edge rusher Will McDonald IV, linebacker C.J. Mosley, All-Pro cornerback Sauce Gardner, and safety Minkah Fitzpatrick."
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
        <span className="text-white font-semibold">New York Jets Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/90 border border-emerald-800/60 rounded text-emerald-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL ROSTER & POSITION DIRECTORY • NEW YORK JETS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          New York Jets Depth Chart 2026: Complete Offense & Defense
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Comprehensive analysis of the 2026 New York Jets roster and position hierarchy. Explore offensive starter breakdowns, defensive rotations, special teams specialists, and practice squad reserves.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified 2026 Training Camp Roster
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By Jets Football Analytics Desk</span>
        </div>
      </header>

      {/* Adsterra Banner */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Article Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/jets/jets-depth-chart.webp" 
            alt="New York Jets 2026 Roster and Depth Chart"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="new-york-jets-depth-chart-2026 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            New York Jets players conducting team drills during 2026 summer practice sessions at Atlantic Health Jet Center.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-emerald-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>✈️</span> 2026 New York Jets Depth Chart Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-emerald-400 block font-sans text-xs mb-1">OFFENSIVE STARTERS (QB / RB / WR / TE)</strong>
              <p>QB: <span className="text-white font-bold">Geno Smith</span> (Backups: Cade Klubnik, Brady Cook)</p>
              <p>RB: <span className="text-white font-bold">Breece Hall</span> (Backup: Braelon Allen)</p>
              <p>WR1: <span className="text-white font-bold">Garrett Wilson</span></p>
              <p>WR2: <span className="text-white font-bold">Malachi Corley</span></p>
              <p>TE: <span className="text-white font-bold">Tyler Conklin</span></p>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-yellow-400 block font-sans text-xs mb-1">DEFENSIVE & LINE STARTERS</strong>
              <p>LT / RT: <span className="text-white font-bold">Olu Fashanu / Morgan Moses</span></p>
              <p>DT: <span className="text-white font-bold">Quinnen Williams</span></p>
              <p>EDGE: <span className="text-white font-bold">Will McDonald IV</span></p>
              <p>CB: <span className="text-white font-bold">Sauce Gardner / D.J. Reed</span></p>
              <p>S: <span className="text-white font-bold">Minkah Fitzpatrick / Andre Cisco</span></p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            1. New York Jets 2026 Offensive Depth Chart & Quarterback Room
          </h2>
          <p>
            The New York Jets enter the 2026 NFL campaign with a modernized offensive hierarchy designed to establish consistency across all four quarters. At quarterback, veteran signal-caller Geno Smith assumes starting duties at QB1. Smith brings extensive starter experience, sharp pre-snap read execution, and accuracy on intermediate field throws.
          </p>
          <p>
            Official roster releases on <a href="https://www.newyorkjets.com/news/2026-jets-unofficial-depth-chart" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">New York Jets Official Depth Chart Release</a> highlight an intriguing backup quarterback room featuring rookies Cade Klubnik and Brady Cook. Both young passers received significant reps in training camp, providing developmental depth behind Smith.
          </p>
          <p>
            At wide receiver, Garrett Wilson leads the depth chart as New York&apos;s clear WR1. Wilson&apos;s elite route running and run-after-catch agility make him the primary target on third-down conversions. Operating alongside Wilson, sophomore receiver Malachi Corley and rookie Isaiah Williams provide explosive dynamic options in screen-passing and slot packages.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            2. Running Back Backfield & Offensive Line Trench Unit
          </h2>
          <p>
            The engine of New York&apos;s offensive scheme is star running back Breece Hall. Hall possesses home-run speed, patience behind blocking structures, and high-level receiving skills out of the backfield. Backing up Hall is second-year power back Braelon Allen, who offers physical goal-line finishing and pass-protection capability.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-emerald-400">
                  <th className="py-2 px-3">Position</th>
                  <th className="py-2 px-3">Starter</th>
                  <th className="py-2 px-3">Second Tier</th>
                  <th className="py-2 px-3">Third Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Tackle (LT)</td>
                  <td className="py-2 px-3 text-emerald-300">Olu Fashanu</td>
                  <td className="py-2 px-3">Carter Warren</td>
                  <td className="py-2 px-3">Obinna Eze</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Guard (LG)</td>
                  <td className="py-2 px-3">John Simpson</td>
                  <td className="py-2 px-3">Xavier Newman</td>
                  <td className="py-2 px-3">Jake Hanson</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Center (C)</td>
                  <td className="py-2 px-3 text-emerald-300">Joe Tippmann</td>
                  <td className="py-2 px-3">Wes Schweitzer</td>
                  <td className="py-2 px-3">Chris Glaser</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Guard (RG)</td>
                  <td className="py-2 px-3">Alijah Vera-Tucker</td>
                  <td className="py-2 px-3">Kohl Levao</td>
                  <td className="py-2 px-3">Vitaliy Gurman</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Tackle (RT)</td>
                  <td className="py-2 px-3 text-emerald-300">Morgan Moses</td>
                  <td className="py-2 px-3">Max Mitchell</td>
                  <td className="py-2 px-3">Austin Deculus</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Up front, the offensive line features high-upside left tackle Olu Fashanu partnered with anchor guards Alijah Vera-Tucker and John Simpson. Center Joe Tippmann handles pre-snap line calls. Roster tracking on <a href="https://www.espn.com/nfl/team/depth/_/name/nyj/new-york-jets" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">ESPN New York Jets Roster Depth</a> notes that this line configuration provides improved pass-blocking metrics compared to prior seasons.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            3. Defensive Front Seven: Quinnen Williams & Edge Rusher Rotation
          </h2>
          <p>
            Defensively, the Jets maintain one of the NFL&apos;s most disruptive front seven units. Interior defensive tackle Quinnen Williams commands double-teams on virtually every snap, freeing up linebackers to shoot gaps cleanly.
          </p>
          <p>
            On the perimeter, third-year pass rusher Will McDonald IV steps into a prominent starting role, showcasing elite bend around the edge. At linebacker, veteran leader C.J. Mosley directs the defense alongside athletic weakside linebacker Quincy Williams.
          </p>
          <p>
            Player evaluations published on <a href="https://www.cbssports.com/nfl/teams/nyj/new-york-jets/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">CBS Sports Jets Depth Chart</a> indicate that New York&apos;s defensive line rotation creates sustained pressure without relying on blitzing extra defenders.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            4. Secondary Defensive Backs & Special Teams Breakdown
          </h2>
          <p>
            The Jets secondary is anchored by All-Pro cornerback Sauce Gardner, who shuts down opposing team&apos;s primary receivers in single-coverage. Operating opposite Gardner, veteran cornerback D.J. Reed provides disciplined perimeter technique, forming one of the top cornerback pairings in the league.
          </p>
          <p>
            At safety, Minkah Fitzpatrick brings instinctual ball-hawking skills alongside range defender Andre Cisco. This deep safety tandem allows New York to play aggressive press-man coverage underneath with minimal risk of giving up vertical shot plays.
          </p>
          <p>
            Special teams units feature reliable placekicker field goal execution and punt placement specialist Thomas Morstead handling punting responsibilities.
          </p>
        </section>

        {/* Section 5: FAQ */}
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-cyan-500 pl-3">
            6. Geno Smith&apos;s Second Act in New York
          </h2>
          <p>
            Geno Smith takes over as the Jets&apos; starting quarterback for 2026, returning to the market where his career resurrected years earlier. Smith&apos;s accuracy, quick processing, and willingness to push the ball downfield make him a logical fit for an offense built around Garrett Wilson and Breece Hall. The Jets are banking on Smith&apos;s steadiness to end a prolonged playoff drought.
          </p>
          <p>
            After revitalizing his trajectory with efficient, low-turnover play elsewhere, Smith brings the sort of veteran command New York&apos;s young skill players can grow alongside. His presnap communication sets the tone for an offense that wants to control the clock and lean on its playmakers.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-orange-500 pl-3">
            7. Developing the QB Room Behind Him
          </h2>
          <p>
            Behind Smith, rookie Cade Klubnik and Brady Cook represent the developmental pipeline the Jets are cultivating. Klubnik, a high-upside rookie, offers traits worth grooming, while Cook provides a steady camp arm. The organization&apos;s plan is clear: let Smith stabilize the present while the staff shapes the future of the position through the practice squad and preseason reps.
          </p>
          <p>
            This structure lets New York compete now without mortgaging the long-term quarterback plan. If Klubnik develops, the Jets could possess both a reliable present and an intriguing future at the sport&apos;s most important position.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            5. Frequently Asked Questions (FAQ) - New York Jets Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback on the New York Jets 2026 depth chart?
              </h3>
              <p className="text-zinc-300">
                Geno Smith is listed as QB1 on the official New York Jets 2026 depth chart, backed up by rookie passers Cade Klubnik and Brady Cook.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who leads the New York Jets backfield on the 2026 running back depth chart?
              </h3>
              <p className="text-zinc-300">
                Star running back Breece Hall anchors the Jets backfield as RB1, supported by power runner Braelon Allen at RB2 and Isaiah Davis at RB3.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How is the New York Jets offensive line structured for 2026?
              </h3>
              <p className="text-zinc-300">
                The offensive line features tackle Olu Fashanu, guards Alijah Vera-Tucker and John Simpson, center Joe Tippmann, and veteran tackle Morgan Moses.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                What are the core strength areas of the New York Jets defense in 2026?
              </h3>
              <p className="text-zinc-300">
                The Jets defense is led by interior defensive tackle Quinnen Williams, edge rusher Will McDonald IV, linebacker C.J. Mosley, All-Pro cornerback Sauce Gardner, and safety Minkah Fitzpatrick.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Navigation Link */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <Link href="/" className="text-emerald-400 hover:underline flex items-center gap-1">
            ← Return to Buffalo Bills Schedule 2026 Home
          </Link>
          <span className="text-zinc-500">Official NFL Roster Data • New York Jets Coverage</span>
        </div>

      </article>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/jets/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/nyj/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
        <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
