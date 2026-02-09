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
import LogoAndSocial from './LogoAndSocial';
import LiveNationTero from './LiveNationTero';
import Thaiticketmajor from './Thaiticketmajor';
import TeroMusic from './TeroMusic';
import AboutUs from './AboutUs';
import Terodigital from './Terodigital';
import TeroServices from './TeroServices';

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
      <LogoAndSocial />
      <AboutUs />
      {NewHomeData.livenation && <ErrorBoundary FallbackComponent={ErrorFallback}> <LiveNationTero data={NewHomeData.livenation} /></ErrorBoundary>}
      {NewHomeData.thaiticket && <ErrorBoundary FallbackComponent={ErrorFallback}> <Thaiticketmajor data={NewHomeData.thaiticket} /></ErrorBoundary>}
      {NewHomeData.teromusic && <ErrorBoundary FallbackComponent={ErrorFallback}> <TeroMusic data={NewHomeData.teromusic} /></ErrorBoundary>}
      <Terodigital />
      <TeroServices />
      <HeroVideoSection />
      {/* ===================== MOBILE ===================== */}

    </>
  );
}
