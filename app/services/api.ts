// app/services/api.ts

import axios from 'axios';
import { Provider } from '../lib/types';

// --- Base API Client ---
const apiClient = axios.create({
  baseURL: 'https://wellchild-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- NEW: Generic API Response Wrapper ---
// This interface matches the standard structure of all your backend responses.
export interface ApiResponse<T> {
    message: string;
    statusCode: number;
    status: string;
    data: T;
    meta?: {
        pagination: {
            total: number;
            count: number;
            page: number;
            perPage: number;
            totalPages: number;
        }
    };
}
export interface UpdateProviderRequest {
  selectedProviderId: string;
  appointmentDatetime?: string;
  sessionType?: 'TELEHEALTH' | 'IN_PERSON';
  preferredSchedule?: string;
  additionalNotes?: string;
}

// --- NEW: Interface for the Step 3 Response Data ---
export interface UpdateProviderResponse {
    id: string;
    selectedProviderId: string;
    currentStep: string;
    nextStep: string;
    progress: {
        step: number;
        total: number;
        percentage: number;
    };
    consultationFee?: number;
    processingFee?: number;
    totalAmount?: number;
}


// --- Updated Type Definitions ---

export interface Service {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  displayOrder?: number;
  iconName?: string;
  backgroundColor?: string;
  iconColor?: string;
}

export interface CreateDraftRequest {
  serviceId: string;
  childName: string;
  parentName: string;
  phoneNumber: string;
  emailAddress: string;
  dateOfBirth: string; // ISO string
  sex?: 'male' | 'female';
  howDidYouHear?: string;
}
export interface CreateDraftResponse {
    id: string;
    serviceId: string;
    currentStep: string;
    nextStep: string;
    progress: { step: number; total: number; percentage: number };
    accountExists: boolean;
}

// UPDATED: This type now perfectly matches your backend's PrimaryConcern object.
export interface PrimaryConcern {
  id: string;
  name: string;
  description: string | null;
  serviceId: string;
  ageRangeMin: number | null;
  ageRangeMax: number | null;
  severity: string | null;
  isActive: boolean;
}

export interface UpdateConcernsRequest {
  primaryConcerns: string[];
}
export interface UpdateConcernsResponse {
    id: string;
    primaryConcerns: string[];
    currentStep: string;
    nextStep: string;
    progress: { step: number; total: number; percentage: number };
    availableProviders: Provider[];
}

export interface Location { id: string; name: string; }
export interface PaymentOptionAPI { id: string; label: string; value: string; }


// --- API Error Handling ---
const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const apiError = error.response?.data;
    const message = Array.isArray(apiError?.message) 
      ? apiError.message.join(', ') 
      : apiError?.message || 'An unexpected API error occurred.';
    throw new Error(message);
  }
  throw new Error('An unexpected network error occurred. Please try again.');
};


// --- API Functions ---

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Service[]>>('/services');
    return response.data.data
      .filter(service => service.isActive)
      .sort((a, b) => (a.displayOrder ?? 0) - (a.displayOrder ?? 0));
  } catch (error) {
    return handleApiError(error);
  }
};

export const createDraft = async (formData: CreateDraftRequest): Promise<ApiResponse<CreateDraftResponse>> => {
  try {
    const response = await apiClient.post<ApiResponse<CreateDraftResponse>>(
      '/booking-drafts/create-with-patient-info',
      formData,
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export interface PaymentMethodRequest {
  cardNumber: string;
  expiryDate: string; // MM/YY format
  cvc: string;
  cardholderName?: string;
}

// --- NEW: Interface for the Step 4 Response Data ---
export interface PaymentMethodResponse {
    id: string;
    paymentIntentId: string;
    paymentStatus: string; // "succeeded"
    currentStep: string;   // "confirmation"
    nextStep: string;      // "confirmation"
}


// UPDATED: This function is now more specific and robust.
// It returns a promise of the PrimaryConcern array directly.
export const getPrimaryConcerns = async (serviceId: string): Promise<PrimaryConcern[]> => {
  try {
    const response = await apiClient.get<ApiResponse<PrimaryConcern[]>>(`/services/${serviceId}/primary-concerns`);
    // We now explicitly extract the nested `data` array.
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateConcerns = async (
  draftId: string,
  concerns: string[]
): Promise<ApiResponse<UpdateConcernsResponse>> => {
  try {
    const payload: UpdateConcernsRequest = { primaryConcerns: concerns };
    const response = await apiClient.put<ApiResponse<UpdateConcernsResponse>>(
      `/booking-drafts/${draftId}/concerns`,
      payload,
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const selectProvider = async (
  draftId: string,
  providerData: UpdateProviderRequest
): Promise<ApiResponse<UpdateProviderResponse>> => {
  try {
    const response = await apiClient.put<ApiResponse<UpdateProviderResponse>>(
      `/booking-drafts/${draftId}/provider`,
      providerData,
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const processPayment = async (
  draftId: string,
  paymentData: PaymentMethodRequest
): Promise<ApiResponse<PaymentMethodResponse>> => {
  try {
    const response = await apiClient.post<ApiResponse<PaymentMethodResponse>>(
      `/booking-drafts/${draftId}/payment-method`,
      paymentData,
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

// --- MOCK FUNCTIONS ---
export const fetchLocations = async (): Promise<Location[]> => {
  console.log("Returning STATIC locations.");
  return Promise.resolve([
    { id: 'loc_mia', name: 'Miami' },
    { id: 'loc_orl', name: 'Orlando' },
    { id: 'loc_tpa', name: 'Tampa' },
    { id: 'loc_jax', name: 'Jacksonville' },
    { id: 'loc_vtl', name: 'Virtual' },
  ]);
};

export const fetchPaymentOptions = async (): Promise<PaymentOptionAPI[]> => {
  console.log("Returning STATIC payment options.");
  return Promise.resolve([
    { id: 'pay_private', label: 'Private Pay (Concierge)', value: 'PRIVATE_PAY' },
    { id: 'pay_scholar', label: 'Step Up Scholarship', value: 'SCHOLARSHIP' },
    { id: 'pay_aetna', label: 'Aetna (commercial)', value: 'INSURANCE' },
    { id: 'pay_cigna', label: 'Cigna', value: 'INSURANCE' },
    { id: 'pay_uhc', label: 'United Healthcare', value: 'INSURANCE' },
    { id: 'pay_optum', label: 'Optum', value: 'INSURANCE' },
    { id: 'pay_evernorth', label: 'Evernorth', value: 'INSURANCE' },
    { id: 'pay_tricare', label: 'Tricare', value: 'INSURANCE' },
    { id: 'pay_humana', label: 'Humana', value: 'INSURANCE' },
    { id: 'pay_flblue', label: 'Florida Blue', value: 'INSURANCE' },
    { id: 'pay_compsych', label: 'ComPsych', value: 'INSURANCE' },
    { id: 'pay_champva', label: 'ChampVa', value: 'INSURANCE' }
  ]);
};