// app/components/LatestPosts.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { posts as allPosts } from '../learn/data'; // Import the single source of truth

const POSTS_PER_PAGE = 5;

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  // This effect filters the posts whenever the search query changes
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const results = allPosts.filter(post => 
      post.title.toLowerCase().includes(lowercasedQuery) ||
      post.category.toLowerCase().includes(lowercasedQuery) ||
      (post.author && post.author.toLowerCase().includes(lowercasedQuery)) ||
      post.excerpt.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPosts(results);
    setCurrentPage(1); // Reset to the first page on a new search
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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

        {/* Search Bar Section */}
        <div className="max-w-2xl mx-auto mt-12">
            <div className="relative">
            <input
                type="text"
                placeholder="Search articles..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:ring-2 focus:ring-[#51AFBA] focus:border-[#51AFBA] transition-colors"
            />
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <Search className="h-6 w-6 text-gray-400" />
            </div>
            </div>
        </div>

        {/* Conditional Rendering for Blog Grid or No Results */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
              {featuredPost && (
                <motion.div 
                  className="lg:col-span-2"
                  key={featuredPost.slug}
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

            {/* Pagination Buttons (only show if there are multiple pages) */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-4">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
                  <ChevronLeft size={20} /> Previous
                </button>
                <span className="text-gray-600 font-medium">Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
                  Next <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 mt-12">
            <h3 className="text-2xl font-semibold text-gray-700">No Articles Found</h3>
            <p className="mt-2 text-gray-500">Your search for "{searchQuery}" did not match any articles.</p>
          </div>
        )}
      </div>
    </section>
  );
}