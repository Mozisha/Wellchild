'use client';

import Link from 'next/link';
import { ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchServices, fetchLocations, fetchPaymentOptions, Service, Location, PaymentOptionAPI } from '../services/api';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroSection() {
  // --- Data Fetching Hooks ---
  const { data: services = [], isLoading: isLoadingServices, isError: isErrorServices } = useQuery({ queryKey: ['services'], queryFn: fetchServices });
  const { data: locations = [] } = useQuery({ queryKey: ['locations'], queryFn: fetchLocations, staleTime: Infinity });
  const { data: paymentOptions = [] } = useQuery({ queryKey: ['paymentOptions'], queryFn: fetchPaymentOptions, staleTime: Infinity });

  // --- Local state to track the actual values for the URL ---
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('');
  const [selectedPaymentValue, setSelectedPaymentValue] = useState<string>('');
  // --- NEW: State to hold the specific insurance label ---
  const [selectedInsuranceLabel, setSelectedInsuranceLabel] = useState<string>('');

  // --- Local state for what's displayed in the UI ---
  const [locationDisplay, setLocationDisplay] = useState('');
  const [serviceDisplay, setServiceDisplay] = useState('');
  const [paymentDisplay, setPaymentDisplay] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    if (isLoadingServices) return;
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLocationSelect = (location: Location) => {
    setSelectedLocationId(location.id);
    setLocationDisplay(location.name);
    setOpenDropdown(null);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedServiceId(service.id);
    setServiceDisplay(service.name);
    setOpenDropdown(null);
  };
  
  // --- UPDATED: This handler now also captures the insurance label ---
  const handlePaymentSelect = (option: PaymentOptionAPI) => {
    setSelectedPaymentValue(option.value);
    setPaymentDisplay(option.label);
    // If the user selects an insurance option, we store its specific label.
    if (option.value === 'INSURANCE') {
      setSelectedInsuranceLabel(option.label);
    } else {
      // If they switch to a non-insurance option, we clear the label.
      setSelectedInsuranceLabel('');
    }
    setOpenDropdown(null);
  };

  const isButtonDisabled = isLoadingServices || isErrorServices || !selectedServiceId || !selectedLocationId || !selectedPaymentValue;

  // --- UPDATED: The URL now includes the insuranceLabel parameter ---
  const bookingUrl = `/book?serviceId=${selectedServiceId}&locationId=${selectedLocationId}&paymentOption=${selectedPaymentValue}&insuranceLabel=${encodeURIComponent(selectedInsuranceLabel)}`;

  return (
    <section 
      className="relative w-full h-screen min-h-[800px] md:min-h-[700px] flex items-center justify-center text-[#FFFBF0] overflow-hidden" 
      style={{ 
        backgroundImage: "url('/super-child.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="relative z-10 flex flex-col w-full px-4 md:px-24">
        <motion.h1 variants={textVariants} initial="hidden" animate="visible" className="font-poppins text-4xl md:text-[59px] font-bold text-[#FFFBF0] md:leading-[65px] tracking-[-1.1px]">
          YOUR CHILD DESERVES <br /> TO THRIVE
        </motion.h1>
        <motion.p variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="mt-4 max-w-2xl font-lora text-lg md:text-2xl leading-snug md:leading-[35px]">
          Autism & ADHD Evaluations, ABA Therapy, Speech Therapy, No Waitlist
        </motion.p>

        <div className="mt-8 w-full max-w-lg md:max-w-3xl bg-white shadow-lg rounded-2xl md:rounded-full p-4 md:p-2 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2 text-gray-500 font-poppins">
          
          <div className="relative w-full flex-1">
            <div onClick={() => toggleDropdown('location')} className="flex items-center justify-between md:border-r md:border-gray-300 px-4 py-2 cursor-pointer">
              <span className={locationDisplay ? 'text-gray-800' : ''}>{locationDisplay || 'Location'}</span>
              <ChevronDown size={20} />
            </div>
            {openDropdown === 'location' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {locations.map((loc) => (
                  <div key={loc.id} onClick={() => handleLocationSelect(loc)} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">{loc.name}</div>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative w-full flex-1">
            <div onClick={() => toggleDropdown('service')} className="flex items-center justify-between md:border-r md:border-gray-300 px-4 py-2 cursor-pointer">
              <span className={serviceDisplay ? 'text-gray-800' : ''}>
                {isLoadingServices ? 'Loading...' : isErrorServices ? 'Error' : serviceDisplay || 'Service Type'}
              </span>
              {isLoadingServices ? <Loader2 className="animate-spin" size={20} /> : isErrorServices ? <AlertCircle className="text-red-500" size={20}/> : <ChevronDown size={20} />}
            </div>
            {openDropdown === 'service' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {services.map((service) => (
                  service.name.toLowerCase() !== "string" && (
                    <div key={service.id} onClick={() => handleServiceSelect(service)} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">{service.name}</div>
                  )
                ))}
              </div>
            )}
          </div>
          
          <div className="relative w-full flex-1">
            <div onClick={() => toggleDropdown('payment')} className="flex items-center justify-between px-4 py-2 cursor-pointer">
              <span className={paymentDisplay ? 'text-gray-800' : ''}>{paymentDisplay || 'Payment Option'}</span>
              <ChevronDown size={20} />
            </div>
            {openDropdown === 'payment' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                {paymentOptions.map((payment) => (
                  <div key={payment.id} onClick={() => handlePaymentSelect(payment)} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700">{payment.label}</div>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href={isButtonDisabled ? '#' : bookingUrl}
            onClick={(e) => { if (isButtonDisabled) e.preventDefault(); }}
            className={`w-full md:w-auto text-center text-[#33343B] rounded-full px-8 py-3 font-poppins font-semibold text-sm bg-[#FEC102] hover:bg-[#ffca2a] transition-all duration-200 hover:scale-105 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            Send
          </Link>
        </div>
        
        {isErrorServices && (
          <p className="mt-4 text-sm text-red-300 font-semibold text-center">
            Could not load booking options due to a network error. Please refresh the page.
          </p>
        )}

        <p className="mt-6 text-sm text-[#FFFBF0] opacity-90 font-lora">
          Can't find your insurance or need faster access?{' '}
          <Link href="/contact" className="underline">
            Learn about our private concierge services
          </Link>
        </p>
      </div>
    </section>
  );
}