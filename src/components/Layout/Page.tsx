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
        <meta name="keywords" content="Miguel Romero, Platform Lead Manager, Engineering Manager, Angular, Java, Node.js, Spring Boot, Santander Digital Services, Insurance Technology, Budget Management, Stakeholder Management, Vendor Management, Software Engineering, Madrid, Spain" />
        <meta name="author" content="Miguel Romero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mromerolopez.github.io/resume/" />

        {/* Favicon and Icons */}
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="https://mromerolopez.github.io/resume/" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Miguel Romero" property="og:site_name" />
        <meta content="https://mromerolopez.github.io/resume/assets/profilepic.jpg" property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="Miguel Romero - Full Stack Engineer & Team Lead" property="og:image:alt" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://mromerolopez.github.io/resume/assets/profilepic.jpg" name="twitter:image" />
        <meta content="@Maldercito" name="twitter:creator" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#181818" />
        <meta name="msapplication-TileColor" content="#181818" />

        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/resume/assets/profilepic.jpg" as="image" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Miguel Romero",
              "jobTitle": "Platform Lead Manager",
              "worksFor": {
                "@type": "Organization",
                "name": "Santander Digital Services"
              },
              "url": "https://mromerolopez.github.io/resume/",
              "sameAs": [
                "https://github.com/mromerolopez",
                "https://www.linkedin.com/in/miguel-romero-lópez-916bba98/",
                "https://twitter.com/Maldercito"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              },
              "knowsAbout": [
                "Angular",
                "TypeScript",
                "React",
                "Node.js",
                "Java",
                "Spring Boot",
                "Golang",
                "Software Engineering",
                "Engineering Leadership",
                "Budget Management",
                "Stakeholder Management",
                "Vendor Management",
                "Strategic Planning",
                "Insurance Technology"
              ],
              "description": "Platform Lead Manager overseeing 5 engineering areas in the Insurance division of Banco Santander, with a team of 80+ professionals and a ~€20M annual budget. 11+ years of experience bridging technical leadership and strategic delivery."
            })
          }}
        />
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
          background: isLight ? 'rgba(30,30,30,0.85)' : 'rgba(255,255,255,0.85)',
          color: isLight ? '#fff' : '#111',
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
