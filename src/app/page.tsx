import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from 'next/dynamic';

// Dynamically import components with error boundaries
const TemplateSection = dynamic(() => import("./components/sections/TemplateSection"), { 
  ssr: true,
  loading: () => <SectionLoader />
});
const FAQSection = dynamic(() => import("./components/sections/FAQSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const HowItWorksSection = dynamic(() => import("./components/sections/HowItWorksSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const FeaturesSection = dynamic(() => import("./components/sections/FeaturesSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const WhyTrackSection = dynamic(() => import("./components/sections/WhyTrackSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const HeroSection = dynamic(() => import("./components/sections/HeroSection"), {
  ssr: true,
  loading: () => <SectionLoader />
});

// Define page metadata for SEO
export const metadata: Metadata = {
  title: "Simplify Budget | Free Financial Templates",
  description: "Free and premium Google Sheets budget templates to help manage your finances and track expenses easily.",
  openGraph: {
    title: "Simplify Budget | Free Financial Templates",
    description: "Free and premium Google Sheets budget templates to help manage your finances and track expenses easily.",
    url: "https://www.simplifybudget.com",
    siteName: "Simplify Budget",
    type: "website"
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
      <TemplateSection />
      
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
            Let Our Templates Help You Transform Your Finances
          </h2>
          <FeaturesSection />
        </div>
      </section>

      <WhyTrackSection />
      <HowItWorksSection />
      <FAQSection />
    </main>
  );
}