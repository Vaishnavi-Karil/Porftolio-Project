import React from 'react';
import { styles } from '../../styles';
import { contact } from '../../contants';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© Copyright . All Rights Reserved</p>
        <p style={styles.credits}>
          Designed & Developed by {contact.name} | {contact.location} |{' '}
          {contact.phone}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
