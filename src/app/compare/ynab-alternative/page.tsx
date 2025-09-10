// src/app/compare/ynab-alternative/page.tsx

import React from "react";
import Link from "next/link";
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ComparisonFAQSchema from '../../components/ComparisonFAQSchema';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YNAB Alternative - $15 One-Time vs $180/Year | Expense Calendar Budget App",
  description: "Stop paying $180/year for YNAB! Get our expense calendar budget app for $15 one-time payment. Visual monthly tracking, data in your Google Drive, no subscriptions ever.",
  keywords: "ynab alternative, budget app without subscription, ynab replacement, cheaper than ynab, $15 budget app, expense calendar, visual budget tracker, google sheets budget, ynab too expensive, one time payment budget app",
  openGraph: {
    title: "YNAB Alternative - $15 One-Time vs $180/Year | Expense Calendar Budget App",
    description: "Stop paying $180/year for YNAB! Get our expense calendar budget app for $15 one-time payment.",
    url: "https://simplifybudget.com/compare/ynab-alternative",
    siteName: "Simplify Budget",
    images: [
      {
        url: "https://simplifybudget.com/app-screenshots/2monthlygrid.png",
        width: 1200,
        height: 630,
        alt: "Expense Calendar Budget App - YNAB Alternative"
      }
    ]
  }
};

export default function YNABAlternativePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero with Price Comparison */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              YNAB Costs $180/Year. We're One-Time Payment.
            </h1>
            <p className="text-2xl mb-8 text-emerald-100">
              Same budgeting power. Better features. No subscription trap.
            </p>
          </div>
          
          {/* Price Comparison Visual */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">YNAB</h3>
              <div className="text-5xl font-bold mb-2 text-white">$180</div>
              <p className="text-lg mb-4 text-white">Every. Single. Year.</p>
              <ul className="text-left space-y-2 text-white">
                <li>❌ Lose access if you stop paying</li>
                <li>❌ Price increases every few years</li>
                <li>❌ Your data on their servers</li>
              </ul>
            </div>
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Simplify Budget</h3>
              <div className="text-4xl font-bold mb-2 text-gray-900">One-Time</div>
              <p className="text-lg mb-4 text-gray-900">Pay Once. Use Forever.</p>
              <ul className="text-left space-y-2 text-gray-900">
                <li>✅ Keep access forever</li>
                <li>✅ No price increases ever</li>
                <li>✅ Your data in YOUR Google Sheets</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
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

      {/* Break Even Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">The Math Is Simple</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-gray-700 mb-2">YNAB Monthly Cost</p>
                <p className="text-3xl font-bold text-gray-900">$15/month</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">Simplify Budget Total Cost</p>
                <p className="text-3xl font-bold text-green-600">$15 one-time</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">You Break Even In</p>
                <p className="text-3xl font-bold text-blue-600">1 Month</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                After just one month, you're saving money. Every month after is pure savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Everything YNAB Has, Plus More</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-600">What We Both Have</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong className="text-gray-900">Zero-based budgeting</strong>
                    <p className="text-gray-700">Give every dollar a job</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong className="text-gray-900">Category tracking</strong>
                    <p className="text-gray-700">30+ customizable categories</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong className="text-gray-900">Reports & insights</strong>
                    <p className="text-gray-700">See spending trends over time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <div>
                    <strong className="text-gray-900">Goal tracking</strong>
                    <p className="text-gray-700">Set and monitor savings goals</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">What Only We Have</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">★</span>
                  <div>
                    <strong className="text-gray-900">Expense calendar</strong>
                    <p className="text-gray-700">See your entire month at once - no scrolling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">★</span>
                  <div>
                    <strong className="text-gray-900">Auto-fill subscriptions</strong>
                    <p className="text-gray-700">Set once, fills across all months automatically</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">★</span>
                  <div>
                    <strong className="text-gray-900">True data ownership</strong>
                    <p className="text-gray-700">Your data in YOUR Google Sheets forever</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">★</span>
                  <div>
                    <strong className="text-gray-900">No subscription anxiety</strong>
                    <p className="text-gray-700">Never worry about price increases</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">See It In Action</h2>
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/pfwtW8DKStM"
              title="Simplify Budget Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-6 text-gray-700">
            The calendar view that YNAB users have been asking for since 2015.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">From Former YNAB Users</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I used YNAB for 3 years. When they raised prices again, I found Simplify Budget. 
                The calendar view is what YNAB should have had years ago. Saved $165 this year alone."
              </p>
              <p className="text-sm text-gray-700">- James K., saved $495 over 3 years</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The auto-subscription feature alone makes this better than YNAB. I don't have to 
                manually enter Netflix, Spotify, gym every single month. It just works."
              </p>
              <p className="text-sm text-gray-700">- Lisa R., former YNAB subscriber</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Questions From YNAB Users</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I import my YNAB data?</h3>
              <p className="text-gray-700">
                Yes! Export your YNAB data as CSV and import it into your Google Sheet. 
                Takes about 5 minutes.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">What about bank sync?</h3>
              <p className="text-gray-700">
                We use manual entry (like YNAB originally did). This makes you more conscious 
                of spending and keeps the price at $15 instead of $180.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Is there a mobile app?</h3>
              <p className="text-gray-700">
                It's a web app that works perfectly on mobile. Add to your home screen and 
                it works like a native app. No app store fees = lower price for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Renting Your Budget App</h2>
          <p className="text-xl mb-8">
            Take control of your money without monthly fees.
          </p>
          <Link 
            href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Start Using Simplify Budget
          </Link>
          <div className="mt-4 text-sm text-white">
            <p>Sign in with Google to create your budget</p>
            <p>Try free for 30 days without credit card requirement</p>
          </div>
          <p className="mt-6 text-sm text-white">
            Join 150+ people who stopped paying for subscriptions
          </p>
        </div>
      </section>

      <BreadcrumbSchema pageName="YNAB Alternative" />
      
      {/* FAQ Schema */}
      <ComparisonFAQSchema 
        competitor="YNAB"
        questions={[
          {
            question: "How is Simplify Budget different from YNAB?",
            answer: "Simplify Budget offers one-time payment instead of $180/year subscription, Monthly Expense Calendar view that YNAB lacks, and stores data in your Google Drive instead of their servers."
          },
          {
            question: "Can I import my YNAB data to Simplify Budget?",
            answer: "Yes, you can export your YNAB data as CSV and import it into Simplify Budget's Google Sheets template. We provide instructions during setup."
          },
          {
            question: "Does Simplify Budget have the same features as YNAB?",
            answer: "Simplify Budget focuses on core budgeting with visual expense tracking, subscription management, and reporting. It doesn't include YNAB's goals feature but adds Monthly Expense Calendar that YNAB users have requested for years."
          },
          {
            question: "Why is Simplify Budget cheaper than YNAB?",
            answer: "Simplify Budget uses Google Sheets for data storage, eliminating server costs. We pass these savings to you with a one-time payment model instead of recurring subscriptions."
          }
        ]}
      />
    </div>
  );
}