'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// This mapping connects the insurance label from the store to its logo file.
// You will need to add the actual image files to your `/public/insurance-logos/` folder.
const logoMap: { [key: string]: string } = {
  'Aetna (commercial)': '/insurance-logos/aetna.svg',
  'Cigna': '/insurance-logos/cigna.svg',
  'United Healthcare': '/insurance-logos/uhc.svg',
  'Optum': '/insurance-logos/optum.svg',
  'Evernorth': '/insurance-logos/evernorth.svg',
  'Tricare': '/insurance-logos/tricare.svg',
  'Humana': '/insurance-logos/humana.svg',
  'Florida Blue': '/insurance-logos/fl-blue.svg',
  'ComPsych': '/insurance-logos/compsych.svg',
  'ChampVa': '/insurance-logos/champva.svg',
  // A fallback logo in case a match is not found
  'default': '/insurance-logos/default.svg',
};

export default function Step6_InsuranceInfo() {
  const { prevStep, nextStep, selectedInsuranceLabel } = useSchedulingStore();

  // Determine which logo to display based on the user's selection from the Hero section.
  const logoSrc = selectedInsuranceLabel ? (logoMap[selectedInsuranceLabel] || logoMap.default) : logoMap.default;

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
        <p className="mt-2 text-gray-500">We need to verify your insurance</p>
      </div>

      <Card className="mt-8 border-gray-200 rounded-2xl shadow-sm p-4">
        <CardContent className="p-0">
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
            <Image src="/super-child.png" alt="Happy child in superhero costume" layout="fill" objectFit="cover" />
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
                <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-800">
                        Good news,
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Your insurance covers our sessions.
                    </p>
                </div>
                {/* Dynamically display the insurance logo */}
                <Image src={logoSrc} alt={selectedInsuranceLabel || 'Insurance Logo'} width={100} height={40} objectFit="contain" />
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-800 text-center">
              <p className="font-semibold">
                {selectedInsuranceLabel} members pay as little as $0-$25 per session
              </p>
              <p className="font-medium text-sm">Your exact out-of-pocket cost is determined by your insurance plan.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 flex flex-col items-center gap-4">
        <p className="text-xs text-gray-500 text-center max-w-sm">
          Your selections help us match you with the most suitable provider for your child's specific needs. Insurance verification will be completed during the approval process.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
          <Button onClick={nextStep} className="w-full h-12 bg-[#FFDE59] text-black hover:bg-[#ffe97a] font-semibold">
            Continue
          </Button>
          <Button onClick={prevStep} variant="outline" className="w-full h-12 text-gray-700 font-semibold">
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}