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
      className={`relative w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden ${className}`}
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
      
      {/* Wave SVG */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-[50px] md:h-[80px] lg:h-[100px]" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
  d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" 
  fill="#ffffff"
/>
      </svg>
    </div>
  );
}