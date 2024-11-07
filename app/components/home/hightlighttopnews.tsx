'use client';
import dynamic from 'next/dynamic';
const HightlightTopNews = dynamic(() => import('./dynamic/hightlighttopnews'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicHightlightTopNews({ data }: { data: any }) {
    return (
        <>
            <HightlightTopNews data={data} />
        </>
    );
}