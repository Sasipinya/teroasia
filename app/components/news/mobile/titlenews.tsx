
interface TitleNewsProps {
    data: {
        news_title: string;
    }
}
function TitleNews({ data }: TitleNewsProps) {
    return (

        <>
            <div className='container mx-auto p-2'>
                    <h1 className='text-gray-700 text-2xl font-medium mb-2 flex'>{data?.news_title}</h1>
                </div> 


        </>)
}


export default TitleNews