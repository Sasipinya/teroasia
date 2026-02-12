'use client'

import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXTwitter, 
  faFacebookF, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

// Types
interface TeamMember {
  id: string
  name: string
  image: string
  link_url:string
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
  }
}

// Data
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '3X3',
    image: '/assets/img/logo/logo-3x3_0.jpg',
    link_url:'https://3x3.teroasia.com/',
    socialLinks: {
      facebook: 'https://www.facebook.com/teroasia',
      twitter: 'https://x.com/tero_asia',
      instagram: 'https://www.instagram.com/terodigital',
      youtube: 'https://www.youtube.com/@tero_entertainment'
    }
  },
  {
    id: '2',
    name: 'ONE Lumpinee',
    image: '/assets/img/logo/logo-one_0.jpg',
    link_url:'https://www.onefc.com/th/',
    socialLinks: {
      facebook: 'https://www.facebook.com/ONEChampionship/',
      twitter: 'https://x.com/onechampionship',
      instagram: 'http://instagram.com/onechampionship/',
      youtube: 'https://www.youtube.com/onechampionship'
    }
  },
  {
    id: '3',
    name: 'Miss Thailand World',
    image: '/assets/img/logo/logo-mtw_0.jpg',
    link_url:'https://corporate.teroasia.com/concerts-events/missthailandworld/',
    socialLinks: {
      facebook: 'https://www.facebook.com/MissWorldThailandOfficial',
      twitter: 'https://x.com/MTW_Officialth',
      instagram: 'https://www.instagram.com/missthailandworld_official',
      youtube: 'https://www.youtube.com/@MissThailandWorldOfficial'
    }
  }
]

// Swiper configuration
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: false,
  loop: false,
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true,
      simulateTouch: true,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 10,
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
  }
}

// Sub-components
interface SocialLinksProps {
  links?: TeamMember['socialLinks']
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  if (!links) return null

  return (
    <ul>
      {links.facebook && (
        <li>
          <Link href={links.facebook} className="icon1" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
      )}
      {links.twitter && (
        <li>
          <Link href={links.twitter} className="icon2" aria-label="Twitter/X">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </li>
      )}
      {links.instagram && (
        <li>
          <Link href={links.instagram} className="icon3" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      )}
      {links.youtube && (
        <li>
          <Link href={links.youtube} className="icon4" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
      )}
    </ul>
  )
}

interface TeamCardProps {
  member: TeamMember
}

const TeamCard = ({ member }: TeamCardProps) => (
  <div className="our-team-boxarea">
     <Link href={member.link_url}>
    <div className="team-widget-area">
      
      <div className="img1">
        <img 
          src={member.image} 
          alt={member.name} 
          className="team-img4" 
        />
       
      </div>
    </div></Link>
    <div className="content-area">
      <Link href={member.link_url}>{member.name}</Link>
      <div className="space16" />
    </div>
  </div>
)

// Main component
export default function LogoAndSocial() {
  return (
    <div className="team3-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 team-slider-area2">
            <Swiper {...swiperOptions} className="owl-carousel">
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <TeamCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}