import SearchListNews from "@/app/components/search/searchlistnews";
import { Metadata } from "next";


export async function generateMetadata({ params }: {
    params: Promise<{ keyword: string }>
}): Promise<Metadata> {
    try {
        const keyword = decodeURIComponent((await params).keyword)
        return {
            title: keyword,
            description: keyword
        };
    } catch (error) {
        return {
            title: 'Search Not Found',
        };
    }
}
export default async function Page({
    params,
}: {
    params: Promise<{ keyword: string }>
}) {

    const keyword = decodeURIComponent((await params).keyword)
  

    return (
        <>

            <main className="flex flex-col">
                <div className='container mx-auto p-4'>
                    <div className='flex'>
                        <h1 className='text-2xl  text-gray-700  md:text-3xl  flex align-item-center'>ผลการค้นหา :  <span className='ml-3 text-red-600'>{keyword}</span> </h1>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <SearchListNews keyword={keyword}/>
                </div>
                
            </main >


        </>

    );
}