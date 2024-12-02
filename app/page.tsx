import type { Metadata } from "next";
import DynamicUpdateNews from "./components/home/updatenews";
import DynamicTopWeekNews from "./components/home/topweeknews";
import DynamicProgramsListNews from "./components/home/programslistnews"
import DynamicProgramListOther from "./components/home/programlistother";
import DynamicConcertandEventNews from "./components/home/concertandeventnews";
import DynamicMusicNews from "./components/home/musicnews";
import DynamicFilmbkk from "./components/home/filmbkk";
import DynamicHightlightSliderNews from "./components/home/hightlightslidernews";
import DynamicHightlightTopNews from "./components/home/hightlighttopnews";
import MenuCategory from "./components/home/mobile/menucategory";
import MenuHeadPrograms from "./components/home/mobile/menuheadprograms";
import HighlightNews from "./components/home/mobile/hightlightnews";
import NewsUpdate from "./components/home/mobile/newsupdate";
import NewsTopWeek from "./components/home/mobile/newstopweek";


export const metadata: Metadata = {
  title: "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
  description: "TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD ช่อง 7HD เช้านี้ที่หมอชิต ถกไม่เถียง ข่าวเย็นประเด็นร้อน มวย One Championship การ์ตูนดังสุดสัปดาห์",
};

export default async function Home() {

  const res = await fetch('https://backend.teroasia.com/apis2/index.php?a=news_main', { cache: 'no-store', next: { revalidate: 60 } });
  const data = await res.json();
  const res_top = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=get_top_view_set`, { cache: 'no-store', next: { revalidate: 60 } }
  );
  const data_topnews = await res_top.json();
  const resp_mobile = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=news_mobile_main`, { cache: 'no-store', next: { revalidate: 60 } }
  );
  const data_mobile = await resp_mobile.json();
  const resp_mobile_dev = await fetch(
    `https://backend.teroasia.com/apis2/index.php?a=news_mobile_main_dev`, { cache: 'no-store', next: { revalidate: 60 } }
  );
  const data_mobile_dev = await resp_mobile_dev.json();

  return (
    <>
      {/* Desktop */}
      <main className="hidden md:flex flex-col">

        {data.data.top_head_news && <DynamicHightlightTopNews data={data.data.top_head_news} />}
        {data.data.highlight && <DynamicHightlightSliderNews data={data.data.highlight} />}
        {data.data.news_update && <DynamicUpdateNews data={data.data.news_update[0].items} />}
        {data_topnews.data && <DynamicTopWeekNews data={data_topnews.data} />}
        {data.data.news_by_tvprograms && data.data.news_by_tvprograms.length > 0 && data.data.news_by_tvprograms.map((item: string, index: number) => (
          <DynamicProgramsListNews key={index} data={item} />
        ))
        }
        {data.data.old_programs && <DynamicProgramListOther data={data.data.old_programs} />}
        {data.data.concert_and_music && <DynamicConcertandEventNews data={data.data.concert_and_music[0]} />}
        {data.data.concert_and_music && <DynamicMusicNews data={data.data.concert_and_music[1]} />}
        <DynamicFilmbkk />
      </main>

      {/* Mobile */}
      <main className="flex flex-col md:hidden ">
      {data_mobile_dev && (<MenuHeadPrograms items={data_mobile_dev.data.top_navigate} />)}
      {data_mobile_dev && (<MenuCategory data={data_mobile_dev.data} />)}
      {data_mobile_dev.data.top_head_news && (<HighlightNews data={data_mobile_dev.data.top_head_news} /> )}
      {data_mobile_dev.data.news_update && (<NewsUpdate data={data_mobile_dev.data.news_update} />)}
      {data_mobile_dev.data.top_view_week && (<NewsTopWeek data={data_mobile_dev.data.top_view_week} />)}
     
      </main>

    </>
  );
}
