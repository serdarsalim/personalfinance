import React, { Suspense } from "react";
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ArticleSchema from '../components/ArticleSchema';
import { Metadata } from 'next';
import HowItWorksClient from './HowItWorksClient';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Complete User Guide | How to Use Simplify Budget App 2025',
  description: 'Step-by-step guide to using Simplify Budget. Track expenses in 5 seconds, manage fixed expenses, family collaboration. Complete app tutorial.',
  keywords: 'budget app tutorial, how to use budget app, expense tracking guide, budget app guide, family budget app, budget app help, simplify budget tutorial',
  openGraph: {
    title: 'Complete User Guide | How to Use Simplify Budget App',
    description: 'Step-by-step guide to using Simplify Budget. Track expenses in 5 seconds, manage fixed expenses, family collaboration.',
    url: 'https://simplifybudget.com/how-it-works',
    siteName: 'Simplify Budget',
    images: [
      {
        url: 'https://simplifybudget.com/app-screenshots/1budgettab.png',
        width: 1200,
        height: 630,
        alt: 'Simplify Budget User Guide - App Tutorial Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete User Guide | How to Use Simplify Budget App',
    description: 'Step-by-step guide to using Simplify Budget. Track expenses in 5 seconds, manage fixed expenses.',
    images: ['https://simplifybudget.com/app-screenshots/1budgettab.png'],
  },
  alternates: {
    canonical: 'https://simplifybudget.com/how-it-works',
  },
};

const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

const HowItWorksContent = () => (
  <>
    {/* Hero Section */}
    <section className="bg-white pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 leading-tight pb-2">
            How to Use Simplify Budget App
          </h1>
        </div>
      </div>
    </section>

    {/* Client-side Navigation */}
    <HowItWorksClient />

    {/* Article Content */}
    <article className="bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
        

        {/* Dashboard Section */}
        <section id="dashboard" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Dashboard: Monthly Budget Overview</h2>
          
          <p className="text-gray-700 mb-6">
            The dashboard displays your income, expenditures broken down by spending categories, and remaining budget. You can set both spending and saving goals to track your financial targets.
          </p>
          
          <p className="text-gray-700 mb-6">
            A fixed expenses list shows all monthly subscriptions next to the budget table. These fixed expenses automatically appear as spent from day 1 in their spending categories so you know exactly how much money you have left to spend.
          </p>
          

          {/* Dashboard Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/1budgettab.png" 
              alt="Simplify Budget Dashboard Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">What You See at a Glance</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Money Left to Spend</h4>
                <p className="text-green-800">See exactly how much you can still spend this month. Whatever you don't spend becomes your savings automatically.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-3">Fixed Expenses List</h4>
                <p className="text-purple-800">All fixed expenses are listed so you don't miss their due dates. They already show as spent in the budget table so you know how much money you've left for the month.</p>
              </div>
              
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Budget goals:</strong> Set and edit target amounts directly in the budgeted column. Spending data flows from your expense and income tabs. Fixed expenses are automatically included in your spent totals. Goals automatically carry over to the next month, which you can adjust if needed or leave as is - since most people have similar spending goals each month, this carryover feature saves time.
              </p>
            </div>
          </div>
        </section>

        {/* Expense Grid */}
        <section id="expense-grid" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Expense Entry: Fast & Simple</h2>
          
          <p className="text-gray-700 mb-6">
            Click where any date meets any category to add an expense. Enter the amount and description. You can add multiple entries per day or just enter the daily total for that category. It's lightning fast and works perfectly on your phone.
          </p>

          {/* Expense Grid Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/2monthlygrid.png" 
              alt="Expense Grid Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Entry Popup Screenshot */}
          <div className="mb-10">
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-blue-900 mb-3">Here's what happens when you open the expense popup:</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• All existing expenses for that day/category</li>
                <li>• Empty row to add new transactions</li>
                <li>• Category emoji and date at the top</li>
                <li>• Running total for that day</li>
                <li>• No save button needed - auto-saves when you click outside</li>
                <li>• Red X to delete any transaction instantly</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <img 
                src="/app-screenshots/expenseentry.png" 
                alt="Expense Entry Popup" 
                className="w-full rounded-lg shadow-lg border"
              />
            </div>
          </div>



        </section>

        {/* Fixed Expenses */}
        <section id="subscriptions" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Fixed Expenses: Enter them once and they'll appear automatically on each pay cycle</h2>
          
          <p className="text-gray-700 mb-6">
            Manage your active fixed payments (bills, subscriptions, and memberships). Anything that automatically charges your account monthly, quarterly, or yearly gets entered here once, and you'll see when payments are due so you never get surprised by charges.
          </p>

          {/* Subscriptions Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/3recurring.png" 
              alt="Subscription Management Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          <div className="mb-10">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-yellow-800">
                The list is ordered by due dates first so you never get surprised by bills or payments coming up.
              </p>
            </div>
          </div>

          {/* Visual Payment Timeline */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📊</span>
                <h4 className="font-bold text-purple-900 text-lg">Subscription Chart</h4>
              </div>
              <p className="text-purple-800">
                The chart shows you current year's subscriptions with projected payments through the end of the year. You can toggle it on and off.
              </p>
            </div>
          </div>


        </section>

        {/* Income Tracking */}
        <section id="income" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Income Tracking</h2>
          
          <p className="text-gray-700 mb-6">
            Add money when you get it - paychecks, side hustle earnings, gifts, whatever. You can set it as recurring income or one-time to track what's coming in each month.
          </p>

          {/* Income Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/4incometab.png" 
              alt="Income Tracking Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Two Income Types */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Two Income Types</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">One-time income:</h4>
                <p className="text-blue-800">Freelance payments, bonuses, side hustle earnings, investment sales, money from savings, loans (adjust net worth accordingly)</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Recurring income:</h4>
                <p className="text-green-800">Salary, passive income, regular dividends</p>
              </div>
            </div>
          </div>


        </section>

        {/* Net Worth Tracking */}
        <section id="networth" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Net Worth Tracking</h2>
          
          <p className="text-gray-700 mb-6">
            Track your total net worth across four simple categories: liquid assets, investments, physical assets, and debts. Update monthly with your actual account balances.
          </p>

          {/* Net Worth Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/5networth.png" 
              alt="Net Worth Tracking Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Four Simple Buckets */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Four Simple Buckets</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Liquid Assets</h4>
                <p className="text-blue-800">Bank accounts, cash, money market - anything you can spend immediately</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">Investments</h4>
                <p className="text-green-800">Stocks, crypto, retirement accounts, real estate - your wealth-building assets</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Physical Assets</h4>
                <p className="text-purple-800">Car, electronics, furniture - valuable things you own</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-2">Debts</h4>
                <p className="text-orange-800">Credit cards, loans, mortgages - what you owe</p>
              </div>
            </div>
          </div>


          {/* Monthly Updates */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Monthly Updates</h3>
            
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-3">End of month routine:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Check bank account balance → Enter in Liquid Assets</li>
                <li>• Check investment account value → Enter in Investments</li>
                <li>• Estimate physical asset values if changed → Update Physical Assets</li>
                <li>• <strong>Done in 5 minutes, accurate forever</strong></li>
              </ul>
            </div>
            
            <p className="text-gray-700 font-semibold">
              No daily market stress, no sync failures, no reconciliation headaches - just a clear monthly snapshot of your complete financial picture.
            </p>
          </div>
        </section>

        {/* Category Management */}
        <section id="categories" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Category Management</h2>
          
          <p className="text-gray-700 mb-6">
            Choose from 30 pre-built categories and activate only the ones you use. Rename and rearrange them to match your needs - changes automatically appear in dashboard, expense, and subscription views. Archive unused categories to keep them out of the way while preserving transaction history.
          </p>

          {/* Categories Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/7categories.png" 
              alt="Category Management Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>



        </section>

        {/* Settings */}
        <section id="settings" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Settings & Data Setup</h2>
          
          <p className="text-gray-700 mb-6">
            Create a new Google Sheet in your Drive to store your financial data, or connect to an existing one. Only you have access to the sheet since it's in your own Google Drive. Share it with family members to track finances together, or disconnect anytime to unlink the current sheet.
          </p>

          {/* Settings Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/8settings.png" 
              alt="Settings and Configuration" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>


        </section>



        </div>
      </div>
    </article>
  </>
);

export default function HowItWorks() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <HowItWorksContent />
        <BreadcrumbSchema pageName="App Guide" />
        <ArticleSchema
          title="How to Use Simplify Budget App"
          description="Detailed guide to Simplify Budget features: expense grid, subscription management, income tracking, net worth, categories, and family collaboration. See how it all works."
          url="https://simplifybudget.com/how-it-works"
          imageUrl="https://simplifybudget.com/app-screenshots/1budgettab.png"
          datePublished="2024-01-15"
          dateModified={new Date().toISOString().split('T')[0]}
          authorName="Simplify Budget Team"
          organizationName="Simplify Budget"
          keywords={['budget app features', 'expense tracking', 'subscription management', 'net worth tracking', 'family budget', 'Google Sheets budget', 'visual expense grid']}
        />
      </Suspense>
    </div>
  );
}