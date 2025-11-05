// app/components/ContactPage.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import HubSpotEmbedForm from './HubSpotEmbedForm'; // Import the HubSpot component

const socialLinks = [
    { href: 'https://www.instagram.com/wellchildinc/', icon: <FaInstagram size={24} /> },
    { href: 'https://web.facebook.com/wellchildinc?_rdc=1&_rdr#', icon: <FaFacebook size={24} /> },
    { href: 'https://www.linkedin.com/company/98408121/admin/dashboard/', icon: <FaLinkedin size={24} /> },
];

const benefits = [
  'Verified and licensed providers',
  'Fast response within 24–48 hours',
  'In-network and private-pay options',
  'Parent-focused support every step of the way'
];

export default function ContactPage() {
  // UPDATED: Replaced the old form ID with the new one your client provided.
  const hubspotPortalId = "47285637";
  const hubspotFormId = "16e93979-c47d-4d96-8dc7-2da00ffaf84d";

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">

          {/* Left Column: Form and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">Contact Us</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fill out the quick form below and our team will match you with the right provider and contact you within 1–2 business days.
            </p>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-700">Need Help Sooner? Contact us at:</h3>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:info@wellchildinc.com" className="text-green-700 hover:underline">info@wellchildinc.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:754-300-0549" className="text-green-700 hover:underline">754-300-0549</a></p>
              </div>
              <div className="flex items-center space-x-5 mt-4">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="text-gray-500 hover:text-green-700 transition-colors">
                        {social.icon}
                    </a>
                ))}
            </div>
            </div>

            <div className="mt-10 max-w-lg mx-auto lg:mx-0">
              <HubSpotEmbedForm portalId={hubspotPortalId} formId={hubspotFormId} />
            </div>

          </motion.div>

          {/* Right Column: Benefits and Image */}
          <motion.div
            className="lg:mt-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#F1F5FF] p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">Why Families Choose WellChild</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/family.png"
                alt="Happy family"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}