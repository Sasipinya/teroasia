
interface NewsItem {
    news_id: string;
    news_title: string;
    image_url: string;
    news_count: number;
    news_strdate: string;
}



// app/allnews/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Pagination from "@/app/components/allnews/allnews_pagination";

import { NumberFormat } from '@/lib/utils/kformat';
import Link from 'next/link';
import { Calendar, Eye } from 'lucide-react';
import Head from 'next/head';
import { OptimizedImage } from '@/lib/utils/optimizesimage';

async function getProgramData(slug: string, page: number = 1) {
    const limit = 40;
    const offset = (page - 1) * limit;
    const url = `https://backend.teroasia.com/apis2/index_test.php?a=news_in_program_by_slug&slug=${slug}&limit=${limit}&offset=${offset}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) throw new Error('Failed to fetch data');
        return await res.json();
    } catch (error) {
        console.error('Error fetching program data:', error);
        return null;
    }
}

export async function generateMetadata({ params }: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const slug = (await params).slug
    const response = await getProgramData(slug);
    if (!response?.data) return { title: 'Not Found' };

    const { name } = response.data;
    return {
        title: `${name} - TERO ASIA`,
        description: `${name} - TERO ASIA`,
    };
}

function NewsGrid({ items, column_md = 3 }: { items: NewsItem[]; column_md?: number }) {
   

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {items.map((item, i) => (
                <div key={`news-${i}`} className="card">
                    <div className="card-body p-0">
                        <a href={`/news/${item.news_id}`}>
                            <OptimizedImage
                                src={item.image_url}
                                width={500}
                                height={300}
                                alt={item.news_title}
                                className="rounded-tr-xl rounded-tl-xl"
                            />
                        </a>
                        <div className="py-4 px-2 border">
                            <h3 className="text-gray-700 text-base font-medium line-clamp-2">
                                <Link href={`/news/${item.news_id}`}>{item.news_title}</Link>
                            </h3>
                            <hr className="my-2" />
                            <div className="flex justify-between items-center text-sm text-gray-600 space-x-4">

                                <Eye className="w-[16px] h-[16px] text-gray-700 " />   {NumberFormat(item.news_count)}


                                <Calendar className="w-[16px] h-[16px] text-gray-700 " />{item.news_strdate}

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ page?: number }>
}) {
    const page = Number((await searchParams)?.page) || 1;
    const slug = (await params).slug
    const response = await getProgramData(slug, page);

    if (!response?.data) notFound();
    if (response.data.items.length === 0) redirect('https://teroasia.com');

    const data = response.data;


    const pageCount = Math.ceil(data.count_by_slug / 40);


    // Navigation links for SEO
    const nextPage = page < pageCount ? `/allnews/${slug}?page=${page + 1}` : null;
    const prevPage = page > 1 ? `/allnews/${slug}?page=${page - 1}` : null;



    return (
        <>
            <Head>
                {prevPage && <link rel="prev" href={prevPage} />}
                {nextPage && <link rel="next" href={nextPage} />}
            </Head>
            {/* <head>
                {prevPage && <link rel="prev" href={prevPage} />}
                {nextPage && <link rel="next" href={nextPage} />}
            </head> */}


            <div className="container mx-auto px-4 my-3">
                <h1 className="text-gray-700 text-3xl font-medium mb-2">{data.name}</h1>
                <h2 className="text-gray-600 text-xl font-light mb-6">{data.desc}</h2>
                <NewsGrid items={data.items} />
                <Pagination
                    data={data.items}
                    count_data={data.count_by_slug}
                    slug_program={slug}
                    page_number={page}
                />
            </div>
        </>

    );
}