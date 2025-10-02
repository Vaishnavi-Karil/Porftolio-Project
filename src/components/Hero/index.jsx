import React from "react";
import { styles } from "../../styles";

const Hero = () => {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Vaishnavi Karil</h1>
        <p style={styles.heroSubtitle}>
          I'm a{" "}
          <span style={styles.highlight}>Frontend React JS Developer</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
