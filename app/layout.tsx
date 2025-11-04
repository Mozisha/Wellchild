// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// SEO-Optimized Metadata
export const metadata: Metadata = {

  title: {
    default: 'WellChild | Pediatric ABA, Speech Therapy & ADHD/Autism Evaluations',
    template: `%s | WellChild`,
  },
  
  // Description: A concise, keyword-rich summary for search engine results.
  description: 'Find trusted pediatric specialists in Florida with no waitlist. WellChild connects families with licensed ABA therapists, speech therapists, and psychologists for autism/ADHD evaluations. Verify your insurance or book online today.',
  
  
  keywords: [
    'pediatric therapy',
    'child psychologist',
    'ABA therapy',
    'speech therapy',
    'autism evaluation',
    'ADHD testing',
    'developmental care',
    'Florida',
    'no waitlist',
    'pediatric specialists',
    'child therapist',
    'speech delay',
    'behavioral therapy',
    'occupational therapy',
  ],

  // Author & Creator Information
  authors: [{ name: 'WellChild Inc.' }],
  creator: 'WellChild Inc.',
  publisher: 'WellChild Inc.',

  // --- Open Graph Metadata (for social sharing on Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: 'WellChild | Top-Rated Pediatric Therapy & Evaluations in Florida',
    description: 'No waitlists. Access trusted ABA therapists, speech therapists, and clinical psychologists for your child. We make quality developmental care easy and accessible.',
    url: 'https://wellchildinc.com/',
    siteName: 'WellChild',
    images: [
      {
        url: '/wellchild-image.png',
        width: 459,
        height: 574,
        alt: 'A collage of happy, thriving children',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // --- Twitter Card Metadata (for sharing on Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'WellChild | Top-Rated Pediatric Therapy & Evaluations in Florida',
    description: 'No waitlists. Access trusted ABA therapists, speech therapists, and clinical psychologists for your child. We make quality developmental care easy and accessible.',
    images: ['/wellchild-image.png'], 
  },

  // --- Search Engine Indexing Rules ---
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // --- Canonical URL ---
  // Helps prevent duplicate content issues by specifying the "preferred" version of a page.
  metadataBase: new URL('https://wellchildinc.com'), 
  alternates: {
    canonical: '/',
  },

  // --- Favicon ---
  icons: {
    icon: '/logo/wellchild-logo.png',
    shortcut: '/logo/wellchild-logo.png',
    apple: '/logo/wellchild-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className='font-lora bg-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}