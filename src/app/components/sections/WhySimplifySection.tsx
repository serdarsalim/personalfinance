export default function WhySimplifySection() {
  const reasons = [
    {
      title: "Know Your Budget",
      description: "Set your income, fixed expenses, and budget. Fixed expenses appear as already spent so you see your remaining budget instantly.",
      icon: "📅"
    },
    {
      title: "Track as You Spend",
      description: "Log all your expenses visually in a calendar format throughout the month. The app is mobile optimized.",
      icon: "📱"
    },
    {
      title: "Review if You Met Your Goals",
      description: "At the end of the month review your spending and adjust budgets if needed for next month.",
      icon: "📊"
    },
    {
      title: "Enter a Snapshot of Your Net Worth",
      description: "Track your assets and debts and visually see your wealth grow over time.",
      icon: "📈"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          Here's How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
              {i < reasons.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Family sharing note */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-3">🏠</span>
              <h3 className="text-lg font-semibold text-gray-900">Works for Families</h3>
            </div>
            <p className="text-gray-700">
              Multiple people can track expenses on the same Google Sheet. The app connects to a Google Sheet in your Drive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}