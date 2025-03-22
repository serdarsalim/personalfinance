export default function HowItWorksSection() {
    const steps = [
      {
        title: "Choose a Template",
        description: "Browse our collection of free and premium templates designed to help you manage your finances.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-emerald-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      },
      {
        title: "Make a Copy",
        description: "One-click to create your own copy of the template in your Google Drive - no download needed.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Start Tracking",
        description: "Enter your income and expenses, and watch the automatic calculations and visualizations update instantly.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ];
  
    return (
      <section id="how-it-works" className="bg-white py-12 sm:py-20 scroll-mt-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute left-0 top-10 w-32 h-32 bg-blue-50 rounded-full opacity-70 filter blur-xl"></div>
          <div className="absolute right-0 bottom-10 w-32 h-32 bg-emerald-50 rounded-full opacity-70 filter blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 relative max-w-xs sm:max-w-none mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200"></div>
                )}
                
                <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-8 text-center h-full group transform hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-80">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  <div className="mt-5 w-full text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }