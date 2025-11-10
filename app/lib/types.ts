export interface PatientInfo {
  childFullName: string;
  parentFullName: string;
  phone: string;
  email: string;
  dob: Date;
  sex: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  heardAboutUs: string;
}

export interface Provider {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  specialties: string[];
  about: string;
  qualifications: string[];
  certifications: string[];
  experienceYears: number;
}

export interface AppointmentDetails {
  date: Date;
  time: string;
  appointmentType: '30 min' | '60 min' | '90 min' | 'full-day';
  sessionType: 'Video Consultation';
}