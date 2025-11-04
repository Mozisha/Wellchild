// app/terms/page.tsx
import TermsPage from "../components/TermsPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the Terms and Conditions for using the WellChild Inc. website and services. Understand your rights and responsibilities as a user.',
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: false, 
  }
};

export default function TermsAndConditions() {
  return (
    <main>
      <TermsPage />
    </main>
  );
}