import React from "react";
import styles from "./Hero.module.css";
import Typewriter from "../../components/Typewriter";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBgOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Vaishnavi Karil</h1>
        <p className={styles.heroSubtitle}>
          Creative <Typewriter />
        </p>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src="/assets/img/Gemini_profile_photo.png"
          alt="Vaishnavi Karil - Profile"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;