// app/learn/page.tsx
// This page can now be a simple server component again.
import BlogHero from "../components/BlogHero";
import JoinNetwork from "../components/JoinNetwork";
import LatestPosts from "../components/LatestPosts";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Learning Center',
  description: 'Explore expert tips, parent guides, and developmental insights from the pediatric specialists at WellChild.',
  alternates: {
    canonical: '/learn',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function LearnPage() {
  return (
    <main>
      <BlogHero />
      {/* The LatestPosts component now handles all of its own logic */}
      <LatestPosts />
      <JoinNetwork/>
    </main>
  );
}