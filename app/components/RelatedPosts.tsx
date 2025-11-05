// app/components/RelatedPosts.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { posts } from '../learn/data'; // UPDATED: Import the single source of truth

// This component can receive the slug of the current post to avoid showing it in the related list
export default function RelatedPosts({ currentPostSlug }: { currentPostSlug?: string }) {
  // Filter out the current post and take the first 5 others
  const relatedPostsData = posts.filter(post => post.slug !== currentPostSlug).slice(0, 5);

  const borderColors = ['bg-[#FFD483]', 'bg-[#FEF14B]', 'bg-[#4EB0B9]', 'bg-[#FCC0C5]', 'bg-[#4090B3]'];

  return (
    <section className="bg-[#f4f4f2] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#103040]">
            Related Blog
          </h2>
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-700 font-semibold transition-transform duration-200 hover:scale-105 cursor-pointer">
            All Topics
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Responsive Grid for Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {relatedPostsData.map((post, index) => (
            <Link href={`/learn/${post.slug}`} key={post.slug} className="block group">
              <div className="flex flex-col h-full">
                {/* Image Container with Colored Border */}
                <div className={`${borderColors[index % borderColors.length]} p-4 rounded-2xl shadow-md transition-shadow group-hover:shadow-xl`}>
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      // UPDATED: Use the correct 'heroImage' property
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
                  {/* UPDATED: Use the 'category' property */}
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">{post.category}</p>
                  {/* UPDATED: Use the 'title' property */}
                  <h4 className="mt-2 font-bold text-gray-800 leading-tight group-hover:text-[#51AFBA] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}