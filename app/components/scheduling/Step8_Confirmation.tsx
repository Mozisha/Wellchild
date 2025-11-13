'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { format } from "date-fns";
import AddToCalendar from './AddToCalendar';
import { useSchedulingStore } from "@/app/store/schedulingStore";
import { CalendarDays, Mail, Loader2 } from "lucide-react";

export default function Step8_Confirmation() {
  // 1. Get ALL the necessary live data from the Zustand store
  const { selectedProvider, appointmentDetails, patientInfo, reset } = useSchedulingStore();
  
  // 2. Add a robust loading state. If the user refreshes on this page, this will show until the store rehydrates.
  if (!selectedProvider || !appointmentDetails || !patientInfo) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
            <p className="mt-4 text-gray-600">Loading your confirmation details...</p>
        </div>
    );
  }

  // 3. Safely extract and format the LIVE data
  const { date, time, sessionType } = appointmentDetails;
  
  // Helper function to calculate age from date of birth
  const calculateAge = (dob: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
  };
  const patientAge = calculateAge(patientInfo.dob);

  // Safely get service name and total amount
  const primaryService = selectedProvider.services?.find(s => s.isPrimary) || selectedProvider.services?.[0];
  const serviceName = primaryService?.service?.name || 'Therapy Session';
  const totalAmount = selectedProvider.totalAmount || 0;

  // Format time for display
  const [hours, minutes] = time.split(':');
  const dateObj = new Date();
  dateObj.setHours(Number(hours));
  dateObj.setMinutes(Number(minutes));
  const formattedTime = format(dateObj, 'hh:mm a');

  // Details for the "Add to Calendar" button
  const eventDetails = {
    title: `${serviceName} with ${selectedProvider.user.firstName} ${selectedProvider.user.lastName}`,
    description: `Your appointment for ${patientInfo.childFullName}. Session type: ${sessionType}.`,
    startTime: new Date(`${format(date, 'yyyy-MM-dd')}T${time}:00`),
    endTime: new Date(new Date(`${format(date, 'yyyy-MM-dd')}T${time}:00`).getTime() + 60 * 60000), // Adds 60 mins
    location: "Virtual/Telehealth",
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-[#0292B7]">Appointment Confirmed!</h2>
      <p className="mt-2 text-gray-500">Your {serviceName.toLowerCase()} consultation has been successfully booked.</p>

      <Card className="mt-8 text-left bg-[#F0F7F8] border-[#D6E8EB] rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-base font-bold text-[#0292B7] border-b border-gray-200 pb-4">
            <CalendarDays className="w-5 h-5" />
            <span>Appointment Details</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
             {/* Using a placeholder image as the API doesn't provide one */}
             <Image src="/user-placeholder.png" alt={`${selectedProvider.user.firstName} ${selectedProvider.user.lastName}`} width={50} height={50} className="rounded-full" />
             <div>
                <p className="font-semibold text-gray-800">{selectedProvider.user.firstName} {selectedProvider.user.lastName}</p>
                <p className="text-sm text-gray-500">{serviceName}</p>
                {/* Placeholder for licenses as it's not in the top-level provider object */}
                <p className="text-xs text-gray-400">Licensed in CA, NY, TX</p>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
                <div>
                    <p className="text-xs text-gray-500">Date & Time</p>
                    <p className="font-semibold text-sm">{format(date, 'EEEE, MMM d')} at {formattedTime}</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Session Type</p>
                    <p className="font-semibold text-sm">{sessionType}</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-sm">{appointmentDetails.appointmentType}</p>
                </div>
            </div>
            <div className="space-y-4 text-right">
                <div>
                    <p className="text-xs text-gray-500">Patient</p>
                    <p className="font-semibold text-sm">{patientInfo.childFullName} (Age {patientAge})</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Confirmation #</p>
                    {/* NOTE: Confirmation # is not provided by the current API, so this is still a placeholder */}
                    <p className="font-semibold text-sm">#WC-2025-001</p>
                </div>
                 <div>
                    <p className="text-xs text-gray-500">Total Paid</p>
                    <p className="font-semibold text-sm text-green-600">${Number(totalAmount).toFixed(2)}</p>
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
                    <p className="font-semibold text-sm text-gray-700 mt-2">{selectedProvider.user.firstName} {selectedProvider.user.lastName}</p>
                    <p className="text-xs text-gray-500">{selectedProvider.education}</p>
                    {/* Using placeholder contact info as it's not in the API response */}
                    <p className="text-xs text-gray-500 mt-1">Email: info@wellchild.com</p>
                    <p className="text-xs text-gray-500">Office: {selectedProvider.user.phoneNumber || '(555) 123-4567'}</p>
                </div>
                 <Button variant="outline" size="sm" className="text-xs h-8 bg-gray-50 shadow-sm">
                    <Mail className="w-3 h-3 mr-1.5" />
                    Contact Provider
                </Button>
              </div>
          </CardContent>
      </Card>

      <div className="mt-8 flex flex-col gap-4">
        <AddToCalendar {...eventDetails} />
        <Button onClick={reset} variant="outline" className="flex-1 h-12 font-semibold">Book Another Appointment</Button>
      </div>
    </div>
  );
}