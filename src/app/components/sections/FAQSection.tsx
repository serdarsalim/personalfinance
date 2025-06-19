"use client";

import { useState } from "react";

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
      question: "Is my financial data private and secure?",
      answer: "Completely. Your financial data never touches our servers - it only exists in your Google Drive. We literally cannot see your transactions, balances, or spending patterns. Even if our app was compromised, your financial data would be safe."
    },
    {
      question: "How does the 'already spent' budget logic work?",
      answer: "SimplifyBudget shows your fixed expenses (rent, subscriptions) as already spent from day 1 of each month. If you earn $3,000 but have $1,200 in fixed costs, the app shows you have $1,800 left to budget, not $3,000."
    },
    {
      question: "What currencies does SimplifyBudget support?",
      answer: "SimplifyBudget supports all major currencies. You can set your preferred currency in the settings, and all calculations and displays will use your chosen currency format."
    }
  ];

export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-gradient-to-r from-emerald-50 to-white py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(i)}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{faq.question}</h3>                  
                <svg 
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${openFAQs.includes(i) ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`px-6 pb-6 transition-all duration-200 ease-in-out ${openFAQs.includes(i) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}