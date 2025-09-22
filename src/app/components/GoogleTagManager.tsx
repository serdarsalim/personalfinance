"use client";

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (command: string, id: string, config?: { [key: string]: any; page_path?: string }) => void;
  }
}

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-SE5CEND7KJ';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `
        }}
      />
    </>
  );
}