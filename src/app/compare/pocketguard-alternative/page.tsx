import React from "react";
import Link from "next/link";
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import ComparisonFAQSchema from '../../components/ComparisonFAQSchema';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PocketGuard Alternative - Better Budgeting Without Ads | Simplify Budget",
  description: "Tired of PocketGuard's ads and limited features? Get visual expense tracking with one-time payment. Your data in Google Drive, no subscriptions. Try free 30 days.",
  keywords: "pocketguard alternative, pocketguard replacement, budget app without ads, pocketguard vs simplify Budget, visual budget app"
};

export default function PocketGuardAlternativePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              PocketGuard Without the Ads & Limits
            </h1>
            <p className="text-2xl mb-8 text-purple-100">
              One-time payment. No ads. Visual tracking that shows your whole month.
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 text-white font-bold text-lg">Feature</th>
                  <th className="text-center p-6 text-white font-bold text-lg">PocketGuard</th>
                  <th className="text-center p-6 text-yellow-300 font-bold text-lg">Simplify Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white">Price</td>
                  <td className="p-6 text-center text-white">$8-13/month forever</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">One-time payment</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white">Ads in Free Version</td>
                  <td className="p-6 text-center text-white">Yes, constantly</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">Never</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white">Visual Monthly View</td>
                  <td className="p-6 text-center text-white">❌ List only</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">✅ Calendar grid</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white">Category Limits</td>
                  <td className="p-6 text-center text-white">17 categories max</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">30 customizable</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-6 text-white">Data Ownership</td>
                  <td className="p-6 text-center text-white">Their servers</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">Your Google Drive</td>
                </tr>
                <tr>
                  <td className="p-6 text-white">Manual Entry Speed</td>
                  <td className="p-6 text-center text-white">Multiple taps</td>
                  <td className="p-6 text-center text-yellow-300 font-bold">One tap on grid</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
            >
              Start Free Trial (No Ads!) →
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            What PocketGuard Users Hate Most
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-900">Constant Ads & Upsells</h3>
              <p className="text-gray-700 mb-4">
                "Every time I open PocketGuard, there's another ad or push to upgrade. I just want to track my expenses!"
              </p>
              <p className="text-green-700 font-semibold">
                → Simplify Budget: No ads, ever. You own it.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-900">Can't See Monthly Patterns</h3>
              <p className="text-gray-700 mb-4">
                "The list view makes it impossible to see when I'm overspending during the month."
              </p>
              <p className="text-green-700 font-semibold">
                → Simplify Budget: Visual grid shows patterns instantly.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-900">Limited Categories</h3>
              <p className="text-gray-700 mb-4">
                "17 categories isn't enough. I need more granular tracking for my business expenses."
              </p>
              <p className="text-green-700 font-semibold">
                → Simplify Budget: 30 fully customizable categories.
              </p>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-900">Data Hostage</h3>
              <p className="text-gray-700 mb-4">
                "If I stop paying, I lose access to years of financial data. That's my data!"
              </p>
              <p className="text-green-700 font-semibold">
                → Simplify Budget: Your data stays in your Google Drive forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            See Your Money Visually
          </h2>
          
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-gray-900">PocketGuard Style (List)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Starbucks</span>
                    <span>-$5.45</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Target</span>
                    <span>-$67.23</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span>Gas Station</span>
                    <span>-$45.00</span>
                  </div>
                  <p className="text-center text-gray-500 pt-4">😕 Hard to see patterns</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-gray-900">Simplify Budget (Visual Grid)</h3>
                <div className="grid grid-cols-5 gap-1 text-xs">
                  <div className="p-2 bg-gray-100 font-semibold">Day</div>
                  <div className="p-2 bg-gray-100 text-center">🛒</div>
                  <div className="p-2 bg-gray-100 text-center">⛽</div>
                  <div className="p-2 bg-gray-100 text-center">☕</div>
                  <div className="p-2 bg-gray-100 text-center">🎉</div>
                  
                  <div className="p-2 bg-gray-50">Mon 1</div>
                  <div className="p-2 bg-green-100 text-center">$67</div>
                  <div className="p-2 bg-gray-50"></div>
                  <div className="p-2 bg-green-50 text-center">$5</div>
                  <div className="p-2 bg-gray-50"></div>
                  
                  <div className="p-2 bg-gray-50">Tue 2</div>
                  <div className="p-2 bg-gray-50"></div>
                  <div className="p-2 bg-green-100 text-center">$45</div>
                  <div className="p-2 bg-gray-50"></div>
                  <div className="p-2 bg-gray-50"></div>
                  
                  <p className="text-center text-green-600 pt-4 col-span-5">😊 Patterns jump out!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Escape the PocketGuard Subscription Trap
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Pay once. Own your budgeting tool forever. No ads, no limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg"
            >
              Try Free for 30 Days
            </a>
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition-all font-bold text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema pageName="PocketGuard Alternative" />
      
      {/* FAQ Schema */}
      <ComparisonFAQSchema 
        competitor="PocketGuard"
        questions={[
          {
            question: "Why switch from PocketGuard to Simplify Budget?",
            answer: "Simplify Budget has no ads ever, offers visual monthly grid view instead of just lists, provides 30 customizable categories vs PocketGuard's 17 limit, and uses one-time payment instead of monthly subscriptions."
          },
          {
            question: "Does Simplify Budget have as many features as PocketGuard?",
            answer: "Simplify Budget focuses on core budgeting with better visualization. While PocketGuard has features like bill negotiation, Simplify Budget excels at expense tracking with its unique visual grid that shows spending patterns at a glance."
          },
          {
            question: "Can I see my whole month like in Simplify Budget if I use PocketGuard?",
            answer: "No, PocketGuard only offers list views of transactions. Simplify Budget's visual monthly grid is unique, showing your entire month's spending patterns in a color-coded calendar format."
          },
          {
            question: "Is my data safer with Simplify Budget than PocketGuard?",
            answer: "Yes, your data stays in your personal Google Drive with Simplify Budget. PocketGuard stores your financial data on their servers. With Simplify Budget, you maintain complete control and ownership of your financial information."
          }
        ]}
      />
    </div>
  );
}