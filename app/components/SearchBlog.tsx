// app/components/SearchBlog.tsx
'use client';

import React from 'react';
import { Search } from 'lucide-react';

type SearchBlogProps = {
  onSearchChange: (query: string) => void;
};

export default function SearchBlog({ onSearchChange }: SearchBlogProps) {
  return (
    <section className="bg-white pt-12 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles by title, category, or author..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:ring-2 focus:ring-[#51AFBA] focus:border-[#51AFBA] transition-colors"
          />
          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}