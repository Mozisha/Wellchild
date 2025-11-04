// app/components/UnderConstructionPage.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function UnderConstructionPage() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <motion.div 
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-24">
          <div className="w-64 h-64 relative">
            <Image 
              src="/happy-child.png"
              alt="A happy child"
              width={256}
              height={256}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">
          Coming Soon!
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          We are working hard to build this page for you. Please check back later to see all the great content we have planned.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    </section>
  );
}