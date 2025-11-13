'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Step6_ScholarshipInfo() {
  const { prevStep, nextStep } = useSchedulingStore();

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
        <p className="mt-2 text-gray-500">We need to verify your scholarship</p>
      </div>

      <Card className="mt-8 shadow-lg border-gray-200 rounded-2xl">
        <CardContent className="p-6">
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
            <Image src="/super-child.png" alt="Happy child in superhero costume" layout="fill" objectFit="cover" />
          </div>

          <div className="border border-gray-200 rounded-lg p-5 text-center">
            <h3 className="font-semibold text-lg text-gray-800">
              Good news,
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Scholarship
            </p>

            <div className="mt-4 bg-[#F0F5FF] p-8 rounded-lg">
              <p className="font-semibold text-2xl text-[#1E40AF]">
                Scholarship...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 flex flex-col items-center gap-4">
        <p className="text-xs text-gray-500 text-center max-w-sm">
          Your selections help us match you with the most suitable provider for your child's specific needs. Insurance verification will be completed during the approval process.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
          <Button 
            onClick={nextStep} 
            className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg shadow-md hover:bg-[#ffe97a] transition-colors"
          >
            Continue
          </Button>
          <Button 
            onClick={prevStep} 
            variant="outline"
            className="w-full h-12 text-base font-semibold text-gray-700 border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}