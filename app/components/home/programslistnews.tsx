
'use client';
import dynamic from 'next/dynamic';
const ProgramsListNews = dynamic(() => import('./dynamic/programslistnews'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function DynamicProgramsListNews({ data }: { data: any }) {
  return (
    <>
      <ProgramsListNews data={data} />
    </>
  );
}