import { create } from 'zustand';
import { PatientInfo, Provider, AppointmentDetails } from '../lib/types';

// --- TYPE DEFINITIONS ---
// These define the shape of the data used in the store.

export type PaymentOption = 'PRIVATE_PAY' | 'SCHOLARSHIP' | 'INSURANCE';
export type ServiceType = 'SPEECH_THERAPY' | 'ABA_THERAPY' | 'EVALUATION';

export interface InsuranceInfo {
  company: string;
  memberId: string;
  groupId?: string;
}

// The single source of truth for all steps in every booking flow.
export enum SchedulingStep {
  PATIENT_INFO,
  CONCERNS,
  RESULTS,
  BOOK_APPOINTMENT,
  // Private Pay Path
  PRIVATE_PAY_INFO,
  PRIVATE_PAY_CREDIT_CARD,
  // Scholarship Path
  SCHOLARSHIP_INFO,
  SCHOLARSHIP_DETAILS,
  // Insurance Path
  INSURANCE_INFO,
  INSURANCE_FORM,
  INSURANCE_REVIEW,
  // Final Confirmation Step
  CONFIRMATION,
}


// --- STORE STATE & ACTIONS ---
// Defines the complete shape of our global state and the functions that can modify it.

type State = {
  currentStep: SchedulingStep;
  draftId: string | null;
  serviceId: string | null;
  serviceValue: ServiceType | null;
  paymentOption: PaymentOption | null;
  selectedInsuranceLabel: string | null;
  patientInfo: PatientInfo | null;
  insuranceInfo: InsuranceInfo | null; 
  concerns: string[];
  selectedProvider: Provider | null;
  availableProviders: Provider[];
  appointmentDetails: AppointmentDetails | null;
};

type Actions = {
  setInitialSelections: (params: { serviceId: string, serviceValue: ServiceType, paymentOption: PaymentOption, insuranceLabel?: string }) => void;
  setInsuranceInfo: (info: InsuranceInfo) => void;
  setService: (service: { id: string; value: ServiceType }) => void;
  setPaymentOption: (option: PaymentOption) => void;
  setPatientInfo: (info: PatientInfo) => void;
  setConcerns: (concerns: string[]) => void;
  setSelectedProvider: (provider: Provider) => void;
  setAppointmentDetails: (details: AppointmentDetails) => void;
  setAvailableProviders: (providers: Provider[]) => void;
  setDraftId: (id: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: SchedulingStep) => void;
  reset: () => void;
};

// --- INITIAL STATE ---
// The default state of the application when it first loads.

const initialState: State = {
  currentStep: SchedulingStep.PATIENT_INFO,
  draftId: null,
  serviceId: null,
  serviceValue: null,
  paymentOption: null,
  selectedInsuranceLabel: null,
  patientInfo: null,
  insuranceInfo: null,
  concerns: [],
  selectedProvider: null,
  availableProviders: [],
  appointmentDetails: null,
};


// --- STORE IMPLEMENTATION ---
// This is where the state and actions are brought to life.

export const useSchedulingStore = create<State & Actions>((set) => ({
  ...initialState,
  
  // --- ACTION IMPLEMENTATIONS ---
  
  // Sets the initial state from the URL query parameters
  setInitialSelections: (params) => set({ 
    serviceId: params.serviceId, 
    serviceValue: params.serviceValue, 
    paymentOption: params.paymentOption,
    selectedInsuranceLabel: params.insuranceLabel || null,
  }),
  
  // Updates the insurance information from the insurance form
  setInsuranceInfo: (info) => set({ insuranceInfo: info }),
  
  // Updates patient information from the first form
  setPatientInfo: (patientInfo) => set({ patientInfo }),

  // Updates the list of selected concerns
  setConcerns: (concerns) => set({ concerns }),

  // Sets the provider chosen by the user from the results page
  setSelectedProvider: (selectedProvider) => set({ selectedProvider }),
  
  // Sets the list of matched providers from the API
  setAvailableProviders: (providers) => set({ availableProviders: providers }),
  
  // Sets the chosen appointment date and time
  setAppointmentDetails: (appointmentDetails) => set({ appointmentDetails }),
  
  // Sets the booking draft ID after the first API call
  setDraftId: (id) => set({ draftId: id }),

  // --- FIXED: ADDED MISSING ACTION IMPLEMENTATIONS ---
  // Allows changing the service type mid-flow (used in SchedulingLayout)
  setService: (service) => set({ serviceId: service.id, serviceValue: service.value }),
  
  // Allows changing the payment option (future-proofing)
  setPaymentOption: (option) => set({ paymentOption: option }),
  
  // --- NAVIGATION ACTIONS ---
  
  // Moves to the next sequential step
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  
  // Moves to the previous sequential step
  prevStep: () => set((state) => ({ currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0 })),
  
  // Jumps to a specific step in the flow
  goToStep: (step) => set({ currentStep: step }),
  
  // Resets the entire state to its initial values for a new booking
  reset: () => set({ ...initialState }),
}));