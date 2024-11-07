

import "./globals.css";
import { kanit } from "./fonts";
import Header from "./components/templates/header";
import Footer from "./components/templates/footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased bg-white overflow-x-hidden`} suppressHydrationWarning={true} >
       
        <Header/>
        <div className="min-h-screen my-auto">
        {children}
        </div> 
        <Footer/>
       
      </body>
    </html>
  );
}
