// app/store/schedulingStore.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; // 1. IMPORT the middleware
import { PatientInfo, Provider, AppointmentDetails } from '../lib/types';

// ... (Your other type definitions remain the same) ...
export type PaymentOption = 'PRIVATE_PAY' | 'SCHOLARSHIP' | 'INSURANCE';
export type ServiceType = 'SPEECH_THERAPY' | 'ABA_THERAPY' | 'EVALUATION';
export enum SchedulingStep {
  PATIENT_INFO,
  CONCERNS,
  RESULTS,
  BOOK_APPOINTMENT,
  PRIVATE_PAY_INFO,
  PRIVATE_PAY_CREDIT_CARD,
  SCHOLARSHIP_INFO,
  SCHOLARSHIP_DETAILS,
  CONFIRMATION,
}

type State = {
  currentStep: SchedulingStep;
  draftId: string | null;
  serviceId: string | null;
  serviceValue: ServiceType | null;
  paymentOption: PaymentOption | null;
  patientInfo: PatientInfo | null;
  concerns: string[];
  selectedProvider: Provider | null;
  availableProviders: Provider[];
  appointmentDetails: AppointmentDetails | null;
};

type Actions = {
  setDraftId: (id: string) => void;
  setService: (service: { id: string; value: ServiceType }) => void;
  setPaymentOption: (option: PaymentOption) => void;
  setPatientInfo: (info: PatientInfo) => void;
  setConcerns: (concerns: string[]) => void;
  setSelectedProvider: (provider: Provider) => void;
  setAppointmentDetails: (details: AppointmentDetails) => void;
  setAvailableProviders: (providers: Provider[]) => void;
  // NEW ACTION to rehydrate the entire store from a server draft
  rehydrateFromDraft: (draft: Partial<State>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: SchedulingStep) => void;
  reset: () => void;
};

const initialState: State = {
  currentStep: SchedulingStep.PATIENT_INFO,
  draftId: null,
  serviceId: null,
  serviceValue: null,
  paymentOption: null,
  patientInfo: null,
  concerns: [],
  selectedProvider: null,
  availableProviders: [],
  appointmentDetails: null,
};

export const useSchedulingStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,

      setService: (service) => set({ serviceId: service.id, serviceValue: service.value }),
      setDraftId: (id) => set({ draftId: id }),
      setPaymentOption: (paymentOption) => set({ paymentOption }),
      setPatientInfo: (patientInfo) => set({ patientInfo }),
      setConcerns: (concerns) => set({ concerns }),
      setSelectedProvider: (selectedProvider) => set({ selectedProvider }),
      setAvailableProviders: (providers) => set({ availableProviders: providers }),
      setAppointmentDetails: (appointmentDetails) => set({ appointmentDetails }),
      
      rehydrateFromDraft: (draft) => set((state) => ({ ...state, ...draft })),

      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0 })),
      goToStep: (step) => set({ currentStep: step }),
      // Make reset also clear the draftId
      reset: () => set({ ...initialState, draftId: null }),
    }),
    {
      // 3. CONFIGURE the middleware
      name: 'wellchild-booking-session', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // use localStorage
      
      // 4. THIS IS THE MOST IMPORTANT PART FOR SECURITY
      // We only store the draftId, nothing else. All other state remains in-memory.
      partialize: (state) => ({ draftId: state.draftId }),
    }
  )
);