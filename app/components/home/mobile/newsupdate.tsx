'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';



interface NewsItem {
    news_id: string;
    image_url: string;
    news_title: string;
    news_strdate: string;
    news_count: number;
}

interface NewsUpdateProps {
    data: NewsItem[];
}

const shimmer = (w: number, h: number): string => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#e2e2e2" offset="20%" />
        <stop stop-color="#888" offset="50%" />
        <stop stop-color="#e2e2e2" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

const toBase64 = (str: string): string =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

const NewsCard: FC<{ news: NewsItem; imageHeight: number; imageWidth: number }> = ({
    news,
    imageHeight,
    imageWidth,
}) => (
    <div className="flex flex-row gap-4 rounded-lg border border-gray-200 bg-white  shadow-sm transition-shadow hover:shadow-md">
        {/* Image Section */}
        <div className="relative w-5/12">
            <Image
                src={news.image_url}
                alt={news.news_title}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full rounded-l-lg object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(imageWidth, imageHeight))}`}
            />
        </div>

        {/* Content Section */}
        <div className="flex w-7/12 flex-col space-y-2  py-2 pr-3">
            <Link
                href={`/news/${news.news_id}`}
                className="text-base font-medium text-gray-900 hover:text-red-700 lg:text-lg line-clamp-3"
            >
                {news.news_title}
            </Link>

            <div className="flex justify-between space-y-1 text-sm text-gray-500">
                <div className="flex items-center">
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
                    {news.news_strdate}
                </div>
                <div className="flex items-center">
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                    {news.news_count} ครั้ง
                </div>
            </div>
        </div>
    </div>
);

const AdUnit: FC = () => (
    <div className="mx-auto my-4 text-center text-gray-700">
ADS
    </div>
);

const NewsUpdate: FC<NewsUpdateProps> = ({ data }) => {
    if (!data?.length) return null;

    const imageHeight = 450;
    const imageWidth = Math.floor((16 / 9) * imageHeight);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 lg:text-2xl ">
                    ข่าวอัปเดต
                </h2>
            </div>

            {/* News List */}
            <div className="space-y-4">
                {data.map((news, index) => (
                    <div key={index}>
                        <NewsCard
                            news={news}
                            imageHeight={imageHeight}
                            imageWidth={imageWidth}
                        />
                        {/* Insert ad after third item */}
                        {index === 2 && <AdUnit />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsUpdate;