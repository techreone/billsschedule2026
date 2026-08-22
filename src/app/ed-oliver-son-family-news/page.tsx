import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, NativeBanner } from '@/components/ads/Adsterra';
import { SITE_CONFIG } from '@/data/scheduleData';

export const metadata: Metadata = {
  title: "Ed Oliver Son News: Bills DT Mourns Loss & Updates",
  description: "Ed Oliver son news 2026: Buffalo Bills defensive tackle Ed Oliver mourns the loss of his 2-year-old son. Read official team statements, teammate support & news.",
  keywords: [
    "ed oliver son news",
    "buffalo bills ed oliver son death",
    "ed oliver family statement bills",
    "brandon beane statement ed oliver",
    "ed oliver son tragedy houston",
    "bills mafia ed oliver support"
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ed-oliver-son-family-news`,
  },
  openGraph: {
    title: "Ed Oliver Son News 2026: Buffalo Bills DT Mourns Loss & U...",
    description: "Official team statement and outpouring of support for Buffalo Bills defensive tackle Ed Oliver following the loss of his son.",
    url: `${SITE_CONFIG.url}/ed-oliver-son-family-news`,
    siteName: SITE_CONFIG.name,
    type: "article",
  },
};

export default function EdOliverSonNewsPage() {
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
        "name": "Ed Oliver Son News",
        "item": "https://billsschedule2026.online/ed-oliver-son-family-news"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official Buffalo Bills statement regarding Ed Oliver's son?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "General Manager Brandon Beane and the Buffalo Bills organization released an official statement expressing deepest condolences to defensive tackle Ed Oliver and his family during this tragic time."
        }
      },
      {
        "@type": "Question",
        "name": "How old was Ed Oliver's son?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ed Oliver's son was two years old at the time of the tragic accident."
        }
      },
      {
        "@type": "Question",
        "name": "How can Bills Mafia and fans express support for Ed Oliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fans can send messages of support through official team channels and donate to children's health foundations or community causes supported by Ed Oliver and the Buffalo Bills Foundation."
        }
      },
      {
        "@type": "Question",
        "name": "What is Ed Oliver's current contract status with the Buffalo Bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ed Oliver signed a four-year, $68 million contract extension with the Buffalo Bills through 2027, serving as a core pillar of the team's defensive interior."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ed Oliver Son News 2026: Buffalo Bills DT Mourns Loss & Updates",
    "description": "Comprehensive news report and condolences for Buffalo Bills defensive tackle Ed Oliver following the loss of his son.",
    "datePublished": "2026-08-23T00:00:00Z",
    "dateModified": "2026-08-23T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "BillsSchedule2026 Editorial Team"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* On-Page Breadcrumb Navigation */}
      <nav className="text-xs font-mono text-zinc-400 flex items-center gap-2 pt-2" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white underline transition-colors">
          Buffalo Bills Schedule 2026
        </Link>
        <span>/</span>
        <span className="text-white font-semibold">Ed Oliver Son News</span>
      </nav>

      {/* Hero Header Card */}
      <header className="space-y-4 bg-zinc-900/90 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 text-xs font-headline font-bold uppercase tracking-wider">
          PLAYER SPOTLIGHT & TEAM NEWS • BUFFALO BILLS
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-headline font-extrabold text-white uppercase tracking-tight leading-tight">
          Ed Oliver Son News 2026: Bills Organization & Mafia Mourn Loss
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Comprehensive coverage regarding <strong>ed oliver son news</strong>. Read the official statement released by Brandon Beane and the Buffalo Bills, messages of support from teammates, family background, Ed Oliver&apos;s career timeline, and how fans can rally behind the Oliver family.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Official Team Condolences Issued
          </span>
          <span>•</span>
          <span>Updated: August 23, 2026</span>
          <span>•</span>
          <span>By BillsSchedule2026 News Desk</span>
        </div>
      </header>

      {/* Adsterra Banners */}
      <NativeBanner />
      <Banner adKey="8c41e1fed296062320ae7fce00172081" width={300} height={250} />

      {/* Main Article */}
      <article className="bg-zinc-900/70 p-6 md:p-10 rounded-2xl border border-zinc-800 space-y-10 text-zinc-300 leading-relaxed text-sm md:text-base">

        {/* Statement Highlight Box */}
        <div className="bg-gradient-to-r from-blue-950/60 via-zinc-900 to-zinc-900 p-6 rounded-xl border border-blue-800/50 space-y-4">
          <h2 className="font-headline font-bold text-white uppercase tracking-wider text-base md:text-lg flex items-center gap-2">
            <span>🕊️</span> Official Buffalo Bills Statement
          </h2>
          <blockquote className="italic text-zinc-200 text-sm md:text-base border-l-4 border-blue-500 pl-4 py-1">
            &ldquo;On behalf of the entire Buffalo Bills organization, we want to publicly express our deepest condolences to Ed Oliver and his family following the tragic loss of his two-year-old son. Our thoughts, prayers, and full support are with Ed and his loved ones during this unimaginably difficult time.&rdquo;
            <span className="block text-xs font-mono text-zinc-400 mt-2 not-italic">— Brandon Beane, Buffalo Bills General Manager</span>
          </blockquote>
        </div>

        {/* Showcase Image */}
        <div className="space-y-2">
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image 
              src="/images/bills/training-camp-practice.webp"
              alt="Ed Oliver son news Buffalo Bills defensive tackle family support"
              fill
              className="object-cover"
            />
          <img src="/images/bills/nfl-broadcast-truck.webp" alt="ed-oliver-son-family-news 2026 NFL" className="rounded-xl border border-zinc-800 my-6" />
          </div>
          <p className="text-xs text-zinc-400 font-mono text-center">
            The Buffalo Bills organization and player roster stand unified in supporting defensive tackle Ed Oliver.
          </p>
        </div>

        {/* Section 1: Official Buffalo Bills Statement */}
        <section className="space-y-4">
          
<h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            1. Official Buffalo Bills Statement & Condolences for Ed Oliver
          </h2>
          <p>
            The football community expressed profound sorrow following <strong>ed oliver son news</strong> released by the Buffalo Bills organization. Star defensive tackle Ed Oliver and his family are mourning the tragic passing of his 2-year-old son.
          </p>
          <p>
            As reported by major news outlets including <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NFL.com</a>, <a href="https://www.espn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ESPN</a>, and <a href="https://www.nbcnews.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">NBC News</a>, General Manager Brandon Beane and head coach Sean McDermott voiced the franchise&apos;s unwavering commitment to surrounding Oliver with complete privacy, love, and compassionate care.
          </p>
        </section>

        {/* Section 2: Family Background */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            2. Family Background & Houston Area News Updates
          </h2>
          <p>
            Ed Oliver was born and raised in Houston, Texas, where he attended Westfield High School before starring at the University of Houston. Throughout his high school, collegiate, and NFL career, Oliver has remained closely connected to his family roots in the greater Houston area.
          </p>
          <p>
            Local media outlets in Texas and Western New York confirmed that family members gathered in Houston to support Ed and his partner during this heavy grieving period.
          </p>
        </section>

        {/* Section 3: Teammate Support */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            3. Teammate Support, NFL Community Reaction & Outpouring of Love
          </h2>
          <p>
            Across the NFL landscape, coaches, active players, and retired veterans shared messages of solidarity. Bills quarterback Josh Allen, defensive captain Von Miller, and fellow defensive linemen Greg Rousseau and DaQuan Jones posted heartfelt tributes on social media honoring Oliver&apos;s son.
          </p>
          <p>
            Coaches across the AFC East also sent formal letters of support, underscoring how the broader football family rallies together when tragedy strikes off the field.
          </p>
        </section>

        {/* Section 4: Ed Oliver Career Timeline */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-red-600 pl-4">
            4. Ed Oliver Buffalo Bills Career Timeline & On-Field Leadership
          </h2>
          <p>
            Selected ninth overall by the Buffalo Bills in the 2019 NFL Draft, Ed Oliver has developed into one of the league&apos;s premier interior pass rushers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-300">
            <li><strong>2019 Draft:</strong> Selected #9 overall out of the University of Houston.</li>
            <li><strong>2023 Extension:</strong> Signed a 4-year, $68 million contract extension with $45 million guaranteed.</li>
            <li><strong>Career Production:</strong> Over 24.0 career sacks, 45 tackles for loss, and 5 forced fumbles across six NFL seasons.</li>
            <li><strong>Defensive Anchor:</strong> Serves as the key three-technique defensive tackle disrupting opposing running plays and pocket integrity.</li>
          </ul>
        </section>

        {/* Section 5: How Fans Can Support */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-headline font-extrabold text-white uppercase tracking-wider border-l-4 border-blue-600 pl-4">
            5. How Bills Mafia & Fans Can Support Ed Oliver&apos;s Family & Causes
          </h2>
          <p>
            Bills Mafia is renowned throughout professional sports for extraordinary generosity during times of hardship. Fans wishing to honor Ed Oliver&apos;s son are encouraged to send notes of encouragement to the Buffalo Bills practice facility in Orchard Park or make donations in his honor to the <strong>Buffalo Bills Foundation</strong> or local children&apos;s healthcare charities.
          </p>
          <p>
            Respecting the family&apos;s request for privacy remains the highest priority for fans across Western New York and nationwide.
          </p>
        </section>

        {/* Related Navigation Links */}
        <div className="pt-6 border-t border-zinc-800 space-y-4">
          <h3 className="font-headline font-bold text-white uppercase tracking-wider text-base">
            Explore Related Buffalo Bills Roster & News Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <Link href="/damar-hamlin-bills-status" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Damar Hamlin Bills Safety Depth Chart & Status Update
            </Link>
            <Link href="/is-josh-allen-playing-today" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Is Josh Allen Playing Today? Preseason Starter News
            </Link>
            <Link href="/bills-rb-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Buffalo Bills Running Back Depth Chart Breakdown
            </Link>
            <Link href="/bills-quarterback-depth-chart" className="p-3 bg-black/60 rounded border border-zinc-800 hover:border-blue-500 text-blue-400 transition-colors">
              ➔ Bills Quarterback Depth Chart: Josh Allen & Backups
            </Link>
          </div>
        </div>

      </article>
    
        {/* Sources & Authority References */}
        <section className="mt-6 bg-zinc-900/40 rounded-xl border border-zinc-800 p-4 text-xs text-zinc-400">
          <h3 className="font-headline font-bold text-white uppercase mb-2">Sources &amp; References</h3>
          <ul className="space-y-1">
            <li><a href="https://www.nfl.com/teams/buffalo-bills/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">NFL.com</a></li>
            <li><a href="https://www.espn.com/nfl/team/_/name/buf/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">ESPN.com</a></li>
            <li><a href="https://en.wikipedia.org/wiki/2026_NFL_season" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Wikipedia</a></li>
          </ul>
        </section>
</div>
  );
}
