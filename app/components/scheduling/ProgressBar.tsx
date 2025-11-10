'use client';

import { useSchedulingStore, SchedulingStep } from '../../store/schedulingStore';
import { cn } from '@/lib/utils';

export default function ProgressBar() {
  const { currentStep } = useSchedulingStore();

  const steps = [
    { label: 'Goals', color: '#F2B8EC' }, // Pink
    { label: 'Schedule', color: '#DC3545' }, // Red
    { label: 'Payment', color: '#4DDFFD' }, // Blue
    { label: 'Confirmation', color: '#FFDE59' } // Yellow
  ];
  
  const getStepIndex = (step: SchedulingStep) => {
    if (step <= SchedulingStep.CONCERNS) return 0; // Goals
    if (step <= SchedulingStep.BOOK_APPOINTMENT) return 1; // Schedule
    if (step === SchedulingStep.PAYMENT) return 2; // Payment
    if (step === SchedulingStep.CONFIRMATION) return 3; // Confirmation
    return 0;
  };

  const activeIndex = getStepIndex(currentStep);

  return (
    <div className="w-full max-w-lg mx-auto mb-12">
      <div className="flex items-start justify-between relative">
        {/* Dotted line background */}
        <div className="absolute top-2.5 left-0 w-full h-px bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,theme(colors.gray.300)_4px,theme(colors.gray.300)_8px)]"></div>
        
        {steps.map(({ label, color }, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={label} className="z-10 flex flex-col items-center w-20">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-gray-300",
                  { "border-none": isActive }
                )}
                style={isActive ? { backgroundColor: color } : {}}
              >
                {!isActive && (
                   <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }}></div>
                )}
              </div>
              <p className={cn(
                "mt-2 text-sm text-center text-gray-500",
                { "font-bold text-gray-800": isActive }
              )}>
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}