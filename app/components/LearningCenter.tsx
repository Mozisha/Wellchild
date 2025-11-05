// app/components/LearningCenter.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { posts } from '../learn/data'; // Import the single source of truth

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function LearningCenter() {
  // This is the array of background colors for the card borders
  const borderColors = ['bg-[#FFD483]', 'bg-[#FEF14B]', 'bg-[#4EB0B9]', 'bg-[#FCC0C5]', 'bg-[#4090B3]'];

  return (
    <section className="bg-[#f4f4f2] py-24 sm:py-32 relative overflow-hidden">
      <motion.div 
        className="absolute top-24 right-16 w-32 h-32 bg-[#f4bfc4] rounded-full hidden lg:block"
        animate={{
          x: [0, 15, 0, -10, 0],
          y: [0, -10, 0, 15, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

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
          <Link href="/learn">
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold transition-transform duration-200 hover:scale-105 cursor-pointer">
              All Topics
              <ChevronDown size={16} />
            </button>
          </Link>
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
            {posts.map((post, index) => (
              <SwiperSlide key={post.slug}>
                {/* UPDATED: The entire card structure below now matches RelatedPosts.tsx */}
                <Link href={`/learn/${post.slug}`} className="block group">
                  <div className="flex flex-col h-full">
                    {/* Image Container with Colored Border */}
                    <div className={`${borderColors[index % borderColors.length]} p-4 rounded-2xl shadow-md transition-shadow group-hover:shadow-xl`}>
                      <div className="aspect-square relative overflow-hidden rounded-lg">
                        <Image
                          src={post.heroImage}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transform transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                    </div>
                    {/* Text Content */}
                    <div className="mt-4 px-1">
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{post.category}</p>
                      <h4 className="mt-2 font-bold text-gray-800 leading-tight group-hover:text-[#51AFBA] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="learning-center-prev absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block transition-transform duration-200 hover:scale-110 cursor-pointer">
            <ChevronLeft className="text-gray-700" />
          </div>
          <div className="learning-center-next absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md hidden md:block transition-transform duration-200 hover:scale-110 cursor-pointer">
            <ChevronRight className="text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}