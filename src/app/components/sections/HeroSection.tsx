// src/app/components/sections/HeroSection.tsx

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentMonth, setCurrentMonth] = useState('');
  const [expenseEntries, setExpenseEntries] = useState<{[key: string]: string}>({});
  const [showPopup, setShowPopup] = useState(false);
  const [activeCell, setActiveCell] = useState<{day: number, category: number} | null>(null);
  const [currentAmount, setCurrentAmount] = useState('');
  
  // Set current month
  useEffect(() => {
    const now = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    setCurrentMonth(`${monthNames[now.getMonth()]} ${now.getFullYear()}`);
  }, []);
  
  // Simulate expense entry demo
  useEffect(() => {
    const demoSequence = [
      { day: 1, category: 2, amount: '$10' }, // Shopping on 1st
      { day: 3, category: 1, amount: '$50' }, // Gas on 3rd
      { day: 5, category: 0, amount: '$45' }, // Groceries on 5th
      { day: 2, category: 0, amount: '$25' }, // More groceries on 2nd
      { day: 1, category: 2, amount: '$8' },  // Another shopping on 1st
    ];
    
    let currentIndex = 0;
    
    const runDemo = () => {
      const entry = demoSequence[currentIndex];
      
      // Step 1: Show cell selection
      setActiveCell({ day: entry.day, category: entry.category });
      
      setTimeout(() => {
        // Step 2: Show popup
        setShowPopup(true);
        setCurrentAmount(entry.amount);
        
        setTimeout(() => {
          // Step 3: Close popup and save entry
          setShowPopup(false);
          // Use timestamp to allow multiple entries per day/category
          const key = `${entry.day}-${entry.category}-${Date.now()}`;
          setExpenseEntries(prev => ({ ...prev, [key]: entry.amount }));
          setActiveCell(null);
          
          // Move to next entry
          currentIndex = (currentIndex + 1) % demoSequence.length;
          
          // Wait before next demo
          setTimeout(runDemo, 3000);
        }, 1500);
      }, 800);
    };
    
    const timer = setTimeout(runDemo, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sample categories with emojis
  const categories = [
    { emoji: "🛒", name: "Groceries", total: "$340" },
    { emoji: "⛽", name: "Gas", total: "$120" },
    { emoji: "🛍️", name: "Shopping", total: "$85" },
    { emoji: "🏠", name: "Utilities", total: "$180" },
    { emoji: "🎉", name: "Fun", total: "$60" },
  ];
  

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
              Take Control of Your Money
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              See where your money goes with visual expense tracking that actually works. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-semibold">No subscriptions. Ever.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a 
                href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
              >
                Start Tracking Now →
              </a>
              <a 
                href="https://youtu.be/pfwtW8DKStM"
                className="inline-block px-6 py-4 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition-all font-semibold border border-gray-200"
              >
                Watch Demo →
              </a>
            </div>
            

            {/* KILLER FEATURES */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">See Where Every Dollar Goes</p>
                  <p className="text-sm text-gray-600">Finally understand your spending patterns. No more "where did my money go?" moments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Family Tracks Together</p>
                  <p className="text-sm text-gray-600">Share the Sheet. Everyone adds expenses. See real-time spending. No "family plan" fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Verified & Secure</p>
                  <p className="text-sm text-gray-600">Verified by Google for safe access. Your financial data never leaves your Drive.</p>
                </div>
              </div>
            </div>
            
            {/* Currency & Language Support */}
            <div className="mt-4 text-center lg:text-left">
              <p className="text-sm text-gray-500">
                All currencies supported • Available in English, German, French, Spanish & more
              </p>
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
                {[...Array(6)].map((_, dayIndex) => {
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
                        const isActive = activeCell?.day === day && activeCell?.category === catIndex;
                        const cellKey = `${day}-${catIndex}`;
                        
                        // Get all entries for this day/category
                        const allEntries = Object.entries(expenseEntries)
                          .filter(([key]) => key.startsWith(`${day}-${catIndex}-`))
                          .map(([_, value]) => value);
                        
                        const hasEntries = allEntries.length > 0;
                        const totalAmount = allEntries.reduce((sum, entry) => {
                          const num = parseFloat(entry.replace('$', ''));
                          return sum + num;
                        }, 0);
                        
                        return (
                          <div
                            key={catIndex}
                            className={`
                              p-2 text-xs border rounded cursor-pointer transition-all duration-300
                              ${isActive ? 'bg-blue-100 border-blue-300 shadow-lg scale-105' : 'border-gray-200 hover:bg-gray-50'}
                              ${hasEntries ? 'bg-green-50' : ''}
                            `}
                          >
                            {hasEntries && (
                              <div className="text-green-700 font-bold">
                                ${totalAmount.toFixed(0)}
                                {allEntries.length > 1 && (
                                  <div className="text-xs text-gray-500">({allEntries.length} items)</div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              
            </div>
            
            {/* Expense Entry Popup */}
            {showPopup && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-2xl">
                <div className="bg-white rounded-lg p-4 shadow-xl border-2 border-blue-300 animate-in fade-in duration-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Enter amount</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{currentAmount}</div>
                    <div className="text-xs text-gray-500">Auto-saving...</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Floating feature badges */}
            <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              One Tap Entry
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="text-center mt-12">
          
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