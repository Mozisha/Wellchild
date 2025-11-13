'use strict';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Baby, User, Phone, Mail, Info, CalendarIcon, Loader2, AlertCircle } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { createDraft, CreateDraftRequest } from '@/app/services/api';

// --- Zod Schema with the Definitive Fix for Date Coercion ---
const patientInfoSchema = z.object({
  childFullName: z.string().min(3, { message: "Child's name is required." }),
  parentFullName: z.string().min(3, { message: "Parent's name is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  email: z.string().email({ message: "A valid email is required." }),

  // FIXED: Using z.preprocess is the correct way to handle this type conflict.
  // It transforms the incoming string from the form into a Date object *before* validation.
  dob: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      const date = new Date(arg);
      // Return an invalid date if the string is empty, so Zod can catch it
      return isNaN(date.getTime()) ? undefined : date;
    }
  }, z.date({ message: "A valid date of birth is required." })),

  sex: z.enum(['Male', 'Female', 'Other', 'Prefer not to say']),
  heardAboutUs: z.string().optional(),
});

// This type is correctly inferred from the schema's OUTPUT, so `dob` is a `Date` object.
type PatientInfoFormData = z.infer<typeof patientInfoSchema>;


// --- IconInput Component (Unchanged) ---
interface IconInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  icon: React.ElementType;
}
const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  ({ icon: Icon, className, ...props }, ref) => (
    <div className="relative mt-1">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      <Input className={cn("pl-10 h-12 rounded-lg border-[#DBDEE3]", className)} ref={ref} {...props} />
    </div>
  )
);
IconInput.displayName = 'IconInput';


export default function Step1_PatientInfo() {
  const { setDraftId, serviceId, nextStep } = useSchedulingStore();

  // The useForm hook is now fully compatible with the resolver.
  const { register, handleSubmit, formState: { errors } } = useForm<PatientInfoFormData>({
    resolver: zodResolver(patientInfoSchema) as any,
    defaultValues: { sex: 'Prefer not to say', heardAboutUs: '' },
  });

  const mutation = useMutation({
    mutationFn: createDraft,
    onSuccess: (response) => {
      const draftId = response?.data?.id;
      if (draftId) {
        setDraftId(draftId);
        nextStep();
      } else {
        console.error("API success response is missing the booking draft ID.", response);
      }
    },
    onError: (error) => {
      console.error("Form submission failed:", error.message);
    },
  });

  // The 'data' parameter is correctly typed, with 'dob' being a Date object.
  const onSubmit: SubmitHandler<PatientInfoFormData> = (data) => {
    if (!serviceId) {
      alert("Error: No service was selected. Please restart the booking process.");
      return;
    }

    const payload: CreateDraftRequest = {
      serviceId: serviceId,
      childName: data.childFullName,
      parentName: data.parentFullName,
      phoneNumber: data.phone,
      emailAddress: data.email,
      dateOfBirth: data.dob.toISOString(), // This now works reliably.
      sex: data.sex === 'Male' ? 'male' : data.sex === 'Female' ? 'female' : undefined,
      howDidYouHear: data.heardAboutUs || undefined,
    };

    mutation.mutate(payload);
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Let's Get Started!</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md mx-auto">
        We need some basic information to connect you with a provider.
      </p>

      <Card className="mt-8 max-w-3xl mx-auto border-[#DBDEE3] rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Patient & Parent Information</h3>
          
          <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-6">
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-3"><Baby className="w-5 h-5" /><span>Patient Information</span></div>
              <div>
                <Label htmlFor="childFullName" className="font-semibold text-gray-700">Child's Full Name *</Label>
                <Input id="childFullName" {...register('childFullName')} placeholder="Enter your child's full name" className="h-12 mt-1" />
                {errors.childFullName && <p className="text-red-500 text-sm mt-1">{errors.childFullName.message}</p>}
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-3"><User className="w-5 h-5" /><span>Parent/Guardian Information</span></div>
              <div>
                <Label htmlFor="parentFullName" className="font-semibold text-gray-700">Parent/Guardian Full Name *</Label>
                <Input id="parentFullName" {...register('parentFullName')} placeholder="Enter your full name" className="h-12 mt-1" />
                {errors.parentFullName && <p className="text-red-500 text-sm mt-1">{errors.parentFullName.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="font-semibold text-gray-700">Phone Number *</Label>
              <IconInput icon={Phone} id="phone" type="tel" {...register('phone')} placeholder="(555) 123-4567" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="font-semibold text-gray-700">Email Address *</Label>
              <IconInput icon={Mail} id="email" type="email" {...register('email')} placeholder="your.email@example.com" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dob" className="font-semibold text-gray-700">Date of Birth *</Label>
                <div className="relative mt-1">
                  <Input id="dob" type="date" {...register('dob')} className="h-12 w-full text-gray-500 block appearance-none [&::-webkit-calendar-picker-indicator]:opacity-100" />
                  <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>}
              </div>
              <div>
                <Label htmlFor="sex" className="font-semibold text-gray-700">Sex</Label>
                <select id="sex" {...register('sex')} className="flex h-12 w-full mt-1 rounded-lg border border-[#DBDEE3] bg-background px-3 py-2 text-sm">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="heardAboutUs" className="font-semibold text-gray-700">How did you hear about us?</Label>
              <Input id="heardAboutUs" {...register('heardAboutUs')} className="h-12 mt-1" />
            </div>

            {mutation.isError && (
                <div className="flex items-start gap-3 p-3 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Submission Failed:</strong> {mutation.error.message}</span>
                </div>
            )}

            <Button type="submit" disabled={mutation.isPending} className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg shadow-md hover:bg-[#ffe680] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creating Your Draft...
                </>
              ) : (
                'Continue booking'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="flex items-start gap-3 p-4 mt-6 max-w-3xl mx-auto rounded-lg bg-[#BEDBFF]">
        <Info className="h-5 w-5 text-[#3B82F6] shrink-0 mt-0.5" />
        <p className="text-sm text-[#1447E6]">
            <strong className="font-semibold">Privacy Notice:</strong> Your information is protected by HIPAA and will only be used to facilitate your healthcare appointment.
        </p>
      </div>
    </div>
  );
}