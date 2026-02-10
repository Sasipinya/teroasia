'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

interface Program {
  id: number
  title: string
  description: string
  thumbnail: string
  logo: string
  url: string
  alt: string
}

const programs: Program[] = [
  {
    id: 1,
    title: 'ถกไม่เถียง',
    description: 'ออกอากาศทางช่อง one31 ทุกวันจันทร์ - ศุกร์ เวลา 15.45 - 16.30 น. และรับชมรีรันได้ทางช่อง GMM25 เวลา 18.00 - 18.45 น.',
    thumbnail: '/assets/img/elements/thediscussion-thumb_0.jpg',
    logo: 'https://terodigital.com/wp-content/uploads/2025/07/1tok.png',
    url: 'http://ถกไม่เถียง.com/',
    alt: 'ถกไม่เถียง - The Discussion',
  },
  {
    id: 2,
    title: 'เงินทองของจริง',
    description: 'ออกอากาศทุกวันจันทร์ - ศุกร์ เวลา 07.50 - 08.00 น. ทางช่อง one31 รับชมรีรันได้ทางช่อง GMM25 เวลา 10.30 - 10.40 น. และช่องทางออนไลน์ TERO Digital',
    thumbnail: '/assets/img/elements/money-guru-thumb_0.jpg',
    logo: 'https://terodigital.com/wp-content/uploads/2025/07/3Money.png',
    url: 'https://www.เงินทองของจริง.com/',
    alt: 'เงินทองของจริง - Money Guru',
  },
  {
    id: 3,
    title: 'Kidsfun',
    description: '"Kids Fun คิดฝัน" คือพื้นที่แห่งความสุขและการเรียนรู้สำหรับเด็กๆ',
    thumbnail: '/assets/img/elements/kidsfun-thumb_0.jpg',
    logo: 'https://terodigital.com/wp-content/uploads/2025/07/2kidsfun.png',
    url: 'https://teroasia.com/program/kidsnews',
    alt: 'Kidsfun คิดฝัน',
  },
]

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
}

export default function Terodigital() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="memory1-section-area sp1">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="flex justify-center blog-header text-center heading2 space-margin60">
              <Image
                src="https://terodigital.com/wp-content/uploads/2025/06/LogoTeroDigital_www-2.png"
                alt="Tero Digital"
                width={200}
                height={80}
                priority
              />
            </div>
          </div>
        </div>

        {/* Programs Slider */}
        <div className="row">
          <div className="col-lg-12 memory-slider-area">
            <Swiper {...swiperOptions} className="owl-carousel">
              {programs.map((program, index) => (
                <SwiperSlide key={program.id} className="memory-boxarea">
                  {/* Program Thumbnail */}
                  <div className="img1 image-anime">
                    <Image
                      src={program.thumbnail}
                      alt={program.alt}
                      width={600}
                      height={400}
                      className="w-100 h-auto"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>

                  {/* Program Content */}
                  <div className="content-area">
                    {/* Program Logo */}
                    <Image
                      src={program.logo}
                      alt={`${program.title} logo`}
                      width={150}
                      height={60}
                      className="logo1 keyframe5"
                    />

                    {/* Arrow Link */}
                    <div className="arrow">
                      <Link
                        href={program.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${program.title} website`}
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>

                    <div className="space18" />

                    {/* Program Description */}
                    <p>{program.description}</p>

                    <div className="space12" />

                    {/* Program Title Link */}
                    <Link
                      href={program.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {program.title}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}