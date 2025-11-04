// app/components/FeaturedPsychologists.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

// UPDATED: Suffixes removed from names for a cleaner look
const psychologistsData = [
  {
    imageSrc: '/clinical-psychologists/karin-adolff.png', 
    name: 'Dr. Karin Adolff',
    specialty: 'Clinical Psychologist',
    rating: 4.96,
    reviews: 124,
    location: 'Jacksonville, FL',
    highlights: ['Autism & ADHD Evaluations', 'Anxiety Specialist', 'Telehealth available'],
    nextAvailable: 'Wed, Dec 6',
  },
  {
    imageSrc: '/clinical-psychologists/melissa-santiago.jpeg',
    name: 'Dr. Melissa Santiago',
    specialty: 'Child Psychologist',
    rating: 4.92,
    reviews: 105,
    location: 'Fort Lauderdale, FL',
    highlights: ['Play Therapy', 'Learning Disabilities', 'Family Counseling'],
    nextAvailable: 'Thu, Dec 7',
  },
  {
    imageSrc: '/clinical-psychologists/sharon-pedrosa.png',
    name: 'Dr. Sharon Pedrosa',
    specialty: 'Clinical Psychologist',
    rating: 4.97,
    reviews: 140,
    location: 'St. Petersburg, FL',
    highlights: ['Cognitive Behavioral (CBT)', 'Excellent wait time', 'Highly recommended'],
    nextAvailable: 'Mon, Dec 11',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedPsychologists() {
  return (
    <section className="bg-[#F1F5FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Responsive Grid for Therapist Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {psychologistsData.map((psychologist, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col"
              variants={cardVariants}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={psychologist.imageSrc}
                  alt={`Photo of ${psychologist.name}`}
                  width={80}
                  height={80}
                  // UPDATED: Added 'object-cover' for uniform image scaling
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{psychologist.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-bold text-gray-700">{psychologist.rating}</span>
                    <span className="text-sm text-gray-500">· {psychologist.reviews} reviews</span>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

             

              {/* Card Footer/Button */}
              <div className="mt-6">
                <Link 
                  href="/contact" 
                  className="block text-center w-full bg-[#FFDE59] text-[#33343B] font-bold py-3 rounded-lg hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  Book online
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}