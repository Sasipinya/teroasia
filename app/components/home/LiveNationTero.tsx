'use client'
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

interface Section3Props {
  data?: LiveNationEvent[]
}

export default function LiveNationTero({ data = [] }: Section3Props) {
  const [isTab, setIsTab] = useState(1)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const handleTab = (num: number) => {
    setIsTab(num)
  }

  // ดึงเดือนและปีปัจจุบัน
  const getCurrentMonthYear = () => {
    const now = new Date()
    const month = now.toLocaleString('en-US', { month: 'long' }).toUpperCase()
    const year = now.getFullYear()
    return `${month} ${year}`
  }

  // กรอง events เฉพาะเดือนปัจจุบัน
  const getCurrentMonthEvents = () => {
    const currentMonthYear = getCurrentMonthYear()
    return data.filter(event => {
      const date = new Date(event.start_date)
      const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase()
      const year = date.getFullYear()
      const eventMonthYear = `${month} ${year}`
      return eventMonthYear === currentMonthYear
    })
  }

  // แปลงวันที่เป็นรูปแบบที่แสดง
  const formatEventDate = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (startDate === endDate) {
      return start.toLocaleDateString('en-US', { 
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    } else {
      return `${start.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} - ${end.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}`
    }
  }

  const currentMonthYear = getCurrentMonthYear()
  const [month, year] = currentMonthYear.split(' ')
  const currentMonthEvents = getCurrentMonthEvents()

  // ถ้าไม่มี event ในเดือนนี้ ไม่แสดงอะไร
  if (currentMonthEvents.length === 0) {
    return null
  }

  return (
    <>
      <div className="event1-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="event-header heading2 space-margin60 text-center">
                <div className="space16" />
                <div className='flex justify-center items-center'>
                  <img src="/assets/img/logo/ln-tero-logo-red-208x40px.svg" alt="" width={300} height={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div {...(isClient && { 'data-aos': 'fade-up', 'data-aos-duration': 900 })}>
                <ul className="nav nav-pills space-margin60" id="pills-tab" role="tablist">
                  <li className="nav-item" onClick={() => handleTab(1)}>
                    <button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                      <span className="vl-flex">
                        <span className="date">{month} <br />
                          {year}</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                  {currentMonthEvents.map((event, eventIndex) => (
                    <div key={event.id}>
                      <div className="tabs-widget-boxarea" {...(isClient && { 'data-aos': 'fade-up', 'data-aos-duration': 800 + (eventIndex * 200) })}>
                        <div className="row align-items-center">
                          <div className="col-lg-4">
                            <div className="img1">
                              <img src={event.event_img_url} alt={event.event_name} />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="content-area">
                              <ul>
                                <li>
                                  <Link href="/#">
                                    <img src="/assets/img/icons/clock1.svg" alt="" /> 
                                    {formatEventDate(event.start_date, event.end_date)}
                                    <span> | </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/#">
                                    <img src="/assets/img/icons/location1.svg" alt="" /> 
                                    {event.venue}, {event.city_livenation}
                                  </Link>
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
                      {eventIndex < currentMonthEvents.length - 1 && <div className="space30" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="btn-area1 text-end mt-2">
              <Link className="vl-btn8" href="https://livenationtero.co.th">
                <span className="demo">MORE INFO</span>
                <span className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}