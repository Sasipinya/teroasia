
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: false,
	loop: false,

	// Navigation
	navigation: {
		nextEl: '.h1n',
		prevEl: '.h1p',
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
			allowTouchMove: true,
			simulateTouch: true,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
			allowTouchMove: true,
			simulateTouch: true,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
			allowTouchMove: false,
			simulateTouch: false,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
			allowTouchMove: false,
			simulateTouch: false,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30,
			allowTouchMove: false,
			simulateTouch: false,
		},
		1350: {
			slidesPerView: 4,
			spaceBetween: 30,
			allowTouchMove: false,
			simulateTouch: false,
		},
	}
}

export default function Section4() {

	return (
		<>

			<div className="team3-section-area ">
				<div className="container">

					<div className="row">
						<div className="col-lg-12 team-slider-area2">
							<Swiper {...swiperOptions}
								
								className=" owl-carousel">
								<SwiperSlide className="our-team-boxarea">
									<div className="team-widget-area">
										<img src="/assets/img/elements/elements21.png" alt="" className="elements21" />
										<img src="/assets/img/elements/elements22.png" alt="" className="elements22" />
										<div className="img1">
											<img src="/assets/img/logo/logo-3x3_0.jpg" alt="" className="team-img4" />
											<div className="share">
												<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
											</div>
											<ul>
												<li>
													<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="space28" />
									<div className="content-area">
										<Link href="/speakers">3X3</Link>
										<div className="space16" />
										
									</div>
								</SwiperSlide>
								<SwiperSlide className="our-team-boxarea">
									<div className="team-widget-area">
										<img src="/assets/img/elements/elements21.png" alt="" className="elements21" />
										<img src="/assets/img/elements/elements22.png" alt="" className="elements22" />
										<div className="img1">
											<img src="/assets/img/logo/logo-one_0.jpg" alt="" className="team-img4" />
											<div className="share">
												<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
											</div>
											<ul>
												<li>
													<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="space28" />
									<div className="content-area">
										<Link href="/speakers">ONE</Link>
										<div className="space16" />
										
									</div>
								</SwiperSlide>
								<SwiperSlide className="our-team-boxarea">
									<div className="team-widget-area">
										<img src="/assets/img/elements/elements21.png" alt="" className="elements21" />
										<img src="/assets/img/elements/elements22.png" alt="" className="elements22" />
										<div className="img1">
											<img src="/assets/img/logo/logo-mtw_0.jpg" alt="" className="team-img4" />
											<div className="share">
												<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
											</div>
											<ul>
												<li>
													<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="space28" />
									<div className="content-area">
										<Link href="/speakers">Miss Thailand World</Link>
										<div className="space16" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="our-team-boxarea">
									<div className="team-widget-area">
										<img src="/assets/img/elements/elements21.png" alt="" className="elements21" />
										<img src="/assets/img/elements/elements22.png" alt="" className="elements22" />
										<div className="img1">
											<img src="/assets/img/logo/logo-tero-ent_0.jpg" alt="" className="team-img4" />
											<div className="share">
												<Link href="/#"><img src="/assets/img/icons/share1.svg" alt="" /></Link>
											</div>
											<ul>
												<li>
													<Link href="/#" className="icon1"><i className="fa-brands fa-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon2"><i className="fa-brands fa-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon3"><i className="fa-brands fa-instagram" /></Link>
												</li>
												<li>
													<Link href="/#" className="icon4"><i className="fa-brands fa-pinterest-p" /></Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="space28" />
									<div className="content-area">
										<Link href="/speakers">TERO Entertainment</Link>
										<div className="space16" />
									</div>
								</SwiperSlide>
								
							</Swiper>


						</div>
					</div>
				</div>
			</div>

		</>
	)
}
