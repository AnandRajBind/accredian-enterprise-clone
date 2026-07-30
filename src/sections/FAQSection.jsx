'use client';
import React, { useState, useEffect } from 'react';
import { AccordionItem } from '@/components/ui/Accordion';
import { FAQ_CATEGORIES } from '@/constants/faqs.constants';
import { fetchFaqs } from '@/services/programs.service';

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('Referral Program');
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadFaqs() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetchFaqs(selectedCategory);
        if (isMounted && res.success) {
          setFaqs(res.data);
          setOpenIndex(0);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load FAQ items');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadFaqs();
    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-blue-400">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar" role="tablist">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
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
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 animate-pulse flex items-center justify-between">
                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-6 text-center bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium">
            {error}
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                title={faq.question}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQSection;
