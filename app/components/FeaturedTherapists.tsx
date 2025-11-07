// app/components/FeaturedTherapists.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

// UPDATED: Names now include correct professional credentials
const speechTherapistsData = [
  {
    imageSrc: '/speech-therapists/michelle-mcGuinness.jpeg',
    name: 'Michelle McGuinness, M.A., CCC SLP',
    specialty: 'Speech-Language Pathologist',
    rating: 4.98,
    location: 'Miami, FL',
    highlights: ['Articulation Therapy', 'Language Delays', 'Telehealth Certified'],
    nextAvailable: 'Tue, Nov 28',
  },
  {
    imageSrc: '/speech-therapists/natalie-zorrilla.jpg',
    name: 'Natalie Zorrilla, M.A., CCC SLP',
    specialty: 'Pediatric Speech Therapist',
    rating: 4.95,
    location: 'Orlando, FL',
    highlights: ['Early Intervention', 'Stuttering Specialist', 'Bilingual Services'],
    nextAvailable: 'Wed, Nov 29',
  },
  {
    imageSrc: '/speech-therapists/rebecca-bequer.png',
    name: 'Rebecca Bequer, M.A., CCC SLP',
    specialty: 'Speech-Language Pathologist',
    rating: 4.99,
    location: 'Tampa, FL',
    highlights: ['Feeding Therapy', 'Excellent wait time', 'Highly recommended'],
    nextAvailable: 'Fri, Dec 1',
  },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FeaturedTherapists() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#103040]">Featured Speech Therapists</h2>
         
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {speechTherapistsData.map((therapist, index) => (
            <motion.div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col" variants={cardVariants}>
              <div className="flex items-center gap-4 mb-4">
                <Image src={therapist.imageSrc} alt={`Photo of ${therapist.name}`} width={80} height={80} className="rounded-full object-cover"/>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{therapist.name}</h3>
                  {/* <p className="text-sm text-gray-600">{therapist.specialty}</p> */}
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-bold text-gray-700">{therapist.rating}</span>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              {/* <div className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-3"><MapPin size={16} /><span>{therapist.location}</span></div>
                <div className="text-sm text-gray-500 space-x-2 mb-4">{therapist.highlights.join(' · ')}</div>
                <p className="text-sm text-gray-800 font-semibold">Next available on {therapist.nextAvailable}</p>
              </div> */}
              <div className="mt-6">
                <Link href="/contact" className="block text-center w-full bg-[#FFDE59] text-[#33343B] font-bold py-3 rounded-lg hover:bg-[#ffe680] transition-transform duration-200 hover:scale-105 cursor-pointer">
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