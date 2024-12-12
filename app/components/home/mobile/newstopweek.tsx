
'use client'
import type { FC } from 'react';
import dynamic from 'next/dynamic';
const NewsCard = dynamic(() => import('./newscardtopweekandupdate').then((mod) => mod.NewsCard),
{ssr: false, loading: () => <p>Loading...</p>});
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

const AdUnit: FC = () => (
    <div className="mx-auto my-4 text-center text-gray-700">
        ADS
    </div>
);

const NewsTopWeek: FC<NewsUpdateProps> = ({ data }) => {
    if (!data?.length) return null;

    const imageHeight = 450;
    const imageWidth = Math.floor((16 / 9) * imageHeight);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 lg:text-2xl ">
                    ข่าวยอดนิยมประจำสัปดาห์
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

                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsTopWeek;