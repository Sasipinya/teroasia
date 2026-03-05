'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const partnerLogos = [
  { href: '//fiba3x3.com/en/index.html', src: '/assets/img/logo/logo-3x3_0.jpg', alt: '', width: 60, height: 34, className: 'rounded-full' },
  { href: '//www.thaiticketmajor.com/sport/one-lumpinee-2026.html', src: '/assets/img/logo/one_lum.png', alt: '', width: 60, height: 34, className: 'rounded-full border border-solid border-gray' },
  { href: '//corporate.teroasia.com/concerts-events/missthailandworld/', src: '/assets/img/logo/logo-mtw_0.jpg', alt: '', width: 60, height: 34, className: 'rounded-full' },
  { href: '//livenationtero.co.th', src: '/assets/img/logo/ln-tero-logo-red-208x40px.svg', alt: 'Live Nation Tero', width: 183, height: 34, className: '', wrapperClass: 'p-2' },
  { href: '//www.thaiticketmajor.com/', src: '/assets/img/logo/logo-ttm-tm.png', alt: 'Thaiticketmajor', width: 133, height: 34, className: '', wrapperClass: 'p-2 bg-white rounded-xl' },
  { href: '//teromusic.com/', src: 'http://teromusic.com/img/top-logo.png', alt: 'TeroMusic', width: 99, height: 34, className: '', wrapperClass: 'p-2 bg-white rounded-xl' },
  { href: '//terodigital.com', src: 'https://terodigital.com/wp-content/uploads/2025/06/LogoTeroDigital_www-2.png', alt: 'TeroDigital', width: 109, height: 34, className: '', wrapperClass: 'p-2 bg-white rounded-xl' },
  { href: '//corporate.teroasia.com/terohealthclinic/', src: 'https://corporate.teroasia.com/terohealthclinic/assets/images/logo-clinic.png', alt: 'TeroHealthClinic', width: 109, height: 34, className: '', wrapperClass: 'p-2 bg-white rounded-xl' },
];

const FooterM: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="block md:hidden bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center">
          {partnerLogos.map((logo, index) => (
            <Link key={index} href={logo.href} className={`flex flex-col items-center ${logo.wrapperClass ?? ''}`}>
              <Image src={logo.src} alt={logo.alt} className={logo.className} width={logo.width} height={logo.height} />
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Image src="/images/logo.png" alt="Tero Entertainment Logo" width={135} height={70} />
            <div className="text-sm text-gray-400">
              © {currentYear} Tero Entertainment PCL. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterM;