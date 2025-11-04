// app/testimonials/page.tsx
import UnderConstructionPage from "../components/UnderConstructionPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Coming Soon',
  description: 'Our Testimonials page is currently under construction. Please check back soon for updates from WellChild Inc.',
  alternates: {
    canonical: '/testimonials',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function TestimonialsPage() {
  return (
    <main>
      <UnderConstructionPage />
    </main>
  );
}