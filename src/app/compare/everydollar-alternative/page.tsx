import React from "react";
import Link from "next/link";
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ComparisonFAQSchema from '../../components/ComparisonFAQSchema';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EveryDollar Alternative - No Dave Ramsey Fees | Simplify Budget",
  description: "Skip the $80/year EveryDollar Plus. Get better budgeting with our visual expense tracker. One-time payment, your data in Google Drive. Try free 30 days.",
  keywords: "everydollar alternative, everydollar plus alternative, dave ramsey budget app alternative, budget app without ramsey, everydollar replacement"
};

export default function EveryDollarAlternativePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Better Than EveryDollar. Without the Ramsey Tax.
            </h1>
            <p className="text-2xl mb-8 text-blue-100">
              One-time payment instead of $80/year. Visual tracking that actually works.
            </p>
          </div>
          
          {/* Price Comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">EveryDollar Plus</h3>
              <div className="text-5xl font-bold mb-2 text-white">$80</div>
              <p className="text-lg mb-4 text-white">Every Year Forever</p>
              <ul className="text-left space-y-2 text-white">
                <li>❌ Lose access if you cancel</li>
                <li>❌ Must follow Ramsey method</li>
                <li>❌ Limited customization</li>
                <li>❌ No visual monthly view</li>
              </ul>
            </div>
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Simplify Budget</h3>
              <div className="text-4xl font-bold mb-2 text-gray-900">One-Time</div>
              <p className="text-lg mb-4 text-gray-900">Pay Once. Own Forever.</p>
              <ul className="text-left space-y-2 text-gray-900">
                <li>✅ Keep access forever</li>
                <li>✅ Use any budget method</li>
                <li>✅ Fully customizable</li>
                <li>✅ Visual calendar view</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
            >
              Try Free for 30 Days →
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Why People Switch from EveryDollar
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Visual Monthly Grid</h3>
              <p className="text-gray-600">
                See your entire month at a glance. EveryDollar's list view makes it hard to spot spending patterns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Any Budget Method</h3>
              <p className="text-gray-600">
                Not locked into baby steps. Use zero-based, 50/30/20, or create your own system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Your Data, Your Drive</h3>
              <p className="text-gray-600">
                Everything stays in your Google Drive. Export anytime. No vendor lock-in like EveryDollar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-4">
              "I was tired of paying $80/year for EveryDollar Plus just to connect my bank. SimplifyBudget's visual grid actually made me better at budgeting because I can see patterns. Plus, manual entry makes me more aware of spending."
            </blockquote>
            <p className="text-gray-600 font-semibold">– Former EveryDollar Plus User</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Stop Paying the Ramsey Tax
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 150+ people who switched from subscription budgeting to ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg"
            >
              Start Your Free Trial
            </a>
            <a 
              href="https://www.youtube.com/watch?v=PuX2qe4CN2A&feature=youtu.be"
              className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all font-bold text-lg"
            >
              Watch Demo Video
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema pageName="EveryDollar Alternative" />
      
      {/* FAQ Schema */}
      <ComparisonFAQSchema 
        competitor="EveryDollar"
        questions={[
          {
            question: "Is SimplifyBudget better than EveryDollar?",
            answer: "SimplifyBudget offers visual monthly grid view, one-time payment instead of $80/year, works with any budgeting method (not just Dave Ramsey's), and stores data in your Google Drive for complete ownership."
          },
          {
            question: "Can I use SimplifyBudget without following Dave Ramsey's baby steps?",
            answer: "Yes! Unlike EveryDollar, SimplifyBudget works with any budgeting method - zero-based, 50/30/20, or your own custom approach. You're not locked into any specific financial philosophy."
          },
          {
            question: "Does SimplifyBudget connect to banks like EveryDollar Plus?",
            answer: "No, SimplifyBudget uses manual entry which research shows builds better spending awareness. Plus, manual entry means no security risks from bank connections and works with all banks globally."
          },
          {
            question: "How do I switch from EveryDollar to SimplifyBudget?",
            answer: "Export your EveryDollar data, set up our Google Sheets template, and start tracking. The visual grid makes expense entry faster than EveryDollar's list view. Most users are fully switched within 30 minutes."
          }
        ]}
      />
    </div>
  );
}