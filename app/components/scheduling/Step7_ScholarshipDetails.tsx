'use client';

import { useState } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, FileText, Info, AlertTriangle, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

const SummaryLine = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
    <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{label}</span>
        <span className="font-semibold text-gray-800">{value}</span>
    </div>
);

export default function Step7_ScholarshipDetails() {
  const { selectedProvider, appointmentDetails, prevStep, nextStep } = useSchedulingStore();

  // Local state for the scholarship form inputs
  const [scholarshipId, setScholarshipId] = useState('');
  const [scholarshipYear, setScholarshipYear] = useState('');
  
  // Guard clause for loading state
  if (!selectedProvider || !appointmentDetails) {
    return (
        <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
            <p className="ml-4 text-gray-600">Loading details...</p>
        </div>
    );
  }

  const handleContinue = () => {
    if (!scholarshipId || !scholarshipYear) {
      toast.warning("Please enter your Scholarship ID and Year to continue.");
      return;
    }
    // In a real app, you would trigger a mutation here to verify the scholarship ID.
    // For now, we will simulate success and proceed to the next step.
    console.log("Verifying Scholarship:", { scholarshipId, scholarshipYear });
    toast.info("Verifying scholarship details...");
    
    // Simulate a short delay for verification before proceeding
    setTimeout(() => {
        nextStep();
    }, 1500);
  };

  // --- Safely access and format dynamic data from the store ---
  const primaryService = selectedProvider.services?.find(s => s.isPrimary) || selectedProvider.services?.[0];
  const serviceName = primaryService?.service?.name || 'Selected Service';
  const totalAmount = selectedProvider.totalAmount || 0; // Scholarship flow might have $0, but we show the value
  const formattedTime = format(new Date(`${appointmentDetails.date.toDateString()} ${appointmentDetails.time}`), 'hh:mm a');


  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Scholarship Verification</h2>
        <p className="mt-2 text-gray-500">Please provide your scholarship details to proceed.</p>
      </div>

      <Card className="bg-[#F0F7F8] border-[#D6E8EB] rounded-2xl shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-[#0292B7]">
            <CalendarDays className="w-5 h-5" />
            <span>Appointment Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
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
                <div className="flex justify-between items-center font-bold text-gray-800">
                  <span>Session Value</span>
                  {/* We show the value of the session, even if covered by scholarship */}
                  <span>${Number(totalAmount).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            <div className="bg-[#FFFAEB] border border-[#FFDE59] text-[#B45309] p-4 rounded-xl flex flex-col items-center text-center justify-center">
                <AlertTriangle className="w-6 h-6 mb-2" />
                <h4 className="font-bold text-sm">No-Show Policy</h4>
                <p className="text-xs mt-1">A fee may be charged for no-shows or late cancellations (less than 24 hours notice).</p>
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50">
             <CardContent className="p-4">
                <h4 className="font-bold text-gray-800">Provider Information</h4>
                <p className="font-semibold text-sm text-gray-700 mt-2">{selectedProvider.user.firstName} {selectedProvider.user.lastName}</p>
                <p className="text-xs text-gray-500">{selectedProvider.education}</p>
             </CardContent>
          </Card>
        </CardContent>
      </Card>
      
      <Card className="mt-6 shadow-lg border-gray-200 rounded-2xl">
        <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Scholarship Details</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="scholarshipId" className="text-xs font-semibold">Scholarship ID</Label>
                    <div className="relative mt-1">
                        <Input id="scholarshipId" value={scholarshipId} onChange={(e) => setScholarshipId(e.target.value)} placeholder="Enter Scholarship ID" className="h-11"/>
                    </div>
                </div>
                <div>
                    <Label htmlFor="year" className="text-xs font-semibold">Award Year</Label>
                    <div className="relative mt-1">
                        <Input id="year" value={scholarshipYear} onChange={(e) => setScholarshipYear(e.target.value)} placeholder="e.g., 2024-2025" className="h-11"/>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 flex flex-col gap-3">
        <Button onClick={handleContinue} className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg">Verify and Continue</Button>
        <Button onClick={prevStep} variant="outline" className="w-full h-12 text-base font-semibold">Back</Button>
      </div>
    </div>
  );
}