'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleTranslate() {
  
useEffect(() => {
  const checkTranslateVisibility = () => {
    document.body.style.top = '0';
    document.body.style.position = 'static';
    
    // เช็ค div.skiptranslate ที่เป็น direct child ของ body
    const skipTranslateDiv = document.querySelector('body > div.skiptranslate') as HTMLElement;
    
    if (skipTranslateDiv) {
      const divDisplay = window.getComputedStyle(skipTranslateDiv).display;
      
      if (divDisplay !== 'none') {
        document.body.classList.add('google-translate-visible');
      } else {
        document.body.classList.remove('google-translate-visible');
      }
    } else {
      document.body.classList.remove('google-translate-visible');
    }
  };

  // เช็คทันทีเมื่อ component mount
  checkTranslateVisibility();

  // เช็คเมื่อมีการคลิก
  const handleClick = () => {
    checkTranslateVisibility();
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
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
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; position: static !important; }
        
        .goog-te-combo {
          padding: 5px 10px !important;
          font-size: 14px !important;
          border: 1px solid #ccc !important;
          border-radius: 4px !important;
          height: 32px !important;
        }
        
        .goog-te-gadget-icon { display: none !important; }

        .VIpgJd-ZVi9od-xl07Ob-lTBxed{
         display: flex !important;
        }

        iframe[id*="container"].skiptranslate {
          position: relative !important;
        }

        body.google-translate-visible iframe[id*="container"].skiptranslate {
          position: fixed !important;
          top: 0 !important;
        }

        body.google-translate-visible .header-area.homepage1.sticky {
          top: 37px !important;
        }
      `}</style>
    </>
  );
}