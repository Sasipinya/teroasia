'use client';
import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
interface TopWeekNewsProps {
    data: {
        label: string;
        items: {
            news_id: number;
            news_title: string;
            news_pic_full: string;
            news_count: number;
            news_strdate: string;
        }[];
    }[];
}
function TopWeekNews({ data }: TopWeekNewsProps) {
    const sortedArr = [...data].reverse();
    const [activeTab, setActiveTab] = useState(0);
    return (

        <div className="hidden md:block container mx-auto my-6 p-2">
            <ul className="flex space-x-4">
                {sortedArr && sortedArr.length > 0 && sortedArr.map((tab: any, index: number) => (
                    <li key={index}>
                        <button
                            className={`px-4 py-2 rounded-md ${activeTab === index
                                ? 'bg-red-600 text-white font-bold'
                                : 'bg-gray-200 text-black hover:bg-gray-300'
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label == 'top_view_30' ? 'เดือนนี้' : tab.label == 'top_view_7' ? 'สัปดาห์นี้' : tab.label == 'top_view_1' ? 'วันนี้' : ''}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-4">
                <Swiper modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation className="my-4">
                    {sortedArr && sortedArr.length > 0 && sortedArr[activeTab].items.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className=" rounded-md   border  shadow-md">
                                <Link href={`/news/${item.news_id}`} className='cursor-pointer' >
                                    <OptimizedImage src={item.news_pic_full} alt={item.news_title} width={300} height={100} style={{ height: 'auto' }} className='w-full rounded-tl-md rounded-tr-md' />
                                </Link>
                                <div className="px-3 py-4">
                                    <p >
                                        <Link href={`/news/${item.news_id}`} className='2xl:text-lg text-md text-gray-600 hover:text-red-700 line-clamp-2 2xl:line-clamp-1 cursor-pointer' >{item.news_title}</Link>
                                    </p>
                                </div>
                                <div className="p-2 pt-4 pb-2  flex justify-between">
                                    <div className='mr-3 flex align-items-center'>
                                        <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                                        <span className="2xl:text-sm text-xs  text-gray-700 ">
                                            {NumberFormat(item.news_count)}
                                        </span>
                                    </div>
                                    <div className='flex align-items-center '>
                                        <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                                        <span className=" 2xl:text-sm text-xs  text-gray-700 ">
                                            {item.news_strdate}</span>
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

export default TopWeekNews