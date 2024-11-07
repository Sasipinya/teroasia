'use client';
import React, { useEffect } from "react";

interface Props {
    data: {
        news_title: string;
        ivs_key: string;
        ivs_config: {
            api_key: string;
            service_provider_key: string;
            vast_ads: string;
        };
    };
}
declare global {
    interface Window {
      dataLayer?: Array<any>;
    }
  }
const IVSPlayer: React.FC<Props> = ({ data }) => {
    useEffect(() => {
        const handlePlaylistRendered = (event: Event) => {
            // @ts-ignore
            IVS.config.credentials.key = "a1289803218d3ad4b4172fad7f9fec38";
            let playlistItems = document.querySelectorAll(".ivs-overlay-playlistitem");

            playlistItems.forEach((item) => {
                item.setAttribute("data-item-clickable", "0");
                item.addEventListener("click", (event) => {
                    var video_id = item.getAttribute("data-video-id");

                    let url =
                        "https://backend.teroasia.com/apis2/index.php?a=get_news_from_ivs_key&ivs_key=" +
                        video_id;
                    fetch(url)
                        .then((res) => res.json())
                        .then((response) => {
                            var news = response.data.news;
                            if (news != "" && news != "undefined") {
                                var news_id = news.news_id;
                                let url = "/news/" + news_id;
                                let win = window.open(url, "_blank");
                                if (win) {
                                    win.focus();
                                }
                            }
                            console.log("Checkout this JSON! ", response);
                        })
                        .catch((err) => {
                            throw err;
                        });
                });
            });
        };

        const handleDataReady = (event: Event) => {
            console.log("Play");

            //ใส่ gtag
            if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    // @ts-ignore
                    dataLayer.push(arguments);
                }
                // @ts-ignore
                gtag("event", "video_play", {
                    video_title: data.news_title,
                    video_news_id: data.ivs_key,
                });
            }
        };

        window.addEventListener("ivs.playlist.rendered", handlePlaylistRendered);
        window.addEventListener("ivs.data.ready", handleDataReady);

        let c = '<ivs-player ';
        c +=
            'id="ivsplayer01" data-ivs-floating="1" data-ivs-autoplay="1" data-ivs-carousel="bottom" data-ivs-wid="8384fa12-5268"  data-ivs-carousel="none" ';
        c += 'data-ivs-key="' + data.ivs_config.api_key + '" ';
        c +=
            'data-ivs-spid="' + data.ivs_config.service_provider_key + '" ';
        c += 'data-ivs-vid="' + data.ivs_key + '"  ';
        c += 'data-ivs-ads="' + data.ivs_config.vast_ads + '" />';
        const container = document.getElementById("ivsplayer01-container");
        if (container) {
            container.innerHTML = c;
        }

        return () => {
            window.removeEventListener("ivs.playlist.rendered", handlePlaylistRendered);
            window.removeEventListener("ivs.data.ready", handleDataReady);
        };
    }, [data]); // Re-run effect if 'data' prop changes

    return (
        <>
            <div id="ivsplayer01-container"></div>
        </>
    );
};

export default IVSPlayer;