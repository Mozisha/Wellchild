// app/learn/page.tsx
import UnderConstructionPage from "../components/UnderConstructionPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Coming Soon',
  description: 'This page is currently under construction. Please check back soon for updates from WellChild Inc.',
  alternates: {
    canonical: '/learn',
  },
  // We tell search engines not to index this temporary page
  robots: {
    index: false,
    follow: false,
  }
};

export default function LearnPage() {
  return (
    <main>
      <UnderConstructionPage />
    </main>
  );
}