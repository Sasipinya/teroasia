'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NumberFormat } from '../../../lib/utils/kformat';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
import { Calendar, Eye } from 'lucide-react';
import AdUnit from '../utils/AdUnit';

// Define TypeScript interfaces
interface NewsItem {
  news_id: string;
  news_title: string;
  image_url: string;
  news_count: number;
  news_strdate: string;
}

interface ProgramInfo {
  tvp_color: string;
  tvp_logo: string;
  program_name: string;
  program_desc: string;
  program_slug: string;
}

interface Program {
  items: NewsItem[];
  info: ProgramInfo;
}

interface ProgramsListNewsProps {
  data: any;
}

const ProgramsListNews: React.FC<ProgramsListNewsProps> = ({ data }) => {
  const [programs, setPrograms] = useState<Program[]>(data);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMore = async () => {
      try {
        setIsLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch(`/api/programs?page=${page}`);
        const newPrograms = await response.json();
        
        if (newPrograms.length === 0) {
          setHasMore(false);
        } else {
          setPrograms(prevPrograms => [...prevPrograms, ...newPrograms]);
          setPage(prev => prev + 1);
        }
      } catch (error) {
        console.error('Error loading more programs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          await loadMore();
        }
      },
      {
        rootMargin: '200px',
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, page]);

  return (
    <div>
      {programs.map((program: Program, index: number) => (
        <div className='mb-10' key={index}>
          <div className="container mx-auto">
            <div className="flex flex-row justify-between md:flex-row-reverse">
              <div className="w-full md:w-2/3">
                <div className="flex flex-wrap">
                  {program.items &&
                    program.items.length > 0 &&
                    program.items.map((item: NewsItem, index: number) => (
                      <div className="w-1/3 p-1" key={"item" + index}>
                        <div className="max-w-sm rounded overflow-hidden border shadow-md">
                          <Link href={`/news/${item.news_id}`}>
                            <OptimizedImage
                              src={item.image_url}
                              alt={item.news_title}
                              width={300}
                              height={100}
                              className="w-full rounded-tl-md rounded-tr-md"
                            />
                          </Link>
                          <div className="px-3 py-4">
                            <div className="mb-2">
                              <Link
                                href={`/news/${item.news_id}`}
                                className="text-base text-gray-700 line-clamp-2 hover:text-red-700 cursor-pointer"
                              >
                                {item.news_title}
                              </Link>
                            </div>
                          </div>
                          <div className="flex p-2 border-t justify-between">
                            <div className="mr-3 flex align-items-center">
                              <Eye className="w-[16px] h-[16px] text-gray-700 mr-1" />
                              <span className="text-xs text-gray-700">
                                {NumberFormat(item.news_count)}
                              </span>
                            </div>
                            <div className="flex align-items-center">
                              <Calendar className="w-[16px] h-[16px] text-gray-700 mr-1" />
                              <span className="text-xs text-gray-700">
                                {item.news_strdate}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div
                  style={{ backgroundColor: program.info.tvp_color }}
                  className="h-full rounded-md flex flex-col justify-between"
                >
                  <div className="p-3 mt-3 w-full flex justify-center">
                    <OptimizedImage
                      src={program.info.tvp_logo}
                      width={400}
                      height={500}
                      style={{ height: "auto" }}
                      alt={program.info.program_name}
                    />
                  </div>
                  <div className="text-center px-3 mb-5">
                    <h1 className="text-xl font-bold text-white">
                      {program.info.program_name}
                    </h1>
                    <h2 className="text-sm text-white mb-4">
                      {program.info.program_desc}
                    </h2>
                    <div className="w-full flex justify-center">
                      <Link href={`/program/${program.info.program_slug}`}>
                        <button className="bg-gray-300 text-black hover:bg-red-600 hover:text-white font-bold py-3 px-10 rounded-3xl">
                          ดูทั้งหมด
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {index === 1 && (
            <div className="container mx-auto">
              <AdUnit
                adUnitPath="/33368840/HVR_1x1"
                size={[[1,1]]}
                id="div-gpt-ad-1671767027219-0"
                targeting={{
                  position: 'sidebar'
                }}
              />
            </div>
          )}
        </div>
      ))}

      {/* Loading indicator */}
      <div ref={observerTarget} className="h-20 flex items-center justify-center">
        {isLoading && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
        )}
      </div>

      {/* No more content message */}
      {!hasMore && (
        <div className="text-center text-gray-500 py-4">
          ไม่มีรายการเพิ่มเติม
        </div>
      )}
    </div>
  );
};

export default ProgramsListNews;