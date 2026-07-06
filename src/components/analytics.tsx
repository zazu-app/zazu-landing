"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Vercel Web Analytics is cookieless (loads always). Google Analytics (GA4)
// sets cookies, so it only loads once the visitor consents to analytics.
export default function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const apply = () => setAnalyticsAllowed(Boolean(readConsent()?.analytics));
    apply();
    window.addEventListener(CONSENT_EVENT, apply);
    return () => window.removeEventListener(CONSENT_EVENT, apply);
  }, []);

  return (
    <>
      <VercelAnalytics />
      {GA_ID && analyticsAllowed && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
    </>
  );
}
