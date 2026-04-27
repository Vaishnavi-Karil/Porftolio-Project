import React from 'react';
import styles from './Footer.module.css';
import { contact } from '../../contants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>© Copyright . All Rights Reserved</p>
        <p className={styles.credits}>
          Designed & Developed by {contact.name} | {contact.location} |{' '}
          {contact.phone}
        </p>
      </div>
    </footer>
  );
};

export default Footer;