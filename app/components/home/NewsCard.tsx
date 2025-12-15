'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news_id: number;
  top_image: string;
  top_title: string;
  date_for_show: string;
  isMain?: boolean;
}

const NewsCard = ({
  news_id,
  top_image,
  top_title,
  date_for_show,
  isMain = false,
}: NewsCardProps) => (
  <motion.div
    className="flex flex-col h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="relative w-full">
      <Link href={`/news/${news_id}`} className="block">
        <div className="aspect-[16/9] relative w-full">
          <Image
            src={top_image || '/fallback-image.jpg'}
            alt={`ข่าว: ${top_title}`}
            width={isMain ? 800 : 400}
            height={isMain ? 450 : 225}
            sizes={isMain
              ? '(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw'
              : '(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw'}
            className="rounded-tl-md rounded-tr-md object-cover w-full h-auto"
            priority={isMain}
            quality={75}
          />
          <div
            className="absolute top-0 right-0 bg-gradient-to-r from-gray-500 to-gray-900 \
                       rounded-bl-xl text-white font-bold text-sm p-2 z-10"
            aria-label={`เผยแพร่เมื่อ ${date_for_show}`}
          >
            {date_for_show}
          </div>
        </div>
      </Link>
    </div>
    <div className="flex-1 border rounded-bl-md rounded-br-md shadow-md">
      <p className="p-3 min-h-[4.5rem]">
        <Link
          href={`/news/${news_id}`}
          className={clsx(
            'text-gray-600 hover:text-red-700 cursor-pointer',
            isMain ? 'line-clamp-3 text-xl' : 'line-clamp-2 text-md'
          )}
        >
          {top_title}
        </Link>
      </p>
    </div>
  </motion.div>
);

export default NewsCard;