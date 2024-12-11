
import React from 'react';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react'
/*************  ✨ Codeium Command 🌟  *************/
interface ProgramsListNewsProps {
  data: {
    info: {
      program_name: string;
      program_permalink: string;
      tvp_color: string;
      tvp_logo: string;
      program_desc: string;
      program_slug: string;
    };
    items: {
      news_id: number;
      image_url: string;
      news_title: string;
      news_count: number;
      news_strdate: string;
    }[];
  };
}

const ProgramsListNews = ({ data }: ProgramsListNewsProps) => {

  return (
    <div className="hidden md:block container mx-auto p-2 text-gray-600 mb-10">

      <div className="flex  justify-between">
        <div className="2xl:w-[400px] w-[320px]  p-2 pb-0 ">
          <div style={{ backgroundColor: data.info.tvp_color }} className={`  h-full  flex flex-col justify-between rounded-md`} >
            <div className='w-full flex justify-center '>

              <OptimizedImage src={data.info.tvp_logo} width={400} height={500} style={{ height: 'auto' }} alt={data.info.program_name} />

            </div>
            <div className=' text-center px-3 mb-5'>
              <h1 className='2xl:text-4xl text-xl font-bold text-white'>{data.info.program_name}</h1>
              <h2 className='2xl:text-lg text-sm  text-white mb-4'>{data.info.program_desc} </h2>
              <div className=" w-full flex justify-center ">
                <Link href={`/program/${data.info.program_slug}`}  >
                  <button className="bg-gray-300 text-black hover:bg-red-600 hover:text-white font-bold py-3 px-10 rounded-3xl ">
                    ดูทั้งหมด
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 ">
          <div className="flex flex-wrap ">
            {data.items && data.items.length > 0 && data.items.map((item: any, index: number) => (
              <div className="w-1/3 p-1 " key={index}>
                <div className="max-w-sm rounded overflow-hidden  border shadow-md">
                  <Link href={`/news/${item.news_id}`} className='cursor-pointer'>
                    <OptimizedImage src={item.image_url} alt={item.news_title} width={300} height={100} className='w-full rounded-tl-md rounded-tr-md' />
                  </Link>
                  <div className="px-3 py-4 ">
                    <div className="  mb-2"> <Link href={`/news/${item.news_id}`} className='2xl:text-lg text-md line-clamp-2 hover:text-red-700 2xl:line-clamp-1 cursor-pointer'>{item.news_title}</Link> </div>
                  </div>
                  <div className='flex p-2 border-t justify-between'>
                    <div className='mr-3 flex align-items-center'>
                      <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className="2xl:text-sm text-xs  text-gray-700 ">
                        {NumberFormat(item.news_count)}
                      </span>
                    </div>
                    <div className='flex align-items-center'>
                      <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className=" 2xl:text-sm text-xs  text-gray-700 ">
                        {item.news_strdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
export default ProgramsListNews