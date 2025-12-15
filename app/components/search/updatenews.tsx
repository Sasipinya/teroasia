'use client';
import React from 'react';
import Link from 'next/link';
import { NumberFormat } from '../../../lib/utils/kformat';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';


interface UpdateNewsProps {
  data: Array<{
    news_id: string;
    image_url: string;
    news_title: string;
    news_strdate: string;
    news_count: number;
  }>;
}

function UpdateNews({ data }: UpdateNewsProps) {
  return (
    <div className="hidden md:flex container mx-auto my-6 ">



      <div className=" bg-white px-2">

        <div className='flex'>

          <Link href="/allnews/newsupdate?page=1"><h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4">ข่าวอัปเดต</h3>      </Link><div className='flex-1 my-4 border-t border-gray-600'></div>

        </div>
        <div className="flex flex-wrap">
          {data &&
            data.length > 0 &&
            data.map((item: any, index: number) => (
              <div className="w-1/2 md:w-1/3 p-1" key={index}>
                <div className="max-w-sm rounded overflow-hidden border shadow-md">
                  <Link href={`/news/${item.news_id}`} className='cursor-pointer'>
                    <OptimizedImage
                      src={item.image_url}
                      alt={item.news_title}
                      width={300}
                      height={100}
                      className="w-full rounded-tl-md rounded-tr-md"

                    />
                  </Link>
                  <div className="px-3 py-4">
                    <div className="mb-2">
                      <Link
                        href={`/news/${item.news_id}`}
                        className=" text-base  text-gray-700 line-clamp-2 hover:text-red-700 "
                      >
                        {item.news_title}
                      </Link>
                    </div>
                  </div>
                  <div className="flex p-2 border-t justify-between">
                    <div className="mr-3 flex align-items-center">
                      <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className=" text-xs text-gray-700">
                        {NumberFormat(item.news_count)}
                      </span>
                    </div>
                    <div className="flex align-items-center">
                      <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className=" text-xs text-gray-700">
                        {item.news_strdate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-end">
          <Link href="/program/newsupdate">
            <button className="font-bold bg-gray-300 text-black hover:bg-red-600 hover:text-white py-3 px-12 rounded-3xl">
              ดูทั้งหมด
            </button>
          </Link>

        </div>
      </div>

    </div>




  );
}

export default UpdateNews;