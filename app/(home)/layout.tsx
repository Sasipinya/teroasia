

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
      {children}
    </>
  )
}