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
import { OptimizedImage } from '../../utils/optimizesimage';
function ProgramListOther({ data }: { data: any }) {

    return (

        <div className="container mx-auto my-6 p-2">
            <div className='flex'>
                <h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4"><span className="text-red-700">รายการ</span> อื่นๆ</h3><div className='flex-1 my-4 border-t border-gray-600'></div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    1520: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}
                navigation
            >
                {data && data.length > 0 && data.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg border">
                            <OptimizedImage
                                src={item.tvp_header_desk}
                                alt={item.program_name}
                                width={200}
                                height={200}
                                style={{ height: 'auto' }}
                                className='w-full rounded-tl-md rounded-tr-md' 
                                 />
                            <div className=" text-center p-3">
                                <h3 className='2xl:text-xl text-lg text-gray-600 hover:text-red-700'><Link href={`/programs/${item.program_slug}`}>{item.program_name}</Link></h3>
                            </div>

                        </div>


                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}
export default ProgramListOther