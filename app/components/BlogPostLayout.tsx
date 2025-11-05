// app/components/BlogPostLayout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import RelatedPosts from './RelatedPosts';

type BlogPostLayoutProps = {
  title: string;
  date: string;
  heroImage: string;
  children: React.ReactNode;
};

export default function BlogPostLayout({ title, date, heroImage, children }: BlogPostLayoutProps) {
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentPageUrl);
  const encodedTitle = encodeURIComponent(title);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

  return (
    <>
      <section className="bg-[#f4f4f2] pt-32 pb-16 relative">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[#51AFBA] overflow-hidden">
          <motion.div className="absolute -top-12 -left-12 w-48 h-48 bg-[#FCC0C5] rounded-full opacity-70" animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute top-10 right-24 w-32 h-32 bg-[#F2E2FF] rounded-full opacity-70" animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
          <motion.div className="absolute top-1/2 left-20 w-20 h-20 bg-[#D1E8F6] rounded-full opacity-70" animate={{ y: [0, 10, 0], x: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">{title}</h1>
            <div className="mt-4 flex justify-center items-center gap-2 text-sm text-white/80">
              <Calendar size={16} /><span>Published on {date}</span>
            </div>
          </div>
          
          <div className="mt-12 h-96 w-full relative">
            <Image src={heroImage} alt={title} layout="fill" objectFit="cover" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <main className="bg-[#f4f4f2] pt-16 pb-24">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          {/* UPDATED: Removed the 'prose' and 'lg:prose-xl' classes from this container */}
          <article className="mx-auto">
            {children}
          </article>

           <div className="mt-16 flex items-center gap-4 flex-wrap">
            <span className="font-bold text-lg">Share On:</span>
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FEC102] hover:bg-[#ffca2a] text-[#203A42] px-4 py-2 rounded-lg text-sm">Facebook</a>
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FEC102] hover:bg-[#ffca2a] text-[#203A42] px-4 py-2 rounded-lg text-sm">Twitter</a>
            <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FEC102] hover:bg-[#ffca2a] text-[#203A42] px-4 py-2 rounded-lg text-sm">LinkedIn</a>
            <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FEC102] hover:bg-[#ffca2a] text-[#203A42] px-4 py-2 rounded-lg text-sm">WhatsApp</a>
          </div>
        </div>
      </main>

      <RelatedPosts />
    </>
  );
}