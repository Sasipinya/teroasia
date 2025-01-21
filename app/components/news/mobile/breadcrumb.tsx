import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BreadcrumbProps {
  title_news: string;
  logo_program: string;
  program_name: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ 
  title_news, 
  logo_program, 
  program_name 
}) => {
  return (
    <div className="flex items-center">
      {/* Channel Logo */}
      <div className="mr-3">
        <Link href="#" className="block">
          <Image
            src={logo_program}
            alt={`${program_name} logo`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="text-left">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center">
            <li className="flex items-center">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-red-700"
              >
                หน้าหลัก
              </Link>
              <span className="mx-2 text-gray-300">|</span>
            </li>
            
            <li className="flex items-center">
              <span className="text-gray-700">
                {program_name}
              </span>
              <span className="mx-2 text-gray-300">|</span>
            </li>
            
            <li>
              <span 
                className=" text-gray-700 line-clamp-2 break-words "
                title={title_news}
              >
                {title_news}
              </span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;