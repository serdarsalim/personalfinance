// src/app/components/sections/HeroSection.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  

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
                href="/demo"
                className="inline-block px-6 py-4 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition-all font-semibold border border-gray-200"
              >
                Open Demo →
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
                  <p className="text-sm font-semibold text-gray-900">See where your money goes with calendar based expense entry.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Use the same spreadsheet to track together.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Verified by Google for safe access.</p>
                
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Grid Demo */}
          <div className="relative">
            <Link href="/demo" className="block max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/simplify-monthly-grid.png"
                alt="Simplify Monthly Expense Grid"
                width={700}
                height={580}
                className="w-full h-auto rounded-lg border border-gray-200 shadow-lg cursor-pointer"
                priority
              />
            </Link>
            
            {/* Floating feature badges */}
            <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              Calender view
            </div>
          </div>
        </div>
        
        {/* Currency & Language Support - Full Width */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Globe Icon */}
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <p className="text-lg font-medium text-gray-800">
              All currencies supported
            </p>
            
            {/* Currency Symbols */}
            <div className="flex gap-2 text-2xl font-bold">
              <span className="text-green-600">$</span>
              <span className="text-blue-600">€</span>
              <span className="text-purple-600">£</span>
              <span className="text-orange-600">¥</span>
              <span className="text-pink-600">₹</span>
            </div>
            
            <span className="text-gray-400">•</span>
            
            <p className="text-lg font-medium text-gray-800">
              Available in English, German, French, Spanish & more
            </p>
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