// src/app/components/ClientOnly.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, ReactNode } from "react";

interface ClientWrapperProps {
  children: (searchParams: ReturnType<typeof useSearchParams>) => ReactNode;
}

function ClientComponent({ children }: ClientWrapperProps) {
  const searchParams = useSearchParams();
  return <>{children(searchParams)}</>;
}

export default function ClientOnly({ children }: ClientWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent>{children}</ClientComponent>
    </Suspense>
  );
}