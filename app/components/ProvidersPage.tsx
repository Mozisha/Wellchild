'use client';

import React, { useState } from 'react';
// --- 1. IMPORT THE SCRIPT COMPONENT ---
import Script from 'next/script';

import HubSpotFormModal from './HubSpotFormModal';
import Hero from './Hero';
import HowItWorkss from './HowItWorkss';
import Faq from './Faq';
import FinalCta from './FinalCta';
import WhyJoinWellChild from './WhyJoinWellChild';
import ForAbaProviders from './ForAbaProviders';
import ForSpeechAndPsychProviders from './ForSpeechAndPsychProviders';
import Testimonials from './Testimonials';
import FloatingBackground from './FloatingBackground';

export default function ProvidersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // --- 2. THE useEffect FOR SCRIPT LOADING IS NO LONGER NEEDED AND CAN BE REMOVED ---
  /*
  useEffect(() => {
    // This entire block will be replaced by the <Script> component
  }, []);
  */

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative isolate">
      {/* --- 3. ADD THE SCRIPT COMPONENT HERE --- */}
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onReady={() => {
          setIsScriptLoaded(true);
        }}
      />

      <FloatingBackground />
      <main>
        <HubSpotFormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          isScriptLoaded={isScriptLoaded} // This logic remains the same
        />
        <Hero onApplyClick={openModal} />
        <WhyJoinWellChild />
        <ForAbaProviders onApplyClick={openModal} />
        <ForSpeechAndPsychProviders onApplyClick={openModal} />
        <HowItWorkss onApplyClick={openModal} />
        <Testimonials />
        <Faq />
        <FinalCta onApplyClick={openModal} />
      </main>
    </div>
  );
}