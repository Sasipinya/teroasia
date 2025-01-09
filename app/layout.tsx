import "./globals.css";
import 'animate.css';
import { kanit } from "./fonts";
import Header from "./components/templates/header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/templates/footer";
import AuthProvider from './components/AuthProvider';
import { headers } from 'next/headers'
import { GA_TRACKING_ID } from '@/lib/gtag'
import Script from 'next/script'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}



export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <Script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WHHB3JH');`,
        }}>
        </Script>
        {/* Matomo script */}
        <Script dangerouslySetInnerHTML={{
          __html: `var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.teroasia.com/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();`,
        }}>
        </Script>
        <Script
          id="googletagservices"
          strategy="afterInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
      </head>
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <noscript>
          <iframe src="//www.googletagmanager.com/ns.html?id=GTM-N843772" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        {/* <AuthProvider> */}
        <Header />
        <div className="min-h-screen my-auto">
          {children}
        </div>
        <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

