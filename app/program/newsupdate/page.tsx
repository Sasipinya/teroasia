


import { Metadata } from 'next'
import ProgramsListNewsUpdate from '@/app/components/program/programslistnewsupdate';

async function fetchProgramItem(slug: string) {
    

    const url =
        `https://backend.teroasia.com/apis2/index_test.php?a=tvprogram_info&permalink=${slug}`;
    const response = await fetch(url);
    return response.json();
}



export async function generateMetadata(): Promise<Metadata> {

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
           
                <div className='container mx-auto'>
                <h1 className="text-gray-700 text-3xl font-medium my-2">ข่าวอัปเดต</h1>
                    <ProgramsListNewsUpdate data={data} />
                </div>
            </main >
           

        </>

    );
}
