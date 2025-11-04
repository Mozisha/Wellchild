// app/components/PrivacyPolicyPage.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif text-center mb-8">Privacy Policy</h1>
        <p className="text-center text-gray-500">Last updated: November 4, 2025</p>
        
        <p className="mt-8">
          WellChild Inc. ("us", "we", or "our") operates the wellchildinc.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>

        <h2 className="mt-12">1. Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <h3>Types of Data Collected</h3>
        <ul>
          <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: email address, first name and last name, phone number, and information about your child's needs.</li>
          <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and other diagnostic data.</li>
          <li><strong>Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
        </ul>

        <h2 className="mt-12">2. Use of Data</h2>
        <p>
          WellChild Inc. uses the collected data for various purposes:
        </p>
        <ul>
            <li>To provide and maintain our Service</li>
            <li>To match you with suitable pediatric care providers</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
        </ul>

        <h2 className="mt-12">3. Disclosure Of Data</h2>
        <p>
          We may share your information with the pediatric care providers in our network for the sole purpose of scheduling an appointment or evaluation. We will not sell or rent your personal information to third parties. We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation.
        </p>

        <h2 className="mt-12">4. Security Of Data</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>
        
        <h2 className="mt-12">5. Your Data Protection Rights</h2>
        <p>
          You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
        </p>

        <h2 className="mt-12">6. Children's Privacy</h2>
        <p>
          Our Service is intended for use by parents and guardians. We do not knowingly collect personally identifiable information from anyone under the age of 18 without parental consent. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
        </p>

        <h2 className="mt-12">7. Changes To This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="mt-12">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@wellchildinc.com" className="text-green-700 hover:underline">info@wellchildinc.com</a>.
        </p>

      </motion.div>
    </div>
  );
}