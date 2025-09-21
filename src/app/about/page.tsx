import React, { Suspense } from "react";
import Image from 'next/image';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About Serdar Salim - Former Twitter Program Manager & Founder of Simplify Budget 2025',
  description: 'Meet Serdar Salim, former Twitter Program Manager who built Simplify Budget after 9 years managing systems for millions of users. Learn his story and why he created this financial management app.',
  keywords: 'Serdar Salim, Simplify Budget founder, Twitter Program Manager, budget app creator, financial management expert, budget tracking',
  openGraph: {
    title: 'About Serdar Salim - Founder of Simplify Budget',
    description: 'Meet the former Twitter Program Manager who built Simplify Budget to solve real budgeting problems.',
    url: 'https://simplifybudget.com/about',
    siteName: 'Simplify Budget',
    type: 'website',
    images: [{
      url: 'https://simplifybudget.com/simplifybudget.webp',
      width: 1200,
      height: 630,
      alt: 'About Serdar Salim - Simplify Budget Founder'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Serdar Salim - Founder of Simplify Budget',
    description: 'Meet the former Twitter Program Manager who built Simplify Budget to solve real budgeting problems.',
    images: ['https://simplifybudget.com/simplifybudget.webp'],
  },
  alternates: {
    canonical: 'https://simplifybudget.com/about',
  },
};

// Simple loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Main content component
const AboutContent = () => (
  <>
    {/* Hero Section */}
    <section className="bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 font-serif">
          About the Founder
        </h1>

        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur-lg opacity-20"></div>
            <Image
              src="/serdarsalim.webp"
              alt="Serdar Salim, Founder of Simplify Budget"
              width={160}
              height={160}
              className="relative rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>

        <div className="text-xl text-gray-700 space-y-8 leading-relaxed font-serif max-w-3xl mx-auto">
          <p>
            I'm Serdar Salim, the founder of Simplify Budget. I spent 9 years at Twitter as a Program Manager,
            where I led global customer support agent training globally. During this time, I was also managing my own finances
            and struggling with the same budgeting problems everyone faces.
          </p>

          <p>
            Cash payments, multiple bank accounts, irregular income, and manual transactions made it impossible to get a clear picture of my finances.
            I tried many budgeting apps and even spreadsheets, but they were either too simplistic or overly complex with automation that frequently broke.
          </p>

          <p>
            I needed something that captured my real spending patterns without hours of data entry.
            Something that worked whether I was paying cash at a coffee shop or setting up automatic bill payments. So I built my own.
          </p>

          <p>
            This system has carried me through salary changes, major purchases, building an emergency fund, and planning for long-term goals.
            It's the reason I can make confident financial decisions without constantly worrying about where my money is going.
          </p>
        </div>
      </div>
    </section>

    {/* Why I Built This Section */}
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Why I Built Simplify Budget</h2>
        <p className="text-xl text-gray-600 mb-8 text-center">I needed something that other budgeting apps didn't provide</p>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">📅 Calendar View for Daily Expenses</h3>
              <p className="text-gray-600">Log daily expenses in seconds with an intuitive calendar interface</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">📈 Net Worth Tracking</h3>
              <p className="text-gray-600">Track all your liquid and physical assets as well as debts to see your true financial picture</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">🔄 Fixed Expense Tracker</h3>
              <p className="text-gray-600">Shows all your fixed expenses at the beginning of each month so you know exactly how much you have left to spend</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Result Section */}
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">The Result</h2>
        <div className="text-xl text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
          <p>
            Financial security. I sleep better at night knowing I have my spending and finances in control.
            I know how much money I need per month, my spending is more intentional, and I make informed decisions rather than going by gut feeling.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Connect with Serdar</h2>
        <p className="text-xl text-gray-600 mb-8">
          Questions about budgeting or want to share your financial goals?
          I respond personally to every message.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@simplifybudget.com"
            className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center font-medium"
          >
            Email Me Directly
          </a>
          <a
            href="https://www.linkedin.com/in/domurcuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-blue-600 bg-white border-2 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center font-medium hover:bg-blue-50"
          >
            LinkedIn Profile
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