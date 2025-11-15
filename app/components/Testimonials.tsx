'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Providers Love Working With WellChild</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <p className="text-lg text-gray-700 italic">"WellChild completely took billing off my plate — I get paid faster and spend more time with clients."</p>
            <p className="mt-4 font-bold text-gray-800">— Dr. J. Lopez, BCBA</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <p className="text-lg text-gray-700 italic">"I started getting quality referrals within two weeks. Parents were already pre-screened and ready to start."</p>
            <p className="mt-4 font-bold text-gray-800">— Maria G., Speech-Language Pathologist</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap"
        >
          <div className="flex items-center gap-3 bg-[#F1F5FF] px-4 py-2 rounded-full font-semibold text-gray-700">
            <Star className="text-yellow-500 fill-current" />Serving 500+ Florida Families
          </div>
          <div className="flex items-center gap-3 bg-[#F1F5FF] px-4 py-2 rounded-full font-semibold text-gray-700">
            <Star className="text-yellow-500 fill-current" />Average Provider Satisfaction: 4.9 / 5
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;