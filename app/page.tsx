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

  return (
    <>

      <main className="flex flex-col">

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

    </>
  );
}
