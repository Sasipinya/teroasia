'use client';
import dynamic from 'next/dynamic';
const ConcertandEventNews = dynamic(() => import('./dynamic/concertandeventnews'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicConcertandEventNews({ data }: { data: any }) {
    return (
        <>
            <ConcertandEventNews data={data} />
        </>
    );
}