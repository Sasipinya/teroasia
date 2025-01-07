
import AdUnit from '../AdUnit';



interface AdsConfig {
    id_ads_bg: string;
    path_ads_bg: string;

}

const AdsTop =() => {



    const getAdsConfig = (): AdsConfig => {
        const defaultConfig: AdsConfig = {
            id_ads_bg: 'div-gpt-ad-1676442955168-0',
            path_ads_bg: "/33368840/TA_Desktop_News_Billboard",

        };
        return defaultConfig;
    };

    const adsConfig = getAdsConfig();

    return (
        <>
            <div
                className={`cursor-pointer bg-none`}
            >
                {adsConfig.path_ads_bg && (
                    <div className="container mx-auto">
                        <div className="mx-2">

                            <div
                                id={adsConfig.id_ads_bg}
                                className="min-w-[970px] min-h-[250px]"
                            >
                                <AdUnit
                                    id={adsConfig.id_ads_bg}
                                    adUnitPath={adsConfig.path_ads_bg}
                                    size={[[970, 250], [1120, 300]]}
                                />
                            </div>

                        </div>
                    </div>
                )}

            </div>


        </>
    );
};

export default AdsTop;