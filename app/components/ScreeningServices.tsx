// app/components/ScreeningServices.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Data for the screening cards
const screeningData = [
  {
    title: "Speech Screening",
    bgColor: "bg-[#4EB0B9]", 
  },
  {
    title: "Autism Screening",
    bgColor: "bg-[#F499A8]", 
  },
  {
    title: "ADHD screening",
    bgColor: "bg-[#4090B3]", 
  },
  {
    title: "Language Screening",
    bgColor: "bg-[#FFD483]", 
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function ScreeningServices() {
  return (
    <section className="bg-[#F7EEDE] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl text-gray-800 mb-12 text-center lg:text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Speech screening, Autism <br /> screening, ADHD screening and Language screening.
        </motion.h2>

        {/* Responsive Grid for Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {screeningData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                href="/contact" // Link to the specific service page
                className={`block p-6 rounded-2xl text-white aspect-[4/3] flex flex-col justify-between ${item.bgColor} hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <div className="self-end">
                  <ArrowRight size={24} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}