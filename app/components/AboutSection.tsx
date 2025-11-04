// app/components/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants for the parent container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Animation variants for child elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section className="bg-[#f4f4f2] py-16 md:py-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column: Text Content */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          <p className="font-[600] text-sm text-[#2F568C] tracking-wide">
            Pediatric Care Platform. Serving families across Florida.
          </p>

          <h2 className="font-inter text-[#33343B] text-4xl md:text-[47.8px] font-normal leading-tight md:leading-[56px]">
            Founded by Pediatric Specialists. WellChild helps families access trusted
            developmental care faster.
          </h2>

          

          <div className="mt-4">
            {/* UPDATED: Added cursor-pointer and hover scale effect */}
            <Link href="/contact">
              <button className="bg-[#FFDE59] text-[#33343B] font-[500] py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer">
                Find a Provider
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div className="w-full" variants={itemVariants}>
          <Image
            src="/wellchild-image.png"
            alt="Happy children collage"
            width={459}
            height={574}
            className="rounded-lg object-contain mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}