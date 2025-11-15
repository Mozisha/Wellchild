'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

const WhyJoinWellChild: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Built by Clinicians, for Clinicians.</h2>
            <p className="mt-6 text-lg text-gray-600 italic border-l-4 border-[#FFDE59] pl-6">
              "As a Speech-Language Pathologist and mom, I know how time-consuming it is to manage clients, paperwork, and growth all at once. That's why I built WellChild — to simplify how developmental providers connect with families and run their practices."
            </p>
            <p className="mt-6 text-lg text-gray-600">We help:</p>
            <ul className="mt-4 space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Check className="text-[#51AFBA] mt-1 flex-shrink-0" />
                <span><strong>ABA providers</strong> offload billing, scheduling, and insurance headaches.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#51AFBA] mt-1 flex-shrink-0" />
                <span><strong>Speech and Psychology providers</strong> get qualified, pre-screened referrals.</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="#how-it-works" className="font-bold text-[#51AFBA] hover:underline text-lg">
                See How It Works 👉
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/provider-collage.png"
              alt="Clinician with a child"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinWellChild;