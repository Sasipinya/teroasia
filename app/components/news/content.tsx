import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
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

export default function Content({ data }: ContentNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const MainAd = () => (
    <div className="flex justify-center items-center w-full my-4">
      <div id="grf_teroasiacom_2" className="relative">
        <div id="div-gpt-ad-1677147138448-0">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() {
                  googletag.display('div-gpt-ad-1677147138448-0');
                });
              `
            }}
          />
        </div>
      </div>
    </div>
  );

  const InReadAd1 = () => (
    <>
      <div className="text-center hidden md:block">
        <div
          id="div-gpt-ad-1676443237190-0"
          className="min-w-[300px] min-h-[250px]"
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() {
                  googletag.display('div-gpt-ad-1676443237190-0');
                });
              `
            }}
          />
        </div>
      </div>
      <div className="text-center md:hidden">
        <div
          id="div-gpt-ad-1676443625146-0"
          className="min-w-[300px] min-h-[50px]"
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() {
                  googletag.display('div-gpt-ad-1676443625146-0');
                });
              `
            }}
          />
        </div>
      </div>
    </>
  );

  const InReadAd2 = () => (
    <>
      <div className="text-center hidden md:block">
        <div
          id="div-gpt-ad-1676443285791-0"
          className="min-w-[300px] min-h-[250px]"
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() {
                  googletag.display('div-gpt-ad-1676443285791-0');
                });
              `
            }}
          />
        </div>
      </div>
      <div className="text-center md:hidden">
        <div
          id="div-gpt-ad-1676443673637-0"
          className="min-w-[300px] min-h-[50px]"
        >
          <script
            dangerouslySetInnerHTML={{
              __html: `
                googletag.cmd.push(function() {
                  googletag.display('div-gpt-ad-1676443673637-0');
                });
              `
            }}
          />
        </div>
      </div>
    </>
  );

  // แทรก Ads ตามตำแหน่งที่กำหนด
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

    // แทรก ads ตามตำแหน่ง
    if (positions.mainAd) {
      elements[positions.mainAd].insertAdjacentHTML('beforebegin', '<div data-ad="main"></div>');
    }
    if (positions.inRead1) {
      elements[positions.inRead1].insertAdjacentHTML('beforebegin', '<div data-ad="inread1"></div>');
    }
    if (positions.inRead2) {
      elements[positions.inRead2].insertAdjacentHTML('beforebegin', '<div data-ad="inread2"></div>');
    }

    return tempDiv.innerHTML;
  };

  const processedContent = parse(insertAds(data?.news_content), {
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

  if (!data) return <div>loading...</div>;

  return (
    <div className="relative w-full max-w-[100%] overflow-x-hidden ${sarabun.className} p-3  mx-auto text-gray-700 w-full md:pr-3  md:pt-4  md:border-t" ref={contentRef}>
      {processedContent}
    </div>
  );
}