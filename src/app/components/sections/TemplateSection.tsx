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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
          Our Personal Finance Templates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <TemplateCard
            title="Monthly Budget Tracker"
            description="Set a monthly budget and track your income and expenses with this easy-to-use Google Sheets template."
            icon=""
            price="FREE"
            color="bg-green-300"
            isFree={true}
            features={[
              "30 custom categories",
              "Monthly budget settings",
              "Automatic charts and reports",
              "Saving and debt payment goals"
            ]}
            previewLink="https://docs.google.com/spreadsheets/d/1_2Yj5I2-KXI99EnwAIFB6qHcyRG-G0QkWXzplnonwGQ/edit?gid=2061588169#gid=2061588169"
            downloadLink="https://docs.google.com/spreadsheets/d/1_2Yj5I2-KXI99EnwAIFB6qHcyRG-G0QkWXzplnonwGQ/copy?gid=2061588169#gid=2061588169"
          />
          <TemplateCard
            title="Subscription Tracker"
            description="Never miss a recurring payment again. Our smart tracker automatically displays all subscription payments for the month."
            icon=""
            price="$10"
            color="bg-blue-300"
            isFree={false}
            features={[
              "Automatic payment tracking",
              "Start/end date management",
              "Monthly payment summaries",
              "Renewal calendar",
            ]}
            previewLink="https://docs.google.com/spreadsheets/d/1y0MMoneThIIZdbmrr2sas21MOIjqYlqwgh7N-84i_QA/edit?gid=2061588169#gid=2061588169"
            downloadLink="https://ko-fi.com/s/6441e917de"
          />
          <TemplateCard
            title="Net Worth Tracker"
            description="Monitor your assets and liabilities over time to visualize your financial progress and true financial health."
            icon=""
            price="$10"
            color="bg-purple-300"
            isFree={false}
            features={[
              "Asset & liability tracking",
              "Financial health dashboard",
              "Net worth over time charts",
              "Goal setting and monitoring"
            ]}
            previewLink="https://docs.google.com/spreadsheets/d/1_XQgRBvtdYrL_Gi8im02SpeFqLXz4rKHfDKEe_enAps/edit?gid=1749557257#gid=1749557257"
            downloadLink="https://ko-fi.com/s/9e1d1d3633"
          />
        </div>

       {/* Bundle Highlight - Improved version */}
<div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-white shadow-lg scroll-mt-20 relative overflow-hidden mt-12 mb-4 border-4 border-white">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
  
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8 relative z-10">
      {/* Bundle header */}
      <div className="flex flex-col sm:flex-row sm:items-center mb-4">
        <h3 className="text-2xl sm:text-3xl font-bold">Budget Tracker Bundle</h3>
        <span className="bg-white text-blue-600 text-sm font-bold px-3 py-1 rounded-full sm:ml-3 mt-2 sm:mt-0 inline-block sm:inline">Save 25%</span>
      </div>
      
      {/* Bundle description */}
      <p className="text-white/90 mb-6 text-lg">
      Comes with all templates working seamlessly together, sharing data between them to create a complete financial dashboard for taking control of your finances.

      </p>
      
      {/* Feature highlights */}
      <ul className="mb-6 space-y-2">
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>All Templates Included in one Package</span>
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Lifetime Updates</span>
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Priority Email Support</span>
        </li>
      </ul>
      
      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="https://docs.google.com/spreadsheets/d/1EKIcdA8H20eUWCwS9zOtuCwGEqgiX_USIDIkKSHjp64/edit?gid=2061588169#gid=2061588169"
          className="inline-block rounded-md bg-white text-blue-600 px-6 py-3 font-medium transition-colors hover:bg-gray-100"
          onClick={() => trackTemplateInteraction('preview', 'bundle')}
        >
          Preview Bundle
        </a>
        <a
          href="https://ko-fi.com/s/db49a65ceb"
          className="inline-block rounded-md bg-emerald-500 text-white px-6 py-3 font-medium transition-colors hover:bg-emerald-600 shadow-lg border border-emerald-400"
          onClick={() => trackTemplateInteraction('purchase', 'bundle')}
        >
          Get Premium Bundle
        </a>
      </div>
    </div>
    
    {/* Price display */}
    <div className="md:w-1/3 flex justify-center items-center">
      <div className="text-center bg-white/10 backdrop-blur-sm px-6 py-8 rounded-lg border border-white/20 shadow-lg">
        <div className="text-sm uppercase tracking-wide mb-1 text-emerald-200">Bundle Price</div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg line-through opacity-70">$20</span>
          <span className="text-4xl font-bold">$15</span>
        </div>
        <div className="text-xs mt-2 text-emerald-200">One-time purchase, no subscription</div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}