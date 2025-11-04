// app/components/FeaturedTherapists.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

// UPDATED: Suffixes removed from names for a cleaner look
const speechTherapistsData = [
  {
    imageSrc: '/speech-therapists/michelle-mcGuinness.jpeg',
    name: 'Michelle McGuinness',
    specialty: 'Speech-Language Pathologist',
    rating: 4.98,
    reviews: 95,
    
    highlights: ['Articulation Therapy', 'Language Delays', 'Telehealth Certified'],
   
  },
  {
    imageSrc: '/speech-therapists/natalie-zorrilla.jpg',
    name: 'Natalie Zorrilla',
    specialty: 'Pediatric Speech Therapist',
    rating: 4.95,
    reviews: 112,
    
    highlights: ['Early Intervention', 'Stuttering Specialist',],
    
  },
  {
    imageSrc: '/speech-therapists/rebecca-bequer.png',
    name: 'Rebecca Bequer',
    specialty: 'Speech-Language Pathologist',
    rating: 4.99,
    reviews: 131,
    
    highlights: ['Feeding Therapy', 'Excellent wait time', 'Highly recommended'],
   
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

export default function FeaturedTherapists() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#103040]">Featured Speech Therapists</h2>
          <a href="#" className="text-green-700 font-semibold underline underline-offset-4 hover:text-green-800 transition-colors">
            See all (150+)
          </a>
        </div>

        {/* Responsive Grid for Therapist Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {speechTherapistsData.map((therapist, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col"
              variants={cardVariants}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={therapist.imageSrc}
                  alt={`Photo of ${therapist.name}`}
                  width={80}
                  height={80}
                  // UPDATED: Added 'object-cover' for uniform image scaling
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{therapist.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-bold text-gray-700">{therapist.rating}</span>
                    <span className="text-sm text-gray-500">· {therapist.reviews} reviews</span>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              {/* Card Body */}
              <div className="flex-grow">
                
                <div className="text-sm text-gray-500 space-x-2 mb-4">
                  {therapist.highlights.join(' · ')}
                </div>
               
              </div>

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