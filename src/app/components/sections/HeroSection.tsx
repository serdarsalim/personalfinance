// src/app/components/sections/HeroSection.tsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeCell, setActiveCell] = useState({ day: 15, category: 2 });
  const [currentMonth, setCurrentMonth] = useState('');
  
  // Set current month
  useEffect(() => {
    const now = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    setCurrentMonth(`${monthNames[now.getMonth()]} ${now.getFullYear()}`);
  }, []);
  
  // Animate grid interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCell({
        day: Math.floor(Math.random() * 30) + 1,
        category: Math.floor(Math.random() * 5)
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Sample categories with emojis
  const categories = [
    { emoji: "🛒", name: "Groceries", total: "$340" },
    { emoji: "⛽", name: "Gas", total: "$120" },
    { emoji: "☕", name: "Coffee", total: "$85" },
    { emoji: "🏠", name: "Utilities", total: "$180" },
    { emoji: "🎬", name: "Entertainment", total: "$60" },
  ];
  
  // Sample daily totals
  const dailyTotals = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const amount = Math.floor(Math.random() * 100) + 10;
    return { day, amount: `$${amount}` };
  });

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-16 overflow-hidden relative">
      {/* Floating expense bubbles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-20 h-20 rounded-full opacity-10 animate-float-${i + 1}`}
            style={{
              background: `linear-gradient(135deg, ${['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EC4899'][i]} 0%, ${['#60A5FA', '#34D399', '#A78BFA', '#FCD34D', '#F9A8D4'][i]} 100%)`,
              left: `${[10, 75, 25, 60, 85][i]}%`,
              top: `${[20, 40, 60, 30, 70][i]}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900">
              Enter Expenses in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> One Tap</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Visual grid lets you add expenses faster than any other app. All data stays in your Google Drive.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a 
                href="https://ko-fi.com/s/4b62acb528"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
              >
                Start Your Free 30-Day Trial
              </a>
              <a 
                href="#demo"
                className="inline-block px-6 py-4 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition-all font-semibold border border-gray-200"
              >
                Watch Demo →
              </a>
            </div>
            
            <p className="text-sm text-gray-600 mb-8">
              All features included. No credit card required.
            </p>

            {/* SOCIAL PROOF */}
            <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <p className="text-sm text-gray-600">Happy Users</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">4.8/5</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm text-gray-600">Secure</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual Grid Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
              {/* Grid Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-800">{currentMonth}</h3>
                <div className="text-xl font-bold text-green-600">$785</div>
              </div>
              
              {/* Categories Header */}
              <div className="grid grid-cols-6 gap-1 mb-2">
                <div className="text-xs text-gray-500 p-2"></div>
                {categories.map((cat, i) => (
                  <div key={i} className="text-center p-1 bg-gray-50 rounded">
                    <div className="text-lg">{cat.emoji}</div>
                    <div className="text-xs font-medium text-slate-700">{cat.name}</div>
                    <div className="text-xs text-green-600 font-bold">{cat.total}</div>
                  </div>
                ))}
              </div>
              
              {/* Grid Rows - First 8 days */}
              <div className="space-y-1 max-h-64 overflow-hidden">
                {[...Array(8)].map((_, dayIndex) => {
                  const day = dayIndex + 1;
                  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                  const dayName = dayNames[dayIndex % 7];
                  return (
                    <div key={day} className="grid grid-cols-6 gap-1">
                      {/* Day column */}
                      <div className="p-2 text-sm font-medium text-gray-700 bg-gray-50 rounded">
                        {dayName} {day}
                      </div>
                      
                      {/* Category cells */}
                      {categories.map((_, catIndex) => {
                        const isActive = activeCell.day === day && activeCell.category === catIndex;
                        const hasExpense = Math.random() > 0.7;
                        const amount = hasExpense ? `$${Math.floor(Math.random() * 50) + 5}` : '';
                        
                        return (
                          <div
                            key={catIndex}
                            className={`
                              p-2 text-xs border rounded cursor-pointer transition-all duration-300
                              ${isActive ? 'bg-blue-100 border-blue-300 shadow-lg scale-105' : 'border-gray-200 hover:bg-gray-50'}
                              ${hasExpense ? 'bg-green-50' : ''}
                            `}
                          >
                            {amount && (
                              <div className="text-green-700 font-bold">{amount}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              
            </div>
            
            {/* Floating feature badges */}
            <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              One Tap Entry
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>All your financial data stays in your Google Drive - completely private</span>
          </div>
          
          <p className="text-sm text-gray-500">
            Compare with{' '}
            <Link href="/compare/ynab-alternative" className="text-gray-600 hover:text-blue-600 hover:underline">
              YNAB
            </Link>
            {' '}or{' '}
            <Link href="/compare/mint-alternative" className="text-gray-600 hover:text-blue-600 hover:underline">
              Mint
            </Link>
          </p>
        </div>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(-10px); }
          50% { transform: translateY(-20px) translateX(10px); }
          75% { transform: translateY(-10px) translateX(-5px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(-5px); }
          50% { transform: translateY(-30px) translateX(10px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-25px) translateX(5px); }
          50% { transform: translateY(-15px) translateX(-5px); }
          75% { transform: translateY(-35px) translateX(10px); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-25px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(5px); }
        }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 11s ease-in-out infinite; }
      `}</style>
    </section>
  );
}