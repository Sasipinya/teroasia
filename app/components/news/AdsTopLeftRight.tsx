'use client';

import React, { useState, useEffect, useRef } from 'react';
import AdUnit from '../AdUnit';

interface SponsorProps {
    data_page?: 'news' | 'program';
    program_slug?: string;
}

interface AdsConfig {
    id_ads_bg: string;
    id_ads_left: string;
    id_ads_right: string;
    path_ads_bg: string;
    path_ads_l: string;
    path_ads_r: string;
}

const AdsTopLeftRight: React.FC<SponsorProps> = ({ data_page, program_slug }) => {
    const [bodyHeight, setBodyHeight] = useState<number>(0);
    const [bodyWidth, setBodyWidth] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [sponsorAHeight, setSponsorAHeight] = useState<number>(0);
    const divElement = useRef<HTMLDivElement>(null);

    const getAdsConfig = (): AdsConfig => {
        const defaultConfig: AdsConfig = {
            id_ads_bg: 'div-gpt-ad-1676442955168-0',
            id_ads_left: 'div-gpt-ad-1676443015698-0',
            id_ads_right: 'div-gpt-ad-1676443074339-0',
            path_ads_bg: "/33368840/TA_Desktop_News_Billboard",
            path_ads_l: "/33368840/TA_Desktop_News_SideSkyscraper_Left",
            path_ads_r: "/33368840/TA_Desktop_News_SideSkyscraper_Right",
        };

        if (data_page === 'program') {
            return {
                ...defaultConfig,
                id_ads_bg: 'div-gpt-ad-1676442792350-0',
                id_ads_left: 'div-gpt-ad-1676442847735-0',
                id_ads_right: 'div-gpt-ad-1676442884131-0',
                path_ads_bg: '/33368840/TA_Desktop_Program_Billboard',
                path_ads_l: '/33368840/TA_Desktop_Program_SideSkyscraper_Left',
                path_ads_r: '/33368840/TA_Desktop_Program_SideSkyscraper_Right'
            };
        }

        return defaultConfig;
    };

    const handleScroll = () => {
        setScrollY(window.pageYOffset);
    };

    const calculateBodyHeight = () => {
        const html = document.documentElement;
        setBodyHeight(html.scrollHeight - html.clientHeight - 612);
    };

    const checkHeightOfDiv = () => {
        if (divElement.current) {
            setSponsorAHeight(divElement.current.clientHeight);
        }
    };

    useEffect(() => {
        const widthBody = document.documentElement.clientWidth;
        setBodyWidth(widthBody);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", calculateBodyHeight);

        checkHeightOfDiv();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", calculateBodyHeight);
        };
    }, []);

    const adsConfig = getAdsConfig();
    const diff = 69 + (bodyHeight - scrollY);
    const width_lr = 990 + ((bodyWidth - 990) / 2);

    return (
        <>
            <div
                className={`cursor-pointer ${(data_page === 'news' || data_page === 'program') ? 'bg-none' : ''}`}
                ref={divElement}
            >
                {adsConfig.path_ads_bg && (
                    <div className="container mx-auto">
                        <div className="mx-2">
                            <div className="desktop_ads">
                                <div
                                    id={adsConfig.id_ads_bg}
                                    className="min-w-[970px] min-h-[250px]"
                                >
                                    <AdUnit
                                        id={adsConfig.id_ads_bg}
                                        adUnitPath={adsConfig.path_ads_bg}
                                        size={[[970, 250], [1120, 300]]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="relative">
                <div
                    className="pos_l"
                    style={{
                        top: scrollY > sponsorAHeight ? (scrollY < bodyHeight ? '69px' : `${diff}px`) : '300px',
                        position: scrollY > sponsorAHeight ? 'fixed' : 'absolute',
                        left: `${width_lr}px`
                    }}
                >
                    {adsConfig.path_ads_l && (
                        <div className="desktop_ads">
                            <div className="min-w-[160px] min-h-[600px]">
                                <AdUnit
                                    id={adsConfig.id_ads_left}
                                    adUnitPath={adsConfig.path_ads_l}
                                    size={[[160, 600], [300, 600]]}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="pos_r"
                    style={{
                        top: scrollY > sponsorAHeight ? (scrollY < bodyHeight ? '69px' : `${diff}px`) : '300px',
                        position: scrollY > sponsorAHeight ? 'fixed' : 'absolute',
                        right: `${width_lr}px`
                    }}
                >
                    {adsConfig.path_ads_r && (
                        <div className="desktop_ads">
                            <div className="min-w-[160px] min-h-[600px]">
                                <AdUnit
                                    id={adsConfig.id_ads_right}
                                    adUnitPath={adsConfig.path_ads_r}
                                    size={[[160, 600], [300, 600]]}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdsTopLeftRight;