

import { Metadata } from 'next'
import { headers } from 'next/headers';
import RenderVideo from '@/app/components/news/rendervideo';
import RenderVideoMobile from '@/app/components/news/mobile/rendervideo';
import InfoNews from '@/app/components/news/info';
import ContentNews from '@/app/components/news/content';
import ContentNewsMobile from '@/app/components/news/mobile/content';
import TagsNews from '@/app/components/news/tags';
import ShareNews from '@/app/components/news/share';
import RelateNews from '@/app/components/news/relate';
import TitleNews from '@/app/components/news/mobile/titlenews';
import Breadcrumb from '@/app/components/news/mobile/breadcrumb';
import Headtitle from '@/app/components/news/mobile/headtitle';
import { NumberFormat } from '@/lib/utils/kformat';
import AdsTop from '@/app/components/news/AdsTop';
import AdsLeftRight from '@/app/components/news/AdsLeftRight';
import MobileOnly from '@/app/components/utils/MobileCheck';
import { DesktopOnly } from '@/app/components/utils/DesktopCheck';
import Script from 'next/script'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://teroasia.com';
async function fetchNewsItem(id: string) {
    const headersList = headers();
    const xForwardedFor = (await headersList).get('x-forwarded-for');
    var ipAddress = null;
    if (xForwardedFor) {
        const ips = xForwardedFor.split(',');
        ipAddress = ips[0].trim();
    } else {
        const response_ip = await fetch('/api/get-ip');
        const data_ip = await response_ip.json();
        if (data_ip.ip) {
            ipAddress = data_ip.ip;
        }
    }
    console.log(ipAddress);

    var url = `https://backend.teroasia.com/apis2/index.php?a=detail&nid=${id}`;
    if (!ipAddress) {
        const geoResponse = await fetch(`https://get.geojs.io/v1/ip/geo.json?ip=${ipAddress}`);
        const geo = await geoResponse.json();
        const country = geo[0]?.country_code;
        url = `https://backend.teroasia.com/apis2/index.php?a=detail&nid=${id}&country=${country}`;
    }
    const response = await fetch(url);
    return response.json();
}
async function fetchNewsRelate(id: string) {
    const url = `https://backend.teroasia.com/apis2/index.php?a=relate&nid=${id}`
    const response = await fetch(url);
    return response.json();
}
const toISO8601UTC = (input: Date | number) => {
  const d = input instanceof Date ? input : (
    // ถ้าเป็น “วินาที” ให้คูณ 1000; ถ้าเป็น “มิลลิวินาที” ให้ส่งมาเป็น Date/millis
    String(input).length === 10 ? new Date(input * 1000) : new Date(input)
  );
  return d.toISOString(); // e.g. 2025-09-22T05:30:00.000Z
};
export async function generateMetadata({ params }: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {

    try {
        const news_id = (await params).id
        const { data } = await fetchNewsItem(news_id);
        const cleandesc = data.news_content?.replace(/<\/?[^>]+(>|$)/g, "").replace(/["']/g, "");
        const ogtitle = (data.seo_title ? data.seo_title : data.news_title);
        const ogdesc = data.seo_desc ? (data.seo_desc).substring(0, 160) : cleandesc?.substring(0, 160);
        let tags_article = '';
        if (data.tags) {
            tags_article = data.tags.map((rs: any, i: any) => {
                return (
                    rs.tag_name
                )
            })
        }
        var keywords = data.seo_keyword ? data.seo_keyword : data.tags_text;

        return {
            title: ogtitle,
            description: ogdesc,
            keywords: keywords,
            authors: [{ name: data.author }],
            publisher: "Tero Asia | Tero entertainment",
            openGraph: {
                title: ogtitle,
                description: ogdesc,
                type: 'article',
                publishedTime: data.news_date,
                authors: [data.post_by],
                images: [{
                    url: data.image_url,
                    width: 1200,
                    height: 630,
                    alt: data.title
                }]
            },
            twitter: {
                card: 'summary_large_image',
                title: ogtitle,
                description: ogdesc,
                images: [data.image_url],


            },
            other: {
                'fb:app_id': '1152976658386392',
                'fb:admins': '100000660497482,1032774606',

            }
        };
    } catch (error) {
        return {
            title: 'News Not Found',
        };
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const news_id = (await params).id
    const { data } = await fetchNewsItem(news_id)
    const data_relate = await fetchNewsRelate(news_id)
    const cleandesc = data.news_content?.replace(/<\/?[^>]+(>|$)/g, "").replace(/["']/g, "");
    const ogtitle = (data.seo_title ? data.seo_title : data.news_title);
    const ogdesc = data.seo_desc ? (data.seo_desc).substring(0, 160) : cleandesc?.substring(0, 160);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: ogtitle,
        description: ogdesc,
        image: [data.image_url],
        datePublished: toISO8601UTC(data.news_date),
        dateModified: toISO8601UTC(data.news_modify),
        author: [{
            '@type': 'Person',
            name: data.post_by,
        }],
        publisher: {
            '@type': 'Organization',
            name: 'Tero Asia | Tero entertainment',
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/images/logo_tero.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/news/${news_id}`
        },
    };
    return (
        <>

            {/* Desktop */}
            <DesktopOnly>
                <main className="hidden md:flex flex-col">
                    <Script
                        id="jsonld-event"
                        type="application/ld+json"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
                    />
                    <AdsTop />
                    <div className=' flex container mx-auto bg-white'>
                        {/* Ads Left News */}
                        <AdsLeftRight id_ads='div-gpt-ad-1676443015698-0' path_ads='/33368840/TA_Desktop_News_SideSkyscraper_Left' base='left-0' lr="Left" />
                        <div className='z-[2] relative flex bg-white px-2'>
                            <div className='flex-1 flex'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <RenderVideo data={data} />
                                    </div>
                                    <div className='flex mt-3'>
                                        <div className='w-4/5'>
                                            <InfoNews data={data} />
                                            <ContentNews data={data} />
                                            <TagsNews data={data} />
                                        </div>
                                        <div className='w-1/5'>
                                            <ShareNews data={data} />
                                            <RelateNews data_relate={data_relate} />
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* Ads Right News */}
                        <AdsLeftRight id_ads='div-gpt-ad-1676443074339-0' path_ads='/33368840/TA_Desktop_News_SideSkyscraper_Right' base='right-0' lr="Right" />

                    </div>
                    <div id="TA_Desktop_Anchor_detail"></div>
                </main >
            </DesktopOnly>

            {/* Mobile */}
            <MobileOnly>
                <main className="flex flex-col md:hidden">
                    <Script
                        id="jsonld-event"
                        type="application/ld+json"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
                    />
                    <TitleNews data={data} />
                    <RenderVideoMobile data={data} />
                    <section className="inner-blog b-details-p ">
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-xl-12 col-lg-12 d-flex align-items-center p-3"
                                    style={{ background: "#eeee" }}
                                >
                                    <Breadcrumb
                                        title_news={data.news_title}
                                        logo_program={data.program_mini_icon}
                                        program_name={data.program_name}
                                    />
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="blog-detailss-wrap">
                                        <div className="details__content pb-10">

                                            <Headtitle countnews={NumberFormat(data?.news_count)} datenews={data?.news_strdate} />

                                            {/* <ContentMobile data={result?.news_content} /> */}
                                            <ContentNewsMobile data={data} />

                                            <div className="row">
                                                <div className="col-xl-12 col-md-12">
                                                    {/* <TagsMobile data={result?.tags} /> */}
                                                    <TagsNews data={data} />
                                                    <div className="Ads-inread">
                                                        <div id="grf_teroasiacom"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="share-area">
                                                <ShareNews data={data} />
                                            </div>
                                        </div>

                                        {/* <div id="div-gpt-ad-1676444017967-0">
                                            ADS
                                        </div> */}

                                        {/* <RelateMobile data={result_relate} /> */}
                                        <>
                                            <div className="related__post">


                                                <RelateNews data_relate={data_relate} />


                                            </div>
                                        </>
                                        {/* <div
                                        className="gliaplayer-container"
                                        data-slot="teroasia_desktop"
                                    ></div>
                                    <script
                                        src="https://player.gliacloud.com/player/teroasia_desktop"
                                        data-media-query="(min-width: 601px)"
                                        async
                                    ></script>

                                    <div
                                        className="gliaplayer-container"
                                        data-slot="teroasia_mobile"
                                    ></div>
                                    <script
                                        src="https://player.gliacloud.com/player/teroasia_mobile"
                                        data-media-query="(max-width: 600px)"
                                        async
                                    ></script> */}

                                        {/* <div id="div-gpt-ad-1671767027219-0"> */}
                                        {/* ADS  <GPT adUnitPath="/33368840/HVR_1x1" slotSize={[[1, 1]]} /> */}
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </MobileOnly>

        </>

    );
}
