"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TemplateCard from "./components/templateCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#dfe7f2] font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            Budget Master
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Take control of your finances with our easy-to-use, powerful Google Sheets templates designed for beginners to intermediate users and families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#templates"
              className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              See All Templates
            </a>
            
          </div>
        </header>

        {/* Featured Benefits */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Easy to Use",
                description: "No technical skills needed - just enter your numbers and the spreadsheets do the work",
                icon: "🔄"
              },
              {
                title: "Fully Customizable",
                description: "30+ custom categories to match your unique financial situation",
                icon: "🛠️"
              },
              {
                title: "Visual Reports",
                description: "Clear charts and dashboards show your progress month over month",
                icon: "📊"
              },
              {
                title: "Privacy Focused",
                description: "Your data stays in your Google Drive - we never see your financial information",
                icon: "🔒"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

       
        
      

      {/* Featured Templates */}
      <section id="templates" className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
          Our Budget Tracking Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <TemplateCard
            title="Monthly Budget Tracker"
            description="Set a monthly budget and track your income and expenses with this easy-to-use Google Sheets template."
            icon="Free"
            color="bg-blue-50"
            isFree={true}
            features={[
              "30 custom categories",
              "Monthly budget settings",
              "Automatic charts and reports",
              "Saving and debt payment goals"
            ]}
          />
          <TemplateCard
            title="Subscription Tracker"
            description="Never miss a recurring payment again. Our smart tracker automatically displays all subscription payments for the month."
            icon="$10"
            color="bg-green-50"
            isFree={false}
            features={[
              "Automatic payment tracking",
              "Start/end date management",
              "Monthly payment summaries",
              "Renewal calendar",
            ]}
          />
          <TemplateCard
            title="Net Worth Tracker"
            description="Monitor your assets and liabilities over time to visualize your financial progress and true financial health."
            icon="$10"
            color="bg-purple-50"
            isFree={false}
            features={[
              "Asset & liability tracking",
              "Financial health dashboard",
              "Net worth over time charts",
              "Goal setting and monitoring"
            ]}
          />
        </div>

        {/* Bundle Highlight */}
        <div id="bundle" className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-white shadow-lg mb-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Budget Tracker Bundle</h3>
              <p className="mb-4">
                Get all three powerful templates in one integrated package. The ultimate solution for complete financial visibility and control.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Monthly Budget Tracker
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Subscription Tracker
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Net Worth Tracker
                </li>
                <li className="flex items-center font-bold">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  BONUS: 3 Months Email Support
                </li>
              </ul>
              <div className="flex gap-3">
                <a
                  href="#preview-bundle"
                  className="inline-block rounded-md bg-white text-blue-600 px-6 py-3 font-medium transition-colors hover:bg-gray-100"
                >
                  Preview Bundle
                </a>
                <a
                  href="#download-bundle"
                  className="inline-block rounded-md bg-emerald-500 text-white px-6 py-3 font-medium transition-colors hover:bg-emerald-600"
                >
                  Get Premium Bundle
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-48 w-48">
                <div className="absolute top-0 left-0 h-40 w-40 bg-white/10 rounded-lg shadow-lg transform rotate-6"></div>
                <div className="absolute top-4 left-4 h-40 w-40 bg-white/20 rounded-lg shadow-lg transform rotate-3"></div>
                <div className="absolute h-40 w-40 bg-white/30 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-4xl">$15</span>
                </div>
              </div>
            </div>
          </div>
       
        
        
        </div>
      </section>


       {/* How It Works */}
       <section id="how-it-works" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Follow This Simple 3-Step Process to Financial Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Template",
                description: "Select the free basic budget tracker or upgrade to our premium templates for more advanced features."
              },
              {
                step: "2",
                title: "Input Your Data",
                description: "Enter your income and expenses manually to stay mindful of your spending habits and financial goals."
              },
              {
                step: "3",
                title: "Gain Financial Clarity",
                description: "Watch as your financial data transforms into visual insights through automatic calculations and charts."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg -mt-2 -ml-2">
                  {step.step}
                </div>
                <div className="bg-white p-6 pt-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      <section className="mb-20">xzj
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
         And Let Templates Help You Transform Your Finances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Set Clear Financial Goals</h3>
            <p className="text-gray-600 mb-4">
              Our templates help you establish specific saving, spending, and debt payment goals with visual progress tracking to keep you motivated.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Create specific monthly savings targets</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Track progress with automatically updating charts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Visualize debt payoff timelines</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">See Your Full Financial Picture</h3>
            <p className="text-gray-600 mb-4">
              Our premium bundle connects your daily spending, recurring payments, and long-term assets/liabilities for complete financial awareness.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Monthly spending vs. income analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Fixed vs. variable expense breakdown</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Net worth growth trends over time</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Identify Spending Patterns</h3>
            <p className="text-gray-600 mb-4">
              Our templates automatically organize your expenses into 30+ customizable categories to help you spot areas for improvement.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Category spending breakdown charts</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Month-over-month category comparisons</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Budget vs. actual spending analysis</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Save Time with Automation</h3>
            <p className="text-gray-600 mb-4">
              Our templates feature built-in formulas and automated reports so you spend less time managing and more time planning.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Automatic subscription payment tracking</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Self-generating monthly reports</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span>Pre-built charts that update automatically</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

  {/* Why Track Your Budget Section */}
  <section id="why-track" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Why Choose Our Google Sheets Budget Templates?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Total Ownership",
                description: "You own your data and can customize everything to fit your exact financial needs and goals.",
                icon: "💯"
              },
              {
                title: "No Subscription Fees",
                description: "Our basic template is completely free, and premium templates are one-time purchases.",
                icon: "💰"
              },
              {
                title: "Powerful Analysis",
                description: "Track 30+ custom categories with month-over-month comparisons to identify spending patterns.",
                icon: "📈"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

      

   

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
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
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Yes, we offer a 30-day money-back guarantee on all premium templates. If you're not completely satisfied, simply contact us for a full refund."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

       
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Budget Master
              </h2>
              <p className="text-gray-500">
                Simplify your finances with Google Sheets
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 items-center">
         
            
              <a href="#download-bundle" className="text-gray-600 hover:text-blue-600">
                Terms
              </a>
              <a href="#preview-section" className="text-gray-600 hover:text-blue-600">
                Privacy
              </a>
              <a href="mailto:hello@budgetmaster.com" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </nav>
          </div>
          
         
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Budget Master. All rights reserved.</p>
            <p className="mt-2">The ultimate resource for Google Sheets budget templates.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}