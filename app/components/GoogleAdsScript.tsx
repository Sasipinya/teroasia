'use client';
import Script from 'next/script';
import { useEffect } from 'react';

const GoogleAdsScript: React.FC = () => {
  useEffect(() => {
    // Initialize GPT
    window.googletag = window.googletag || { cmd: [] };
  }, []);

  return (
    <Script
      id="googletagservices"
      strategy="afterInteractive"
      src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
    />
  );
};

export default GoogleAdsScript;