'use client';
import { useEffect, useRef } from 'react';

// Define types
type SingleSize = [number, number] | [string];
type MultiSize = SingleSize[];
type GeneralSize = SingleSize | MultiSize;

// Declare window.googletag
declare global {
  interface Window {
    googletag?: Googletag;
    adsbygoogle?: any[];
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
  Mxauto?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ adUnitPath, size, id, targeting, Mxauto }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<any>(null);
  const isScriptLoaded = useRef(false);

  useEffect(() => {
    // สร้างฟังก์ชันสำหรับ initialize GPT
    if (typeof window === 'undefined') return;
    const initGPT = () => {
      if (!window.googletag) {
        window.googletag = { cmd: [] };
      }

      window.googletag.cmd.push(() => {
        try {
          // กำหนดค่า GPT
          const pubads = window.googletag.pubads();
          pubads.set("page_url", window.location.href);
          pubads.setTargeting("url", window.location.pathname);
          pubads.collapseEmptyDivs(true);

          // ลบ slot เก่า (ถ้ามี)
          if (slotRef.current) {
            window.googletag.destroySlots();
          }

          // สร้าง slot ใหม่
          const slot = window.googletag.defineSlot(adUnitPath, size, id);
          if (slot) {
            slot.addService(pubads);

            // เพิ่ม targeting
            if (targeting) {
              Object.entries(targeting).forEach(([key, value]) => {
                slot.setTargeting(key, value);
              });
            }

            slotRef.current = slot;
            window.googletag.enableServices();
          }
        } catch (error) {
          console.error('Error in GPT initialization:', error);
        }
      });
    };

    // โหลด GPT script
    if (!isScriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      script.async = true;
      script.onload = () => {
        isScriptLoaded.current = true;
        initGPT();
        // แสดง ad หลังจาก script โหลดเสร็จ
        window.googletag.cmd.push(() => {
          window.googletag.display(id);
          if (slotRef.current) {
            window.googletag.pubads().refresh([slotRef.current]);
          }
        });
      };
      document.head.appendChild(script);
    } else {
      initGPT();
      // แสดง ad ถ้า script โหลดแล้ว
      window.googletag.cmd.push(() => {
        window.googletag.display(id);
        if (slotRef.current) {
          window.googletag.pubads().refresh([slotRef.current]);
        }
      });
    }

    // Cleanup
    return () => {
      if (window.googletag && window.googletag.cmd) {
        window.googletag.cmd.push(() => {
          if (slotRef.current) {
            window.googletag.destroySlots();
            slotRef.current = null;
          }
        });
      }
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
        margin: '0 auto' // เพิ่ม margin auto เพื่อจัดกึ่งกลาง
      }}
      className={Mxauto === 'mx-auto' ? "mx-auto" : ""}
      data-testid="ad-unit-container"
    />
  );
};

export default AdUnit;