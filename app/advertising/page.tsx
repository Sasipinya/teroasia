import type { Metadata } from "next";
import AutoHeightIFrame from "../components/utils/autoheightiframe"

export const metadata: Metadata = {
    title: "Tero Advertising",
    description: "Tero Advertising",
  };


const PageAdvertising = () => {

    return (
        <>
        <AutoHeightIFrame src="/advertising/index.html" title="Advertising" />
        </>
    )
}
export default PageAdvertising