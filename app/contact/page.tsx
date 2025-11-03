// app/contact/page.tsx
import ContactPage from "../components/ContactPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the WellChild team. Fill out our form to get matched with a provider, or contact us directly via email or phone for support.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}