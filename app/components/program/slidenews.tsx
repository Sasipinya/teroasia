'use client';
import React from 'react';
import Image from "next/image";
import { shimmer, toBase64 } from '../utils/shimer';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { ArrowBigRight, Calendar, Eye } from 'lucide-react';
function SlideNews({ data }: { data: any }) {


  return (

    <div className='w-1/2 mx-auto'>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation

      >
        {data && data.length > 0 && data.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <OptimizedImage src={item.image_url} alt={item.news_title} width={300} height={100} style={{ height: 'auto' }} className='w-full rounded-md'  />
              <div className=" py-4">
                <p className="">
                  <Link href={`/news/${item.news_id}`} className='2xl:text-lg text-md  text-gray-700 line-clamp-2 hover:text-red-700 2xl:line-clamp-1' >{item.news_title}</Link>
                </p>
              </div>
              <div className=" pt-4 pb-2 flex justify-between">
                <div className="px-3 py-1 flex mr-1 mb-2">
                  <Calendar className=" w-[16px] h-[16px] text-gray-600 mr-1" />
                  <span className="    2xl:text-sm text-xs text-gray-600 ">
                    {item.news_strdate} </span>

                </div>
                <div className="px-3 py-1 flex mr-1 mb-2">
                  <Eye className="w-[16px] h-[16px] text-xs text-gray-600 mr-1" />
                  <span className="    2xl:text-sm text-xs text-gray-600 ">
                    {NumberFormat(item.news_count)} </span>
                </div>

              </div>
              <div className="px-3 py-1 flex mr-1 mb-2 align-items-center justify-center">
                <span className="  text-md text-red-500 ">
                  <Link href={`/news/${item.news_id}`}>อ่านเพิ่มเติม</Link> </span>
                <ArrowBigRight className="w-[16px] h-[16px] text-xs text-gray-600 ml-2 mt-1" />
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>

  )
}
export default SlideNews