export default function WhySimplifySection() {
  const reasons = [
    {
      title: "Your Data, Your Control",
      description: "Everything stays in YOUR Google Drive. We never see or access your financial information.",
      icon: "🔒"
    },
    {
      title: "One-Time Payment, Forever",
      description: "No monthly subscriptions. Pay once, use forever with free lifetime updates.",
      icon: "💰"
    },
    {
      title: "Visual Money Insights",
      description: "Instant charts and graphs that actually help you understand where your money goes.",
      icon: "📊"
    },
    {
      title: "Revolutionary Monthly Grid",
      description: "See your entire month at a glance. No more scrolling through endless transaction lists.",
      icon: "📅",
      appOnly: true
    },
    {
      title: "Track What Matters",
      description: "30+ customizable categories with automatic calculations. Set budgets, track goals, build wealth.",
      icon: "🎯"
    },
    {
      title: "Access Anywhere",
      description: "Works on any device with a browser. Your budget is always with you, always in sync.",
      icon: "📱"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          Why Simplify Budget?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4 flex-shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {reason.title}
                    {reason.appOnly && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-normal">
                        App only
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}