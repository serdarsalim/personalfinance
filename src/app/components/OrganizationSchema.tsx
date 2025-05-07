"use client";

import React from "react";

// Make all props optional with default values
interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[]; // Social media profiles
}

export default function OrganizationSchema({
  name = "Simplify Budget",
  url = "https://simplifybudget.com",
  logo = "https://simplifybudget.com/logo.png",
  description = "Simple and effective Google Sheets templates for personal finance management",
  sameAs = [],
}: OrganizationSchemaProps = {}) {  // Default empty object
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}