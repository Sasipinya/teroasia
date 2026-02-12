'use client'

import Image from 'next/image'
import Link from 'next/link'
import GoogleTranslate from '../../GoogleTranslate'
import SearchModal from '@/app/components/templates/SearchModal'

interface Header1Props {
  scroll: boolean
  isMobileMenu: boolean
  handleMobileMenu: () => void
  isSearch: boolean
  handleSearch: () => void
}

interface MenuItem {
  label: string
  href: string
  icon?: string
  target?: '_blank'
  dropdown?: MenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    label: 'หน้าแรก',
    href: '/',
  },
  {
    label: 'รายการทีวี',
    href: '#',
    icon: 'fa-solid fa-angle-down',
    dropdown: [
      { label: 'ถกไม่เถียง', href: '/program/thediscussion' },
      { label: 'เงินทองของจริง', href: '/program/TSD_MoneyGuru' },
      { label: 'คิดฝัน Kids Fun', href: '/program/kidsnews' },
      { label: 'One', href: '/program/OneChampionship' },
      { label: 'One Lumpinee', href: '/program/onelumpinee' },
      { label: 'Fairtex Fight มวยมันพันธุ์ EXTREME', href: '/program/FairtexFight' },
    ],
  },
  {
    label: 'ดนตรี',
    href: 'http://www.teromusic.com',
    target: '_blank',
  },
  {
    label: 'งานแสดง',
    href: '#',
    icon: 'fa-solid fa-angle-down',
    dropdown: [
      { label: 'คอนเสิร์ต', href: 'https://corporate.teroasia.com/concerts-events/', target: '_blank' },
      { label: 'ไทยทิคเก็ตเมเจอร์', href: 'https://www.thaiticketmajor.com/', target: '_blank' },
    ],
  },
  {
    label: 'ASIA',
    href: '#',
    icon: 'fa-solid fa-angle-down',
    dropdown: [
      { label: 'Popolay (Myanmar)', href: 'https://www.popolay.com', target: '_blank' },
      { label: 'Thaiwave (Chinese & English)', href: 'https://thaiwave.club/cn/', target: '_blank' },
      { label: 'Film Bangkok', href: 'https://filmbangkok.asia', target: '_blank' },
    ],
  },
  {
    label: 'CORPORATE',
    href: '#',
    icon: 'fa-solid fa-angle-down',
    dropdown: [
      { label: 'TERO Entertainment', href: 'https://corporate.teroasia.com', target: '_blank' },
      { label: 'TERO Health Clinic', href: '/terohealthclinic' },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/teroasia',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/terodigital/',
    icon: 'fa-brands fa-instagram',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/tero_asia',
    svg: true,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@tero_entertainment',
    icon: 'fa-brands fa-youtube',
  },
]

export default function Header1({ 
  scroll, 
  isMobileMenu, 
  handleMobileMenu, 
  isSearch, 
  handleSearch 
}: Header1Props) {
  // Handle search submission
  const handleSearchSubmit = (searchTerm: string) => {
    if (searchTerm.trim()) {
      window.open(`/search/${searchTerm}`, '_blank')
    }
  }

  return (
    <>
      <header suppressHydrationWarning>
        <div 
          className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} 
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-elements">
                  {/* Site Logo */}
                  <div className="site-logo">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/logo-tero-white.png"
                        alt="TERO Entertainment"
                        width={150}
                        height={50}
                        priority
                        className="logo-image"
                      />
                    </Link>
                  </div>

                  {/* Main Navigation Menu */}
                  <nav className="main-menu" aria-label="Main navigation">
                    <ul>
                      {MENU_ITEMS.map((item, index) => (
                        <li key={index}>
                          <Link 
                            href={item.href}
                            {...(item.target && { 
                              target: item.target,
                              rel: 'noopener noreferrer'
                            })}
                          >
                            {item.label}
                            {item.icon && <i className={item.icon} />}
                          </Link>
                          
                          {/* Dropdown Menu */}
                          {item.dropdown && (
                            <ul className="dropdown-padding">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <li key={dropdownIndex}>
                                  <Link 
                                    href={dropdownItem.href}
                                    {...(dropdownItem.target && { 
                                      target: dropdownItem.target,
                                      rel: 'noopener noreferrer'
                                    })}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Header Actions */}
                  <div className="btn-area">
                    {/* Search Button */}
                    <button
                      className="search-icon header__search header-search-btn"
                      onClick={handleSearch}
                      aria-label="Open search"
                      type="button"
                    >
                      <Image
                        src="/assets/img/icons/search1.svg"
                        alt=""
                        width={20}
                        height={20}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Social Links */}
                    <ul>
                      {SOCIAL_LINKS.map((social, index) => (
                        <li key={index}>
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                          >
                            {social.svg ? (
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 640"
                                aria-hidden="true"
                              >
                                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
                              </svg>
                            ) : (
                              <i className={social.icon} aria-hidden="true" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Google Translate Widget */}
                  <GoogleTranslate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearch} 
        onClose={handleSearch} 
        onSearch={handleSearchSubmit}
      />
    </>
  )
}