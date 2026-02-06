'use client';

import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => { });
  }, []);

  return (
    <div 
  className={`relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden ${className}`}
  style={{ aspectRatio: '16 / 9' }}
>
  <video
    ref={videoRef}
    src={src}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover object-[center_80px] sm:object-center"
  />
</div>
  );
}