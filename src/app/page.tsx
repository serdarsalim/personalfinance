import { Suspense } from "react";
import { Metadata } from "next";
import TemplateSection from "./components/sections/TemplateSection";
import FAQSection from "./components/sections/FAQSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import WhyTrackSection from "./components/sections/WhyTrackSection";
import HeroSection from "./components/sections/HeroSection";

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
    <>
        <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TemplateSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <section className="bg-gradient-to-r from-blue-50 to-white py-20 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
              Let Templates Our Help You Transform Your Finances
            </h2>
            <FeaturesSection />
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyTrackSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HowItWorksSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
    </>
  );
}