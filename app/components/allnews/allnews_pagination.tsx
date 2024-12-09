'use client';

import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  data: any[];
  count_data: number;
  slug_program: string;
  page_number?: number | string;
}

const ITEMS_PER_PAGE = 40;

const Pagination: React.FC<PaginationProps> = ({
  data,
  count_data,
  slug_program,
  page_number = 1
}) => {
  const currentPage = Number(page_number);
  const totalPages = Math.ceil(count_data / ITEMS_PER_PAGE) - 1;
  
  // Generate page numbers array
  const getPageNumbers = (): number[] => {
    const pageNumbers: number[] = [];
    const startPage = currentPage;
    const endPage = Math.min(currentPage + 9, totalPages);
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  // Function to generate pagination URL
  const getPaginationUrl = (pageNum: number): string => {
    return `/allnews/${slug_program}?page=${pageNum}`;
  };

  const pageNumbers = getPageNumbers();

  // Button styles using Tailwind
  const baseButtonStyles = `
  text-sm
  md:text-base
  p-2
    md:px-4 
    md:py-2 
    border-2
    text-gray-700
    border-gray-200 
    rounded-md 
    hover:bg-gray-50 
    hover:text-gray-700
    transition-colors 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-gray-500
  `;

  const activeButtonStyles = `
    ${baseButtonStyles}
    bg-red-600 
    text-white 
    border-red-600 
    hover:bg-red-700
    hover:text-gray-700
  `;

  return (
    <nav aria-label="Pagination" className="my-8">
      <ul className="flex flex-wrap justify-center items-center gap-2 ">
        {totalPages > 0 && (
          <li className='mb-3'>
            <Link 
              href={getPaginationUrl(1)}
              className={baseButtonStyles}
              aria-label="Go to first page"
            >
            หน้าแรก
            </Link>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className='mb-3'>
            <Link
              href={getPaginationUrl(number)}
              className={number === currentPage ? activeButtonStyles : baseButtonStyles}
              aria-label={`Go to page ${number}`}
              aria-current={number === currentPage ? 'page' : undefined}
            >
              {number}
            </Link>
          </li>
        ))}

        {totalPages > 0 && (
          <li>
            <Link
              href={getPaginationUrl(totalPages)}
              className={baseButtonStyles}
              aria-label="Go to last page"
            >
             หน้าสุดท้าย
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;