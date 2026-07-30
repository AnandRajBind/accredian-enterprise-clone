import React, { memo } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const ProgramCard = memo(function ProgramCard({ program, onEnquire }) {
  const { title, category, duration, format, certification, badge, skills } = program;

  return (
    <article className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="primary">{category}</Badge>
          {badge && <Badge variant="warning">{badge}</Badge>}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {format}
          </span>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Skills Mastered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
          {certification}
        </span>
        <Button variant="primary" size="sm" onClick={() => onEnquire(program)}>
          Enquire Now
        </Button>
      </div>
    </article>
  );
});

export default ProgramCard;
