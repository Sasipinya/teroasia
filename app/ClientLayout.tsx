'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './components/templates/header'
import Footer from './components/templates/footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Debug: ตรวจสอบว่า CSS โหลดหรือไม่
    console.log('📊 Loaded stylesheets:')
    document.querySelectorAll('link[rel="stylesheet"]').forEach(el => {
      console.log('  -', el.getAttribute('href'))
    })

    // Becookie observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const img = document.getElementById('becookies-float-button') as HTMLImageElement
          if (img && !img.alt) {
            img.alt = "becookie teroasia"
          }
          const altbt = document.getElementById('becookies-cookie-setting-btn') as HTMLImageElement
          if (altbt && !altbt.alt) {
            altbt.ariaLabel = "becookie teroasia"
          }
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

  // หน้า home ไม่แสดง Header/Footer
  if (pathname === '/') {
    return <>{children}<Footer page="home" /></>
  }

  // หน้าอื่น แสดง Header/Footer
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer page="nothome" />
    </>
  )
}