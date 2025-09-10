import React from "react";
import Link from "next/link";
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ComparisonFAQSchema from '../../components/ComparisonFAQSchema';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quicken Alternative - $15 Simple Budget vs $103/Year Complexity",
  description: "Quicken is overkill for budgeting. Get our simple $15 expense calendar instead of paying $35-103/year for features you'll never use. Just budgeting, no bloat.",
  keywords: "quicken alternative, quicken replacement, simple budget app, $15 budget app, quicken too complex, visual expense calendar, expense tracker simple, quicken simplify alternative, budget app no complexity, google sheets budget",
  openGraph: {
    title: "Quicken Alternative - $15 Simple Budget vs $103/Year Complexity",
    description: "Quicken is overkill for budgeting. Get our simple $15 expense calendar instead of paying $35-103/year.",
    url: "https://simplifybudget.com/compare/quicken-alternative",
    siteName: "Simplify Budget",
    images: [
      {
        url: "https://simplifybudget.com/app-screenshots/2monthlygrid.png", 
        width: 1200,
        height: 630,
        alt: "Simple Expense Calendar Budget App - Quicken Alternative Without Complexity"
      }
    ]
  }
};

export default function QuickenAlternativePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Quicken is Overkill. You Need Simple.
            </h1>
            <p className="text-2xl mb-8 text-indigo-100">
              Visual expense tracking without 30 years of feature bloat.
            </p>
          </div>
          
          {/* Complexity vs Simplicity */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Quicken</h3>
              <div className="space-y-3 text-white">
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">😵</span>
                  <span>500+ features you'll never use</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">💸</span>
                  <span>$35-103/year forever</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">📚</span>
                  <span>Hours to learn & set up</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">🖥️</span>
                  <span>Desktop-first (mobile afterthought)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-2">🏦</span>
                  <span>Built for investors, not budgeters</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-8 transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Simplify Budget</h3>
              <div className="space-y-3 text-gray-900">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">😊</span>
                  <span>Just what you need for budgeting</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">💰</span>
                  <span>$15 one-time, use forever</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">⚡</span>
                  <span>5 minutes to start tracking</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">📱</span>
                  <span>Mobile-first (track on the go)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Built for everyday budgeting</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
            >
              Start Using Simplify Budget
            </a>
            <div className="mt-4 text-sm text-white">
              <p>Sign in with Google to create your budget</p>
              <p>Try free for 30 days without credit card requirement</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Quicken */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Why People Abandon Quicken
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                "I just wanted to track my expenses..."
              </h3>
              <p className="text-gray-700 mb-4">
                Quicken started in 1983 for DOS computers. After 40 years of features, it's become 
                accounting software pretending to be a budget app. Most users only need 5% of what it offers.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">You probably don't need:</h4>
                  <ul className="space-y-1 text-gray-900">
                    <li>• Investment portfolio tracking</li>
                    <li>• Rental property management</li>
                    <li>• Business invoice tracking</li>
                    <li>• Tax planning worksheets</li>
                    <li>• Loan amortization calculators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">You actually need:</h4>
                  <ul className="space-y-1 text-green-600">
                    <li>✓ Quick expense entry</li>
                    <li>✓ Visual spending overview</li>
                    <li>✓ Simple budget tracking</li>
                    <li>✓ Subscription management</li>
                    <li>✓ Works on your phone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Real Quicken Refugee Story
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-6">
              "I used Quicken for 3 years. Every time I opened it, I felt overwhelmed. Reports everywhere, 
              features I didn't understand, constant upsells to the Premier version. I just wanted to see 
              where my money was going!
              <br /><br />
              Simplify Budget's expense calendar is exactly what I needed. I can see my whole month at a glance, 
              add expenses in seconds, and actually stick to my budget. Plus, I'm saving $50/year."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">JM</span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">Jennifer M.</p>
                <p className="text-gray-900">Former Quicken Deluxe User</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple vs Complex Visual */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Complexity vs Clarity
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Quicken Interface</h3>
              <div className="bg-gray-100 rounded-lg p-4 text-xs">
                <div className="bg-gray-200 h-8 mb-2 flex items-center px-2 text-gray-600">
                  File | Edit | View | Reports | Investing | Planning | Window | Help
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="h-20 bg-slate-700 rounded mb-1"></div>
                    <p className="text-gray-900">Net Worth</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="h-20 bg-slate-700 rounded mb-1"></div>
                    <p className="text-gray-900">Portfolio</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="h-20 bg-slate-700 rounded mb-1"></div>
                    <p className="text-gray-900">Tax Center</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="h-20 bg-slate-700 rounded mb-1"></div>
                    <p className="text-gray-900">Reports</p>
                  </div>
                </div>
                <p className="text-center text-red-600 mt-4">🤯 Where do I even start?</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Simplify Budget Interface</h3>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="grid grid-cols-6 gap-1 text-xs text-gray-900">
                  <div className="p-2 bg-gray-100 font-semibold text-gray-900">Day</div>
                  <div className="p-2 bg-gray-100 text-center text-gray-900">🛒</div>
                  <div className="p-2 bg-gray-100 text-center text-gray-900">🏠</div>
                  <div className="p-2 bg-gray-100 text-center text-gray-900">🚗</div>
                  <div className="p-2 bg-gray-100 text-center text-gray-900">🍔</div>
                  <div className="p-2 bg-gray-100 text-center text-gray-900">🎉</div>
                  
                  {[1, 2, 3].map(day => (
                    <React.Fragment key={day}>
                      <div className="p-2 bg-gray-50 text-gray-900">{day}</div>
                      <div className="p-2 bg-green-50 text-center cursor-pointer hover:bg-green-100 text-gray-900">
                        {day === 1 ? '$45' : ''}
                      </div>
                      <div className="p-2 bg-green-50 text-center cursor-pointer hover:bg-green-100 text-gray-900">
                        {day === 2 ? '$150' : ''}
                      </div>
                      <div className="p-2 bg-green-50 text-center cursor-pointer hover:bg-green-100 text-gray-900">
                        {day === 3 ? '$40' : ''}
                      </div>
                      <div className="p-2 bg-green-50 text-center cursor-pointer hover:bg-green-100 text-gray-900">
                        {day === 1 ? '$22' : ''}
                      </div>
                      <div className="p-2 bg-green-50 text-center cursor-pointer hover:bg-green-100 text-gray-900"></div>
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-green-600 mt-4">😊 Tap any cell to add expense!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Simple Budgeting for Normal People
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Not everyone needs Wall Street-level financial software. Sometimes simple is better.
          </p>
          <div className="text-center">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg"
            >
              Start Using Simplify Budget
            </a>
            <div className="mt-4 text-sm text-white">
              <p>Sign in with Google to create your budget</p>
              <p>Try free for 30 days without credit card requirement</p>
            </div>
          </div>
          <p className="text-indigo-100 mt-6">
            Join 150+ people who chose simple over complex
          </p>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema pageName="Quicken Alternative" />
      
      {/* FAQ Schema */}
      <ComparisonFAQSchema 
        competitor="Quicken"
        questions={[
          {
            question: "Is Simplify Budget easier to use than Quicken?",
            answer: "Yes, Simplify Budget is designed for simplicity. While Quicken has 500+ features built over 40 years, Simplify Budget focuses on visual expense tracking that you can learn in 5 minutes. No complex setup or training needed."
          },
          {
            question: "Can Simplify Budget replace Quicken for basic budgeting?",
            answer: "Absolutely. If you primarily use Quicken for expense tracking and budgeting (not investment tracking or business accounting), Simplify Budget provides a cleaner, faster solution with its Monthly Expense Calendar."
          },
          {
            question: "Why is Simplify Budget so much cheaper than Quicken?",
            answer: "Quicken charges $35-103/year for features most people don't use. Simplify Budget offers one-time payment for just budgeting features you actually need, using Google Sheets for data storage to eliminate ongoing costs."
          },
          {
            question: "Do I lose any important features switching from Quicken to Simplify Budget?",
            answer: "Simplify Budget focuses on expense tracking and budgeting. If you need investment portfolio tracking, rental property management, or business invoicing, keep Quicken. For everyday budgeting, Simplify Budget is actually better with its visual approach."
          }
        ]}
      />
    </div>
  );
}