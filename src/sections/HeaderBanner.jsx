'use client';
import React, { useState } from 'react';

export function HeaderBanner({ onReferClick }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Promotional Announcement"
      className="bg-brand-900 text-white text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-brand-800 flex items-center justify-between gap-2 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-center">
        <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded text-[10px] sm:text-xs uppercase tracking-wider shrink-0">
          Referral Bonus
        </span>
        <span className="font-medium text-slate-200 text-xs sm:text-sm">
          Navigate your career — Earn up to{' '}
          <strong className="text-amber-400 font-bold">₹10,000</strong> per referral!
        </span>
        <button
          onClick={onReferClick}
          className="underline hover:text-amber-300 font-bold text-xs sm:text-sm transition-colors focus-ring cursor-pointer whitespace-nowrap"
        >
          Refer & Earn &rarr;
        </button>
      </div>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="text-slate-400 hover:text-white p-1 transition-colors shrink-0 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </aside>
  );
}

export default HeaderBanner;
