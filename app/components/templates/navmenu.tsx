// components/NavMenu.tsx
'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { shimmer, toBase64 } from '../utils/shimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface MenuGroup {
  label: string;
  items?: MenuItem[];
  href?: string;
  showArrow?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const tvPrograms: MenuItem[] = [
  { label: 'เงินทองของจริง', href: '/program/TSD_MoneyGuru' },
  { label: 'ข่าวเย็นประเด็นร้อน', href: '/program/HotNewsCh7HD' },
  { label: 'Fairtex Fight มวยมันพันธุ์ EXTREME', href: '/program/FairtexFight' },
  { label: 'VOLLEYBALL NATIONS LEAGUE 2024', href: '/program/vnl2024' },
  { label: 'ถกไม่เถียง', href: '/program/thediscussion' },
  { label: 'ฆ่าโง่', href: '/program/ka-ngow' },
  { label: 'Spy x Family', href: '/program/spyxfamily' },
  { label: 'Campfire cooking in another world', href: '/program/campfire-cooking' },
  { label: 'อุลตร้าแมน', href: '/program/ultraman-taiga-the-movie' },
  { label: 'มาสค์ไรเดอร์ รีไวซ์', href: '/program/Masked-Rider-Saber' }
];

const showPrograms: MenuItem[] = [
  { label: 'คอนเสิร์ต', href: 'https://corporate.teroasia.com/concerts-events/', isExternal: true },
  { label: 'ไทยทิคเก็ตเมเจอร์', href: 'https://www.thaiticketmajor.com/', isExternal: true }
];

const asiaPrograms: MenuItem[] = [
  { label: 'Popolay (Myanmar)', href: 'https://www.popolay.com', isExternal: true },
  { label: 'Thaiwave (Chinese & English)', href: 'https://thaiwave.club/cn/', isExternal: true },
  { label: 'Film Bangkok', href: 'https://filmbangkok.asia', isExternal: true }
];

const corporatePrograms: MenuItem[] = [
  { label: 'TERO Entertainment', href: 'https://corporate.teroasia.com', isExternal: true },
  { label: 'TERO Health Clinic', href: '/terohealthclinic', isExternal: true }
];

const MenuItems: React.FC<{ items: MenuItem[] }> = ({ items: menuItems }) => {
  return (
    <>
      {menuItems.map((menuItem, index) => (
        <Menu.Item key={index}>
          {({ active }) => (
            <Link
              className={`p-3 block text-sm font-medium ${index !== menuItems.length - 1
                  ? 'border-b border-b-gray-200'
                  : ''
                } ${active ? 'bg-gray-200 text-gray-800' : ''}`}
              href={menuItem.href}
              target={menuItem.isExternal ? '_blank' : undefined}
            >
              {menuItem.label}
            </Link>
          )}
        </Menu.Item>
      ))}
    </>
  );
};

const NavMenu: React.FC = () => {
  const menuGroups: MenuGroup[] = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'รายการทีวี', items: tvPrograms, showArrow: true },
    { label: 'ดนตรี', href: 'http://www.teromusic.com' },
    { label: 'งานแสดง', items: showPrograms, showArrow: true },
    { label: 'วิทยุออนไลน์', href: 'https://teroradio.com/' },
    { label: 'ASIA', items: asiaPrograms, showArrow: true },
    { label: 'CORPORATE', items: corporatePrograms, showArrow: true },
    { label: 'ติดต่อโฆษณา', href: '/advertising' },
    {
      label: 'OneChampionShip',
      href: '/program/OneChampionship',
      image: {
        src: '/images/menu_01_1.png',
        alt: 'logoteroasia',
        width: 89,
        height: 35
      }
    },
    {
      label: 'OneLumpini',
      href: '/program/onelumpini',
      image: {
        src: '/images/logo_menu.jpg',
        alt: 'logoteroasia',
        width: 145,
        height: 36
      }
    }
  ];

  return (
    <div className="p-2 flex">
      {menuGroups.map((menuGroup, index) => (
        <Menu as="div" className="relative" key={index}>
          {({ open }) => (
            <>
              <Menu.Button className="text-gray-600 mr-4 text-sm font-medium">
                {menuGroup.image ? (
                  <Link href={`${menuGroup.href}`}>
                    <Image
                      className="rounded-l rounded-r"
                      src={menuGroup.image.src}
                      alt={menuGroup.image.alt}
                      width={menuGroup.image.width}
                      height={menuGroup.image.height}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(menuGroup.image.width, menuGroup.image.height)
                      )}`}
                    />
                  </Link>
                ) : (
                  <>
                    {menuGroup.href ? <Link href={`${menuGroup.href}`}>{menuGroup.label}</Link> :<>{menuGroup.label}</>}
                    {menuGroup.showArrow && (
                      <FontAwesomeIcon icon={faAngleDown} className="text-[8px] ml-1" />
                    )}
                  </>
                )}
              </Menu.Button>

              {menuGroup.items && (
                <AnimatePresence>
                  {open && (
                    <Menu.Items
                      static
                      as={motion.div}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute z-10 mt-2 origin-top bg-white text-gray-600 border border-gray-200 w-[300px] rounded-md shadow-lg"
                    >
                      <MenuItems items={menuGroup.items} />
                    </Menu.Items>
                  )}
                </AnimatePresence>
              )}
            </>
          )}
        </Menu>
      ))}
    </div>
  );
};

export default NavMenu;