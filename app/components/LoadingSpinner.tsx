// components/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div
      className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-[#51AFBA] border-t-transparent"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;