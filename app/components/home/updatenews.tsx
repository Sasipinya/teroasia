'use client';
import dynamic from 'next/dynamic';
const UpdateNews = dynamic(() => import('./dynamic/updatenews'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function DynamicUpdateNews({ data }: { data: any }) {
  return (
    <>
      <UpdateNews data={data} />
    </>
  );
}