'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Service {
  id: number
  name: string
  href: string | null
  img: string
  duration: number
  path?: string
}

const SERVICES: Service[] = [
  
  { 
    id: 6,
    name: 'Thailand Box Office',
    href: 'https://thailandboxoffice.com/', 
    img: '10THbox.png', 
    duration: 1000 
  },
  { 
    id: 7,
    name: 'Bsite',
    href: 'https://bsite.in/', 
    img: '11Bsite.png', 
    duration: 1100 
  },
  { 
    id: 8,
    name: 'Thailand Post Mart',
    href: 'https://www.thailandpostmart.com', 
    img: '12THPM.png', 
    duration: 1200 
  },
  { 
    id: 9,
    name: 'Major Cineplex',
    href: 'https://www.majorcineplex.com/', 
    img: '6Major.png', 
    duration: 800 
  },
  { 
    id: 10,
    name: 'Thai Wave Club',
    href: 'https://thaiwave.club/th/', 
    img: '13Thaiwave.png', 
    duration: 900 
  },
  { 
    id: 11,
    name: 'Popolay TV',
    href: 'https://www.facebook.com/popolaytv/?locale=th_TH', 
    img: '14popolay.png', 
    duration: 1000 
  },
  { 
    id: 12,
    name: 'BrAintech',
    href: null, 
    img: '15brAintech.png', 
    duration: 1100 
  },
  { 
    id: 13,
    name: "Let's Play",
    href: null, 
    img: '16Letsplay.png', 
    duration: 900 
  },
  { 
    id: 14,
    name: 'HITZ Thailand',
    href: 'https://www.facebook.com/HITZ.TH/?locale=th_TH', 
    img: 'htz-th.jpg', 
    duration: 1000, 
    path: '2026/01' 
  },
]

interface BrandCardProps {
  service: Service
  isClient: boolean
  index: number
}

function BrandCard({ service, isClient, index }: BrandCardProps) {
  const imgSrc = `https://terodigital.com/wp-content/uploads/${service.path || '2025/07'}/${service.img}`
  
  const aosProps = isClient 
    ? { 
        'data-aos': 'zoom-in' as const, 
        'data-aos-duration': service.duration.toString() 
      } 
    : {}

  const imageContent = (
    <div className="brand-box">
      <Image
        src={imgSrc}
        alt={service.name}
        width={200}
        height={100}
        className="w-auto h-auto"
        loading={index < 8 ? 'eager' : 'lazy'}
      />
    </div>
  )

  return (
    <div className="col-6 col-md-6 col-lg-3" {...aosProps}>
      {service.href ? (
        <Link
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-link"
        >
          {imageContent}
        </Link>
      ) : (
        imageContent
      )}
    </div>
  )
}

export default function TeroServices() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="brands1-section-area sp2">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="brand-header heading2 space-margin60 text-center">
              <h2 className="text-anime-style-3">Tero Digital Services</h2>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          {SERVICES.map((service, index) => (
            <BrandCard 
              key={service.id} 
              service={service} 
              isClient={isClient}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}