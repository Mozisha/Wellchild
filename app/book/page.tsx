// app/book/page.tsx (or your equivalent page file)

'use client';

import { useEffect } from 'react'; // 1. IMPORT useEffect
import { SchedulingStep, useSchedulingStore } from '../store/schedulingStore';
import SchedulingLayout from '../components/scheduling/SchedulingLayout';
import Step1_PatientInfo from '../components/scheduling/Step1_PatientInfo';
import Step2_Concerns from '../components/scheduling/Step2_Concerns';
import Step4_Results from '../components/scheduling/Step4_Results';
import Step5_BookAppointment from '../components/scheduling/Step5_BookAppointment';
import Step6_PaymentInfo from '../components/scheduling/Step6_PaymentInfo';
import Step7_CreditCardEntry from '../components/scheduling/Step7_CreditCardEntry';
import Step6_ScholarshipInfo from '../components/scheduling/Step6_ScholarshipInfo';
import Step7_ScholarshipDetails from '../components/scheduling/Step7_ScholarshipDetails';
import Step8_Confirmation from '../components/scheduling/Step8_Confirmation';

export default function BookingPage() {
  const { currentStep } = useSchedulingStore();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]); 
  const renderStep = () => {
    switch (currentStep) {
      case SchedulingStep.PATIENT_INFO:
        return <Step1_PatientInfo />;
      case SchedulingStep.CONCERNS:
        return <Step2_Concerns />;
      case SchedulingStep.RESULTS:
        return <Step4_Results />;
      case SchedulingStep.BOOK_APPOINTMENT:
        return <Step5_BookAppointment />;
      
      // Private Pay Path Components
      case SchedulingStep.PRIVATE_PAY_INFO:
        return <Step6_PaymentInfo />;
      case SchedulingStep.PRIVATE_PAY_CREDIT_CARD:
        return <Step7_CreditCardEntry />;

      // Scholarship Path Components
      case SchedulingStep.SCHOLARSHIP_INFO:
        return <Step6_ScholarshipInfo />;
      case SchedulingStep.SCHOLARSHIP_DETAILS:
        return <Step7_ScholarshipDetails />;

      // The final confirmation screen is shared by all paths
      case SchedulingStep.CONFIRMATION:
        return <Step8_Confirmation />;
        
      default:
        // A reset or redirect could also go here
        return <Step1_PatientInfo />;
    }
  };

  return (
    <SchedulingLayout>
      {renderStep()}
    </SchedulingLayout>
  );
}