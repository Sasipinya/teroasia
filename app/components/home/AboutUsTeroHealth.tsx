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
    const duration = 2000;
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
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <div className={styles.circle_frame}>
            <Image
              src="https://corporate.teroasia.com/terohealthclinic/assets/images/aboutus_image.png"
              alt="Tero Health Clinic Team"
              width={400}
              height={400}
              className={styles.team_image}
              priority
            />
          </div>
        </div>

        <div className={styles.text_content}>
          <h5 className={styles.subtitle}>เกี่ยวกับเรา</h5>
          <h2 className={styles.title}>
            ยินดีต้อนรับสู่<br />
            เทโร เฮลท์ คลินิก
          </h2>
          <p className={styles.description}>
            เทโร เฮลท์ คลินิก มีความยินดีที่จะให้บริการด้านสุขภาพแก่บริษัทของคุณ 
            โดยไม่มีค่าใช้จ่ายใดๆ เนื่องจากเรามีความมุ่งมั่นที่จะให้การศึกษาแก่ลูกค้าของเรา
            เพื่อให้มีสุขภาพที่ดีขึ้นและปลดปล่อยความเจ็บปวด เรามุ่งเน้นในการวินิจฉัยอาการปวด 
            รักษา และแนะนำวิธีที่ดีที่สุดเพื่อการฟื้นตัวอย่างรวดเร็ว
          </p>

          <div className={styles.counter_section} ref={counterRef}>
            <div className={styles.counter_number}>
              {count.toLocaleString('th-TH')}
              <span className={styles.plus}>+</span>
            </div>
            <p className={styles.counter_text}>ลูกค้าที่มาใช้บริการของเรา</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeroHealth;