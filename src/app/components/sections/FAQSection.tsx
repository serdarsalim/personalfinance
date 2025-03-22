"use client";

import { useState } from "react";

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