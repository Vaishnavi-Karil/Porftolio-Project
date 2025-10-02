import React from "react";
import { styles } from "../../styles";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>About</h2>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutImage}>Profile Photo</div>
          <div style={styles.aboutContent}>
            <h3 style={styles.aboutSubtitle}>
              Fullstack MERN Developer & Web Application Developer
            </h3>
            <p style={styles.italic}>
              Fullstack MERN Developer with 3+ years of experience in building
              scalable, responsive web applications using React.js, Next.js,
              Node.js, and MongoDB. Currently based in Dubai and actively
              looking for opportunities in the UAE.
            </p>
            <div style={styles.infoGrid}>
              <div>
                <p style={styles.infoText}>
                  <strong>Phone:</strong> +971 528008661
                </p>
                <p style={styles.infoText}>
                  <strong>Location:</strong> Dubai, UAE
                </p>
                <p style={styles.infoText}>
                  <strong>Website:</strong> Portfolio
                </p>
              </div>
              <div>
                <p style={styles.infoText}>
                  <strong>Degree:</strong> M.Sc IT
                </p>
                <p style={styles.infoText}>
                  <strong>Email:</strong> vaishnavigkariluae@gmail.com
                </p>
                <p style={styles.infoText}>
                  <strong>Status:</strong> Immediate Joiner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
