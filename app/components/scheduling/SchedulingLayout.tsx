'use client';

import React from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import { useSchedulingStore } from '../../store/schedulingStore';
import { cn } from '@/lib/utils';

const serviceOptions = [
    { 
        name: 'Speech Therapy', 
        description: 'Wonder twenty hunted and put income set desire expect. Am cottage calling.',
        iconPath: '/scheduling-icons/speech-therapy-icon.png',
        iconBgColor: 'bg-[#0292B7]',
        value: 'SPEECH_THERAPY'
    },
    { 
        name: 'ABA Therapy', 
        description: 'Carrying or northward offending admitting perfectly my. Colonel gravit and moonlight.', 
        iconPath: '/scheduling-icons/aba-therapy-icon.svg',
        iconBgColor: 'bg-[#4DDFFD]',
        value: 'ABA_THERAPY'
    },
    { 
        name: 'Clinical Psychology / Diagnostic Evaluation (Autism or ADHD)', 
        description: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.', 
        iconPath: '/scheduling-icons/cp.svg',
        iconBgColor: 'bg-[#F2B8EC]',
        value: 'EVALUATION'
    },
];

type SchedulingLayoutProps = {
    children: React.ReactNode;
};

// This is a specialized card just for this layout, matching the design.
const ServiceCard = ({ service, isActive }: { service: typeof serviceOptions[0], isActive: boolean }) => (
    <div
        className={cn(
            // Base styles with a transparent border to prevent layout shift on selection
            "p-5 rounded-2xl transition-all duration-300 text-center cursor-pointer  border border-transparent bg-white",
            // Active state styles
            { 'bg-[#0292B70D] border-[#0292B7]': isActive } 
        )}
    >
        <div className="flex flex-col items-center ">
            <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center", service.iconBgColor)}>
                <Image src={service.iconPath} alt={`${service.name} icon`} width={25} height={25} />
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


export default function SchedulingLayout({ children }: SchedulingLayoutProps) {
    const { serviceType } = useSchedulingStore();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <main className="flex-grow max-w-7xl gap-4 w-full  mx-auto  lg:px-8 py-10">
                
                {/* Main grid for layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] ">

                    {/* --- LEFT COLUMN (DESKTOP ONLY) --- */}
                    <aside className="hidden lg:flex flex-col justify-center items-center">
                        <div className="relative w-full max-w-xs">
                           
                           <div className="relative z-10 space-y-8">
                            {serviceOptions.map(service => (
                                <ServiceCard 
                                    key={service.name} 
                                    service={service}
                                    isActive={service.value === serviceType}
                                />
                            ))}
                           </div>
                        </div>
                    </aside>
                    
                    {/* --- RIGHT COLUMN (Contains mobile header AND main content) --- */}
                    <div>
                        {/* Mobile Header: Logo + Service Cards */}
                        <div className="lg:hidden mb-12">
                            
                             <div className="grid grid-cols-1 gap-4">
                                {serviceOptions.map(service => (
                                    <ServiceCard 
                                        key={service.name} 
                                        service={service}
                                        isActive={service.value === serviceType}
                                    />
                                ))}
                            </div>
                        </div>

                      

                        {/* Shared Content Area */}
                        <div>
                            <ProgressBar />
                            {children}
                        </div>
                    </div>

                </div>
            </main>
            
            <footer className="w-full border border-t border-gray-100 mt-16 relative">
                
                 <div className="py-8 text-center text-[#373B43] italic  text-sm">
                    <p>Your information is secure and confidential</p>
                 </div>
            </footer>
        </div>
    );
}