import Link from 'next/link';
import { FC } from 'react';

interface FooterLink {
  href: string;
  title: string;
  isExternal?: boolean;
  isNoFollow?: boolean;
}

const footerLinks: FooterLink[] = [
  {
    href: '/',
    title: 'Tero Entertainment',
    isExternal: true,
  },
  {
    href: '/',
    title: 'รู้จักเรา',
  },
  {
    href: '/',
    title: 'ข่าวประชาสัมพันธ์',
    isExternal: true,
  },
  {
    href: 'https://corporate.teroasia.com/privacypolicy.php',
    title: 'นโยบายด้านลิขสิทธิ์',
    isNoFollow: true,
  },
  {
    href: 'https://corporate.teroasia.com/privacypolicy.php',
    title: 'นโยบายสิทธิส่วนบุคคล',
    isNoFollow: true,
  },
  {
    href: 'https://corporate.teroasia.com/privacypolicy.php',
    title: 'ข้อกำหนด / เงื่อนไข',
    isNoFollow: true,
  },
  {
    href: '/',
    title: 'ร่วมงานกับเรา',
    isExternal: true,
  },
];


const FooterM: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="block md:hidden bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="w-full lg:w-1/4">
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-semibold">เกี่ยวกับเรา</h2>
              <nav className="space-y-4">
                <ul className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          title={link.title}
                          target="_blank"
                          rel={`${link.isNoFollow ? 'nofollow' : ''} noopener noreferrer`}
                          className="text-gray-300 transition-colors hover:text-white"
                        >
                          {link.title}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          title={link.title}
                          className="text-gray-300 transition-colors hover:text-white"
                        >
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Copyright © {currentYear}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterM;