// src/app/components/sections/HeroSection.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-16 overflow-hidden relative">
      {/* Animated expense icons background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rising dollar signs and expense icons */}
        {[...Array(8)].map((_, i) => {
          const icons = ['💵', '💳', '🛒', '⛽', '🏠', '✈️', '🍔', '💰'];
          const positions = [5, 15, 25, 35, 50, 65, 80, 90];
          return (
            <div
              key={i}
              className="absolute text-4xl animate-rise"
              style={{
                left: `${positions[i]}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: '20s',
                opacity: 0.15
              }}
            >
              {icons[i]}
            </div>
          );
        })}
        
        {/* Diagonal moving expense cards */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={`card-${i}`}
              className="absolute bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-diagonal"
              style={{
                width: '120px',
                height: '60px',
                left: `${[20, 50, 80][i]}%`,
                top: `${[10, 40, 70][i]}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: '15s'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded"></div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-300/20 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900">
              The budget app that helps you stop overspending
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Set monthly budget, track spending as you go, monitor net worth. Built on Google Apps Script. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-semibold">$15 lifetime.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a 
                href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
              >
                Get Your App →
              </a>
              <a 
                href="/demo"
                className="inline-block px-6 py-4 bg-white text-blue-600 rounded-lg shadow hover:shadow-md transition-all font-semibold border border-gray-200"
              >
                Demo with Example Data →
              </a>
            </div>
            

            {/* KEY BENEFITS */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Fixed expenses auto-populate every month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Track variable expenses as you spend them</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">All your data stays in your Google Drive</p>
                
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
        @keyframes rise {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes diagonal {
          0% {
            transform: translate(-100px, 100vh) rotate(-5deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translate(100vw, -100px) rotate(5deg);
            opacity: 0;
          }
        }
        
        .animate-rise {
          animation: rise 20s linear infinite;
        }
        
        .animate-diagonal {
          animation: diagonal 15s linear infinite;
        }
      `}</style>
    </section>
  );
}