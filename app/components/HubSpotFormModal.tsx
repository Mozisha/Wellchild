// HubSpotFormModal.tsx

'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner'; // Import the spinner

interface HubSpotFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  isScriptLoaded: boolean; // Accept the new prop
}

const HubSpotFormModal = ({ isOpen, onClose, isScriptLoaded }: HubSpotFormModalProps) => {

  useEffect(() => {
    // --- 1. CONDITIONALLY CREATE THE FORM ---
    // Now we wait for the modal to be open AND the script to be loaded.
    if (isOpen && isScriptLoaded && (window as any).hbspt) {
      
      const container = document.querySelector("#hubspot-form-container");
      // Always clear the container first to prevent duplication
      if (container) {
          container.innerHTML = '';
      }

      // Create the form
      (window as any).hbspt.forms.create({
        region: "na1",
        portalId: "47285637",
        formId: "701cc873-e625-4d36-b28a-aec3d072aa5a",
        target: "#hubspot-form-container"
      });
    }
  }, [isOpen, isScriptLoaded]); // Effect now re-runs if the script loads while the modal is open

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[70vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <div className="p-8">
            {/* <h2 className="text-3xl font-serif text-gray-800 mb-2">Join WellChild Network</h2>
            <p className="text-gray-600 mb-6">Fill out the form below to start your application.</p> */}
            
            {/* --- 2. SHOW SPINNER OR FORM CONTAINER --- */}
            {isScriptLoaded ? (
              <div id="hubspot-form-container"></div>
            ) : (
              <LoadingSpinner />
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HubSpotFormModal;