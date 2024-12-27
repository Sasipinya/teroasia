'use client';
import { useEffect, useRef } from 'react';

// Define types
type SingleSize = [number, number];
type MultiSize = SingleSize[];
type GeneralSize = SingleSize | MultiSize;

// Declare window.googletag
declare global {
  interface Window {
    googletag?: Googletag;
  }
}

// Define Googletag interface
interface Googletag {
  cmd: any[];
  pubads: () => any;
  defineSlot: (adUnitPath: string, size: any, id: string) => any;
  display: (id: string) => void;
  destroySlots: () => boolean;
  enableServices: () => void;
}

interface AdUnitProps {
  adUnitPath: string;
  size: GeneralSize;
  id: string;
  targeting?: Record<string, string | string[]>;
}

const AdUnit: React.FC<AdUnitProps> = ({ adUnitPath, size, id, targeting }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize googletag
    if (!window.googletag) {
      window.googletag = {
        cmd: [],
        pubads: () => ({}),
        defineSlot: () => null,
        display: () => {},
        destroySlots: () => true,
        enableServices: () => {}
      };
    }

    window.googletag.cmd.push(() => {
      try {
       
        const slot = window.googletag?.defineSlot(adUnitPath, size, id);
        if (slot) {
          slot.addService(window.googletag?.pubads());

          if (targeting) {
            Object.entries(targeting).forEach(([key, value]) => {
              slot.setTargeting(key, value);
            });
          }

          window.googletag?.enableServices();
          window.googletag?.display(id);
        }
        
      } catch (error) {
        console.error('Error initializing ad slot:', error);
      }
    });

    return () => {
      window.googletag?.cmd.push(() => {
        window.googletag?.destroySlots();
      });
    };
  }, [adUnitPath, size, id, targeting]);

  const containerWidth = Array.isArray(size[0]) ? size[0][0] : size[0];
  const containerHeight = Array.isArray(size[0]) ? size[0][1] : size[1];

  return (
    <div
      id={id}
      ref={adRef}
      style={{
        width: typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
        height: Array.isArray(containerHeight) ? `${containerHeight[0]}px` : typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight,
      }}
      data-testid="ad-unit-container"
    />
  );
};

export default AdUnit;