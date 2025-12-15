
'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type SingleSize = [number, number] | [string];
type MultiSize = SingleSize[];
type GeneralSize = SingleSize | MultiSize;
interface AdProps {
  adUnitPath: string;
  size: GeneralSize;
  id: string;
  refreshInterval?: number;
  Mxauto?: string;
}

export const Advertisement = ({ 
  adUnitPath, 
  size, 
  id, 
  refreshInterval = 45000 ,Mxauto
}: AdProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  
  const refreshTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastRefreshTime = useRef<number>(0);
  const minRefreshInterval = 30000; // 30 seconds minimum
  const adSlotRef = useRef<any>(null);

  useEffect(() => {
    const initAd = () => {
      window.googletag = window.googletag || { cmd: [] };
      
      window.googletag.cmd.push(() => {
        // Destroy existing slot if any
        if (adSlotRef.current) {
          window.googletag.destroySlots([adSlotRef.current]);
        }

        adSlotRef.current = window.googletag
          .defineSlot(adUnitPath, size, id)
          ?.addService(window.googletag.pubads());

        if (adSlotRef.current) {
          window.googletag.pubads().addEventListener('slotRenderEnded', (event: any) => {
            if (event.slot === adSlotRef.current) {
              console.log('Ad rendered:', id);
            }
          });

          window.googletag.display(id);
        }
      });
    };

    initAd();

    return () => {
      if (adSlotRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([adSlotRef.current]);
        });
      }
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current);
      }
    };
  }, [adUnitPath, size, id]);

  useEffect(() => {
    const handleRefresh = () => {
      const currentTime = Date.now();
      const timeSinceLastRefresh = currentTime - lastRefreshTime.current;

      if (timeSinceLastRefresh < minRefreshInterval) {
        console.log('Refresh throttled:', id);
        return;
      }

      window.googletag.cmd.push(() => {
        if (adSlotRef.current && inView) {
          window.googletag.pubads().refresh([adSlotRef.current], {
            changeCorrelator: false
          });
          lastRefreshTime.current = currentTime;
          console.log('Ad refreshed:', id);
        }
      });
    };

    if (inView && refreshInterval) {
      refreshTimeoutRef.current = setInterval(handleRefresh, refreshInterval);
    }

    return () => {
      if (refreshTimeoutRef.current) {
        clearInterval(refreshTimeoutRef.current);
      }
    };
  }, [inView, refreshInterval, id]);

  const containerWidth = Array.isArray(size[0]) ? size[0][0] : size[0];
  const containerHeight = Array.isArray(size[0]) ? size[0][1] : size[1];
  return <div  className={Mxauto === 'mx-auto' ? "mx-auto" : ""} ref={ref} id={id} style={{
    width: typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
    height: Array.isArray(containerHeight) ? `${containerHeight[0]}px` : typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight,
   
  }} />;
};