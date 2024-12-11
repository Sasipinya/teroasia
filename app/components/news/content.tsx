import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
interface ContentNewsProps {
    data?: {
        news_content: string
    }
}
function ContentNews({ data }: ContentNewsProps) {
    return (
        <>
            <div className={`w-full max-w-[100%] overflow-x-hidden ${sarabun.className} p-3  mx-auto text-gray-700 w-full md:pr-3 2xl:text-lg md:pt-4  md:border-t`} >
                {parse(data?.news_content || '')}
            </div>
        </>)
}
export default ContentNews