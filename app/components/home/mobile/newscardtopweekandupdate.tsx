

import type { FC } from 'react';
import Link from 'next/link';
import { NumberFormat } from '../../../../lib/utils/kformat';
import { OptimizedImage } from '../../../../lib/utils/optimizesimage';

interface NewsItem {
    news_id: string;
    image_url: string;
    news_title: string;
    news_strdate: string;
    news_count: number;
}

export const NewsCard: FC<{ news: NewsItem; imageHeight: number; imageWidth: number }> = ({
    news,
    imageHeight,
    imageWidth,
}) => (
    <div className="flex flex-row gap-4 rounded-lg border border-gray-200 bg-white  shadow-sm transition-shadow hover:shadow-md">
        {/* Image Section */}
        <div className="relative w-5/12">
            <Link href={`/news/${news.news_id}`}>
                <OptimizedImage
                    src={news.image_url}
                    alt={news.news_title}
                    width={imageWidth}
                    height={imageHeight}
                    className="h-full w-full rounded-l-lg object-cover"

                />
            </Link>
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
                    {NumberFormat(news.news_count)}
                </div>
            </div>
        </div>
    </div>
);