'use client';

import React, { useEffect, useRef } from 'react';

export const GoogleAdsProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const isGPTLoaded = useRef(false);

  useEffect(() => {
    if (!isGPTLoaded.current) {
      loadGPTScript();
    }

    return () => {
      window.googletag?.cmd?.push(() => {
        window.googletag.destroySlots();
      });
    };
  }, []);

  const loadGPTScript = () => {
    const script = document.createElement('script');
    script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    script.async = true;
    script.onload = () => {
      isGPTLoaded.current = true;
      initializeGPT();
    };
    document.head.appendChild(script);
  };

  const initializeGPT = () => {
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(() => {
      window.googletag.pubads().setPrivacySettings({
        'restrictDataProcessing': true
      });
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    });
  };

  return <>{children}</>;
};