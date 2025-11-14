'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { SchedulingStep, useSchedulingStore, ServiceType, PaymentOption } from '../store/schedulingStore';
import { fetchServices } from '../services/api';

// Layout and Step Components
import SchedulingLayout from '../components/scheduling/SchedulingLayout';
import Step1_PatientInfo from '../components/scheduling/Step1_PatientInfo';
import Step2_Concerns from '../components/scheduling/Step2_Concerns';
import Step4_Results from '../components/scheduling/Step4_Results';
import Step5_BookAppointment from '../components/scheduling/Step5_BookAppointment';
import Step6_PaymentInfo from '../components/scheduling/Step6_PaymentInfo';
import Step7_CreditCardEntry from '../components/scheduling/Step7_CreditCardEntry';
import Step6_ScholarshipInfo from '../components/scheduling/Step6_ScholarshipInfo';
import Step7_ScholarshipDetails from '../components/scheduling/Step7_ScholarshipDetails';
// --- NEW: Import the insurance step components ---

import Step8_Confirmation from '../components/scheduling/Step8_Confirmation';
import { Loader2 } from 'lucide-react';
import Step8_InsuranceReview from '../components/scheduling/Step8_InsuranceReview';
import Step7_InsuranceForm from '../components/scheduling/Step7_InsuranceForm';
import Step6_InsuranceInfo from '../components/scheduling/Step6_InsuranceInfo';

// Helper function to map API service names to our internal types
const mapNameToServiceType = (name: string): ServiceType | 'UNKNOWN' => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes('speech')) return 'SPEECH_THERAPY';
  if (lowerCaseName.includes('aba')) return 'ABA_THERAPY';
  if (lowerCaseName.includes('psychology')) return 'EVALUATION';
  return 'UNKNOWN';
};

// This component now handles the logic of initializing the store AND rendering the current step.
const BookingFlowManager = () => {
  const { currentStep, serviceId, setInitialSelections } = useSchedulingStore();
  const searchParams = useSearchParams();
  
  // We need the full services list to map the ID from the URL to a serviceValue
  const { data: services, isLoading, isError } = useQuery({ queryKey: ['services'], queryFn: fetchServices });

  useEffect(() => {
    // This effect runs only once when the page loads, if the store hasn't been initialized yet.
    if (!serviceId && services) {
      const serviceIdFromUrl = searchParams.get('serviceId');
      const paymentOptionFromUrl = searchParams.get('paymentOption') as PaymentOption;
      const insuranceLabelFromUrl = searchParams.get('insuranceLabel');

      if (serviceIdFromUrl && paymentOptionFromUrl) {
        const selectedService = services.find(s => s.id === serviceIdFromUrl);
        if (selectedService) {
          const serviceValue = mapNameToServiceType(selectedService.name);
          if (serviceValue !== 'UNKNOWN') {
            // Set the initial state in our Zustand store from ALL the URL params
            setInitialSelections({
              serviceId: serviceIdFromUrl,
              serviceValue,
              paymentOption: paymentOptionFromUrl,
              insuranceLabel: insuranceLabelFromUrl || undefined,
            });
          }
        }
      }
    }
  }, [services, serviceId, searchParams, setInitialSelections]);
  
  useEffect(() => {
    // This effect handles scrolling to the top of the page on every step change.
    window.scrollTo(0, 0);
  }, [currentStep]);

  // If we are still fetching the services list or haven't initialized from the URL, show a loading screen.
  if (isLoading || !serviceId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        <p className="mt-4 text-gray-600">Loading your selections...</p>
      </div>
    );
  }

  if (isError) {
      return <div className="text-center text-red-500">Error loading required data. Please try again.</div>
  }

  // Once initialized, this switch statement renders the correct step component.
  switch (currentStep) {
    case SchedulingStep.PATIENT_INFO:
      return <Step1_PatientInfo />;
    case SchedulingStep.CONCERNS:
      return <Step2_Concerns />;
    case SchedulingStep.RESULTS:
      return <Step4_Results />;
    case SchedulingStep.BOOK_APPOINTMENT:
      return <Step5_BookAppointment />;
    // Private Pay Path
    case SchedulingStep.PRIVATE_PAY_INFO:
      return <Step6_PaymentInfo />;
    case SchedulingStep.PRIVATE_PAY_CREDIT_CARD:
      return <Step7_CreditCardEntry />;
    // Scholarship Path
    case SchedulingStep.SCHOLARSHIP_INFO:
      return <Step6_ScholarshipInfo />;
    case SchedulingStep.SCHOLARSHIP_DETAILS:
      return <Step7_ScholarshipDetails />;
    // --- NEW: Insurance Path ---
    case SchedulingStep.INSURANCE_INFO:
      return <Step6_InsuranceInfo />;
    case SchedulingStep.INSURANCE_FORM:
      return <Step7_InsuranceForm />;
    case SchedulingStep.INSURANCE_REVIEW:
      return <Step8_InsuranceReview />;
    // Final Confirmation
    case SchedulingStep.CONFIRMATION:
      return <Step8_Confirmation />;
    default:
      return <Step1_PatientInfo />;
  }
};

export default function BookingPage() {
  const reset = useSchedulingStore((state) => state.reset);

  useEffect(() => {
    // Resets the in-memory store when the user navigates away from the page.
    return () => {
      reset();
    };
  }, [reset]);

  return (
    // The Suspense boundary is essential for components that use `useSearchParams`.
    <React.Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Loader2 className="w-10 h-10 animate-spin text-teal-500" />
        </div>
    }>
      <SchedulingLayout>
        <BookingFlowManager />
      </SchedulingLayout>
    </React.Suspense>
  );
}