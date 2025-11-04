// app/components/CookiePolicyPage.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif text-center mb-8">Cookie Policy</h1>
        <p className="text-center text-gray-500">Last updated: November 4, 2025</p>
        
        <p className="mt-8">
          This Cookie Policy explains how WellChild Inc. ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at wellchildinc.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <h2 className="mt-12">1. What are cookies?</h2>
        <p>
          A cookie is a small data file that is placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>

        <h2 className="mt-12">2. Why do we use cookies?</h2>
        <p>
          We use cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website. For example, we use a cookie (via `sessionStorage`) to ensure our newsletter popup only appears once per visit.
        </p>

        <h2 className="mt-12">3. What types of cookies do we use?</h2>
        <ul>
            <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential to provide you with services available through our Website and to enable you to use some of its features.
            </li>
            <li>
                <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our Website. This enables us to remember your preferences (for example, not showing you a popup you have already seen).
            </li>
            <li>
                <strong>Analytics and Performance Cookies:</strong> These cookies are used to collect information about traffic to our Website and how users use the Website. Vercel, our hosting provider, may collect analytics to help us understand website traffic and performance.
            </li>
            <li>
                <strong>Third-Party Cookies:</strong> Our embedded HubSpot forms may place cookies on your device to help their forms function correctly and to track user interactions.
            </li>
        </ul>
        
        <h2 className="mt-12">4. How can you control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. Please consult your browser's help documentation for up-to-date information.
        </p>
        
        <h2 className="mt-12">5. Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>

        <h2 className="mt-12">6. Where can you get further information?</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@wellchildinc.com" className="text-green-700 hover:underline">info@wellchildinc.com</a>.
        </p>

      </motion.div>
    </div>
  );
}