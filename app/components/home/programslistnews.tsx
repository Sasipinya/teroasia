'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Eye, Calendar } from 'lucide-react';
import { NumberFormat } from '../../../lib/utils/kformat';
import { motion } from 'framer-motion';

const AdUnit = dynamic(() => import('../utils/AdUnit'), { ssr: false });

const ProgramCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    className="w-1/3 p-1"
    key={`item-${index}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="max-w-sm rounded overflow-hidden border shadow-md">
      <Link href={`/news/${item.news_id}`}>
        <div className="relative aspect-video">
          <Image
            src={item.image_url}
            alt={item.news_title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-tl-md rounded-tr-md object-cover"
            loading={index > 2 ? 'lazy' : 'eager'}
            priority={index <= 2}
          />
        </div>
      </Link>
      <div className="px-3 py-4">
        <Link
          href={`/news/${item.news_id}`}
          className="text-base text-gray-700 line-clamp-2 hover:text-red-700 cursor-pointer"
        >
          {item.news_title}
        </Link>
      </div>
      <div className="flex p-2 border-t justify-between">
        <div className="mr-3 flex items-center">
          <Eye className="w-4 h-4 text-gray-700 mr-1" />
          <span className="text-xs text-gray-700">{NumberFormat(item.news_count)}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 text-gray-700 mr-1" />
          <span className="text-xs text-gray-700">{item.news_strdate}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProgramInfo = ({ program }: { program: any }) => (
  <motion.div
    className="w-full md:w-1/3 p-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div
      style={{ backgroundColor: program.info.tvp_color }}
      className="h-full rounded-md flex flex-col justify-between"
    >
      <div className="p-3 mt-3 w-full h-full flex justify-center">
        <div className="relative w-full aspect-video">
          <Image
            src={program.info.tvp_logo}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
            alt={program.info.program_name}
          />
        </div>
      </div>
      <div className="text-center px-3 mb-5">
        <h1 className="text-xl font-bold text-white">{program.info.program_name}</h1>
        <h2 className="text-sm text-white mb-4">{program.info.program_desc}</h2>
        <div className="w-full flex justify-center">
          <Link href={`/program/${program.info.program_slug}`}>
            <button className="bg-gray-300 text-black hover:bg-red-600 hover:text-white font-bold py-3 px-10 rounded-3xl">
              ดูทั้งหมด
            </button>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProgramsListNews = ({ data }: { data: any[] }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 2, data.length));
        }
      },
      { rootMargin: '100px' }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [data]);

  return (
    <div>
      {data.slice(0, visibleCount).map((program, index) => (
        <div className="mb-10" key={index}>
          <div className="container mx-auto">
            <div className="flex flex-row justify-between md:flex-row-reverse">
              <div className="w-full md:w-2/3 flex flex-wrap">
                {program.items?.map((item: any, idx: number) => (
                  <ProgramCard key={idx} item={item} index={idx} />
                ))}
              </div>
              <ProgramInfo program={program} />
            </div>
          </div>

          {index === 1 && (
            <div className="container mx-auto">
              <Suspense fallback={<div className="h-1"></div>}>
                <AdUnit
                  adUnitPath="/33368840/HVR_1x1"
                  size={[[1, 1]]}
                  id="div-gpt-ad-1671767027219-0"
                  targeting={{ position: 'sidebar' }}
                />
              </Suspense>
            </div>
          )}
        </div>
      ))}

      {visibleCount < data.length && <div ref={loadMoreRef} className="h-10"></div>}
    </div>
  );
};

export default ProgramsListNews;