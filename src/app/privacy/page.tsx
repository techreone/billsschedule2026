import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for billsschedule2026.online - Details on user data protection, cookies, analytics, and third-party advertising policies.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 text-zinc-300 leading-relaxed">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight border-b border-zinc-800 pb-4">
        Privacy Policy
      </h1>

      <p className="text-xs text-zinc-400 font-mono">
        Last Updated: August 22, 2026
      </p>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">1. Introduction</h2>
        <p>
          Welcome to <strong>billsschedule2026.online</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to respecting your privacy and protecting any personal information collected through our sports schedule and broadcasting guide website.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">2. Information Collection & Usage</h2>
        <p>
          We do not require user account registration to access our 2026 Buffalo Bills schedule, printable PDF downloads, or streaming platform guides. Standard server logs automatically record non-personally identifiable technical information such as IP address, browser type, referring URL, and page request timestamps to ensure server stability and prevent abuse.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">3. Cookies & Advertising Partners</h2>
        <p>
          We may utilize standard web cookies and third-party analytics services (such as Google Analytics) to analyze aggregate site traffic patterns. Third-party advertising vendors (such as Google AdSense) may also place cookies on your browser to serve relevant advertisements based on prior web visits. Users can manage or disable cookies via individual web browser settings.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">4. Contact & Inquiries</h2>
        <p>
          If you have questions regarding this Privacy Policy or site data practices, please contact our editorial staff at{' '}
          <a href="mailto:support@billsschedule2026.online" className="text-blue-400 underline font-bold">
            support@billsschedule2026.online
          </a>.
        </p>
      </section>

    </div>
  );
}
