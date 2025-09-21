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
    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
          <th className="px-6 py-4 text-center text-blue-600 font-bold">Simplify Budget</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">YNAB</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">EveryDollar</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">PocketGuard</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">Free Apps</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Price</td>
          <td className="px-6 py-4 text-center"><span className="text-green-600 font-bold">$15 one-time</span></td>
          <td className="px-6 py-4 text-center text-red-600">$180/year</td>
          <td className="px-6 py-4 text-center text-red-600">$80/year</td>
          <td className="px-6 py-4 text-center text-orange-600">$8/month</td>
          <td className="px-6 py-4 text-center text-gray-600">Free + ads</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Access when you stop paying</td>
          <td className="px-6 py-4 text-center"><span className="text-green-600 font-bold">Forever yours</span></td>
          <td className="px-6 py-4 text-center text-red-600">Locked out</td>
          <td className="px-6 py-4 text-center text-red-600">Locked out</td>
          <td className="px-6 py-4 text-center text-red-600">Locked out</td>
          <td className="px-6 py-4 text-center text-orange-600">Limited features</td>
        </tr>
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Data ownership</td>
          <td className="px-6 py-4 text-center text-green-600">Your Google Drive</td>
          <td className="px-6 py-4 text-center text-gray-600">Their servers</td>
          <td className="px-6 py-4 text-center text-gray-600">Their servers</td>
          <td className="px-6 py-4 text-center text-gray-600">Their servers</td>
          <td className="px-6 py-4 text-center text-gray-600">Their servers</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Monthly calendar view</td>
          <td className="px-6 py-4 text-center text-green-600 text-xl">✅</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
        </tr>
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Auto-fill subscriptions</td>
          <td className="px-6 py-4 text-center text-green-600 text-xl">✅</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Ads/upselling</td>
          <td className="px-6 py-4 text-center text-green-600">None</td>
          <td className="px-6 py-4 text-center text-green-600">None</td>
          <td className="px-6 py-4 text-center text-orange-600">Ramsey content</td>
          <td className="px-6 py-4 text-center text-red-600">Heavy ads</td>
          <td className="px-6 py-4 text-center text-red-600">Constant</td>
        </tr>
      </tbody>
    </table>
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
              Start Using Simplify Budget
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* YNAB Comparison */}
            <div id="ynab" className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Simplify Budget vs YNAB</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Annual cost</span>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">$15 total</div>
                    <div className="text-red-600">vs $180/year</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Calendar view</span>
                  <div className="text-right">
                    <div className="text-green-600">✅ Monthly grid</div>
                    <div className="text-red-600">vs ❌ Lists only</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Data ownership</span>
                  <div className="text-right">
                    <div className="text-green-600">Your Google Drive</div>
                    <div className="text-red-600">vs Their servers</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Break even:</strong> 1 month. After that, pure savings.
                </p>
              </div>
            </div>

            {/* EveryDollar Comparison */}
            <div id="everydollar" className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Simplify Budget vs EveryDollar</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Annual cost</span>
                  <div className="text-right">
                    <div className="text-green-600 font-bold">$15 total</div>
                    <div className="text-red-600">vs $80/year</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Budget methods</span>
                  <div className="text-right">
                    <div className="text-green-600">Any method</div>
                    <div className="text-red-600">vs Ramsey only</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Visual tracking</span>
                  <div className="text-right">
                    <div className="text-green-600">Calendar view</div>
                    <div className="text-red-600">vs Lists only</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>No "Ramsey tax":</strong> Use any budgeting philosophy you want.
                </p>
              </div>
            </div>

            {/* Mint Alternative */}
            <div id="mint" className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Mint Users Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Data can't disappear</strong>
                    <p className="text-gray-600 text-sm">Your data in YOUR Google Drive forever</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Visual expense calendar</strong>
                    <p className="text-gray-600 text-sm">See spending patterns Mint never showed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">No subscription trap</strong>
                    <p className="text-gray-600 text-sm">$15 once vs potential future fees</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  💀 <strong>Mint lesson:</strong> Free apps can shut down overnight. Own your data.
                </p>
              </div>
            </div>

            {/* Free Apps vs Paid */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Free Apps vs $15 One-Time</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Free Apps Problems:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>❌ Limited features to push upgrades</li>
                    <li>❌ Constant ads and upselling</li>
                    <li>❌ Your data on their servers</li>
                    <li>❌ Can become paid anytime</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">$15 One-Time Benefits:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>✅ Full features forever</li>
                    <li>✅ No ads, no upselling</li>
                    <li>✅ Your data, your control</li>
                    <li>✅ Own it forever</li>
                  </ul>
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
                Yes! Export your data as CSV from any budget app and import it into your Google Sheet.
                Takes about 5 minutes and we provide step-by-step instructions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">What if you shut down like Mint did?</h3>
              <p className="text-gray-700">
                Your data stays in YOUR Google Drive forever. The Google Sheets template works independently.
                Even if we disappear, you keep full access to your financial data and budgeting system.
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