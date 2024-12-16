export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// pageview
export const pageview = (url: string): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// event
export const event = ({ action, category, label, value }: GTagEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}