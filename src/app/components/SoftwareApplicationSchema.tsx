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
    "description": "Visual expense tracking app that works with Google Sheets. Track expenses with one tap, manage subscriptions, and build wealth habits. One-time payment, no subscriptions.",
    "screenshot": "https://simplifybudget.com/simplifybudget.jpg",
    "featureList": [
      "Visual monthly expense grid",
      "One-tap expense entry",
      "Subscription tracking",
      "Budget management",
      "Google Sheets integration",
      "Multi-user support",
      "30-day free trial",
      "One-time payment"
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