
'use client'

interface CarouselItem {
  type: string;
  id: string;
  name: string;
  url: string;
  image: string;
  description?: string;
}

interface CarouselProps {
  data_carousel?: {
    title: string;
    items: CarouselItem[];
  } | null;
}

const CarouselJsonLd = ({ data_carousel }: CarouselProps) => {
  if (!data_carousel) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": data_carousel.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "@id": item.id,
        "name": item.name,
        "url": item.url,
        "image": item.image,
        "description": item.description
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}


const createCarouselJsonLd = (data_carousel = null) => {
  if (!data_carousel) return null;
  
  return <CarouselJsonLd data_carousel={data_carousel} />
}

export default createCarouselJsonLd