import React, { useId } from 'react';
import { cn } from '@/utils/cn';

export function AccordionItem({ title, children, isOpen, onToggle }) {
  const contentId = useId();
  const headerId = useId();

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden transition-all duration-200">
      <h3>
        <button
          id={headerId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-ring"
        >
          <span className="text-base sm:text-lg pr-4">{title}</span>
          <span className="shrink-0 text-slate-500">
            <svg
              className={cn('w-5 h-5 transition-transform duration-200', isOpen && 'rotate-180')}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className="p-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed mt-2"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
