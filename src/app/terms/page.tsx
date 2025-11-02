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
        Last Updated: June 27, 2025
      </p>
    </div>

    <div className="relative z-10 max-w-4xl text-left space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Google Services Disclaimer</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget is not affiliated with, endorsed by, sponsored by, or connected to Google LLC in any way. 
          Google Sheets™, Google Drive™, and related marks and logos are trademarks of Google LLC. Our application 
          and templates are independently created and maintained to work with Google's services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Application and Template License</h2>
        <p className="mb-3 text-gray-700">Purchase of Simplify Budget grants you a non-exclusive, non-transferable, single-user license to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Access and use the Simplify Budget web application</li>
          <li>Use the associated budget template for personal or business purposes</li>
          <li>Make modifications to your budget data to suit your needs</li>
          <li>Create copies of your spreadsheet for backup purposes</li>
        </ul>
        <p className="mb-3 text-gray-700">You may not:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Resell, distribute, or transfer your license to others</li>
          <li>Share your account access with others</li>
          <li>Reverse engineer or copy the application's functionality</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Privacy</h2>
        <p className="mb-4 text-gray-700">
          Your financial data remains in your own Google Sheets. We do not store, access, or process your financial 
          information on our servers. The application only accesses the spreadsheet you explicitly connect through 
          the settings panel. You maintain full control and ownership of your data at all times.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Pricing and Payments</h2>
        <p className="mb-4 text-gray-700">
          All prices are in USD and are subject to change without notice. Payment is required before access to the 
          Simplify Budget application is granted. We use secure third-party payment processors and do not store 
          credit card information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Policy</h2>
        <p className="mb-4 text-gray-700">
          All sales are final. No refunds will be issued. A 30-day free trial with full feature access is available
          prior to purchase. No credit card is required for the trial period.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Account Access</h2>
        <p className="mb-4 text-gray-700">
          Access to the web application requires valid payment. We reserve the right to suspend or terminate access 
          for violation of these terms, non-payment, or suspected fraudulent activity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Service Availability</h2>
        <p className="mb-4 text-gray-700">
          While we strive for 99.9% uptime, we do not guarantee uninterrupted access to the application. Scheduled 
          maintenance will be communicated in advance when possible. We are not liable for any losses due to 
          service interruptions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Google Account Integration</h2>
        <p className="mb-4 text-gray-700">
          Use of Simplify Budget requires authorization through your Google account. You are responsible for 
          maintaining the security of your Google account credentials. We access only the specific spreadsheet 
          you connect and the permissions you explicitly grant.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Disclaimer of Warranties</h2>
        <p className="mb-4 text-gray-700">
          The application is provided "as is" without warranty of any kind. While we strive for excellence, we do 
          not guarantee that Simplify Budget will meet your specific requirements or be error-free. You assume all 
          risks associated with using our application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget shall not be liable for any indirect, incidental, special, consequential, or punitive 
          damages resulting from the use or inability to use our application or any errors in your financial data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Updates to Terms</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
          posting to our website. Your continued use of Simplify Budget constitutes acceptance of any modifications 
          to these terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact</h2>
        <p className="mb-4 text-gray-700">
          For questions about these terms, please contact us at contact@simplifybudget.com
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