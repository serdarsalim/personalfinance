import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from 'next/dynamic';
import FAQSchema from './components/FAQSchema';

// Dynamically import components with error boundaries
const TemplateSection = dynamic(() => import("./components/sections/TemplateSection"), { 
  ssr: true,
  loading: () => <SectionLoader />
});
const FeatureCarousel = dynamic(() => import("./components/sections/FeatureCarousel"), {
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

// Update metadata
export const metadata: Metadata = {
  title: "Budget App That Actually Works | No Monthly Fees 2025",
  description: "Stop forgetting where your money goes. Track expenses in 5 seconds, works for families. $15 lifetime - no subscriptions. Try free 30 days.",
  keywords: "best budget app, budget app that works, expense tracker app, family budget app, no subscription budget app, manual expense tracking, ynab alternative, mint alternative, budget tracker 2025",
  openGraph: {
    title: "Budget App That Actually Works | No Monthly Fees",
    description: "Stop forgetting where your money goes. Track expenses in 5 seconds, works for families. $15 lifetime - try free 30 days.",
    url: "https://simplifybudget.com",
    siteName: "Simplify Budget",
    type: "website",
    images: [{
      url: "https://simplifybudget.com/simplifybudget.jpg",
      width: 1200,
      height: 630,
      alt: "Simplify Budget - Visual Family Budget Tracking App"
    }]
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
      <FeatureCarousel />
      <WhySimplifySection />
      <FAQSection />
      <FAQSchema />
    </main>
  );
}