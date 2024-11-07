'use client';
import dynamic from 'next/dynamic';
const MusicNews = dynamic(() => import('./dynamic/musicnews'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicMusicNews({ data }: { data: any }) {
    return (
        <>
            <MusicNews data={data} />
        </>
    );
}