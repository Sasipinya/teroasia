'use client'
import Image from "next/image";
import type { StaticImageData } from 'next/image'
import { shimmer, toBase64 } from './shimer';
import { useState } from 'react'
interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: any;
  style?: React.CSSProperties;
  priority?: boolean;
  fetchpriority?:"auto" | "high" | "low" | undefined;
}



export const OptimizedImage=({ src, alt,width,height,className,style,priority,fetchpriority }: ImageProps) => {
  const [error, setError] = useState(false)
  return (
    <>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={style}
          priority={priority}
          fetchPriority={fetchpriority}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
          className={className}
          onError={() => setError(true)}


        />) : (
        <div className="bg-gray-200 flex items-center justify-center">
          <span>Image not available</span>
        </div>
      )}
    </>
  )
}