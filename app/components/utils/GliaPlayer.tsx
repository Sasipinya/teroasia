'use client';

import Script from 'next/script';

const GliaPlayer = () => {
  return (
    <div className='md:my-8'>
      {/* Desktop Player */}
      <div 
        className="gliaplayer-container "
        data-slot="teroasia_desktop"
      />
      <Script
        src="https://player.gliacloud.com/player/teroasia_desktop"
        data-media-query="(min-width: 601px)"
        async
      />

      {/* Mobile Player */}
      <div 
        className="gliaplayer-container "
        data-slot="teroasia_mobile"
      />
      <Script
        src="https://player.gliacloud.com/player/teroasia_mobile"
        data-media-query="(max-width: 600px)"
        async
      />
    </div>
  );
};

export default GliaPlayer;