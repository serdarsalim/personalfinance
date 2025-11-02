"use client";

export default function SecurityPermissions() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Security System Explained
            </h2>
            <p className="text-lg text-gray-600">
              Simplify Budget is a Google App that creates a Google Sheet in your Drive to write and update all transactions.
            </p>
          </div>

          {/* Key Points */}
          <div className="space-y-6">
            {/* What this means */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What this means
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Simplify Budget only creates <strong>ONE Google Sheet</strong> in your Drive and only has permission to read/write to that sheet. It cannot access your emails, other files, or any other data in your Google account.
                </p>
              </div>
            </div>

            {/* Privacy Protection */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your Data Never Touches Our Servers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your financial data stays <strong>100% private in YOUR Google Drive</strong>. We never see, store, or have access to your budget information. It's all in your Google account, under your control.
                </p>
              </div>
            </div>

            {/* Google Verified */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Google Security Review Verified
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The app is verified by Google's OAuth security review process, confirming it only requests the permissions needed to function. Google has reviewed our security practices and data handling.
                </p>
              </div>
            </div>

            {/* Why did we build it this way */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why did we build it this way?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Spreadsheets alone are limiting. Dedicated mobile apps lock you to specific devices and 3rd party databases. Our solution: Google Apps Script that works with a Google Sheet gives you the best of both: work from any device with a browser, share budgets with family, and own your data forever.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-gray-800 font-semibold mb-4">
                Try Simplify Budget free for 30 days
              </p>
              <a
                href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
