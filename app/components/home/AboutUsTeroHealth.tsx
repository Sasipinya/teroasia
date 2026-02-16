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
        
          <h2 className={styles.title}>
            <span style={{color:'#e63946'}}>Tero</span> Health Clinic
          </h2>
          <p className={styles.description}>
            เทโร เฮลท์ คลินิก เป็นคลินิกกายภาพบำบัดและเวชศาสตร์ฟื้นฟูชั้นนำ 
            ที่มุ่งเน้นการดูแลสุขภาพแบบองค์รวม (Holistic Care) โดยผสมผสานระหว่างเทคโนโลยีทางการแพทย์ที่ทันสมัย 
            กับความเชี่ยวชาญของทีมนักกายภาพบำบัดมืออาชีพ เพื่อตอบโจทย์ไลฟ์สไตล์ของคนยุคใหม่ที่เผชิญกับปัญหาทางร่างกายจากการทำงานและการใช้ชีวิต
          </p>

          <div className={styles.services_section}>
            <h3 className={styles.services_title}>บริการของเรา</h3>
            <ul className={styles.services_list}>
              <li>
                <strong>รักษาอาการออฟฟิศซินโดรม (Office Syndrome):</strong> แก้ไขปัญหาปวดคอ บ่า ไหล่ และหลัง จากการนั่งทำงานนานๆ
              </li>
              <li>
                <strong>กายภาพบำบัดทางระบบกระดูกและกล้ามเนื้อ:</strong> รักษาอาการปวดเรื้อรัง หมอนรองกระดูกทับเส้นประสาท หรือกล้ามเนื้ออักเสบ
              </li>
              <li>
                <strong>ฟื้นฟูอาการบาดเจ็บจากการเล่นกีฬา (Sports Rehabilitation):</strong> ดูแลนักกีฬาหรือผู้ที่บาดเจ็บจากการออกกำลังกายให้กลับมาฟิตสมบูรณ์
              </li>
              <li>
                <strong>การฝังเข็มแบบตะวันตก (Dry Needling):</strong> เพื่อคลายจุดบอดของกล้ามเนื้อ (Trigger Point) ที่เป็นสาเหตุของอาการปวดสะสม
              </li>
              <li>
                <strong>โปรแกรมฟื้นฟูหลังผ่าตัด:</strong> ช่วยให้ร่างกายกลับมาเคลื่อนไหวได้อย่างปกติและปลอดภัย
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeroHealth;