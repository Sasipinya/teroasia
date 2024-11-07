
'use client';
import dynamic from 'next/dynamic';
const HightlightSliderNews = dynamic(() => import('./dynamic/hightlightslidernews'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicHightlightSliderNews({ data }: { data: any }) {
    return (
        <>
            <HightlightSliderNews data={data} />
        </>
    );
}