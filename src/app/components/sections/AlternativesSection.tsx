import Link from "next/link";

// src/app/components/sections/AlternativesSection.tsx

"use client";

export default function AlternativesSection() {
  const alternatives = [
    {
      name: "YNAB",
      price: "$180/year",
      ourPrice: "$15 once",
      savings: "$165/year",
      link: "/compare/ynab-alternative"
    },
    {
      name: "Mint",
      status: "Shut Down",
      ourPrice: "$15 once", 
      message: "Your data, forever",
      link: "/compare/mint-alternative"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Stop Paying for Budget App Subscriptions
          </h2>
          <p className="text-xl text-gray-600">
            Same features. Better price. Your data stays yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {alternatives.map((alt, i) => (
            <Link 
              key={i}
              href={alt.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center group"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {alt.name} {alt.status && <span className="text-red-600">({alt.status})</span>}
              </h3>
              {alt.price && (
                <>
                  <p className="text-gray-500 line-through">{alt.price}</p>
                  <p className="text-2xl font-bold text-green-600 mb-2">Save {alt.savings}</p>
                </>
              )}
              {alt.message && (
                <p className="text-lg font-semibold text-blue-600 mb-2">{alt.message}</p>
              )}
              <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                See comparison →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Tired of subscription fatigue? Join 150+ people who bought once and use forever.
          </p>
          <Link 
            href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}