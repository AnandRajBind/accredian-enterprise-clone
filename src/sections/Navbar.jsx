'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/constants/navigation.constants';

export function Navbar({ onOpenReferralModal, onOpenEnquireModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-slate-800/60 py-2.5 sm:py-3'
          : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        <a href="#" className="flex items-center gap-1.5 xs:gap-2 group focus-ring rounded-lg p-0.5 shrink-0">
          <div className="w-8 h-8 xs:w-9 xs:h-9 bg-brand-700 text-white rounded-lg flex items-center justify-center font-black text-lg xs:text-xl shadow-sm">
            a
          </div>
          <div className="flex flex-col">
            <span className="text-base xs:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              accredian
            </span>
            <span className="text-[9px] xs:text-[10px] font-bold uppercase tracking-widest text-brand-700 dark:text-blue-400">
              Enterprise
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-white transition-colors focus-ring rounded-md px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 xs:gap-3 shrink-0">
          <Button variant="secondary" size="sm" onClick={onOpenReferralModal}>
            Refer & Earn
          </Button>
          <Button variant="primary" size="sm" onClick={onOpenEnquireModal}>
            Enquire Now
          </Button>
        </div>

        <div className="flex sm:hidden items-center gap-1.5 shrink-0">
          <Button variant="secondary" size="sm" onClick={onOpenReferralModal} className="text-xs px-2.5 py-1.5">
            Refer & Earn
          </Button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-ring cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="hidden sm:block lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-ring cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm xs:text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <Button variant="secondary" size="md" fullWidth onClick={() => { setIsMobileMenuOpen(false); onOpenReferralModal(); }}>
              Refer & Earn
            </Button>
            <Button variant="primary" size="md" fullWidth onClick={() => { setIsMobileMenuOpen(false); onOpenEnquireModal(); }}>
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
