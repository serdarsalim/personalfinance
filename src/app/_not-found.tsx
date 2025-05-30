// src/app/not-found.tsx
"use client";

import React, { Suspense } from "react";
import Link from "next/link";

// Simple loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Main content component
const NotFoundContent = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
    <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
      Return to Home
    </Link>
  </div>
);

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<Loading />}>
        <NotFoundContent />
      </Suspense>
    </div>
  );
}