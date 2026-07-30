import React from 'react';
import { METRICS_DATA } from '@/constants/programs.constants';

export function MetricsBarSection() {
  return (
    <section id="metrics" className="py-16 bg-brand-900 text-white border-b border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {METRICS_DATA.map((metric) => (
            <div key={metric.label} className="space-y-2 p-4">
              <p className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {metric.prefix}
                {metric.value.toLocaleString()}
                {metric.suffix}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsBarSection;
