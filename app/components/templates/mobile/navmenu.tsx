// components/Navbar.tsx
'use client';
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { shimmer, toBase64 } from '@/lib/utils/shimer';
import SearchModal from '../SearchModal';
import { faTv } from '@fortawesome/free-solid-svg-icons';

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
      <Menu as="div" className="relative w-full inline-block text-left ">
        <div className="container mx-auto ">
          <div className='flex items-center justify-between pt-2 pb-0 px-2'>
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
              <a href="/auth/signin">
              <button
                className=" hover:text-red-600 text-gray-300 font-bold" aria-label="Login"
              >
                <FontAwesomeIcon icon={faUserCircle} className="text-l h-9 w-10" />
              </button></a>
            </div>
            <SearchModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSearch={handleSearch}
            />

           

          </div>
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
          <Menu.Items className="absolute left-0 top-0 w-[100vw] max-h-[100vh] overflow-y-auto  z-10   origin-top-right rounded-md bg-gray-100  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  px-3">
            <div className="py-1">
              <div className="flex flex-row justify-between px-4 py-2">
                <Image src={"/images/logo_tero.png"} alt={"logoteroasia"} width={150} height={48} style={{ height: 'auto', width: 'auto' }} loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`} />

                <Menu.Button as="button"> {/* ปุ่มปิดเมนู */}
                  <FontAwesomeIcon icon={faXmark} className="h-7 w-7 text-black" />
                </Menu.Button>
              </div>
              <Menu.Item><h3 className='text-xl text-gray-700'>  <FontAwesomeIcon icon={faTv} />  รายการทีวี</h3></Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/thediscussion"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/tdc.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ถกไม่เถียง
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/HotNewsCh7HD"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/news-02.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ข่าวเย็นประเด็นร้อน
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/OneChampionship"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/one.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ONE
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/onelumpinee"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/one-lumpinee.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ONE Lumpinee
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/cartoon.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    การ์ตูนดังรายสัปดาห์
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/spyxfamily"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    Spy x Family
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/campfire-cooking"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    Campfire Cooking in Another World with My Absurd Skill
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/Masked-Rider-Saber"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    มาสค์ไรเดอร์
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/ultraman-taiga-the-movie"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    อุลตร้าแมน
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/gundam-build-divers-re-rise"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    กันดั้มบิลด์ไดเวอร์ส รี:ไรซ์ Gundam Build Div
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/TSD_MoneyGuru"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/money.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    เงินทองของจริง
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/FairtexFight"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/fairtex.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    FAIRTEX FIGHT มวยมันพันธุ์ EXTREM
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/vnl2024"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/vnl.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    VOLLEYBALL NATIONS LEAGUE  2024
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/ka-ngow"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/kangow.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ฆ่าโง่
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/HugMeCh7HD"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/hug.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    ขอกอดหน่อย
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/program/Beartai7HD"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >
                    <Image src="/images/tv-program/beartai.jpg" width={100} height={100} alt="logoprogram"
                      className="rounded-2xl mr-3"
                      style={{ height: '100px', width: '100px' }}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(100, 100)
                      )}`} />
                    BEARTAI 7HD ไอทีและยานยนต์
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="http://www.teromusic.com/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-xl animate__animated animate__fadeInLeft animate__delay-custom-1 '
                    )}
                  >

                    <FontAwesomeIcon icon={faTv} /> ดนตรี
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item><h3 className='px-4 py-2 text-xl text-gray-700'>  <FontAwesomeIcon icon={faTv} />  งานแสดง</h3></Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://corporate.teroasia.com/concerts-events/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    คอนเสิร์ต
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://www.thaiticketmajor.com/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    ไทยทิคเก็ตเมเจอร์
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item><h3 className='px-4 py-2 text-xl text-gray-700'>  <FontAwesomeIcon icon={faTv} />  ASIA</h3></Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://www.popolay.com"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    Popolay (Myanmar)
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://thaiwave.club/cn/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    Thaiwave (Chinese & English)
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://filmbangkok.asia"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    Film Bangkok
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item><h3 className='px-4 py-2 text-xl text-gray-700'>  <FontAwesomeIcon icon={faTv} />  CORPORATE</h3></Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://corporate.teroasia.com/"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    TERO ENTERTAINMENT
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/terohealthclinic"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-md animate__animated animate__fadeInLeft animate__delay-custom-1 text-xl'
                    )}
                  >

                    TERO HEALTH CLINIC
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/advertising"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'flex items-center px-4 py-2 text-xl animate__animated animate__fadeInLeft animate__delay-custom-1 '
                    )}
                  >

                    <FontAwesomeIcon icon={faTv} /> ติดต่อโฆษณา
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
