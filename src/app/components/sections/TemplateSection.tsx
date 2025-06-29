"use client";

import TemplateCard from "../templateCard";

export default function TemplateSection() {
  const trackTemplateInteraction = (action: string, template: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'template_interaction',
        action: action,
        template: template
      });
    }
  };

  return (
    <section id="templates" className="bg-gradient-to-r from-green-50 to-white py-20 scroll-mt-5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Simplify Budget App - Featured */}
          <div className="relative">
            {/* 50% OFF Badge */}
            <div className="absolute -top-3 right-4 z-10">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                50% OFF
              </div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-xl blur-xl"></div>
            
            <div className="relative bg-white rounded-xl shadow-xl border-2 border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Premium header */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Simplify Budget App</h3>
                    <p className="text-blue-100">Complete financial control in your browser</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-sm line-through opacity-75">$30</p>
                    <p className="text-4xl font-bold">$15</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
         
                
                <p className="text-gray-700 text-lg mb-6">
                  Pay once, own forever. Track expenses, build budgets, and grow your wealth - all without monthly fees bleeding your accounts.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Why People Love It:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">No download needed - works on any device with Gmail login</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">Perfect for families - multiple people can track expenses</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">Track wealth growth and debt payoff over time</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">Super fast expense entry reveals spending patterns</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">Auto-tracks all subscriptions to stop money leaks</span>
                    </div>
                  </div>
                </div>
                
                {/* Privacy emphasis */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    We never see or store your financial data - everything stays private in your Google Drive
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <a
                    href="https://ko-fi.com/s/4b62acb528"
                    className="text-center px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackTemplateInteraction('download', 'Simplify Budget App')}
                  >
                    Get Lifetime Access
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Free Template - Simpler design */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="bg-gray-100 p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Free Budget Tracker</h3>
                  <p className="text-gray-600">Perfect for getting started with budget tracking</p>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                  FREE
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Track income and expenses with this powerful Google Sheets template. 
                A great starting point for taking control of your finances.
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">30 custom categories</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Monthly budget settings</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Automatic charts</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="h-4 w-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Savings goals</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/spreadsheets/d/13gCc_WQ7n5PGhAFeti8K9w2Lr-zoF-Sqa1qS5z6lSe0/copy?gid=2061588169#gid=2061588169"
                  className="text-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTemplateInteraction('download', 'Free Budget Tracker')}
                >
                  Download Free Template
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}