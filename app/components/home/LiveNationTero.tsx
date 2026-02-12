'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import AOS from 'aos'

interface LiveNationEvent {
  id: number
  event_name: string
  event_img_url: string
  event_url: string
  date_text: string | null
  start_date: string
  end_date: string
  venue: string
  city_livenation: string
  ticket_url_livenation: string
  created_at: string
  updated_at: string
}

interface LiveNationTeroProps {
  data?: LiveNationEvent[]
}

export default function LiveNationTero({ data = [] }: LiveNationTeroProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  // Get current month and year
  const getCurrentMonthYear = () => {
    const now = new Date()
    const month = now.toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const year = now.getFullYear()
    return { month, year, fullText: `${month} ${year}` }
  }

  // Filter events for current month only
  const getCurrentMonthEvents = () => {
    const { fullText } = getCurrentMonthYear()
    return data.filter(event => {
      const date = new Date(event.start_date)
      const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase()
      const year = date.getFullYear()
      return `${month} ${year}` === fullText
    })
  }

  // Format event date for display
  const formatEventDate = (startDate: string, endDate: string): string => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    const dateOptions: Intl.DateTimeFormatOptions = { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
    
    if (startDate === endDate) {
      return start.toLocaleDateString('en-US', dateOptions)
    }
    
    return `${start.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} - ${end.toLocaleDateString('en-US', dateOptions)}`
  }

  const { month, year } = getCurrentMonthYear()
  const currentMonthEvents = getCurrentMonthEvents()

  // Don't render if no events this month
  if (currentMonthEvents.length === 0) {
    return null
  }

  return (
    <div className="event1-section-area sp1">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="event-header heading2 space-margin60 text-center">
              <div className="space16" />
              <div className="flex justify-center items-center">
                <Image 
                  src="/assets/img/logo/ln-tero-logo-red-208x40px.svg" 
                  alt="Live Nation Tero Logo" 
                  width={300} 
                  height={58}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row">
          <div className="col-lg-12">
            <div {...(isClient && { 'data-aos': 'fade-up', 'data-aos-duration': '900' })}>
              <ul className="nav nav-pills space-margin60" role="tablist">
                <li className="nav-item">
                  <button 
                    className="nav-link active" 
                    type="button" 
                    role="tab"
                    aria-selected="true"
                  >
                    <span className="vl-flex">
                      <span className="date">
                        {month} <br />
                        {year}
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Events List */}
            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">
                {currentMonthEvents.map((event, eventIndex) => (
                  <div key={event.id}>
                    <div 
                      className="tabs-widget-boxarea" 
                      {...(isClient && { 
                        'data-aos': 'fade-up', 
                        'data-aos-duration': String(800 + (eventIndex * 200))
                      })}
                    >
                      <div className="row align-items-center">
                        {/* Event Image */}
                        <div className="col-lg-4">
                          <div className="img1">
                            <Image 
                              src={event.event_img_url} 
                              alt={event.event_name}
                              width={400}
                              height={400}
                              className="w-100 h-auto"
                              loading={eventIndex === 0 ? 'eager' : 'lazy'}
                            />
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="col-lg-8">
                          <div className="content-area">
                            <ul>
                              <li>
                                <span>
                                  <Image 
                                    src="/assets/img/icons/clock1.svg" 
                                    alt="Date" 
                                    width={16}
                                    height={16}
                                    className="inline-block"
                                  /> 
                                  {formatEventDate(event.start_date, event.end_date)}
                                  <span> | </span>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <Image 
                                    src="/assets/img/icons/location1.svg" 
                                    alt="Location" 
                                    width={16}
                                    height={16}
                                    className="inline-block"
                                  /> 
                                  {event.venue}, {event.city_livenation}
                                </span>
                              </li>
                            </ul>

                            <div className="space20" />

                            <Link 
                              href={event.event_url} 
                              className="head"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {event.event_name}
                            </Link>

                            <div className="space16" />

                            <p>
                              Experience an unforgettable evening at {event.venue} in {event.city_livenation}. 
                              Don't miss this spectacular live performance!
                            </p>

                            <div className="space32" />

                            <div className="btn-area1">
                              <Link 
                                href={event.ticket_url_livenation} 
                                className="vl-btn1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                purchase ticket now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {eventIndex < currentMonthEvents.length - 1 && (
                      <div className="space30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* More Info Button */}
        <div className="row">
          <div className="btn-area1 text-end mt-2">
            <Link 
              className="vl-btn8" 
              href="https://livenationtero.co.th"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="demo">SEE MORE</span>
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