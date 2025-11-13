'use client';

import React from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import { useSchedulingStore, ServiceType } from '../../store/schedulingStore';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { fetchServices, Service } from '@/app/services/api';
import { Loader2, AlertCircle } from 'lucide-react';
import { useScrollToTop } from '@/app/hooks/useScrollToTop';
// --- Helper function to map API data to our internal UI state enum ---
// This remains the crucial link between the backend (string names) and the frontend (typed state).
const mapNameToServiceType = (name: string): ServiceType | 'UNKNOWN' => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes('speech')) return 'SPEECH_THERAPY';
  if (lowerCaseName.includes('aba')) return 'ABA_THERAPY';
  if (lowerCaseName.includes('psychology')) return 'EVALUATION';
  return 'UNKNOWN';
};

// --- Icon Mapping ---
// This object translates the `iconName` from your API into a usable image path.
// This is the only "mapping" you'll need to maintain.
const iconMap: { [key: string]: string } = {
  settings: '/scheduling-icons/speech-therapy-icon.png',
  puzzle: '/scheduling-icons/aba-therapy-icon.svg',
  brain: '/scheduling-icons/cp.svg',
  default: '/scheduling-icons/default-icon.svg' // Fallback icon
};

// --- The Service Card component is now simpler ---
// It expects the `service` object directly from the API.
type ServiceCardProps = {
    service: Service;
    isActive: boolean;
    onClick: () => void;
};

const ServiceCard = ({ service, isActive, onClick }: ServiceCardProps) => {
    const iconPath = iconMap[service.iconName || 'default'] || iconMap.default;
    
    return (
        <div
            onClick={onClick}
            className={cn(
                "p-5 h-full rounded-2xl transition-all duration-300 text-center cursor-pointer border border-transparent bg-white shadow-sm hover:shadow-md",
                { 'bg-[#0292B70D] border-[#0292B7] shadow-lg': isActive } 
            )}
        >
            <div className="flex flex-col items-center">
                {/* We use an inline style for backgroundColor as it's dynamic from the API */}
                <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: service.backgroundColor }}
                >
                    <Image src={iconPath} alt={`${service.name} icon`} width={25} height={25} />
                </div>
                <h3 className={cn(
                    "font-bold text-lg mt-4",
                    isActive ? "text-[#0292B7]" : "text-gray-800 "
                )}>
                    {service.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {service.description}
                </p>
            </div>
        </div>
    );
};


export default function SchedulingLayout({ children }: { children: React.ReactNode }) {
     useScrollToTop();
    const { serviceValue, setService } = useSchedulingStore();

    // 1. Fetch the services data using the same key as other components.
    // This will instantly get the data from the cache.
    const { data: apiServices = [], isLoading, isError } = useQuery<Service[]>({
        queryKey: ['services'],
        queryFn: fetchServices,
        staleTime: 1000 * 60 * 60 // 1 hour
    });

    // 2. The handler is now simpler: it receives the full API service object.
    const handleServiceSelect = (service: Service) => {
      const serviceType = mapNameToServiceType(service.name);
      if (serviceType !== 'UNKNOWN') {
        // We can directly use the ID and the mapped type from the service object.
        setService({ id: service.id, value: serviceType });
      } else {
        console.warn(`Could not map service name "${service.name}" to a known ServiceType.`);
      }
    }

    // This function will render the list of service cards.
    const renderServiceCards = () => {
        if (isLoading) {
            return <div className="flex justify-center items-center h-40"><Loader2 className="w-8 h-8 animate-spin text-teal-500" /></div>;
        }

        if (isError) {
            return (
                <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Could not load services.</span>
                </div>
            );
        }

        // Filter out any invalid data from the backend (like the service named "string").
        const validServices = apiServices.filter(service => service.name !== 'string');

        return validServices.map(service => {
            const currentServiceType = mapNameToServiceType(service.name);
            if (currentServiceType === 'UNKNOWN') return null; // Don't render cards we can't map

            return (
                <ServiceCard 
                    key={service.id} 
                    service={service}
                    isActive={currentServiceType === serviceValue}
                    onClick={() => handleServiceSelect(service)}
                />
            );
        });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="flex-grow max-w-7xl w-full mx-auto lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8">
                    <aside className="hidden lg:flex flex-col justify-center items-center px-4">
                        <div className="relative w-full max-w-xs">
                           <div className="relative z-10 space-y-8">
                            {renderServiceCards()}
                           </div>
                        </div>
                    </aside>
                    
                    <div className="px-4">
                        <div className="lg:hidden mb-12">
                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {renderServiceCards()}
                            </div>
                        </div>

                        <div>
                            <ProgressBar />
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            
            <footer className="w-full border-t border-gray-100 mt-16 relative">
                 <div className="py-8 text-center text-[#373B43] italic text-sm">
                    <p>Your information is secure and confidential</p>
                 </div>
            </footer>
        </div>
    );
}