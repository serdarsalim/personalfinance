// src/app/components/sections/HeroSection.tsx

"use client";

import Image from "next/image";

export default function HeroSection() {
  

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-8 pb-16 overflow-hidden relative">
      {/* Optimized animated expense icons background - reduced from 11 to 5 elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Rising icons - 5 emojis */}
        {[...Array(5)].map((_, i) => {
          const icons = ['💵', '💳', '💰', '🛒', '🏠'];
          const positions = [15, 30, 50, 70, 85];
          return (
            <div
              key={i}
              className="absolute text-3xl animate-rise-optimized will-change-transform"
              style={{
                left: `${positions[i]}%`,
                animationDelay: `${i * 4}s`,
                opacity: 0,
                transform: 'translate3d(0, 100vh, 0)'
              }}
            >
              {icons[i]}
            </div>
          );
        })}
        
        {/* Reduced diagonal cards - only 2 now */}
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <div
              key={`card-${i}`}
              className="absolute bg-white/8 rounded-lg p-3 animate-diagonal-optimized will-change-transform"
              style={{
                width: '100px',
                height: '50px',
                left: `${[30, 70][i]}%`,
                top: `${[20, 60][i]}%`,
                animationDelay: `${i * 6}s`,
                opacity: 0,
                transform: 'translate3d(-50px, 50vh, 0)'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400/15 to-emerald-400/15 rounded"></div>
                <div className="flex-1">
                  <div className="h-1.5 bg-gray-300/15 rounded mb-1"></div>
                  <div className="h-1.5 bg-gray-300/15 rounded w-2/3"></div>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-12 text-gray-900">
              Set goals, track expenses,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> grow your wealth</span>
            </h1>
            

            {/* CTAs */}
            <div className="mb-8">
              <a
                href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg hover:scale-105 transform"
              >
                Start Using Simplify Budget
              </a>
            </div>
            
            {/* Trust note */}
            <div className="text-sm text-gray-600 text-center lg:text-left mb-4">
              <p>Sign in with Google to create your budget</p>
              <p>Try free for 30 days without credit card requirement</p>
            </div>
          </div>

          {/* Right side - Visual Calendar */}
          <div className="relative">
            <div className="block max-w-xl mx-auto">
              <Image
                src="/simplify-monthly-grid.webp"
                alt="Simplify Monthly Expense Calendar"
                width={700}
                height={580}
                className="w-full h-auto rounded-lg border border-gray-200 shadow-lg"
                priority
                sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 700px"
                quality={85}
              />
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
      
      {/* Optimized CSS animations with accessibility support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-rise-optimized,
          .animate-diagonal-optimized {
            animation: none !important;
            opacity: 0.05 !important;
          }
        }
        
        @keyframes rise-optimized {
          0% {
            transform: translate3d(0, 100vh, 0);
            opacity: 0;
          }
          5%, 95% {
            opacity: 0.1;
          }
          100% {
            transform: translate3d(0, -20vh, 0);
            opacity: 0;
          }
        }
        
        @keyframes diagonal-optimized {
          0% {
            transform: translate3d(-50px, 50vh, 0);
            opacity: 0;
          }
          5%, 95% {
            opacity: 0.08;
          }
          100% {
            transform: translate3d(50vw, -50px, 0);
            opacity: 0;
          }
        }
        
        .animate-rise-optimized {
          animation: rise-optimized 12s ease-in-out infinite;
          opacity: 0;
        }
        
        .animate-diagonal-optimized {
          animation: diagonal-optimized 10s ease-in-out infinite;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}