'use client'

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

interface Section8Props {
	data: Event[]
	maxDisplay?: number
}

export default function TeroMusic({ data, maxDisplay = 4 }: Section8Props) {
	const [mounted, setMounted] = useState(false)
	const displayEvents = data?.slice(0, maxDisplay) || []

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		// Render แบบไม่มี AOS attributes ครั้งแรก (ตรงกับ SSR)
		return (
			<div className="blog1-section-area ">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="blog-header text-center heading2 space-margin60">
								<img src="http://teromusic.com/img/top-logo.png" alt="Bectero Music logo" width={200}/>
							</div>
						</div>
					</div>
					<div className="row">
						{displayEvents.map((event) => (
							<div key={event.id} className="col-lg-3 col-md-6">
								<div className="blog1-auhtor-boxarea">
									<div className="img1 image-anime">
										<img src={event.event_img_url} alt={event.event_name} />
									</div>
									<div className="content-area">
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />{event.date_text}</Link>
											</li>
										</ul>
										<div className="space20" />
										<Link href={event.event_url} target="_blank">{event.event_name}</Link>
										<div className="space24" />
										<div className="btn-area1">
											<Link href={event.event_url} target="_blank" className="vl-btn2">Read More</Link>
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

	// Render ปกติพร้อม AOS หลัง mount แล้ว
	return (
		<div className="blog1-section-area ">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 m-auto">
						<div className="blog-header text-center heading2 space-margin60">
							<div className='flex justify-center items-center'><img src="http://teromusic.com/img/top-logo.png" alt="Bectero Music logo" width={200}/></div>
						</div>
					</div>
				</div>
				<div className="row">
					{displayEvents.map((event, index) => (
						<div key={event.id} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={800 + (index * 200)}>
							<div className="blog1-auhtor-boxarea">
								<div className="img1 image-anime">
									<img src={event.event_img_url} alt={event.event_name} />
								</div>
								<div className="content-area">
									<ul>
										<li>
											<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />{event.date_text}</Link>
										</li>
									</ul>
									<div className="space20" />
									<Link href={event.event_url} target="_blank">{event.event_name}</Link>
									<div className="space24" />
									<div className="btn-area1">
										<Link href={event.event_url} target="_blank" className="vl-btn2">Read More</Link>
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