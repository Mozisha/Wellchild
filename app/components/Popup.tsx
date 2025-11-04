// app/components/Popup.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import HubSpotEmbedForm from './HubSpotEmbedForm';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem('popupShown');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('popupShown', 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  const hubspotPortalId = "47285637";
  const hubspotFormId = "a6cab278-127e-45bd-886a-90bd38cb3b9b";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          />
          
          <motion.div
            // UPDATED: Changed max-w-lg to max-w-2xl to make the popup wider
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-4 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative flex flex-col items-center">
              <button onClick={closePopup} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors">
                <X size={24} />
              </button>
              
              <Image 
                // UPDATED: Corrected image path typo
                src="/logo/well-child-logo.png" 
                alt="WellChild Logo"
                width={80}
                height={80}
                className="rounded-full mb-4"
              />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Join Our Newsletter</h2>
                <p className="mt-2 text-gray-600">
                  Stay updated with the latest pediatric care tips, parent guides, and news from our specialists.
                </p>
                <div className="mt-6 w-full">
                  <HubSpotEmbedForm portalId={hubspotPortalId} formId={hubspotFormId} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}