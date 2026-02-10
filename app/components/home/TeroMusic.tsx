'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Event {
  id: number
  event_name: string
  event_img_url: string
  event_url: string
  date_text: string
  start_date: string
  event_desc_music: string
}

interface TeroMusicProps {
  data: Event[]
  maxDisplay?: number
}

export default function TeroMusic({ data, maxDisplay = 4 }: TeroMusicProps) {
  const [isClient, setIsClient] = useState(false)
  const displayEvents = data?.slice(0, maxDisplay) || []

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (displayEvents.length === 0) {
    return null
  }

  return (
    <div className="blog1-section-area">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="blog-header text-center heading2 space-margin60">
              <div className="flex justify-center items-center">
                <Image
                  src="http://teromusic.com/img/top-logo.png"
                  alt="Bectero Music"
                  width={200}
                  height={80}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="row">
          {displayEvents.map((event, index) => (
            <div
              key={event.id}
              className="col-lg-3 col-md-6"
              {...(isClient && {
                'data-aos': 'zoom-in',
                'data-aos-duration': String(800 + index * 200),
              })}
            >
              <div className="blog1-auhtor-boxarea">
                {/* Event Image */}
                <div className="img1 image-anime">
                  <Image
                    src={event.event_img_url}
                    alt={event.event_name}
                    width={400}
                    height={400}
                    className="w-100 h-auto"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Event Content */}
                <div className="content-area">
                  {/* Date */}
                  <ul>
                    <li>
                      <span className="flex items-center gap-1">
                        <Image
                          src="/assets/img/icons/calender1.svg"
                          alt="Date"
                          width={16}
                          height={16}
                        />
                        {event.date_text}
                      </span>
                    </li>
                  </ul>

                  <div className="space20" />

                  {/* Event Name Link */}
                  <Link
                    href={event.event_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-title"
                  >
                    {event.event_name}
                  </Link>

                  <div className="space24" />

                  {/* Read More Button */}
                  <div className="btn-area1">
                    <Link
                      href={event.event_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vl-btn2"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}