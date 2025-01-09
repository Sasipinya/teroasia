

'use client'
import type { FC } from 'react';
import dynamic from 'next/dynamic';
import AdUnit from '../../utils/AdUnit';
const NewsCard = dynamic(() => import('./newscardtopweekandupdate').then((mod) => mod.NewsCard), {
    ssr: false,
});


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



const AdsUnit: FC = () => (
    <div className="container mx-auto ">
        <AdUnit adUnitPath='/33368840/TA_Mobile_Leaderboard'
            size={[[300, 250], [336, 280]]}
            id="div-gpt-ad-1676444017967-1"/>
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
                        {index === 2 && <AdsUnit />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsUpdate;