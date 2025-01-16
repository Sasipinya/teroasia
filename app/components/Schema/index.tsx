

import { WebsiteSchema,OrganizationSchema } from "@/app/types/schema";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://teroasia.com';

const createSchemaDefault = (): JSX.Element => {
  const websiteSchema: WebsiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": BASE_URL,
    "name": "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
    "description": "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
    "sameAs": [
      "https://facebook.com/TERODigital",
      "https://facebook.com/TERONews",
      "https://youtube.com/c/TERODIGITAL",
      "https://tiktok.com/@terodigital",
      "https://instagram.com/terodigital"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}search/{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
    "alternateName": "teroasia",
    "url": BASE_URL,
    "logo": `${BASE_URL}/static/images/logo_tero.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "terodigital@gmail.com",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default createSchemaDefault;