interface Program {
    program_permalink: string;
    program_mini_icon: string;
    program_name: string;
  }
'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { OptimizedImage } from '../../../../lib/utils/optimizesimage';
  export const LogoSlider = ({ programs }: { programs: Program[] }) => {
    return (
      <Swiper
        modules={[FreeMode]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        className="w-full"
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/program/${program.program_permalink}`}
              className="block w-full "
            >
              <div className="relative w-20 h-20 mx-auto">
                <OptimizedImage
                  src={program.program_mini_icon}
                  alt={program.program_name}
                  width={50}
                  height={50}
                  className="object-cover rounded-full border-2 border-gray-200 "
  
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };