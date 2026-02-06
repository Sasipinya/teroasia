'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function AddClassBody() {
	const pathname = usePathname()

	useEffect(() => {
		const bodyElement = document.body // ใช้ document.body แทน querySelector
		
		if (!bodyElement) return

		// ลบ class เก่าก่อน
		bodyElement.classList.remove('homepage1-body')
		
		// เพิ่ม class ใหม่
		if (pathname === '/') {
			bodyElement.classList.add('homepage1-body')
		}

		// Scroll to top
		window.scrollTo(0, 0) // ใช้แบบง่ายกว่า
		
	}, [pathname])

	return null
}