import { Calendar, ChevronRight, Eye } from 'lucide-react';
import { NumberFormat } from '@/app/components/utils/kformat';
import Link from 'next/link'
import { OptimizedImage } from '../utils/optimizesimage';
function InfoNews({ data }: { data?: any }) {
    return (

        <>
            
            <div className='text-gray-700 text-lg  flex items-center '> <Link href={`/`}>หน้าหลัก</Link> <ChevronRight className='w-8 h-8' /><OptimizedImage className={` border  rounded-full w-50 h-50 mr-2 shadow-lg`} src={data.program_mini_icon} width={50} height={50}  alt={data.program_name} priority={false} /><Link href={`/program/${data.program_slug}`} className='flex '>{data.program_name}</Link> </div>
            <h1 className='text-gray-700 text-3xl font-bold mb-2 flex'>{data.news_title}</h1>
            <div className='text-gray-700 text-lg  flex align-items-center mb-3'>
                <Eye className="w-6 h-6 text-gray-700 mr-1" />{NumberFormat(data.news_count)}
                <Calendar className='w-6 h-6 text-gray-700 mr-1 ml-3' />{data.news_strdate}
            </div>
            
               
        </>)
}
export default InfoNews