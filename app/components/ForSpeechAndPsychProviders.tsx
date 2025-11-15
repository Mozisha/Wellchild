'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeInUp } from '../lib/animations';

interface ForSpeechAndPsychProvidersProps {
  onApplyClick: () => void;
}

const ForSpeechAndPsychProviders: React.FC<ForSpeechAndPsychProvidersProps> = ({ onApplyClick }) => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-semibold text-[#1E606A]">FOR SPEECH & CLINICAL PSYCHOLOGY PROVIDERS</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif text-gray-800">Referral Program for Speech & Clinical Psych Providers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Focus on your patients — we'll send the right ones your way.</p>
          <p className="mt-8 text-lg text-gray-700">We help you fill your schedule with high-quality, pre-screened referrals for:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Speech-Language Evaluations & Therapy</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Autism, ADHD, and Psych Evaluations</span>
          </div>
          <p className="mt-8 text-lg text-gray-700 font-bold">You'll get:</p>
          <ul className="mt-4 space-y-3 text-lg inline-block text-left">
            <li className="flex items-start gap-3"><Check className="text-green-600 mt-1" />Verified, ready-to-book families</li>
            <li className="flex items-start gap-3"><Check className="text-green-600 mt-1" />Light admin help: intake forms, scheduling</li>
            <li className="flex items-start gap-3"><Check className="text-green-600 mt-1" />No contracts — pay only when we send you patients</li>
          </ul>
          <div className="mt-10">
            <button
              onClick={onApplyClick}
              className="bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105"
            >
              💬 Join the Referral Network
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForSpeechAndPsychProviders;