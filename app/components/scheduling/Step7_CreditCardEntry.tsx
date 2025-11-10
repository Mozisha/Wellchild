'use client';

import { useState } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import CreditCardAuthModal from './CreditCardAuthModal';
import { CalendarDays, FileText, Mail, Info, CreditCard } from 'lucide-react';

const SummaryLine = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{label}</span>
        <span className="font-semibold text-gray-800">{value}</span>
    </div>
);

export default function Step7_CreditCardEntry() {
  const { selectedProvider, prevStep, nextStep } = useSchedulingStore();
  const [isSigned, setIsSigned] = useState(false);
  
  if (!selectedProvider) return <div>Loading...</div>;

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
        <p className="mt-2 text-gray-500">We need to verify your payment</p>
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
              <SummaryLine label="Service" value="Speech Therapy (SLP)" />
              <SummaryLine label="Provider" value="Dr. Sarah Johnson" />
              <SummaryLine label="Session Type" value="Video Consultation" />
              <hr className="my-2 border-gray-200" />
              <SummaryLine label="Consultation Fee" value="$150.00" />
              <SummaryLine label="Processing Fee" value="$5.00" />
              <hr className="my-2 border-gray-200" />
              <div className="flex justify-between items-center font-bold text-gray-800">
                <span>Total</span>
                <span>$ 155.00</span>
              </div>
              <p className="text-center text-xs text-gray-400 pt-2">
                Select a date and time to continue
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
             <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-gray-800">Provider Contact Information</h4>
                        <p className="font-semibold text-sm text-gray-700 mt-2">Dr. Sarah Johnson</p>
                        <p className="text-xs text-gray-500">Child Psychology Specialist</p>
                        <p className="text-xs text-gray-500 mt-1">Email: sarah.johnson@wellchild.com</p>
                        <p className="text-xs text-gray-500">Office: (555) 123-4567</p>
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
                    <Label htmlFor="cardNumber" className="text-xs font-semibold">Card Number</Label>
                    <div className="relative mt-1">
                        <Input id="cardNumber" placeholder="0192 - 1245 - 0000 - 0000" className="pl-10 h-11" />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                </div>
                <div className="grid grid-cols-[1fr,1fr,auto] gap-3">
                    <div>
                        <Label htmlFor="expDate" className="text-xs font-semibold">Expire Date</Label>
                        <div className="relative mt-1">
                            <Input id="expDate" placeholder="12/22" className="h-11"/>
                            <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="cvc" className="text-xs font-semibold">CVC/CVV</Label>
                        <div className="relative mt-1">
                            <Input id="cvc" placeholder="234" className="h-11"/>
                            <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                    <div className="flex items-end pb-2">
                        <div className="flex items-center space-x-2">
                            <Switch id="remember-me" />
                            <Label htmlFor="remember-me" className="text-xs whitespace-nowrap">Remember my card</Label>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600 text-center">
            Kindly sign the credit card authorisation form <CreditCardAuthModal onSignature={() => setIsSigned(true)} /> to proceed with your appointment.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
            <Button onClick={nextStep} className="w-full h-12 text-base font-semibold" disabled={!isSigned}>Continue</Button>
            <Button onClick={prevStep} variant="outline" className="w-full h-12 text-base font-semibold">Back</Button>
        </div>
      </div>
    </div>
  );
}