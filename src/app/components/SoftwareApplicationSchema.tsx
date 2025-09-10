export default function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Simplify Budget",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Simplify Budget"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "Budget app that actually works. Visual expense tracking with Google Sheets integration. Best YNAB and Mint alternative - no monthly fees, works for families. Track expenses in 5 seconds.",
    "screenshot": "https://simplifybudget.com/simplifybudget.jpg",
    "featureList": [
      "Visual monthly expense calendar",
      "5-second expense entry",
      "Family budget sharing",
      "YNAB alternative - no monthly fees",
      "Mint replacement after shutdown", 
      "Manual expense tracking",
      "Google Sheets integration",
      "Subscription management",
      "30-day free trial",
      "One-time $15 payment"
    ],
    "softwareVersion": "1.0",
    "url": "https://simplifybudget.com",
    "sameAs": [
      "https://simplifybudget.com/app"
    ],
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://script.google.com/macros/s/AKfycbxzQyt4DRFwscUe5INomAYM2yDsYVbU1PuPkGJQyPSMb5pfPeL4XWxoDIBeOYmCoaax/exec",
      "name": "Start Free Trial"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}