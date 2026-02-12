import Image from 'next/image'
import Link from 'next/link'

export default function HeroVideoSection() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source 
          src="https://corporate.teroasia.com/terohealthclinic/assets/videos/tero-health-clinic.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" aria-hidden="true" />

      {/* Logo Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
        <div className="w-[30%] min-w-[200px] max-w-[400px]">
          <Image
            src="https://corporate.teroasia.com/terohealthclinic/assets/images/logo-clinic.png"
            alt="TERO Health Clinic"
            width={400}
            height={128}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Clickable Overlay Link */}
      <Link 
        href="/terohealthclinic" 
        className="absolute w-full h-full top-0 left-0 z-20"
        aria-label="Visit TERO Health Clinic page"
      >
        <span className="sr-only">Visit TERO Health Clinic</span>
      </Link>
    </div>
  )
}