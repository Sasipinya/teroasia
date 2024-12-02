'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import { FreeMode } from 'swiper/modules';

interface MenuItem {
  program_name: string;
  program_permalink: string;
}

interface MenuHeadProgramsProps {
  items: MenuItem[];
}

const MenuHeadPrograms: FC<MenuHeadProgramsProps> = ({ items }) => {

  // Swiper configuration
  const swiperConfig: SwiperOptions = {
    modules: [FreeMode],
    spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false,
      hide: true,
    },
  };

  return (
    <div className='container mx-auto'>
    <div className="nav-header-mobile">
      <Swiper {...swiperConfig}>
        {items.map((item, index) => (
          <SwiperSlide key={index} >
            <div className="flex ">
              <Link 
                href={`/program/${item.program_permalink}`}
                className={` text-gray-700 font-medium tablinks ${index === 0 ? 'tablinks-active' : ''}`}
                id={`defaultOpen${index}`}
              >
                {item.program_name}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default MenuHeadPrograms;