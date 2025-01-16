import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSearch, faUserCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { shimmer, toBase64 } from '@/lib/utils/shimer';
import SearchModal from '../SearchModal';

// Menu item type definition
interface MenuItem {
  href: string;
  title: string;
  image?: string;
  external?: boolean;
}

// Menu section type definition
interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Menu data structure
const menuSections: MenuSection[] = [
  {
    title: "รายการทีวี",
    items: [
      { href: "/program/thediscussion", title: "ถกไม่เถียง", image: "/images/tv-program/tdc.jpg" },
      { href: "/program/HotNewsCh7HD", title: "ข่าวเย็นประเด็นร้อน", image: "/images/tv-program/news-02.jpg" },
      { href: "/program/OneChampionship", title: "ONE", image: "/images/tv-program/one.jpg" },
      { href: "/program/onelumpinee", title: "ONE Lumpinee", image: "/images/tv-program/one-lumpinee.jpg" },
      { href: "/", title: "การ์ตูนดังรายสัปดาห์", image: "/images/tv-program/cartoon.jpg" },
      { href: "/program/spyxfamily", title: "Spy x Family" },
      { href: "/program/campfire-cooking", title: "Campfire Cooking in Another World with My Absurd Skill" },
      { href: "/program/Masked-Rider-Saber", title: "มาสค์ไรเดอร์" },
      { href: "/program/ultraman-taiga-the-movie", title: "อุลตร้าแมน" },
      { href: "/program/gundam-build-divers-re-rise", title: "กันดั้มบิลด์ไดเวอร์ส รี:ไรซ์" },
      { href: "/program/TSD_MoneyGuru", title: "เงินทองของจริง", image: "/images/tv-program/money.jpg" },
      { href: "/program/FairtexFight", title: "FAIRTEX FIGHT มวยมันพันธุ์ EXTREM", image: "/images/tv-program/fairtex.jpg" },
      { href: "/program/vnl2024", title: "VOLLEYBALL NATIONS LEAGUE 2024", image: "/images/tv-program/vnl.jpg" },
      { href: "/program/ka-ngow", title: "ฆ่าโง่", image: "/images/tv-program/kangow.jpg" },
      { href: "/program/HugMeCh7HD", title: "ขอกอดหน่อย", image: "/images/tv-program/hug.jpg" },
      { href: "/program/Beartai7HD", title: "BEARTAI 7HD ไอทีและยานยนต์", image: "/images/tv-program/beartai.jpg" },
    ]
  },
  {
    title: "ดนตรี",
    items: [
      { href: "http://www.teromusic.com/", title: "TERO MUSIC", external: true }
    ]
  },
  {
    title: "งานแสดง",
    items: [
      { href: "https://corporate.teroasia.com/concerts-events/", title: "คอนเสิร์ต", external: true },
      { href: "https://www.thaiticketmajor.com/", title: "ไทยทิคเก็ตเมเจอร์", external: true }
    ]
  },
  {
    title: "ASIA",
    items: [
      { href: "https://www.popolay.com", title: "Popolay (Myanmar)", external: true },
      { href: "https://thaiwave.club/cn/", title: "Thaiwave (Chinese & English)", external: true },
      { href: "https://filmbangkok.asia", title: "Film Bangkok", external: true }
    ]
  },
  {
    title: "CORPORATE",
    items: [
      { href: "https://corporate.teroasia.com/", title: "TERO ENTERTAINMENT", external: true },
      { href: "/terohealthclinic", title: "TERO HEALTH CLINIC" },
      { href: "/advertising", title: "ติดต่อโฆษณา" }
    ]
  }
];

const NavbarMobile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSearch = (term: string) => setSearchTerm(term);

  // Menu Item Component
  const MenuItem: React.FC<{ item: MenuItem; close: () => void }> = ({ item, close }) => {
    const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    
    return (
      <Menu.Item>
        {({ active }) => (
          <Link
            href={item.href}
            className={`flex items-center px-4 py-2 text-xl ${
              active ? 'bg-gray-200 text-gray-900' : 'text-gray-700'
            } animate__animated animate__fadeInLeft animate__delay-custom-1`}
            onClick={close}
            {...linkProps}
          >
            {item.image && (
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={`${item.title} logo`}
                className="rounded-2xl mr-3"
                style={{ height: '100px', width: '100px' }}
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
              />
            )}
            {item.title}
          </Link>
        )}
      </Menu.Item>
    );
  };

  return (
    <nav className="relative z-50">
      <Menu as="div" className="relative w-full">
        {({ open, close }) => (
          <>
            {/* Header */}
            <div className="container mx-auto">
              <div className="flex items-center justify-between pt-2 pb-0 px-2">
                <div className="flex items-center">
                  <Menu.Button className="inline-flex justify-start rounded-md bg-white bg-opacity-20 text-md font-medium text-red-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75">
                    <FontAwesomeIcon icon={faBars} className="h-9 w-10 text-red-600" />
                  </Menu.Button>
                  <Image
                    src="/images/logo_tero.png"
                    alt="logoteroasia"
                    width={133}
                    height={43}
                    style={{ height: '43px', width: '143px' }}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 hover:text-red-600 text-gray-500 transition-colors"
                    aria-label="Search"
                    onClick={handleOpenModal}
                  >
                    <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
                  </button>
                  <Link href="/auth/signin">
                    <button
                      className="p-2 hover:text-red-600 text-gray-300 transition-colors"
                      aria-label="Login"
                    >
                      <FontAwesomeIcon icon={faUserCircle} className="h-8 w-8" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu Panel */}
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="fixed inset-0 bg-gray-100 overflow-y-auto">
                <div className="px-4 py-2">
                  {/* Menu Header */}
                  <div className="flex justify-between items-center mb-4">
                    <Image
                      src="/images/logo_tero.png"
                      alt="logoteroasia"
                      width={150}
                      height={48}
                      style={{ height: 'auto', width: 'auto' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`}
                    />
                    <button
                      onClick={close}
                      className="p-2 hover:text-red-600 transition-colors"
                      aria-label="Close menu"
                    >
                      <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Menu Sections */}
                  {menuSections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="flex items-center gap-2 px-4 text-xl text-gray-700 font-medium mb-2">
                        <FontAwesomeIcon icon={faTv} />
                        {section.title}
                      </h3>
                      {section.items.map((item, itemIndex) => (
                        <MenuItem key={itemIndex} item={item} close={close} />
                      ))}
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

      {/* Search Modal */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSearch={handleSearch}
      />
    </nav>
  );
};

export default NavbarMobile;