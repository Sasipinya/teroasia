'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { shimmer, toBase64 } from '../../../lib/utils/shimer';
import { thaiDate } from '../../../lib/utils/thaidate';
import NavMenu from './navmenu';
import SearchModal from './SearchModal';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import NavbarMobile from './mobile/navmenu';
import Link from 'next/link';



export default function Header() {

  const datenow = new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSearch = (term: string) => setSearchTerm(term);

  return (
    <div>
       <header className="block md:hidden  bg-white ">
       
        <NavbarMobile/>
       
        </header>
      <header className="hidden md:block bg-white ">
        <div className="container mx-auto pt-1 pb-0">
          <div className="flex flex-row  items-center">
            <div className="p-2 w-1/3 flex items-center justify-start">
              <Link href="https://www.facebook.com/TERODigital" className="mr-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-blue-500">
              <FontAwesomeIcon icon={faFacebookF} className="text-l " />
              </Link>
              <Link href="https://x.com/tero_asia" className="mr-1 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all duration-300 ease-in-out hover:bg-black">
                <FontAwesomeIcon icon={faXTwitter} className="text-l " />
              </Link>
              <Link href="https://www.instagram.com/terodigital/" className=" w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-red-500">
                <FontAwesomeIcon icon={faInstagram} className="text-l " />
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-center">
            <Link href='/'>
              <Image src={"/images/logo_tero.png"} alt={"logoteroasia"} width={150} height={48} style={{ height: '48px' , width:'150px'}} loading="lazy" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(150, 48))}`} />
              </Link>
            </div>
            <div className="w-1/3 flex items-center justify-end">
              <a href="/auth/signin" className="text-gray-600 md:text-black font-semibold">เข้าสู่ระบบ</a>

              <p className="ml-1 bg-gray-700 text-white rounded-3xl p-1 pl-3 pr-3 text-sm">{thaiDate(datenow)}</p>

            </div>
          </div>

        </div>
        <div className="container mx-auto flex justify-between border-b border-b-gray-200">
          <NavMenu />
          <div className='p-2 items-center flex'>
            <button
              className=" hover:text-red-600 text-gray-600 font-bold" aria-label="Search"

              onClick={handleOpenModal}
            >
              <FontAwesomeIcon icon={faSearch} className="text-l" />
            </button>
            

            <SearchModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSearch={handleSearch}
            />

            
          </div>
        </div>

      </header>
    </div>
  );
};

