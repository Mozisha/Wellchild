'use client';

import { useQueries } from '@tanstack/react-query';
import { fetchServices, fetchLocations, fetchPaymentOptions } from '../services/api';

export function useDropdownData() {
  const results = useQueries({
    queries: [
      {
        queryKey: ['services'],
        queryFn: fetchServices,
      },
      {
        queryKey: ['locations'],
        queryFn: fetchLocations,
      },
      {
        queryKey: ['paymentOptions'],
        queryFn: fetchPaymentOptions,
      },
    ],
  });

  const isLoading = results.some((query) => query.isLoading);
  const isError = results.some((query) => query.isError);

  return {
    services: results[0].data ?? [],
    locations: results[1].data ?? [],
    paymentOptions: results[2].data ?? [],
    isLoading,
    isError,
  };
}