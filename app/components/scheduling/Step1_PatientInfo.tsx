'use strict';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { PatientInfo } from '../../lib/types';
import { cn } from '@/lib/utils';
import { Baby, User, Phone, Mail, Info, CalendarIcon } from 'lucide-react';

// --- NO CHANGES to Schema or Types ---
// Using your exact working schema and type definitions
const patientInfoSchema = z.object({
  childFullName: z.string().min(3, { message: "Child's name is required." }),
  parentFullName: z.string().min(3, { message: "Parent's name is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  dob: z.coerce.date().refine(
    (d) => !Number.isNaN(d.getTime()),
    { message: 'A valid date of birth is required.' }
  ),
  sex: z.enum(['Male', 'Female', 'Other', 'Prefer not to say']),
  heardAboutUs: z.string().optional(),
});

type PatientInfoFormData = z.input<typeof patientInfoSchema>;
type ValidatedPatientInfo = z.output<typeof patientInfoSchema>;


// --- NEW COMPONENT: A reusable Input with an icon slot ---
// This is purely for styling and does not affect form logic.
interface IconInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  icon: React.ElementType;
}

const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  ({ icon: Icon, className, ...props }, ref) => {
    return (
      <div className="relative mt-1">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        <Input
          className={cn("pl-10 h-12 rounded-lg border-[#DBDEE3]", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
IconInput.displayName = 'IconInput';


export default function Step1_PatientInfo() {
  // --- NO CHANGES to Form Logic ---
  const { setPatientInfo, nextStep } = useSchedulingStore();

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<PatientInfoFormData>({
    resolver: zodResolver(patientInfoSchema),
    defaultValues: {
      dob: '2018-11-17', 
      sex: 'Prefer not to say',
      heardAboutUs: ''
    }
  });
  
  const onSubmit: SubmitHandler<PatientInfoFormData> = (data) => {
    const validatedData: ValidatedPatientInfo = patientInfoSchema.parse(data);
    setPatientInfo(validatedData as PatientInfo);
    nextStep();
  };

  // --- UPDATES are only in the JSX for styling ---
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Let's Get Started!</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md mx-auto">
        We need some basic information to connect you with a provider.
      </p>

      <Card className="mt-8 max-w-3xl mx-auto  border-[#DBDEE3] rounded-2xl">
        <CardContent className="p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Patient & Parent Information</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Patient Information Section */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-3">
                <Baby className="w-5 h-5" />
                <span>Patient Information</span>
              </div>
              <div>
                <Label htmlFor="childFullName" className="font-semibold text-gray-700">Child's Full Name *</Label>
                <Input id="childFullName" {...register('childFullName')} placeholder="Enter your child's full name" className="h-12 mt-1 rounded-lg border-[#DBDEE3]" />
                {errors.childFullName && <p className="text-red-500 text-sm mt-1">{errors.childFullName?.message}</p>}
              </div>
            </div>

            {/* Parent/Guardian Information Section */}
             <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-3">
                <User className="w-5 h-5" />
                <span>Parent/Guardian Information</span>
              </div>
              <div>
                <Label htmlFor="parentFullName" className="font-semibold text-gray-700">Parent/Guardian Full Name *</Label>
                <Input id="parentFullName" {...register('parentFullName')} placeholder="Enter your full name" className="h-12 mt-1 rounded-lg border-[#DBDEE3]" />
                {errors.parentFullName && <p className="text-red-500 text-sm mt-1">{errors.parentFullName?.message}</p>}
              </div>
            </div>
            
            {/* Other Fields with Icons */}
            <div>
              <Label htmlFor="phone" className="font-semibold text-gray-700">Phone Number *</Label>
              <IconInput icon={Phone} id="phone" type="tel" {...register('phone')} placeholder="(555) 123-4567" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="font-semibold text-gray-700">Email Address *</Label>
              <IconInput icon={Mail} id="email" type="email" {...register('email')} placeholder="your.email@example.com" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
   <div>
     <Label htmlFor="dob" className="font-semibold text-gray-700">Date of Birth</Label>
     <div className="relative mt-1">
       <Input
         id="dob"
         type="date"
         {...register('dob')}
         className={cn(
           "h-12 w-full rounded-lg border-[#DBDEE3] text-gray-500",
           // This utility makes the native icon clickable and visible
           // It styles the pseudo-element for the calendar picker indicator
           "block appearance-none [&::-webkit-calendar-picker-indicator]:opacity-100"
         )}
       />
        {/* We add a custom icon that sits *behind* the clickable native one
            to ensure consistent styling across browsers. The native one is invisible but clickable. */}
       <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
     </div>
     {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>}
   </div>
   <div>
     <Label htmlFor="sex" className="font-semibold text-gray-700">Sex</Label>
     <select 
       id="sex" 
       {...register('sex')} 
       className="flex h-12 w-full mt-1 rounded-lg border border-[#DBDEE3] bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
     >
       <option value="Male">Male</option>
       <option value="Female">Female</option>
       <option value="Other">Other</option>
       <option value="Prefer not to say">Prefer not to say</option>
     </select>
     {errors.sex && <p className="text-red-500 text-sm mt-1">{errors.sex?.message}</p>}
   </div>
</div>
            
            <div>
              <Label htmlFor="heardAboutUs" className="font-semibold text-gray-700">How did you hear about us?</Label>
              <Input id="heardAboutUs" {...register('heardAboutUs')} className="h-12 mt-1 rounded-lg border-[#DBDEE3]" />
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold bg-[#FFDE59] text-black rounded-lg shadow-md hover:bg-[#ffe97a] transition-colors">
              Continue booking
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {/* Privacy Notice Box - Styled to match */}
      <div className="flex items-start gap-3 p-4 mt-6 max-w-3xl mx-auto rounded-lg bg-[#BEDBFF] border border-[#D6E4FF]">
        <Info className="h-5 w-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[#1447E6]">
            <strong className="font-semibold">Privacy Notice:</strong> Your information is protected by HIPAA and will only be used to facilitate your healthcare appointment. We'll send a verification code to confirm your contact information.
        </p>
      </div>
    </div>
  );
}