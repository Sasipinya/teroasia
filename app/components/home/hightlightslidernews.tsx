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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
function HightlightSliderNews({ data }: { data: any }) {

    return (
        <div className='hidden md:block bg-black'>
            <div className="container mx-auto my-6 p-2">
                <div className='flex'>
                    <h3 className="mb-6 text-2xl font-bold text-white mr-4">ข่าวสุขภาพ</h3><div className='flex-1 my-4 border-t border-gray-300'></div>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                >
                    {data && data.length > 0 && data.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                                <Link href={`/news/${item.news_id}`} className='cursor-pointer'>
                                <OptimizedImage src={item.image_url} alt={item.news_title} width={300} height={100} style={{ height: 'auto' }} className='w-full rounded-md'  />
                                </Link>
                                <div className=" py-4">
                                    <p className="">
                                        <Link href={`/news/${item.news_id}`} className='2xl:text-lg text-md  text-white line-clamp-2 hover:text-red-700 2xl:line-clamp-1 cursor-pointer' >{item.news_title}</Link>
                                    </p>
                                </div>
                                <div className=" pt-4 pb-2 flex justify-between">
                                    <div className="px-3 py-1 flex mr-1 mb-2">
                                        <Calendar className=" w-[16px] h-[16px] text-gray-200 mr-1"  />
                                        <span className="    2xl:text-sm text-xs text-gray-200 ">
                                            {item.news_strdate} </span>

                                    </div>
                                    <div className="px-3 py-1 flex mr-1 mb-2">
                                        <Eye className="w-[16px] h-[16px] text-xs text-gray-200 mr-1" />
                                        <span className="    2xl:text-sm text-xs text-gray-200 ">
                                            {NumberFormat(item.news_count)} </span>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}
export default HightlightSliderNews