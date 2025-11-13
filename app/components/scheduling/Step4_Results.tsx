'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Provider } from '../../lib/types';
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProviderCard = ({ provider, onSelect }: { provider: Provider, onSelect: (p: Provider) => void }) => {
  const primaryService = provider.services?.find(s => s.isPrimary) || provider.services?.[0];

  // --- THIS IS THE FIX for the TypeError ---
  // Safely handle certifications whether it's an array or a comma-separated string.
  let certificationsList: string[] = [];
  if (Array.isArray(provider.certifications)) {
    certificationsList = provider.certifications;
  } else if (typeof provider.certifications === 'string' && provider.certifications.length > 0) {
    // If it's a string, split it by comma and trim whitespace from each item.
    certificationsList = provider.certifications.split(',').map(cert => cert.trim());
  }

  return (
    <Card className="overflow-hidden shadow-md border border-gray-100">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Image 
            src="/user-placeholder.png" 
            alt={`${provider.user.firstName} ${provider.user.lastName}`} 
            width={80} 
            height={80} 
            className="rounded-full object-cover border-2 border-gray-200" 
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl text-gray-800">{provider.user.firstName} {provider.user.lastName}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>4.9</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{provider.education}</p>
            {primaryService?.primaryConcerns?.[0] && (
              <p className="mt-2 text-sm text-teal-600 font-semibold">{primaryService.primaryConcerns[0]}</p>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-4">{provider.bio}</p>
        
        <div className="mt-4 space-y-2">
           <h4 className="font-semibold text-sm text-gray-800">Qualifications</h4>
           <div className="flex flex-wrap gap-2">
              {/* Now we can safely map over the corrected list */}
              {certificationsList.map(cert => (
                  <span key={cert} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{cert}</span>
              ))}
           </div>
           <div className="flex items-center gap-2 pt-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">{provider.practiceName}</span>
           </div>
           {primaryService?.yearsExperience && (
            <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">{primaryService.yearsExperience} years experience</span>
            </div>
           )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <Button onClick={() => onSelect(provider)} className="flex-1 bg-[#FFDE59] text-[#33343B] hover:bg-[#ffe680] font-semibold">Book Now</Button>
          <Button variant="outline" className="flex-1">View Full Profile</Button>
        </div>
      </CardContent>
    </Card>
  );
};


export default function Step4_Results() {
  const { availableProviders, setSelectedProvider, nextStep } = useSchedulingStore();
  const router = useRouter();

  const handleSelectProvider = (provider: Provider) => {
    setSelectedProvider(provider);
    nextStep();
  };

  if (!availableProviders || availableProviders.length === 0) {
    return (
        <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">No Matches Found</h2>
            <p className="mt-2 text-gray-500">We couldn't find any available providers for your selected concerns at this time.</p>
            <Button onClick={() => router.push('/')} className="mt-6">Start Over</Button>
        </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Perfect match found!</h2>
      <p className="mt-2 text-gray-500 text-center">We found {availableProviders.length} excellent provider{availableProviders.length > 1 ? 's' : ''} for your child.</p>
      
      <div className="mt-8 space-y-6">
        {availableProviders.map(provider => (
            <ProviderCard key={provider.id} provider={provider} onSelect={handleSelectProvider} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <h3 className="font-semibold text-gray-800">Further Support?</h3>
        <p className="text-gray-600">Text our 24/7 Concierge Team</p>
      </div>
    </div>
  );
}