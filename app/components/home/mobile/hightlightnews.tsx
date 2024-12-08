import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  news_id: string;
  top_image: string;
  top_title: string;
  date_for_show: string;
}

interface HighlightNewsProps {
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
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
    <div className="relative">
      <Image
        src={news.top_image}
        alt={news.top_title}
        width={imageWidth}
        height={imageHeight}
        className="h-full w-full object-cover"
        loading="lazy"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(imageWidth, imageHeight))}`}
      />
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

const HighlightNews: FC<HighlightNewsProps> = ({ data }) => {
  if (!data?.length) return null;

  const imageHeight = 450;
  const imageWidth = Math.floor((16 / 9) * imageHeight);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Featured Article */}
      {data[0] && (
        <div className="mb-2">
          <NewsCard
            news={data[0]}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        </div>
      )}

      {/* Second Row */}
      <div className="mb-2 grid grid-cols-2 gap-2 ">
        {data.slice(1, 3).map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        ))}
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 gap-2 ">
        {data.slice(3, 5).map((news, index) => (
          <NewsCard
            key={index}
            news={news}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default HighlightNews;