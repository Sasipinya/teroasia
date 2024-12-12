import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tero Health Clinic",
    description: "Tero Health Clinic",
  };

const PageTeroHealth = () => {

    return (
        <>
        <div className="hidden md:block">
        <iframe src="https://corporate.teroasia.com/terohealthclinic/?v=2" width="100%" height="8000"  ></iframe>
        </div>
        <div className="block md:hidden">
        <iframe src="https://corporate.teroasia.com/terohealthclinic/?v=2" width="100%" height="800"  ></iframe>
        </div>
        </>
    )
}
export default PageTeroHealth