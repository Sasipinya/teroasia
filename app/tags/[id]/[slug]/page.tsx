


import { Metadata } from 'next'
import TagsListNews from '@/app/components/tags/tagslistnews';
async function getTagsByLimit(tag_id: string, pageLimit: number, offset: number) {
    const url = "https://backend.teroasia.com/apis2/index_test.php?a=get_tag&tag_id=" + tag_id + "&limit=" + pageLimit + "&o=" + offset
    const response = await fetch(url);
    return response.json();
}


export async function generateMetadata({ params }: {
    params: Promise<{ id: string, slug: string }>
}): Promise<Metadata> {
    try {
        const id = (await params).id
        const { data } = await getTagsByLimit(id, 1, 0);
        return {
            title: data.tag_info.tag_name,
            description: data.tag_info.tag_name,
        };
    } catch (error) {
        return {
            title: 'Tags Not Found',
        };
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string, slug: string }>
}) {

    const id = (await params).id
    const slug = (await params).slug
    const { data } = await getTagsByLimit(id, 1, 0);




    return (
        <>

            <main className="flex flex-col">
                <div className='container mx-auto px-4 md:p-0'>
                    <div className='flex'>
                        <h1 className='text-2xl  text-gray-700  md:text-3xl  flex align-item-center'>แท็ก :  <span className='ml-3 text-red-600'>{data.tag_info.tag_name}</span> </h1>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <TagsListNews data={data} />
                </div>
            </main >


        </>

    );
}
