'use client';

import { useEffect, useRef, useState } from 'react';

type SingleSize = [number, number] | [string];
type MultiSize = SingleSize[];
type GeneralSize = SingleSize | MultiSize;

declare global {
  interface Window {
    googletag?: any;
  }
}

interface AdUnitProps {
  adUnitPath: string;
  size: GeneralSize;
  id: string;
  targeting?: Record<string, string | string[]>;
  Mxauto?: string;
  placeholderColor?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
  adUnitPath,
  size,
  id,
  targeting,
  Mxauto,
  placeholderColor = '#f5f5f5',
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<any>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // 👀 Lazy Load Trigger
  useEffect(() => {
    if (!adRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(adRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 GPT Load + Display (with idle callback for PageSpeed)
  useEffect(() => {
    if (!shouldLoad) return;

    const runGPT = () => {
      window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];

      window.googletag.cmd.push(() => {
        try {
          const pubads = window.googletag.pubads();
          pubads.set("page_url", window.location.href);
          pubads.setTargeting("url", window.location.pathname);
          pubads.collapseEmptyDivs(true);

          if (slotRef.current) {
            window.googletag.destroySlots([slotRef.current]);
          }

          const slot = window.googletag.defineSlot(adUnitPath, size, id);
          if (slot) {
            slot.addService(pubads);

            if (targeting) {
              Object.entries(targeting).forEach(([key, value]) => {
                slot.setTargeting(key, value);
              });
            }

            slotRef.current = slot;

            window.googletag.enableServices();
            window.googletag.display(id);

            // 🟡 ปล่อยให้แสดงก่อน แล้วค่อย refresh ถ้าอยาก
            // window.googletag.pubads().refresh([slot]);
          }
        } catch (err) {
          console.error('Failed to load GPT:', err);
        }
      });
    };

    // ✅ ให้โหลด ads ช้าๆ เพื่อไม่ให้ PageSpeed หัก
    if ('requestIdleCallback' in window) {
      requestIdleCallback(runGPT);
    } else {
      setTimeout(runGPT, 1000);
    }

    return () => {
      if (window.googletag?.cmd && slotRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([slotRef.current]);
          slotRef.current = null;
        });
      }
    };
  }, [shouldLoad, adUnitPath, size, id, targeting]);

  // 🎯 ป้องกัน CLS ด้วย fallback ขนาด
  let containerWidth: string | number = '100%';
  let containerHeight: string | number = 'auto';

  if (Array.isArray(size[0])) {
    const firstSize = size[0] as [number, number];
    containerWidth = firstSize[0];
    containerHeight = firstSize[1];
  } else if (
    Array.isArray(size) &&
    typeof size[0] === 'number' &&
    typeof size[1] === 'number'
  ) {
    containerWidth = size[0];
    containerHeight = size[1];
  } else {
    containerWidth = 300;
    containerHeight = 250;
  }

  return (
    <div
      id={id}
      ref={adRef}
      style={{
        width: typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth,
        height: typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight,
        minHeight: typeof containerHeight === 'number' ? `${containerHeight}px` : '250px',
        position: 'relative',
        backgroundColor: placeholderColor,
      }}
      className={Mxauto === 'mx-auto' ? 'mx-auto' : ''}
      data-testid="ad-unit-container"
    >
      {!shouldLoad && <div aria-hidden="true" style={{ display: "none" }} />}
    </div>
  );
};

export default AdUnit;
