'use client';

import React, { ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// Loading component for the suspense fallback
const SearchParamsLoading = () => (
  <div className="min-h-[50px] flex items-center justify-center">
    {/* Minimal loading indicator or nothing at all */}
  </div>
);

type SearchParamsType = ReturnType<typeof useSearchParams>;

interface SearchParamsProviderProps {
  children: (searchParams: SearchParamsType) => ReactNode;
}

// This component handles the suspense boundary internally
function SearchParamsProvider({ children }: SearchParamsProviderProps) {
  const searchParams = useSearchParams();
  return <>{children(searchParams)}</>;
}

// Export a wrapped version that includes the suspense boundary
export default function WithSearchParams({ children }: SearchParamsProviderProps) {
  return (
    <Suspense fallback={<SearchParamsLoading />}>
      <SearchParamsProvider>{children}</SearchParamsProvider>
    </Suspense>
  );
}