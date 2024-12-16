
import IVSPlayer from '@/lib/utils/ivsplayer'
import Showheroes from "@/lib/utils/showheroes";
import Image from 'next/image';
function RenderVideo({ data }: { data: any }) {
    const renderVideo = (result: any) => {
        const type_id = result?.news_type_id;
        switch (type_id) {
            case '1':
                if (result?.showheroes_signature) {
                    return (
                        <Showheroes showheroes_signature={result?.showheroes_signature} />
                    );
                }
                return (<>{result?.ivs_key ? <IVSPlayer data={result} /> : (<Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />)}</>);
            case '2':
                return (<Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />);
            case '3'://externallink
                return (<Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />);
            case '4'://youtube
                return (<>{result?.video_external_link != null ? <iframe src={result?.video_external_link} frameBorder='0' width='640' height='360' scrolling='no'></iframe> : <Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />}</>);
            case '5'://facebook
                return (<>{result?.video_external_link != null ? <iframe src={result?.video_external_link} frameBorder='0' width='640' height='360' scrolling='no'></iframe> : <Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />}</>);
            case '6'://bugaboo
                return (<>{result?.status_bugaboo == 'Y' && result?.video_external_link != null ? <iframe src={result?.video_external_link} frameBorder='0' width='640' height='360' scrolling='no'></iframe> : <Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />}</>);
            case '7'://ch7
                if (result?.showheroes_signature) {
                    return (
                        <Showheroes showheroes_signature={result?.showheroes_signature} />
                    );
                }
                return (<>{result?.ivs_key ? <IVSPlayer data={result} /> : (<Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />)}</>);
            default:
                return (<Image width={600} height={400} src={result?.image_url} loading="lazy" alt={result?.news_title} />);
        }
    }
    return (
        <>{renderVideo(data)}</>
    )
}
export default RenderVideo