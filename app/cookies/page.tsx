// app/cookies/page.tsx
import CookiePolicyPage from "../components/CookiePolicyPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about the cookies WellChild Inc. uses on its website to enhance user experience and provide analytics.',
  alternates: {
    canonical: '/cookies',
  },
  robots: {
    index: false,
  }
};

export default function Cookies() {
  return (
    <main>
      <CookiePolicyPage />
    </main>
  );
}