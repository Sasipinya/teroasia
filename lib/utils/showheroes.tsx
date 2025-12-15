'use client'; 

import React, { useEffect } from 'react';

interface ShowHeroesProps {
  showheroes_signature: string;
}

const ShowHeroes: React.FC<ShowHeroesProps> = ({ showheroes_signature }) => {
  useEffect(() => {
    const text_src = `https://content.viralize.tv/display/?zid=AAEy2QyWJ-VWLafc&cid=${showheroes_signature}&activation=adfill-onview&vip_mode=playing&vip_position=bottom-right`;
    
    const script = document.createElement('script');
    script.src = text_src;
    script.type = 'text/javascript';
    script.setAttribute('data-wid', 'auto');
    script.async = true;

    const container = document.getElementById('showheroes');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      const container = document.getElementById('showheroes');
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, [showheroes_signature]); 

  return (
    <div 
      id="showheroes" 
      className="w-full h-full"
    />
  );
};

export default ShowHeroes;