import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { memo } from 'react';
import { usePageTracking } from '../hooks/usePageTracking';
import { reportWebVitals } from '../utils/web-vitals';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  // Track page views
  usePageTracking();

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-RVXZB8SSBM`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RVXZB8SSBM', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
      {/* Tu app */}
      <Component {...pageProps} />
    </>
  );
});

// Report Web Vitals
if (typeof window !== 'undefined') {
  reportWebVitals();
}

export default MyApp;
