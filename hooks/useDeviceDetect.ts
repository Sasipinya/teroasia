'use client'

import { useState, useEffect } from 'react'

export const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768) // You can adjust this breakpoint
    }

    // Initial check
    checkDevice()

    // Add resize listener
    window.addEventListener('resize', checkDevice)

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile }
}