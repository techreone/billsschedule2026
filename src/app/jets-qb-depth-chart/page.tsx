import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Jets QB Depth Chart 2026: Starter Geno Smith & Rookie Bac...",
  description: "Comprehensive 2026 New York Jets QB depth chart: complete breakdown of starter Geno Smith, rookie passers Cade Klubnik and Brady Cook, and offensive strategy.",
  keywords: [
    "jets qb depth chart",
    "new york jets quarterback depth chart 2026",
    "jets starting qb 2026",
    "geno smith jets qb1",
    "cade klubnik jets depth",
    "brady cook jets qb",
    "jets quarterback room 2026"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/jets-qb-depth-chart`,
  },
};

export default function JetsQbDepthChartPage() {
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
        "name": "Jets QB Depth Chart",
        "item": "https://billsschedule2026.online/jets-qb-depth-chart"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the starting quarterback for the New York Jets in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geno Smith enters the 2026 season as the starting quarterback (QB1) for the New York Jets."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the primary backup quarterback on the Jets 2026 depth chart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rookie passer Cade Klubnik holds the QB2 spot on the depth chart after earning praise during training camp practices."
        }
      },
      {
        "@type": "Question",
        "name": "What developmental quarterbacks are on the New York Jets roster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Behind Geno Smith and Cade Klubnik, the Jets feature rookie Brady Cook at QB3 alongside reserve practice squad options."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Jets offensive scheme support Geno Smith?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Jets offense utilizes quick rhythm passing, heavy play-action off Breece Hall's running threat, and spread formations to maximize Geno Smith's pocket accuracy."
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
        <span className="text-white font-semibold">Jets QB Depth Chart</span>
      </nav>

      {/* Header Banner */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/90 border border-emerald-800/60 rounded text-emerald-400 text-xs font-headline font-bold uppercase tracking-wider">
          2026 NFL QUARTERBACK DIRECTORY • NEW YORK JETS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Jets QB Depth Chart 2026: Starter Geno Smith & Rookie Backups
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Detailed evaluation of the 2026 New York Jets quarterback depth chart. Track starter performance metrics for Geno Smith, rookie development for Cade Klubnik, and practice squad reserve competition.
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
            src="/images/jets/jets-qb-starter.webp" 
            alt="New York Jets Quarterback Room Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-xs font-mono text-zinc-300">
            New York Jets quarterbacks taking reps during 2026 training camp drills.
          </div>
        </div>

        {/* Quick Reference Summary Box */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 p-5 rounded-xl border border-emerald-800/40 space-y-3">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base flex items-center gap-2">
            <span>🎯</span> 2026 New York Jets Quarterback Hierarchy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-emerald-400">
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Player</th>
                  <th className="py-2 px-3">Experience</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB1 (Starter)</td>
                  <td className="py-2.5 px-3 text-emerald-300 font-bold">Geno Smith</td>
                  <td className="py-2.5 px-3">14th Year</td>
                  <td className="py-2.5 px-3 text-emerald-400">Confirmed Week 1 Starter</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB2 (Primary Backup)</td>
                  <td className="py-2.5 px-3 font-bold text-white">Cade Klubnik</td>
                  <td className="py-2.5 px-3">Rookie</td>
                  <td className="py-2.5 px-3 text-zinc-300">High-Upside Backup</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-white">QB3 (Reserve)</td>
                  <td className="py-2.5 px-3">Brady Cook</td>
                  <td className="py-2.5 px-3">Rookie</td>
                  <td className="py-2.5 px-3 text-zinc-400">Developmental Roster Slot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            1. New York Jets 2026 QB Depth Chart & Starter Hierarchy
          </h2>
          <p>
            The New York Jets enter the 2026 season with veteran signal-caller Geno Smith commanding the starting quarterback position at QB1. Smith&apos;s return to New York represents a compelling veteran homecoming, bringing deep-ball poise and proven starter production to an offense overflowing with elite skill-position talent.
          </p>
          <p>
            Official training camp summaries published on <a href="https://www.newyorkjets.com/news/2026-jets-unofficial-depth-chart" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">New York Jets Quarterback Reports</a> indicate that Smith quickly established chemistry with star wide receiver Garrett Wilson and tight end Tyler Conklin during early summer installs.
          </p>
          <p>
            Behind Smith, the Jets invested in young developmental passers by selecting Cade Klubnik and Brady Cook. This strategic shift ensures that New York has both veteran stability at the top and long-term upside waiting in reserve.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            2. Geno Smith: Starter Analysis & Scheme Execution
          </h2>
          <p>
            Geno Smith&apos;s skillset fits seamlessly into New York&apos;s West Coast offensive framework. Smith excels at operating on-rhythm, delivering quick passes into tight boundary windows while limiting turnover-worthy plays under pressure.
          </p>
          <p>
            Playing behind a revamped offensive line led by left tackle Olu Fashanu and guard Alijah Vera-Tucker, Smith will enjoy better pocket protection than in previous seasons. Clean pockets allow Smith to take advantage of single-coverage opportunities for Garrett Wilson down field.
          </p>
          <p>
            Analytics on <a href="https://www.espn.com/nfl/team/depth/_/name/nyj/new-york-jets" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">ESPN Jets Depth Chart Breakdown</a> show that Smith completed over 68% of his intermediate passes when executing play-action fakes to running back Breece Hall.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            3. Rookie Backups: Cade Klubnik & Brady Cook
          </h2>
          <p>
            Rookie passer Cade Klubnik holds the primary backup QB2 position on the Jets depth chart. Klubnik features excellent mobility outside the pocket and a quick release, making him a natural fit for bootleg and sprint-out passing designs during preseason games.
          </p>
          <p>
            Rookie Brady Cook occupies the QB3 slot. Cook demonstrated strong pocket presence during collegiate competition and is being groomed as a long-term developmental reserve. Scouting write-ups on <a href="https://www.cbssports.com/nfl/teams/nyj/new-york-jets/depth-chart/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">CBS Sports Jets QB Evaluation</a> highlight Cook&apos;s arm strength on out-routes.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            4. Tactical Playcalling & Offensive Integration
          </h2>
          <p>
            New York&apos;s offensive playcalling emphasizes keeping defenses off balance through run-pass option (RPO) looks and pre-snap shift motion. With Breece Hall forcing safeties into the box, Geno Smith can leverage isolated coverage matchups on the perimeter.
          </p>
          <p>
            Should weather or game state dictate a physical approach, Smith&apos;s command of pre-snap audible checks allows the Jets to check into heavy-personnel run plays seamlessly.
          </p>
        </section>

        {/* Section 5: FAQ */}
        <section className="space-y-4 pt-4 border-t border-zinc-800">
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight border-l-4 border-emerald-500 pl-3">
            5. Frequently Asked Questions (FAQ) - Jets QB Depth Chart
          </h2>
          
          <div className="space-y-4 text-xs md:text-sm">
            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the starting quarterback for the New York Jets in 2026?
              </h3>
              <p className="text-zinc-300">
                Geno Smith enters the 2026 season as the starting quarterback (QB1) for the New York Jets.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                Who is the primary backup quarterback on the Jets 2026 depth chart?
              </h3>
              <p className="text-zinc-300">
                Rookie passer Cade Klubnik holds the QB2 spot on the depth chart after earning praise during training camp practices.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                What developmental quarterbacks are on the New York Jets roster?
              </h3>
              <p className="text-zinc-300">
                Behind Geno Smith and Cade Klubnik, the Jets feature rookie Brady Cook at QB3 alongside reserve practice squad options.
              </p>
            </div>

            <div className="bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/80">
              <h3 className="font-bold text-white text-sm mb-1">
                How does the Jets offensive scheme support Geno Smith?
              </h3>
              <p className="text-zinc-300">
                The Jets offense utilizes quick rhythm passing, heavy play-action off Breece Hall&apos;s running threat, and spread formations to maximize Geno Smith&apos;s pocket accuracy.
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
    </div>
  );
}
