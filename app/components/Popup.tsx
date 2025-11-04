// app/components/Popup.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  // This effect runs only once when the component mounts
  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('popupShown');

    if (!hasBeenShown) {
      // If not shown, wait 3 seconds then show it
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark it as shown for this session
        sessionStorage.setItem('popupShown', 'true');
      }, 3000); // 3-second delay

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            // UPDATED: Changed the background from dark to a light, blurred "frosted glass" effect
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          />
          
          {/* Popup Card */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-4 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative flex flex-col md:flex-row items-center gap-8">
              
              {/* Close Button */}
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Left Side: Image */}
              <div className="flex-shrink-0 hidden md:block">
                <Image 
                  src="/logo/well-child-logo.png" 
                  alt="WellChild Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>

              {/* Right Side: Content */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Join Our Newsletter</h2>
                <p className="mt-2 text-gray-600">
                  Stay updated with the latest pediatric care tips, parent guides, and news from our specialists.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="popup-name" className="sr-only">Name</label>
                    <input type="text" id="popup-name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label htmlFor="popup-email" className="sr-only">Email</label>
                    <input type="email" id="popup-email" placeholder="Your Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <button type="submit" className="w-full bg-[#FFDE59] text-[#33343B] font-bold py-3 rounded-lg shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}