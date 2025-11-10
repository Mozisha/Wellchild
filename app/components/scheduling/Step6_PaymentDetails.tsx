'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { format } from "date-fns";
import CreditCardAuthModal from './CreditCardAuthModal';
import { Switch } from '@/components/ui/switch';

export default function Step6_PaymentDetails() {
  const { selectedProvider, appointmentDetails, prevStep, nextStep } = useSchedulingStore();
  
  if (!selectedProvider || !appointmentDetails) {
    return <div>Loading appointment details...</div>;
  }

  const { date, time } = appointmentDetails;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Payment</h2>
      <p className="mt-2 text-gray-500 text-center">We need to verify your payment</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Payment Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-white">
            <CardContent className="p-6">
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-6">
                    <Image src="/super-child.png" alt="Happy child" layout="fill" objectFit="cover" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">PAY WITH CREDIT CARD OR HSA/FSA</h3>
                <p className="text-sm text-gray-500 mt-1">Your transaction is secure & encrypted.</p>
                <div className="mt-4 bg-teal-50 p-4 rounded-lg text-teal-800 text-sm">
                    <p><strong>Cash-pay rates for ADHD Testing. This includes a comprehensive evaluation and personalized treatment plan.</strong></p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>1 hour for the initial assessment</li>
                        <li>1 final ADHD treatment plan session, comprehensive written report, personalized treatment plan, and recommendations.</li>
                    </ul>
                </div>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Add Credit Card</h3>
              <div className="space-y-4">
                 <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="0162 - 0475 - 0000 - 0163" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="expDate">Expire Date</Label>
                        <Input id="expDate" placeholder="12/25" />
                    </div>
                    <div>
                        <Label htmlFor="cvc">CVV/CVC</Label>
                        <Input id="cvc" placeholder="254" />
                    </div>
                 </div>
                 <div className="flex items-center space-x-2 pt-2">
                    <Switch id="remember-me" />
                    <Label htmlFor="remember-me">Remember my card</Label>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right: Summary */}
        <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white">
                <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Appointment Details</h3>
                    <div className="text-sm space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Service</span>
                            <span className="font-semibold text-gray-800">Speech Therapy</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Provider</span>
                            <span className="font-semibold text-gray-800">{selectedProvider.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Date & Time</span>
                            <span className="font-semibold text-gray-800">{format(date, 'MMM d, yyyy')} at {time}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span>Total</span>
                            <span>$155.00</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-white">
                <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-2">Provider Contact Information</h3>
                    <p className="text-sm font-semibold">{selectedProvider.name}</p>
                    <p className="text-sm text-gray-500">{selectedProvider.title}</p>
                    <p className="text-sm text-gray-500 mt-2">Email: info@wellchild.com</p>
                    <p className="text-sm text-gray-500">Office: (555) 123-4567</p>
                </CardContent>
            </Card>
        </div>
      </div>
      
      <div className="mt-8 max-w-md mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600 text-center">
            Kindly sign the credit card authorization form <CreditCardAuthModal /> to proceed with your appointment.
        </p>
        <div className="w-full flex gap-4">
            <Button onClick={nextStep} className="flex-1 bg-gray-300 text-gray-500 cursor-not-allowed">Continue</Button>
            <Button onClick={prevStep} variant="outline" className="flex-1">Back</Button>
        </div>
      </div>
    </div>
  );
}