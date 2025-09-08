export default function WhySimplifySection() {
  const reasons = [
    {
      title: "Know Your Budget at Month Start",
      description: "Set your monthly budget once. Fixed expenses like rent and subscriptions auto-populate so you know exactly how much you have left to spend.",
      icon: "📅"
    },
    {
      title: "Track as You Spend",
      description: "Add expenses in seconds while you're out spending, even from your mobile. See your remaining budget in real-time so you never overspend.",
      icon: "📱"
    },
    {
      title: "Monitor Your Net Worth",
      description: "Track your assets and debts monthly to watch your wealth grow over time. See your financial progress and celebrate every milestone.",
      icon: "📈"
    },
    {
      title: "Works for Families",
      description: "Multiple people can track expenses in the same Google Sheet. Perfect for couples managing money together.",
      icon: "🏠"
    },
    {
      title: "You Own Your Data",
      description: "Everything lives in your Google Drive. No company can lock you out or delete your financial history.",
      icon: "🔒"
    },
    {
      title: "Built on Google Apps Script & Verified",
      description: "Our app has been verified by Google to provide a secure and trustworthy experience when you connect your Google Account.",
      icon: "✅"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          How it works
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