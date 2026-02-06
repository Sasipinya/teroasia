

export const metadata = {
  title: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD',
  description: 'TeroAsia เชื่อมติดทุกข่าวสาร ความบันเทิง กีฬา มวย จากช่อง 7HD',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {/* Preload CSS - โหลดก่อนทุกอย่าง */}
      <link rel="preload" href="/assets/css/vendor/bootstrap.min.css" as="style" />
      <link rel="preload" href="/assets/css/vendor/fontawesome.css" as="style" />
      <link rel="preload" href="/assets/css/main.css" as="style" />
      
      {/* โหลด CSS จริง */}
      <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
      <link rel="stylesheet" href="/assets/css/vendor/aos.css" />
      <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/vendor/slick-slider.css" />
      <link rel="stylesheet" href="/assets/css/vendor/nice-select.css" />
      <link rel="stylesheet" href="/assets/css/vendor/odometer.css" />
      <link rel="stylesheet" href="/assets/css/vendor/mobile.css" />
      <link rel="stylesheet" href="/assets/css/vendor/sidebar.css" />
      <link rel="stylesheet" href="/assets/css/main.css" />
      
      {/* Swiper & Animate */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

      {children}
    </>
  )
}