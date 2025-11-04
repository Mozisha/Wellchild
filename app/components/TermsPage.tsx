// app/components/TermsPage.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose lg:prose-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif text-center mb-8">Terms and Conditions</h1>
        <p className="text-center text-gray-500">Last updated: November 4, 2025</p>
        
        <p className="mt-8">
          Welcome to WellChild Inc. ("WellChild", "we", "us", or "our"). These Terms and Conditions govern your use of our website located at wellchildinc.com (the "Service") and form a binding contractual agreement between you, the user of the Service, and us.
        </p>

        <h2 className="mt-12">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>

        <h2 className="mt-12">2. Description of Service</h2>
        <p>
          WellChild is a platform that connects families with licensed and vetted pediatric care providers, including but not limited to ABA therapists, speech therapists, and clinical psychologists for evaluations and therapy ("Providers"). We are a directory and matching service; we do not provide medical or therapeutic services ourselves.
        </p>

        <h2 className="mt-12">3. No Medical Advice</h2>
        <p>
          The content on the Service, including text, graphics, images, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 className="mt-12">4. User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
        </p>

        <h2 className="mt-12">5. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of WellChild Inc. and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WellChild Inc.
        </p>
        
        <h2 className="mt-12">6. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by WellChild Inc. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
        </p>

        <h2 className="mt-12">7. Limitation Of Liability</h2>
        <p>
          In no event shall WellChild Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>

        <h2 className="mt-12">8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
        </p>

        <h2 className="mt-12">9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="mt-12">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at: <a href="mailto:info@wellchildinc.com" className="text-green-700 hover:underline">info@wellchildinc.com</a>.
        </p>


      </motion.div>
    </div>
  );
}