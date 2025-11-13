// app/lib/types.ts

export interface PatientInfo {
  childFullName: string;
  parentFullName: string;
  phone: string;
  email: string;
  dob: Date;
  sex: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  heardAboutUs?: string;
}

// --- THIS IS THE CORRECTED PROVIDER TYPE ---
export interface Provider {
  id: string;
  user: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  bio: string;
  practiceName: string;
  consultationFee: string | number;
  processingFee: number;
  totalAmount: number;
  
  // THE FIX: Changed from string[] to string to match the backend API response
  certifications: string; 
  
  education: string;
  serviceTypes: ('TELEHEALTH' | 'IN_PERSON')[];
  availableSlots: string[];
  nextAvailableSlot: string;
  totalAvailableSlots: number;
  services: Array<{
    id: string;
    providerId: string;
    serviceId: string;
    isPrimary: boolean;
    primaryConcerns: string[];
    yearsExperience: number;
    consultationFee: string | number;
    service: {
      id:string;
      name: string;
    }
  }>;
}

export interface AppointmentDetails {
  date: Date;
  time: string;
  appointmentType: '30 min' | '60 min' | '90 min' | 'full-day';
  sessionType: 'Video Consultation' | 'In-Person';
}