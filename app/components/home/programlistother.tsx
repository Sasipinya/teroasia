'use client';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import Link from 'next/link';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
interface ProgramListOtherProps {
  data: {
    program_slug: string;
    tvp_header_desk: string;
    program_name: string;
  }[];
}

function ProgramListOther({ data }: ProgramListOtherProps) {
  return (
    <div className="hidden md:block container mx-auto my-6 p-2">
      <div className="flex">
        <h3 className="mb-6 text-2xl font-bold text-gray-600 mr-4">
          <span className="text-red-700">รายการ</span> อื่นๆ
        </h3>
        <div className="flex-1 my-4 border-t border-gray-600"></div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {data &&
          data.length > 0 && data.filter(item => item.tvp_header_desk).length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg border">
                <Link
                  href={`/program/${item.program_slug}`}
                  className="cursor-pointer"
                >
                  <OptimizedImage
                    src={item.tvp_header_desk}
                    alt={item.program_name}
                    width={200}
                    height={200}
                    style={{ height: 'auto' }}
                    className="w-full rounded-tl-md rounded-tr-md"
                  />
                </Link>
                <div className="text-center p-3">
                  <h3 className=" text-lg text-gray-600 hover:text-red-700">
                    <Link
                      href={`/program/${item.program_slug}`}
                      className="cursor-pointer"
                    >
                      {item.program_name}
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
export default ProgramListOther