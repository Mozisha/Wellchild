'use client';

import { useState } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from '@/components/ui/input';

export default function Step5_BookAppointment() {
  const { setAppointmentDetails, nextStep, selectedProvider } = useSchedulingStore();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('02:00 PM');
  const [appointmentType, setAppointmentType] = useState<'30 min' | '60 min' | '90 min' | 'full-day'>('60 min');

  const handleConfirm = () => {
    if (date) {
      setAppointmentDetails({ date, time, appointmentType, sessionType: 'Video Consultation' });
      nextStep();
    }
  };

  if (!selectedProvider) return <p>Loading provider details...</p>;

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Schedule</h2>
      <p className="mt-2 text-gray-500 text-center">
        What schedule fits you, we will find a provider near you. We need some basic information to connect you with a an aba therapy provider.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Booking Details */}
        <div className="">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-800">Choose your tentative appointment time</h3>
              
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Appointment type</p>
                <div className="flex gap-2">
                    {['30 min', '60 min', '90 min', 'full-day'].map(type => (
                        <Button 
                            key={type} 
                            variant={appointmentType === type ? 'default' : 'outline'}
                            onClick={() => setAppointmentType(type as any)}
                            className={appointmentType === type ? 'bg-[#0292B7] hover:bg-[#027a9e]' : ''}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
              </div>

              <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Time & Date</p>
                  <div className="flex items-center gap-2">
                      <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="max-w-[150px]" />
                      <span>on</span>
                      <p className="font-semibold">{date ? format(date, "PPP") : "Select a date"}</p>
                  </div>
              </div>

              <div className="mt-6 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Appointment Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-lg text-gray-800">Appointment Summary</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex justify-between"><span>Service</span> <strong>Speech Therapy (SLP)</strong></div>
                <div className="flex justify-between"><span>Provider</span> <strong>{selectedProvider.name}</strong></div>
                <div className="flex justify-between"><span>Session Type</span> <strong>Video Consultation</strong></div>
                <hr />
                <div className="flex justify-between"><span>Consultation Fee</span> <span>$150.00</span></div>
                <div className="flex justify-between"><span>Processing Fee</span> <span>$5.00</span></div>
                <hr />
                <div className="flex justify-between text-base font-bold text-gray-800"><span>Total</span> <span>$155.00</span></div>
              </div>
              <p className="text-xs text-gray-400">Select a date and time to continue</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Button onClick={handleConfirm} disabled={!date} className="flex-1 bg-[#FFDE59] text-[#33343B] hover:bg-[#ffe680]">Confirm Appointment</Button>
          <Button variant="outline" className="flex-1" onClick={() => { /* prevStep() maybe? */ }}>Cancel</Button>
      </div>
    </div>
  );
}