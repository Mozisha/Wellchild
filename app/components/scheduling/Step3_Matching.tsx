'use client';

import { useEffect } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Loader2, UserCheck } from 'lucide-react';

export default function Step3_Matching() {
  const { nextStep } = useSchedulingStore();

  useEffect(() => {
    // Simulate an API call to find a match
    const timer = setTimeout(() => {
      nextStep();
    }, 2500); // Wait for 2.5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [nextStep]);

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
      <UserCheck className="w-16 h-16 text-teal-500 mb-4" />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Finding your best match...</h2>
      <p className="mt-2 text-gray-500">We're analyzing your needs and matching you with the perfect speech therapy provider.</p>
      <Loader2 className="w-8 h-8 text-teal-500 mt-8 animate-spin" />
    </div>
  );
}