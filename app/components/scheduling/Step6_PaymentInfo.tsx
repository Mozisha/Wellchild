'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Step6_PaymentInfo() {
  const { prevStep, nextStep } = useSchedulingStore();

  return (
    <div className=" mx-auto">
      <div className="text-center">
        {/* Using a serif font for "Payment" to match the design */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
        <p className="mt-2 text-gray-500">We need to verify your payment</p>
      </div>

      <Card className="mt-8  border-gray-200 rounded-2xl">
        <CardContent className="p-6">
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
            <Image src="/super-child.png" alt="Happy child in superhero costume" layout="fill" objectFit="cover" />
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-serif font-semibold text-lg text-gray-800 tracking-wide">
              PAY WITH CREDIT CARD OR HSA/FSA
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Your insurance covers our sessions.
            </p>

            <div className="mt-4 bg-[#D6EBE0] border border-[#A4E8F2] p-4 rounded-lg">
              <p className="font-semibold text-[#0292B7]">
                Cash-pay rates for ADHD Testing
                <br />
                This includes a comprehensive assessment and a personalized treatment plan.
              </p>
              <ul className="list-disc pl-5 mt-2 text-[#0292B7] font-medium">
                <li>$250 for the initial assessment</li>
                <li>$2300 ADHD testing, feedback session, comprehensive written report, personalized treatment plan, and recommendations.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 flex flex-col items-center gap-4">
        <p className="text-xs text-gray-500 text-center max-w-sm">
Your selections help us match you with the most suitable provider for your child's specific needs. Insurance
verification will be completed during the approval process.        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
          <Button 
            onClick={nextStep} 
            className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg  hover:bg-[#ffe97a] transition-colors"
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