import React from "react";
import { styles } from "../../styles";

const highlights = [
  { label: "3+ Years Experience", icon: "💼" },
  { label: "MERN Stack Developer", icon: "⚛️" },
  { label: "Open to Relocation", icon: "🌍" },
];

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>About</h2>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutImage} className="about-image-container">
            <img
              src="/assets/img/Gemini_profile_photo.png"
              alt="Vaishnavi Karil - Profile"
              style={styles.aboutProfileImg}
              className="about-profile-img"
            />
          </div>
          <div style={styles.aboutContent}>
            {/* Section 1: Heading */}
            <div style={styles.aboutSection}>
              <h3 style={styles.aboutHeading}>
                Fullstack MERN Developer & Web Application Developer
              </h3>
            </div>

            {/* Section 2: Description */}
            <div style={styles.aboutSection}>
              <p style={styles.aboutDescription}>
                Fullstack MERN Developer with 3+ years of experience in building
                scalable, responsive web applications using React.js, Next.js,
                Node.js, and MongoDB. Currently based in Pune, Maharashtra and
                open to relocate anywhere in India and overseas.
              </p>
            </div>

            {/* Section 3: Key Highlights */}
            <div style={styles.aboutSection}>
              <h4 style={styles.aboutSectionTitle}>Key Highlights</h4>
              <div style={styles.highlightsGrid}>
                {highlights.map((item, index) => (
                  <div key={index} style={styles.highlightBadge}>
                    <span style={styles.highlightIcon}>{item.icon}</span>
                    <span style={styles.highlightText}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Contact Info */}
            <div style={styles.aboutSection}>
              <h4 style={styles.aboutSectionTitle}>Contact Information</h4>
              <div style={styles.contactGrid}>
                <div>
                  <p style={styles.contactItem}>
                    <strong style={styles.contactLabel}>Phone:</strong>{" "}
                    <span style={styles.contactValue}>+91 9111706639</span>
                  </p>
                  <p style={styles.contactItem}>
                    <strong style={styles.contactLabel}>Email:</strong>{" "}
                    <span style={styles.contactValue}>vaishnavigkaril@gmail.com</span>
                  </p>
                </div>
                <div>
                  <p style={styles.contactItem}>
                    <strong style={styles.contactLabel}>Location:</strong>{" "}
                    <span style={styles.contactValue}>Pune, Maharashtra</span>
                  </p>
                  <p style={styles.contactItem}>
                    <strong style={styles.contactLabel}>Status:</strong>{" "}
                    <span style={styles.contactValue}>Immediate Joiner</span>
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