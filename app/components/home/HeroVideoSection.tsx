import React from 'react';

const HeroVideoSection = () => {
  return (
     <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://corporate.teroasia.com/terohealthclinic/assets/videos/tero-health-clinic.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Logo Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src="https://corporate.teroasia.com/terohealthclinic/assets/images/logo-clinic.png"
          alt="TERO Health Clinic"
          className="w-[30%] h-32 object-contain"
        />
      </div>
      <a href='/terohealthclinic' className='absolute w-full h-full top-0 left-0 z-20'></a>
    </div>
  );
};

export default HeroVideoSection;