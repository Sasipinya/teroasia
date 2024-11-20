// components/Navbar.tsx
'use client';
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { shimmer, toBase64 } from '../../utils/shimer';
import SearchModal from '../SearchModal';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavbarMobile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = (term: string) => setSearchTerm(term);
  return (
    <nav className="">

      {/* Mobile Menu */}
      <Menu as="div" className="relative w-full inline-block text-left sm:hidden">
        <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Menu.Button className="inline-flex  justify-start rounded-md bg-white bg-opacity-20  text-md font-medium text-red-600  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700  focus-visible:ring-opacity-75">
            <FontAwesomeIcon icon={faBars} className="h-9 w-10 text-red-600" />
          </Menu.Button>
          <Image src={"/images/logo_tero.png"} alt={"logoteroasia"} width={133} height={43} style={{ height: '43px', width: '143px' }} loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`} />
          </div>
          <div className='flex'>
          <button
            className=" hover:text-red-600 text-gray-500 font-bold" aria-label="Search"

            onClick={handleOpenModal}
          >
            <FontAwesomeIcon icon={faSearch} className="text-l h-9 w-10" />
          </button>
          <button
              className=" hover:text-red-600 text-gray-500 font-bold" aria-label="Login"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-l h-9 w-10" />
            </button>
            </div>
          <SearchModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSearch={handleSearch}
          />

          {searchTerm && (
            <div className="mt-4">
              <p>ผลการค้นหาสำหรับ: {searchTerm}</p>
            </div>
          )}
           
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0   
 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-0 w-full z-10   origin-top-right rounded-md bg-gray-100  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1">
              <div className="flex flex-row justify-between px-4 py-2">
                <Image src={"/images/logo_tero.png"} alt={"logoteroasia"} width={150} height={48} style={{ height: 'auto', width: 'auto' }} loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`} />

                <Menu.Button as="button"> {/* ปุ่มปิดเมนู */}
                  <FontAwesomeIcon icon={faXmark} className="h-7 w-7 text-black" />
                </Menu.Button>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1'
                    )}
                  >
                    หน้าแรก
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/about"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-2'
                    )}
                  >
                    เกี่ยวกับเรา
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/contact"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-3'
                    )}
                  >
                    ติดต่อ
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>






    </nav>
  );
};

export default NavbarMobile;
