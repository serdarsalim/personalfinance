import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget App Comparison - Simplify Budget vs YNAB, Mint, EveryDollar & More",
  description: "Compare Simplify Budget with all major budget apps. See why $15 one-time beats $180/year subscriptions. Visual expense calendar, your data ownership.",
  keywords: "budget app comparison, ynab vs simplify budget, mint alternative, everydollar alternative, budget app reviews, best budget app 2025",
  openGraph: {
    title: "Budget App Comparison - $15 One-Time vs Expensive Subscriptions",
    description: "See why Simplify Budget beats YNAB, Mint, EveryDollar and other budget apps. One payment, forever access.",
    url: "https://simplifybudget.com/compare",
    siteName: "Simplify Budget",
    images: [{
      url: "https://simplifybudget.com/app-screenshots/2monthlygrid.png",
      width: 1200,
      height: 630,
      alt: "Budget App Comparison - Simplify Budget vs Competition"
    }]
  }
};

const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <div className="min-w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
      {/* Header */}
      <div className="grid grid-cols-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="px-6 py-6 font-bold text-lg">Feature</div>
        <div className="px-6 py-6 text-center">
          <div className="font-bold text-lg">Simplify Budget</div>
          <div className="text-sm text-blue-100">Own forever</div>
        </div>
        <div className="px-6 py-6 text-center">
          <div className="font-bold text-lg">YNAB</div>
          <div className="text-sm text-blue-100">Expensive subscription</div>
        </div>
        <div className="px-6 py-6 text-center">
          <div className="font-bold text-lg">EveryDollar</div>
          <div className="text-sm text-blue-100">Ramsey method only</div>
        </div>
        <div className="px-6 py-6 text-center">
          <div className="font-bold text-lg">PocketGuard</div>
          <div className="text-sm text-blue-100">Ad-heavy</div>
        </div>
        <div className="px-6 py-6 text-center">
          <div className="font-bold text-lg">Free Apps</div>
          <div className="text-sm text-blue-100">Limited features</div>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {/* Price Row */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">💰</span>
            Price
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <div className="font-bold text-green-800">
              <span className="mr-2">🎉</span>
              $15 one-time
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="font-semibold text-red-700">
              <span className="mr-2">💸</span>
              $180/year
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="font-semibold text-red-700">
              <span className="mr-2">💸</span>
              $80/year
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="font-semibold text-orange-700">
              <span className="mr-2">🔄</span>
              $8/month
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-gray-700">
              <span className="mr-2">📢</span>
              Free + ads
            </div>
          </div>
        </div>

        {/* Access Row */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors bg-gray-25">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">🔐</span>
            Access when you stop paying
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <div className="font-bold text-green-800">
              <span className="mr-2">♾️</span>
              Forever yours
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-red-700">
              <span className="mr-2">🚫</span>
              Locked out
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-red-700">
              <span className="mr-2">🚫</span>
              Locked out
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-red-700">
              <span className="mr-2">🚫</span>
              Locked out
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-orange-700">
              <span className="mr-2">⚠️</span>
              Limited features
            </div>
          </div>
        </div>

        {/* Data Ownership */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">🗄️</span>
            Data ownership
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <div className="font-bold text-green-800">
              <span className="mr-2">☁️</span>
              Your Google Drive
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-gray-700">
              <span className="mr-2">🏢</span>
              Their servers
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-gray-700">
              <span className="mr-2">🏢</span>
              Their servers
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-gray-700">
              <span className="mr-2">🏢</span>
              Their servers
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-gray-700">
              <span className="mr-2">🏢</span>
              Their servers
            </div>
          </div>
        </div>

        {/* Calendar View */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors bg-gray-25">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">📅</span>
            Monthly calendar view
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <span className="text-2xl text-green-600">✅</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
        </div>

        {/* Auto-fill Subscriptions */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">🔄</span>
            Auto-fill subscriptions
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <span className="text-2xl text-green-600">✅</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
          <div className="px-6 py-3 text-center">
            <span className="text-2xl text-red-600">❌</span>
          </div>
        </div>

        {/* Ads/Upselling */}
        <div className="grid grid-cols-6 hover:bg-gray-50 transition-colors bg-gray-25">
          <div className="px-6 py-3 font-semibold text-gray-900 flex items-center">
            <span className="mr-3 text-xl">📢</span>
            Ads/upselling
          </div>
          <div className="px-6 py-3 text-center bg-green-50 border-l-4 border-green-500">
            <div className="font-bold text-green-800">
              <span className="mr-2">🚫</span>
              None
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-green-800">
              <span className="mr-2">🚫</span>
              None
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-orange-700">
              <span className="mr-2">📚</span>
              Ramsey content
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-red-700">
              <span className="mr-2">📢</span>
              Heavy ads
            </div>
          </div>
          <div className="px-6 py-3 text-center">
            <div className="text-red-700">
              <span className="mr-2">🔄</span>
              Constant
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Budget App Comparison: Why $15 Beats $180+/Year
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Stop renting your budget app. Compare Simplify Budget with YNAB, EveryDollar, and others.
            </p>
            <a
              href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Sign Up with Google
            </a>
            <div className="mt-4 text-sm text-blue-100">
              <p>Try free for 30 days • Sign in with Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Complete Feature Comparison</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* Individual App Comparisons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Detailed App Comparisons</h2>

          <div className="space-y-16">
            {/* YNAB Comparison */}
            <div id="ynab" className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Simplify Budget vs YNAB</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Annual savings</div>
                    <div className="text-2xl font-bold text-green-600">$165</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">What YNAB Users Actually Complain About</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">$180/year with frequent price increases (doubled for early users)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">Limited reports not available on mobile</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">2000-word weekly reconciliation guide (too complex)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">99+ technical outages tracked in 2024</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-4">How Simplify Budget Fixes This</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">$15 once - price locked forever</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Expense calendar view YNAB users have begged for since 2015</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Auto-fill fixed expenses (Netflix, rent) - set once, works forever</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Google Apps Script - can't go down like traditional apps</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-semibold">
                    💡 <strong>Break even in 1 month.</strong> Save $495 over 3 years vs YNAB's subscription trap.
                  </p>
                </div>
              </div>
            </div>

            {/* EveryDollar Comparison */}
            <div id="everydollar" className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-green-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Simplify Budget vs EveryDollar</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">No Ramsey tax</div>
                    <div className="text-2xl font-bold text-green-600">$80 saved</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4">What EveryDollar Users Complain About</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">$120/year "shady" pricing for basic bank sync</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">Android app "often freezes & glitches" with login issues</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">Rigid baby steps system - "trying to shove yourself into a box"</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">❌</span>
                        <span className="text-gray-700 text-sm">"Absolutely terrible" customer service that takes days to respond</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-4">How Simplify Budget is Different</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Simple budgeting - no forced Dave Ramsey methodology</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Web-based - works reliably on all devices</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Expense calendar view shows spending patterns EveryDollar hides</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-sm">✅</span>
                        <span className="text-gray-700 text-sm">Your data in your Google Drive - true ownership</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    🚫 <strong>Budget your way</strong> without Dave Ramsey's rigid baby steps framework.
                  </p>
                </div>
              </div>
            </div>

            {/* Mint Alternative */}
            <div id="mint" className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">After Mint's Shutdown</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Data security</div>
                    <div className="text-2xl font-bold text-purple-600">Forever</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4">Why Mint Users Were Devastated</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">💀</span>
                        <span className="text-gray-700 text-sm">10+ years of financial data lost overnight in 2024</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">💀</span>
                        <span className="text-gray-700 text-sm">Forced migration to Credit Karma (no budgeting features)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">💀</span>
                        <span className="text-gray-700 text-sm">Free model was unsustainable - data costs too expensive</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-sm">💀</span>
                        <span className="text-gray-700 text-sm">Users "blown away" and disappointed after years of loyalty</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-600 mb-4">Why This Can't Happen to You</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 text-sm">🛡️</span>
                        <span className="text-gray-700 text-sm">Google Apps Script architecture - runs on Google's infrastructure</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 text-sm">🛡️</span>
                        <span className="text-gray-700 text-sm">Your data lives in YOUR Google Drive forever</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 text-sm">🛡️</span>
                        <span className="text-gray-700 text-sm">Manual entry builds better financial awareness than auto-sync</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1 text-sm">🛡️</span>
                        <span className="text-gray-700 text-sm">Works with any bank globally - no integration dependencies</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <p className="text-purple-800 font-semibold">
                    💡 <strong>Mint's lesson:</strong> Never trust free apps with years of financial data. Own your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Features No Other Budget App Has</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Monthly Expense Calendar</h3>
                <p className="text-gray-700">See your entire month at a glance. Find today, find category, enter amount. No scrolling through endless transaction lists like other apps.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Auto-Fill Subscriptions</h3>
                <p className="text-gray-700">Enter Netflix, Spotify, gym membership once. We automatically plot them across all future months. Only track your variable expenses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">From Users Who Switched</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Used YNAB for 3 years. When they raised prices again, I found Simplify Budget.
                The calendar view is what YNAB should have had. Saved $165 this year alone."
              </p>
              <p className="text-sm text-gray-600">- Former YNAB subscriber</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "After Mint died, I tried free apps but they were terrible. $15 for something
                that actually works and keeps my data safe? No brainer."
              </p>
              <p className="text-sm text-gray-600">- Former Mint user</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Common Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Why is Simplify Budget cheaper than other apps?</h3>
              <p className="text-gray-700">
                We use Google Sheets for data storage, eliminating server costs. No bank sync means no ongoing API fees.
                We pass these savings to you with a one-time payment instead of expensive subscriptions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I import data from YNAB/EveryDollar?</h3>
              <p className="text-gray-700">
                You start fresh - takes just minutes to set up and start budgeting. The app keeps your history
                so you can compare months and check previous data. Clean slate, better habits.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">What if you shut down like Mint did?</h3>
              <p className="text-gray-700">
                It can't shut down like Mint because it's a Google Apps Script that runs on Google's infrastructure
                and saves data to YOUR Google Drive. Works as long as Google exists - pretty safe bet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Why manual entry instead of bank sync?</h3>
              <p className="text-gray-700">
                Manual entry makes you more aware of spending (proven by research). No security risks from bank connections.
                Works with all banks globally. Plus, it keeps our costs low so we can charge $15 instead of $180.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Paying Budget App Subscriptions</h2>
          <p className="text-xl mb-8">
            Join 150+ people who switched to ownership instead of renting.
          </p>
          <a
            href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Start Using Simplify Budget
          </a>
          <div className="mt-4 text-sm text-white">
            <p>Try free for 30 days • No credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
}