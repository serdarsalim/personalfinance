"use client";

export default function NoRefundWarning() {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-y-4 border-orange-400 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-300">
          <div className="flex items-start gap-4">
            {/* Warning Icon */}
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Main Message */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Try FREE for 30 Days Before You Buy
              </h2>

              <div className="space-y-3 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong className="text-orange-700">Try Simplify Budget FREE for 30 days with full features.</strong> No credit card required. Buy only after you've tested it and know it works for you.
                </p>

                <p className="text-lg font-bold text-red-700">
                  All sales are final - no refunds.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
                >
                  Start Your Free 30-Day Trial
                </a>
                <a
                  href="#templates"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Learn More & Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
