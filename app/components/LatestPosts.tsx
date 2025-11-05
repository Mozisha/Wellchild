// app/components/LatestPosts.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { posts } from '../learn/data'; // Import the single source of truth

const POSTS_PER_PAGE = 5;

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Calculate the posts for the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const featuredPost = currentPosts[0];
  const otherPosts = currentPosts.slice(1);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#103040] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Tag size={16} />
            <span>OUR BLOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#103040]">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert insights and practical advice from our team of pediatric specialists to support your child's developmental journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              className="lg:col-span-2"
              key={featuredPost.slug} // Add key for re-animation on page change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/learn/${featuredPost.slug}`}>
                <div className="rounded-3xl overflow-hidden mb-6 h-96 relative cursor-pointer">
                  <Image src={featuredPost.heroImage} alt={featuredPost.title} layout="fill" objectFit="cover" />
                </div>
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-2"><Calendar size={16} /><span>{featuredPost.date}</span></div>
                <div className="flex items-center gap-2"><Tag size={16} /><span className="uppercase">{featuredPost.category}</span></div>
              </div>
              <Link href={`/learn/${featuredPost.slug}`}>
                <h3 className="text-3xl font-bold text-[#103040] mb-4 hover:text-green-700 transition-colors cursor-pointer">{featuredPost.title}</h3>
              </Link>
              <p className="text-gray-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
              <Link href={`/learn/${featuredPost.slug}`}>
                <button className="bg-[#FEC102] text-[#103040] font-bold py-3 px-8 rounded-full hover:bg-[#ffdb4d] transition-colors cursor-pointer">Read More</button>
              </Link>
            </motion.div>
          )}

          {/* Side Post List */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {otherPosts.map((post) => (
              <Link href={`/learn/${post.slug}`} key={post.slug} className="flex items-center gap-4 group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <Image src={post.heroImage} alt={post.title} layout="fill" objectFit="cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1"><Calendar size={14} /><span>{post.date}</span></div>
                  <h4 className="font-bold text-lg text-[#103040] group-hover:text-green-800 transition-colors leading-tight">{post.title}</h4>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Pagination Buttons */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} />
            Previous
          </button>
          <span className="text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}