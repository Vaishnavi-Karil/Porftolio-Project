import React from "react";
import { styles } from "../../styles";
import Typewriter from "../../components/Typewriter";

const Hero = () => {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.heroBgOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Vaishnavi Karil</h1>
        <p style={styles.heroSubtitle}>
          Creative <Typewriter />
        </p>
      </div>
      <div style={styles.heroImageContainer}>
        <img
          src="/assets/img/Gemini_profile_photo.png"
          alt="Vaishnavi Karil - Profile"
          style={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
