'use client';
import React from 'react';

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


//  Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { OptimizedImage } from '../../utils/optimizesimage';



const renderHtml = () => {
    const movies = [
        {
            id: 1,
            image: "/filmbkk/images/movie-Angulimala.jpg",
            year: "2003",
            genre: "Biographical",
            title: "Angulimala องคุลิมาล"
        },
        {
            id: 2,
            image: "/filmbkk/images/movie-BangkokDangerous.jpg",
            year: "2000",
            genre: "Action",
            title: "Bangkok Dangerous ฮีโร่เพชฌฆาต ล่าข้ามโลก"
        },
        {
            id: 3,
            image: "/filmbkk/images/movie-BangkokDangerous-1.jpg",
            year: "2008",
            genre: "Action",
            title: "Bangkok Dangerous ฮีโร่เพชฌฆาต ล่าข้ามโลก"
        },
        {
            id: 4,
            image: "/filmbkk/images/movie-BangRajan.jpg",
            year: "2000",
            genre: "Biographical",
            title: "Bang Rajan บางระจัน"
        },
        {
            id: 5,
            image: "/filmbkk/images/movie-GoalClub.jpg",
            year: "2001",
            genre: "Action-Drama",
            title: "Goal Club เกมล้มโต๊ะ"
        },
        {
            id: 6,
            image: "/filmbkk/images/movie-OneTakeOnly.jpg",
            year: "2002",
            genre: "Drama",
            title: "One Take Only ส้มแบงค์มือใหม่หัดขาย"
        },
        {
            id: 7,
            image: "/filmbkk/images/movie-SarsWars.jpg",
            year: "2004",
            genre: "Fantasy",
            title: "Sars Wars ขุนกระบี่ผีระบาด"
        },
        {
            id: 8,
            image: "/filmbkk/images/movie-SavingPrivateTootsie.jpg",
            year: "2004",
            genre: "Action-Comedy",
            title: "Saving Private Tootsie พรางชมพู กระเทยประจัญบาน"
        },
        {
            id: 9,
            image: "/filmbkk/images/movie-TearsoftheBlackTiger.jpg",
            year: "2000",
            genre: "Action-Romance",
            title: "Tears of the Black Tiger ฟ้าทะลายโจร"
        },
        {
            id: 10,
            image: "/filmbkk/images/movie-TheRemaker.jpg",
            year: "2005",
            genre: "Romance",
            title: "The Remaker คนระลึกชาติ"
        },
        {
            id: 11,
            image: "/filmbkk/images/movie-TheSiamRenaissance.jpg",
            year: "2004",
            genre: "Romance-Drama",
            title: "The Siam Renaissance ทวิภพ"
        },
        {
            id: 12,
            image: "/filmbkk/images/movie-NothingtoLose.jpg",
            year: "2002",
            genre: "Action-Drama",
            title: "1+1=0 Nothing to Lose หนึ่งบวกหนึ่งเป็นศูนย์"
        }
    ];
    return (
        <>


            <section className="relative  bg-cover bg-center" >
                <div className="container mx-auto  my-2">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
                        <div className="lg:col-span-3">
                            <OptimizedImage src="/filmbkk/images/logo.png" style={{ width: 'auto', height: 'auto' }} alt="Film Bangkok Logo" className="" width={240} height={240} />
                        </div>
                        <div className="lg:col-span-9">
                            <p className="text-white text-lg">
                                Film Bangkok was first established in 1999 and is one of Thailand's premier production houses with more than 20 years of experience in the motion picture industry.
                            </p>
                        </div>
                    </div>

                    <Swiper

                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={4.5}
                        breakpoints={{

                            1520: {
                                slidesPerView: 6.5,
                                spaceBetween: 10,
                            },
                        }}
                        navigation
                    >
                        {movies && movies.length > 0 && movies.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Link href="https:/filmbangkok.asia/" target="_blank" className="block">
                                    <div className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="relative aspect-[3/4]">
                                            <OptimizedImage width={400} height={500} style={{ height: 'auto' }} src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-4">
                                            <div className="grid grid-cols-12 gap-2 mb-2">
                                                <div className="col-span-4">
                                                    <div className="text-sm text-white font-medium">{item.year}</div>
                                                </div>
                                                <div className="col-span-8">
                                                    <div className="text-xs text-red-500">{item.genre}</div>
                                                </div>
                                            </div>
                                            <h3 className="text-base  text-white ">{item.title}</h3>
                                        </div>
                                    </div>
                                </Link></SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </section>



        </>
    )


}
export default function Filmbkk() {




    return (
        <>

            <div className='bg-black ' style={{ backgroundImage: "url(/filmbkk/images/bg-bkk-01.jpg)", backgroundSize: "cover" }}>
                <div className="container mx-auto pt-8">

                    {renderHtml()}

                </div>
            </div>

        </>
    )

}