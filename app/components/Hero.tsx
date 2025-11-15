'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';

// Animation variants can be kept in a separate file if you prefer
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

interface HeroProps {
  onApplyClick: () => void;
}

// A simple component for a single bubble to keep the code clean
const Bubble = ({ size, position, color, duration, delay, className = '' }: {
  size: string;
  position: string;
  color: string;
  duration: number;
  delay: number;
  className?: string;
}) => (
  <motion.div
    className={`absolute ${size} ${position} ${color} rounded-full mix-blend-multiply filter blur-lg opacity-50 ${className}`}
    animate={{
      y: ["0%", "-20%", "0%"],
      x: ["0%", "5%", "-5%", "0%"],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="relative bg-[#F1F5FF] pt-32 pb-20 overflow-hidden">
      {/* --- FLOATING BUBBLES BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Bubble 1 */}
          <Bubble
            size="w-48 h-48 md:w-72 md:h-72"
            position="top-10 -left-20"
            color="bg-[#51AFBA]"
            duration={20}
            delay={0}
          />
          {/* Bubble 2 */}
          <Bubble
            size="w-32 h-32"
            position="top-1/2 left-1/4"
            color="bg-[#FFDE59]"
            duration={18}
            delay={2}
          />
          {/* Bubble 3 - Hidden on mobile */}
          <Bubble
            size="w-40 h-40"
            position="top-20 right-[-5%]"
            color="bg-[#FCC0C5]" // Soft pink accent
            duration={22}
            delay={3}
            className="hidden md:block"
          />
          {/* Bubble 4 */}
          <Bubble
            size="w-56 h-56"
            position="bottom-[-15%] right-[-10%]"
            color="bg-[#51AFBA]"
            duration={16}
            delay={1}
          />
           {/* Bubble 5 - Hidden on mobile */}
          <Bubble
            size="w-24 h-24"
            position="bottom-10 left-[5%]"
            color="bg-[#FCC0C5]"
            duration={25}
            delay={4}
            className="hidden md:block"
          />
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif text-[#103040] leading-tight">
            Join Florida's Leading Pediatric Network for Autism, ABA, and Developmental Care
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            WellChild connects you with qualified families, handles your admin, and helps you grow — so you can focus on delivering quality care.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10">
            <button
              onClick={onApplyClick}
              className="  font-bold py-3 px-8 rounded-full shadow-lg bg-[#FEC102] hover:bg-[#ffca2a] transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              Apply to Join the WellChild Network
            </button>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-12 flex justify-center items-center gap-x-6 gap-y-2 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18} />HIPAA-Compliant</div>
            <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18} />Founded by Licensed Clinicians</div>
            <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="text-green-600" size={18} />Featured in Orlando Voyager</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;