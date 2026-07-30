import React from 'react';
import { MATRIX_DATA } from '@/constants/programs.constants';

export function ComparisonMatrixSection() {
  return (
    <section id="comparison" className="py-12 xs:py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 xs:mb-12 space-y-3 xs:space-y-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Accredian Enterprise?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-slate-600 dark:text-slate-300">
            See how our outcome-driven corporate learning model compares against conventional vendor training.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm bg-white dark:bg-slate-900 no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[550px]" aria-label="Enterprise Feature Comparison Matrix">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-900 dark:text-white w-1/2">
                  Enterprise Training Capabilities
                </th>
                <th className="p-4 sm:p-5 text-center text-xs sm:text-sm font-extrabold text-brand-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 w-1/4">
                  Accredian Enterprise
                </th>
                <th className="p-4 sm:p-5 text-center text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 w-1/4">
                  Conventional Training
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {MATRIX_DATA.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200 leading-normal">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/20 dark:bg-blue-950/10">
                    {row.accredian ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-slate-300">&mdash;</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    {row.conventional ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonMatrixSection;
