'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertCircle } from 'lucide-react';
import { useSchedulingStore } from '@/app/store/schedulingStore';
import { speechTherapyConcerns } from '@/app/data/mockData';
import { cn } from '@/lib/utils';

// A new, custom component to perfectly replicate the design of each selectable item.
const ConcernItem = ({ concern, isSelected, onSelect }: { concern: string, isSelected: boolean, onSelect: () => void }) => {
    const id = `concern-${concern.replace(/\s+/g, '-')}`;
    return (
        <label
            htmlFor={id}
            className={cn(
                // Base styles for the clickable pill
                "flex items-center w-full p-3 rounded-lg border cursor-pointer transition-colors duration-200",
                // Styles for when the item is selected
                isSelected
                    ? "bg-teal-50 border-[#0292B7]"
                    // Styles for when the item is not selected
                    : "bg-white border-gray-200 hover:bg-gray-50"
            )}
        >
            <Checkbox
                id={id}
                checked={isSelected}
                onCheckedChange={onSelect}
                className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-[#0292B7] data-[state=checked]:border-[#0292B7]"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">{concern}</span>
        </label>
    );
};


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

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-[#F59DAD08] border border-[#F59DAD] text-[#F59DAD] px-4 py-3 rounded-lg relative flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Expected Timeline:</strong> In-person appointments typically require 2-3 weeks for provider sign-off. Telehealth services may be faster.
          </span>
        </div>

        {/* The main card now has a subtle shadow and border to match the design */}
        <Card className="mt-6  border-gray-200 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-6">Primary Concerns</h3>
            <div className="flex flex-col flex-wrap gap-3">
              {speechTherapyConcerns.map((concern) => (
                <ConcernItem
                  key={concern}
                  concern={concern}
                  isSelected={selectedConcerns.includes(concern)}
                  onSelect={() => handleCheckboxChange(concern)}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={handleContinue} 
          disabled={selectedConcerns.length === 0}
          className="w-full h-12 mt-6 text-base font-semibold bg-[#FFDE59] text-black rounded-lg shadow-md hover:bg-[#ffe97a] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}