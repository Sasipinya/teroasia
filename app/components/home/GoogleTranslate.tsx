'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // ลบ scrollbar ที่ Google Translate สร้างมา
    const removeGoogleTranslateScrollbar = () => {
      document.body.style.top = '0';
      document.body.style.position = 'static';
      document.documentElement.style.overflow = 'visible';
      document.body.style.overflow = 'visible';
    };

    // เช็คทุก 100ms ในช่วง 2 วินาทีแรก
    const interval = setInterval(removeGoogleTranslateScrollbar, 100);
    const timeout = setTimeout(() => clearInterval(interval), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '6px' 
      }}>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png"
          alt="Google Translate"
          width={20}
          height={20}
        />
        <div id="google_translate_element"></div>
      </div>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'th',
                includedLanguages: 'zh-CN,en,fr,ja,es',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              },
              'google_translate_element'
            );
          }
        `}
      </Script>

      <style jsx global>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; position: static !important; }
        html, body { overflow-x: hidden !important; }
       
        .goog-te-gadget > div, .goog-te-gadget span, .goog-logo-link { display: flex !important; }
        
        .goog-te-combo {
          display: inline-block !important;
          padding: 5px 10px !important;
          font-size: 14px !important;
          border: 1px solid #ccc !important;
          border-radius: 4px !important;
          background: white !important;
          cursor: pointer !important;
          height: 32px !important;}
        .goog-te-gadget-icon{
        display:none;!important;}
        .VIpgJd-ZVi9od-xl07Ob-lTBxed{
        display:flex;
        }

      `}</style>
    </>
  );
}