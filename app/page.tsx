
import HomeClient from './components/home/HomeClient';
import { Suspense } from 'react';
import NewsSectionSkeleton from './components/skeletons/NewsSectionSkeleton';
export const revalidate = 3600;
import { Metadata } from 'next';
import Script from 'next/script'

const BASE_URL = 'https://teroasia.com'; // ใส่โดเมนจริง

export async function generateMetadata(): Promise<Metadata> {
  const title = 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์';
  const description = 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์';
  const keywords = 'TeroAsia, ข่าวบันเทิง, กีฬา, มวย, ช่อง 7HD, One Championship, การ์ตูน';
  const imageUrl = `${BASE_URL}/images/og_default.jpg`; // ใส่รูป default OG
  const faviconUrl = '/images/favicon.ico';


  return {
    title,
    description,
    keywords,
    icons: {
      icon: [{ rel: 'icon', url: faviconUrl }]
    },
    publisher: 'Tero Asia | Tero entertainment',
    openGraph: {
      title,
      description,
      url: BASE_URL,
      type: 'website',
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'TeroAsia OG Image',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    other: {
      'fb:app_id': '1152976658386392',
      'fb:admins': '100000660497482,1032774606',
      // 'application/ld+json': JSON.stringify([jsonLd])
    }
  };
}

export default async function Home() {
  const homePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://teroasia.com/#webpage",
    url: "https://teroasia.com/",
    name: "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
    description: "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
    isPartOf: { "@id": "https://teroasia.com/#website" },
    about: { "@id": "https://teroasia.com/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://teroasia.com/" }
      ]
    }
  };
  const [NewHomeData] = await Promise.all([
    fetch('https://backend.teroasia.com/crawl/api.php', { next: { revalidate: 0 } }).then(res => res.json())
  ]);


  const safeNewHome = NewHomeData?.data || {};


  return (
    <>
    
      

        <Suspense fallback={<NewsSectionSkeleton />}>
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(homePage).replace(/</g, "\\u003c") }}
          />
          
          <HomeClient
            NewHomeData={safeNewHome}
          />
        </Suspense>
      
    </>

  );
}


