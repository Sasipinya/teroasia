'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

interface NewsItem {
  news_id: number;
  top_image: string;
  top_title: string;
  date_for_show: string;
}

interface NewsCardProps extends NewsItem {
  isMain?: boolean;
}

interface HightlightTopNewsProps {
  data: NewsItem[];
  isLoading?: boolean;
}

const NewsCardSkeleton = ({ isMain = false }: { isMain?: boolean }) => (
  <div className="flex flex-col h-full" role="status" aria-label="กำลังโหลดข่าว">
    <div
      className={clsx(
        "w-full bg-gray-200 rounded-tl-md rounded-tr-md",
        isMain ? "aspect-[16/9]" : "aspect-[16/9]"
      )}
    />
    <div className="flex-1 border rounded-bl-md rounded-br-md shadow-md p-3 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-2/3" />
    </div>
  </div>
);

const NewsCard = ({
  news_id,
  top_image,
  top_title,
  date_for_show,
  isMain = false,
}: NewsCardProps) => {
  const width = isMain ? 800 : 400;
  const height = isMain ? 450 : 225;

  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full">
        <Link href={`/news/${news_id}`} className="block">
          <Image
            src={top_image || '/fallback-image.jpg'}
            alt={`ข่าว: ${top_title}`}
            width={width}
            height={height}
            className="rounded-tl-md rounded-tr-md object-cover w-full h-auto"
            sizes={isMain ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 50vw, 220px"}
            quality={75}
            priority={isMain}
            {...(isMain && {  fetchPriority: "high" })}
            {...(!isMain && { loading: "lazy", fetchPriority: "low" })}
          />
          <div
            className="absolute top-0 right-0 bg-gradient-to-r from-gray-500 to-gray-900 
                       rounded-bl-xl text-white font-bold text-sm p-2 z-10"
            aria-label={`เผยแพร่เมื่อ ${date_for_show}`}
          >
            {date_for_show}
          </div>
        </Link>
      </div>
      <div className="flex-1 border rounded-bl-md rounded-br-md shadow-md">
        <p className="p-3">
          <Link
            href={`/news/${news_id}`}
            className={clsx(
              "text-gray-600 hover:text-red-700 cursor-pointer",
              isMain ? "line-clamp-3 text-xl" : "line-clamp-2 text-md"
            )}
          >
            {top_title}
          </Link>
        </p>
      </div>
    </div>
  );
};

const HightlightTopNews = ({ data, isLoading = false }: HightlightTopNewsProps) => {
  if (isLoading) {
    return (
      <div className="hidden md:block container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-2">
            <NewsCardSkeleton isMain={true} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="p-2">
                <NewsCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.length < 5) {
    return (
      <div
        className="hidden md:block container mx-auto p-4 text-gray-600"
        role="alert"
      >
        ไม่พบข้อมูลข่าว
      </div>
    );
  }

  return (
    <div className="hidden md:block container mx-auto">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        role="region"
        aria-label="ข่าวเด่นประจำวัน"
      >
        <div className="p-2">
          <NewsCard {...data[0]} isMain={true} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.slice(1, 5).map((news) => (
            <div key={news.news_id} className="p-2">
              <NewsCard {...news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HightlightTopNews;
