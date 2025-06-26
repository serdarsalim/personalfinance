"use client";

import React, { Suspense } from "react";
import BreadcrumbSchema from '../components/BreadcrumbSchema';
export const dynamic = 'force-dynamic';

// Simple loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Main content component
const AboutContent = () => (
  <>
    {/* Hero Section */}
    <section className="bg-white pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            About Simplify Budget
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Powerful budget management that lives in your Google Sheets - simple, secure, and always in your control
          </p>
        </div>
      </div>
    </section>
    
    {/* Our Story Section */}
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4">
              I'm Serdar, the creator of Simplify Budget. As a digital nomad who's traveled through 25 countries in the past 2 years, 
              I needed a better way to manage my finances across currencies, countries, and constantly changing circumstances.
            </p>
            <p className="text-gray-600 mb-4">
              After manually tracking my finances for over two years, I realized spreadsheets were powerful but tedious. 
              That's why I built Simplify Budget - a web application that brings the best of both worlds: the flexibility 
              and ownership of Google Sheets with the convenience of a modern app. No more manual calculations, no more 
              complex formulas, just intuitive budget management that works.
            </p>
            <p className="text-gray-600 mb-4">
              The app features intelligent automation for recurring transactions, beautiful visualizations, and smart 
              reports - all while keeping your data exactly where it belongs: in your own Google Sheets. Every feature 
              is battle-tested through my own daily use across multiple countries and currencies.
            </p>
            <p className="text-gray-600">
              Whether you're using our premium app or starting with our free budget template, you're getting tools 
              designed by someone who actually lives by them every single day.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-4">
              {/* App interface preview */}
              <div className="relative">
                {/* Browser mockup */}
                <div className="h-8 bg-gray-200 rounded-t-lg flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1 text-center">
                    <div className="bg-white rounded px-3 py-0.5 text-xs text-gray-600 inline-block">
                      simplifybudget.com/app
                    </div>
                  </div>
                </div>
                
                {/* App interface */}
                <div className="border border-gray-200 rounded-b-lg bg-gray-50 p-4">
                  {/* Header */}
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">October 2024 Budget</h3>
                      <div className="text-sm text-gray-600">$1,950 / $2,000</div>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full" style={{width: '97.5%'}}></div>
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="bg-slate-800 rounded-lg shadow-sm p-4 mb-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">🏠</span>
                          <span className="text-sm font-medium">Housing</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">$1,150</span>
                          <span className="text-green-600 ml-2">+$50</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">🍕</span>
                          <span className="text-sm font-medium">Food</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">$520</span>
                          <span className="text-red-600 ml-2">-$20</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">🚗</span>
                          <span className="text-sm font-medium">Transport</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">$280</span>
                          <span className="text-green-600 ml-2">+$20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick add button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg py-3 font-medium hover:shadow-lg transition-shadow">
                    + Add Transaction
                  </button>
                </div>
              </div>
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* What We Offer Section */}
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🚀</span>
              <h3 className="text-xl font-bold text-gray-900">Simplify Budget App</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our premium web application that transforms Google Sheets into a powerful budget management system. 
              Features include:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>One-click expense tracking with smart categorization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Beautiful dashboards and spending insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automated recurring transaction management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Multi-currency support for travelers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Your data stays in your Google Sheets</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">📊</span>
              <h3 className="text-xl font-bold text-gray-900">Free Budget Template</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Perfect for getting started with budget tracking. Our free Google Sheets template includes:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Pre-built budget categories and formulas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Monthly expense tracking sheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic charts and summaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Simple income vs expense calculations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>No signup required - just copy and use</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    {/* Our Values Section */}
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Ownership",
              description: "Your financial data belongs to you. Everything stays in your Google Sheets - we never store or see your transactions.",
              icon: "🔐"
            },
            {
              title: "Simplicity First",
              description: "Powerful doesn't mean complicated. Every feature is designed to make budget tracking easier, not harder.",
              icon: "✨"
            },
            {
              title: "Real-World Tested",
              description: "Built by someone who actually uses it daily across 25 countries. Every feature solves a real problem.",
              icon: "🌍"
            }
          ].map((value, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Contact Section */}
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          Have questions about the app or need help getting started?
        </p>
        <div className="inline-flex">
          <a
            href="mailto:serdar.dom@gmail.com"
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  </>
);

export default function About() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <AboutContent />
        <BreadcrumbSchema pageName="About Us" />
      </Suspense>
    </div>
  );
}