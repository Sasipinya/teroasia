'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleTranslate() {
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const init = () => {
      // ลบ scrollbar ที่ Google Translate สร้างมา
      document.body.style.top = '0';
      document.body.style.position = 'static';
      
      // เช็คว่า Google Translate iframe แสดงผลหรือไม่
      const iframe = document.querySelector('iframe[id*="container"].skiptranslate') as HTMLElement;
      
      if (iframe) {
        const iframeStyle = window.getComputedStyle(iframe);
        const isVisible = iframeStyle.display !== 'none' && iframeStyle.visibility !== 'hidden';
        
        if (isVisible) {
          document.body.classList.add('google-translate-visible');
        } else {
          document.body.classList.remove('google-translate-visible');
        }
      }
    };

    // รันทุก 200ms แค่ 10 ครั้ง (2 วินาที)
    let count = 0;
    intervalId = setInterval(() => {
      init();
      count++;
      if (count >= 10) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      document.body.classList.remove('google-translate-visible');
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
        .goog-te-banner-frame { 
          display: none !important; 
        }
        
        body { 
          top: 0 !important; 
          position: static !important; 
        }
        
        html, body { 
          overflow-x: hidden !important; 
        }
       
        .goog-te-gadget > div, 
        .goog-te-gadget span, 
        .goog-logo-link { 
          display: flex !important; 
        }
        
        .goog-te-combo {
          display: inline-block !important;
          padding: 5px 10px !important;
          font-size: 14px !important;
          border: 1px solid #ccc !important;
          border-radius: 4px !important;
          background: white !important;
          cursor: pointer !important;
          height: 32px !important;
        }
        
        .goog-te-gadget-icon {
          display: none !important;
        }
        
        .VIpgJd-ZVi9od-xl07Ob-lTBxed {
          display: flex;
        }

        /* Google Translate iframe */
        iframe[id*="container"].skiptranslate {
          position: relative !important;
        }

        /* เมื่อ Google Translate แสดงผล ให้ iframe เป็น fixed */
        body.google-translate-visible iframe[id*="container"].skiptranslate {
          position: fixed !important;
          top: 0 !important;
        }

        /* Header sticky เลื่อนลงมา 37px เฉพาะเมื่อ Google Translate แสดงผล */
        body.google-translate-visible .header-area.homepage1.sticky {
          top: 37px !important;
        }

        /* ถ้าไม่แสดง ให้ header อยู่ที่ top: 0 */
        body:not(.google-translate-visible) .header-area.homepage1.sticky {
          top: 0 !important;
        }
      `}</style>
    </>
  );
}