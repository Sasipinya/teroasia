
interface Program {
  program_permalink: string;
  program_mini_icon: string;
  program_name: string;
}

interface CategoryData {
  category_name: string;
  category_name_en: string;
  programs: Program[];
}

interface MiddleNavigate {
  middle_navigate: {
    [key: number]: CategoryData;
  };
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#e2e2e2" offset="20%" />
        <stop stop-color="#888" offset="50%" />
        <stop stop-color="#e2e2e2" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const LogoSlider = ({ programs }: { programs: Program[] }) => {
  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      className="w-full"
    >
      {programs.map((program, index) => (
        <SwiperSlide key={index}>
          <Link 
            href={`/program/${program.program_permalink}`}
            className="block w-full "
          >
            <div className="relative w-20 h-20 mx-auto">
              <Image
                src={program.program_mini_icon}
                alt={program.program_name}
                fill
                className="object-cover rounded-full border-2 border-gray-200 "
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(100, 100)
                )}`}
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function MenuCategory({ data }: { data: MiddleNavigate }) {
 

  if (!data) return <div>Loading...</div>;
  const [tabs, setTabs] = useState<CategoryData[]>([]);
  useEffect(() => {
    const newTabs = [1, 2, 3].map(index => ({
      category_name: data?.middle_navigate[index]?.category_name,
      category_name_en: data?.middle_navigate[index]?.category_name_en,
      programs: data?.middle_navigate[index]?.programs
    })).filter(tab => tab.category_name && tab.category_name_en && tab.programs);
  
    setTabs(newTabs);
  }, [data]);

 

  return (
    <div className="container mx-auto px-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-3xl   bg-[#e3e3e3]">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `w-full rounded-3xl py-3.5 text-lg font-medium leading-5
                 ${
                   selected
                     ? 'bg-[#ed1d24] shadow text-white'
                     : 'text-slate-700 hover:bg-white/[0.12] hover:text-[#ed1d24]'
                 }`
              }
            >
              {tab.category_name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-1">
          {tabs.map((tab, index) => (
            <Tab.Panel
              key={index}
              className={`rounded-3xl bg-white p-3
                  focus:outline-none `}
            >
              <LogoSlider programs={tab.programs} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}