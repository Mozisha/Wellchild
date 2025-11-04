// app/components/CtaSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="bg-[#F1F5FF] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Decorative Shape */}
        <motion.div 
          className="absolute -top-16 -left-32 hidden lg:block"
          initial={{ opacity: 0, rotate: -45 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/website-geo-shape.png"
            alt=""
            aria-hidden="true"
            width={250}
            height={250}
            
          />
        </motion.div>

        {/* CTA Card */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <Image
            src="/wave.jpg"
            alt="Abstract wave pattern"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>

          {/* Content */}
          <div className="relative z-20 p-12 md:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Book Your Autism or ADHD Evaluation, Speech Therapy or ABA Therapy Today
                </h2>
              </div>
              
              {/* Right Column: Description and Button */}
              <div className="flex flex-col items-start lg:items-center">
                <p className="max-w-sm text-white/90">
                  Verify Your coverage - get matched with in-network Clinical Psychologists, ABA therapists, or Speech therapists
                </p>
                {/* UPDATED: Added cursor-pointer and hover scale effect */}
                <Link href="/contact">
                  <button className="mt-8 bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer">
                    Get Started
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}