"use client";

import React, { Suspense } from "react";

// Simple loading component
const Loading = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

// Main content component
const PrivacyContent = () => (
  <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
    <div className="relative z-10 max-w-4xl mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900">
        Privacy Policy
      </h1>

      <p className="text-lg mt-6 text-gray-500 text-center">
        Last Updated: June 27, 2025
      </p>
    </div>

    <div className="relative z-10 max-w-4xl text-left space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Overview</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget is committed to protecting your privacy. This policy explains how we handle your data 
          when you use our budget management application. The most important thing to know: <strong>your financial 
          data stays in your Google Sheets, and we never access or store it on our servers.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
        <p className="mb-4 text-gray-700">We collect minimal information necessary to provide our services:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li><strong>Account Information:</strong> Email address associated with your Google account (for authentication only)</li>
          <li><strong>Purchase Information:</strong> Transaction details when you purchase access (processed by our payment provider)</li>
          <li><strong>Usage Analytics:</strong> Basic app usage statistics (feature usage, error logs) to improve the service</li>
          <li><strong>Support Communications:</strong> Any information you provide when contacting support</li>
        </ul>
        <p className="mb-4 text-gray-700">
          <strong>We do NOT collect or store:</strong> Your financial data, budget information, transaction details, 
          or any content from your Google Sheets.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How Your Financial Data is Handled</h2>
        <p className="mb-4 text-gray-700">
          <strong>Your budget data never leaves Google's servers:</strong>
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>All financial data remains in your personal Google Sheets</li>
          <li>The app accesses your spreadsheet directly through Google's APIs</li>
          <li>We cannot see, store, or access your financial information</li>
          <li>You maintain full control and can revoke access at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Google Account Permissions</h2>
        <p className="mb-4 text-gray-700">
          When you authorize Simplify Budget, you grant us permission to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Access only the specific budget spreadsheet you connect</li>
          <li>Read and write data to manage your budget entries</li>
          <li>Store your preferences using Google's property service</li>
        </ul>
        <p className="mb-4 text-gray-700">
          The app <strong>cannot</strong> access other files in your Google Drive or any spreadsheets you haven't 
          explicitly connected. As developers, we have <strong>no ability to see or access any of your data</strong> - 
          the app runs entirely in your browser with your permissions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. How We Use Collected Information</h2>
        <p className="mb-4 text-gray-700">The limited information we collect is used to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Authenticate your access to the application</li>
          <li>Process and verify your payment</li>
          <li>Provide customer support when requested</li>
          <li>Improve app performance and fix bugs</li>
          <li>Send important service updates (with your consent)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Sharing & Third Parties</h2>
        <p className="mb-4 text-gray-700">
          We do <strong>not</strong> sell, rent, or share your personal information. We work with these service providers:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li><strong>Payment Processors:</strong> To handle secure transactions (they don't receive your financial data from sheets)</li>
          <li><strong>Google APIs:</strong> To enable spreadsheet functionality</li>
          <li><strong>Analytics Services:</strong> To understand app usage patterns (anonymized data only)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We implement security measures to protect your information:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>All data transmission occurs over encrypted HTTPS connections</li>
          <li>We don't store sensitive financial data on our servers</li>
          <li>Access to user information is restricted to authorized personnel only</li>
          <li>Regular security reviews of our systems and practices</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Rights and Choices</h2>
        <p className="mb-4 text-gray-700">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li><strong>Access:</strong> Request information about what data we have about you</li>
          <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
          <li><strong>Revoke Access:</strong> Remove app permissions through your Google account settings</li>
          <li><strong>Data Portability:</strong> Your financial data is already in your Google Sheets</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Cookies & Tracking</h2>
        <p className="mb-4 text-gray-700">
          Our application may use:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>Essential cookies for authentication and session management</li>
          <li>Analytics cookies to understand usage patterns (can be disabled)</li>
          <li>No advertising or third-party tracking cookies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Children's Privacy</h2>
        <p className="mb-4 text-gray-700">
          Simplify Budget is not intended for children under 13. We do not knowingly collect information from 
          children. If you believe a child has provided us with information, please contact us immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy periodically. We will notify you of significant changes via email 
          or through the application. Continued use after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          For privacy-related questions or to exercise your rights, please contact us at:
        </p>
        <p className="text-gray-700">
          Email: contact@simplifybudget.com<br/>
          Website: simplifybudget.com
        </p>
      </section>
    </div>
  </main>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Suspense fallback={<Loading />}>
        <PrivacyContent />
      </Suspense>
    </div>
  );
}