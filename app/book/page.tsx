'use client';

import { useEffect } from 'react';
import { SchedulingStep, useSchedulingStore } from '../store/schedulingStore';
import SchedulingLayout from '../components/scheduling/SchedulingLayout';

// Import all the step components
import Step1_PatientInfo from '../components/scheduling/Step1_PatientInfo';
import Step2_Concerns from '../components/scheduling/Step2_Concerns';
import Step3_Matching from '../components/scheduling/Step3_Matching';
import Step4_Results from '../components/scheduling/Step4_Results';
import Step5_BookAppointment from '../components/scheduling/Step5_BookAppointment';

// Import the new, renamed payment flow components
import Step7_CreditCardEntry from '../components/scheduling/Step7_CreditCardEntry'; // The new credit card form
import Step8_Confirmation from '../components/scheduling/Step8_Confirmation'; // The new confirmation screen
import Step6_PaymentInfo from '../components/scheduling/Step6_PaymentInfo';

export default function BookingPage() {
  const { currentStep, reset } = useSchedulingStore();

  // Reset the store when the component unmounts (e.g., user navigates away)
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  
  // The render function now maps the correct enum to the correct component
  const renderStep = () => {
    switch (currentStep) {
      case SchedulingStep.PATIENT_INFO:
        return <Step1_PatientInfo />;
      case SchedulingStep.CONCERNS:
        return <Step2_Concerns />;
      case SchedulingStep.MATCHING:
        return <Step3_Matching />;
      case SchedulingStep.RESULTS:
        return <Step4_Results />;
      case SchedulingStep.BOOK_APPOINTMENT:
        return <Step5_BookAppointment />;
      
      // Updated Payment Flow
      case SchedulingStep.PAYMENT_INFO:
        return <Step6_PaymentInfo />;
      case SchedulingStep.CREDIT_CARD_ENTRY:
        return <Step7_CreditCardEntry />;
      case SchedulingStep.CONFIRMATION:
        return <Step8_Confirmation />;
        
      default:
        return <Step1_PatientInfo />;
    }
  };

  return (
    <SchedulingLayout>
      {renderStep()}
    </SchedulingLayout>
  );
}