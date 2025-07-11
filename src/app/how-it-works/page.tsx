"use client";

import React, { Suspense, useState, useEffect } from "react";
import BreadcrumbSchema from '../components/BreadcrumbSchema';
export const dynamic = 'force-dynamic';

const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

const HowItWorksContent = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'subscriptions', title: 'Subscriptions' },
    { id: 'income', title: 'Income' },
    { id: 'networth', title: 'Net Worth' },
    { id: 'categories', title: 'Categories' },
    { id: 'settings', title: 'Settings' },
    { id: 'expense-grid', title: 'Expense Grid' },
    { id: 'yearly', title: 'Yearly Overview' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'auto' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after selection
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <>
    {/* Hero Section */}
    <section className="bg-white pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
            How SimplifyBudget Actually Works
          </h1>
          <div className="text-xl text-gray-600 mb-8">
            A detailed walkthrough of every feature that makes financial tracking simple and effective
          </div>
        </div>
      </div>
    </section>

    {/* Floating Table of Contents - Desktop */}
    <div className="hidden 2xl:block fixed top-1/2 transform -translate-y-1/2 z-40" style={{left: 'calc((100vw - 1024px) / 2 - 280px)'}}>
      <div className="bg-white rounded-lg shadow-lg border p-4 w-64">
        <h3 className="text-sm font-bold mb-3 text-gray-900">Quick Navigation</h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left text-sm px-3 py-2 rounded transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>

    {/* Mobile Menu Toggle */}
    <div className="lg:hidden fixed left-4 bottom-6 z-50">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Mobile Sidebar */}
    <div className={`lg:hidden fixed inset-0 z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      {/* Sidebar */}
      <div className="absolute left-4 top-16 bottom-16 bg-white shadow-xl rounded-lg w-auto min-w-[200px]">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Navigation</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-3 flex-1 overflow-y-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>

    {/* Article Content */}
    <article className="bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
        
        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Features Overview</h2>
          <nav className="grid md:grid-cols-2 gap-2">
            <a href="#dashboard" className="block text-gray-600 hover:text-blue-600">→ Dashboard: Your Financial Command Center</a>
            <a href="#subscriptions" className="block text-gray-600 hover:text-blue-600">→ Subscription Management</a>
            <a href="#income" className="block text-gray-600 hover:text-blue-600">→ Income Tracking</a>
            <a href="#networth" className="block text-gray-600 hover:text-blue-600">→ Net Worth Tracking</a>
            <a href="#categories" className="block text-gray-600 hover:text-blue-600">→ Category Management</a>
            <a href="#settings" className="block text-gray-600 hover:text-blue-600">→ Settings & Family Sharing</a>
            <a href="#expense-grid" className="block text-gray-600 hover:text-blue-600">→ Expense Grid: Where the Magic Happens</a>
            <a href="#yearly" className="block text-gray-600 hover:text-blue-600">→ Yearly Overview</a>
          </nav>
        </div>

        {/* Dashboard Section */}
        <section id="dashboard" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Dashboard: Your Financial Command Center</h2>
          
          <p className="text-gray-700 mb-6">
            The dashboard gives you everything you need to know about your current month at a glance.
          </p>

          {/* Dashboard Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/1budgettab.png" 
              alt="SimplifyBudget Dashboard Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Smart Income Budgeting */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Income Budgeting</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 font-semibold mb-3">
                Income isn't just your salary - it's whatever money you have available to spend this month.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Using $1,000 from emergency savings? That $1,000 becomes this month's "income"</li>
                <li>• Got a bonus? Add it to income for that month</li>
                <li>• Freelance payment? Income for the month it arrives</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              <strong>This flexible income approach matches real life</strong> - sometimes you have more available, sometimes less, and your budget adjusts accordingly.
            </p>
          </div>

          {/* Budget Categories */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Budget Categories: Awareness Tools, Not Prison Cells</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Budgeted Column</h4>
                <p className="text-gray-700 text-sm">Set your spending targets for each category (carries over automatically next month)</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Spent Column</h4>
                <p className="text-gray-700 text-sm">Shows actual spending as you enter transactions throughout the month</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Percentage Bars</h4>
                <p className="text-gray-700 text-sm">Instant visual of how you're doing - green = on track, red = over budget</p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-orange-900 mb-3">What happens when you go over budget?</h4>
              <ul className="space-y-2 text-orange-800">
                <li>• Just visual feedback - no restrictions or penalties</li>
                <li>• You can readjust budgets during the month or leave them as-is</li>
                <li>• Keeping original targets shows you historically whether you're a realistic budgeter</li>
                <li>• Over-budget categories become learning tools, not sources of guilt</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              <strong>The key insight:</strong> Categories aren't rigid containers that restrict spending. They're awareness tools that show you patterns and help you make conscious decisions.
            </p>
          </div>

          {/* Money Assignment */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Money Assignment: Conscious Choice, Not Forced Allocation</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 font-semibold mb-3">
                "You've budgeted $2,130 with $20 left to assign"
              </p>
              <ul className="space-y-2 text-green-800">
                <li>• You can leave money unassigned during the month</li>
                <li>• At month-end, decide whether to save it or reallocate to categories</li>
                <li>• Shows if you've allocated all your available money</li>
                <li>• Prevents over-budgeting (can't assign more than you have)</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              <strong>Flexible income handling:</strong> As money comes in throughout the month (freelance payments, bonuses), just add it to income and decide how to use it. No complex rebalancing required.
            </p>
          </div>

          {/* Real-Time Family Sync */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Family Sync</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <ul className="space-y-2 text-purple-800">
                <li><strong>Smart caching system:</strong> When your wife enters an expense on her phone, it appears on your dashboard immediately</li>
                <li><strong>Timestamp checking:</strong> System automatically detects when data changes and updates all devices</li>
                <li><strong>No conflicts:</strong> Multiple people can use the system simultaneously without sync issues</li>
              </ul>
            </div>
          </div>

          {/* Fixed Expenses Integration */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Fixed Expenses Integration</h3>
            
            <div className="mb-4">
              <img 
                src="/app-screenshots/fixedexpenses.png" 
                alt="Fixed Expenses Integration" 
                className="w-1/2 rounded-lg shadow-lg border mx-auto"
              />
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-indigo-900 mb-3">Right sidebar shows exactly what's "already spent":</h4>
              <ul className="space-y-2 text-indigo-800">
                <li>• All subscriptions with dates (Netflix $5 on Jun 25)</li>
                <li>• Total fixed expenses ($264 = 12% of income)</li>
                <li>• Advance warning of upcoming charges</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              <strong>You can cancel subscriptions before they hit and instantly have more money available for that month.</strong>
            </p>
          </div>

          {/* Visual Categories */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Visual Categories with Emojis</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🍽️ Dining Out</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🛒 Groceries</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🏠 Housing</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">💖 Personal Care</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🚗 Transport</div>
              <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🎬 Fun</div>
            </div>
            
            <p className="text-gray-700">
              <strong>Makes categorizing fast and intuitive</strong> - no scrolling through boring text lists.
            </p>
          </div>

          {/* Monthly Navigation */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Monthly Navigation</h3>
            
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Arrow buttons:</strong> Quick previous/next month</li>
              <li>• <strong>Date picker:</strong> Jump to any specific month</li>
              <li>• <strong>Auto-current:</strong> Always opens to current month</li>
              <li>• <strong>Refresh indicator:</strong> Shows how fresh your data is</li>
            </ul>
          </div>

          {/* Why This Dashboard Works */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why This Dashboard Design Works</h3>
            
            <ul className="space-y-2 text-gray-700">
              <li><strong>No reconciliation needed:</strong> Since you enter expenses directly, your "spent" numbers are always accurate</li>
              <li><strong>No surprise bills:</strong> Fixed expenses are visible and predictable</li>
              <li><strong>No category guilt:</strong> Over-budget categories show reality, not failure</li>
              <li><strong>No data delays:</strong> Real-time sync means everyone sees the same picture</li>
              <li><strong>No subscription anxiety:</strong> One-time purchase, own your data forever</li>
            </ul>
          </div>
        </section>

        {/* Subscription Management */}
        <section id="subscriptions" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Subscription Management: Set Once, Track Forever</h2>
          
          <p className="text-gray-700 mb-6">
            The subscriptions tab eliminates the biggest pain point of budget tracking - remembering and entering recurring payments.
          </p>

          {/* Subscriptions Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/3recurring.png" 
              alt="Subscription Management Overview" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Smart Automation */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Automation That Actually Works</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Enter each subscription once with:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Name and emoji icon for easy recognition</li>
                  <li>• Amount and currency</li>
                  <li>• Next payment date</li>
                  <li>• Payment account (which bank/card)</li>
                  <li>• Frequency (monthly, quarterly, yearly)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">System automatically:</h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Creates transactions on due dates</li>
                  <li>• Updates next payment date after each charge</li>
                  <li>• Projects future payments through end of year</li>
                  <li>• Integrates with expense grid (blue borders) and dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Payment Timeline */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Visual Payment Timeline</h3>
            
            <div className="mb-4">
              <img 
                src="/app-screenshots/3recurring.png" 
                alt="Subscription Timeline Chart" 
                className="w-full rounded-lg shadow-lg border"
              />
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">Top chart shows your subscription costs over time:</h4>
              <ul className="space-y-2 text-purple-800">
                <li>• Historical payments (actual amounts charged)</li>
                <li>• Current month spending</li>
                <li>• <strong>Future projections</strong> through end of year</li>
                <li>• Color-coded by subscription type</li>
                <li>• Peak spending months visible at a glance</li>
              </ul>
            </div>
          </div>

          {/* Annual Cost Awareness */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Annual Cost Awareness</h3>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-orange-900 mb-3">Summary stats show the real impact:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-center">
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
            </div>
            
            <p className="text-gray-700">
              <strong>This makes subscription creep visible</strong> - you can see exactly how much you're spending on recurring services and make informed decisions about what to keep.
            </p>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Income Tracking: Simple and Flexible</h2>
          
          <p className="text-gray-700 mb-6">
            The income tab handles both regular and irregular income without complicated setup.
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
                <p className="text-blue-800">Freelance payments, bonuses, side hustle earnings, investment sales</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Recurring income:</h4>
                <p className="text-green-800">Salary, passive income, regular dividends</p>
              </div>
            </div>
          </div>

          {/* Income History & Analytics */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Income History & Analytics</h3>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 mb-3">Performance metrics:</h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-indigo-900">$21,361</p>
                  <p className="text-indigo-800 text-sm">Year Total</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-900">$1,780</p>
                  <p className="text-indigo-800 text-sm">Monthly Average</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-900">$2,010</p>
                  <p className="text-indigo-800 text-sm">Current Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">+11.2%</p>
                  <p className="text-indigo-800 text-sm">Savings Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Income Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Flexible Income Philosophy</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Income = whatever money you have available this month</strong>
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Using $1,000 from emergency savings? That's this month's "income"</li>
              <li>• Got a bonus? Add it as one-time income</li>
              <li>• Investment sale? Add it when it happens</li>
              <li>• Regular salary? Set up recurring income</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              <strong>This matches real life</strong> - some months you have more available money, some less. The system adapts to irregular income patterns rather than forcing you into salary-only thinking.
            </p>
          </div>
        </section>

        {/* Net Worth Tracking */}
        <section id="networth" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Net Worth Tracking: Beautiful and Simple</h2>
          
          <p className="text-gray-700 mb-6">
            The net worth tracker gives you a complete financial snapshot without the complexity of constant account syncing.
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
                <h4 className="font-bold text-blue-900 mb-2">Liquid Assets ($33,701)</h4>
                <p className="text-blue-800">Bank accounts, cash, money market - anything you can spend immediately</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">Investments ($75,800)</h4>
                <p className="text-green-800">Stocks, crypto, retirement accounts, real estate - your wealth-building assets</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Physical Assets ($17,000)</h4>
                <p className="text-purple-800">Car, electronics, furniture - valuable things you own</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-900 mb-2">Debts ($0)</h4>
                <p className="text-orange-800">Credit cards, loans, mortgages - what you owe (thankfully empty!)</p>
              </div>
            </div>
          </div>

          {/* Visual Wealth Progression */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Visual Wealth Progression</h3>
            
            <div className="mb-4">
              <img 
                src="/app-screenshots/5networth.png" 
                alt="Net Worth Chart Progression" 
                className="w-full rounded-lg shadow-lg border"
              />
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 mb-3">Stunning stacked area chart shows:</h4>
              <ul className="space-y-2 text-indigo-800">
                <li>• Total net worth progression over time (157k to 120k trend visible)</li>
                <li>• Asset allocation by category with color coding</li>
                <li>• <strong>Future projections</strong> based on historical trends</li>
                <li>• Monthly percentage changes (+1% this month)</li>
                <li>• Multiple time views: 12m, 2yr, 3yr, 5yr, All time</li>
              </ul>
            </div>
          </div>

          {/* The Genius of Manual Updates */}
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Genius of Manual Updates</h3>
            
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
              No daily market stress, no sync failures, no reconciliation headaches - just a clear monthly snapshot of your complete financial picture with beautiful visualizations that actually help you understand your wealth progression.
            </p>
          </div>
        </section>

        {/* Category Management */}
        <section id="categories" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Category Management: Simple and Focused</h2>
          
          <p className="text-gray-700 mb-6">
            The categories tab keeps spending organization clean and manageable.
          </p>

          {/* Categories Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/7categories.png" 
              alt="Category Management Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* 30 Predefined Categories */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">30 Predefined Categories</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Essential categories covered:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🍽️ Dining Out</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🛒 Groceries</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🏠 Housing</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">💖 Personal Care</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🚗 Transport</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🛍️ Shopping</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">💡 Utilities</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🎬 Fun</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Lifestyle categories available:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">✈️ Travel</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">💝 Gifts</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">🏋️ Fitness</div>
                <div className="bg-gray-50 p-3 rounded-lg text-center text-gray-900 font-medium">📚 Learning</div>
              </div>
            </div>
          </div>

          {/* Smart Category Controls */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Category Controls</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-900 mb-3">Activate/Deactivate categories:</h4>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Yellow highlight = Active categories</li>
                  <li>• Gray/unchecked = Inactive categories</li>
                  <li>• <strong>Only show categories you actually use</strong></li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Customize categories:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• Rename any category to match your terminology</li>
                  <li>• Change emoji icons to your preference</li>
                  <li>• Reorder categories by dragging and dropping</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Minimalist Philosophy */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Minimalist Philosophy</h3>
            
            <p className="text-gray-700 mb-4">
              <strong>Why 30 categories maximum:</strong>
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Prevents category overwhelm and decision paralysis</li>
              <li>• Forces conscious choices about what matters</li>
              <li>• Most people use 10-15 categories regularly anyway</li>
              <li>• <strong>You don't even use half yourself</strong> - perfect validation of the approach</li>
            </ul>
          </div>
        </section>

        {/* Settings */}
        <section id="settings" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Settings: Simple Setup and Personalization</h2>
          
          <p className="text-gray-700 mb-6">
            The settings tab handles account setup and display preferences with minimal complexity.
          </p>

          {/* Settings Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/8settings.png" 
              alt="Settings and Configuration" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Data Connection */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Connection</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                <strong>Account shows your Gmail and license status</strong>
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-gray-900">
                    <strong>New Database:</strong> Creates fresh budget sheet in your Google Drive automatically
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-gray-900">
                    <strong>Select Existing:</strong> Choose a SimplifyBudget sheet you've already created
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-gray-900">
                    <strong>Disconnect:</strong> Unlink current sheet (data stays in your Drive)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Family Sharing Setup */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Family Sharing Setup</h3>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">For couples/families:</h4>
              <ol className="space-y-2 text-green-800">
                <li>1. One person clicks "New Database" to create the master sheet</li>
                <li>2. Shares the Google Sheet through normal Google Drive sharing</li>
                <li>3. Other family members click "Select Existing" and choose the shared sheet</li>
                <li>4. <strong>Everyone now tracks in the same budget with real-time sync</strong></li>
              </ol>
            </div>
          </div>

          {/* Data Ownership */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Ownership</h3>
            
            <p className="text-gray-700 mb-4 font-semibold">
              "Your financial data stays private in your own Google Drive"
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• You own the spreadsheet completely</li>
              <li>• SimplifyBudget never sees your financial information</li>
              <li>• Can disconnect app anytime and keep all your data</li>
              <li>• Works with Google's built-in sharing and permission system</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              <strong>The genius:</strong> Setup takes 30 seconds (click "New Database" → done), but you get complete data ownership and family collaboration that actually works.
            </p>
          </div>
        </section>

        {/* Expense Grid */}
        <section id="expense-grid" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Expense Grid: Where the Magic Happens</h2>
          
          <p className="text-gray-700 mb-6">
            The expense entry interface is a visual calendar grid where dates run down the left side and spending categories across the top. This creates intersection-based entry that's faster than any form-based system.
          </p>

          {/* Expense Grid Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/2monthlygrid.png" 
              alt="Expense Grid Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Lightning-Fast Entry */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning-Fast Entry</h3>
            
            <div className="bg-emerald-50 p-6 rounded-lg mb-4">
              <p className="text-emerald-900 font-bold text-xl mb-3">
                Click the intersection of date and category, enter the amount. Done.
              </p>
              <ul className="space-y-2 text-emerald-800">
                <li>• No date selection dropdowns</li>
                <li>• No category menus to navigate</li>
                <li>• No forms to fill out</li>
                <li>• Takes 5 seconds vs. 30+ seconds in traditional apps</li>
                <li>• <strong>Fully mobile optimized</strong> - enter expenses on your phone just as easily as desktop</li>
              </ul>
            </div>

            {/* Entry Popup Screenshot */}
            <div className="mb-4">
              <img 
                src="/app-screenshots/expenseentry.png" 
                alt="Expense Entry Popup" 
                className="w-full rounded-lg shadow-lg border"
              />
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">When you click an intersection, a popup shows:</h4>
              <ul className="space-y-2 text-blue-800">
                <li>• All existing expenses for that day/category</li>
                <li>• Empty row to add new transactions</li>
                <li>• Category emoji and date at the top</li>
                <li>• Running total for that day</li>
                <li>• No save button needed - auto-saves when you click outside</li>
                <li>• Red X to delete any transaction instantly</li>
              </ul>
            </div>
          </div>

          {/* Visual Spending Patterns */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Visual Spending Patterns</h3>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-4">
              <h4 className="font-bold text-orange-900 mb-3">Heat map color coding shows spending intensity:</h4>
              <ul className="space-y-2 text-orange-800">
                <li>• Light amounts stay white/neutral</li>
                <li>• Heavy spending gets progressively redder</li>
                <li>• Instantly spot your highest spending days</li>
                <li>• Category patterns become obvious over time</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-3">Smart row highlighting:</h4>
              <ul className="space-y-2 text-yellow-800">
                <li>• <strong>Today's row highlighted in yellow</strong> - always know where you are in the month</li>
                <li>• <strong>Weekend rows have subtle grey background</strong> - easily distinguish weekdays vs weekends</li>
                <li>• <strong>Blue borders on fixed expenses</strong> - see subscription/bill dates at a glance</li>
                <li>• Monthly flow and spending patterns are visible instantly</li>
              </ul>
            </div>
          </div>

          {/* Perfect for Cash */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Perfect for Cash Transactions</h3>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Most automated systems completely fail with cash payments</strong> - they can't sync what banks don't see.
              </p>
              <p className="text-gray-700">
                <strong>Manual entry handles cash perfectly:</strong> You spent $20 cash on groceries? Click Groceries + today's date, enter $20. Your tracking is complete and accurate.
              </p>
            </div>
          </div>

          {/* Why This Beats Traditional */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Why This Beats Traditional Expense Tracking</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-900 mb-3">Traditional apps:</h4>
                <ul className="space-y-2 text-red-800">
                  <li>• Open app → Select date → Choose category → Enter amount → Add description → Save</li>
                  <li>• Spend 5 minutes categorizing each transaction after bank import</li>
                  <li>• Fight with wrong auto-categories and duplicate imports</li>
                  <li>• Cash transactions are invisible or require manual workarounds</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-green-900 mb-3">SimplifyBudget:</h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Click intersection → Enter amount → Done</li>
                  <li>• Spend 5 seconds entering transaction when it happens</li>
                  <li>• Your data is correct because you entered it correctly</li>
                  <li>• Cash and card transactions are entered identically and accurately</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mt-4 font-semibold">
              The result: You actually use the system consistently because it's faster and easier than alternatives, creating the long-term awareness that drives better financial decisions.
            </p>
          </div>
        </section>

        {/* Yearly Overview */}
        <section id="yearly" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Yearly Overview: The Big Picture</h2>
          
          <p className="text-gray-700 mb-6">
            Toggle between Monthly and Yearly views to see your spending patterns at different scales.
          </p>

          {/* Yearly Overview Screenshot */}
          <div className="mb-8">
            <img 
              src="/app-screenshots/yearlyoverview.png" 
              alt="Yearly Overview Interface" 
              className="w-full rounded-lg shadow-lg border"
            />
          </div>

          {/* Annual Heat Map */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Annual Heat Map</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">Color intensity shows spending levels across the entire year:</h4>
              <ul className="space-y-2 text-purple-800">
                <li>• Heat map scale adjusts for yearly amounts ($100-1000+ range)</li>
                <li>• Instantly spot your highest and lowest spending months</li>
                <li>• See seasonal patterns and trends emerge</li>
                <li>• Compare month-to-month performance at a glance</li>
              </ul>
            </div>
          </div>

          {/* Interactive Charts */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Interactive Charts</h3>
            
            <div className="mb-4">
              <img 
                src="/app-screenshots/interactivecharts.png" 
                alt="Interactive Charts and Analytics" 
                className="w-full rounded-lg shadow-lg border"
              />
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-bold text-indigo-900 mb-3">Chart icon opens detailed visualization:</h4>
              <ul className="space-y-2 text-indigo-800">
                <li>• Stacked bar chart showing monthly spending breakdown by category</li>
                <li>• Hover over any section to see exact amounts</li>
                <li>• Income, spending, and savings trends over time</li>
                <li>• Visual patterns that aren't obvious in raw numbers</li>
              </ul>
            </div>
          </div>

          {/* Real-Time Family Collaboration */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Family Collaboration</h3>
            
            <p className="text-gray-700 mb-4 font-semibold">
              Multiple people can enter expenses simultaneously:
            </p>
            
            <ul className="space-y-2 text-gray-700">
              <li>• Your wife enters grocery shopping on her phone</li>
              <li>• It appears immediately on your desktop view</li>
              <li>• No sync delays or conflicts</li>
              <li>• Everyone sees the same real-time picture</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              <strong>Never lose track of transactions:</strong> The visual system makes it super easy to find any expense without searching through lists or complicated filters.
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
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<Loading />}>
        <HowItWorksContent />
        <BreadcrumbSchema pageName="How SimplifyBudget Works" />
      </Suspense>
    </div>
  );
}