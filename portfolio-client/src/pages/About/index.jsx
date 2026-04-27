import React from "react";
import styles from "./About.module.css";

const highlights = [
  { label: "3+ Years Experience", icon: "💼" },
  { label: "MERN Stack Developer", icon: "⚛️" },
  { label: "Open to Relocation", icon: "🌍" },
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <img
              src="/assets/img/Gemini_profile_photo.png"
              alt="Vaishnavi Karil - Profile"
              className={styles.aboutProfileImg}
            />
          </div>
          <div className={styles.aboutContent}>
            {/* Section 1: Heading */}
            <div className={styles.aboutSectionBlock}>
              <h3 className={styles.aboutHeading}>
                Fullstack MERN Developer & Web Application Developer
              </h3>
            </div>

            {/* Section 2: Description */}
            <div className={styles.aboutSectionBlock}>
              <p className={styles.aboutDescription}>
                Fullstack MERN Developer with 3+ years of experience in building
                scalable, responsive web applications using React.js, Next.js,
                Node.js, and MongoDB. Currently based in Pune, Maharashtra and
                open to relocate anywhere in India and overseas.
              </p>
            </div>

            {/* Section 3: Key Highlights */}
            <div className={styles.aboutSectionBlock}>
              <h4 className={styles.aboutSectionTitle}>Key Highlights</h4>
              <div className={styles.highlightsGrid}>
                {highlights.map((item, index) => (
                  <div key={index} className={styles.highlightBadge}>
                    <span className={styles.highlightIcon}>{item.icon}</span>
                    <span className={styles.highlightText}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Contact Info */}
            <div className={styles.aboutSectionBlock}>
              <h4 className={styles.aboutSectionTitle}>Contact Information</h4>
              <div className={styles.contactGrid}>
                <div>
                  <p className={styles.contactItem}>
                    <strong className={styles.contactLabel}>Phone:</strong>{" "}
                    <span className={styles.contactValue}>+91 9111706639</span>
                  </p>
                  <p className={styles.contactItem}>
                    <strong className={styles.contactLabel}>Email:</strong>{" "}
                    <span className={styles.contactValue}>vaishnavigkaril@gmail.com</span>
                  </p>
                </div>
                <div>
                  <p className={styles.contactItem}>
                    <strong className={styles.contactLabel}>Location:</strong>{" "}
                    <span className={styles.contactValue}>Pune, Maharashtra</span>
                  </p>
                  <p className={styles.contactItem}>
                    <strong className={styles.contactLabel}>Status:</strong>{" "}
                    <span className={styles.contactValue}>Immediate Joiner</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;