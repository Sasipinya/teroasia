


import { Metadata } from 'next'
import ProgramsListNews from '@/app/components/program/programslistnews';

async function fetchProgramItem(slug: string) {
    // Your data fetching logic

    const url =
        `https://backend.teroasia.com/apis2/index_test.php?a=tvprogram_info&permalink=${slug}`;
    const response = await fetch(url);
    return response.json();
}



export async function generateMetadata() {

    try {
        const { data } = await fetchProgramItem('newsupdate');
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

export default async function Page() {

    const { data } = await fetchProgramItem('newsupdate');

    return (
        <>

            <main className="flex flex-col">
            <h1 className="text-gray-700 text-3xl font-medium mb-2">ข่าวอัปเดต</h1>
                <div className='container mx-auto'>
                    <ProgramsListNews data={data} />
                </div>


            </main >
           

        </>

    );
}
