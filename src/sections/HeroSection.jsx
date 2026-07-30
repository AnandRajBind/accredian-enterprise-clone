'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function HeroSection({ onOpenReferralModal, onOpenEnquireModal }) {
  const [activeTab, setActiveTab] = useState('refer');

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-12 xs:py-16 sm:py-20 lg:py-24 border-b border-slate-200/60 dark:border-slate-800">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 xs:space-y-6 text-center lg:text-left">
            <Badge variant="primary" icon={<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />}>
              Enterprise Upskilling & Referrals
            </Badge>

            <h1 className="text-3xl xxs:text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Let’s Learn <br className="hidden sm:inline" />
              <span className="text-brand-700 dark:text-blue-500">& Earn Together</span>
            </h1>

            <p className="text-sm xs:text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transform your organization with customized learning paths in Gen-AI, Tech, and Leadership. Refer colleagues and earn up to{' '}
              <strong className="text-slate-900 dark:text-white font-bold">₹10,000</strong> per successful enrollment!
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 xs:gap-4">
              <Button variant="secondary" size="lg" onClick={onOpenReferralModal} className="w-full sm:w-auto shadow-lg shadow-emerald-500/20">
                Refer & Earn Rewards
              </Button>
              <Button variant="outline" size="lg" onClick={onOpenEnquireModal} className="w-full sm:w-auto">
                Request Corporate Demo
              </Button>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ISO Certified Programs
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Top B2B Platform 2026
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 xs:p-6 relative">
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-4 xs:mb-6 text-xs sm:text-sm font-semibold gap-1" role="tablist">
                {['refer', 'benefits', 'faq', 'support'].map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-1.5 sm:py-2 rounded-lg capitalize transition-all cursor-pointer text-center ${
                      activeTab === tab
                        ? 'bg-white dark:bg-slate-900 text-brand-700 dark:text-blue-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {activeTab === 'refer' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                      <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm sm:text-base mb-1">
                        How Referral Works
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        Submit a friend or colleague’s details. Once they join an enterprise course, receive instant cash rewards!
                      </p>
                    </div>
                    <Button variant="secondary" size="md" fullWidth onClick={onOpenReferralModal}>
                      Start Referring Now
                    </Button>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Customized Curricula tailored to your company skill gaps</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Real-time ROI & Employee Progress Analytics Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>Dedicated Enterprise Mentor Support & Capstones</span>
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-2 animate-in fade-in duration-200 text-xs sm:text-sm">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Q: When do I get my referral payout?
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Payouts are processed within 7 working days of your referee’s successful enrollment.
                    </p>
                  </div>
                )}

                {activeTab === 'support' && (
                  <div className="space-y-2 animate-in fade-in duration-200 text-xs sm:text-sm">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Dedicated Enterprise Advisory
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Email us directly at <span className="font-bold text-brand-700">enterprise@accredian.com</span> for custom team proposals.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
