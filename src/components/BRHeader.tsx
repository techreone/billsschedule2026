'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BRHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Full Schedule', href: '/' },
    { label: 'Where To Watch', href: '/where-to-watch' },
    { label: 'Preseason', href: '/preseason-schedule' },
    { label: 'Printable PDF', href: '/printable-schedule' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo Block */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#00338D] rounded-xl flex items-center justify-center border border-red-600/40 shadow-lg group-hover:scale-105 transition-transform p-1.5">
            <img src="/images/bills/bills.webp" alt="Bills Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-xl text-white tracking-wider uppercase flex items-center gap-1.5">
              BILLS<span className="text-red-500">SCHEDULE</span>2026
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
              BILLSSCHEDULE2026.XYZ
            </span>
          </div>
        </Link>

        {/* Center: Dynamic Active State Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-headline font-bold uppercase tracking-wider h-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`h-full flex items-center border-b-2 transition-all ${
                  isActive
                    ? 'text-white border-red-600 font-extrabold'
                    : 'text-zinc-400 border-transparent hover:text-white hover:border-zinc-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/printable-schedule"
            className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-headline font-bold uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
          >
            <span>🖨️</span> Get PDF
          </Link>
        </div>

      </div>

      {/* Sub-bar for Dynamic Mobile Navigation */}
      <div className="md:hidden flex items-center justify-around border-t border-zinc-900 py-2.5 px-2 text-[11px] font-headline font-bold uppercase tracking-wider bg-zinc-950">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? 'text-red-500 font-extrabold' : 'text-zinc-400 hover:text-white'}
            >
              {item.label.replace('Full Schedule', 'Schedule').replace('Printable PDF', 'PDF')}
            </Link>
          );
        })}
      </div>

    </header>
  );
}
