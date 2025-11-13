// app/components/HeroSection.tsx

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use router for programmatic navigation
import { ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSchedulingStore, PaymentOption, ServiceType } from '../store/schedulingStore';
import { useQuery } from '@tanstack/react-query';
import { fetchServices, fetchLocations, fetchPaymentOptions, Service, Location, PaymentOptionAPI } from '../services/api';

// --- Animation variants and mapping function ---
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const mapNameToServiceType = (name: string): ServiceType | 'UNKNOWN' => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes('speech')) return 'SPEECH_THERAPY';
  if (lowerCaseName.includes('aba')) return 'ABA_THERAPY';
  if (lowerCaseName.includes('psychology')) return 'EVALUATION';
  return 'UNKNOWN';
};

export default function HeroSection() {
  const router = useRouter();
  // 1. Get state and actions from the Zustand store
  const { serviceId, setService, setPaymentOption } = useSchedulingStore();
  
  // --- Data Fetching ---
  const { data: services = [], isLoading: isLoadingServices, isError: isErrorServices } = useQuery({ queryKey: ['services'], queryFn: fetchServices });
  const { data: locations = [] } = useQuery({ queryKey: ['locations'], queryFn: fetchLocations, staleTime: Infinity });
  const { data: paymentOptions = [] } = useQuery({ queryKey: ['paymentOptions'], queryFn: fetchPaymentOptions, staleTime: Infinity });

  // --- Local UI State ---
  const [locationDisplay, setLocationDisplay] = useState('');
  const [serviceDisplay, setServiceDisplay] = useState('');
  const [paymentDisplay, setPaymentDisplay] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Effect to set the default service display name if it's already in the store
  useEffect(() => {
    if (serviceId && services.length > 0 && !serviceDisplay) {
      const defaultService = services.find(s => s.id === serviceId);
      if (defaultService) {
        setServiceDisplay(defaultService.name);
      }
    }
  }, [serviceId, services, serviceDisplay]);

  const toggleDropdown = (dropdown: string) => {
    if (isLoadingServices) return;
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // 2. Handlers correctly update BOTH local UI state and global Zustand state
  const handleLocationSelect = (location: Location) => {
    setLocationDisplay(location.name);
    setOpenDropdown(null);
  };
  const handleServiceSelect = (service: Service) => {
    const serviceType = mapNameToServiceType(service.name);
    if (serviceType !== 'UNKNOWN') {
      setServiceDisplay(service.name);
      // This is the key action for the SchedulingLayout
      setService({ id: service.id, value: serviceType });
      setOpenDropdown(null);
    }
  };
  const handlePaymentSelect = (option: PaymentOptionAPI) => {
    setPaymentDisplay(option.label);
    // This is the key action for the payment branching logic
    setPaymentOption(option.value as PaymentOption);
    setOpenDropdown(null);
  };
  
  // 3. Button is disabled until all required selections are made
  const isButtonDisabled = isLoadingServices || isErrorServices || !serviceDisplay || !locationDisplay || !paymentDisplay;

  // This handler ensures the state is set before navigating, providing a robust fallback.
  const handleSend = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isButtonDisabled) {
      e.preventDefault();
      return;
    }
    // The state is already set by the `onSelect` handlers, so we can just navigate.
    // The Link component will handle the navigation to '/book'.
  };

  return (
    <section 
      className="relative w-full h-screen min-h-[800px] md:min-h-[700px] flex items-center justify-center text-[#FFFBF0] overflow-hidden" 
      style={{ 
        backgroundImage: "url('/super-child.png')",
        backgroundRepeat: "no-repeat",
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
          
          {/* Location Dropdown */}
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
          
          {/* Service Dropdown */}
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
          
          {/* Payment Dropdown */}
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
          
          {/* Send Button */}
          <Link
            href="/book"
            onClick={handleSend}
            className={`w-full md:w-auto text-center text-[#33343B] rounded-full px-8 py-3 font-poppins font-semibold text-sm bg-[#FEC102] hover:bg-[#ffca2a] transition-all duration-200 hover:scale-105 cursor-pointer ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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