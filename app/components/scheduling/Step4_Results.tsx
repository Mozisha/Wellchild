'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { mockProviders } from '../../data/mockData';
import { Provider } from '../../lib/types';
import Image from 'next/image';
import { CheckCircle, Star } from 'lucide-react';

const ProviderCard = ({ provider, onSelect }: { provider: Provider, onSelect: (p: Provider) => void }) => (
  <Card className="overflow-hidden">
    <CardContent className="p-6">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Image src={provider.imageUrl} alt={provider.name} width={80} height={80} className="rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-800">{provider.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">{provider.title}</p>
          <p className="mt-2 text-sm text-teal-600 font-semibold">{provider.specialties[0]}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">{provider.about}</p>
      
      <div className="mt-4 space-y-2">
         <h4 className="font-semibold text-sm">Qualifications</h4>
         <div className="flex flex-wrap gap-2">
            {provider.certifications.map(cert => (
                <span key={cert} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{cert}</span>
            ))}
         </div>
         <div className="flex items-center gap-2 pt-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">{provider.qualifications[0]}</span>
         </div>
         <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">{provider.experienceYears} years experience</span>
         </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-2">
        <Button onClick={() => onSelect(provider)} className="flex-1 bg-[#FFDE59] text-[#33343B] hover:bg-[#ffe680]">Book Now</Button>
        <Button variant="outline" className="flex-1">View Full Profile</Button>
      </div>
    </CardContent>
  </Card>
);

export default function Step4_Results() {
  const { setSelectedProvider, nextStep } = useSchedulingStore();

  const handleSelectProvider = (provider: Provider) => {
    setSelectedProvider(provider);
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Perfect match found!</h2>
      <p className="mt-2 text-gray-500 text-center">We found an excellent speech therapy (slp) provider for your child.</p>
      
      <div className="mt-8 space-y-6">
        {mockProviders.slice(0, 3).map(provider => ( // Show first 3 matches
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