'use client';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Link from 'next/link';
import { NumberFormat } from '../../utils/kformat';
import { Calendar, Eye } from 'lucide-react';
import { OptimizedImage } from '../../utils/optimizesimage';

function MusicNews({ data }: { data: any }) {


    return (

        <div className="container mx-auto my-6 p-2">
            <div className='flex'>
                <h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4"><span className="text-red-700">TERO</span> MUSIC</h3><div className='flex-1 my-4 border-t border-gray-600'></div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
            >
                {data.items && data.items.length > 0 && data.items.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[260px] bg-cover bg-center rounded-md">
                            <OptimizedImage
                                src={item.image_url}
                                alt={item.news_title}
                                width={300}
                                height={300}
                                className={`rounded-md h-full w-full ratio-16/9 object-cover`}
                                
                            />
                            <div className="absolute inset-0 bg-black/50 rounded-md">
                                <div className="p-4 h-full flex flex-col justify-end ">
                                    <div className="relative w-full">
                                        <div className="mb-2">
                                            <Link href="/program/music" className="inline-block px-2 py-1 bg-pink-600 text-white text-xs rounded uppercase">music</Link>
                                        </div>

                                        <h3 className="mb-2 ">
                                            <Link href={`/news/${item.news_id}`} className="2xl:text-lg text-md text-white hover:text-red-600 line-clamp-2">
                                                {item.news_title}
                                            </Link>
                                        </h3>

                                        <div className="flex items-center text-white space-x-4 justify-between">
                                            <div className="flex items-center 2xl:text-sm text-xs ml-1">
                                                <Eye className="w-[16px] h-[16px]" />
                                                <span className="ml-1"> {NumberFormat(item.news_count)}</span>
                                            </div>
                                            <div className="flex items-center 2xl:text-sm text-xs">
                                                <Calendar className=" w-[16px] h-[16px]" />
                                                <span className="ml-1">{item.news_strdate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}
export default MusicNews