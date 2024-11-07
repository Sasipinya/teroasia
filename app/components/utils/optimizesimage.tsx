import Image from "next/image";
import type { StaticImageData } from 'next/image'
import { shimmer, toBase64 } from './shimer';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: any;
  style?: React.CSSProperties;
  priority?: boolean;
}



export const OptimizedImage=({ src, alt,width,height,className,style,priority }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      priority
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      className={className}
      
    />
  )
}