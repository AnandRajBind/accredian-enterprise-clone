'use client';

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import { HeaderBanner } from '@/sections/HeaderBanner';
import { Navbar } from '@/sections/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { LogoTickerSection } from '@/sections/LogoTickerSection';
import { ReferralSpotlightSection } from '@/sections/ReferralSpotlightSection';
import { ProgramCatalogSection } from '@/sections/ProgramCatalogSection';
import { ComparisonMatrixSection } from '@/sections/ComparisonMatrixSection';
import { MethodologySection } from '@/sections/MethodologySection';
import { MetricsBarSection } from '@/sections/MetricsBarSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { CorporateEnquireSection } from '@/sections/CorporateEnquireSection';
import { Footer } from '@/layouts/Footer';

const ReferralModal = dynamic(() => import('@/modals/ReferralModal'), {
  ssr: false,
});

export default function LandingPage() {
  const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

  const handleOpenReferralModal = useCallback(() => setIsReferralModalOpen(true), []);
  const handleCloseReferralModal = useCallback(() => setIsReferralModalOpen(false), []);

  const handleScrollToEnquire = useCallback(() => {
    const element = document.getElementById('enquire');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-brand-700 selection:text-white">
      <HeaderBanner onReferClick={handleOpenReferralModal} />

      <Navbar
        onOpenReferralModal={handleOpenReferralModal}
        onOpenEnquireModal={handleScrollToEnquire}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection
          onOpenReferralModal={handleOpenReferralModal}
          onOpenEnquireModal={handleScrollToEnquire}
        />

        <LogoTickerSection />

        <ReferralSpotlightSection onOpenReferralModal={handleOpenReferralModal} />

        <ProgramCatalogSection onEnquire={handleScrollToEnquire} />

        <ComparisonMatrixSection />

        <MethodologySection />

        <MetricsBarSection />

        <TestimonialsSection />

        <FAQSection />

        <CorporateEnquireSection />
      </main>

      <Footer />

      {isReferralModalOpen && (
        <ReferralModal
          isOpen={isReferralModalOpen}
          onClose={handleCloseReferralModal}
        />
      )}
    </div>
  );
}
