export default function WhySimplifySection() {
  const reasons = [
    {
      title: "No App Download Required",
      description: "Works instantly on any device with a browser. Already logged in through Google - no passwords to remember.",
      icon: "📱"
    },
    {
      title: "Test Free, Pay Once",
      description: "Try everything for 30 days. If you like it, pay once and get free lifetime updates forever.",
      icon: "💰"
    },
    {
      title: "Family Budget Sharing",
      description: "Multiple people can track expenses in the same spreadsheet. Perfect for couples and families.",
      icon: "👨‍👩‍👧"
    },
    {
      title: "Revolutionary Monthly Grid",
      description: "See your entire month at a glance. No more scrolling through endless transaction lists.",
      icon: "📅",
      appOnly: true
    },
    {
      title: "Set Subscriptions Once",
      description: "Enter Netflix, Spotify, etc. once - they appear automatically every month. Never forget to track them again.",
      icon: "🔄"
    },
    {
      title: "Build Wealth Over Time",
      description: "Net worth tracking shows your financial progress. Watch debts shrink and assets grow month by month.",
      icon: "📈"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">Simplify Budget</span>?
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