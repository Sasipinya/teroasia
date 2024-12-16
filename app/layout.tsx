

import "./globals.css";
import 'animate.css';
import { kanit } from "./fonts";
import Header from "./components/templates/header";
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
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersResult = await headers();
  // const nonce = headersResult.get('x-nonce');
  return (
    <html lang="en">
       <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
          // nonce={nonce ?? ''}
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          // nonce={nonce ?? ''}
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
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
            `,
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
      </head>
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`} suppressHydrationWarning={true} >
          <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AuthProvider>
        <Header/>
        <div className="min-h-screen my-auto">
        {children}
        </div> 
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
