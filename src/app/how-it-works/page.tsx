import React, { Suspense } from "react";
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import ArticleSchema from '../components/ArticleSchema';
import { Metadata } from 'next';
import HowItWorksClient from './HowItWorksClient';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How Our Budget App Works | 5-Second Expense Tracking',
  description: 'Learn how to simplify budget tracking with visual grids. Track expenses in 5 seconds, manage subscriptions, share with family. Complete walkthrough.',
  keywords: 'how to simplify budget, visual expense tracking, budget app tutorial, expense grid, family budget sharing, subscription tracking, budget app walkthrough',
  openGraph: {
    title: 'How Our Budget App Works | 5-Second Expense Tracking',
    description: 'Learn how to simplify budget tracking with visual grids. Track expenses in 5 seconds, manage subscriptions, share with family.',
    url: 'https://simplifybudget.com/how-it-works',
    siteName: 'Simplify Budget',
    images: [
      {
        url: 'https://simplifybudget.com/app-screenshots/1budgettab.png',
        width: 1200,
        height: 630,
        alt: 'Simplify Budget Dashboard - How It Works',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Our Budget App Works | 5-Second Expense Tracking',
    description: 'Learn how to simplify budget tracking with visual grids. Track expenses in 5 seconds, share with family.',
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            How Simplify Budget Actually Works
          </h1>
          <div className="text-xl text-gray-600 mb-8">
            Everything you need to know to start tracking your money effectively
          </div>
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
            The dashboard shows your monthly budget performance - how much you've spent versus your income, whether you're hitting your category targets, and how much you have left to spend. You can set budget goals directly here, while spending data flows from your expense and income tabs.
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
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Budget vs Actual</h4>
                <p className="text-blue-800">Set budget goals for each category and see how much you've spent. Green bars = on track, red = over budget.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Money Left to Spend</h4>
                <p className="text-green-800">Clear view of remaining budget so you know how much you can spend for the rest of the month.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-3">Fixed Expenses Sidebar</h4>
                <p className="text-purple-800">All subscriptions listed by name, due date, and amount. See total and percentage of income.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-3">Spending Breakdown</h4>
                <p className="text-orange-800">Donut chart shows what categories you spend the most on - instant visual clarity.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold">
                <strong>Budget goals:</strong> Set and edit target amounts directly in the budgeted column. Spending data flows from your expense and income tabs. Fixed expenses are automatically included in your spent totals.
              </p>
            </div>
          </div>
        </section>

        {/* Expense Grid */}
        <section id="expense-grid" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Expense Entry: Fast & Simple</h2>
          
          <p className="text-gray-700 mb-6">
            Click where any date meets any category to add an expense. Enter the amount and description - you can add multiple entries per day or just enter the daily total for that category. It's lightning fast and fully mobile optimized.
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



          {/* Why This Beats Traditional */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Why This Beats Traditional Apps</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">😤</span>
                  <h4 className="font-bold text-red-900 text-lg">Traditional Apps</h4>
                </div>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">×</span>
                    <span>Open app → Select date → Choose category → Enter amount → Save</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">×</span>
                    <span>Spend 5+ minutes categorizing each bank transaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">×</span>
                    <span>Fight wrong auto-categories and duplicates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">×</span>
                    <span>Cash transactions invisible or manual workarounds</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h4 className="font-bold text-green-900 text-lg">Simplify Budget</h4>
                </div>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Click intersection → Enter amount → Done</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>5 seconds to enter when transaction happens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Data is correct because you entered it correctly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Cash and card transactions entered identically</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
                <p className="text-blue-900 font-semibold text-lg">
                  <span className="text-2xl mr-2">🎯</span>
                  Result: You actually use it consistently, creating the long-term awareness that drives better financial decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Management */}
        <section id="subscriptions" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Subscription Manager: Complete Payment History</h2>
          
          <p className="text-gray-700 mb-6">
            Track all your active subscriptions with complete payment history from start to current month. When you stop a subscription, just set an end date to preserve the transaction history. All subscription payments automatically appear in your expense and dashboard views.
          </p>

          {/* Subscriptions Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/3recurring.png" 
              alt="Subscription Management Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>


          {/* Visual Payment Timeline */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📊</span>
                <h4 className="font-bold text-purple-900 text-lg">Subscription Chart</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-purple-800">Historical payments</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-purple-800">Current month spending</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
                    <span className="text-purple-800 font-semibold">Future projections</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-purple-800">Peak spending months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Annual Cost Awareness */}
          <div className="mb-10">
            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-orange-900 mb-3">Summary stats show the real impact:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <p className="text-3xl font-bold text-orange-900">13</p>
                  <p className="text-orange-800">Active Subscriptions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-900">$1,832</p>
                  <p className="text-orange-800">Annual Total</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-900">$153</p>
                  <p className="text-orange-800">Monthly Average</p>
                </div>
              </div>
              <p className="text-orange-800 font-semibold">
                This makes subscription creep visible - you can see exactly how much you're spending on recurring services and make informed decisions about what to keep.
              </p>
            </div>
          </div>

          {/* Advance Warning System */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Advance Warning System</h3>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-3">Because you can see exact payment dates:</h4>
              <ul className="space-y-2 text-yellow-800">
                <li>• Cancel before renewal if you don't need the service</li>
                <li>• Plan around expensive annual renewals</li>
                <li>• Avoid "surprise" charges that derail your budget</li>
                <li>• Move money between accounts if needed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Income Tracking */}
        <section id="income" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Income Tracking</h2>
          
          <p className="text-gray-700 mb-6">
            Add your income as it comes in - salary, freelance payments, bonuses, or any money you have available to spend this month. Income = whatever money you have available this month. Using $1,000 from emergency savings? That's this month's "income". Got a bonus? Add it as one-time income. The system adapts to irregular income patterns rather than forcing you into salary-only thinking.
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



          {/* Minimalist Philosophy */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">🎯</span>
              <h3 className="text-2xl font-bold text-gray-900">Why Only 30 Categories?</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 mr-3">1</span>
                  <span className="text-gray-700">Prevents category overwhelm and decision paralysis</span>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 mr-3">2</span>
                  <span className="text-gray-700">Forces conscious choices about what matters</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 mr-3">3</span>
                  <span className="text-gray-700">Most people use 10-15 categories regularly anyway</span>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 mr-3">4</span>
                  <span className="text-gray-700"><strong>You don't even use half yourself</strong> - perfect validation!</span>
                </div>
              </div>
            </div>
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


          {/* Data Ownership */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Ownership</h3>
            
            <p className="text-gray-700 mb-4 font-semibold">
              "Your financial data stays private in your own Google Drive"
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• You own the spreadsheet completely</li>
              <li>• Simplify Budget never sees your financial information</li>
              <li>• Can disconnect app anytime and keep all your data</li>
              <li>• Works with Google's built-in sharing and permission system</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              <strong>The genius:</strong> Setup takes 30 seconds (click "New Database" → done), but you get complete data ownership and family collaboration that actually works.
            </p>
          </div>
        </section>


        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-xl mb-6">
            Experience the simplicity and power of visual budget tracking
          </p>
          <div className="space-y-4">
            <div>
              <a href="/demo" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Try the Live Demo
              </a>
            </div>
            <div>
              <a href="/app" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors">
                Get Started Now
              </a>
            </div>
          </div>
        </div>

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
        <BreadcrumbSchema pageName="How Simplify Budget Works" />
        <ArticleSchema
          title="How Simplify Budget Actually Works"
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