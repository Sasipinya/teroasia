'use client';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { Calendar, Eye } from 'lucide-react';
import { OptimizedImage } from '../utils/optimizesimage';
interface ConcertandeventProps {
    data: {
        items: Array<{
            image_url: string,
            news_id: number,
            news_title: string,
            news_count: number,
            news_strdate: string
        }>
    }
}

function Concertandevent({ data }: ConcertandeventProps) {
    return (
        <div className="hidden md:block container mx-auto my-6 p-2">
            <div className='flex'>
                <h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4"><span className="text-red-700">TERO</span> MUSIC</h3><div className='flex-1 my-4 border-t border-gray-600'></div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
            >
                {data.items && data.items.length > 0 && data.items.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="flex mb-3" >
                            <Link href={`/news/${item.news_id}`} className='cursor-pointer'>
                                <OptimizedImage src={item.image_url} alt={item.news_title} width={300} height={300} className='h-full w-48 object-cover rounded-tl-md rounded-bl-md' />
                            </Link>
                            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 flex flex-col justify-between leading-normal rounded-tr-md rounded-br-md flex-1">
                                <div className="mb-8">
                                   
                                  
                                    <div >
                                        <Link href={`/news/${item.news_id}`} className=' text-base text-gray-600 hover:text-red-700 line-clamp-2 cursor-pointer'>
                                            {item.news_title}
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className='mr-3 flex align-items-center'>
                                        <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                                        <span className=" text-xs text-gray-700">
                                            {NumberFormat(item.news_count)}
                                        </span>
                                    </div>
                                    <div className='flex align-items-center'>
                                        <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                                        <span className=" text-xs text-gray-700">
                                            {item.news_strdate}
                                        </span>
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
export default Concertandevent