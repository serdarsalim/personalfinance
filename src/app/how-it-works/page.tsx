import React, { Suspense } from "react";
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ArticleSchema from '../components/ArticleSchema';
import PhilosophyClient from './PhilosophyClient';
import { Metadata } from 'next';
import FeatureCarousel from '../components/sections/FeatureCarousel';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Manage your money with Simplify Budget - Complete Guide',
  description: 'Learn how to manage your finances effectively with Simplify Budget. Smart automation, visual expense tracking, and net worth monitoring made simple.',
  keywords: 'how simplify budget works, financial management app, smart budgeting, expense tracking, net worth tracking, budget calendar, family budgeting, google sheets budget',
  openGraph: {
    title: 'Manage your money with Simplify Budget - Complete Guide',
    description: 'Learn how to manage your finances effectively with Simplify Budget. Smart automation, visual expense tracking, and net worth monitoring made simple.',
    url: 'https://simplifybudget.com/how-it-works',
    siteName: 'Simplify Budget',
    images: [
      {
        url: 'https://simplifybudget.com/simplifybudget.jpg',
        width: 1200,
        height: 630,
        alt: 'Simplify Budget - How It Works Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manage your money with Simplify Budget - Complete Guide',
    description: 'Learn how to manage your finances effectively with Simplify Budget. Smart automation, visual expense tracking, and net worth monitoring made simple.',
    images: ['https://simplifybudget.com/simplifybudget.jpg'],
  },
  alternates: {
    canonical: 'https://simplifybudget.com/how-it-works',
  },
};

const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

const ArticleContent = () => (
  <>
    {/* Hero Section */}
    <section className="bg-white pt-24 pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 leading-tight pb-2">
            Manage your money with Simplify Budget
          </h1>
        </div>
      </div>
    </section>

    {/* Client-side Navigation */}
    <PhilosophyClient />

    {/* Article Content */}
    <article className="bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
        

        {/* Introduction */}
        <section id="introduction" className="mb-16">

          <div className="p-8 rounded-lg">
            <p className="text-gray-700 text-lg mb-4">
              One of the best ways to manage personal finances is by setting monthly spending goals against your income and tracking throughout the month.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              If you list all your fixed expenses in the beginning of the month and set aside the money to cover them this will allow you to achieve your goals much easier.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              For a complete financial management you also need to track your net worth on a monthly basis. Treat your life as a company and see if you're doing better over time financially or not.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              You can achieve this by tracking your investments, liquid assets, physical assets and debts.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-4">ALL of the above will assist you to live a debt-free and financially stable life and Simplify Budget makes it easy to do this:</h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">You set your fixed expenses once and they calculate automatically for each month</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">You can easily see your spending patterns through logging your expenses into a calendar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">Net worth charts show you if your net worth increases, debt decreases over time and what you need to watch out for to remain financially stable</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-700">Amounts like spending goals and net worth copy to the next month so it's easier to update them in the next month</span>
              </li>
            </ul>
          </div>

        </section>

        {/* The Simplify Budget Philosophy */}
        <section id="philosophy" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Simplify Budget approach to money management</h2>

          <div className="grid md:grid-cols-2 gap-6 md:animate-none animate-fade-in-up">
            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Track as you spend, not after</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Enter expenses when they happen to create real-time awareness. The awareness happens when it can actually influence decisions.
              </p>
            </div>

            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Smart fixed expenses</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Set up fixed expenses once—they automatically appear on due dates with advance visual warning.
              </p>
            </div>

            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Visual spending patterns</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Monthly and yearly calendar views with categories on top, days/months on the side. See all your spending patterns at a glance in one Monthly Expense Calendar.
              </p>
            </div>

            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Set spending goals and track progress</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Set spending goals and easily track if you're sticking to them. See exactly where your money goes each month.
              </p>
            </div>

            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Net worth and income tracking</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Track your complete financial picture over time—assets, debts, and income trends. Previous month's data copies over automatically.
              </p>
            </div>

            <div className="group bg-blue-50 hover:bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Learn from your money habits</h3>
              <p className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Get insights on your past spending and money habits so you can learn from them and stop being stressed about money. Know if you're getting financially secure or just burning cash.
              </p>
            </div>
          </div>
          
        </section>

        
        {/* See in Action */}
        <section id="see-in-action" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">See in Action</h2>
          <div className="mt-4">
            <FeatureCarousel hideTitle />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center mt-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">See How It Actually Works</h3>
            <p className="text-gray-700 mb-6">
              Get a detailed walkthrough of the Monthly Expense Calendar system, smart fixed expense handling, and family collaboration features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Demo with example data
              </a>
              <a 
                href="/app"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get the full app now
              </a>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why It Works: Focus on What Actually Matters</h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Simplify Budget works because it focuses on the 3 areas that actually build wealth:
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>
                Focus on tracking variable spending after fixed expenses so you make better decisions in the moment.
              </li>
              <li>
                Set clear budget and saving goal for the spending categories so you have a better spending discipline
              </li>
              <li>
                Monitor your net worth so you see how your financial life is evolving through time.
              </li>
            </ol>

            <p className="text-gray-700 mb-4">
              These three habits separate people who build wealth from people who don't.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you check in daily or monthly, these core actions compound into serious financial stability you deserve in your life.
            </p>
          </div>
        </section>

        {/* Who This Is For */}
        <section id="who-for" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Who Simplify Budget is for</h2>
          
          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-900">Great for</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800">People tired of monthly subscription fees: Simplify Budget is one-time pay only and you'll get lifetime free updates.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800">Families who want to budget together: Your data is saved on a spreadsheet you have full access to on your Google Drive. You can share the sheet with other people and track together on the same sheet.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800">People who like simple, straightforward apps: The app login is via Google in the browser. You don't need to download any software and it works on all browsers on any device instantly.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* The Bigger Picture */}
        <section id="simple-beats-complex" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Simple beats complex</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Sometimes complex apps with many features and automations create more work than the approach our app uses. You think you spend less time because of automations and have more control because of all the features.
            </p>
            <p className="text-gray-700 mb-4">
              But you actually spend more time on these apps than with Simplify Budget app and the end result is the same. You don't have to get too granular to actually save money and build wealth.
            </p>
            <p className="text-gray-700 mb-4">
              Take YNAB for example - it has a 2,000-word guide just for weekly reconciliation. Plus with YNAB you need to pay to use it every month.
            </p>
            <p className="text-gray-700">
              With Simplify Budget you'll spend less time in the app and the app comes with one-time permanent payment.
            </p>
          </div>
        </section>


        {/* How to Get Started */}
        <section id="get-started" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Get Started</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Get the app and start tracking your expenses today. You can use the full features for 30 days free and only pay for permanent license if you're happy with the app.
            </p>
            <a 
              href="/app"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Get the full app now
            </a>
          </div>
        </section>


        </div>
      </div>
    </article>
  </>
);

export default function WhyManualTracking() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <ArticleContent />
        <BreadcrumbSchema pageName="How Simplify Budget Works" />
        <ArticleSchema
          title="How Simplify Budget Works - Complete Financial Management Made Easy"
          description="Learn how Simplify Budget provides complete financial management with smart automation, visual expense tracking, and net worth monitoring."
          url="https://simplifybudget.com/how-it-works"
          imageUrl="https://simplifybudget.com/simplifybudget.jpg"
          datePublished="2024-01-15"
          dateModified={new Date().toISOString().split('T')[0]}
          authorName="Simplify Budget Team"
          organizationName="Simplify Budget"
          keywords={['how simplify budget works', 'financial management', 'smart budgeting', 'expense tracking', 'net worth tracking', 'budget calendar', 'family budgeting']}
        />
      </Suspense>
    </div>
  );
}
