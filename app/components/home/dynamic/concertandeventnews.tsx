'use client';
import React from 'react';
import { NumberFormat } from '../../utils/kformat';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { OptimizedImage } from '../../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
function ConcertandEventNews({ data }: { data: any }) {


    return (

        <div className="container mx-auto my-6 p-2">
            <div className='flex'>
                <h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4"><span className="text-red-700">TERO</span> CONCERTS & EVENTS</h3><div className='flex-1 my-4 border-t border-gray-600'></div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
            >
                {data.items && data.items.length > 0 && data.items.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="flex rounded-md shadow-md border ">
                            <OptimizedImage
                                src={item.image_url}
                                alt={item.news_title}
                                className="h-50 w-50 object-cover rounded-l-md"
                                width={500}
                                height={300}
                                style={{ height: 'auto' }}
                                
                            />
                            <div className="my-4 p-3 flex flex-col justify-between">
                                <h3 ><Link href={`/news/${item.news_id}`} className='text-lg  text-gray-600 hover:text-red-700 line-clamp-2' >{item.news_title}</Link></h3>
                                <div>
                                    <div className=" py-4 pb-2 flex">
                                        <div className='px-3 py-1 mr-1 mb-2 flex align-items-center'>
                                            <Calendar className="w-[16px] h-[16px]  text-gray-600 mr-1" />
                                            <span className=" 2xl:text-sm text-xs  text-gray-600">
                                                {item.news_strdate} </span>
                                        </div>
                                        <div className='px-3 py-1  mb-2 flex align-items-center'>
                                            <Eye className="w-[16px] h-[16px] text-gray-600 mr-1" />
                                            <span className=" 2xl:text-sm text-xs  text-gray-600">
                                                {NumberFormat(item.news_count)} </span>
                                        </div>


                                    </div>
                                    <Link href={`/news/${item.news_id}`} className="mt-4 btn 2xl:text-sm text-xs text-gray-600 bg-gray-300  hover:bg-red-600 hover:text-white shadow-none rounded-full px-6 py-1">
                                        อ่านเพิ่มเติม
                                    </Link></div>
                            </div>

                        </div>


                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}
export default ConcertandEventNews