// app/components/HeroSection.tsx
'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation variants for Framer Motion
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function HeroSection() {
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const locations = ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Virtual'];
  const serviceTypes = ['Speech Therapy', 'ABA Therapy', 'Diagnostic Evaluation'];
  const paymentOptions = [
    'Private Pay (Concierge)',
    'Step Up Scholarship',
    'Aetna (commercial)',
    'Cigna',
    'Evernorth',
    'Optum',
    'United Healthcare',
    'Tricare',
    'Humana',
    'Florida Blue',
    'ComPsych',
    'ChampVa'
  ];

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[800px] md:min-h-[700px] flex items-center justify-center  text-[#FFFBF0] overflow-hidden" 
      style={{ 
        backgroundImage: "url('/super-child.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative z-10 flex flex-col w-full px-4 md:px-24">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-poppins text-4xl md:text-[59px] font-bold text-[#FFFBF0] md:leading-[65px] tracking-[-1.1px]"
        >
          YOUR CHILD DESERVES <br /> TO THRIVE
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-4 max-w-2xl font-lora text-lg md:text-2xl leading-snug md:leading-[35px]"
        >
          Autism & ADHD Evaluations, ABA Therapy, Speech Therapy, No Waitlist
        </motion.p>

        {/* Responsive Search Bar */}
        <div className="mt-8 w-full max-w-lg md:max-w-3xl bg-white shadow-lg rounded-2xl md:rounded-full p-4 md:p-2 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2 text-gray-500 font-poppins">
          {/* Location Dropdown */}
          <div className="relative w-full flex-1">
            <div
              onClick={() => toggleDropdown('location')}
              className="flex items-center justify-between md:border-r md:border-gray-300 px-4 py-2 cursor-pointer"
            >
              <span className={location || 'text-gray-500'}>{location || 'Location'}</span>
              <ChevronDown size={20} />
            </div>
            {openDropdown === 'location' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setOpenDropdown(null);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Service Type Dropdown */}
          <div className="relative w-full flex-1">
            <div
              onClick={() => toggleDropdown('service')}
              className="flex items-center justify-between md:border-r md:border-gray-300 px-4 py-2 cursor-pointer"
            >
              <span className={serviceType || 'text-gray-500'}>{serviceType || 'Service Type'}</span>
              <ChevronDown size={20} />
            </div>
            {openDropdown === 'service' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {serviceTypes.map((service) => (
                  <div
                    key={service}
                    onClick={() => {
                      setServiceType(service);
                      setOpenDropdown(null);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payment Option Dropdown */}
          <div className="relative w-full flex-1">
            <div
              onClick={() => toggleDropdown('payment')}
              className="flex items-center justify-between px-4 py-2 cursor-pointer"
            >
              <span className={paymentOption || 'text-gray-500'}>{paymentOption || 'Payment Option'}</span>
              <ChevronDown size={20} />
            </div>
            {openDropdown === 'payment' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {paymentOptions.map((payment) => (
                  <div
                    key={payment}
                    onClick={() => {
                      setPaymentOption(payment);
                      setOpenDropdown(null);
                    }}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* UPDATED: Added cursor-pointer and hover scale effect */}
          <button className="w-full md:w-auto bg-[#FEC102] text-[#33343B] rounded-full px-8 py-3 font-poppins font-semibold text-sm hover:bg-[#ffca2a] transition-transform duration-200 hover:scale-105 cursor-pointer">
            Send
          </button>
        </div>

        <p className="mt-6 text-sm text-[#FFFBF0] opacity-90 font-lora">
          Cant find your insurance or need faster access?{' '}
          <a href="#" className="underline">
            Learn about our private concierge services
          </a>
        </p>
      </div>
    </section>
  );
}