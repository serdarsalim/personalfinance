export default function WhySimplifySection() {
  const steps = [
    {
      title: "Set Your Budget",
      description: "Enter your monthly income and fixed expenses like rent, utilities, subscriptions. See your available spending money instantly.",
      icon: "💰",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      title: "Track Daily Expenses",
      description: "Use our visual calendar to log expenses as you spend. Find today, find category, enter amount. Takes 5 seconds.",
      icon: "📱",
      gradient: "from-emerald-500 to-teal-500",
      delay: "0.2s"
    },
    {
      title: "Monitor Progress",
      description: "Watch your spending in real-time. See which categories you're overspending in before it's too late.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.4s"
    },
    {
      title: "Grow Your Wealth",
      description: "Track net worth monthly. See your debts shrink and assets grow with beautiful visual charts.",
      icon: "📈",
      gradient: "from-orange-500 to-red-500",
      delay: "0.6s"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 leading-tight pb-2">
            Here's How Simplify Budget Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stop struggling with complex budget apps. Our simple 4-step process gets you budgeting in minutes, not hours.
          </p>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-bold text-gray-500 mb-1">STEP {i + 1}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Family sharing note */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-3">🏠</span>
              <h3 className="text-lg font-semibold text-gray-900">Great for Family Budgeting</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Multiple people can track expenses on the same Google Sheet. Perfect for couples and families.
            </p>
            <a
              href="/how-it-works"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn more about how it works
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
