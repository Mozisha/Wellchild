'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

// A simple reusable component for summary lines
const SummaryLine = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between items-center text-sm">
    <p className="text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export default function Step6_PaymentInfo() {
  const { 
    selectedProvider, 
    appointmentDetails, 
    patientInfo,
    prevStep, 
    nextStep 
  } = useSchedulingStore();

  // Guard clause: If the user lands here without the necessary data, show a loading state.
  if (!selectedProvider || !appointmentDetails || !patientInfo) {
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
  
  // Safely parse fees from string/number to a number for formatting
  const consultationFee = parseFloat(String(selectedProvider.consultationFee)) || 0;
  const processingFee = selectedProvider.processingFee || 0;
  const totalAmount = selectedProvider.totalAmount || (consultationFee + processingFee);

  // Format date and time for display
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
            Appointment with {selectedProvider.user.firstName} {selectedProvider.user.lastName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50/50 space-y-3">
            <SummaryLine label="Patient" value={patientInfo.childFullName} />
            <SummaryLine label="Service" value={serviceName} />
            <SummaryLine label="Date" value={formattedDate} />
            <SummaryLine label="Time" value={formattedTime} />
          </div>
          <div className="p-4 border rounded-lg bg-gray-50/50 space-y-3">
            <SummaryLine label="Consultation Fee" value={`$${consultationFee.toFixed(2)}`} />
            <SummaryLine label="Booking Fee" value={`$${processingFee.toFixed(2)}`} />
          </div>
        </CardContent>
        <CardFooter className="bg-teal-50/50 p-4 flex justify-between items-center rounded-b-2xl">
           <h3 className="font-bold text-lg text-gray-800">Total Amount</h3>
           <p className="font-bold text-xl text-teal-600">${totalAmount.toFixed(2)}</p>
        </CardFooter>
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