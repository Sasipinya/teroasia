'use client';
import Image from 'next/image';
import React from 'react';



export default function Footer() {

  return (
    <footer className="p-2 border-t-4 border-t-gray-500 pt-[50px]  row-start-3 flex gap-6 flex-wrap items-center justify-center bg-[#1f2024]">
      <div className="container mx-auto">
      <div className="flex w-full  text-white">
        <div className="flex-1">
          <h3 className="font-bold mb-2">รายการ</h3>
          <ul>
            <li className="text-sm mb-1">› รายการ</li>
            <li className="text-sm mb-1">› ผลบอล</li>
            <li className="text-sm">› อื่นๆ</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">ข่าว</h3>
          <ul>
            <li className="text-sm ">› ข่าวทั้งหมด</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">LIVE</h3>
          <ul>
            <li className="text-sm ">› ทีวีออนไลน์</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">เกี่ยวกับเรา</h3>
          <ul>
            <li className="text-sm mb-1">› Tero Entertainment</li>
            <li className="text-sm mb-1">› รู้จักเรา</li>
            <li className="text-sm mb-1">› ข่าวประชาสัมพันธ์</li>
            <li className="text-sm mb-1">› นโยบายด้านลิขสิทธิ์</li>
            <li className="text-sm mb-1">› นโยบายสิทธิส่วนบุคคล</li>
            <li className="text-sm mb-1">› ข้อกำหนด / เงื่อนไข</li>
            <li className="text-sm mb-1">› ร่วมงานกับเรา</li>
            <li className="text-sm ">› ติดต่อเรา</li>
          </ul>
        </div>
      </div>
      </div>
      
      <div className="w-full bg-black text-white py-4">
        <div className="container mx-auto flex items-center">
        
          <Image src={"/images/logo.png"} alt="Tero Entertainment Logo" className=" mr-4" width={135} height={70} />
          <div className="">
            <p className="text-lg font-medium">Tero Entertainment Public Company Limited.</p>
            <div className="container mx-auto flex justify-center mt-4">
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf02.png"} alt="Concerts & Events" className="" width={183} height={34} />

              </a>
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf01.png"} alt="TV" className="" width={133} height={34} />

              </a>
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf04.png"} alt="Radio" className="" width={99} height={34} />

              </a>
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf03.png"} alt="Music" className="" width={99} height={34} />

              </a>
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf052.png"} alt="Service" className="" width={109} height={34} />

              </a>
              <a href="#" className="flex flex-col items-center mx-3">
                <Image src={"/images/iconf06.png"} alt="Sports" className="" width={109} height={34} />

              </a>
            </div>




          </div>
        </div>



        <div className="border-t border-t-gray-400 container mx-auto  text-xs mt-4 pt-2">
          © 2024 Tero Entertainment PCL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

