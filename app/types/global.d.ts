// types/global.d.ts
export interface GoogletagPubAdsService {
    enableSingleRequest: () => void;
    refresh: (slots?: GoogletagSlot[]) => void;
    clear: (slots?: GoogletagSlot[]) => void;
    display: (divId: string) => void;
    collapseEmptyDivs: (collapse?: boolean) => void;
  }
  
  export interface GoogletagSlot {
    addService: (service: GoogletagPubAdsService) => GoogletagSlot;
    clearTargeting: () => GoogletagSlot;
    defineSizeMapping: (sizeMapping: SizeMappingArray) => GoogletagSlot;
    getAdUnitPath: () => string;
    getSlotElementId: () => string;
    setTargeting: (key: string, value: string | string[]) => GoogletagSlot;
  }
  
  export type SizeMappingArray = Array<[number, number][] | string>;
  
  export interface Googletag {
    cmd: Array<() => void>;
    pubads: () => GoogletagPubAdsService;
    enableServices: () => void;
    defineSlot: (
      adUnitPath: string, 
      size: SizeMappingArray, 
      divId: string
    ) => GoogletagSlot | null;
    display: (divId: string) => void;
    destroySlots: (slots?: GoogletagSlot[]) => boolean;
    sizeMapping: () => GoogletagSizeMapping;
  }
  
  export interface GoogletagSizeMapping {
    addSize: (viewportSize: [number, number], slotSize: [number, number][] | string) => GoogletagSizeMapping;
    build: () => SizeMappingArray;
  }
  
 declare global {
    interface Window {
      googletag: Googletag;
    }
  }