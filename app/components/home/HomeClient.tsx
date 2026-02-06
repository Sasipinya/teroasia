'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import VideoPlayer from './VideoPlayer';
import Section4 from './sections/home3/section4';
import Section2 from './sections/home4/section2';
import Section3 from './sections/home1/section3';
import Section8 from './sections/home1/section8';
import Section6 from './sections/home1/section6';
import Section7 from './sections/home1/section7';
import Section5 from './sections/home7/section5';
import HeroVideoSection from './HeroVideoSection';
import { ErrorBoundary } from 'react-error-boundary';

interface HomeClientProps {
  mainData: any;
  topNews: any;
  mobileDataDev: any;
  NewHomeData: any;
}
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" style={{ color: 'red' }}>
      <p>🚨 มีปัญหาใน component นี้:</p>
      <pre>{error.message}</pre>
    </div>
  )
}
export default function HomeClient({ mainData, topNews, mobileDataDev, NewHomeData }: HomeClientProps) {
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
    <>
      {/* ===================== DESKTOP ===================== */}
      <VideoPlayer src='https://teroasia.com/advertising/assets/images/Media1.mp4' />
      <Section4 />
      <Section2 />
      {NewHomeData.livenation && <ErrorBoundary FallbackComponent={ErrorFallback}> <Section3 data={NewHomeData.livenation} /></ErrorBoundary>}
      {NewHomeData.thaiticket && <ErrorBoundary FallbackComponent={ErrorFallback}> <Section5 data={NewHomeData.thaiticket} /></ErrorBoundary>}
      {NewHomeData.teromusic && <ErrorBoundary FallbackComponent={ErrorFallback}> <Section8 data={NewHomeData.teromusic} /></ErrorBoundary>}
      <Section6 />
      <Section7 />
      <HeroVideoSection />
      {/* ===================== MOBILE ===================== */}

    </>
  );
}
