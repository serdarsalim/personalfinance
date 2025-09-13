"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide navbar on /app page - AFTER all hooks
  if (pathname === '/app') {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const extraOffset = -55;
      
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.pageYOffset - extraOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 10);
    }
  };

  return (
    <nav className={`relative top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Simplify Budget Logo" 
                width={40} 
                height={40}
                className="mr-2" 
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
                Simplify Budget
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/why-manual-tracking" className="text-gray-700 hover:text-blue-600 font-medium">
              Why Manual Tracking
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">
              App Guide
            </Link>
            <Link href="/#templates" className="text-blue-600 hover:text-blue-800 font-medium">
              Buy License
            </Link>
            <Link 
              href="/app" 
              className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium"
            >
              Open App
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">
            Home
          </Link>
          <Link href="/why-manual-tracking" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">
            Why Manual Tracking
          </Link>
          <Link href="/how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">
            App Guide
          </Link>
          <Link href="/#templates" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left">
            Buy License
          </Link>
          <Link 
            href="/app" 
            className="block px-3 py-2 text-white bg-blue-600 font-medium w-full text-left rounded mx-2"
          >
            Open App
          </Link>
        </div>
      </div>
    </nav>
  );
}