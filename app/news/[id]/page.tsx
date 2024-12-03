

import { Metadata } from 'next'
import { headers } from 'next/headers';
import IVideoSmartScripts from '@/app/components/utils/ivsscript';
import RenderVideo from '@/app/components/news/rendervideo';

import InfoNews from '@/app/components/news/info';
import ContentNews from '@/app/components/news/content';
import TagsNews from '@/app/components/news/tags';
import ShareNews from '@/app/components/news/share';
import RelateNews from '@/app/components/news/relate';
import TitleNews from '@/app/components/news/mobile/titlenews';
import Breadcrumb from '@/app/components/news/mobile/breadcrumb';
import Headtitle from '@/app/components/news/mobile/headtitle';
import { NumberFormat } from '@/app/components/utils/kformat';

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
export async function generateMetadata({ params }: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {

    try {
        const news_id = (await params).id
        const { data } = await fetchNewsItem(news_id);
        return {
            title: data.news_title,
            description: data.news_title,
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
    return (
        <>
            <IVideoSmartScripts />
            {/* Desktop */}
            <main className="hidden md:flex flex-col">
                <div className='container mx-auto '>
                    <div className='flex'>
                        <div className='flex-1 flex'>
                            <div className='flex flex-col'>
                                <div className='flex'>
                                    <RenderVideo data={data} />
                                </div>
                                <div className='flex'>
                                    <div className='w-3/5'>
                                        <InfoNews data={data} />
                                        <ContentNews data={data} />
                                        <TagsNews data={data} />
                                    </div>
                                    <div className='w-2/5'>
                                        <ShareNews data={data} />
                                        <RelateNews data_relate={data_relate} />
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </main >
            {/* Mobile */}
            <main className="flex flex-col md:hidden">
                <TitleNews data={data} />
                <RenderVideo data={data} />
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
                                        <ContentNews data={data} />

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

                                    <div id="div-gpt-ad-1676444017967-0">
                                       ADS
                                    </div>

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

                                    <div id="div-gpt-ad-1671767027219-0">
                                      ADS  {/* <GPT adUnitPath="/33368840/HVR_1x1" slotSize={[[1, 1]]} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>

    );
}
