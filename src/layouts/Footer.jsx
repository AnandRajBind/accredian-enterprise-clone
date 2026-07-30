import React from 'react';
import { FOOTER_SECTIONS } from '@/constants/navigation.constants';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xl">
                a
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  accredian
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Accredian Enterprise empowers global tech & product teams through precision upskilling, customized learning paths, and verifiable ROI analytics.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Email: <a href="mailto:enterprise@accredian.com" className="hover:text-white transition-colors">enterprise@accredian.com</a></p>
              <p>Headquarters: Gurgaon & Bengaluru, India</p>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Referral Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
