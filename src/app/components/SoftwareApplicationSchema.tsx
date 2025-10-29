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
    "description": "Calendar-based budgeting that saves your data to your own Google Drive. YNAB alternative and Mint replacement with no monthly fees. Fast expense entry, family sharing, and a 30-day free trial.",
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
      "name": "Start 30-Day Trial"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
