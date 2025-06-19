import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren, useEffect, useState} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  // Dark/Light mode toggle
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLight]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}

        <link href="resume/favicon.ico" rel="icon" sizes="any" />
        <link href="icon.svg" rel="icon" type="image/svg+xml" />
        <link href="apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="resume/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
      {/* Toggle button */}
      <button
        onClick={() => setIsLight(l => !l)}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1000,
          background: 'rgba(30,30,30,0.85)',
          color: '#fff',
          border: 'none',
          borderRadius: 24,
          padding: '0.7em 1.2em',
          fontFamily: 'inherit',
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
        aria-label="Toggle dark/light mode"
      >
        {isLight ? '🌙 Dark' : '☀️ Light'}
      </button>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
