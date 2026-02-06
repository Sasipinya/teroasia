'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

interface Section5Props {
	data: Event[]
	maxDisplay?: number
}

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 6,
	spaceBetween: 30,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

	// Pagination
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
	}
}

export default function Section5({ data, maxDisplay = 12 }: Section5Props) {
	const displayEvents = data?.slice(0, maxDisplay) || []

	return (
		<>
			<div className="team7-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto">
							<div className="team-header space-margin60 heading10 text-center">
								<div className='flex justify-center items-center'>
									<img src="https://www.thaiticketmajor.com/assets/img/logo-ttm-tm.png" alt="THAITICKETMAJOR" width={300} height={100} />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 team-slider-area7">
							<Swiper {...swiperOptions} className="owl-carousel">
								{displayEvents.map((event) => (
									<SwiperSlide key={event.id} className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src={event.event_img_url} alt={event.event_name} />
										</div>
										<div className="space20" />
										<div className="text-area">
											{event.venue &&
											<span className='flex text-xs'>
												<img src="/assets/img/icons/location1.svg" alt="" width={14}/>
												{event.venue}
											</span>}
											<div className="space8" />
											<Link href={event.event_url} target="_blank">
												{event.event_name}
											</Link>
											<div className="space8" />
											<p>{event.date_text}</p>
											<div className="space8" />
											{event.event_url &&
											<div className="btn-area1">
												<a className="vl-btn1 text-white after:h-7 after:w-7 after:left-[15px] after:top-[3px]" href={event.event_url} target="_blank" style={{padding:'4px 32px',width:'100%'}}>
													ซื้อบัตร
												</a>
											</div>}
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							<div className="owl-nav">
								<button type="button" role="presentation" className="owl-prev h1p">
									<i className="fa-solid fa-angle-left" />
								</button>
								<button type="button" role="presentation" className="owl-next h1n">
									<i className="fa-solid fa-angle-right" />
								</button>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="btn-area1 text-end mt-3">
							<a className="vl-btn8" href="/pricing-plan">
								<span className="demo">SEE MORE</span>
								<span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}