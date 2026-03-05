"use client";

import Image from "next/image";
import { useState } from "react";

interface BannerProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string;
  priority?: boolean;
}

export default function BannerShowImage({
  src = "/images/banner.jpg",
  alt = "Banner Image",
  width = 1200,
  height = 400,
  href,
  priority = true,
}: BannerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageElement = (
    <div className="w-full overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto block object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );

  return (
    <section
      className="w-full bg-white flex justify-center items-center py-8 px-4"
      aria-label={alt}
    >
      <div className="w-full max-w-[1200px]">
        {href ? (
          <a
            href={href}
            className="group block w-full rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-blue-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
          >
            {imageElement}
          </a>
        ) : (
          <div className="group w-full">{imageElement}</div>
        )}
      </div>
    </section>
  );
}