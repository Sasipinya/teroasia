'use client';

import React, { useState, useEffect, useRef } from 'react';
import AdUnit from '../AdUnit';

interface SponsorProps {
   base?: 'left-0' | 'right-0';
   id_ads: string;
   path_ads:string;
}

interface AdsConfig {
    id_ads: string;
    path_ads: string;
}

const AdsTopLeftRight: React.FC<SponsorProps> = ({ base,id_ads,path_ads }) => {
    const [bodyHeight, setBodyHeight] = useState<number>(0);
    const [bodyWidth, setBodyWidth] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [sponsorAHeight, setSponsorAHeight] = useState<number>(0);
    const divElement = useRef<HTMLDivElement>(null);

  

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY || window.pageYOffset;
            setScrollY(currentScrollY);
            calculateBodyHeight(); // เรียกคำนวณความสูงทุกครั้งที่ scroll
        }
    };

    const calculateBodyHeight = () => {
        const html = document.documentElement;
        const body = document.body;
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        setBodyHeight(height - window.innerHeight - 612);
    };

    const checkHeightOfDiv = () => {
        if (divElement.current) {
            setSponsorAHeight(divElement.current.clientHeight);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setBodyWidth(window.innerWidth);
                calculateBodyHeight();
            }
        };

        // Initial setup
        handleResize();
        checkHeightOfDiv();

        // Event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    const diff = 69 + (bodyHeight - scrollY);
    const width_lr = 990 + ((bodyWidth - 990) / 2);

    return (
     
           
            
                <div
                    className=" z-[-1] min-w-[300px] min-h-[600px] absolute right-0 "
                    style={{
                        top: scrollY > sponsorAHeight ? (scrollY < bodyHeight ? '69px' : `${diff}px`) : '0px',
                        position: scrollY > sponsorAHeight ? 'fixed' : 'absolute',
                        left: `0px`
                    }}
                >
                     {/* Ads Right News */}
                     <div className={` z-[-1] min-w-[300px] min-h-[600px] absolute ${base} `} >
                        <AdUnit
                        adUnitPath="/33368840/TA_Desktop_News_SideSkyscraper_Right"
                        size={[[160,600],[300,600]]}
                        id="div-gpt-ad-1676443074339-0"
                        
                        />
                    </div>
                </div>

                
           
       
    );
};

export default AdsTopLeftRight;