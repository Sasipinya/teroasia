import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tero Advertising",
    description: "Tero Advertising",
  };


const PageAdvertising = () => {

    return (
        <>
        <iframe  src="/advertising/index.html"  width="100%"
        height="100%" />
        </>
    )
}
export default PageAdvertising