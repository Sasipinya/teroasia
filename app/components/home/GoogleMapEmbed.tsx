interface GoogleMapEmbedProps {
  src: string
  width?: string | number
  height?: string | number
  className?: string
}

export default function GoogleMapEmbed({ 
  src, 
  width = '100%', 
  height = 450,
  className = ''
}: GoogleMapEmbedProps) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className={`border-0 ${className}`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}