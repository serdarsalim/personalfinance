"use client";

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Your GTM container ID
const GTM_ID = 'GTM-M9LLX3SW';

export default function GoogleTagManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark component as client-side rendered
    setIsClient(true);
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    if (pathname) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
        query: searchParams ? Object.fromEntries(searchParams.entries()) : {}
      });
    }
  }, [pathname, searchParams]);

  // Only render script on client-side to prevent hydration mismatch
  if (!isClient) return null;

  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `
        }}
        onError={(e) => {
          console.error('GTM script failed to load:', e);
        }}
      />
      
      {/* Google Tag Manager - No Script */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}