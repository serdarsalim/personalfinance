"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Expense Calendar",
      description: "Monthly expense calendar. Enter expenses directly on the calendar and see your spending patterns instantly.",
      image: "/app-screenshots/2monthlygrid.webp"
    },
    {
      title: "Budget Dashboard",
      description: "Set your budget goals and track actual spending. Fixed expenses show as spent from day one so you know how much money you have left to spend.",
      image: "/app-screenshots/1budgettab.webp"
    },
    {
      title: "Fixed Expenses Tab",
      description: "Set your fixed expenses once and they automatically appear at the beginning of every month. Rent, subscriptions, car payments - never manually enter them again.",
      image: "/app-screenshots/3recurring.webp"
    },
    {
      title: "Income Tracker",
      description: "Track every dollar coming in. Salary, freelance work, investments, side hustles - see your complete income picture.",
      image: "/app-screenshots/4incometab.webp"
    },
    {
      title: "Net Worth Tracking",
      description: "Track assets, investments, and debts over time. Watch your wealth grow month by month.",
      image: "/app-screenshots/5networth.webp"
    },
    {
      title: "Financial Reports",
      description: "See your complete financial picture. Income trends, spending patterns, and savings rate in beautiful charts.",
      image: "/app-screenshots/6reports.webp"
    },
    {
      title: "Custom Categories",
      description: "30 customizable categories with emojis. Reorder, rename, and track exactly what matters to you.",
      image: "/app-screenshots/7categories.webp"
    }
  ];

  // Disabled auto-advance - user controls navigation
  // useEffect(() => {
  //   if (!isPaused && !fullscreenImage) {
  //     intervalRef.current = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     }, 15000);
  //   }

  //   return () => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [isPaused, fullscreenImage, slides.length]);

  // Handle ESC key for fullscreen modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullscreenImage(null);
      }
    };

    if (fullscreenImage) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    // Reset values
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          App Screenshots
        </h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main carousel container */}
          <div className="overflow-hidden rounded-xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center">
                    {/* Image/Screenshot */}
                    <div className="w-full lg:w-2/3 p-8 bg-gray-50">
                      <div 
                        className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer hover:opacity-95 transition-opacity"
                        onClick={() => setFullscreenImage(slide.image)}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={1600}
                          height={1000}
                          className="w-full h-auto"
                          priority={index === 0}
                          sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
                          quality={85}
                        />
                        {/* Click to expand indicator */}
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          Click to expand
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="w-full lg:w-1/3 p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{slide.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={fullscreenImage}
              alt="Fullscreen view"
              width={1920}
              height={1200}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Close fullscreen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}