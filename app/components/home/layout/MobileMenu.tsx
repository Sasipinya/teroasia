'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none z-50">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="//"><img src="/assets/img/logo/logo-tero-white.png" alt="" /></Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<img src="/images/logo_tero.png" alt="logo" width={200} height={100} />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li className="hash-has-sub"><Link href="/#" className="hash-nav">หน้าแรก</Link></li>

						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion == 1 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(1)}><em /></span>
							<Link href="/#" className="hash-nav">รายการทีวี</Link>
							<ul className={`sub-menu ${isAccordion == 1 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/program/thediscussion" className="hash-nav">ถกไม่เถียง</Link></li>
								<li className="hash-has-sub"><Link href="/program/TSD_MoneyGuru" className="hash-nav">เงินทองของจริง</Link></li>
								<li className="hash-has-sub"><Link href="/program/kidsnews" className="hash-nav">คิดฝัน Kids Fun</Link></li>
								<li className="hash-has-sub"><Link href="/program/OneChampionship" className="hash-nav">One</Link></li>
								<li className="hash-has-sub"><Link href="/program/onelumpinee" className="hash-nav">One Lumpinee</Link></li>
								<li className="hash-has-sub"><Link href="/program/FairtexFight" className="hash-nav">Fairtex Fight มวยมันพันธุ์ EXTREME</Link></li>
							</ul>
						</li>

						<li className="hash-has-sub"><Link href="http://www.teromusic.com" className="hash-nav">ดนตรี</Link></li>

						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion == 2 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(2)}><em /></span>
							<Link href="/#" className="hash-nav">งานแสดง</Link>
							<ul className={`sub-menu ${isAccordion == 2 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="https://corporate.teroasia.com/concerts-events/" target="_blank" className="hash-nav">คอนเสิร์ต</Link></li>
								<li className="hash-has-sub"><Link href="https://www.thaiticketmajor.com/" target="_blank" className="hash-nav">ไทยทิคเก็ตเมเจอร์</Link></li>
							</ul>
						</li>

					

						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion == 3 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(3)}><em /></span>
							<Link href="/#" className="hash-nav">ASIA</Link>
							<ul className={`sub-menu ${isAccordion == 3 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="https://www.popolay.com" target="_blank" className="hash-nav">Popolay (Myanmar)</Link></li>
								<li className="hash-has-sub"><Link href="https://thaiwave.club/cn/" target="_blank" className="hash-nav">Thaiwave (Chinese & English)</Link></li>
								<li className="hash-has-sub"><Link href="https://filmbangkok.asia" target="_blank" className="hash-nav">Film Bangkok</Link></li>
							</ul>
						</li>

						<li className="has-sub hash-has-sub">
							<span className={`submenu-button ${isAccordion == 4 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(4)}><em /></span>
							<Link href="/#" className="hash-nav">CORPORATE</Link>
							<ul className={`sub-menu ${isAccordion == 4 ? "open-sub" : ""}`} style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="https://corporate.teroasia.com" target="_blank" className="hash-nav">TERO Entertainment</Link></li>
								<li className="hash-has-sub"><Link href="/terohealthclinic" className="hash-nav">TERO Health Clinic</Link></li>
							</ul>
						</li>
					</ul>

					<div className="allmobilesection">
						
						<div className="single-footer">
							<h3>Contact Info</h3>
							<div className="footer1-contact-info">
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-phone-volume" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="//tel:+024958989" prefetch={false}>02-495-8989</Link>
									</div>
								</div>
								<div className="contact-info-single">
									<div className="contact-info-icon">
										<span><i className="fa-solid fa-envelope" /></span>
									</div>
									<div className="contact-info-text">
										<Link href="//mailto:online@teroasia.com">online@teroasia.com</Link>
									</div>
								</div>
								<div className="single-footer">
									<h3>Our Location</h3>
									<div className="contact-info-single">
										<div className="contact-info-icon">
											<span><i className="fa-solid fa-location-dot" /></span>
										</div>
										<div className="contact-info-text">
											<Link href="//mailto:online@teroasia.com">	บริษัท เทโร เอ็นเทอร์เทนเม้นท์ จำกัด (มหาชน) <br />
										

เลขที่ 998/3 อาคาร 7 ชั้น 4-5, 7 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900 ประเทศไทย

</Link>
										</div>
									</div>
								</div>
								<div className="single-footer">
									<h3>Social Links</h3>
									<div className="social-links-mobile-menu">
										<ul>
											<li>
												<Link href="https://www.facebook.com/teroasia"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/terodigital/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://x.com/tero_asia"><i className="fa-brands fa-x-twitter" /></Link>
											</li>
											<li>
												<Link href="https://www.youtube.com/@tero_entertainment"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
