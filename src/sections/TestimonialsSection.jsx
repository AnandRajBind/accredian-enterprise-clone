'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '@/constants/programs.constants';

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIdx];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-blue-400">
            Enterprise Client Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Workforce & L&D Leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 sm:p-12 relative shadow-lg">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="pt-4 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-700 mb-3 shadow-md relative">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">{current.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{current.title} &bull; {current.company}</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={prevTestimonial}
                aria-label="Previous Testimonial"
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-ring cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === idx ? 'bg-brand-700 w-6' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                aria-label="Next Testimonial"
                className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-ring cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
