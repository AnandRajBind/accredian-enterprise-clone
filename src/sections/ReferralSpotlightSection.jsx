import React from 'react';
import { Button } from '@/components/ui/Button';

export function ReferralSpotlightSection({ onOpenReferralModal }) {
  return (
    <section id="refer" className="py-12 xs:py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-blue-900 rounded-2xl xs:rounded-3xl p-5 xs:p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-block bg-emerald-500/20 text-emerald-300 text-[10px] xs:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-500/30">
                Referral Program Spotlight
              </span>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Refer a Friend & Earn Up to <span className="text-emerald-400">₹10,000</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed">
                Know someone looking to upskill in AI, Data, or Product Leadership? Submit their details today. Once they enroll, you receive direct cash rewards!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 pt-2 xs:pt-4 text-left">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/10">
                  <span className="text-emerald-400 font-black text-xs sm:text-sm">STEP 1</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium leading-normal">Submit Referrer & Referee Info</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/10">
                  <span className="text-emerald-400 font-black text-xs sm:text-sm">STEP 2</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium leading-normal">Referee Enrolls in Program</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/10">
                  <span className="text-emerald-400 font-black text-xs sm:text-sm">STEP 3</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium leading-normal">Receive Guaranteed Payout</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 xs:p-6 w-full max-w-sm">
                <p className="text-[10px] xs:text-xs text-slate-300 font-medium uppercase tracking-wider mb-1">Max Reward Pool</p>
                <p className="text-3xl xs:text-4xl font-black text-amber-400">₹10,000</p>
                <p className="text-xs text-slate-400 mt-1">Per successful enterprise referral</p>

                <div className="mt-5 xs:mt-6">
                  <Button variant="secondary" size="lg" fullWidth onClick={onOpenReferralModal} className="shadow-xl">
                    Refer Now &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferralSpotlightSection;
