import { create } from 'zustand';
import { AppointmentDetails, PatientInfo, Provider } from '../lib/types';

// Enum for type-safe step management
export enum SchedulingStep {
  PATIENT_INFO,
  CONCERNS,
  MATCHING,
  RESULTS,
  BOOK_APPOINTMENT,
  PAYMENT,
  CONFIRMATION,
}

type State = {
  currentStep: SchedulingStep;
  serviceType: 'SPEECH_THERAPY' | 'ABA_THERAPY' | 'EVALUATION';
  patientInfo: PatientInfo | null;
  concerns: string[];
  selectedProvider: Provider | null;
  appointmentDetails: AppointmentDetails | null;
};

type Actions = {
  setServiceType: (service: State['serviceType']) => void;
  setPatientInfo: (info: PatientInfo) => void;
  setConcerns: (concerns: string[]) => void;
  setSelectedProvider: (provider: Provider) => void;
  setAppointmentDetails: (details: AppointmentDetails) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: SchedulingStep) => void;
  reset: () => void;
};

const initialState: State = {
  currentStep: SchedulingStep.PATIENT_INFO,
  serviceType: 'SPEECH_THERAPY',
  patientInfo: null,
  concerns: [],
  selectedProvider: null,
  appointmentDetails: null,
};

export const useSchedulingStore = create<State & Actions>((set) => ({
  ...initialState,
  setServiceType: (serviceType) => set({ serviceType }),
  setPatientInfo: (patientInfo) => set({ patientInfo }),
  setConcerns: (concerns) => set({ concerns }),
  setSelectedProvider: (selectedProvider) => set({ selectedProvider }),
  setAppointmentDetails: (appointmentDetails) => set({ appointmentDetails }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goToStep: (step) => set({ currentStep: step }),
  reset: () => set({ ...initialState }),
}));