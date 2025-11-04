// app/about/page.tsx
import UnderConstructionPage from "../components/UnderConstructionPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Coming Soon',
  description: 'Our About Us page is currently under construction. Please check back soon for updates from WellChild Inc.',
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function AboutPage() {
  return (
    <main>
      <UnderConstructionPage />
    </main>
  );
}