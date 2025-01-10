'use client'

import { useEffect, useState, ReactNode } from 'react'

interface MobileOnlyProps {
  children: ReactNode
}

const MobileOnly = ({ children }: MobileOnlyProps) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // ฟังก์ชันตรวจสอบ mobile device
    const checkIsMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase()
      const mobileKeywords = [
        'android',
        'webos',
        'iphone',
        'ipad',
        'ipod',
        'blackberry',
        'windows phone'
      ]
      return mobileKeywords.some(keyword => userAgent.includes(keyword))
    }

    // ฟังก์ชันจัดการ resize event
    const handleResize = () => {
      setShouldRender(checkIsMobile())
    }

    // เช็คครั้งแรกตอน mount
    handleResize()

    // เพิ่ม event listener สำหรับ resize
    window.addEventListener('resize', handleResize)

    // Cleanup เมื่อ component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // ไม่แสดงอะไรถ้าไม่ใช่ mobile
  if (!shouldRender) {
    return null
  }

  return <>{children}</>
}

export default MobileOnly