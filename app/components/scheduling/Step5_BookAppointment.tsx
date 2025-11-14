'use client';

import { useState } from 'react';
import { useSchedulingStore, SchedulingStep } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from "@/components/ui/calendar";
import { Input } from '@/components/ui/input';
import { format } from "date-fns";
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { selectProvider, UpdateProviderRequest } from '@/app/services/api';
import { Loader2 } from 'lucide-react';

export default function Step5_BookAppointment() {
  const { 
    draftId,
    selectedProvider,
    paymentOption, // This value comes from the URL, set on the homepage
    setAppointmentDetails,
    goToStep
  } = useSchedulingStore();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('14:00'); // 24-hour format for state
  const [appointmentType, setAppointmentType] = useState<'30 min' | '60 min' | '90 min' | 'full-day'>('60 min');

  const mutation = useMutation({
    mutationFn: (providerData: UpdateProviderRequest) => {
        if (!draftId) throw new Error("Draft ID is missing.");
        return selectProvider(draftId, providerData);
    },
    onSuccess: (response) => {
      toast.success("Appointment time reserved successfully!");

      // Save the chosen date and time to the store so other components can see it
      if (date) {
        setAppointmentDetails({ 
          date, 
          time, 
          appointmentType, 
          sessionType: 'Video Consultation' 
        });
      }

      // --- THIS IS THE CORRECTED AND COMPLETE BRANCHING LOGIC ---
      if (paymentOption === 'SCHOLARSHIP') {
        goToStep(SchedulingStep.SCHOLARSHIP_INFO);
      } else if (paymentOption === 'INSURANCE') {
        // Direct the user to the start of the new insurance flow
        goToStep(SchedulingStep.INSURANCE_INFO);
      } else {
        // Default to the Private Pay flow for 'PRIVATE_PAY' or any other option
        goToStep(SchedulingStep.PRIVATE_PAY_INFO);
      }
    },
    onError: (error) => {
      toast.error(`Failed to book: ${error.message}`);
    },
  });

  const handleConfirm = () => {
    if (!date || !selectedProvider) {
      toast.error("Please select a date and ensure a provider is chosen.");
      return;
    }
    const [hours, minutes] = time.split(':').map(Number);
    const appointmentDatetime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hours,
        minutes
    ).toISOString();
    const payload: UpdateProviderRequest = {
        selectedProviderId: selectedProvider.id,
        appointmentDatetime: appointmentDatetime,
        sessionType: 'TELEHEALTH'
    };
    mutation.mutate(payload);
  };

  if (!selectedProvider) {
      return (
          <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
              <p className="ml-4 text-gray-600">Loading provider details...</p>
          </div>
      );
  }

  const primaryService = selectedProvider.services?.find(s => s.isPrimary) || selectedProvider.services?.[0];
  const serviceName = primaryService?.service?.name || 'Selected Service';
  const consultationFee = parseFloat(String(selectedProvider.consultationFee)) || 0;
  const processingFee = selectedProvider.processingFee || 0;
  const totalAmount = selectedProvider.totalAmount || (consultationFee + processingFee);

  const formatDisplayTime = (time24: string) => {
    const [hours, minutes] = time24.split(':');
    const dateObj = new Date();
    dateObj.setHours(Number(hours));
    dateObj.setMinutes(Number(minutes));
    return format(dateObj, 'hh:mm a');
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Schedule</h2>
      <p className="mt-2 text-gray-500 text-center">
        Select a time that works best for your family.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="shadow-lg border-gray-200 rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-800">Choose your tentative appointment time</h3>
              
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Appointment duration</p>
                <div className="flex flex-wrap gap-2">
                    {(['30 min', '60 min', '90 min', 'full-day'] as const).map(type => (
                        <Button 
                            key={type} 
                            variant={appointmentType === type ? 'default' : 'outline'}
                            onClick={() => setAppointmentType(type)}
                            className={appointmentType === type ? 'bg-teal-500 hover:bg-teal-600' : ''}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
              </div>

              <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Select a Time & Date</p>
                  <div className="flex items-center gap-2 flex-wrap">
                      <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="max-w-[150px] h-10" />
                      <span className="text-gray-600">on</span>
                      <p className="font-semibold text-gray-800">{date ? format(date, "PPP") : "Select a date"}</p>
                  </div>
              </div>

              <div className="mt-6 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    fromDate={new Date()}
                    captionLayout="dropdown" 
                    fromYear={new Date().getFullYear()} 
                    toYear={new Date().getFullYear() + 2} 
                  />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="shadow-lg border-gray-200 rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-lg text-gray-800">Appointment Summary</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex justify-between"><span>Service</span> <strong>{serviceName}</strong></div>
                <div className="flex justify-between"><span>Provider</span> <strong>{selectedProvider.user.firstName} {selectedProvider.user.lastName}</strong></div>
                <div className="flex justify-between"><span>Session Type</span> <strong>Video Consultation</strong></div>
                <hr />
                <div className="flex justify-between"><span>Consultation Fee</span> <span>${consultationFee.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Processing Fee</span> <span>${processingFee.toFixed(2)}</span></div>
                <hr />
                <div className="flex justify-between text-base font-bold text-gray-800"><span>Total</span> <span>${totalAmount.toFixed(2)}</span></div>
              </div>
              <p className="text-xs text-gray-400 text-center">
                {date && time ? `Selected: ${format(date, 'MMM d')} at ${formatDisplayTime(time)}` : 'Select a date and time to continue'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Button onClick={handleConfirm} disabled={!date || mutation.isPending} className="flex-1 h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg hover:bg-[#ffe97a] transition-colors">
            {mutation.isPending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Confirming...
                </>
            ) : (
                'Confirm Appointment'
            )}
          </Button>
          <Button variant="outline" className="flex-1 h-12 text-base font-semibold">Cancel</Button>
      </div>
    </div>
  );
}