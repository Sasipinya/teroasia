
'use client';
import dynamic from 'next/dynamic';
const Filmbkk = dynamic(() => import('./dynamic/filmbkk'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicFilmbkk() {
    return (
        <>
            <Filmbkk />
        </>
    );
}