// app/learn/page.tsx
import BlogHero from "../components/BlogHero";
import LatestPosts from "../components/LatestPosts";
import BlogCta from "../components/BlogCta"; // Import the new CTA component
import type { Metadata } from 'next';
import JoinNetwork from "../components/JoinNetwork";

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
      <LatestPosts />
      <BlogCta /> 
      <JoinNetwork />
    </main>
  );
}