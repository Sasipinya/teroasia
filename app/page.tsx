import type { Metadata } from "next";
import HightlightTopNews from "./components/home/hightlighttopnews";
import UpdateNews from "./components/home/updatenews";
import ProgramListOther from "./components/home/programlistother";
import Filmbkk from "./components/home/filmbkk";
import MusicNews from "./components/home/musicnews";
import HightlightSliderNews from "./components/home/hightlightslidernews";
import TopWeekNews from "./components/home/topweeknews";
import ProgramsListNews from "./components/home/programslistnews";
import Concertandevent from "./components/home/concertandevent";
//Mobile//
import MenuCategory from "./components/home/mobile/menucategory";
import MenuHeadPrograms from "./components/home/mobile/menuheadprograms";
import HighlightNews from "./components/home/mobile/hightlightnews";
import NewsUpdate from "./components/home/mobile/newsupdate";
import NewsTopWeek from "./components/home/mobile/newstopweek";
import { Suspense } from "react";
import AdUnit from "./components/utils/AdUnit";
import GliaPlayer from "./components/utils/GliaPlayer";
import SchemaDefault from './components/Schema';
import CarouselJsonLd from "./components/home/CarouselJsonLd";

export const metadata: Metadata = {
  title: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
  description: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
  keywords: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
  metadataBase: new URL('https://www.teroasia.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.teroasia.com',
    description: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์',
    siteName: 'TeroAsia',
    images: [
      {
        url: '/images/logo_tero.png',
        width: 1200,
        height: 630,
        alt: 'รูป เว็บข่าวช่อง TeroAsia',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TERO DIGITAL',
    creator: '@TeroDigital',
    site: '@TeroDigital',
    images: ['/images/logo_tero.png'],
  },
  themeColor: '#ee1c25',
  verification: {
    google: 'jLVdQVpBTnxHB4Vi9rNe6Qt7MDhJPErtK7av2FQK6AI'
  },
  other: {
    'fb:app_id': '1152976658386392',
    'fb:admins': '100000660497482,1032774606',
  }

};

export default async function Home() {

  const res = await fetch('https://backend.teroasia.com/apis2/index.php?a=news_main', { cache: 'no-store', next: { revalidate: 3600 } });
  const data = await res.json();
  const res_top = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=get_top_view_set`, { cache: 'no-store', next: { revalidate: 3600 } }
  );
  const data_topnews = await res_top.json();

  const resp_mobile = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=news_mobile_main`, { cache: 'no-store', next: { revalidate: 3600 } }
  );
  const data_mobile = await resp_mobile.json();

  const resp_mobile_dev = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=news_mobile_main_dev`, { cache: 'no-store', next: { revalidate: 3600 } }
  );
  const data_mobile_dev = await resp_mobile_dev.json();

  return (
    <>

      <SchemaDefault />
      <CarouselJsonLd/>
      {/* Desktop */}
      <main className="hidden md:flex flex-col">

        {/* Ads Billboard Before HightlightTopNews */}
        <div className="container mx-auto p-2">
          <AdUnit adUnitPath="/33368840/TA_Desktop_Homepage_Billboard"
            size={[[970, 250],
            [970, 90],
            [1120, 300],
            [728, 90]]}
            id="div-gpt-ad-1676441812031-0"
            targeting={{
              position: 'sidebar'
            }}
            Mxauto="mx-auto"
          />
        </div>

        {data.data.top_head_news && <HightlightTopNews data={data.data.top_head_news} />}
        {data.data.highlight && <HightlightSliderNews data={data.data.highlight} />}
        {data.data.news_update && <UpdateNews data={data.data.news_update[0].items} />}
        {data_topnews.data && <TopWeekNews data={data_topnews.data} />}

        {/* Ads MidLeaderboard After TopWeekNews */}
        <div className="container mx-auto p-2 mb-10">
          <AdUnit adUnitPath="/33368840/TA_Desktop_Homepage_MidLeaderboard"
            size={[[300, 250], [728, 90], [336, 280]]}
            id="div-gpt-ad-1676442558130-0"
            targeting={{
              position: 'sidebar'
            }}
            Mxauto="mx-auto"
          />
        </div>

        {data.data.news_by_tvprograms && <ProgramsListNews data={data.data.news_by_tvprograms} />}
        {data.data.old_programs && <ProgramListOther data={data.data.old_programs} />}
        {data.data.concert_and_music && <Concertandevent data={data.data.concert_and_music[0]} />}
        {data.data.concert_and_music && <MusicNews data={data.data.concert_and_music[1]} />}
        <Filmbkk />
        <GliaPlayer />
      </main>

      {/* Mobile */}
      <main className="flex flex-col md:hidden ">
        {data_mobile_dev && (<MenuHeadPrograms items={data_mobile_dev.data.top_navigate} />)}
        {/* Ads Before MenuCategory */}
        <div className="container mx-auto p-2">
          <AdUnit adUnitPath="/33368840/TA_Mobile_Mrec_1"
            size={[[300, 250], [336, 280]]}
            id="div-gpt-ad-1676443420932-0"


          />
        </div>
        {data_mobile_dev && (<MenuCategory data={data_mobile_dev.data} />)}
        <Suspense fallback={<div>Loading...</div>}>
          {data_mobile_dev.data.top_head_news && (<HighlightNews data={data_mobile_dev.data.top_head_news} />)}
        </Suspense>
        {/* Ads Before HighlightNews */}
        <div className="container mx-auto p-2">
          <AdUnit adUnitPath="/33368840/TA_Mobile_Mrec_2"
            size={[[300, 250], [336, 280]]}
            id="div-gpt-ad-1676444017967-0"

          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {data_mobile_dev.data.news_update && (<NewsUpdate data={data_mobile_dev.data.news_update} />)}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {data_mobile_dev.data.top_view_week && (<NewsTopWeek data={data_mobile_dev.data.top_view_week} />)}
        </Suspense>
      </main>

    </>
  );
}
