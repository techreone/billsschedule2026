import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG, FAQS } from '@/data/scheduleData';
import BRScoreboardCarousel from '@/components/BRScoreboardCarousel';
import BRHeader from '@/components/BRHeader';
import { SocialBar, Smartlink } from '@/components/ads/Adsterra';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Buffalo Bills Schedule 2026: Game Times, TV Channels & Live Streaming Guide",
    template: "%s",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Buffalo Bills schedule 2026",
    "Bills game today time",
    "what channel is the Bills game on",
    "Buffalo Bills tv channel",
    "Bills streaming guide 2026",
    "Buffalo Bills regular season schedule",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Buffalo Bills Schedule 2026: Game Times & TV Broadcast Channels",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Buffalo Bills Schedule 2026 Official Broadcast & Kickoff Times Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buffalo Bills Schedule 2026",
    description: SITE_CONFIG.description,
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-black text-white antialiased min-h-screen flex flex-col font-sans">
        
        {/* Top Scrolling Scoreboard Carousel */}
        <BRScoreboardCarousel />

        {/* Main Header Navbar with Custom BS26 Logo */}
        <BRHeader />

        {/* Main Content Body Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
          {children}
        </main>

        {/* Custom Dark Footer */}
        <footer className="bg-black border-t border-zinc-900 py-10 mt-12 text-xs text-zinc-500">
          <div className="max-w-7xl mx-auto px-4 space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6">
              <div className="flex items-center gap-2">
                <div className="bg-[#00338D] text-white font-headline font-black text-sm px-2 py-0.5 rounded border border-blue-400/30">
                  BS<span className="text-yellow-300">26</span>
                </div>
                <span className="font-headline font-bold text-white uppercase text-sm">
                  BILLS SCHEDULE 2026
                </span>
              </div>
              <div className="flex items-center gap-6 font-mono text-zinc-400">
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <Smartlink className="hover:text-white transition-colors" />
              </div>
            </div>
            <p className="text-[11px] text-zinc-600 text-center">
              © 2026 billsschedule2026.online • Unofficial fan broadcast schedule & streaming guide. Not affiliated with NFL or Buffalo Bills.
            </p>
          </div>
        </footer>

        {/* Adsterra Social Bar */}
        <SocialBar />

      </body>
    </html>
  );
}
