// app/components/FeaturedTherapists.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

// Data for the therapist cards
const therapistsData = [
  {
    imageSrc: '/therapist-1.png',
    name: 'Dr. Gabriela Lopez Cohen, MD',
    specialty: 'Primary Care Doctor',
    rating: 4.99,
    reviews: 81,
    location: 'Haines City, FL',
    highlights: ['New patient appointments', 'Excellent wait time', 'Highly recommended'],
    nextAvailable: 'Tue, Nov 25',
  },
  {
    imageSrc: '/therapist-2.png',
    name: 'Dr. Nadia Taylor, MD',
    specialty: 'Primary Care Doctor',
    rating: 4.76,
    reviews: 152,
    location: 'Merritt Island, FL',
    highlights: ['New patient appointments', 'Excellent wait time', 'Highly recommended'],
    nextAvailable: 'Mon, Nov 3',
  },
  {
    imageSrc: '/therapist-3.png',
    name: 'Dr. Zaeem Qureshi, DO',
    specialty: 'Primary Care Doctor',
    rating: 4.89,
    reviews: 143,
    location: 'Clermont, FL',
    highlights: ['New patient appointments', 'Excellent wait time', 'Highly recommended'],
    nextAvailable: 'Fri, Nov 7',
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
          <h2 className="text-4xl md:text-5xl font-serif text-[#103040]">Featured ABA therapists</h2>
          <Link href="/contact" className="text-green-700 font-semibold underline underline-offset-4 hover:text-green-800 transition-colors">
            See all (300+)
          </Link>
        </div>

        {/* Responsive Grid for Therapist Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {therapistsData.map((therapist, index) => (
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
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{therapist.name}</h3>
                  <p className="text-sm text-gray-600">{therapist.specialty}</p>
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
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                  <MapPin size={16} />
                  <span>{therapist.location}</span>
                </div>
                <div className="text-sm text-gray-500 space-x-2 mb-4">
                  {therapist.highlights.join(' · ')}
                </div>
                <p className="text-sm text-gray-800 font-semibold">
                  Next available on {therapist.nextAvailable}
                </p>
              </div>

              {/* Card Footer/Button */}
              <div className="mt-6">
                {/* UPDATED: Changed button to Link component */}
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