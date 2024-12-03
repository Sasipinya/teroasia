import Link from 'next/link'
function TagsNews({ data }: { data?: any }) {
    return (

        <>
            <div className='block m-3 md:mt-3'>
                {
                    data.tags && data.tags.length > 0 && data.tags.map((tag: any, index: number) => (
                        <div className='  inline-block mr-2 mb-3' key={index}><Link href={`/tag/${tag.tag_id}/${tag.tag_name}`} className='border-2 border-gray-300 md:border-0 rounded-xl md:rounded-[30px] text-sm 2xl:text-lg md:text-md md:bg-gray-200 px-4  py-1 text-gray-700 hover:text-red-700 md:font-bold' >{tag.tag_name}</Link></div>
                    ))
                }
            </div>
        </>)
}
export default TagsNews