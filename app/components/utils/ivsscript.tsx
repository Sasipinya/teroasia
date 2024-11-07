'use client';

import Script from 'next/script';

const IVideoSmartScripts = () => (
  <>
    <link 
      href="https://player.ivideosmart.com/ivshotspots/css/external/skin-takeover.css" 
      rel="stylesheet" 
    />
    <Script 
      src="https://player.ivideosmart.com/ivshotspots/js/external/skin-takeover.js" 
      strategy="lazyOnload" 
    />
    <Script 
      src="https://player.ivideosmart.com/ivsplayer/v4/dist/js/loader.js" 
      strategy="lazyOnload" 
    />
  </>
);

export default IVideoSmartScripts;