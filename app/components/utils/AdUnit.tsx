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

 useEffect(() => {
   if (typeof window === 'undefined') return;

   if (!window.googletag) {
     const script = document.createElement('script');
     script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
     script.async = true;
     document.head.appendChild(script);
     
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
       // Clear existing slots
       window.googletag?.destroySlots();

       // Define new slot
       const slot = window.googletag?.defineSlot(adUnitPath, size, id);
       if (slot) {
         slot.addService(window.googletag?.pubads());

         if (targeting) {
           Object.entries(targeting).forEach(([key, value]) => {
             slot.setTargeting(key, value);
           });
         }

         slotRef.current = slot;
         window.googletag?.enableServices();
         window.googletag?.display(id);
         window.googletag?.pubads().refresh([slot]);
       }
     } catch (error) {
       console.error('Error initializing ad slot:', error);
     }
   });

   return () => {
     window.googletag?.cmd.push(() => {
       window.googletag?.destroySlots();
       slotRef.current = null;
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
     className={Mxauto === 'mx-auto' ? "mx-auto" : ""}
     data-testid="ad-unit-container"
   />
 );
};

export default AdUnit;