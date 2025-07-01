// Create new file: src/app/components/FAQSchema.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function FAQSchema() {
  const pathname = usePathname();
  const baseUrl = "https://simplifybudget.com";
  const url = `${baseUrl}${pathname}`;
  
  // FAQ array for SimplifyBudget app
  const faqs = [
    {
      question: "How does SimplifyBudget connect to my Google Sheets?",
      answer: "You copy our Google Sheets template, then paste your sheet URL into SimplifyBudget. The app connects to your sheet and provides a visual interface for tracking expenses, but all your data stays in your own Google Drive."
    },
    {
      question: "Can multiple people use the same budget?",
      answer: "Yes! Since your data lives in Google Sheets, anyone you share the sheet with can use the same budget in SimplifyBudget. Perfect for couples, families, or business partners who want to track expenses together."
    },
    {
      question: "What happens to my data if I stop using SimplifyBudget?",
      answer: "Your financial data stays in your Google Sheets forever. Since we don't store your data on our servers, you can stop using the app anytime and still access all your financial history in Google Sheets."
    },
    {
      question: "How does the visual monthly grid work?",
      answer: "The monthly grid shows each day as a row and expense categories as columns. Amounts are color-coded by size, creating a heat map of your spending. You can add expenses in 3 taps and see your entire month's spending pattern at a glance."
    },
    {
      question: "Does SimplifyBudget work on mobile devices?",
      answer: "Yes! SimplifyBudget is fully mobile optimized. Most users add expenses on their phone throughout the day since it's so quick and visual. The app works perfectly on phones, tablets, and desktop."
    },
    {
      question: "How does the subscription tracker work?",
      answer: "Set up each recurring payment once with its amount, frequency (monthly/quarterly/yearly), and end date. SimplifyBudget automatically generates future payments and shows them in your monthly grid and budget. No end date? It keeps creating payments for the next cycle."
    },
    {
      question: "Can I customize the expense categories?",
      answer: "You can rename, reorder, and hide/show any of the 30 categories. We don't allow deleting categories to preserve your historical data - if you had expenses in a category you no longer use, they'll still appear in your reports."
    },
    {
 question: "Is this app safe to use?",
 answer: "Yes. We're verified by Google for secure access to your spreadsheets. This means Google has reviewed our security practices and approved our app for accessing your data safely."
},
    {
      question: "Is my financial data private and secure?",
      answer: "Your financial data never touches our servers - it only exists in your Google Drive. We literally cannot see your transactions, balances, or spending patterns. Since your data stays in your own Google account, you maintain full control and ownership."
    },
    {
      question: "How does the 'already spent' budget logic work?",
      answer: "SimplifyBudget shows your fixed expenses (rent, subscriptions) as already spent from day 1 of each month. If you earn $3,000 but have $1,200 in fixed costs, the app shows you have $1,800 left to budget, not $3,000."
    },
    {
      question: "What currencies does SimplifyBudget support?",
      answer: "SimplifyBudget supports all major currencies. You can set your preferred currency in the settings, and all calculations and displays will use your chosen currency format."
    },

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