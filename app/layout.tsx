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



export interface RootLayoutProps {
  children: React.ReactNode;
}

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <head>
        
      </head>
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
       
        {/* <AuthProvider> */}
          <Header/>
          <div className="min-h-screen my-auto">
            {children}
          </div>
          <Footer/>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

