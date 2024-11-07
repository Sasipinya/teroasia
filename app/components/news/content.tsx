
import parse from 'html-react-parser';
import { sarabun } from '@/app/fonts';
function ContentNews({ data }: { data?: any }) {
    return (

        <>
            <div className={`${sarabun.className} text-gray-700 w-full pr-3 2xl:text-lg pt-4  border-t`} >
                {parse(data.news_content)}
            </div>
        </>)
}
export default ContentNews