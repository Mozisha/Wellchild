// app/components/BlogHero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Images for the collage, same as the blog post page
const collageImages = [
  { src: '/siblings.png', alt: 'Two young siblings smiling' },
  { src: '/babygirl.png', alt: 'A young girl smiling' },
  { src: '/goofy.png', alt: 'A young boy thinking' },
  { src: '/happy-child.png', alt: 'An excited child in a purple hat' },
];

export default function BlogHero() {
  return (
    // UPDATED: New section structure with split background
    <section className="bg-[#f4f4f2] pt-32 pb-16 relative">
      <div className="absolute top-0 left-0 w-full h-[70%] bg-[#51AFBA] overflow-hidden">
        {/* UPDATED: Three animated circles with faster animations */}
        <motion.div 
          className="absolute top-[-50px] left-[15%] w-48 h-48 bg-[#FCC0C5] rounded-full opacity-70"
          animate={{ scale: [1, 1.05, 1], y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-10 right-24 w-32 h-32 bg-[#F2E2FF] rounded-full opacity-70"
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-20 h-20 bg-[#D1E8F6] rounded-full opacity-70"
          animate={{ y: [0, 10, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPDATED: Content layout to match Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
          <h1 className="text-6xl md:text-8xl font-serif">
            Blog
          </h1>
          <p className="text-lg text-white/90 max-w-md md:ml-auto">
            Expert tips, parent guides, and developmental insights from pediatric specialists. Explore articles created by our licensed clinicians to help your child thrive.
          </p>
        </div>

        {/* UPDATED: Using the four-image collage */}
        <div className="mt-12  shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {collageImages.map((image, index) => (
              <div key={index} className="aspect-[3/4] relative overflow-hidden ">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}