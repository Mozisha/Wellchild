'use client';

import { useState } from 'react';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Step7_InsuranceForm() {
  const { setInsuranceInfo, nextStep, prevStep } = useSchedulingStore();

  const [company, setCompany] = useState('');
  const [memberId, setMemberId] = useState('');
  const [groupId, setGroupId] = useState('');

  const handleContinue = () => {
    // Basic validation
    if (!company || !memberId) {
      toast.error("Please enter your Insurance Company and Member ID.");
      return;
    }
    // Save the data to the global store
    setInsuranceInfo({ company, memberId, groupId });
    // Proceed to the next step
    nextStep();
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Insurance Information</h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">We need some basic information to connect you with a provider.</p>
      </div>

      <Card className="border-gray-200 rounded-2xl shadow-sm">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="company" className="font-semibold">Insurance Company *</Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g., Blue Cross Blue Shield, Aetna, Cigna" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="memberId" className="font-semibold">Member ID *</Label>
            <Input id="memberId" value={memberId} onChange={(e) => setMemberId(e.target.value)} placeholder="Insurance member ID number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="groupId" className="font-semibold">Group Number (if applicable)</Label>
            <Input id="groupId" value={groupId} onChange={(e) => setGroupId(e.target.value)} placeholder="Group number (optional)" />
          </div>
          
          <div className="flex flex-col gap-3 pt-4">
            <Button onClick={handleContinue} className="w-full h-12 bg-[#FFDE59] text-black hover:bg-[#ffe97a] font-semibold">
              Continue to Verification
            </Button>
            <Button onClick={prevStep} variant="outline" className="w-full h-12 text-gray-700 font-semibold">
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
        <strong>Privacy Notice:</strong> Your information is protected by HIPAA and will only be used to facilitate your healthcare appointment. We'll send a verification code to confirm your contact information.
      </div>
    </div>
  );
}