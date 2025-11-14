'use client';

import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, AlertTriangle, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

const SummaryLine = ({ label, value }: { label: string, value: string | React.ReactNode }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">{label}</span>
        <span className="font-semibold text-gray-800 text-sm">{value}</span>
    </div>
);

export default function Step8_InsuranceReview() {
  const { selectedProvider, appointmentDetails, insuranceInfo, nextStep, prevStep } = useSchedulingStore();

  if (!selectedProvider || !appointmentDetails || !insuranceInfo) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-teal-500" />
            <p className="mt-4 text-gray-600">Loading your review...</p>
        </div>
    );
  }

  const { date, time } = appointmentDetails;
  const formattedTime = format(new Date(`${date.toDateString()} ${time}`), 'hh:mm a');
  const serviceName = selectedProvider.services?.[0]?.service?.name || "Therapy Session";
  const totalAmount = selectedProvider.totalAmount || 0;

  return (
    <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Payment</h2>
            <p className="mt-2 text-gray-500">Please review and confirm your details.</p>
        </div>

        <Card className="bg-blue-50/50 border border-blue-200 rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-blue-800">
                    <CalendarDays className="w-5 h-5" />
                    <span>Appointment Details</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                    <Card className="bg-white/80 rounded-xl">
                        <CardContent className="p-4 space-y-3">
                            <SummaryLine label="Service" value={serviceName} />
                            <SummaryLine label="Provider" value={`${selectedProvider.user.firstName} ${selectedProvider.user.lastName}`} />
                            <SummaryLine label="Session Type" value="Video Consultation" />
                            <hr />
                            <SummaryLine label="Consultation Fee" value={`$${Number(selectedProvider.consultationFee).toFixed(2)}`} />
                            <SummaryLine label="Processing Fee" value={`$${Number(selectedProvider.processingFee).toFixed(2)}`} />
                            <hr />
                            <div className="flex justify-between items-center font-bold text-gray-800">
                                <span>Total Value</span>
                                <span>${Number(totalAmount).toFixed(2)}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-xl flex flex-col items-center text-center justify-center">
                        <AlertTriangle className="w-6 h-6 mb-2" />
                        <h4 className="font-bold text-sm">Attention!</h4>
                        <p className="text-xs mt-1">A credit card may be required for potential no-show or late cancellation fees.</p>
                    </div>
                </div>
                
                <Card className="bg-white/80 rounded-xl">
                     <CardContent className="p-4 flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-gray-800">Provider Contact Information</h4>
                            <p className="font-semibold text-sm text-gray-700 mt-2">{selectedProvider.user.firstName} {selectedProvider.user.lastName}</p>
                            <p className="text-xs text-gray-500">{selectedProvider.education}</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs h-8 bg-gray-50 shadow-sm">
                           <Mail className="w-3 h-3 mr-1.5" /> Contact
                        </Button>
                     </CardContent>
                </Card>
            </CardContent>
        </Card>

        <Card className="mt-6 shadow-lg rounded-2xl">
            <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Insurance Details</h3>
                <div className="space-y-3">
                    <SummaryLine label="Insurance Company" value={insuranceInfo.company} />
                    <SummaryLine label="Member ID" value={insuranceInfo.memberId} />
                    {insuranceInfo.groupId && <SummaryLine label="Group Number" value={insuranceInfo.groupId} />}
                </div>
            </CardContent>
        </Card>

        <div className="mt-8 flex flex-col gap-3">
            <Button onClick={nextStep} className="w-full h-12 bg-[#FFDE59] text-black hover:bg-[#ffe97a] font-semibold">Confirm Appointment</Button>
            <Button onClick={prevStep} variant="outline" className="w-full h-12 text-gray-700 font-semibold">Back</Button>
        </div>
    </div>
  );
}