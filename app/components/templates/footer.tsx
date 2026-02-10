'use client';
import Image from 'next/image';
import React from 'react';
import FooterM from './mobile/footer';
import Link from 'next/link'


export default function Footer({ page }: { page: string }) {
const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="hidden md:block md:absolute md:w-full p-2 border-t-4 border-t-gray-500 pt-[50px]  row-start-3 md:flex gap-6 flex-wrap items-center justify-center bg-[#1f2024]">
        {page!=='home'&&<div className="container mx-auto">
          <div className="flex w-full  text-white">
            <div className="flex-1">
              <h3 className="font-bold mb-2">รายการ</h3>
              <ul>
                <li className="text-sm mb-1"><Link href='/'>› รายการ</Link></li>
                <li className="text-sm mb-1"><Link href='/'>› ผลบอล</Link></li>
                <li className="text-sm"><Link href='/'>› อื่นๆ</Link></li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2">ข่าว</h3>
              <ul>
                <li className="text-sm "><Link href='/'>› ข่าวทั้งหมด</Link></li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2">LIVE</h3>
              <ul>
                <li className="text-sm "><Link href='/'>› ทีวีออนไลน์</Link></li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="font-bold mb-2">เกี่ยวกับเรา</h3>
              <ul>
                <li className="text-sm mb-1"><Link href='/'>› Tero Entertainment</Link></li>
                <li className="text-sm mb-1"><Link href='/'>› รู้จักเรา</Link></li>
                <li className="text-sm mb-1"><Link href='/'>› ข่าวประชาสัมพันธ์</Link></li>
                <li className="text-sm mb-1"><Link href='https://corporate.teroasia.com/privacypolicy.php'>› นโยบายด้านลิขสิทธิ์</Link></li>
                <li className="text-sm mb-1"><Link href='https://corporate.teroasia.com/privacypolicy.php'>› นโยบายสิทธิส่วนบุคคล</Link></li>
                <li className="text-sm mb-1"><Link href='https://corporate.teroasia.com/privacypolicy.php'>› ข้อกำหนด / เงื่อนไข</Link></li>
                <li className="text-sm mb-1"><Link href='/'>› ร่วมงานกับเรา</Link></li>
                <li className="text-sm "><Link href='/'>› ติดต่อเรา</Link></li>
              </ul>
            </div>
          </div>
        </div>}

        <div className="w-full bg-black text-white py-4">
          <div className="container mx-auto flex items-center">

            <Image src={"/images/logo.png"} alt="Tero Entertainment Logo" className=" mr-4" width={135} height={70} />
            <div className="">
              <p className="text-lg font-medium">Tero Entertainment Public Company Limited.</p>
              <div className="container mx-auto flex justify-center mt-4">
                <Link href="//corporate.teroasia.com/concerts-events/" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf02.png"} alt="Concerts & Events" className="" width={183} height={34} />
                </Link>
                <Link href="//corporate.teroasia.com/tv/" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf01.png"} alt="TV" className="" width={133} height={34} />
                </Link>
                <Link href="//teroradio.com/" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf04.png"} alt="Radio" className="" width={99} height={34} />
                </Link>
                <Link href="//teromusic.com/" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf03.png"} alt="Music" className="" width={99} height={34} />
                </Link>
                <Link href="//corporate.teroasia.com/index.php#services" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf052.png"} alt="Service" className="" width={109} height={34} />
                </Link>
                <Link href="//corporate.teroasia.com/index.php#sports" className="flex flex-col items-center mx-3">
                  <Image src={"/images/iconf06.png"} alt="Sports" className="" width={109} height={34} />
                </Link>
              </div>




            </div>
          </div>



          <div className="border-t border-t-gray-400 container mx-auto  text-xs mt-4 pt-2">
            © {currentYear} Tero Entertainment PCL. All rights reserved.
          </div>
        </div>
      </footer>
      <FooterM />
    </>

  );
};

