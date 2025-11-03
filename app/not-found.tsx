// app/not-found.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      // Adjust min-height to account for Navbar and Footer
      className="bg-[#F8F9FA] flex flex-col items-center justify-center min-h-[calc(100vh-240px)] text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-lg">
        <motion.h1
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold font-serif text-[#4EB0B9]"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-gray-600 leading-relaxed"
        >
          Oops! The page you are looking for does not seem to exist. It might have been moved, renamed, or you may have typed the address incorrectly.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
          className="mt-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ffe680] transition-all duration-300 hover:shadow-xl"
          >
            <Home size={20} />
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}