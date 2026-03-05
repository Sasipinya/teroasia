'use client';

import { useEffect, useState, useRef } from 'react';
import VideoPlayer from './VideoPlayer';
import { ErrorBoundary } from 'react-error-boundary';
import LogoAndSocial from './LogoAndSocial';
import LiveNationTero from './LiveNationTero';
import Thaiticketmajor from './Thaiticketmajor';
import TeroMusic from './TeroMusic';
import AboutUs from './AboutUs';
import Terodigital from './Terodigital';
import TeroServices from './TeroServices';
import AboutUsTeroHealth from './AboutUsTeroHealth';
import BannerShowImage from './BannerShowImage';

interface HomeClientProps {
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
export default function HomeClient({  NewHomeData }: HomeClientProps) {
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
      {/* ===================== DESKTOP ===================== * AND   ===================== MOBILE ===================== */}
      <VideoPlayer src='https://teroasia.com/advertising/assets/images/Media1.mp4' />
      <LogoAndSocial />
      <BannerShowImage src="assets/img/elements/Web banner 3x3_BKK_New (2).jpg" alt="3X3"/>
      <AboutUs />
      {NewHomeData.livenation && <ErrorBoundary FallbackComponent={ErrorFallback}> <LiveNationTero data={NewHomeData.livenation} /></ErrorBoundary>}
      {NewHomeData.thaiticket && <ErrorBoundary FallbackComponent={ErrorFallback}> <Thaiticketmajor data={NewHomeData.thaiticket} /></ErrorBoundary>}
      {NewHomeData.teromusic && <ErrorBoundary FallbackComponent={ErrorFallback}> <TeroMusic data={NewHomeData.teromusic} /></ErrorBoundary>}
      <Terodigital />
      <TeroServices />
      <AboutUsTeroHealth/>
    </>
  );
}
