
interface NewsItem {
    news_id: string;
    news_title: string;
    image_url: string;
    news_count: number;
    news_strdate: string;
}

interface ProgramData {
    name: string;
    desc: string;
    items: NewsItem[];
    count_by_slug: number;
}

interface SEOData {
    news_title: string;
    image_url: string;
    seo_desc: string;
    slug: string;
}

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: {
        page?: string;
    };
}

// app/allnews/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import Pagination from "@/app/components/allnews/allnews_pagination";

import { NumberFormat } from '@/app/components/utils/kformat';
import Link from 'next/link';
import { Calendar, Eye } from 'lucide-react';

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

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const response = await getProgramData(params.slug);
    if (!response?.data) return { title: 'Not Found' };

    const { name } = response.data;
    return {
        title: `${name} - TERO ASIA`,
        description: `${name} - TERO ASIA`,
    };
}

function NewsGrid({ items, column_md = 3 }: { items: NewsItem[]; column_md?: number }) {
    const shimmer = (w: number, h: number) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#333" offset="20%" />
            <stop stop-color="#222" offset="50%" />
            <stop stop-color="#333" offset="70%" />
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#333" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
      </svg>`;

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {items.map((item, i) => (
                <div key={`news-${i}`} className="card">
                    <div className="card-body p-0">
                        <a href={`/news/${item.news_id}`}>
                            <Image
                                src={item.image_url}
                                width={500}
                                height={300}
                                alt={item.news_title}
                                className="rounded-tr-xl rounded-tl-xl"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
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

export default async function AllNewsProgram({ params, searchParams }: PageProps) {
    const page = Number(searchParams.page) || 1;
    const response = await getProgramData(params.slug, page);

    if (!response?.data) notFound();
    if (response.data.items.length === 0) redirect('https://teroasia.com');

    const data = response.data;


    const pageCount = Math.ceil(data.count_by_slug / 40);
 

    // Navigation links for SEO
    const nextPage = page < pageCount ? `/allnews/${params.slug}?page=${page + 1}` : null;
    const prevPage = page > 1 ? `/allnews/${params.slug}?page=${page - 1}` : null;



    return (
        <>
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
                    slug_program={params.slug}
                    page_number={page}
                />
            </div>
        </>

    );
}