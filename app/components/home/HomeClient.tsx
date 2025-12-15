'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import LazyWrapper from '@/app/components/utils/LazyWrapper';
import ImagePopupAutoFromUrl from "@/app/components/ImagePopupAutoFromUrl";
// ========== Lazy Components ==========
const AdSlot = dynamic(() => import("@/app/components/AdSlot"), {
  ssr: false,
});
const GliaPlayer = dynamic(() => import('../utils/GliaPlayer'), {
  loading: () => <div className="h-40 bg-gray-100 rounded" />,
  ssr: false
});
const Filmbkk = dynamic(() => import('../home/filmbkk'), {
  loading: () => <div className="h-96 bg-gray-100 rounded" />,
  ssr: false
});
const ProgramListOther = dynamic(() => import('../home/programlistother'));
const Concertandevent = dynamic(() => import('../home/concertandevent'));
const MusicNews = dynamic(() => import('../home/musicnews'));

// ========== Static Components ==========

const AdUnit = dynamic(() => import('../utils/AdUnit'), {
  loading: () => <div className="h-96 bg-gray-100 rounded" />,
  ssr: false
});
import HightlightTopNews from '../home/hightlighttopnews';
import HightlightSliderNews from '../home/hightlightslidernews';
import UpdateNews from '../home/updatenews';
import TopWeekNews from '../home/topweeknews';
import ProgramsListNews from '../home/programslistnews';

// Mobile Components
import MenuHeadPrograms from '../home/mobile/menuheadprograms';
import HighlightNews from '../home/mobile/hightlightnews';
import NewsUpdate from '../home/mobile/newsupdate';
import NewsTopWeek from '../home/mobile/newstopweek';

import { ErrorBoundary } from 'react-error-boundary'

interface HomeClientProps {
  mainData: any;
  topNews: any;
  mobileDataDev: any;
}
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" style={{ color: 'red' }}>
      <p>🚨 มีปัญหาใน component นี้:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
export default function HomeClient({ mainData, topNews, mobileDataDev }: HomeClientProps) {
  const [loadExtra, setLoadExtra] = useState(false);
  const lazyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadExtra(true);
        observer.disconnect();
      }
    });

    if (lazyRef.current) {
      observer.observe(lazyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ===================== DESKTOP ===================== */}
      <main className="hidden md:flex flex-col">
        <div className="container mx-auto p-2 min-h-[250px]">
          <AdUnit
            adUnitPath="/33368840/TA_Desktop_Homepage_Billboard"
            size={[[970, 250], [970, 90], [1120, 300], [728, 90]]}
            id="div-gpt-ad-1676441812031-0"
            targeting={{ position: 'sidebar' }}
            Mxauto="mx-auto"
          />
          <AdSlot id="TA_Desktop_Home_Leaderboard" />
        </div>

        {mainData.top_head_news && <ErrorBoundary FallbackComponent={ErrorFallback}><HightlightTopNews data={mainData.top_head_news} /></ErrorBoundary>}
        <div className="container mx-auto p-2 min-h-[250px]">
          <AdSlot id="TA_Desktop_Home_Mid1" />
        </div>
        {mainData.highlight && <ErrorBoundary FallbackComponent={ErrorFallback}><HightlightSliderNews data={mainData.highlight} /></ErrorBoundary>}
        {mainData.news_update && <ErrorBoundary FallbackComponent={ErrorFallback}><UpdateNews data={mainData.news_update[0]?.items || []} /></ErrorBoundary>}
        {topNews && <ErrorBoundary FallbackComponent={ErrorFallback}><TopWeekNews data={topNews} /></ErrorBoundary>}
        <div className="container mx-auto p-2 min-h-[250px]">
          <AdSlot id="TA_Desktop_Home_Mid2" />
        </div>

        <div className="container mx-auto p-2 mb-10 min-h-[250px]">
          <AdUnit
            adUnitPath="/33368840/TA_Desktop_Homepage_MidLeaderboard"
            size={[[300, 250], [728, 90], [336, 280]]}
            id="div-gpt-ad-1676442558130-0"
            targeting={{ key1: 'value1', key2: ['value2', 'value3'] }}
            Mxauto="mx-auto"
          />
        </div>

        {mainData.news_by_tvprograms && <ProgramsListNews data={mainData.news_by_tvprograms} />}

        {/* Lazy Section */}
        <div ref={lazyRef}>
          {loadExtra && (
            <>
              {mainData.old_programs && <LazyWrapper><ErrorBoundary FallbackComponent={ErrorFallback}><ProgramListOther data={mainData.old_programs} /></ErrorBoundary></LazyWrapper>}
              {mainData.concert_and_music && (
                <>
                  <LazyWrapper>
                    <ErrorBoundary FallbackComponent={ErrorFallback}><Concertandevent data={mainData.concert_and_music[0]} /></ErrorBoundary>
                  </LazyWrapper>
                  <LazyWrapper>
                    <ErrorBoundary FallbackComponent={ErrorFallback}><MusicNews data={mainData.concert_and_music[1]} /></ErrorBoundary>
                  </LazyWrapper>
                </>
              )}
              <LazyWrapper>
                <ErrorBoundary FallbackComponent={ErrorFallback}><Filmbkk /></ErrorBoundary>
              </LazyWrapper>
              <LazyWrapper>
                <ErrorBoundary FallbackComponent={ErrorFallback}><GliaPlayer /></ErrorBoundary>
              </LazyWrapper>
            </>
          )}
        </div>
        <ImagePopupAutoFromUrl pageUrl="https://backend.teroasia.com/uploads/popup_teroasia/1457090.jpg" />
      </main>

      {/* ===================== MOBILE ===================== */}
      <main className="flex flex-col md:hidden">
        {mobileDataDev?.top_navigate && <MenuHeadPrograms items={mobileDataDev.top_navigate} />}

        <div className="container mx-auto p-2  w-[300px] h-[250px] relative overflow-hidden">
          <AdUnit
            adUnitPath="/33368840/TA_Mobile_Mrec_1"
            size={[[300, 250], [336, 280]]}
            id="div-gpt-ad-1676443420932-0"
            Mxauto="mx-auto"
          />
        </div>

        {/* <MenuCategory data={mobileDataDev} /> */}
        {mobileDataDev?.top_head_news && <HighlightNews data={mobileDataDev.top_head_news} />}

        <div className="container mx-auto p-2  w-[300px] h-[250px] relative overflow-hidden">
          <AdUnit
            adUnitPath="/33368840/TA_Mobile_Mrec_2"
            size={[[300, 250], [336, 280]]}
            id="div-gpt-ad-1676444017967-0"
            Mxauto="mx-auto"
          />
        </div>

        {mobileDataDev?.news_update && <NewsUpdate data={mobileDataDev.news_update} />}
        {mobileDataDev?.top_view_week && <NewsTopWeek data={mobileDataDev.top_view_week} />}
         <ImagePopupAutoFromUrl pageUrl="https://backend.teroasia.com/uploads/popup_teroasia/1457090.jpg" />
      </main>
    </div>
  );
}
