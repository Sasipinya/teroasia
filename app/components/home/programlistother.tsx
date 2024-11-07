'use client';
import dynamic from 'next/dynamic';
const ProgramListOther = dynamic(() => import('./dynamic/programlistother'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

export default function DynamicProgramListOther({ data }: { data: any }) {
    return (
        <>
            <ProgramListOther data={data} />
        </>
    );
}