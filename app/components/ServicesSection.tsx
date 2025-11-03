// app/components/ServicesSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Data for the service cards. Easy to add, remove, or edit services here.
const servicesData = [
  {
    imageSrc: '/child-1.png',
    title: 'ABA Therapy',
    description: 'Personalized behavior support to help your child build skills, confidence, and independence.',
  },
  {
    imageSrc: '/child-2.png',
    title: 'Clinical Psychology',
    description: 'Comprehensive evaluations for autism, ADHD, anxiety, giftedness, and learning differences, all in one place.',
  },
  {
    imageSrc: '/child-3.png',
    title: 'Speech Therapy',
    description: 'Speech and language therapy focused on improving communication, clarity, and confidence.',
  },
];

// Animation variants for the container to stagger the cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section className="bg-[#F1F5FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-inter text-[#103040] mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Top WellChild Services
        </motion.h2>

        {/* Responsive Grid for Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} className="flex flex-col items-center" variants={cardVariants}>
              {/* Image Container */}
              <div className="w-full aspect-square max-w-sm md:max-w-none overflow-hidden mb-6">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}