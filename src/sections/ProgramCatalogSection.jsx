'use client';
import React, { useState, useEffect } from 'react';
import { ProgramCard } from '@/components/composite/ProgramCard';
import { PROGRAM_CATEGORIES } from '@/constants/programs.constants';
import { fetchPrograms } from '@/services/programs.service';

export function ProgramCatalogSection({ onEnquire }) {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPrograms() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetchPrograms(selectedCategory);
        if (!controller.signal.aborted && res.success) {
          setPrograms(res.data);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || 'Failed to load programs catalog');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadPrograms();
    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Enterprise Upskilling Domains
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore industry-crafted learning paths designed for high-performance engineering, product, and data teams.
          </p>
        </div>

        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Program Domains">
          {PROGRAM_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer focus-ring ${
                selectedCategory === cat
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true" aria-live="polite">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 animate-pulse flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-5 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
                  <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-md" />
                  <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-md" />
                </div>
                <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-lg" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-8 text-center bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl max-w-lg mx-auto space-y-3" role="alert">
            <p className="text-sm font-bold text-red-600 dark:text-red-400">{error}</p>
            <button
              onClick={() => setSelectedCategory(selectedCategory)}
              className="text-xs font-semibold text-red-700 dark:text-red-300 underline hover:text-red-800 cursor-pointer focus-ring"
            >
              Try Reloading Catalog
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} onEnquire={onEnquire} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProgramCatalogSection;
