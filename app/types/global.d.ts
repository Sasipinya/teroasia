
type SingleSize = [number, number];
type MultiSize = SingleSize[];
type GeneralSize = SingleSize | MultiSize;


interface GPTSlot {
  addService: (service: GPTPubAdsService) => GPTSlot;
  setTargeting: (key: string, value: string | string[]) => GPTSlot;
}

interface GPTPubAdsService {
  enableSingleRequest: () => void;
  enableServices: () => void;
}

interface Googletag {
  cmd: Array<() => void>;
  pubads: () => GPTPubAdsService;
  defineSlot: (adUnitPath: string, size: GeneralSize, id: string) => GPTSlot | null;
  display: (id: string) => void;
  destroySlots: () => boolean;
  enableServices: () => void;
}

declare global {
  interface Window {
    googletag: Googletag;
  }
}