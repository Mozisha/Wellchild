'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSchedulingStore } from '../../store/schedulingStore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PatientInfo } from '../../lib/types';


const patientInfoSchema = z.object({
  childFullName: z.string().min(3, { message: "Child's name is required." }),
  parentFullName: z.string().min(3, { message: "Parent's name is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
  email: z.string().email({ message: "A valid email is required." }),
  dob: z.coerce.date({
    error: 'A valid date of birth is required.',
  }),
  sex: z.enum(['Male', 'Female', 'Other', 'Prefer not to say']),
  heardAboutUs: z.string().optional(),
});

type PatientInfoFormData = z.input<typeof patientInfoSchema>;


type ValidatedPatientInfo = z.output<typeof patientInfoSchema>;


export default function Step1_PatientInfo() {
  const { setPatientInfo, nextStep } = useSchedulingStore();

  const { register, handleSubmit, formState: { errors } } = useForm<PatientInfoFormData>({
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

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Let's Get Started!</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md mx-auto">
        We need some basic information to connect you with a provider.
      </p>

      <Card className="mt-8 max-w-lg mx-auto ">
        <CardHeader>
          <CardTitle>Patient & Parent Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div>
              <Label htmlFor="childFullName">Child's Full Name *</Label>
              <Input id="childFullName" {...register('childFullName')} placeholder="Enter your child's full name" />
              {errors.childFullName && <p className="text-red-500 text-sm mt-1">{errors.childFullName?.message}</p>}
            </div>
            <div>
              <Label htmlFor="parentFullName">Parent/Guardian Full Name *</Label>
              <Input id="parentFullName" {...register('parentFullName')} placeholder="Enter your full name" />
              {errors.parentFullName && <p className="text-red-500 text-sm mt-1">{errors.parentFullName?.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" {...register('phone')} placeholder="(555) 123-4567" />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" {...register('email')} placeholder="youremail@example.com" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div>
                 <Label htmlFor="dob">Date of Birth *</Label>
                 <Input id="dob" type="date" {...register('dob')} />
                 {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob?.message}</p>}
               </div>
               <div>
                 <Label htmlFor="sex">Sex</Label>
                 <select 
                   id="sex" 
                   {...register('sex')} 
                   className="flex h-10 w-full rounded-md border border-[#DBDEE3]  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
              <Label htmlFor="heardAboutUs">How did you hear about us?</Label>
              <Input id="heardAboutUs" {...register('heardAboutUs')} />
            </div>

            <Button type="submit" className="w-full bg-[#FFDE59] text-black hover:bg-[#ffe680]">
              Continue Booking
            </Button>
          </form>
        </CardContent>
      </Card>
      <p className="text-center text-xs text-gray-400 mt-4 max-w-md mx-auto">
        <strong>Privacy Notice:</strong> Your information is protected by HIPAA and will only be used to facilitate your healthcare appointment. We'll send a verification code to confirm your contact information.
      </p>
    </div>
  );
}