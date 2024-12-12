'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AutoHeightIFrameProps {
  src: string;
  title: string;
  className?: string;
  minHeight?: number;
  onLoad?: () => void;
}

const AutoHeightIFrame: React.FC<AutoHeightIFrameProps> = ({
  src,
  title,
  className = '',
  minHeight = 100,
  onLoad,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(minHeight);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const updateHeight = () => {
      try {
        const iframeDocument = iframe.contentWindow?.document;
        if (!iframeDocument) return;

        // Get the scroll height of the content
        const newHeight = Math.max(
          iframeDocument.documentElement.scrollHeight,
          iframeDocument.body.scrollHeight,
          minHeight
        );

        if (newHeight !== height) {
          setHeight(newHeight);
        }
      } catch (error) {
        console.error('Error resizing iframe:', error);
      }
    };

    // Add load event listener
    iframe.addEventListener('load', () => {
      updateHeight();
      onLoad?.();
    });

    // Create resize observer for the iframe content
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    // Start observing the iframe after it loads
    iframe.addEventListener('load', () => {
      try {
        const iframeDocument = iframe.contentWindow?.document;
        if (iframeDocument) {
          resizeObserver.observe(iframeDocument.documentElement);
        }
      } catch (error) {
        console.error('Error setting up ResizeObserver:', error);
      }
    });

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, minHeight, onLoad]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      width="100%"
      height={height}
      className={className}
      style={{ border: 'none' }}
    />
  );
};

export default AutoHeightIFrame;