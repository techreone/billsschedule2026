import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "New York Giants Depth Chart 2026: Complete Offense & Defense",
  description: "Official 2026 New York Giants depth chart: comprehensive roster breakdown of starters, Jaxson Dart QB leadership, backfield options, defense, and special teams.",
  keywords: [
    "new york giants depth chart 2026",
    "giants 2026 roster depth chart",
    "new york giants starting offense 2026",
    "giants defense depth chart",
    "jaxson dart giants qb1",
    "cam skattebo tyrone tracy giants rb",
    "malik nabers giants wr1",
    "dexter lawrence giants defense"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/new-york-giants-depth-chart-2026`,
  },
};

export default function NewYorkGiantsDepthChart2026Page() {
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
        "name": "New York Giants Depth Chart 2026",
        "item": "https://billsschedule2026.online/new-york-giants-depth-chart-2026"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback on the New York Giants 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jaxson Dart is listed as the starting quarterback (QB1) on the official New York Giants 2026 depth chart, backed up by veteran Jameis Winston."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the starting running backs for the New York Giants in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rookie Cam Skattebo and second-year back Tyrone Tracy Jr. hold co-starter status on the running back depth chart, with Devin Singletary and Najee Harris providing deep veteran depth."
        }
      },
      {
        "@type": "Question",
        "name": "How is the New York Giants offensive line configured for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Giants offensive line is led by All-Pro left tackle Andrew Thomas, left guard Jon Runyan Jr., center John Michael Schmitz, right guard Jermaine Eluemunor, and right tackle Evan Neal."
        }
      },
      {
        "@type": "Question",
        "name": "Who anchors the New York Giants defense in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The defense is anchored by All-Pro interior defensive tackle Dexter Lawrence, pass-rushing edge duo Kayvon Thibodeaux and Brian Burns, and middle linebacker Bobby Okereke."
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
        <span className="text-white font-semibold">New York Giants Depth Chart 2026</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL ROSTER & POSITION DIRECTORY • NEW YORK GIANTS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          New York Giants Depth Chart 2026: Complete Offense & Defense
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Complete position-by-position breakdown of the 2026 New York Giants depth chart under Head Coach Brian Daboll. Analyze offensive starters, defensive rotation units, special teams specialists, and active practice squad reserves.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Verified 2026 Training Camp Roster
          </span>
          <span>•</span>
          <span>Last Updated: August 2026</span>
          <span>•</span>
          <span>By Giants Football Analytics Desk</span>
        </div>
      </header>

      {/* Adsterra Banner */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Content */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">
        
        {/* Showcase Image */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
          <Image 
            src="/images/giants/giants-depth-chart.webp" 
            alt="New York Giants 2026 Complete Depth Chart"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="new-york-giants-depth-chart-2026 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            New York Giants offense executing play-action passing drills during 2026 summer training camp at Quest Diagnostics Training Center.
          </div>
        </div>

        {/* Quick Summary Roster Box */}
        <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-blue-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🗽</span> 2026 New York Giants Starters Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-mono">
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-blue-400 block font-sans text-xs mb-1">OFFENSIVE STARTERS (QB / RB / WR / TE)</strong>
              <p>QB: <span className="text-white font-bold">Jaxson Dart</span> (Backup: Jameis Winston)</p>
              <p>RB: <span className="text-white font-bold">Cam Skattebo / Tyrone Tracy Jr.</span></p>
              <p>WR1: <span className="text-white font-bold">Malik Nabers</span></p>
              <p>WR2: <span className="text-white font-bold">Darius Slayton</span></p>
              <p>TE: <span className="text-white font-bold">Theo Johnson</span></p>
            </div>
            <div className="bg-black/60 p-3.5 rounded-lg border border-zinc-800">
              <strong className="text-yellow-400 block font-sans text-xs mb-1">DEFENSIVE & LINE STARTERS</strong>
              <p>LT / RT: <span className="text-white font-bold">Andrew Thomas / Evan Neal</span></p>
              <p>DT: <span className="text-white font-bold">Dexter Lawrence</span></p>
              <p>EDGE: <span className="text-white font-bold">Kayvon Thibodeaux / Brian Burns</span></p>
              <p>CB: <span className="text-white font-bold">Deonte Banks / Cor&apos;Dale Flott</span></p>
              <p>S: <span className="text-white font-bold">Tyler Nubin / Jason Pinnock</span></p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            1. New York Giants 2026 Offensive Depth Chart & Quarterback Room
          </h2>
          <p>
            The New York Giants enter the 2026 NFL season with an energetic new vision under Head Coach Brian Daboll. Commanding the starting signal-caller role at QB1 is rookie passer Jaxson Dart, who earned top billing on the depth chart following an impressive training camp performance. Dart features dynamic arm talent, quick mobility out of the pocket, and rapid pre-snap coverage diagnostics.
          </p>
          <p>
            Official roster analysis on <a href="https://www.nfl.com/teams/new-york-giants/roster" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com New York Giants Roster</a> details that veteran passer Jameis Winston occupies the QB2 backup spot, giving New York an experienced downfield passer as insurance. Brandon Allen and Jake Haener complete the quarterback depth chart as reserves.
          </p>
          <p>
            At wide receiver, sophomore sensation Malik Nabers anchors the depth chart as New York&apos;s clear WR1. Nabers&apos; explosive route running and catch-and-run ability make him a focal point of Daboll&apos;s offensive playcalling. Operating opposite Nabers, veteran Darius Slayton provides reliable deep-ball tracking at WR2, while Wan&apos;Dale Robinson handles slot receiver duties at WR3.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            2. Running Back Backfield Competition & Offensive Line Trench Unit
          </h2>
          <p>
            The Giants backfield presents one of the most competitive rotations in football. On the initial unofficial depth chart, rookie Cam Skattebo and second-year running back Tyrone Tracy Jr. share top billing with an &quot;OR&quot; co-starter designation. Skattebo provides physical, contact-seeking power between the tackles, while Tracy offers explosive lateral agility and soft receiver hands.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-blue-400">
                  <th className="py-2 px-3">Position</th>
                  <th className="py-2 px-3">Starter</th>
                  <th className="py-2 px-3">Second Tier</th>
                  <th className="py-2 px-3">Third Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Tackle (LT)</td>
                  <td className="py-2 px-3 text-blue-300">Andrew Thomas</td>
                  <td className="py-2 px-3">Joshua Ezeudu</td>
                  <td className="py-2 px-3">Marcus McKethan</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Left Guard (LG)</td>
                  <td className="py-2 px-3">Jon Runyan Jr.</td>
                  <td className="py-2 px-3">Aaron Stinnie</td>
                  <td className="py-2 px-3">Jake Kubas</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Center (C)</td>
                  <td className="py-2 px-3 text-blue-300">John Michael Schmitz</td>
                  <td className="py-2 px-3">Austin Schlottmann</td>
                  <td className="py-2 px-3">Jimmy Morrissey</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Guard (RG)</td>
                  <td className="py-2 px-3">Jermaine Eluemunor</td>
                  <td className="py-2 px-3">Greg Van Roten</td>
                  <td className="py-2 px-3">Jalen Mayfield</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-bold text-white">Right Tackle (RT)</td>
                  <td className="py-2 px-3 text-blue-300">Evan Neal</td>
                  <td className="py-2 px-3">Daniel Faalele</td>
                  <td className="py-2 px-3">Yodny Cajuste</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Veteran Devin Singletary and newly acquired Najee Harris add veteran depth at RB3 and RB4. Up front, All-Pro left tackle Andrew Thomas anchors an offensive line featuring center John Michael Schmitz and right tackle Evan Neal. Position notes on <a href="https://www.espn.com/nfl/team/depth/_/name/nyg/new-york-giants" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN New York Giants Roster Depth</a> highlight improved pass-blocking grades across interior line spots.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            3. Defensive Front Seven: Dexter Lawrence & Edge Rusher Tandem
          </h2>
          <p>
            The engine of New York&apos;s defense is interior defensive lineman Dexter Lawrence. Lawrence ranks among the premier nose tackles in the NFL, commanding double teams on run plays and generating interior pass pressure.
          </p>
          <p>
            Flanking Lawrence, edge rusher duo Kayvon Thibodeaux and Brian Burns form one of the league&apos;s most formidable pass-rushing pairs. At linebacker, veteran Bobby Okereke leads the defense in tackle production alongside Micah McFadden.
          </p>
          <p>
            Roster breakdowns on <a href="https://www.cbssports.com/nfl/teams/NYG/new-york-giants/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports Giants Depth Chart</a> note that New York&apos;s defensive front creates consistent disruption without requiring secondary blitz sacrifices.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            4. Secondary Defensive Backs & Special Teams Units
          </h2>
          <p>
            In the secondary, perimeter cornerback Deonte Banks leads the cornerback group as New York&apos;s primary shadow defender. Opposite Banks, Cor&apos;Dale Flott holds down the CB2 position, with Dru Phillips operating in the slot corner role.
          </p>
          <p>
            Safety play is anchored by sophomore safety Tyler Nubin alongside veteran Jason Pinnock. Special teams units feature veteran placekicker Graham Gano and punter Jamie Gillan controlling field position execution.
          </p>
        </section>

        {/* Section 5: FAQ */}
        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-cyan-500 pl-3">
            6. Jaxson Dart&apos;s Ascension to QB1
          </h2>
          <p>
            The Giants anointed Jaxson Dart as their starting quarterback for the 2026 campaign, betting on the young passer&apos;s arm talent and mobility to energize an offense that has cycled through signal-callers in recent years. Dart&apos;s blend of velocity and escapability fits coordinator Mike Kafka&apos;s vision of a vertical, play-action heavy attack built around Malik Nabers.
          </p>
          <p>
            Surrounding Dart with a capable run game and a true No. 1 receiver gives New York its clearest path to offensive competence in years. The franchise&apos;s 2026 ceiling hinges on Dart&apos;s growth curve and the protection in front of him against daunting NFC East pass rushers.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-wide border-l-4 border-orange-500 pl-3">
            7. Jameis Winston&apos;s Veteran Mentorship
          </h2>
          <p>
            Veteran Jameis Winston slots in as the primary backup, bringing a cannon arm and a wealth of starting experience to steady the room. Behind Winston, Brandon Allen and Jake Haener round out the depth chart, giving New York a credible relief option and a developmental project.
          </p>
          <p>
            Winston&apos;s fearless downfield mentality mirrors the aggressive identity New York wants on offense, while his experience ensures the offense will not collapse if Dart needs a series off. That veteran floor is precisely why the Giants prioritized him in the backup market.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            5. Frequently Asked Questions (FAQ) - New York Giants Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback on the New York Giants 2026 depth chart?
              </h3>
              <p className="text-zinc-300">
                Jaxson Dart is listed as the starting quarterback (QB1) on the official New York Giants 2026 depth chart, backed up by veteran Jameis Winston.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who are the starting running backs for the New York Giants in 2026?
              </h3>
              <p className="text-zinc-300">
                Rookie Cam Skattebo and second-year back Tyrone Tracy Jr. hold co-starter status on the running back depth chart, with Devin Singletary and Najee Harris providing deep veteran depth.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How is the New York Giants offensive line configured for 2026?
              </h3>
              <p className="text-zinc-300">
                The Giants offensive line is led by All-Pro left tackle Andrew Thomas, left guard Jon Runyan Jr., center John Michael Schmitz, right guard Jermaine Eluemunor, and right tackle Evan Neal.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who anchors the New York Giants defense in 2026?
              </h3>
              <p className="text-zinc-300">
                The defense is anchored by All-Pro interior defensive tackle Dexter Lawrence, pass-rushing edge duo Kayvon Thibodeaux and Brian Burns, and middle linebacker Bobby Okereke.
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
            <RelatedTrendPages slugs={['bills-kicker-depth-chart', 'bills-quarterback-depth-chart', 'bills-rb-depth-chart', 'bills-vs-browns-delay-weather', 'bills-vs-browns-live-stream']} />
</div>
  );
}
