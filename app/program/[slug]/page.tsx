


import { Metadata } from 'next'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import { OptimizedImage } from '@/app/components/utils/optimizesimage';
import ShareProgram from '@/app/components/program/share';
import SlideNews from '@/app/components/program/slidenews';
import parse from 'html-react-parser';
import ProgramsListNews from '@/app/components/program/programslistnews';

async function fetchProgramItem(slug: string) {
    // Your data fetching logic

    const url =
        `https://backend.teroasia.com/apis2/index_test.php?a=tvprogram_info&permalink=${slug}`;
    const response = await fetch(url);
    return response.json();
}



export async function generateMetadata({ params }: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {

    try {
        const slug = (await params).slug
        const { data } = await fetchProgramItem(slug);
        return {
            title: data.info.program_name,
            description: data.info.program_desc,
        };
    } catch (error) {
        return {
            title: 'Program Not Found',
        };
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const slug = (await params).slug
    const { data } = await fetchProgramItem(slug);



    return (
        <>

            <main className="flex flex-col">
                <div className='container mx-auto'>
                    <div className='flex align-items-center'>
                        <div><OptimizedImage className={` border  rounded-xl w-[120px] h-[120px]  mr-2 shadow-lg`} src={data.info.program_mini_icon} width={150} height={150} alt={data.info.program_name}  /></div>
                        <div className='flex flex-col my-auto'>
                            <div className='flex'>
                                <div className='text-gray-700 text-lg  flex align-item-center'> <Link href={`/`}>หน้าหลัก</Link> <ChevronRight className='w-8 h-8' /><Link href={`/program/${data.info.program_slug}`} className='flex font-bold '>{data.info.program_name}</Link> </div>
                            </div>
                            <div className='flex'>
                                <ShareProgram data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <OptimizedImage className={`    w-full h-full  shadow-lg`} src={data.info.tvp_img_main} width={700} height={550} alt={data.info.program_name}  />
                </div>
                <div className='container mx-auto text-center my-10'>
                    <h1 className='text-gray-700 font-bold text-3xl'>{data.info.program_name}</h1>
                    <h2 className='text-gray-600 text-xl'>{data.info.program_desc}</h2>
                </div>
                <div className='container mx-auto'>
                    <SlideNews data={data.news_feature.items} />
                </div>
                <div className='container mx-auto text-gray-700 text-3xl'>
                    {parse(data.info.tvp_profile_html)}
                </div>
                <div className='container mx-auto'>
                    <ProgramsListNews data={data} />
                </div>


            </main >

        </>

    );
}
