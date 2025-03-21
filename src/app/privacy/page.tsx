"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
        <div className="relative z-10 max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-gray-900">
            Privacy Policy
          </h1>

          <p className="text-lg mt-6 text-gray-500 text-center">
            Last Updated: March 14, 2025
          </p>
        </div>

        <div className="relative z-10 max-w-4xl text-left space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="mb-4 text-gray-700">
              We collect minimal data necessary for improving our services. This may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Contact information if you reach out to us (e.g., email address).</li>
              <li>Basic analytics data (e.g., site visits, downloads).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">Your data is used for:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Providing customer support.</li>
              <li>Improving website performance.</li>
              <li>Sending occasional updates if you opt-in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Sharing & Third Parties</h2>
            <p className="mb-4 text-gray-700">
              We do <strong>not</strong> sell, rent, or share your personal information. 
              Third-party tools (like analytics providers) may collect non-identifiable browsing data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Your Data Protection Rights</h2>
            <p className="mb-4 text-gray-700">You can request:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Access to your stored data.</li>
              <li>Data deletion upon request.</li>
              <li>To opt out of tracking (where applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies & Tracking</h2>
            <p className="mb-4 text-gray-700">
              We may use cookies for functionality and analytics. You can disable cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Policy Updates</h2>
            <p className="mb-4 text-gray-700">
              We may update this Privacy Policy periodically. Continued use of our services means you accept any changes.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}