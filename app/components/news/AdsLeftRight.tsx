'use client';

import React, { useState, useEffect, useRef } from 'react';
import AdUnit from '../utils/AdUnit';

interface SponsorProps {
   base?: 'left-0' | 'right-0';
   id_ads: string;
   path_ads:string;
   lr: 'Left' | 'Right';
}



const AdsLeftRight: React.FC<SponsorProps> = ({ base,id_ads,path_ads,lr }) => {
 
  

  
    return (
     
           
            
                <div
                    className={`z-[1] min-w-[300px] min-h-[600px] absolute  ${base}`} 
                    
                >
                     {/* AdsNews */}
                     
                        <AdUnit
                        adUnitPath={path_ads}
                        size={[[160,600],[300,600]]}
                        id={id_ads}
                        
                        />
                      <div id={`TA_Article_${lr}`}></div>
                </div>

                
           
       
    );
};

export default AdsLeftRight;