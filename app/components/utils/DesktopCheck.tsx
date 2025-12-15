'use client'
import { ReactNode } from 'react'
import { useDeviceDetect } from '@/hooks/useDeviceDetect'



interface DesktopOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

export const DesktopOnly = ({ 
  children, 
  fallback = <></> 
}: DesktopOnlyProps) => {
  const { isMobile } = useDeviceDetect()

  if (isMobile) {
    return fallback
  }

  return children
}