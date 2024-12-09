// Columnlist.js (Client Component)
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NumberFormat } from '../utils/kformat';
import { OptimizedImage } from '../utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
import getNewsInTags from './FetchGetnewsintag';

const SectionProgram = ({ data }: { data: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {data &&
        data.length > 0 &&
        data.map((item: any, index: number) => (
          <div className="w-1/2 md:w-1/3 p-1" key={index}>
            <div className="max-w-sm rounded overflow-hidden border shadow-md">
              <OptimizedImage
                src={item.image_url}
                alt={item.news_title}
                width={300}
                height={100}
                className="w-full rounded-tl-md rounded-tr-md"
                
              />
              <div className="px-3 py-4">
                <div className="mb-2">
                  <Link
                    href={`/news/${item.news_id}`}
                    className="2xl:text-lg text-base  text-gray-700 line-clamp-2 hover:text-red-700 2xl:line-clamp-3"
                  >
                    {item.news_title}
                  </Link>
                </div>
              </div>
              <div className="flex p-2 border-t justify-between">
                <div className="mr-3 flex align-items-center">
                  <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                  <span className="2xl:text-sm text-xs text-gray-700">
                    {NumberFormat(item.news_count)}
                  </span>
                </div>
                <div className="flex align-items-center">
                  <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                  <span className="2xl:text-sm text-xs text-gray-700">
                    {item.news_strdate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};



interface ColumnlistProps {
  key_for_search: number;
  index: number;
}

const Columnlist: React.FC<ColumnlistProps> = ({ key_for_search, index }) => {
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let limit= 16;
      let offset = limit * index;
      const response = await getNewsInTags(key_for_search,limit,offset);
      const result_api = response?.data;
      setNewsData(result_api.data);
    };

    fetchData();
  }, [key_for_search, index]); 


  return (
    <>
      <SectionProgram data={newsData} />
    </>
  );
};

export default Columnlist;