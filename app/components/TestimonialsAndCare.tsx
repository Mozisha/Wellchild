// app/components/TestimonialsAndCare.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Data for testimonials and care options
const testimonialsData = [
  {
    quote: "Through the WellChild Directory, I found a psychologist for an ADHD evaluation and later an occupational therapist, all in one platform. I love that it's made just for kids' services and that I could choose between insurance and concierge options. Everything felt organized, family-friendly, and trustworthy. Highly recommend it to any parent navigating this process for the first time!",
    name: "Sofia Menendez",
    role: "Parent",
    imageSrc: "/testimonial1.png"
  },
  {
    quote: "The support and communication are great, and payments have been smooth and timely. I love that the platform is exclusively pediatric-focused, because it means I'm connecting with families who truly need my services. It feels like being part of a mission-driven network rather than just another listing site.",
    name: "Barbara Roberts",
    role: "WellChild Provider",
    imageSrc: "/whitelady.png"
  },
];

const careOptionsData = [
  {
    iconSrc: '/insurance.png',
    title: "Major Insurance Plans",
    description: "We stay up-to-date on the latest research and therapeutic techniques to provide the best support possible.",
    isHighlighted: true,
  },
  {
    iconSrc: '/private-pay.png',
    title: "Private Pay",
    description: "We understand that everyone's mental health journey is unique. That's why we create customized treatment plans.",
    isHighlighted: false,
  },
  {
    iconSrc: '/hsa.png',
    title: "HSA/FSA",
    description: "Our services encompass not only therapy but also wellness strategies that promote emotional, physical, and social.",
    isHighlighted: false,
  },
];

export default function TestimonialsAndCare() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-x-hidden">
      {/* UPDATED: Pink circle now moves across the entire screen */}
      <motion.div
        className="absolute top-[60%] left-0 -translate-x-1/2 opacity-60"
        animate={{ 
          x: "100vw", // Animate its x position across the full viewport width
        }}
        transition={{
            duration: 25, // A slow, ambient duration for a full traversal
            repeat: Infinity,
            repeatType: "mirror", // "mirror" makes it go back and forth
            ease: "linear", // A constant speed feels more natural for this effect
        }}
      >
        <Image
          src="/circle.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
        />
      </motion.div>
      
      {/* This shape keeps its more subtle floating animation */}
      <motion.div
        className="absolute top-[55%] right-0 translate-x-1/3"
        animate={{
            y: ["0%", "-12%", "0%"],
            x: ["0%", "8%", "0%"],
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}
      >
        <Image
          src="/geometric.png"
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Part 1: Testimonials Slider */}
        <div className="bg-[#70BBD4] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold leading-tight">Why families & providers love wellchild</h2>
              <p className="mt-4 text-white/90">Real stories from parents and professionals who've found their perfect match through our network.</p>
              <Link href="/contact" className="mt-6 font-semibold underline underline-offset-4">See All Testimonials</Link>
            </div>

            {/* Right Slider */}
            <div className="lg:col-span-2 relative">
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={30}
                slidesPerView={1.2}
                breakpoints={{
                  1024: { slidesPerView: 2 }
                }}
                navigation={{ nextEl: '.swiper-button-next-custom-testimonial' }}
                loop={true}
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg h-full">
                      <Image src="/quote.png" alt="Quote" width={40} height={28} />
                      <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          src={testimonial.imageSrc} 
                          alt={`Photo of ${testimonial.name}`}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next-custom-testimonial absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-transform duration-200 hover:scale-110 cursor-pointer">
                <ChevronRight className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Accessing Care Section */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#33343B]">Accessing Care Should Be Easy</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We Offer Flexible Payment Options. We'll verify your benefits or show you transparent pricing upfront.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {careOptionsData.map((option, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg ${option.isHighlighted ? 'bg-[#4090B3] text-white' : 'bg-white text-gray-800'}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${option.isHighlighted ? 'bg-white/20' : 'bg-blue-100'}`}>
                <Image src={option.iconSrc} alt={`${option.title} icon`} width={32} height={32} />
              </div>
              <h3 className="mt-6 text-xl font-bold">{option.title}</h3>
              <p className={`mt-2 text-sm ${option.isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}