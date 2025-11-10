'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { format } from "date-fns";
import AddToCalendar from './AddToCalendar';
import { useSchedulingStore } from "@/app/store/schedulingStore";

export default function Step7_Confirmation() {
  const { selectedProvider, appointmentDetails, patientInfo, reset } = useSchedulingStore();
  
  if (!selectedProvider || !appointmentDetails || !patientInfo) {
    return <div>Loading confirmation details...</div>;
  }

  const { date, time, sessionType } = appointmentDetails;
  const eventDetails = {
    title: `Speech Therapy with ${selectedProvider.name}`,
    description: `Your speech therapy appointment for ${patientInfo.childFullName}. Session type: ${sessionType}.`,
    startTime: new Date(`${format(date, 'yyyy-MM-dd')}T${time.replace(' PM', ':00').replace(' AM', ':00')}`), // Basic time conversion
    endTime: new Date(new Date(`${format(date, 'yyyy-MM-dd')}T${time.replace(' PM', ':00').replace(' AM', ':00')}`).getTime() + 60 * 60000), // Adds 60 mins
    location: "Virtual/Telehealth",
  };


  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Appointment Confirmed!</h2>
      <p className="mt-2 text-gray-500">Your speech therapy (slp) consultation has been successfully booked and confirmed.</p>

      <Card className="mt-8 text-left max-w-xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-start border-b pb-4">
            <div>
              <h3 className="font-bold text-lg">Appointment Details</h3>
              <div className="flex items-center gap-2 mt-2">
                 <Image src={selectedProvider.imageUrl} alt={selectedProvider.name} width={40} height={40} className="rounded-full" />
                 <div>
                    <p className="font-semibold">{selectedProvider.name}</p>
                    <p className="text-sm text-gray-500">Lausanne II, CA, US</p>
                 </div>
              </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500">Patient</p>
                <p className="font-semibold">{patientInfo.childFullName} (Age 8)</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-semibold">{format(date, 'EEEE, LLL d')} at {time}</p>
                <p className="text-sm text-gray-500">Session Type</p>
                <p className="font-semibold">{sessionType}</p>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500">Confirmation #</p>
                <p className="font-semibold">#WC-2025-001</p>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-semibold">$155.00</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-6 text-left max-w-xl mx-auto">
          <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Provider Contact Information</h3>
              <p className="font-semibold">{selectedProvider.name}</p>
              <p className="text-sm text-gray-500">{selectedProvider.title}</p>
              <div className="mt-2 text-sm">
                <p>Email: info@wellchild.com</p>
                <p>Office: (555) 123-4567</p>
              </div>
          </CardContent>
      </Card>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <AddToCalendar {...eventDetails} />
        <Button onClick={reset} variant="outline" className="flex-1">Book Another Appointment</Button>
      </div>
    </div>
  );
}