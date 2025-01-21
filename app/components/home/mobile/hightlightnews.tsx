'use client';
import type { FC } from 'react';
import dynamic from 'next/dynamic';
const NewsCard = dynamic(() => import('./newscardhightlight').then((mod) => mod.NewsCard),
{ssr: false, loading: () => <p></p>});

interface NewsItem {
  news_id: string;
  top_image: string;
  top_title: string;
  date_for_show: string;
}

interface HighlightNewsProps {
  data: NewsItem[];
}





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