"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TemplateCard from "./components/templateCard";

export default function Home() {
  // Remove darkMode state and toggle functionality

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#dfe7f2] font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
           Simplify Your Budget
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Take control of your finances with simple, effective tools and the
            power of Google Sheets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#templates"
              className="rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Free Templates
            </a>
            <a
              href="#how-it-works"
              className="rounded-md bg-blue-500 border border-gray-300 px-5 py-3 font-medium transition-colors hover:bg-blue-600"
            >
              Learn How It Works
            </a>
          </div>
        </header>

        {/* How It Works */}
        <section id="how-it-works" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Simple 3-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Download a Template",
                description: "Choose from our essential Google Sheets templates tailored for different aspects of your financial life."
              },
              {
                step: "2",
                title: "Track Your Expenses",
                description: "Enter your expenses and income manually to stay mindful of every dollar you spend."
              },
              {
                step: "3",
                title: "Gain Insights",
                description: "Watch as your financial data transforms into actionable insights through automatic calculations and charts."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg -mt-2 -ml-2">
                  {step.step}
                </div>
                <div className="bg-white p-6 pt-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Why Track Your Budget Section */}
        <section id="why-track" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            Why Track Your Budget with Google Sheets?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Control",
                description: "You own your data and can customize everything to fit your exact needs.",
                icon: "📊"
              },
              {
                title: "No Subscription Fees",
                description: "Free to use with your existing Google account. No extra apps needed.",
                icon: "💰"
              },
              {
                title: "Powerful Analysis",
                description: "Leverage Google Sheets' formulas and charts for deeper financial insights.",
                icon: "📈"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
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
          Our Essential Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <TemplateCard
            title="Free Monthly Budget Tracker"
            description="Track income and expenses with automatic categorization and monthly reports."
            icon="💵"
            color="bg-blue-50"
          />
          <TemplateCard
            title="Subscription Tracker"
            description="Never forget about recurring payments again. Track all your subscriptions in one place."
            icon="🔄"
            color="bg-green-50"
          />
          <TemplateCard
            title="Net Worth Tracker"
            description="Monitor your assets and liabilities over time to visualize your financial progress."
            icon="📊"
            color="bg-purple-50"
          />
        </div>

          {/* Bundle Highlight */}
          <div id="bundle" className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Ultimate Budget Tracker Bundle</h3>
                <p className="mb-4">
                  Get all three essential templates in one powerful package. The complete solution for taking control of your finances.
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
                </ul>
                <a
                  href="#download-bundle"
                  className="inline-block rounded-md bg-white text-blue-600 px-6 py-3 font-medium transition-colors hover:bg-gray-100"
                >
                  Download Bundle
                </a>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute top-0 left-0 h-40 w-40 bg-white/10 rounded-lg shadow-lg transform rotate-6"></div>
                  <div className="absolute top-4 left-4 h-40 w-40 bg-white/20 rounded-lg shadow-lg transform rotate-3"></div>
                  <div className="absolute h-40 w-40 bg-white/30 rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col">
                <div className="mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  "I've tried so many budgeting apps, but none gave me the control and insight that these Google Sheet templates provide. Now I actually enjoy managing my money!"
                </blockquote>
                <cite className="font-bold text-gray-900">— Sarah K., Financial Independence Seeker</cite>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col">
                <div className="mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  "The subscription tracker alone has saved me hundreds of dollars by helping me identify services I wasn't using. The bundle is worth every penny."
                </blockquote>
                <cite className="font-bold text-gray-900">— Mark T., Software Engineer</cite>
              </div>
            </div>
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
                question: "Do I need to know how to use Google Sheets?",
                answer: "Basic familiarity helps, but our templates are designed to be user-friendly with clear instructions. You'll only need to enter your data in the highlighted cells."
              },
              {
                question: "Can I customize the templates?",
                answer: "Absolutely! That's one of the biggest benefits of using Google Sheets. You can modify categories, add new sections, or change the design to fit your needs."
              },
              {
                question: "Will these work on my phone?",
                answer: "Yes, you can access and edit your sheets using the Google Sheets mobile app, though some advanced features work best on desktop."
              },
              {
                question: "How do I get updates to the templates?",
                answer: "When you download our templates, we'll ask for your email to notify you about template updates and improvements."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="download-bundle" className="bg-blue-600 rounded-xl p-8 text-center text-white mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of others who are mastering their money using our simple, powerful Google Sheets templates.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Get Free Bundle
              </button>
            </div>
            <p className="text-sm mt-3 text-blue-100">
              We'll never share your email. Unsubscribe anytime.
            </p>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Budget Better
              </h2>
              <p className="text-gray-500">
                Simplify your finances with Google Sheets
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 items-center">
              <a href="#templates" className="text-gray-600 hover:text-blue-600">
                Templates
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">
                How It Works
              </a>
              <a href="#download-bundle" className="text-gray-600 hover:text-blue-600">
                Download
              </a>
              <a href="mailto:hello@budgetbetter.com" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
              {/* Dark mode toggle button removed */}
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Budget Better. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}