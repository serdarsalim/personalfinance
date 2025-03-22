export default function WhyTrackSection() {
    const features = [
      {
        title: "Total Ownership",
        description: "You own your data and can customize everything to fit your exact financial needs and goals.",
        icon: "💯"
      },
      {
        title: "No Subscription Fees",
        description: "Our basic template is completely free, and premium templates are one-time purchases.",
        icon: "💰"
      },
      {
        title: "Powerful Analysis",
        description: "Track 30+ custom categories with month-over-month comparisons to identify spending patterns.",
        icon: "📈"
      },
      {
        title: "Easy to Use",
        description: "No technical skills needed - just enter your numbers and the spreadsheets do the work",
        icon: "🔄"
      },
      {
        title: "Visual Reports",
        description: "Clear charts and dashboards show your progress month over month",
        icon: "📊"
      },
      {
        title: "Privacy Focused",
        description: "Your data stays in your Google Drive - we never see your financial information",
        icon: "🔒"
      }
    ];
  
    return (
      <section id="why-track" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
            Why Choose Our Google Sheets Budget Templates?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }