"use client";

import React, { useState, useEffect } from "react";

const PhilosophyClient = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const sections = [
    { id: 'introduction', title: 'Learn More' },
    { id: 'philosophy', title: 'Our Approach' },
    { id: 'results', title: 'Why It Works' },
    { id: 'who-for', title: 'Who It\'s For' },
    { id: 'simple-beats-complex', title: 'Simple beats complex' },
    { id: 'get-started', title: 'Get Started' }
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

      // Hide sidebar when footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setShowSidebar(footerRect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Table of Contents - Desktop */}
      {showSidebar && (
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
      )}

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
    </>
  );
};

export default PhilosophyClient;