

import { Metadata } from 'next'
import { headers } from 'next/headers';
import IVideoSmartScripts from '@/app/components/utils/ivsscript';
import RenderVideo from '@/app/components/news/rendervideo';

import InfoNews from '@/app/components/news/info';
import ContentNews from '@/app/components/news/content';
import TagsNews from '@/app/components/news/tags';
import ShareNews from '@/app/components/news/share';
import RelateNews from '@/app/components/news/relate';

async function fetchNewsItem(id: string) {
    // Your data fetching logic
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
            <main className="flex flex-col">
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
                                        <ShareNews data={data}/>
                                        <RelateNews data_relate={data_relate}/>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </main >

        </>

    );
}
