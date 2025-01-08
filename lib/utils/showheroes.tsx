
'use client';

import { useEffect } from 'react';

const ShowHeroes = ({ showheroes_signature }: { showheroes_signature: string }) => {

  useEffect(() => {
    const adContainerId = 'showheroes';
    const adUrl = `https://content.viralize.tv/display/?zid=AAEy2QyWJ-VWLafc&cid=${showheroes_signature}&activation=adfill-onview&vip_mode=playing&vip_position=bottom-right`;

    const script = document.createElement('script');
    script.src = adUrl;
    script.async = true;
    script.setAttribute('data-wid', 'auto');

    const container = document.getElementById(adContainerId);
    if (container) {
      container.appendChild(script);
    } else {
      console.error('Ad container not found!');
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, [showheroes_signature]);

  return <div id="showheroes"></div>;

}

export default ShowHeroes;