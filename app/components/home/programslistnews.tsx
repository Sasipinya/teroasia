
import React from 'react';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react'



const ProgramsListNews = ({ data }: { data: any }) => {
  return (
    <div >
      {data.map((program: any, index: number) => (
         <div className="container mx-auto mb-10" key={index}>
        <div  className="flex flex-row justify-between md:flex-row-reverse">
          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap">
              {program.items &&
                program.items.length > 0 &&
                program.items.map((item: any, index: number) => (
                  <div className="w-1/3 p-1" key={"item" + index}>
                    <div className="max-w-sm rounded overflow-hidden border shadow-md">
                      <Link href={`/news/${item.news_id}`}>
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
                            className=" text-base text-gray-700 line-clamp-2 hover:text-red-700  cursor-pointer"
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
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div
              style={{ backgroundColor: program.info.tvp_color }}
              className="h-full rounded-md flex flex-col justify-between"
            >
              <div className="w-full flex justify-center">
                <OptimizedImage
                  src={program.info.tvp_logo}
                  width={400}
                  height={500}
                  style={{ height: "auto" }}
                  alt={program.info.program_name}
                />
              </div>
              <div className="text-center px-3 mb-5">
                <h1 className=" text-xl font-bold text-white">
                  {program.info.program_name}
                </h1>
                <h2 className=" text-sm text-white mb-4">
                  {program.info.program_desc}
                </h2>
                <div className="w-full flex justify-center">
                  <Link href={`/program/${program.info.program_slug}`}>
                    <button className="bg-gray-300 text-black hover:bg-red-600 hover:text-white font-bold py-3 px-10 rounded-3xl">
                      ดูทั้งหมด
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
export default ProgramsListNews;