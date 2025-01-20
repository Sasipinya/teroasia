'use client';
import React, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
import AdUnit from '../../utils/AdUnit';

interface ContentNewsProps {
   data?: {
       news_content: string
   }
}

interface AdsPosition {
   mainAd: number;
   inRead1?: number;
   inRead2?: number;
}

export default function ContentMobile({ data }: ContentNewsProps) {
   const contentRef = useRef<HTMLDivElement>(null);
   const [processedContent, setProcessedContent] = useState<any>(null);

   const MainAd = () => (
       <div className="flex justify-center items-center w-full my-4">
           <AdUnit adUnitPath='/33368840/TA_Mobile_News_InArticle_P2' id='div-gpt-ad-1676443625146-0' size={[[1, 1], [300, 250], [320, 50], [336, 280]]} Mxauto='mx-auto' />
       </div>
   );

   const InReadAd1 = () => (
       <>
           <div className="text-center hidden md:block">
               <AdUnit adUnitPath='/33368840/TA_Mobile_News_InArticle_P4' id='div-gpt-ad-1676443673637-0' size={[[1, 1], [300, 250], [320, 50], [336, 280]]} Mxauto='mx-auto' />
           </div>
       </>
   );

   const InReadAd2 = () => (
       <></>
   );

   useEffect(() => {
       if (data?.news_content) {
           const insertAds = (content: string) => {
               const tempDiv = document.createElement('div');
               tempDiv.innerHTML = content;

               const elements = Array.from(tempDiv.querySelectorAll('div, p'))
                   .filter(el => !el.innerHTML.includes('&nbsp;'));

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

               return tempDiv.innerHTML;
           };

           const parsed = parse(insertAds(data.news_content), {
               replace: (domNode: any) => {
                   if (domNode.attribs && domNode.attribs['data-ad']) {
                       switch (domNode.attribs['data-ad']) {
                           case 'main':
                               return <MainAd />;
                           case 'inread1':
                               return <InReadAd1 />;
                           case 'inread2':
                               return <InReadAd2 />;
                           default:
                               return domNode;
                       }
                   }
                   return domNode;
               }
           });
           setProcessedContent(parsed);
       }
   }, [data?.news_content]);

   if (!data) return <div>loading...</div>;
   if (!processedContent) return <div>Processing content...</div>;

   return (
       <div className={`w-full max-w-[100%] overflow-x-hidden ${sarabun.className} p-3  mx-auto text-gray-700 w-full md:pr-3  md:pt-4  md:border-t`} ref={contentRef}>
           {processedContent}
       </div>
   );
}