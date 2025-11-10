'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { format } from "date-fns";
import AddToCalendar from './AddToCalendar';
import { useSchedulingStore } from "@/app/store/schedulingStore";
import { CalendarDays, Mail } from "lucide-react";

export default function Step8_Confirmation() {
  const { selectedProvider, appointmentDetails, patientInfo, reset } = useSchedulingStore();
  
  if (!selectedProvider || !appointmentDetails || !patientInfo) {
    return <div>Loading confirmation details...</div>;
  }

  const { date, time, sessionType } = appointmentDetails;
  
  // Logic to calculate patient's age
  const calculateAge = (dob: Date) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
  };
  const patientAge = calculateAge(patientInfo.dob);

  const eventDetails = {
    title: `Speech Therapy with ${selectedProvider.name}`,
    description: `Your speech therapy appointment for ${patientInfo.childFullName}. Session type: ${sessionType}.`,
    startTime: new Date(`${format(date, 'yyyy-MM-dd')}T14:00:00`), // Assuming 2:00 PM PST
    endTime: new Date(new Date(`${format(date, 'yyyy-MM-dd')}T14:00:00`).getTime() + 30 * 60000), // Adds 30 mins
    location: "Virtual/Telehealth",
  };


  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-[#0292B7]">Appointment Confirmed!</h2>
      <p className="mt-2 text-gray-500">Your speech therapy (slp) consultation has been successfully booked and confirmed.</p>

      <Card className="mt-8 text-left bg-[#F0F7F8] border-[#D6E8EB] rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-base font-bold text-[#0292B7] border-b border-gray-200 pb-4">
            <CalendarDays className="w-5 h-5" />
            <span>Appointment Details</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
             <Image src="/speech-therapists/michelle-McGuinness.jpeg" alt={selectedProvider.name} width={50} height={50} className="rounded-full" />
             <div>
                <p className="font-semibold text-gray-800">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-500">Speech Therapy (SLP)</p>
                <p className="text-xs text-gray-400">Licensed in CA, NY, TX</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
                <div>
                    <p className="text-xs text-gray-500">Date & Time</p>
                    <p className="font-semibold text-sm">Tomorrow, 2:00 PM PST</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Session Type</p>
                    <p className="font-semibold text-sm">Video Consultation</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-sm">30 minutes</p>
                </div>
            </div>
            <div className="space-y-4 text-right">
                <div>
                    <p className="text-xs text-gray-500">Patient</p>
                    <p className="font-semibold text-sm">{patientInfo.childFullName} (Age {patientAge})</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Confirmation #</p>
                    <p className="font-semibold text-sm">#WC-2025-001</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Total Paid</p>
                    <p className="font-semibold text-sm text-green-600">$155.00</p>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-6 text-left rounded-2xl shadow-md">
          <CardContent className="p-5">
              <div className="flex justify-between items-center">
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

      <div className="mt-8 flex flex-col  gap-4">
        <AddToCalendar {...eventDetails} />
        <Button onClick={reset} variant="outline" className="flex-1 h-12 font-semibold">Book Another Appointment</Button>
      </div>
    </div>
  );
}