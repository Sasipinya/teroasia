'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './components/templates/header'
import Footer from './components/templates/footer'
import Header1 from './components/home/layout/header/Header1'
import MobileMenu from './components/home/layout/MobileMenu'
import ATSManager from './components/ats'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [scroll, setScroll] = useState<boolean>(false)
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
  const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)
  const [isSearch, setSearch] = useState<boolean>(false)
  const handleSearch = (): void => setSearch(!isSearch)
  const cssVersion = new Date().toISOString().split('T')[0].replace(/-/g, '')

 // Init AOS ครั้งเดียว
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 0,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scroll])

  useEffect(() => {

    document.querySelectorAll('link[rel="stylesheet"]').forEach(el => {
      
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
    return <>
      {/* Preload CSS - โหลดก่อนทุกอย่าง */}
      <link rel="preload" href="/assets/css/vendor/bootstrap.min.css" as="style" />
      <link rel="preload" href="/assets/css/vendor/fontawesome.css" as="style" />
      <link rel="preload" href="/assets/css/main.css" as="style" />

      {/* โหลด CSS จริง */}
      <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
      <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/vendor/slick-slider.css" />
      <link rel="stylesheet" href="/assets/css/vendor/nice-select.css" />
      <link rel="stylesheet" href="/assets/css/vendor/odometer.css" />
      <link rel="stylesheet" href={`/assets/css/vendor/mobile.css?v=${cssVersion}`} />
      <link rel="stylesheet" href="/assets/css/vendor/sidebar.css" />
      <link rel="stylesheet" href={`/assets/css/main.css?v=${cssVersion}`} />


      <div id="top" />

      <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />
      <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
      {children}
      <Footer page="home" />
    </>
  }

  // หน้าอื่น แสดง Header/Footer
  return (
    <>
      <ATSManager />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer page="nothome" />
    </>
  )
}