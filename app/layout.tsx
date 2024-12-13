

import "./globals.css";
import 'animate.css';
import { kanit } from "./fonts";
import Header from "./components/templates/header";
import Footer from "./components/templates/footer";
import AuthProvider from './components/AuthProvider';


import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`} suppressHydrationWarning={true} >
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
