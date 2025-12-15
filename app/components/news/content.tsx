'use client';

import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
import AdUnit from '../utils/AdUnit';

interface ContentNewsProps {
  data?: {
    news_content: string;
  };
}

interface AdsPosition {
  mainAd: number;
  inRead1?: number;
  inRead2?: number;
}

export default function Content({ data }: ContentNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [processedContent, setProcessedContent] = useState<any>(null);

  useEffect(() => {
    if (data?.news_content) {
      const MainAd = () => (
        <div className="flex justify-center items-center w-full my-4">
          <div id="grf_teroasiacom_2" className="relative">
            <AdUnit
              adUnitPath="/33368840/inImageAd"
              id="div-gpt-ad-1677147138448-0"
              size={[[1, 1]]}
              Mxauto="mx-auto"
            />
          </div>
        </div>
      );

      const InReadAd1 = () => (
        <div className="text-center hidden md:block">
          <AdUnit
            id="div-gpt-ad-1676443237190-0"
            adUnitPath="/33368840/TA_Desktop_News_InArticle_P2"
            size={[[336, 280], [1, 1], [300, 250]]}
            Mxauto="mx-auto"
          />
        </div>
      );

      const InReadAd2 = () => (
        <div className="text-center hidden md:block">
          <AdUnit
            id="div-gpt-ad-1676443285791-0"
            adUnitPath="/33368840/TA_Desktop_News_InArticle_P4"
            size={[[336, 280], [1, 1], [300, 250]]}
            Mxauto="mx-auto"
          />
        </div>
      );

      const AdDiv = ({ id }: { id: string }) => (
        <div id={id} className="my-4 w-full" />
      );

      const insertAds = (content: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        const elements = Array.from(tempDiv.querySelectorAll('div, p')).filter(
          (el) => !el.innerHTML.includes('&nbsp;') && el.textContent?.trim() !== ''
        );

        // แทรก ads แบบเดิม
        const positions: AdsPosition = {
          mainAd: elements.length > 3 ? elements.length - 3 : 1,
          inRead1: elements.length > 3 ? 4 : undefined,
          inRead2: elements.length > 6 ? 7 : undefined,
        };

        if (positions.mainAd && elements[positions.mainAd]) {
          elements[positions.mainAd].insertAdjacentHTML('beforebegin', '<div data-ad="main"></div>');
        }
        if (positions.inRead1 && elements[positions.inRead1]) {
          elements[positions.inRead1].insertAdjacentHTML('beforebegin', '<div data-ad="inread1"></div>');
        }
        if (positions.inRead2 && elements[positions.inRead2]) {
          elements[positions.inRead2].insertAdjacentHTML('beforebegin', '<div data-ad="inread2"></div>');
        }

        // เพิ่ม Mid1 - Mid4
        const midAdPositions = [
          { index: 2, id: 'TA_Article_Desktop_Mid1' },
          { index: 4, id: 'TA_Article_Desktop_Mid2' },
          { index: 6, id: 'TA_Article_Desktop_Mid3' },
          { index: 8, id: 'TA_Article_Desktop_Mid4' },
        ];

        midAdPositions.forEach(({ index, id }) => {
          if (index <= elements.length) {
            elements[index]?.insertAdjacentHTML('beforebegin', `<div data-ta="${id}"></div>`);
          }
        });

        return tempDiv.innerHTML;
      };

      const parsed = parse(insertAds(data.news_content), {
        replace: (domNode: any) => {
          if (domNode.attribs) {
            if (domNode.attribs['data-ad']) {
              switch (domNode.attribs['data-ad']) {
                case 'main':
                  return <MainAd />;
                case 'inread1':
                  return <InReadAd1 />;
                case 'inread2':
                  return <InReadAd2 />;
              }
            }
            if (domNode.attribs['data-ta']) {
              return <AdDiv id={domNode.attribs['data-ta']} />;
            }
          }
          return domNode;
        },
      });

      setProcessedContent(parsed);
    }
  }, [data?.news_content]);

  if (!data) return <div>loading...</div>;
  if (!processedContent) return <div>Processing content...</div>;

  return (
    <div
      className={`w-full max-w-[100%] overflow-x-hidden ${sarabun.className} p-3 mx-auto text-gray-700 w-full md:pr-3 md:pt-4 md:border-t`}
      ref={contentRef}
    >
      {processedContent}
    </div>
  );
}
