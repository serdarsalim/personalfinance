// src/app/components/SoftwareSchema.tsx

"use client";

import React from "react";

export default function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Simplify Budget App",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Budget tracking app with calendar view and auto-subscription tracking. One-time $15 payment, data stored in your Google Sheets.",
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2030-12-31",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "screenshot": "https://simplifybudget.com/app-screenshots/1budgettab.png",
    "featureList": [
      "Expense calendar for easy expense entry",
      "Auto-fill recurring subscriptions",
      "30+ customizable expense categories",
      "Net worth tracking",
      "Income tracking from multiple sources",
      "Financial reports and visualizations",
      "Data stored in your Google Sheets",
      "One-time payment, use forever",
      "Works on any device with a browser"
    ],
    "softwareRequirements": "Google account with Google Sheets",
    "url": "https://simplifybudget.com",
    "author": {
      "@type": "Organization",
      "name": "Simplify Budget",
      "url": "https://simplifybudget.com"
    },
    "applicationSubCategory": "Personal Finance",
    "permissions": "Access to your Google Sheets (you grant permission)",
    "releaseNotes": "https://simplifybudget.com/updates",
    "installUrl": "https://simplifybudget.com/app"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}