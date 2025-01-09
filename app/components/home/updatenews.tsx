
import React from 'react';
import Link from 'next/link';
import { NumberFormat } from '../../../lib/utils/kformat';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
import AdUnit from '../utils/AdUnit';

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

      {/* Ads Left UpdateNews */}
      <div className="p-2 z-[-1] min-w-[300px] min-h-[600px] absolute left-0 mt-2.5 ml-2.5" >
        <AdUnit
          adUnitPath="/33368840/TA_Desktop_Homepage_SideSkyscraper_Left_L"
          size={[[300, 600], [160, 600]]}
          id="div-gpt-ad-1686132027161-0"
          targeting={{
            position: 'sidebar'
          }}
        />
      </div>

      <div className="flex bg-white px-2">
        <div className="flex-1 ">
          <div className='flex'>
            <h3 className="mb-6 text-2xl font-bold  text-gray-600 mr-4">ข่าวอัปเดต</h3><div className='flex-1 my-4 border-t border-gray-600'></div>
          </div>

          {data && data.length > 0 && data.slice(0, 5).map((item, index) => (
            <div className="flex mb-3" key={index}>
              <Link href={`/news/${item.news_id}`} className='cursor-pointer'>
                <OptimizedImage src={item.image_url} alt={item.news_title} width={300} height={300} className='h-full w-48 object-cover rounded-tl-md rounded-bl-md' />
              </Link>
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 flex flex-col justify-between leading-normal rounded-tr-md rounded-br-md flex-1">
                <div className="mb-8">
                  <span className="rounded-full py-1 text-4xl text-gray-600 mr-1 mb-2">
                    0{index + 1}.
                  </span>
                  <span className="rounded-full py-1 text-sm font-semibold text-gray-600 mr-1 mb-2">
                    {item.news_strdate}
                  </span>
                  <div >
                    <Link href={`/news/${item.news_id}`} className=' text-md text-gray-600 hover:text-red-700 line-clamp-2 cursor-pointer'>
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
          ))}
          <div className="w-full flex justify-end">
            <Link href="/program/newsupdate">
              <button className="font-bold bg-gray-300 text-black hover:bg-red-600 hover:text-white py-3 px-12 rounded-3xl">
                ดูทั้งหมด
              </button>
            </Link>

          </div>
        </div>
        <div className="flex-1">
          {/* Ads SidebarMrec Between UpdateNews */}
          <div className="text-center mx-auto my-[8px]">
            <div className="z-[-1] min-w-[300px] min-h-[250px]">
              <AdUnit
                id="div-gpt-ad-1676442505505-0"
                adUnitPath="/33368840/TA_Desktop_Homepage_SidebarMrec"
                size={[[300, 250]]}
                targeting={{
                  position: 'sidebar'
                }}
                Mxauto='mx-auto'
              />
            </div>
          </div>
        </div>
      </div>

       {/* Ads Right UpdateNews */}
      <div className="p-2 z-[-1] min-w-[300px] min-h-[600px] absolute right-0 mt-2.5 ml-2.5" >
        <AdUnit
          adUnitPath="/33368840/TA_Desktop_Homepage_SideSkyscraper_Right"
          size={[[300, 600], [160, 600]]}
          id="div-gpt-ad-1686132061197-0"
          targeting={{
            position: 'sidebar'
          }}
        />
      </div>

    </div>
  );
}

export default UpdateNews;