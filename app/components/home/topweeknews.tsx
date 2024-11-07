'use client';
import dynamic from 'next/dynamic';
const TopWeekNews = dynamic(() => import('./dynamic/topweeknews'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function DynamicTopWeekNews({ data }: { data: any }) {
  return (
    <>
      <TopWeekNews data={data} />
    </>
  );
}