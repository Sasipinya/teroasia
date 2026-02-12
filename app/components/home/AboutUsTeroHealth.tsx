'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AboutUsTeroHealth.module.css';

interface AboutUsTeroHealthProps {
  className?: string;
}

const AboutUsTeroHealth: React.FC<AboutUsTeroHealthProps> = ({ className = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const target = 3700;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className={`${styles.aboutus_section} ${className}`}>
      <div className="container">
        <div className="row">
          <div 
            className="col-lg-6 col-xs-12 d-lg-block d-md-flex align-items-center" 
            data-aos="fade-left"
          >
            <div className={styles.aboutus_image}>
              <figure className="mb-0">
                <Image
                  src="https://corporate.teroasia.com/terohealthclinic/assets/images/aboutus_image.png"
                  alt="Tero Health Clinic"
                  width={600}
                  height={600}
                  className="img-fluid"
                  priority
                />
              </figure>
            </div>
          </div>
          
          <div className="col-lg-6 col-xs-12" data-aos="fade-right">
            <div className={styles.aboutus_content}>
              <h5>เกี่ยวกับเรา</h5>
              <h2>
                ยินดีต้อนรับสู่<br />
                เทโร เฮลท์ คลินิก
              </h2>
              <p>
                เทโร เฮลท์ คลินิก มีความยินดีที่จะให้บริการด้านสุขภาพแก่บริษัทของคุณ 
                โดยไม่มีค่าใช้จ่ายใดๆ เนื่องจากเรามีความมุ่งมั่นที่จะให้การศึกษาแก่ลูกค้าของเรา
                เพื่อให้มีสุขภาพที่ดีขึ้นและปลดปล่อยความเจ็บปวด เรามุ่งเน้นในการวินิจฉัยอาการปวด 
                รักษา และแนะนำวิธีที่ดีที่สุดเพื่อการฟื้นตัวอย่างรวดเร็ว
              </p>
              
              <div className="row mt-5">
                <div className="col-lg-10 col-10 mx-auto">
                  <div className={styles.counter_wrapper} ref={counterRef}>
                    <span className={`${styles.rating} ${styles.counter}`}>
                      {count.toLocaleString('th-TH')}
                    </span>
                    <span className={styles.plus_sign}>+</span>
                    <p>ลูกค้าที่มาใช้บริการของเรา</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeroHealth;