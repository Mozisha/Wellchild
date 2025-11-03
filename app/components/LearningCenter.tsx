// app/components/LearningCenter.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Data for the learning center article cards
const articleData = [
  {
    imageSrc: '/smiling-mom.jpg',
    borderColor: 'border-[#FFD483]',
    category: 'TIPS AND RESOURCES',
    title: 'The Importance of Parent Involvement in Speech Therapy',
  },
  {
    imageSrc: '/hello.jpg',
    borderColor: 'border-[#FEF14B]',
    category: 'TIPS AND RESOURCES',
    title: 'How to Find a Speech Therapist for Your Child (or Yourself)',
  },
  {
    imageSrc: '/baby.jpg',
    borderColor: 'border-[#4EB0B9]',
    category: 'ONLINE SPEECH THERAPY',
    title: 'Does Online Speech Therapy Work as Well as In-Person Therapy?',
  },
  {
    imageSrc: '/kids.jpg',
    borderColor: 'border-[#FCC0C5]',
    category: 'SPEECH AND LANGUAGE ISSUES',
    title: 'How to Tell if Your Child Has a Speech Delay',
  },
  {
    imageSrc: '/happybaby.jpg',
    borderColor: 'border-[#4090B3]',
    category: 'TIPS AND RESOURCES',
    title: '10 Ways to Make Speech Therapy Practice Fun',
  },
];

export default function LearningCenter() {
  return (
    <section className="bg-[#f4f4f2] py-24 sm:py-32 relative">
      {/* Decorative Pink Circle */}
      <div className="absolute top-24 right-16 w-32 h-32 bg-[#f4bfc4] rounded-full hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">WellChild Learning Center</h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert tips, parent guides, and developmental insights from pediatric specialists.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Explore articles and resources created by our licensed clinicians to help your child thrive.
          </p>
        </div>

        {/* Slider Sub-header */}
        <div className="flex justify-between items-center mt-20 mb-8">
          <h3 className="text-3xl font-serif text-gray-800">Learn more about</h3>
          {/* UPDATED: Added cursor-pointer and hover effect */}
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold transition-transform duration-200 hover:scale-105 cursor-pointer">
            All Topics
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1.2}
            loop={true}
            navigation={{
              nextEl: '.learning-center-next',
              prevEl: '.learning-center-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {articleData.map((article, index) => (
              <SwiperSlide key={index}>
                <a href="#" className="block group">
                  <div className="bg-white  rounded-2xl shadow-md transition-shadow group-hover:shadow-xl">
                    <div className={`border-12 ${article.borderColor} rounded-xl overflow-hidden`}>
                      <Image
                        src={article.imageSrc}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full object-cover aspect-[4/3] transform transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{article.category}</p>
                      <h4 className="mt-2 font-bold text-gray-800 leading-tight">{article.title}</h4>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          {/* UPDATED: Added cursor-pointer and hover effect */}
          <div className="learning-center-prev absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block transition-transform duration-200 hover:scale-110 cursor-pointer">
            <ChevronLeft className="text-gray-700" />
          </div>
          {/* UPDATED: Added cursor-pointer and hover effect */}
          <div className="learning-center-next absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block transition-transform duration-200 hover:scale-110 cursor-pointer">
            <ChevronRight className="text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}