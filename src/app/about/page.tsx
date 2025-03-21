"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
   
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
              About Simplify Budget
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our mission is to help everyone achieve financial freedom through better money management
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
          I'm Serdar, the creator behind Simplify Budget. As a digital nomad who's traveled through 25 countries in the past 2 years, 
          I've developed these financial tracking tools out of personal necessity and a belief that intentional 
          budget management should be empowering, not burdensome.
        </p>
        <p className="text-gray-600 mb-4">
          After manually tracking my finances for over two years, I've refined these Google Sheets templates to 
          strike the perfect balance: automation where it makes sense (like subscription payment tracking) and 
          intentional input where it matters for financial awareness. Each template features thoughtfully designed 
          visualizations and reports that help users not just track spending, but actually build wealth.
        </p>
        <p className="text-gray-600">
          Every template available here is one I personally use daily, ensuring they're continuously improved based 
          on real-world financial management needs. My mission is simple: to provide the most effective, accessible 
          financial tools for people who want control without complexity.
        </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-4">
                {/* Google Sheets-inspired SVG */}
                <div className="relative">
                  {/* Sheet header */}
                  <div className="h-10 bg-[#0f9d58] rounded-t-lg flex items-center px-4">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="white">
                      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v3H5V5H19z M19,10v4H5v-4H19z M5,19v-3h14v3H5z" />
                    </svg>
                    <span className="text-white font-medium">Grid-Budget.sheet</span>
                  </div>
                  
                  {/* Sheet content */}
                  <div className="border border-gray-200 rounded-b-lg">
                    {/* Column headers */}
                    <div className="flex border-b border-gray-200">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200"></div>
                      <div className="w-32 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">A</div>
                      <div className="w-32 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">B</div>
                      <div className="w-32 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">C</div>
                      <div className="w-32 h-8 bg-[#f1f3f4] flex items-center justify-center text-xs font-medium text-gray-600">D</div>
                    </div>
                    
                    {/* Row 1 */}
                    <div className="flex border-b border-gray-200">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">1</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm text-gray-800 font-medium bg-[#e6f4ea]">Category</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm text-gray-800 font-medium bg-[#e6f4ea]">Budget</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm text-gray-800 font-medium bg-[#e6f4ea]">Actual</div>
                      <div className="w-32 h-8 flex items-center px-2 text-sm text-gray-800 font-medium bg-[#e6f4ea]">Difference</div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="flex border-b border-gray-200">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">2</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">Housing</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$1,200</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$1,150</div>
                      <div className="w-32 h-8 flex items-center px-2 text-sm text-green-600">$50</div>
                    </div>
                    
                    {/* Row 3 */}
                    <div className="flex border-b border-gray-200">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">3</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">Food</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$500</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$520</div>
                      <div className="w-32 h-8 flex items-center px-2 text-sm text-red-600">-$20</div>
                    </div>
                    
                    {/* Row 4 */}
                    <div className="flex border-b border-gray-200">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">4</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">Transport</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$300</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm">$280</div>
                      <div className="w-32 h-8 flex items-center px-2 text-sm text-green-600">$20</div>
                    </div>
                    
                    {/* Row 5 */}
                    <div className="flex">
                      <div className="w-10 h-8 bg-[#f1f3f4] border-r border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">5</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm font-medium">Total</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm font-medium">$2,000</div>
                      <div className="w-32 h-8 border-r border-gray-200 flex items-center px-2 text-sm font-medium">$1,950</div>
                      <div className="w-32 h-8 flex items-center px-2 text-sm font-medium text-green-600">$50</div>
                    </div>
                  </div>
                  
                  {/* Chart representation */}
                  <div className="mt-4 h-32 bg-white border border-gray-200 rounded-lg flex items-end px-4 py-2">
                    <div className="w-1/4 bg-blue-500 h-[40%] rounded-t"></div>
                    <div className="w-1/4 bg-red-500 h-[60%] rounded-t mx-2"></div>
                    <div className="w-1/4 bg-yellow-500 h-[30%] rounded-t mx-2"></div>
                    <div className="w-1/4 bg-green-500 h-[50%] rounded-t"></div>
                  </div>
                </div>
                
                {/* Subtle Google Sheets-inspired overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f9d58]/10 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of your content... */}
      
      {/* Our Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Accessibility",
                description: "We believe financial tools should be accessible to everyone, regardless of their financial status or technical skills.",
                icon: "🌟"
              },
              {
                title: "Privacy",
                description: "Your financial data is personal. Our templates live in your own Google Drive, and we never see or store your information.",
                icon: "🔒"
              },
              {
                title: "Empowerment",
                description: "We're not just selling templates - we're providing tools that empower you to take control of your financial future.",
                icon: "💪"
              }
            ].map((value, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our templates or need help with your purchase?
          </p>
          <div className="inline-flex">
            <a
              href="mailto:contact@sheetsmaster.co"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
     
    </div>
  );
}