import Link from 'next/link'
import GoogleTranslate from '../../GoogleTranslate'
import SearchModal from '@/app/components/templates/SearchModal'



export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	// ฟังก์ชันสำหรับจัดการการค้นหา
	const handleSearchSubmit = (searchTerm: string) => {
		if (searchTerm.trim()) {
			window.open(`/search/${searchTerm}`, '_blank')
		}
	}

	return (
		<>
			<header suppressHydrationWarning>
				<div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/logo-tero-white.png" alt="" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/#">หน้าแรก </Link>
											</li>
											<li>
												<Link href="/#">รายการทีวี <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/program/thediscussion">ถกไม่เถียง</Link></li>
													<li><Link href="/program/TSD_MoneyGuru">เงินทองของจริง</Link></li>
													<li><Link href="/program/kidsnews">คิดฝัน Kids Fun</Link></li>
													<li><Link href="/program/OneChampionship">One</Link></li>
													<li><Link href="/program/onelumpinee">One Lumpinee</Link></li>
													<li><Link href="/program/FairtexFight">Fairtex Fight มวยมันพันธุ์ EXTREME</Link></li>
												</ul>
											</li>
											<li><Link href="http://www.teromusic.com">ดนตรี</Link></li>
											<li>
												<Link href="/#">งานแสดง <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="https://corporate.teroasia.com/concerts-events/" target="_blank">คอนเสิร์ต</Link></li>
													<li><Link href="https://www.thaiticketmajor.com/" target="_blank">ไทยทิคเก็ตเมเจอร์</Link></li>
												</ul>
											</li>
											<li><Link href="http://www.teroradio.com">วิทยุออนไลน์</Link></li>
											<li>
												<Link href="/#">ASIA <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="https://www.popolay.com" target="_blank">Popolay (Myanmar)</Link></li>
													<li><Link href="https://thaiwave.club/cn/" target="_blank">Thaiwave (Chinese & English)</Link></li>
													<li><Link href="https://filmbangkok.asia" target="_blank">Film Bangkok</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/#">CORPORATE <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="https://corporate.teroasia.com" target="_blank">TERO Entertainment</Link></li>
													<li><Link href="/terohealthclinic">TERO Health Clinic</Link></li>
												</ul>
											</li>
										</ul>
									</div>
									<div className="btn-area">
										<div className="search-icon header__search header-search-btn" onClick={handleSearch}>
											<a><img src="/assets/img/icons/search1.svg" alt="" /></a>
										</div>
										<ul>
											<li>
												<Link href="https://www.facebook.com/teroasia"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/terodigital/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="https://x.com/tero_asia">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
												</Link>
											</li>
											<li>
												<Link href="https://www.youtube.com/@tero_entertainment"><i className="fa-brands fa-youtube" /></Link>
											</li>
										</ul>
									</div>
									<GoogleTranslate/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* ใช้ SearchModal แทน search form เดิม */}
			<SearchModal
				isOpen={isSearch} 
				onClose={handleSearch} 
				onSearch={handleSearchSubmit}
			/>
		</>
	)
}