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
  title: "Simplify Budget - Visual Grid Budget Tracker | $15 Once, Family Sharing Included",
  description: "Track expenses in seconds with visual grid. Share with family instantly. Works on any device, no download needed. Google-verified secure. Your data stays in your Drive. $15 lifetime access.",
  keywords: "visual budget tracker, family expense sharing app, one time payment budget app, google drive budget tracker, no subscription expense tracker, instant setup budget app, mint alternative, ynab alternative",
  openGraph: {
    title: "Simplify Budget - The Smart Way Families Track Money Together",
    description: "5-second visual expense entry. Share with spouse/kids instantly. Works on any device. Google-verified secure. Pay $15 once, own forever. 30-day free trial.",
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