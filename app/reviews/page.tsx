// app/reviews/page.tsx
import UnderConstructionPage from "../components/UnderConstructionPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Coming Soon',
  description: 'Our Reviews page is currently under construction. Please check back soon for updates from WellChild Inc.',
  alternates: {
    canonical: '/reviews',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function ReviewsPage() {
  return (
    <main>
      <UnderConstructionPage />
    </main>
  );
}