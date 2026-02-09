'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	

	

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints:{
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
	}
}

export default function Terodigital() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		// Render แบบไม่มี AOS attributes ครั้งแรก (ตรงกับ SSR)
		return (
			<div className="memory1-section-area sp1">
				<div className="container">
					
					<div className="row">
						<div className="col-lg-12 memory-slider-area">
							<Swiper {...swiperOptions} className=" owl-carousel">
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
										<img src="/assets/img/logo/tinchok.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>ออกอากาศทางช่อง one31 ทุกวันจันทร์ - ศุกร์ เวลา 15.45 - 16.30 น. และรับชมรีรันได้ทางช่อง GMM25 เวลา 18.00 - 18.45 น.</p>
									<div className="space12" />
									<Link href="/memories">ถกไม่เถียง</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/logo/nt.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>ออกอากาศทุกวันจันทร์ - ศุกร์ เวลา 07.50 - 08.00 น. ทางช่อง one31 รับชมรีรันได้ทางช่อง GMM25 เวลา 10.30 - 10.40 น. และช่องทางออนไลน์ TERO Digital</p>
									<div className="space12" />
									<Link href="/memories">เงินทองของจริง</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/logo/kf.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>"Kids Fun คิดฝัน" คือพื้นที่แห่งความสุขและการเรียนรู้สำหรับเด็กๆ</p>
									<div className="space12" />
									<Link href="/memories">Kidsfun</Link>
								</div>
							</SwiperSlide>
							
						</Swiper>


							
						</div>
					</div>
				</div>
			</div>
		)
	}

	// Render ปกติพร้อม AOS หลัง mount แล้ว
	return (
		<div className="memory1-section-area sp1">
			<div className="container">
				
				<div className="row">
					<div className="col-lg-12 memory-slider-area">
						<Swiper {...swiperOptions} className=" owl-carousel">
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
										<img src="/assets/img/logo/tinchok.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>ออกอากาศทางช่อง one31 ทุกวันจันทร์ - ศุกร์ เวลา 15.45 - 16.30 น. และรับชมรีรันได้ทางช่อง GMM25 เวลา 18.00 - 18.45 น.</p>
									<div className="space12" />
									<Link href="/memories">ถกไม่เถียง</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/logo/nt.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>ออกอากาศทุกวันจันทร์ - ศุกร์ เวลา 07.50 - 08.00 น. ทางช่อง one31 รับชมรีรันได้ทางช่อง GMM25 เวลา 10.30 - 10.40 น. และช่องทางออนไลน์ TERO Digital</p>
									<div className="space12" />
									<Link href="/memories">เงินทองของจริง</Link>
								</div>
							</SwiperSlide>
							<SwiperSlide className="memory-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/logo/kf.png" alt="" />
								</div>
								<div className="content-area">
									<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
									<div className="arrow">
										<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
									</div>
									<div className="space18" />
									<p>"Kids Fun คิดฝัน" คือพื้นที่แห่งความสุขและการเรียนรู้สำหรับเด็กๆ</p>
									<div className="space12" />
									<Link href="/memories">Kidsfun</Link>
								</div>
							</SwiperSlide>
							
						</Swiper>

						
					</div>
				</div>
			</div>
		</div>
	)
}