"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  availability?: string;
  isFree?: boolean;
  ratingValue?: number;
  reviewCount?: number;
  features?: string[];
  
}

// Define schema interfaces to fix type errors
interface PropertyValue {
  "@type": "PropertyValue";
  name: string;
  value: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: number;
  reviewCount: number;
}

interface ProductSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image: string;
  url: string;
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  additionalProperty?: PropertyValue[];
  aggregateRating?: AggregateRating;
}

export function ProductSchema({
  name,
  description,
  image,
  price = "0",
  currency = "USD",
  availability = "InStock",
  isFree = false,
  ratingValue,
  reviewCount,
  features = [],
}: ProductSchemaProps) {
  const pathname = usePathname();
  const baseUrl = "https://simplifybudget.com";
  const url = `${baseUrl}${pathname}`;
  
  // Construct the schema object with proper typing
  const schema: ProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    offers: {
      "@type": "Offer",
      price: isFree ? "0" : price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
    },
  };

  // Add features if available
  if (features.length > 0) {
    schema.additionalProperty = features.map(feature => ({
      "@type": "PropertyValue",
      name: "feature",
      value: feature,
    }));
  }

  // Add reviews if available
  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}