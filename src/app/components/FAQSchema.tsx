// Create new file: src/app/components/FAQSchema.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function FAQSchema() {
  const pathname = usePathname();
  const baseUrl = "https://simplifybudget.com";
  const url = `${baseUrl}${pathname}`;
  
  // Duplicate the exact faqs array from your FAQSection component
  const faqs = [
    {
      question: "What currencies are these templates available in?",
      answer: "The trackers are set to USD by default, but you can easily change the currency once you get the sheet. If you need a specific currency format before purchase, reach out to us and we'll share a sheet in your desired currency (only for premium sheets)."
    },
    {
      question: "Do I need advanced Google Sheets skills to use these templates?",
      answer: "Not at all! Our templates are designed for beginners to intermediate users. You only need to enter your data in clearly marked cells, and all calculations and charts update automatically."
    },
    {
      question: "Can I customize the categories in the budget tracker?",
      answer: "Absolutely! Our templates feature 30+ pre-built categories, but you can easily rename or modify these to match your specific financial situation and goals."
    },
    {
      question: "How does the subscription tracker work?",
      answer: "The subscription tracker allows you to enter the name, amount, and start date of any recurring payment. The template automatically tracks when payments are due and calculates your total monthly subscription costs."
    },
    {
      question: "Will these templates work on my phone or tablet?",
      answer: "Yes, you can access and edit your sheets using the Google Sheets mobile app. While some advanced features work best on desktop, all basic tracking and viewing functions work perfectly on mobile devices."
    },
    {
      question: "What's the difference between the free and premium templates?",
      answer: "Our free Monthly Budget Tracker offers essential income and expense tracking with basic reporting. Premium templates add features like subscription management, net worth tracking, and more advanced visualizations, plus email support."
    },
    {
      question: "How do I get updates to the templates?",
      answer: "Budget Tracker Bundle Template comes with free lifetime updates. When we release a new version, you can download it from the Google Drive."
    }
  ];
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}