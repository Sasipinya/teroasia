
import React from 'react';
import Link from 'next/link';
import { NumberFormat } from '../../../lib/utils/kformat';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react'



interface ProgramsListNewsProps {
  data: Array<{
    info: {
      tvp_color: string;
      tvp_logo: string;
      program_name: string;
      program_slug: string;
      program_desc: string;
    };
    items: Array<{
      news_id: number;
      news_title: string;
      image_url: string;
      news_count: number;
      news_strdate: string;
    }>;
  }>;
}

const ProgramsListNews = ({ data }: ProgramsListNewsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((program: any, index: number) => (
        <div key={index}>
          <div className="flex flex-col justify-between h-full">
            <div className="grid grid-cols-3 gap-1">
              {program.items &&
                program.items.length > 0 &&
                program.items.map((item: any, index: number) => (
                  <div key={"item" + index} className="flex flex-col">
                    <Link href={`/news/${item.news_id}`}>
                      <OptimizedImage
                        src={item.image_url}
                        alt={item.news_title}
                        width={300}
                        height={100}
                        className="rounded-tl-md rounded-tr-md"
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
            <div className="flex flex-col justify-between bg-white rounded-md shadow-md">
              <div className="p-3 mt-3 w-full flex justify-center">
                <OptimizedImage
                  src={program.info.tvp_logo}
                  width={400}
                  height={500}
                  style={{ height: "auto" }}
                  alt={program.info.program_name}
                />
              </div>
              <div className="text-center px-3 mb-5">
                <h1 className=" text-xl font-bold text-gray-700">
                  {program.info.program_name}
                </h1>
                <h2 className=" text-sm text-gray-700 mb-4">
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
      ))}
    </div>
  );
}
export default ProgramsListNews;