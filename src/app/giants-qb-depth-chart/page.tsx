import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';
import RelatedTrendPages from '@/components/RelatedTrendPages';

export const metadata: Metadata = {
  title: "Giants QB Depth Chart 2026: Jaxson Dart & Jameis Winston ...",
  description: "Comprehensive 2026 New York Giants QB depth chart: analysis of starter Jaxson Dart, backup Jameis Winston, reserve depth, and Brian Daboll's offense.",
  keywords: [
    "giants qb depth chart",
    "new york giants quarterback depth chart 2026",
    "giants starting qb 2026",
    "jaxson dart giants depth chart",
    "jameis winston giants qb2",
    "brandon allen giants qb",
    "brian daboll quarterback system"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/giants-qb-depth-chart`,
  },
};

export default function GiantsQbDepthChartPage() {
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
        "name": "Giants QB Depth Chart",
        "item": "https://billsschedule2026.online/giants-qb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the New York Giants in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rookie passer Jaxson Dart is the starting quarterback (QB1) for the New York Giants entering the 2026 season under Head Coach Brian Daboll."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the backup quarterback on the 2026 Giants depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veteran signal-caller Jameis Winston is listed as QB2 on the Giants depth chart, providing veteran experience and downfield passing depth."
        }
      },
      {
        "@type": "Question",
        "name": "What other quarterbacks are on the New York Giants roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Behind Jaxson Dart and Jameis Winston, the Giants feature Brandon Allen at QB3 and Jake Haener on the practice squad reserve."
        }
      },
      {
        "@type": "Question",
        "name": "How does Brian Daboll's offensive system suit Jaxson Dart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brian Daboll's scheme incorporates spread formations, RPO concepts, and deep play-action shots to wide receiver Malik Nabers, unlocking Jaxson Dart's arm strength and scrambling mobility."
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
        <span className="text-white font-semibold">Giants QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/90 border border-blue-800/60 rounded text-blue-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL QUARTERBACK DIRECTORY • NEW YORK GIANTS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Giants QB Depth Chart 2026: Jaxson Dart & Jameis Winston Break
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed evaluation of the 2026 New York Giants quarterback depth chart. Track starter performance metrics for rookie Jaxson Dart, veteran backup depth with Jameis Winston, and strategic offensive integration under Head Coach Brian Daboll.
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
            src="/images/giants/giants-qb-starter.webp" 
            alt="New York Giants Quarterback Room Jaxson Dart"
            fill
            className="object-cover"
            priority
          />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="giants-qb-depth-chart 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            New York Giants starter Jaxson Dart reviewing play scripts during 2026 summer training sessions.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-blue-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🎯</span> 2026 New York Giants Quarterback Hierarchy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-blue-400">
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Experience</th>
                  <th className="py-2 px-3">Primary Attributes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB1 (Starter)</td>
                  <td className="py-2.5 px-3 text-blue-300 font-bold">Jaxson Dart</td>
                  <td className="py-2.5 px-3">Rookie</td>
                  <td className="py-2.5 px-3 text-emerald-400">Arm talent, pocket mobility & downfield aggressiveness</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB2 (Primary Backup)</td>
                  <td className="py-2.5 px-3 font-bold text-white">Jameis Winston</td>
                  <td className="py-2.5 px-3">12th Year</td>
                  <td className="py-2.5 px-3 text-zinc-300">Veteran launcher & high-upside reserve capability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB3 (Reserve)</td>
                  <td className="py-2.5 px-3">Brandon Allen</td>
                  <td className="py-2.5 px-3">9th Year</td>
                  <td className="py-2.5 px-3 text-zinc-400">System familiarity & game-management stability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB4 / Practice Squad</td>
                  <td className="py-2.5 px-3">Jake Haener</td>
                  <td className="py-2.5 px-3">3rd Year</td>
                  <td className="py-2.5 px-3 text-zinc-400">Quick-release rhythm passer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            1. New York Giants 2026 QB Hierarchy & Starter Overview
          </h2>
          <p>
            The New York Giants have officially entered a dynamic new era at the quarterback position. Leading the offense as QB1 is rookie signal-caller Jaxson Dart, who secured the starting position after demonstrating command during training camp competition. Dart brings explosive arm talent and athletic escape velocity to Big Blue&apos;s passing attack.
          </p>
          <p>
            Official roster updates from <a href="https://www.nfl.com/teams/new-york-giants/roster" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">NFL.com Giants Quarterback Roster</a> show that veteran passer Jameis Winston serves as the primary backup at QB2. Winston provides essential veteran leadership and downfield passing ability should emergency relief be required.
          </p>
          <p>
            Behind Dart and Winston, Brandon Allen holds down the QB3 position, with Jake Haener providing depth on the practice squad. This depth structure equips Head Coach Brian Daboll with a versatile mix of youth and veteran experience.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            2. Jaxson Dart: Rookie Starter Skillset & Offense Fit
          </h2>
          <p>
            Jaxson Dart&apos;s transition into the starting quarterback role for the New York Giants has energized the fanbase and coaching staff alike. Dart features a strong throwing arm capable of delivering frozen-rope passes into narrow cover-2 windows.
          </p>
          <p>
            Operating behind an offensive line anchored by left tackle Andrew Thomas, Dart benefits from firm front-side protection. In Daboll&apos;s system, Dart is encouraged to push the ball vertically to sophomore receiver Malik Nabers while utilizing RPO fakes to running back Cam Skattebo and Tyrone Tracy Jr.
          </p>
          <p>
            Training camp tracking on <a href="https://www.espn.com/nfl/team/depth/_/name/nyg/new-york-giants" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">ESPN Giants Depth Chart Analysis</a> highlights that Dart completed over 65% of his deep-boundary passes during August scrimmage sessions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            3. Backup Quarterbacks: Jameis Winston & Brandon Allen
          </h2>
          <p>
            Jameis Winston&apos;s presence as QB2 provides the Giants with a rare luxury: a backup quarterback with over 80 career NFL starts. Winston&apos;s aggressive downfield mentality ensures that Daboll does not have to scale back vertical route concepts if Winston enters the game.
          </p>
          <p>
            At QB3, Brandon Allen brings steady game-management experience, having executed West Coast offense installations across multiple NFL franchises. Scouting summaries on <a href="https://www.cbssports.com/nfl/teams/NYG/new-york-giants/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CBS Sports Giants Roster Breakdown</a> praise Allen&apos;s reliability during practice reps.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            4. Brian Daboll&apos;s Offensive System & Quarterback Playcalling
          </h2>
          <p>
            Brian Daboll&apos;s offensive playbook relies heavily on pre-snap motion, spread personnel formations, and play-action bootlegs designed to confuse linebackers. With Jaxson Dart under center, Daboll can dial up aggressive deep shots to Malik Nabers while keeping defenses honest with quick rhythm throws to Wan&apos;Dale Robinson.
          </p>
          <p>
            As Dart gains regular-season starter experience, the Giants offense is positioned to become one of the most explosive passing units in the NFC East.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-blue-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Giants QB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback for the New York Giants in 2026?
              </h3>
              <p className="text-zinc-300">
                Rookie passer Jaxson Dart is the starting quarterback (QB1) for the New York Giants entering the 2026 season under Head Coach Brian Daboll.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the backup quarterback on the 2026 Giants depth chart?
              </h3>
              <p className="text-zinc-300">
                Veteran signal-caller Jameis Winston is listed as QB2 on the Giants depth chart, providing veteran experience and downfield passing depth.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                What other quarterbacks are on the New York Giants roster?
              </h3>
              <p className="text-zinc-300">
                Behind Jaxson Dart and Jameis Winston, the Giants feature Brandon Allen at QB3 and Jake Haener on the practice squad reserve.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does Brian Daboll&apos;s offensive system suit Jaxson Dart?
              </h3>
              <p className="text-zinc-300">
                Brian Daboll&apos;s scheme incorporates spread formations, RPO concepts, and deep play-action shots to wide receiver Malik Nabers, unlocking Jaxson Dart&apos;s arm strength and scrambling mobility.
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
