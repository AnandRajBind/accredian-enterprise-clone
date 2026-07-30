import React from 'react';
import { PARTNER_LOGOS } from '@/constants/programs.constants';

export function LogoTickerSection() {
  return (
    <section id="partners" className="py-10 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Trusted by Industry Leaders & Fortune 500 Enterprises
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap py-2 shrink-0">
          {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-2 text-slate-400 dark:text-slate-600 font-extrabold text-lg sm:text-xl tracking-tight opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-sm">
                {logo.name.charAt(0)}
              </span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoTickerSection;
