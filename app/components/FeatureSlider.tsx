// app/components/FeatureSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Array of features to display in the slider
const features = [
  { text: 'Instant HSA/FSA Booking' },
  { text: 'Instant Private Pay Booking' },
  { text: '2X Faster Evaluation and Therapy Scheduling' },
  { text: 'Licensed Board Certificate Clinicians' },
  { text: 'HIPAA Compliant' },
  { text: '4.9 ⭐️ Parents Experience' },
];

export default function FeatureSlider() {
  return (
    <section className="bg-[#F1F5FF] ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 relative py-8">
        {/* Navigation Buttons - Positioned to align with content */}
        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 z-10 cursor-pointer bg-gray-500 hover:bg-gray-600 transition-colors rounded-full p-1.5">
          <ChevronLeft className="text-white h-5 w-5" />
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 z-10 cursor-pointer bg-gray-500 hover:bg-gray-600 transition-colors rounded-full p-1.5">
          <ChevronRight className="text-white h-5 w-5" />
        </div>

        {/* Swiper Container with padding for arrows */}
        <div className="px-8 sm:px-12">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            // className="!pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center  ">
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <Image 
                      src="/logoslider.svg" 
                      alt="Feature icon" 
                      width={28} 
                      height={28}
                      className="flex-shrink-0"
                    />
                    <span className="font-inter font-bold   text-[#103040] leading-[140%]">
                      {feature.text}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination container */}
        <div className="swiper-pagination-custom text-center "></div>
      </div>
    </section>
  );
}