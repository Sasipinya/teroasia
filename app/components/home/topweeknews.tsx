'use client';

import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import { NumberFormat } from '../../../lib/utils/kformat';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';

interface NewsItem {
  news_id: number;
  news_title: string;
  news_pic_full: string;
  news_count: number;
  news_strdate: string;
}

interface TopWeekNewsProps {
  data: {
    label: string;
    items: NewsItem[] | null;
  }[];
}

const labelMap: Record<string, string> = {
  top_view_30: 'เดือนนี้',
  top_view_7: 'สัปดาห์นี้',
  top_view_1: 'วันนี้',
};

function TopWeekNews({ data }: TopWeekNewsProps) {
  const validTabs = [...data]
    .filter((tab) => Array.isArray(tab.items) && tab.items.length > 0)
    .reverse();
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = validTabs[activeTab];
  const currentItems = Array.isArray(currentTab?.items) ? currentTab.items : [];

  return (
    <div className="hidden md:block container mx-auto my-6 p-2">
      {/* Tab buttons */}
      <ul className="flex space-x-4">
        {validTabs.map((tab, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === index
                  ? 'bg-red-600 text-white font-bold'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {labelMap[tab.label] ?? tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Content */}
      <div className="mt-4">
        {currentItems.length > 0 ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            className="my-4"
          >
            {currentItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-md border shadow-md">
                  {item.news_pic_full && (
                    <Link
                      href={`/news/${item.news_id}`}
                      className="cursor-pointer"
                    >
                      <OptimizedImage
                        src={item.news_pic_full}
                        alt={item.news_title ?? ''}
                        width={300}
                        height={100}
                        style={{ height: 'auto' }}
                        className="w-full rounded-tl-md rounded-tr-md"
                      />
                    </Link>
                  )}
                  <div className="px-3 py-4">
                    <p>
                      <Link
                        href={`/news/${item.news_id}`}
                        className="text-md text-gray-600 hover:text-red-700 line-clamp-2 cursor-pointer"
                      >
                        {item.news_title ?? ''}
                      </Link>
                    </p>
                  </div>
                  <div className="p-2 pt-4 pb-2 flex justify-between">
                    <div className="mr-3 flex items-center">
                      <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className="text-xs text-gray-700">
                        {NumberFormat(item.news_count ?? 0)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                      <span className="text-xs text-gray-700">
                        {item.news_strdate ?? ''}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-gray-500 text-center mt-6">
            ไม่มีข้อมูลในแท็บนี้
          </div>
        )}
      </div>
    </div>
  );
}

export default TopWeekNews;
