"use client";

import React, { Suspense } from "react";

// Simple loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Main content component
const TermsContent = () => (
  <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
    <div className="relative z-10 max-w-4xl mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900">
        Terms and Conditions
      </h1>

      <p className="text-lg mt-6 text-gray-500 text-center">
        Last Updated: March 14, 2025
      </p>
    </div>

    <div className="relative z-10 max-w-4xl text-left space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Google Services Disclaimer</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget is not affiliated with, endorsed by, sponsored by, or connected to Google LLC in any way. 
          Google Sheets™, Google Drive™, and related marks and logos are trademarks of Google LLC. Our templates 
          are independently created and maintained to work with Google's services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Template License</h2>
        <p className="mb-3 text-gray-700">Purchase of a template grants you a non-exclusive, non-transferable, single-user license to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Use the template for personal or business purposes</li>
          <li>Make modifications to suit your needs</li>
          <li>Create copies for backup purposes</li>
        </ul>
        <p className="mb-3 text-gray-700">You may not:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Resell, distribute, or transfer the template to others</li>
          <li>Include the template in a product for redistribution</li>
          <li>Share premium templates publicly</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Pricing and Payments</h2>
        <p className="mb-4 text-gray-700">
          All prices are in USD and are subject to change without notice. Payment is required before template access 
          is granted to paid templates. We use secure third-party payment processors and do not store credit card information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Refund Policy</h2>
        <p className="mb-4 text-gray-700">
          Due to the digital nature of our products, all sales are final. No refunds will be issued unless:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>The template is permanently inaccessible</li>
          <li>The template significantly fails to function as described</li>
        </ul>
        <p className="mb-4 text-gray-700">
          Refund requests must be submitted within 7 days of purchase. We reserve the right to deny refunds 
          if we determine the request is not valid.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Disclaimer of Warranties</h2>
        <p className="mb-4 text-gray-700">
          Templates are provided "as is" without warranty of any kind. While we strive for excellence, we do not 
          guarantee that templates will meet your specific requirements or be error-free. You assume all risks 
          associated with using our templates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget shall not be liable for any indirect, incidental, special, consequential, or punitive 
          damages resulting from the use or inability to use our templates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Updates to Terms</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
          posting to our website. Your continued use of our templates constitutes acceptance of any modifications 
          to these terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact</h2>
        <p className="mb-4 text-gray-700">
          For questions about these terms, please contact us at support@premiumsheets.com
        </p>
      </section>
    </div>
  </main>
);

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Suspense fallback={<Loading />}>
        <TermsContent />
      </Suspense>
    </div>
  );
}