'use client';

import { useState, useEffect, ReactNode, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface ClientWrapperProps {
  children: (searchParams: ReturnType<typeof useSearchParams>) => ReactNode;
}

function ClientComponent({ children }: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // Prevent hydration issues by not rendering on server
  }
  
  return <>{children(searchParams)}</>;
}

export default function ClientOnly({ children }: ClientWrapperProps) {
  // This implementation avoids hydration mismatches
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent>{children}</ClientComponent>
    </Suspense>
  );
}