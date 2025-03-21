"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TemplateCard from "./components/templateCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - White background */}
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            {/* Background pattern - very subtle */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            </div>
            
            {/* Gradient accent */}
            <div className="absolute -z-10 top-0 right-0 w-full md:w-1/3 h-72 bg-gradient-to-bl from-blue-600/10 to-emerald-600/10 rounded-bl-full filter blur-3xl"></div>
            
            <div className="md:w-3/5 text-center md:text-left mb-10 md:mb-0 md:pr-8 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Take Control of Your Finances
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Simplify Budget is a simple yet powerful Google Sheets tracker that helps you control your expenses, save more, and finally achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                <a
                  href="#templates"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  View Templates
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Hero image with enhanced styling */}
            <div className="md:w-2/5 relative">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10 rounded-xl"></div>
                <Image 
                  src="/hero.png" 
                  alt="Simplify Budget financial dashboard" 
                  width={500} 
                  height={400} 
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Two subtle accent borders for visual interest */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-500/20 rounded-xl z-0"></div>
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500/20 rounded-xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Templates - Light gray background */}
      <section id="templates" className="bg-gray-50 py-20 scroll-mt-323422">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 ">
            Our Personal Finance Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <TemplateCard
              title="Monthly Budget Tracker"
              description="Set a monthly budget and track your income and expenses with this easy-to-use Google Sheets template."
              icon=""
              price="FREE"
              color="bg-green-300"
              isFree={true}
              features={[
                "30 custom categories",
                "Monthly budget settings",
                "Automatic charts and reports",
                "Saving and debt payment goals"
              ]}
               previewLink="https://docs.google.com/spreadsheets/d/1_2Yj5I2-KXI99EnwAIFB6qHcyRG-G0QkWXzplnonwGQ/edit?gid=2061588169#gid=2061588169"
    downloadLink="https://docs.google.com/spreadsheets/d/1_2Yj5I2-KXI99EnwAIFB6qHcyRG-G0QkWXzplnonwGQ/copy?gid=2061588169#gid=2061588169"
            />
            <TemplateCard
              title="Subscription Tracker"
              description="Never miss a recurring payment again. Our smart tracker automatically displays all subscription payments for the month."
              icon=""
              price="$10"
              color="bg-blue-300"
              isFree={false}
              features={[
                "Automatic payment tracking",
                "Start/end date management",
                "Monthly payment summaries",
                "Renewal calendar",
              ]}
               previewLink="https://docs.google.com/spreadsheets/d/1y0MMoneThIIZdbmrr2sas21MOIjqYlqwgh7N-84i_QA/edit?gid=2061588169#gid=2061588169"
    downloadLink="https://ko-fi.com/s/6441e917de"
            />
            <TemplateCard
              title="Net Worth Tracker"
              description="Monitor your assets and liabilities over time to visualize your financial progress and true financial health."
              icon=""
              price="$10"
              color="bg-purple-300"
              isFree={false}
              features={[
                "Asset & liability tracking",
                "Financial health dashboard",
                "Net worth over time charts",
                "Goal setting and monitoring"
              ]}
               previewLink="https://docs.google.com/spreadsheets/d/1_XQgRBvtdYrL_Gi8im02SpeFqLXz4rKHfDKEe_enAps/edit?gid=1749557257#gid=1749557257"
    downloadLink="https://ko-fi.com/s/9e1d1d3633"
            />
          </div>

          {/* Bundle Highlight */}
          <div  className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-white shadow-lg scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <div className="flex items-center mb-2">
                  <h3 className="text-2xl font-bold">Budget Tracker Bundle</h3>
                  <span className="bg-white text-blue-600 text-sm font-bold px-3 py-1 rounded-full ml-3">Save 25%</span>
                </div>
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
                    BONUS: 1 Month Email Support
                  </li>
                </ul>
                <div className="flex gap-3">
                  <a
                    href="https://docs.google.com/spreadsheets/d/1EKIcdA8H20eUWCwS9zOtuCwGEqgiX_USIDIkKSHjp64/edit?gid=2061588169#gid=2061588169"
                    className="inline-block rounded-md bg-white text-blue-600 px-6 py-3 font-medium transition-colors hover:bg-gray-100"
                  >
                    Preview Bundle
                  </a>
                  <a
                    href="https://ko-fi.com/s/db49a65ceb"
                    className="inline-block rounded-md bg-emerald-500 text-white px-6 py-3 font-medium transition-colors hover:bg-emerald-600"
                  >
                    Get Premium Bundle
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-white/20 p-6 rounded-lg shadow-lg text-center">
                    <div className="mb-2">
                      <span className="text-sm font-medium line-through opacity-70">$20</span>
                      <span className="text-4xl font-bold ml-2">$15</span>
                    </div>
                    <span className="text-sm font-medium">One-time purchase</span>
                    <div className="mt-3 bg-white/20 rounded-md py-1 px-2 text-sm">
                      + Free lifetime updates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* How Our Templates Help Section - Light blue background */}
      <section className="bg-blue-50 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
            Let Templates Our Help You Transform Your Finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Set Clear Financial Goals</h3>
              <p className="text-gray-600 mb-4">
                Our templates help you establish specific saving, spending, and debt payment goals with progress tracking to keep you motivated.
              </p>
         
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">See Your Full Financial Picture</h3>
              <p className="text-gray-600 mb-4">
                Our premium bundle connects your daily spending, recurring payments, and long-term assets/liabilities for complete financial awareness.
              </p>
             
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Identify Spending Patterns</h3>
              <p className="text-gray-600 mb-4">
                Our templates automatically organize your expenses into 30+ customizable categories to help you spot areas for improvement.
              </p>
              
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Save Time with Automation</h3>
              <p className="text-gray-600 mb-4">
                Our templates feature built-in formulas and automated reports so you spend less time managing and more time planning.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Why Track Your Budget Section - White background */}
      <section id="why-track" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
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
              },
              {
                title: "Easy to Use",
                description: "No technical skills needed - just enter your numbers and the spreadsheets do the work",
                icon: "🔄"
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
        </div>
      </section>

      {/* How It Works - White background with gradient accents */}
<section id="how-it-works" className="bg-white py-20 scroll-mt-20 relative overflow-hidden">
  {/* Background accent elements */}
  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
  <div className="absolute top-20 right-10 w-48 h-48 bg-emerald-100 rounded-full opacity-70 blur-3xl"></div>
  
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        How it works
      </h2>
      <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
        Follow these three steps to transform your financial future with our templates
      </p>
    </div>

    {/* Process steps with animated connectors */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
     
      
      {/* Step 1 */}
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 relative z-20 border-4 border-white">
          1
        </div>
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center h-full group transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">Choose a Template</h3>
          <p className="text-gray-600 mb-6">
            Select from our free monthly budget tracker or premium templates tailored to your financial goals.
          </p>
          <div className="w-16 h-16 mx-auto opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Step 2 */}
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 relative z-20 border-4 border-white">
          2
        </div>
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center h-full group transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">Input Your Data</h3>
          <p className="text-gray-600 mb-6">
            Enter your income and expenses mindfully to develop awareness of your spending habits and financial patterns.
          </p>
          <div className="w-16 h-16 mx-auto opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Step 3 */}
      <div className="relative flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 relative z-20 border-4 border-white">
          3
        </div>
        <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center h-full group transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">Gain Financial Clarity</h3>
          <p className="text-gray-600 mb-6">
            Watch as your data transforms into powerful insights through automatic calculations and visual charts.
          </p>
          <div className="w-16 h-16 mx-auto opacity-80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
  
  </div>
</section>

      {/* FAQ Section - Light green background */}
      <section className="bg-emerald-50 py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
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
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}