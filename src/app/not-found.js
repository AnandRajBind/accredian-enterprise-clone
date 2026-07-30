import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="max-w-md w-full text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl space-y-4">
        <h1 className="text-6xl font-black text-brand-700 dark:text-blue-400">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The enterprise page or resource you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-700 text-white hover:bg-brand-800 transition-colors focus-ring"
          >
            Return to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}
