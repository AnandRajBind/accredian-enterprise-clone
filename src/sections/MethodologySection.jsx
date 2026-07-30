import React from 'react';
import { METHODOLOGY_STEPS } from '@/constants/programs.constants';

export function MethodologySection() {
  return (
    <section id="methodology" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-blue-400">
            Proven Execution Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Accredian Delivers Enterprise Results
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured 3-step approach ensuring continuous alignment between corporate objectives and employee upskilling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block text-4xl font-black text-brand-700/20 dark:text-blue-500/20">
                  {step.stepNumber}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-bold text-brand-700 dark:text-blue-400 uppercase tracking-wider">
                Phase {idx + 1} Execution &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;
