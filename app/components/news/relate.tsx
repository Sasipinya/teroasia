import Link from 'next/link'
import { Calendar, Eye } from 'lucide-react';
import { NumberFormat } from '@/app/components/utils/kformat';
import { OptimizedImage } from '@/app/components/utils/optimizesimage';
function RelateNews({ data_relate }: { data_relate?: any }) {
    return (

        <>
            <div className='mt-10'>
                <p className='text-gray-700 text-2xl font-bold mb-3'>ข่าวที่เกี่ยวข้อง</p>

                {data_relate.data && data_relate.data.length > 0 && data_relate.data.slice(0, 5).map((item: any, index: number) => (
                    <div className="flex rounded-md shadow-md border mb-2" key={index}>
                        <OptimizedImage
                            src={item.image_url}
                            alt={item.news_title}
                            className="h-30 w-48 object-cover rounded-l-md"
                            width={500}
                            height={300}
                            style={{ height: 'auto' }}
                            
                        />
                        <div className="my-4 p-3 flex flex-col justify-between">
                            <Link href={`/program/${item.program_slug}`} className='2xl:text-sm text-xs  text-gray-600'>{item.program_name}</Link>

                            <h3 ><Link href={`/news/${item.news_id}`} className='text-lg  text-gray-600 hover:text-red-700 line-clamp-2' >{item.news_title}</Link></h3>
                            <div>
                                <div className=" py-4 pb-2 flex">
                                    <div className='px-1 py-1 mr-1 mb-2 flex align-items-center'>
                                        <Calendar className="w-[16px] h-[16px]  text-gray-600 mr-1" />
                                        <span className=" 2xl:text-sm text-xs  text-gray-600">
                                            {item.news_strdate} </span>
                                    </div>
                                    <div className='px-1 py-1  mb-2 flex align-items-center'>
                                        <Eye className="w-[16px] h-[16px] text-gray-600 mr-1" />
                                        <span className=" 2xl:text-sm text-xs  text-gray-600">
                                            {NumberFormat(item.news_count)} </span>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                ))
                }
            </div>
        </>)
}
export default RelateNews