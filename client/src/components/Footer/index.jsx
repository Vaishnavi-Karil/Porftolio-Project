import React from "react";
import { styles } from "../../styles";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© Copyright iPortfolio. All Rights Reserved</p>
        <p style={styles.credits}>
          Designed & Developed by Vaishnavi Karil | Dubai, UAE | +971 52 800
          8661
        </p>
      </div>
    </footer>
  );
};

export default Footer;
