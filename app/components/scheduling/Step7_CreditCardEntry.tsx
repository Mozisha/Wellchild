'use client';

import { useState } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import CreditCardAuthModal from './CreditCardAuthModal';
import { CalendarDays, FileText, Mail, Info, CreditCard, Loader2 } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { processPayment, PaymentMethodRequest } from '@/app/services/api';
import { format } from 'date-fns';

const SummaryLine = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{label}</span>
        <span className="font-semibold text-gray-800">{value}</span>
    </div>
);

export default function Step7_CreditCardEntry() {
  const { draftId, selectedProvider, appointmentDetails, prevStep, nextStep } = useSchedulingStore();
  
  // Local state for form inputs
  const [isSigned, setIsSigned] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  // --- Setup the mutation to call the backend payment endpoint ---
  const mutation = useMutation({
    mutationFn: (paymentData: PaymentMethodRequest) => {
        if (!draftId) throw new Error("Booking session is invalid.");
        return processPayment(draftId, paymentData);
    },
    onSuccess: () => {
        toast.success("Payment successful!");
        // On success, advance to the final confirmation screen
        nextStep();
    },
    onError: (error) => {
        toast.error(`Payment Failed: ${error.message}`);
    }
  });

  const handleContinue = () => {
    // Basic validation
    if (!cardNumber || !expiryDate || !cvc || !cardholderName) {
        toast.warning("Please fill out all credit card details.");
        return;
    }
    if (!isSigned) {
        toast.warning("Please sign the credit card authorization form to continue.");
        return;
    }

    const payload: PaymentMethodRequest = {
        cardNumber,
        expiryDate,
        cvc,
        cardholderName,
    };

    mutation.mutate(payload);
  };
  
  // Guard clause for loading state
  if (!selectedProvider || !appointmentDetails) {
    return (
        <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
        </div>
    );
  }

  // --- Safely access and format dynamic data ---
  const primaryService = selectedProvider.services?.find(s => s.isPrimary) || selectedProvider.services?.[0];
  const serviceName = primaryService?.service?.name || 'Selected Service';
  const consultationFee = parseFloat(String(selectedProvider.consultationFee)) || 0;
  const processingFee = selectedProvider.processingFee || 0;
  const totalAmount = selectedProvider.totalAmount || (consultationFee + processingFee);
  const formattedTime = format(new Date(`${appointmentDetails.date.toDateString()} ${appointmentDetails.time}`), 'hh:mm a');


  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
        <p className="mt-2 text-gray-500">Please enter your payment details to confirm your appointment.</p>
      </div>

      <Card className="bg-[#F0F7F8] border-[#D6EBE0] rounded-2xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-[#0292B7]">
            <CalendarDays className="w-5 h-5" />
            <span>Appointment Details</span>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText className="w-4 h-4" />
                <span>Appointment Summary</span>
              </div>
              <SummaryLine label="Service" value={serviceName} />
              <SummaryLine label="Provider" value={`${selectedProvider.user.firstName} ${selectedProvider.user.lastName}`} />
              <SummaryLine label="Date & Time" value={`${format(appointmentDetails.date, 'MMM d, yyyy')} at ${formattedTime}`} />
              <hr className="my-2 border-gray-200" />
              <SummaryLine label="Consultation Fee" value={`$${consultationFee.toFixed(2)}`} />
              <SummaryLine label="Booking Fee" value={`$${processingFee.toFixed(2)}`} />
              <hr className="my-2 border-gray-200" />
              <div className="flex justify-between items-center font-bold text-gray-800">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
             <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-gray-800">Provider Contact Information</h4>
                        <p className="font-semibold text-sm text-gray-700 mt-2">{selectedProvider.user.firstName} {selectedProvider.user.lastName}</p>
                        <p className="text-xs text-gray-500">{selectedProvider.education}</p>
                        <p className="text-xs text-gray-500 mt-1">Email: info@wellchild.com</p>
                        <p className="text-xs text-gray-500">Office: {selectedProvider.user.phoneNumber}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs h-8 bg-gray-50 shadow-sm">
                        <Mail className="w-3 h-3 mr-1.5" />
                        Contact Provider
                    </Button>
                </div>
             </CardContent>
          </Card>
        </CardContent>
      </Card>
      
      <Card className="mt-6 shadow-lg border-gray-200 rounded-2xl">
        <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Add Credit Card</h3>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="cardholderName" className="text-xs font-semibold">Cardholder Name</Label>
                    <Input id="cardholderName" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} placeholder="Name on Card" className="mt-1 h-11" />
                </div>
                <div>
                    <Label htmlFor="cardNumber" className="text-xs font-semibold">Card Number</Label>
                    <div className="relative mt-1">
                        <Input id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" className="pl-10 h-11" />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </div>
                <div className="grid grid-cols-[1fr,1fr,auto] gap-3">
                    <div>
                        <Label htmlFor="expDate" className="text-xs font-semibold">Expiry Date</Label>
                        <Input id="expDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" className="mt-1 h-11"/>
                    </div>
                    <div>
                        <Label htmlFor="cvc" className="text-xs font-semibold">CVC</Label>
                        <Input id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" className="mt-1 h-11"/>
                    </div>
                    <div className="flex items-end pb-2">
                        <div className="flex items-center space-x-2">
                            <Switch id="remember-me" />
                            <Label htmlFor="remember-me" className="text-xs whitespace-nowrap">Remember</Label>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600 text-center">
            Kindly sign the credit card authorisation form <CreditCardAuthModal onSignature={() => setIsSigned(true)} /> to proceed.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
            <Button onClick={handleContinue} className="w-full h-12 text-base font-semibold" disabled={mutation.isPending}>
                {mutation.isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing Payment...
                    </>
                ) : (
                    'Confirm and Pay'
                )}
            </Button>
            <Button onClick={prevStep} variant="outline" className="w-full h-12 text-base font-semibold" disabled={mutation.isPending}>Back</Button>
        </div>
      </div>
    </div>
  );
}