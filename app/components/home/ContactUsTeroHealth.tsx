'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ContactUsTeroHealth.module.css';
import GoogleMapEmbed from './GoogleMapEmbed';

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
              src="https://corporate.teroasia.com/terohealthclinic/assets/images/contact_us_image.png"
              alt="Tero Health Clinic Contact"
              width={450}
              height={450}
              className={styles.team_image}
              priority
            />
          </div>
        </div>

        <div className={styles.contact_content}>
          <h5 className={styles.subtitle}><span style={{color:'#e63946'}}>Tero</span> Health Clinic Location</h5>

          <GoogleMapEmbed
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9636398302196!2d100.58149287539125!3d13.720651998013398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1661f8e80f%3A0xe9b8625e309a582f!2sTero%20Health%20Clinic!5e0!3m2!1sen!2sth!4v1771226174743!5m2!1sen!2sth"
            height={450}
          />
          <h5 className={styles.subtitle}>สอบถามข้อมูลเพิ่มเติมเกี่ยวกับ <span style={{color:'#e63946'}}>Tero</span> Health Clinic <br/>  เพิ่มเพื่อน Line </h5>

          <div className={styles.contact_buttons}>


            <a href="https://lin.ee/4QsEe86" className={styles.contact_link} target="_blank" rel="noopener noreferrer">
              <button type="button" className={styles.contact_button}>
                LINE: @terohealthclinic
              </button>
            </a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsTeroHealth;