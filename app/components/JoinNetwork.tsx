'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// A reusable component for the feature bubbles
const FeatureBubble = ({ text, position }: { text: string, position: string }) => (
  <motion.div
    // UPDATED: Removed 'hidden sm:block' so bubbles are always visible
    className={`absolute ${position}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="relative">
      <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-xl">
        {/* UPDATED: Removed 'whitespace-nowrap' to allow text to wrap on small screens */}
        <p className="text-sm text-gray-700">{text}</p>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <div className="bg-[#1E606A] rounded-full p-1.5 shadow-md">
          <Check className="text-white h-4 w-4" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function JoinNetwork() {
  return (
    <section className="bg-[#F8F9FA] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-widest text-gray-500 mb-4">FOR ABA PROVIDERS</p>
            <h2 className="text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
              Join Florida’s fastest-growing pediatric network.
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you’re starting a side hustle, seeing one client per week, or already have an established private practice, we’re here for you. 
              <strong className="text-gray-800"> We make it easy to start and grow your private practice</strong>.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer">
                  Join as a Provider
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image and Bubbles */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-4 rounded-3xl">
              <Image
                src="/happy-child.png"
                alt="Happy child in a yellow hard hat"
                width={600}
                height={800}
                className="rounded-2xl object-cover"
              />
              
              {/* UPDATED: Feature Bubbles now use responsive positioning to fit on all screen sizes */}
              <FeatureBubble text="Take insurance without the headache" position="top-[15%] -left-4 lg:-left-[10%]" />
              <FeatureBubble text="Fill your caseload with new families" position="top-[45%] -right-2 lg:-right-[1%]" />
              <FeatureBubble text="Set your own schedule" position="bottom-[10%] -left-2 lg:left-auto lg:-right-[2%]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}