// app/components/BabiesSlider.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// An array of baby and child images.
const babyImages = [
  { src: '/goofy.png', alt: 'Child wearing glasses' },
  { src: '/twobabies.png', alt: 'A child smiling' },
  { src: '/babygirl.png', alt: 'A young girl covering her eyes playfully' },
  { src: '/siblings.png', alt: 'Two young siblings posing together' },
  { src: '/happy-child.png', alt: 'A happy child in a yellow hard hat' },
  { src: '/child-1.png', alt: 'Child playing with blocks' },
  { src: '/baby.jpg', alt: 'A baby looking up' },
  { src: '/kids.jpg', alt: 'Two children playing' },
];

export default function BabiesSlider() {
  return (
    // UPDATED: Added overflow-hidden to prevent the arrows from extending the viewport
    <section className="bg-[#f4f4f2] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={10} // Small gap between images
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.babies-slider-next',
            prevEl: '.babies-slider-prev',
          }}
          breakpoints={{
            // Responsive breakpoints
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {babyImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="babies-slider-prev absolute top-1/2 -left-4 -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white rounded-full p-2 shadow-md">
          <ChevronLeft className="text-gray-800 h-6 w-6" />
        </div>
        <div className="babies-slider-next absolute top-1/2 -right-4 -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white rounded-full p-2 shadow-md">
          <ChevronRight className="text-gray-800 h-6 w-6" />
        </div>
      </div>
    </section>
  );
}