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
      <WhySimplifySection />
      <TemplateSection />
      <FAQSection />
      <FAQSchema />
    </main>
  );
}
