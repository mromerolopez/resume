import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import Script from 'next/script';
import { memo } from 'react';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RVXZB8SSBM');
        `}
      </Script>
      {/* Tu app */}
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
