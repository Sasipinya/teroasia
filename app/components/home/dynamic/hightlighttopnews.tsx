'use client';
import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../../utils/optimizesimage';


const HightlightTopNews = ({ data }: { data: any }) => {

  return (
    <div className="hidden md:block container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-start p-2 ">
          <div className='relative'>
            <OptimizedImage src={data[0].top_image}
              alt={data[0].top_title}
              width={500}
              height={300}
              style={{ height: 'auto' }}
              className="w-full  rounded-tl-md rounded-tr-md " 
              priority={true}/>

            <div className='absolute top-0 right-0 bg-gradient-to-r rounded-bl-xl from-gray-500 to-black-500  text-white font-bold text-sm 2xl:text-md  p-2'>
              {data[0].date_for_show}
            </div>
          </div>

          <div className='border rounded-bl-md rounded-br-md h-full shadow-md'>
            <p className="    h-full p-3 ">
              <Link href={`/news/${data[0].news_id}`} className='2xl:text-2xl text-xl text-gray-600 hover:text-red-700 line-clamp-3 '>{data[0].top_title}</Link>
            </p></div>
        </div>

        <div>
          <div className="flex">
            <div className="flex-1 p-2 ">
              <div className='relative'>
                <OptimizedImage
                  src={data[1].top_image}
                  alt={data[1].top_title}
                  width={300}
                  height={100}
                  style={{ height: 'auto' }}

                  className="w-full rounded-tl-md rounded-tr-md" 
                />
                <div className='absolute top-0 right-0 bg-gradient-to-r rounded-bl-xl from-gray-500 to-black-500  text-white font-bold text-sm 2xl:text-md  p-2'>
                  {data[1].date_for_show}
                </div>
              </div>

              <p className=" border rounded-bl-md rounded-br-md p-3  shadow-md">
                <Link href={`/news/${data[2].news_id}`} className='2xl:text-lg text-md text-gray-600 hover:text-red-700 line-clamp-2 '>{data[2].top_title}</Link>
              </p>
            </div>

            <div className="flex-1 p-2 ">
              <div className='relative'>
                <OptimizedImage
                  src={data[2].top_image}
                  alt={data[2].top_title}
                  width={300}
                  height={100}
                  style={{ height: 'auto' }}

                  className="w-full rounded-tl-md rounded-tr-md" 
                />
                <div className='absolute top-0 right-0 bg-gradient-to-r rounded-bl-xl from-gray-500 to-black-500  text-white font-bold text-sm 2xl:text-md  p-2'>
                  {data[2].date_for_show}
                </div>
              </div>

              <p className=" border rounded-bl-md rounded-br-md p-3  shadow-md">
                <Link href={`/news/${data[2].news_id}`} className='2xl:text-lg text-md text-gray-600 hover:text-red-700 line-clamp-2 '>{data[2].top_title}</Link>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 p-2 ">
              <div className='relative'>
                <OptimizedImage
                  src={data[3].top_image}
                  alt={data[3].top_title}
                  width={300}
                  height={100}
                  style={{ height: 'auto' }}

                  className="w-full rounded-tl-md rounded-tr-md" 
                />
                <div className='absolute top-0 right-0 bg-gradient-to-r rounded-bl-xl from-gray-500 to-black-500  text-white font-bold text-sm 2xl:text-md  p-2'>
                  {data[3].date_for_show}
                </div>
              </div>

              <p className=" border rounded-bl-md rounded-br-md p-3  shadow-md">
                <Link href={`/news/${data[3].news_id}`} className='2xl:text-lg text-md text-gray-600 hover:text-red-700 line-clamp-2 '>{data[3].top_title}</Link>
              </p>
            </div>

            <div className="flex-1 p-2 ">
              <div className='relative'>
                <OptimizedImage
                  src={data[4].top_image}
                  alt={data[4].top_title}
                  width={300}
                  height={100}
                  style={{ height: 'auto' }}

                  className="w-full rounded-tl-md rounded-tr-md" 
                />
                <div className='absolute top-0 right-0 bg-gradient-to-r rounded-bl-xl from-gray-500 to-black-500  text-white font-bold text-sm 2xl:text-md  p-2'>
                  {data[4].date_for_show}
                </div>
              </div>

              <p className=" border rounded-bl-md rounded-br-md p-3  shadow-md">
                <Link href={`/news/${data[4].news_id}`} className='2xl:text-lg text-md text-gray-600 hover:text-red-700 line-clamp-2 '>{data[4].top_title}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HightlightTopNews