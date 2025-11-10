'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';
import { useSchedulingStore } from '@/app/store/schedulingStore';
import { speechTherapyConcerns } from '@/app/data/mockData';

export default function Step2_Concerns() {
  const { setConcerns, nextStep } = useSchedulingStore();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const handleCheckboxChange = (concern: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concern) 
        ? prev.filter(c => c !== concern) 
        : [...prev, concern]
    );
  };

  const handleContinue = () => {
    setConcerns(selectedConcerns);
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Speech Therapy</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md mx-auto">
        What specific concerns would you like to address? Select all that apply.
      </p>

      <div className="mt-8 max-w-lg mx-auto">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg relative flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Expected Timeline:</strong> In-person appointments typically require 2-3 weeks for provider sign-off. Telehealth services may be faster.
          </span>
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Primary Concerns</h3>
            <div className="space-y-4">
              {speechTherapyConcerns.map((concern, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Checkbox 
                    id={`concern-${index}`}
                    checked={selectedConcerns.includes(concern)}
                    onCheckedChange={() => handleCheckboxChange(concern)}
                  />
                  <Label htmlFor={`concern-${index}`} className="font-normal text-gray-600 cursor-pointer">
                    {concern}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={handleContinue} 
          disabled={selectedConcerns.length === 0}
          className="w-full mt-6 bg-[#FFDE59] text-[#33343B] hover:bg-[#ffe680] disabled:bg-gray-300"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}