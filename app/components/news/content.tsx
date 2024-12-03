
import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
function ContentNews({ data }: { data?: any }) {
    return (

        <>
            <div className={`${sarabun.className} p-3  mx-auto text-gray-700 w-full md:pr-3 2xl:text-lg md:pt-4  md:border-t`} >
                {parse(data.news_content)}
            </div>
        </>)
}
export default ContentNews