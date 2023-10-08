import React from 'react';
import styles from '../styles/Contact.module.css';
import classnames from 'classnames';
import {FaEnvelope,FaWhatsapp,FaLinkedinIn} from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  const test = 'test';
  return (
    <>
      <div className="main_container">
        <div className={styles.main_title}>
          <h1>Let&apos;s work together !</h1>
          <p>
            Have a website that you&apos;d like to create? let me help you with that
          </p>
        </div>
        <div className={styles.contact_details}>
          <div className={styles.contact_details_box}>
            <div className={styles.icon_wrapper}>
              <FaLinkedinIn/>
            </div>
            <div>
              <p className={styles.contact_details_title}>Find me on Linkedin</p>
              <Link href="https://www.linkedin.com/in/balqees-sabir-8119bb162/" target='_blank'>Balqees Sabir</Link>
            </div>
          </div>
          <div className={styles.contact_details_box}>
            <div className={styles.icon_wrapper}>
              <FaEnvelope/>
            </div>
            <div>
              <p className={styles.contact_details_title}>Send me an Email </p>
              <p>Balqeessaber@gmail.com</p>
            </div>
          </div>
          <div className={styles.contact_details_box}>
            <div className={styles.icon_wrapper}>
              <FaWhatsapp/>
            </div>
            <div>   
              <p className={styles.contact_details_title}>Contact me on Whatsapp </p>
              <Link href="https://wa.me/00201064569049" target='_blank'>+20 106 456 9049</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
