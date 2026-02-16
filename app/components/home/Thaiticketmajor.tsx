'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

interface Event {
  id: number
  event_name: string
  event_img_url: string
  event_url: string
  date_text: string
  start_date: string
  end_date: string
  venue: string
  venue_url_ttm: string
}

interface ThaiticketmajorProps {
  data: Event[]
  maxDisplay?: number
}

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: '.owl-next',
    prevEl: '.owl-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
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
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
}

export default function Thaiticketmajor({ data, maxDisplay = 12 }: ThaiticketmajorProps) {
  const displayEvents = data?.slice(0, maxDisplay) || []

  if (displayEvents.length === 0) {
    return null
  }

  return (
    <div className="team7-section-area sp1">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-5 m-auto">
            <div className="team-header space-margin60 heading10 text-center">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/img/logo/logo-ttm-tm.png"
                  alt="THAITICKETMAJOR"
                  width={300}
                  height={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="row">
          <div className="col-lg-12 team-slider-area7">
            <Swiper {...swiperOptions} className="owl-carousel">
              {displayEvents.map((event, index) => (
                <SwiperSlide key={event.id} className="team-widget-boxarea">
                  {/* Event Image */}
                  <div className="img1 image-anime">
                    <Image
                      src={event.event_img_url}
                      alt={event.event_name}
                      width={400}
                      height={400}
                      className="w-100 h-auto"
                      loading={index < 6 ? 'eager' : 'lazy'}
                    />
                  </div>

                  <div className="space20" />

                  {/* Event Details */}
                  <div className="text-area">
                    {/* Venue */}
                    {event.venue && (
                      <span className="flex text-xs items-center gap-1">
                        <Image
                          src="/assets/img/icons/location1.svg"
                          alt="Location"
                          width={14}
                          height={14}
                        />
                        {event.venue}
                      </span>
                    )}

                    <div className="space8" />

                    {/* Event Name Link */}
                    <Link
                      href={event.event_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-link"
                    >
                      {event.event_name}
                    </Link>

                    <div className="space8" />

                    {/* Event Date */}
                    <p>{event.date_text}</p>

                    <div className="space8" />

                    {/* Buy Ticket Button */}
                    {event.event_url && (
                      <div className="btn-area1">
                        <Link
                          href={event.event_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vl-btn1 text-white after:h-7 after:w-7 after:left-[15px] after:top-[3px]"
                          style={{ padding: '4px 32px', width: '100%' }}
                        >
                          ซื้อบัตร
                        </Link>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="owl-nav">
              <button
                type="button"
                className="owl-prev h1p"
                aria-label="Previous slide"
              >
                <i className="fa-solid fa-angle-left" />
              </button>
              <button
                type="button"
                className="owl-next h1n"
                aria-label="Next slide"
              >
                <i className="fa-solid fa-angle-right" />
              </button>
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="row">
          <div className="btn-area1 text-end mt-3">
            <Link className="vl-btn8" href="https://www.thaiticketmajor.com/">
              <span className="demo">VIEW MORE</span>
              <span className="arrow">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}