// src/app/compare/mint-alternative/page.tsx

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from '../../components/BreadcrumbSchema';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint Alternative That You Actually Own | One-Time $15 vs Endless Subscriptions",
  description: "Mint shut down. YNAB costs $180/year. Simplify Budget is $15 once, forever. Your data stays in YOUR Google Sheets. No subscriptions, no data hostage.",
  keywords: "mint alternative, mint shutdown, mint replacement, budget app no subscription, own your financial data"
};

const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">Simplify Budget</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">Mint (RIP)</th>
          <th className="px-6 py-4 text-center text-gray-900 font-bold">YNAB</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Price</td>
          <td className="px-6 py-4 text-center"><span className="text-green-600 font-bold">$15 once</span></td>
          <td className="px-6 py-4 text-center text-gray-900">Was free</td>
          <td className="px-6 py-4 text-center text-red-600 font-bold">$180/year</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Your data when you stop paying</td>
          <td className="px-6 py-4 text-center"><span className="text-green-600 font-bold">Yours forever</span></td>
          <td className="px-6 py-4 text-center text-red-600 font-bold">Gone</td>
          <td className="px-6 py-4 text-center text-red-600 font-bold">Locked out</td>
        </tr>
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Data storage</td>
          <td className="px-6 py-4 text-center text-gray-900">Your Google Drive</td>
          <td className="px-6 py-4 text-center text-gray-900">Their servers</td>
          <td className="px-6 py-4 text-center text-gray-900">Their servers</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Calendar view</td>
          <td className="px-6 py-4 text-center text-green-600 text-xl">✅</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
        </tr>
        <tr>
          <td className="px-6 py-4 font-medium text-gray-900">Auto-fill subscriptions</td>
          <td className="px-6 py-4 text-center text-green-600 text-xl">✅</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
          <td className="px-6 py-4 text-center text-red-600 text-xl">❌</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-6 py-4 font-medium text-gray-900">Bank sync</td>
          <td className="px-6 py-4 text-center text-gray-900">Manual</td>
          <td className="px-6 py-4 text-center text-gray-900">Auto</td>
          <td className="px-6 py-4 text-center text-gray-900">Auto</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default function MintAlternativePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Mint Shut Down. Here's a Better Alternative.
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            No subscriptions. No data hostage. Just $15 once, and your financial data stays in YOUR Google Sheets forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">

            <a 
              href="https://ko-fi.com/s/4b62acb528"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
            >
              Get Lifetime Access - $15
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">The Budget App Graveyard</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Mint: Dead</h3>
              <p className="text-gray-700">Shut down in 2024. Users lost years of financial data.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">YNAB: $180/year</h3>
              <p className="text-gray-700">Stop paying? Lose access to YOUR data.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Others: Same Story</h3>
              <p className="text-gray-700">Subscription + their servers = your data held hostage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">See The Difference</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Features Mint Never Had</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Calendar Grid View</h3>
                <p className="text-gray-700">See your entire month at a glance. Find today's date, find your expense category, enter amount. Done. No endless scrolling through transactions.</p>
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
                <p className="text-gray-700">Enter your Netflix, Spotify, gym once. We automatically plot them across all future months. You only track variable expenses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">From Former Mint Users</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"After Mint died, I tried YNAB but $180/year is insane. Simplify Budget does everything I need for $15 once. The calendar view is genius."</p>
              <p className="text-sm text-gray-700">- Sarah M., switched from Mint</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"I love that my data stays in my Google Drive. When Mint shut down, I lost 5 years of history. Never again."</p>
              <p className="text-sm text-gray-700">- Michael T., former Mint user</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Own Your Financial Data?</h2>
          <p className="text-xl mb-8">Join 150+ users who made the switch from subscription apps.</p>
          <a 
            href="https://ko-fi.com/s/4b62acb528"
            className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            Get Lifetime Access for $15
          </a>
          <p className="mt-4 text-sm text-white">One-time payment. Use forever. Cancel anytime = keep your data.</p>
        </div>
      </section>

      <BreadcrumbSchema pageName="Mint Alternative" />
    </div>
  );
}