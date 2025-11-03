// app/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin,FaInstagram,FaFacebook, } from "react-icons/fa";


// Data for links to keep the component clean
const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/learn', label: 'Learn' },
  { href: '/provider-referrals', label: 'Provider Referrals' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
];

const supportLinks = [
    { href: '/faq', label: 'FAQ\'s' },
];

const socialLinks = [
    { href: 'https://web.facebook.com/wellchildinc?_rdc=1&_rdr#', icon: <FaFacebook size={20} /> },
    { href: 'https://www.linkedin.com/company/98408121/admin/dashboard/', icon: <FaLinkedin size={20} /> },
    { href: 'https://www.instagram.com/wellchildinc/', icon: <FaInstagram size={20} /> },
];

const legalLinks = [
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f2] text-gray-700 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing on medium screens */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col items-start">
             <Image
                src="/logo/wellchild-logo.png" 
                alt="WellChild Logo"
                width={80}
                height={80}
              />
            <h3 className="text-2xl font-bold mt-4">WellChild Inc.</h3>
            <div className="flex items-center space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-6 mb-4 md:mb-0">
             {legalLinks.map(link => (
                 <Link key={link.label} href={link.href} className="hover:underline">
                    {link.label}
                 </Link>
             ))}
          </div>
          <p className="text-gray-500">
            WellChild© 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}