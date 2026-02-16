import './globals.css'
import React from 'react';
import { kanit } from './fonts'
import Script from 'next/script'
import ClientLayout from './ClientLayout'
import { RemoveChildLogger } from './debug/remove-child-logger'
import ATSManager from "./components/ats";
import { ConsentProvider } from './context/ConsentContext'

export const metadata = {
  title: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย',
  description: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย',
  keywords: 'TeroAsia, ข่าวบันเทิง, กีฬา, มวย, ช่อง 7HD',
  icons: {
    icon: [{ rel: 'icon', url: '/images/favicon.ico' }]
  },
  links: [
    // Swiper CSS - โหลดก่อนทุกอย่าง
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    },
    // Animate CSS
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tero Asia",
    alternateName: "เทโรเอเชีย",
    url: "https://teroasia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://teroasia.com/images/logo_tero.png",
      width: "600",
      height: "60"
    },
    description: "เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย",
    sameAs: [
      "https://www.facebook.com/teroasia",
      "https://www.youtube.com/teroasia",
      "https://www.instagram.com/teroasia"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["Thai", "English"]
    }
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tero Asia",
    url: "https://teroasia.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://teroasia.com/search?q={query}",
      "query-input": "required name=query"
    }
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: "https://teroasia.com"
      }
    ]
  };

  return (
    <html lang="th">
      <head>
        {/* Critical CSS Inline - สำคัญมาก! */}
        <style dangerouslySetInnerHTML={{
          __html: `
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
          }
          body { 
            font-family: ${kanit.style.fontFamily};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: #fff;
            overflow-x: hidden;
          }
          img { 
            max-width: 100%; 
            height: auto;
            display: block;
          }
          a {
            text-decoration: none;
            color: inherit;
          }
          button {
            font-family: inherit;
          }
        `}} />

        {/* โหลด CSS ทันที - ไม่ต้องรอ JavaScript */}
        {/* <link rel="stylesheet" href="/assets/css/bundle.min.css" /> */}

        <link rel="stylesheet" href="/css/becookie.css?V=8" />

        {/* Swiper & Animate CSS จาก CDN */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        {/* Preconnect */}
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://matomo.teroasia.com" />
        <link rel="preconnect" href="https://www.becookies.tech" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite).replace(/</g, "\\u003c") }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") 
          }}
        />

        {/* Block Criteo */}
        <Script id="block-criteo-iframe" strategy="beforeInteractive">
          {`
            new MutationObserver((mutations) => {
              for (const m of mutations) {
                m.addedNodes.forEach((node) => {
                  if (
                    node.nodeName === "IFRAME" &&
                    node.src?.includes?.("gum.criteo.com")
                  ) {
                    node.remove();
                  }
                });
              }
            }).observe(document.body, { childList: true, subtree: true });
          `}
        </Script>

        {/* Google Ads / GPT */}
        <Script
          id="googletag"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          strategy="lazyOnload"
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WHHB3JH');
            `,
          }}
        />

        {/* Google Analytics Consent Default */}
        <Script
          id="consent-default"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `
          }}
        />

        {/* Matomo Analytics */}
        <Script
          id="matomo"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="//matomo.teroasia.com/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `
          }}
        />

        {/* becookies */}
        <Script
          id="becookies"
          strategy="afterInteractive"
          src="https://www.becookies.tech/script.js"
          data-id="6594fd1b3208111d985689f9"
        />
      </head>
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden homepage1-body`}
        suppressHydrationWarning={true}
      >
        <React.StrictMode>
          <ConsentProvider>
            {/* <ATSManager /> */}
            <RemoveChildLogger />

            {/* GTM Fallback (no-JS) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WHHB3JH"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>

            {/* Main App Layout */}
            <ClientLayout>
              {children}
            </ClientLayout>
          </ConsentProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}