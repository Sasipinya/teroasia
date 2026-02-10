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

    // เช็คว่า Google Translate iframe แสดงผลหรือไม่
    const checkTranslateVisibility = () => {
      const iframe = document.querySelector('iframe[id*="container"].skiptranslate');
      const skipTranslateDiv = document.querySelector('div.skiptranslate');
      
      if (iframe && skipTranslateDiv) {
        const iframeStyle = window.getComputedStyle(iframe);
        const divStyle = window.getComputedStyle(skipTranslateDiv);
        
        // เช็คว่า iframe แสดงผลจริงๆ หรือไม่
        const isVisible = 
          iframeStyle.display !== 'none' && 
          iframeStyle.visibility !== 'hidden' &&
          divStyle.display !== 'none' &&
          divStyle.visibility !== 'hidden';
        
        // เพิ่ม/ลบ class ตามสถานะ
        if (isVisible) {
          document.body.classList.add('google-translate-visible');
        } else {
          document.body.classList.remove('google-translate-visible');
        }
      }
    };

    // เช็คทุก 100ms ในช่วง 3 วินาทีแรก
    const interval = setInterval(() => {
      removeGoogleTranslateScrollbar();
      checkTranslateVisibility();
    }, 100);
    
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    // Observer เพื่อดัก style changes
    const observer = new MutationObserver(checkTranslateVisibility);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      subtree: true,
      childList: true
    });

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      observer.disconnect();
      document.body.classList.remove('google-translate-visible');
      
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
          pointer-events: auto !important;
        }
        
        .goog-te-gadget-icon {
          display: none !important;
        }
        
        .VIpgJd-ZVi9od-xl07Ob-lTBxed {
          display: flex;
        }

        /* Google Translate iframe - ให้สามารถคลิกได้ */
        iframe[id*="container"].skiptranslate {
          position: relative !important;
          pointer-events: auto !important;
          z-index: 9999 !important;
        }

        /* div.skiptranslate ต้องให้คลิกได้ด้วย */
        div.skiptranslate {
          pointer-events: auto !important;
          z-index: 9999 !important;
        }

        /* เมื่อ header sticky ให้ iframe เป็น fixed */
        body.google-translate-visible iframe[id*="container"].skiptranslate {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          pointer-events: auto !important;
          z-index: 9999 !important;
        }

        /* Header sticky เลื่อนลงมา 37px - เฉพาะเมื่อ Google Translate แสดงผล */
        body.google-translate-visible .header-area.homepage1.sticky {
          top: 37px !important;
          z-index: 9998 !important;
        }

        /* ถ้า iframe ถูกซ่อน ให้ header กลับมาที่ top: 0 */
        body:not(.google-translate-visible) .header-area.homepage1.sticky {
          top: 0 !important;
        }

        /* ทำให้ dropdown สามารถคลิกได้ */
        #google_translate_element,
        #google_translate_element * {
          pointer-events: auto !important;
        }

        /* Dropdown menu ของ Google Translate */
        .goog-te-menu-value,
        .goog-te-menu-value span {
          pointer-events: auto !important;
        }
      `}</style>
    </>
  );
}