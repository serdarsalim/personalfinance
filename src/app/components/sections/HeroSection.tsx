// src/app/components/sections/HeroSection.tsx

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
         {/* SINGLE FOCUSED MESSAGE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-900">
            Budget App for{' '}
            <span className="text-green-600">$15 Once</span>
            <br />
            Not{' '}
            <span className="text-red-600 line-through">$180/Year</span>
          </h1>
          
          {/* CLEAR BENEFIT */}
          <p className="text-xl text-gray-700 mb-8">
            Same features as YNAB. Your data stays in YOUR Google Sheets forever.
          </p>

          {/* PRIMARY CTA ONLY */}
          <div className="mb-8">
            <a 
              href="https://ko-fi.com/s/4b62acb528"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-bold text-lg"
            >
              Get Lifetime Access for $15
            </a>
            <p className="text-sm text-gray-600 mt-2">
              No subscription. No data hostage. Use forever.
            </p>
          </div>

          {/* SOCIAL PROOF */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <p className="text-sm text-gray-600">Happy Users</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">$165/yr</div>
                <p className="text-sm text-gray-600">You Save</p>
              </div>
              <div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">4.8/5 Rating</p>
              </div>
            </div>
          </div>

          {/* SINGLE LINK TO LEARN MORE */}
          <p className="mt-8 text-sm text-gray-600">
            See why we're better than{' '}
            <Link href="/compare/ynab-alternative" className="text-blue-600 hover:underline font-semibold">
              YNAB
            </Link>
            {' '}and{' '}
            <Link href="/compare/mint-alternative" className="text-blue-600 hover:underline font-semibold">
              Mint
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}