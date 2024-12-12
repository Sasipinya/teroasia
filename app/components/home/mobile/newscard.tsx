import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OptimizedImage } from '../../utils/optimizesimage';
interface NewsItem {
    news_id: string;
    top_image: string;
    top_title: string;
    date_for_show: string;
  }
export   const NewsCard: FC<{ news: NewsItem; imageHeight: number; imageWidth: number }> = ({
    news,
    imageHeight,
    imageWidth,
  }) => (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative">
        <Link href={`/news/${news.news_id}`}>
        <OptimizedImage
          src={news.top_image}
          alt={news.top_title}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-cover"
      
        />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-base font-medium">
          <Link 
            href={`/news/${news.news_id}`}
            className="text-gray-700 hover:text-red-700 transition-colors line-clamp-3"
          >
            {news.top_title}
          </Link>
        </h3>
        <div className="flex items-center text-sm text-gray-500">
          <svg
            className="mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {news.date_for_show}
        </div>
      </div>
    </div>
  );