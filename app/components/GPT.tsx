// components/GPT.tsx
'use client'

import { FC, useEffect } from 'react'
import type { SizeMappingArray } from '../types/global';

interface GPTProps {
    adUnitPath: string;
    slotSize: SizeMappingArray;
    renderWhenViewable?: boolean;
    targeting?: Record<string, string | string[]>;
    sizeMapping?: Array<{
        viewportSize: [number, number];
        sizes: [number, number][] | string;
    }>;
    idAds: string;
}

export const GPT: FC<GPTProps> = ({
    adUnitPath,
    slotSize,
    renderWhenViewable = false,
    targeting,
    sizeMapping,
    idAds,
}) => {
    useEffect(() => {
        const googletag = window.googletag || { cmd: [] };
        window.googletag = googletag;

        googletag.cmd.push(() => {
            // Define slot
            const slot = googletag.defineSlot(
                adUnitPath,
                slotSize,
                idAds,
            );

            if (!slot) return;

            // Add size mapping if provided
            if (sizeMapping && sizeMapping.length > 0) {
                const mapping = googletag.sizeMapping();
                sizeMapping.forEach(({ viewportSize, sizes }) => {
                    mapping.addSize(viewportSize, sizes);
                });
                slot.defineSizeMapping(mapping.build());
            }

            // Add targeting if provided
            if (targeting) {
                Object.entries(targeting).forEach(([key, value]) => {
                    slot.setTargeting(key, value);
                });
            }

            // Add service and enable
            slot.addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();

            if (renderWhenViewable) {
                googletag.display(idAds);
            }
        });

        return () => {
            googletag.cmd.push(() => {
                googletag.destroySlots();
            });
        };
    }, [adUnitPath, slotSize, renderWhenViewable, targeting, sizeMapping]);

    return <div id={idAds} />;
};