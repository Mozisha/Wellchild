'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface ForAbaProvidersProps {
  onApplyClick: () => void;
}

const ForAbaProviders: React.FC<ForAbaProvidersProps> = ({ onApplyClick }) => {
  return (
    <section className="bg-[#f4f4f2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-semibold text-[#1E606A]">FOR ABA PROVIDERS</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif text-gray-800">Full  Partnership for ABA Providers</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We manage your back office so you can focus 100% on therapy.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <Check className="text-green-600" /> What We Handle
            </h3>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1" />Billing, claim submission & collections</li>
              <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1" />Scheduling & intake management</li>
              <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1" />Insurance credentialing & verification</li>
              <li className="flex items-start gap-3"><Users size={20} className="text-[#51AFBA] mt-1" />Parent coordination & reminders</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">💡 Your Focus</h3>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1" />Delivering high-quality clinical care</li>
              <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1" />Supervising therapists & improving outcomes</li>
              <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1" />Growing your impact</li>
              <li className="flex items-start gap-3"><Briefcase size={20} className="text-[#51AFBA] mt-1" />Client retention & quality assurance</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <p className="text-xl font-semibold text-gray-700 italic">"Your team, your patients — our systems."</p>
          <button
            onClick={onApplyClick}
            className="mt-6 bg-[#FFDE59] text-[#33343B] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105"
          >
             Apply as a Partner
          </button>
          <p className="mt-4 text-sm text-red-600 font-semibold">Currently onboarding 5 new ABA partners across Florida this quarter.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForAbaProviders;