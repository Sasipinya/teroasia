'use client';

import React from 'react';

const NewsCardSkeleton = ({ isMain = false }: { isMain?: boolean }) => (
  <div className="flex flex-col h-full" role="status" aria-label="กำลังโหลดข่าว">
    <div className="relative aspect-[16/9] w-full bg-gray-200 rounded-tl-md rounded-tr-md">
      <div className="absolute top-0 right-0 w-24 h-8 bg-gray-300 rounded-bl-xl" />
    </div>
    <div className="flex-1 border rounded-bl-md rounded-br-md shadow-md p-3 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-2/3" />
    </div>
  </div>
);

export default NewsCardSkeleton;
