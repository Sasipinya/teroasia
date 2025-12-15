import './globals.css'
import 'animate.css'
import React from 'react';
import { kanit } from './fonts'
import Script from 'next/script'

import Header from './components/templates/header'
import Footer from './components/templates/footer'
import ClientLayout from './ClientLayout'
import { RemoveChildLogger } from './debug/remove-child-logger'
import ATSManager from "./components/ats";
import { ConsentProvider } from './context/ConsentContext'
import InnityAdsMobile from "./components/InnityAdsMobile";

export const metadata = {
  title: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
  description: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
  keywords: 'TeroAsia, ข่าวบันเทิง, กีฬา, มวย, ช่อง 7HD, One Championship, การ์ตูน',
  icons: {
    icon: [{ rel: 'icon', url: '/images/favicon.ico' }]
  }
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
    url: "https://teroasia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://teroasia.com/images/logo_tero.png"
    },
    sameAs: [
      "https://www.facebook.com/teroasia",
      "https://www.youtube.com/teroasia",
      "https://www.instagram.com/teroasia"
    ]
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
  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite).replace(/</g, "\\u003c") }}
        />
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
        <link rel="stylesheet" href="/css/becookie.css?V=8" />
      </head>
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <React.StrictMode>
          <ConsentProvider>
            {/* AnyMind Ads */}


            <ATSManager />

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
              <Header />
              <main className="min-h-screen">
                {children}
                 {/* <InnityAdsMobile /> */}
              </main>
              <Footer />

            </ClientLayout>
          </ConsentProvider>

        </React.StrictMode>
      </body>
    </html>
  );
}
