'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Balloon from './Balloon'; // Make sure the path is correct

interface FinalCtaProps {
  onApplyClick: () => void;
}

// Reusable animation variants
const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const FinalCta: React.FC<FinalCtaProps> = ({ onApplyClick }) => {
  return (
    <section className="relative bg-[#1E606A] py-28 text-white overflow-hidden">
      {/* --- BALLOON BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Balloon color="bg-[#FFDE59]" initialY={100} initialX={-50} duration={15} delay={0} className="left-[10%]" />
        <Balloon color="bg-[#FCC0C5]" initialY={150} initialX={0} duration={20} delay={2} className="left-[30%] hidden md:block" />
        <Balloon color="bg-[#51AFBA]" initialY={120} initialX={50} duration={18} delay={5} className="right-[10%]" />
        <Balloon color="bg-[#FFDE59]" initialY={200} initialX={0} duration={22} delay={7} className="right-[35%] hidden lg:block" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={popIn} className="text-4xl md:text-5xl font-serif">
            Let's Simplify Pediatric Care — Together.
          </motion.h2>

          <motion.p variants={popIn} className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
            We're currently onboarding new ABA RCM partners and referral-only Speech & Psych providers across Florida. Join today to start receiving pre-qualified families within weeks.
          </motion.p>
          
          <motion.div variants={popIn} className="mt-10">
            <motion.button
              onClick={onApplyClick}
              className="bg-[#FFDE59] text-[#33343B] font-bold py-4 px-10 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              🌟 Apply Now — Limited RCM Spots Available
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;