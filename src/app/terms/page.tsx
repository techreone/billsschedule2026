import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and Conditions of Use for billsschedule2026.online.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 text-zinc-300 leading-relaxed">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-400 flex items-center gap-2 font-mono">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white">Terms of Service</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-white uppercase tracking-tight border-b border-zinc-800 pb-4">
        Terms of Service
      </h1>

      <p className="text-xs text-zinc-400 font-mono">
        Last Updated: August 22, 2026
      </p>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">1. Acceptance of Terms</h2>
        <p>
          By accessing and using <strong>billsschedule2026.online</strong>, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">2. Schedule Flex Policy & Disclaimer</h2>
        <p>
          NFL game schedules, kickoff times, and television network assignments are subject to the NFL Flexible Scheduling policy. While we strive to maintain 100% current data, users should verify critical game times prior to attending stadium events.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">3. Intellectual Property</h2>
        <p>
          All original textual content, custom PDF templates, and site layouts are protected by applicable copyright law.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">4. Advertising &amp; Affiliate Disclosure</h2>
        <p>
          This website is supported by third-party advertising networks, including Adsterra, which may display banner, native, social-bar, and other ad formats during your visit. We may also participate in affiliate or referral programs where a commission is earned if you purchase a product or service after clicking a partner link. These relationships never influence the editorial accuracy of game times, broadcast assignments, or venue details presented on the site.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">5. Limitation of Liability</h2>
        <p>
          billsschedule2026.online is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we verify every listing against official NFL and team sources, we make no warranty that kickoff times, channel assignments, or streaming availability are error-free or uninterrupted. Under no circumstance shall the site operators be liable for any indirect, incidental, or consequential damages arising from reliance on schedule information.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">6. Modifications to These Terms</h2>
        <p>
          We reserve the right to update or revise these Terms of Service at any time. Material changes will be reflected by the &quot;Last Updated&quot; date at the top of this page. Continued use of the site following any modification constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="space-y-3 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800">
        <h2 className="text-xl font-headline font-bold text-white uppercase">7. Governing Law &amp; Contact</h2>
        <p>
          These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. Questions about these Terms may be directed to our editorial team at{' '}
          <a href="mailto:support@billsschedule2026.online" className="text-blue-400 underline font-bold">
            support@billsschedule2026.online
          </a>.
        </p>
      </section>

    </div>
  );
}
