// app/provider-referrals/page.tsx
import UnderConstructionPage from "../components/UnderConstructionPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Provider Referrals | Coming Soon',
  description: 'Our Provider Referrals page is currently under construction. Please check back soon for updates from WellChild Inc.',
  alternates: {
    canonical: '/provider-referrals',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function ProviderReferralsPage() {
  return (
    <main>
      <UnderConstructionPage />
    </main>
  );
}