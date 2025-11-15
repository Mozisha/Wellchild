import ProvidersPage from "../components/ProvidersPage";
import type { Metadata } from 'next';
import UnderConstructionPage from "../components/UnderConstructionPage";

export const metadata: Metadata = {
  title: 'For Providers | Join the WellChild Network',
  description: 'Join Florida’s leading pediatric network for developmental care. WellChild connects ABA, Speech, and Psychology providers with qualified families, simplifying referrals, billing, and practice growth.',
  alternates: {
    canonical: '/providers',
  },
  keywords: [
    'pediatric provider network',
    'aba provider partnership',
    'speech therapy referrals',
    'clinical psychologist referrals',
    'join pediatric network florida',
    'grow my private practice',
  ],
};

export default function ForProviders() {
  return (
    // <UnderConstructionPage/>
    <ProvidersPage/>
  );
}