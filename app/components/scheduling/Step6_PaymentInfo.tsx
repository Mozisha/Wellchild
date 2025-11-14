'use client';

import { useSchedulingStore, ServiceType } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

// --- NEW: Content mapping for service-specific payment details ---
// This object holds the specific JSX to be rendered for each service type.
const paymentDetailsContent: { [key in ServiceType]: React.ReactNode } = {
  SPEECH_THERAPY: (
    <>
      <p className="font-semibold text-[#0292B7]">
        Standard Rates for Speech Therapy
        <br />
        This includes a comprehensive session and a personalized progress plan.
      </p>
      <ul className="list-disc pl-5 mt-2 text-[#0292B7] font-medium">
        <li>$175 for the initial assessment</li>
        <li>$150 per follow-up session</li>
      </ul>
    </>
  ),
  ABA_THERAPY: (
    <>
      <p className="font-semibold text-[#0292B7]">
        Standard Rates for ABA Therapy
        <br />
        Our rates are competitive and based on the therapist's credentials.
      </p>
      <ul className="list-disc pl-5 mt-2 text-[#0292B7] font-medium">
        <li>$200 for the initial consultation</li>
        <li>Contact us for hourly package rates.</li>
      </ul>
    </>
  ),
  EVALUATION: (
    <>
      <p className="font-semibold text-[#0292B7]">
        Cash-Pay Rates for ADHD/Autism Evaluation
        <br />
        This includes a comprehensive assessment and a personalized treatment plan.
      </p>
      <ul className="list-disc pl-5 mt-2 text-[#0292B7] font-medium">
        <li>$250 for the initial assessment</li>
        <li>$2300 for the full evaluation, feedback session, and comprehensive written report.</li>
      </ul>
    </>
  ),
};

// A simple reusable component for summary lines
const SummaryLine = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between items-center text-sm">
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export default function Step6_PaymentInfo() {
  const { 
    serviceValue, // Get the serviceValue (SPEECH_THERAPY, etc.) from the store
    selectedProvider, 
    appointmentDetails, 
    patientInfo,
    prevStep, 
    nextStep 
  } = useSchedulingStore();

  // Guard clause: If the user lands here without ALL the necessary data, show a loading state.
  // The check for `patientInfo` and `serviceValue` is new and fixes the bug.
  if (!selectedProvider || !appointmentDetails || !patientInfo || !serviceValue) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        <p className="mt-4 text-gray-600">Loading your appointment details...</p>
      </div>
    );
  }

  // --- SAFE DATA ACCESS & FORMATTING ---
  const primaryService = selectedProvider.services?.find(s => s.isPrimary) || selectedProvider.services?.[0];
  const serviceName = primaryService?.service?.name || 'Selected Service';
  const consultationFee = parseFloat(String(selectedProvider.consultationFee)) || 0;
  const processingFee = selectedProvider.processingFee || 0;
  const totalAmount = selectedProvider.totalAmount || (consultationFee + processingFee);
  const formattedDate = format(appointmentDetails.date, 'EEEE, MMMM d, yyyy');
  const [hours, minutes] = appointmentDetails.time.split(':');
  const dateObj = new Date();
  dateObj.setHours(Number(hours));
  dateObj.setMinutes(Number(minutes));
  const formattedTime = format(dateObj, 'hh:mm a');

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment Confirmation</h2>
        <p className="mt-2 text-gray-500">Please review your appointment details and total cost below.</p>
      </div>

      <Card className="mt-8 border-gray-200 rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-xl text-gray-800">
            Appointment for {patientInfo.childFullName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <SummaryLine label="Service" value={serviceName} />
          <SummaryLine label="Provider" value={`${selectedProvider.user.firstName} ${selectedProvider.user.lastName}`} />
          <SummaryLine label="Date" value={formattedDate} />
          <SummaryLine label="Time" value={formattedTime} />
        </CardContent>
        <CardFooter className="bg-gray-50 p-4 flex justify-between items-center rounded-b-2xl">
           <h3 className="font-bold text-lg text-gray-800">Total Due</h3>
           <p className="font-bold text-xl text-teal-600">${totalAmount.toFixed(2)}</p>
        </CardFooter>
      </Card>
      
      <Card className="mt-6 border-gray-200 rounded-2xl">
        <CardContent className="p-6">
            <h3 className="font-serif font-semibold text-lg text-gray-800 tracking-wide">
              PAY WITH CREDIT CARD OR HSA/FSA
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Your insurance may cover some or all of our sessions.
            </p>
            <div className="mt-4 bg-[#D6EBE0] border border-[#A4E8F2] p-4 rounded-lg">
              {/* This will render the correct content based on the selected service */}
              {paymentDetailsContent[serviceValue]}
            </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-xs text-gray-500 text-center max-w-sm">
          Your card will be charged upon confirmation. Insurance verification will be completed during the approval process.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
          <Button 
            onClick={nextStep} 
            className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg hover:bg-[#ffe97a] transition-colors"
          >
            Continue to Payment
          </Button>
          <Button 
            onClick={prevStep} 
            variant="outline"
            className="w-full h-12 text-base font-semibold text-gray-700 border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}