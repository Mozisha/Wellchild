'use client';

import { useEffect } from 'react';
import SchedulingLayout from '../components/scheduling/SchedulingLayout';
import Step1_PatientInfo from '../components/scheduling/Step1_PatientInfo';
import Step2_Concerns from '../components/scheduling/Step2_Concerns';
import Step3_Matching from '../components/scheduling/Step3_Matching';
import Step4_Results from '../components/scheduling/Step4_Results';
import Step5_BookAppointment from '../components/scheduling/Step5_BookAppointment';
import Step6_PaymentDetails from '../components/scheduling/Step6_PaymentDetails';
import Step7_Confirmation from '../components/scheduling/Step7_Confirmation';
import { SchedulingStep, useSchedulingStore } from '../store/schedulingStore';

export default function BookingPage() {
  const { currentStep, reset } = useSchedulingStore();

  // Reset the store when the component unmounts (e.g., user navigates away)
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  
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
      case SchedulingStep.PAYMENT:
        return <Step6_PaymentDetails />;
      case SchedulingStep.CONFIRMATION:
        return <Step7_Confirmation />;
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