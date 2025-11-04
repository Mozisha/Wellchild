// app/privacy/page.tsx
import PrivacyPolicyPage from "../components/PrivacyPolicyPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how WellChild Inc. collects, uses, and protects your personal information when you use our services. Your privacy is important to us.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: false, // It is common practice to noindex legal pages
  }
};

export default function Privacy() {
  return (
    <main>
      <PrivacyPolicyPage />
    </main>
  );
}