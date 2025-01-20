'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
function ShareNews({ data }: { data?: any }) {
    const [stateCopy, setStateCopy] = useState(false);
    const shareFacebookLike_newtab = (news_id: string | number, url: string) => {
        const BASE_URL = "http://localhost:3000/"; // Replace with your actual base URL

        let url2 = news_id
            ? `${BASE_URL}news/${news_id}?utm_source=Facebook&utm_medium=social&utm_content=${news_id}&utm_campaign=sharing`
            : url;

        window.open(
            `https://www.facebook.com/sharer/sharer.php?app_id=1152976658386392&u=${encodeURIComponent(url2)}`,
            '_blank'
        );
    };
    const shareTwitter = (news_id: string | number, text: string, url: string) => {
        const BASE_URL = "http://localhost:3000/";
        const url2 = news_id
            ? `${BASE_URL}news/${news_id}?utm_source=Twitter&utm_medium=social&utm_content=${news_id}&utm_campaign=sharing`
            : url;

        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url2)}`,
            '_blank' // Open in a new tab/window
        );
    };

    const shareLine = (news_id: string | number, text: string, url: string) => {
        const BASE_URL = "http://localhost:3000/";
        const url2 = news_id
            ? `${BASE_URL}news/${news_id}?utm_source=Line&utm_medium=social&utm_content=${news_id}&utm_campaign=sharing`
            : url;

        window.open(
            `https://line.me/R/msg/text/?${encodeURIComponent(text)}%0D%0A${encodeURIComponent(url2)}`,
            '_blank' // Open in a new tab/window
        );
    };
    return (

         <div className='bg-blue-100 pb-2 md:pb-0 md:bg-transparent'>
            <p className='text-gray-700 text-lg p-2 text-center md:text-left'>แชร์ข่าวไปที่</p>
            <div className="p-2  flex items-center justify-center md:justify-start">
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-blue-500" onClick={(e) =>
                    shareFacebookLike_newtab(data.news_id, window.location.href)
                }>
                    <FontAwesomeIcon icon={faFacebookF} className="text-l " />
                </button>
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all duration-300 ease-in-out hover:bg-black" onClick={(e) =>
                    shareTwitter(data.news_id, data.news_title, window.location.href)
                }>
                    <FontAwesomeIcon icon={faXTwitter} className="text-l " />
                </button>
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-green-500" onClick={(e) =>
                    shareLine(data.news_id, data.news_title, window.location.href)
                }>
                    <FontAwesomeIcon icon={faLine} className="text-l " />
                </button>
                {/* <CopyToClipboard text={data.news_title} onCopy={() => setStateCopy(true)}> */}
                    <button className=" w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-black">
                        <FontAwesomeIcon icon={faLink} className="text-l " />
                    </button>
                {/* </CopyToClipboard> */}
            </div></div>
        )
}
export default ShareNews