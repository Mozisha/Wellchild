'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Loader2, UserCheck } from 'lucide-react';
import { useSchedulingStore } from '@/app/store/schedulingStore';
import { cn } from '@/lib/utils';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getPrimaryConcerns, updateConcerns, PrimaryConcern } from '@/app/services/api';
import { toast } from "sonner"; 

// --- Reusable UI Component for a single concern item (Unchanged) ---
const ConcernItem = ({ concern, isSelected, onSelect }: { concern: PrimaryConcern, isSelected: boolean, onSelect: () => void }) => {
    const id = `concern-${concern.id}`;
    return (
        <label
            htmlFor={id}
            className={cn(
                "flex items-center w-full p-3 rounded-lg border cursor-pointer transition-colors duration-200",
                isSelected ? "bg-teal-50 border-[#0292B7]" : "bg-white border-gray-200 hover:bg-gray-50"
            )}
        >
            <Checkbox
                id={id}
                checked={isSelected}
                onCheckedChange={onSelect}
                className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-[#0292B7] data-[state=checked]:border-[#0292B7]"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">{concern.name}</span>
        </label>
    );
};


export default function Step2_Concerns() {
  const { draftId, serviceId, setAvailableProviders, nextStep } = useSchedulingStore();
  const [selectedConcernIds, setSelectedConcernIds] = useState<string[]>([]);

  // Fetch the list of concerns for the selected service
  const { data: concerns, isLoading: isLoadingConcerns, isError: isErrorConcerns, error: concernsError } = useQuery({
    queryKey: ['primaryConcerns', serviceId],
    queryFn: () => {
      if (!serviceId) throw new Error('Service ID is required to fetch concerns.');
      return getPrimaryConcerns(serviceId);
    },
    enabled: !!serviceId, 
  });

  // Setup the mutation to submit the selected concerns and get back the matched providers
  const mutation = useMutation({
    mutationFn: (vars: { draftId: string; concerns: string[] }) => updateConcerns(vars.draftId, vars.concerns),
    onSuccess: (response) => {
      const providers = response?.data?.availableProviders;
      if (providers && Array.isArray(providers)) {
        setAvailableProviders(providers);
        // On success, go directly to the Results step
        nextStep(); 
      } else {
        toast.error("An unexpected error occurred. Could not find providers.");
      }
    },
    onError: (error) => {
        toast.error(`Submission Failed: ${error.message}`);
    }
  });

  const handleCheckboxChange = (concernId: string) => {
    setSelectedConcernIds(prev => 
      prev.includes(concernId) 
        ? prev.filter(id => id !== concernId) 
        : [...prev, concernId]
    );
  };

  const handleContinue = () => {
    if (!draftId) {
      toast.error("Booking session has expired.", {
        description: "Your session is invalid. Please start the booking process over.",
        action: {
          label: "Start Over",
          onClick: () => window.location.href = '/', // Redirect to homepage
        },
      });
      return;
    }
    // Trigger the API call to find providers
    mutation.mutate({ draftId, concerns: selectedConcernIds });
  };
  
  // If the mutation is pending (i.e., the API call to find providers is in flight),
  // we display the "Matching..." UI.
  if (mutation.isPending) {
    return (
      <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
        <UserCheck className="w-16 h-16 text-teal-500 mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Finding your best match...</h2>
        <p className="mt-2 text-gray-500">We're analyzing your needs and matching you with the perfect provider.</p>
        <Loader2 className="w-8 h-8 text-teal-500 mt-8 animate-spin" />
      </div>
    );
  }

  // --- Renders the checkboxes for the user to select concerns ---
  const renderContent = () => {
    if (isLoadingConcerns) {
      return (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          <p className="ml-4 text-gray-600">Loading Your Options...</p>
        </div>
      );
    }

    if (isErrorConcerns) {
      return (
        <div className="flex items-start gap-3 p-3 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span><strong>Error fetching concerns:</strong> {concernsError.message}</span>
        </div>
      );
    }
    
    if (!concerns || concerns.length === 0) {
        return <p className="text-center text-gray-500 py-10">No primary concerns have been set up for this service yet.</p>
    }

    return (
      <div className="flex flex-col flex-wrap gap-3">
        {concerns.map((concern) => (
          <ConcernItem
            key={concern.id}
            concern={concern}
            isSelected={selectedConcernIds.includes(concern.id)}
            onSelect={() => handleCheckboxChange(concern.id)}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Primary Concerns</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md mx-auto">
        What specific concerns would you like to address? Select all that apply.
      </p>

      <div className="mt-8 max-w-3xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Next Step:</strong> Based on your selections, we will instantly match you with up to 3 qualified providers and their real-time availability.
          </span>
        </div>

        <Card className="mt-6 border-gray-200 rounded-2xl">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-6">Select Your Concerns</h3>
            {renderContent()}
          </CardContent>
        </Card>

        <Button 
          onClick={handleContinue} 
          disabled={selectedConcernIds.length === 0 || mutation.isPending || isLoadingConcerns || isErrorConcerns}
          className="w-full h-12 mt-6 text-base font-semibold bg-[#FFDE59] text-black rounded-lg shadow-md hover:bg-[#ffe97a] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          {/* The button text is now simpler, as the whole view changes on click */}
          See Your Matches
        </Button>
      </div>
    </div>
  );
}