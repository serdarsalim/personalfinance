// Create a new file: src/app/components/BreadcrumbSchema.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface BreadcrumbSchemaProps {
  pageName: string;
}

export default function BreadcrumbSchema({ pageName }: BreadcrumbSchemaProps) {
  const pathname = usePathname();
  
  // Create breadcrumb items based on the path
  const breadcrumbItems = [];
  
  // Always add home
  breadcrumbItems.push({
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://simplifybudget.com"
  });
  
  // If we're on a subpage, add the current page
  if (pathname !== "/") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `https://simplifybudget.com${pathname}`
    });
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}