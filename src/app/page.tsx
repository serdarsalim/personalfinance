import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import FAQSchema from './components/FAQSchema';

// Dynamically import components with error boundaries
const TemplateSection = dynamic(() => import("./components/sections/TemplateSection"), { 
  ssr: true,
  loading: () => <SectionLoader />
});
const WhySimplifySection = dynamic(() => import("./components/sections/WhySimplifySection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const FAQSection = dynamic(() => import("./components/sections/FAQSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const HeroSection = dynamic(() => import("./components/sections/HeroSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const AboutFounderSection = dynamic(() => import("./components/sections/AboutFounderSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});

// Update metadata
export const metadata: Metadata = {
  title: "Simplify Budget - Budget App That Actually Works | YNAB Alternative",
  description: "Simplify Budget: The budget app that works. YNAB alternative with no monthly subscription. Track expenses, family budgeting, net worth tracking. $15 one-time payment.",
  keywords: "simplify budget, budget app, ynab alternative, family budget, net worth tracking, no subscription budget app, expense tracker",
  openGraph: {
    title: "Simplify Budget - Budget App That Actually Works",
    description: "YNAB alternative budget app with no monthly subscription. Track expenses, family budgeting, net worth tracking. $15 one-time payment.",
    url: "https://simplifybudget.com",
    siteName: "Simplify Budget",
    type: "website",
    images: [{
      url: "https://simplifybudget.com/simplifybudget.webp",
      width: 1200,
      height: 630,
      alt: "Simplify Budget - Visual Family Budget Tracking App"
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplify Budget - Budget App That Actually Works',
    description: 'YNAB alternative budget app with no monthly subscription. Track expenses, family budgeting, net worth tracking.',
    images: ['https://simplifybudget.com/simplifybudget.webp'],
  }
};

// Loading component for sections
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-blue-200 rounded-full"></div>
      <div className="space-y-4">
        <div className="h-4 bg-blue-200 rounded w-36"></div>
        <div className="h-4 bg-blue-200 rounded w-24"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutFounderSection />

      {/* YouTube Tutorial Video */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              See Simplify Budget in Action
            </h2>
            <p className="text-gray-600 text-lg">
              Watch this quick tutorial to see how easy it is to manage your budget
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/ziE2S8SgEo8"
              title="Simplify Budget Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <WhySimplifySection />
      {/* Flow CTA band to guide next step */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-gray-800 text-lg mb-4">
              Want to see how it works in practice?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start free trial
              </a>
              <a href="/how-it-works" className="px-6 py-3 bg-white text-blue-700 border border-blue-200 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn how it works
              </a>
            </div>
          </div>
        </div>
      </section>
      <TemplateSection />
      <FAQSection />
      <FAQSchema />
    </main>
  );
}
