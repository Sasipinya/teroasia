'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ContactUsTeroHealth.module.css';

interface ContactUsTeroHealthProps {
  className?: string;
}

const ContactUsTeroHealth: React.FC<ContactUsTeroHealthProps> = ({ className = '' }) => {
  return (
    <section className={`${styles.contact_us_section} ${className}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.image_container}>
          <div className={styles.circle_frame}>
            <Image
              src="https://corporate.teroasia.com/terohealthclinic/assets/images/aboutus_image.png"
              alt="Tero Health Clinic Contact"
              width={400}
              height={400}
              className={styles.team_image}
              priority
            />
          </div>
        </div>

        <div className={styles.contact_content}>
          <h5 className={styles.subtitle}>ติดต่อเรา</h5>

          <div className={styles.contact_buttons}>
            <a href="tel:020880748" className={styles.contact_link}>
              <button type="button" className={styles.contact_button}>
                020880748
              </button>
            </a>

            <a href="https://lin.ee/4QsEe86" className={styles.contact_link} target="_blank" rel="noopener noreferrer">
              <button type="button" className={styles.contact_button}>
                LINE: @terohealthclinic
              </button>
            </a>

            <a href="https://www.instagram.com/terohealthclinic.official/" className={styles.contact_link} target="_blank" rel="noopener noreferrer">
              <button type="button" className={styles.contact_button}>
                IG: terohealthclinic.official
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsTeroHealth;