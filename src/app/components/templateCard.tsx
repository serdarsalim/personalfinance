"use client";

import { ReactNode } from "react";

interface TemplateCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  isFree?: boolean;
  features?: string[];
  price: string;
  previewLink?: string;
  downloadLink?: string;
}

export default function TemplateCard({ 
  title, 
  description, 
  icon, 
  color, 
  isFree = false,
  features = [],
  price,
  previewLink = "#preview-section",
  downloadLink = "#"
}: TemplateCardProps) {
  
  // Function to track download events
  const trackDownload = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'templateDownload',
        templateName: title,
        templatePrice: isFree ? 'Free' : price,
        templateType: isFree ? 'Free Template' : 'Paid Template'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
      {/* Icon area without the price */}
      <div className={`relative h-10 flex items-center justify-center ${color}`}>
        <div className="text-3xl">{icon}</div>
      </div>
      
      <div className="p-6">
        {/* Title area with price moved here */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Only show either FREE badge or price, not both */}
            {isFree ? (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                FREE
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-800 text-sm font-bold px-3 py-1 rounded-full">
                {price}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <svg className="h-4 w-4 mr-2 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex space-x-3">
          <a
            href={previewLink}
            className="text-blue-600 font-medium hover:underline text-sm flex items-center"
            onClick={(e) => {
              if (previewLink === "#preview-section") {
                e.preventDefault();
                document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Preview Template
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </a>
          <a
            href={downloadLink}
            className="text-blue-600 font-medium hover:underline text-sm flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDownload} // Add the tracking function here
          >
            {isFree ? "Download Free" : "Get This Template"}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}