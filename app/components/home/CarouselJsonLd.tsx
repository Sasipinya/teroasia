'use client'

interface CarouselItem {
  "@type": "ItemList";
  position: number;
  url: string;
  name: string;
  image: string;
  description: string;
}

interface CarouselProps {
  items?: CarouselItem[];
}

const CarouselJsonLd = ({ 
  items = [
    {
      "@type": "ItemList",
      position: 1,
      url: "https://teroasia.com/news/detail/1",
      name: "เช้านี้ที่หมอชิต",
      image: "https://teroasia.com/static/images/chaoneeteemochit.jpg",
      description: "รายการเช้านี้ที่หมอชิต ออกอากาศทุกวันจันทร์-ศุกร์ เวลา 06.25-08.25 น. ทางช่อง 7HD"
    },
    {
      "@type": "ItemList",
      position: 2,
      url: "https://teroasia.com/news/detail/2",
      name: "ถกไม่เถียง",
      image: "https://teroasia.com/static/images/tokmaitiang.jpg",
      description: "รายการถกไม่เถียง ออกอากาศทุกวันจันทร์-ศุกร์ เวลา 10.25-11.15 น. ทางช่อง 7HD"
    },
    {
      "@type": "ItemList",
      position: 3,
      url: "https://teroasia.com/news/detail/3",
      name: "ข่าวเย็นช่อง 7HD",
      image: "https://teroasia.com/static/images/eveningnews.jpg",
      description: "รายการข่าวเย็นช่อง 7HD ออกอากาศทุกวันจันทร์-อาทิตย์ เวลา 17.30-18.30 น."
    },
    {
      "@type": "ItemList",
      position: 4,
      url: "https://teroasia.com/news/detail/4",
      name: "ONE CHAMPIONSHIP",
      image: "https://teroasia.com/static/images/one.jpg",
      description: "ศึกมวย ONE Championship ถ่ายทอดสดทุกวันศุกร์"
    }
  ]
}: CarouselProps): JSX.Element => {
  const carouselSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": item.position,
      "item": {
        "@context": "https://schema.org",
        "@type": "Article",
        "url": item.url,
        "name": item.name,
        "image": item.image,
        "description": item.description,
        "publisher": {
          "@type": "Organization",
          "name": "TeroAsia",
          "logo": {
            "@type": "ImageObject",
            "url": "https://teroasia.com/static/images/logo_tero.png"
          }
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(carouselSchema)
      }}
    />
  );
};

export default CarouselJsonLd;