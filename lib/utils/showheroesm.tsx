'use client';

import { useEffect } from 'react';

const ShowHeroesM = ({ showheroes_signature }: { showheroes_signature: string }) => {
  useEffect(() => {
      const text_src = `https://content.viralize.tv/display/?zid=AAEy2QyWJ-VWLafc&cid=${showheroes_signature}&activation=adfill-onview&vip_mode=playing&vip_position=bottom-right`;
      
      const script = document.createElement('script');
      script.src = text_src;
      script.type = 'text/javascript';
      script.setAttribute('data-wid', 'auto');
      script.async = true;
  
      const container = document.getElementById('showheroesm');
      if (container) {
        container.appendChild(script);
      }
  
      return () => {
        
      };
    }, [showheroes_signature]); 

  return <div id="showheroesm"></div>;
}

export default ShowHeroesM;