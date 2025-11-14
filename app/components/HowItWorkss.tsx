'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BadgeCheck, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface HowItWorkssProps {
  onApplyClick: () => void;
}

const HowItWorkss: React.FC<HowItWorkssProps> = ({ onApplyClick }) => {
  return (
    <section id="how-it-works" className="bg-[#F1F5FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Get Started in 3 Simple Steps</h2>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div variants={fadeInUp} className="text-center p-6">
            <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#FCC0C5]">
              <FileText className="h-10 w-10 text-[#1E606A]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">1. Apply Online</h3>
            <p className="mt-2 text-gray-600">Tell us your specialty, license, and service areas.</p>
          </motion.div>
          {/* Step 2 */}
          <motion.div variants={fadeInUp} className="text-center p-6">
            <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#FFD483]">
              <BadgeCheck className="h-10 w-10 text-[#1E606A]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">2. Verification & Onboarding</h3>
            <p className="mt-2 text-gray-600">We confirm credentials and set up your profile.</p>
          </motion.div>
          {/* Step 3 */}
          <motion.div variants={fadeInUp} className="text-center p-6">
            <div className="flex justify-center items-center h-20 w-20 mx-auto bg-white rounded-full shadow-lg border-4 border-[#4EB0B9]">
              <Users className="h-10 w-10 text-[#1E606A]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">3. Start Receiving Families</h3>
            <p className="mt-2 text-gray-600">Through our secure EHR and scheduling system.</p>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
          <button
            onClick={onApplyClick}
            className=" font-bold py-3 px-8 rounded-full shadow-lg bg-[#FEC102] hover:bg-[#ffca2a] transition-transform duration-200 hover:scale-105"
          >
            Start the Application
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorkss;