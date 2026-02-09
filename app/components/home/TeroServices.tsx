'use client'

import { useEffect, useState } from 'react'

interface Service {
	href: string | null
	img: string
	duration: number
	path?: string
}

const SERVICES: Service[] = [
	{ href: 'https://teroasia.com/program/thediscussion', img: '1tok.png', duration: 800 },
	{ href: 'https://terodigital.com/kidsfun', img: '2kidsfun.png', duration: 900 },
	{ href: 'https://teroasia.com/program/TSD_MoneyGuru', img: '3Money.png', duration: 1000 },
	{ href: null, img: '5One.png', duration: 1100 },
	{ href: 'https://teroasia.com/', img: '8TeroEnt.png', duration: 900 },
	{ href: 'https://thailandboxoffice.com/', img: '10THbox.png', duration: 1000 },
	{ href: 'https://bsite.in/', img: '11Bsite.png', duration: 1100 },
	{ href: 'https://www.thailandpostmart.com', img: '12THPM.png', duration: 1200 },
	{ href: 'https://www.majorcineplex.com/', img: '6Major.png', duration: 800 },
	{ href: 'https://thaiwave.club/th/', img: '13Thaiwave.png', duration: 900 },
	{ href: 'https://www.facebook.com/popolaytv/?locale=th_TH', img: '14popolay.png', duration: 1000 },
	{ href: null, img: '15brAintech.png', duration: 1100 },
	{ href: null, img: '16Letsplay.png', duration: 900 },
	{ href: 'https://www.facebook.com/HITZ.TH/?locale=th_TH', img: 'htz-th.jpg', duration: 1000, path: '2026/01' }
]

interface BrandCardProps {
	service: Service
	mounted: boolean
}

const BrandCard = ({ service, mounted }: BrandCardProps) => {
	const imgSrc = `https://terodigital.com/wp-content/uploads/${service.path || '2025/07'}/${service.img}`
	const aosProps = mounted 
		? { 'data-aos': 'zoom-in' as const, 'data-aos-duration': service.duration.toString() } 
		: {}

	const content = (
		<div className="brand-box">
			<img src={imgSrc} alt="" loading="lazy" />
		</div>
	)

	return (
		<div className="col-6 col-md-6 col-lg-3" {...aosProps}>
			{service.href ? (
				<a href={service.href} target="_blank" rel="noopener">
					{content}
				</a>
			) : (
				content
			)}
		</div>
	)
}

export default function TeroServices() {
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<div className="brands1-section-area sp2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 m-auto">
						<div className="brand-header heading2 space-margin60 text-center">
							<h2 className="text-anime-style-3">Tero Services</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{SERVICES.map((service, index) => (
						<BrandCard key={index} service={service} mounted={mounted} />
					))}
				</div>
			</div>
		</div>
	)
}