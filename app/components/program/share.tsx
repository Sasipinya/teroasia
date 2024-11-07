'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
function ShareProgram({ data }: { data?: any }) {
    const [stateCopy, setStateCopy] = useState(false);
    const shareFacebookLike_newtab = (url: string) => {
        window.open(
            "https://www.facebook.com/sharer/sharer.php?app_id=1152976658386392&u=" +
            encodeURIComponent(url)
        );
    };
    const shareTwitter = (text: string, url: string) => {


        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            '_blank' // Open in a new tab/window
        );
    };

    const shareLine = (text: string, url: string) => {


        window.open(
            `https://line.me/R/msg/text/?${encodeURIComponent(text)}%0D%0A${encodeURIComponent(url)}`,
            '_blank' // Open in a new tab/window
        );
    };
    return (

        <>
            <p className='text-gray-700 text-lg p-2 '>แชร์ลิงค์รายการทีวีนี้ไปที่</p>
            <div className="p-2  flex items-center justify-start">
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-blue-500" onClick={(e) =>
                    shareFacebookLike_newtab(window.location.href)
                }>
                    <FontAwesomeIcon icon={faFacebookF} className="text-l " />
                </button>
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all duration-300 ease-in-out hover:bg-black" onClick={(e) =>
                    shareTwitter(data.info.program_name, window.location.href)
                }>
                    <FontAwesomeIcon icon={faXTwitter} className="text-l " />
                </button>
                <button className="mr-1 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-green-500" onClick={(e) =>
                    shareLine(data.info.program_name, window.location.href)
                }>
                    <FontAwesomeIcon icon={faLine} className="text-l " />
                </button>
                <CopyToClipboard text={data.info.program_name} onCopy={() => setStateCopy(true)}>
                    <button className=" w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-black">
                        <FontAwesomeIcon icon={faLink} className="text-l " />
                    </button>
                </CopyToClipboard>
            </div>
        </>)
}
export default ShareProgram