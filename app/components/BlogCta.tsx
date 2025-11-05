// app/components/BlogCta.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

export default function BlogCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#CEECDF] rounded-3xl overflow-hidden">
          
          {/* UPDATED: Added and animated the two decorative circles */}
          <motion.div
            className="absolute top-0 right-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] bg-[#203A42] rounded-full"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-100px] left-[20%] w-[300px] h-[300px] bg-[#203A42] rounded-full opacity-50"
             animate={{
              x: [0, -30, 20, 0],
              y: [0, 20, -15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-8 md:p-16 relative z-10">
            
            {/* Left Column: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#203A42] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Phone size={16} />
                <span>START TODAY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#203A42] leading-tight">
                Begin your journey to finding the right support for your child.
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-md">
                Don't wait to get the help your child deserves. Our team is here to match you with the perfect provider for your family's needs.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/contact" className="bg-[#203A42] text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors">
                  Get Started
                </Link>
                <Link href="/faq" className="border border-[#203A42] text-[#203A42] font-bold py-3 px-8 rounded-full hover:bg-[#203A42] hover:text-white transition-colors">
                  Find Support
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-80 lg:h-96 w-full">
              <div className="relative w-full h-full bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
                 <Image
                    src="/goofy.png" 
                    alt="Happy child wearing glasses"
                    layout="fill"
                    objectFit="cover"
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}