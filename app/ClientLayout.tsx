// app/ClientLayout.tsx
'use client'

import { useEffect } from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
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

  return <>{children}</>
}