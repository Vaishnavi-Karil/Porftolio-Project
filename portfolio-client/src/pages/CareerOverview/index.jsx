import React, { useState } from 'react';
import styles from './CareerOverview.module.css';
import { FiMail, FiPhone, FiMessageSquare, FiCode, FiDatabase, FiLayers, FiGlobe } from 'react-icons/fi';

const stats = [
  { label: '5+ Real Projects Delivered', icon: FiCode },
  { label: 'Production-Level Applications', icon: FiLayers },
  { label: 'Scalable Web Solutions', icon: FiGlobe },
  { label: 'Real-world Business Use Cases', icon: FiDatabase },
];

const CareerOverview = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section id='career' className={styles.careerSection}>
      <div className={styles.careerContainer}>
        <h2 className={styles.sectionTitle}>Career Overview</h2>

        {/* Professional Summary - matches About section typography */}
        <p className={styles.careerDescription}>
          Building scalable and high-performance web applications using modern
          technologies like React, Node.js, and MongoDB. Focused on delivering
          clean, user-centric solutions that solve real-world business problems.
          Experienced in developing production-ready applications with strong
          attention to performance, usability, and maintainability.
        </p>

        {/* Highlights Pills - matching About section highlightBadge style */}
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightBadge}>
            <span className={styles.highlightIcon}>💼</span>
            <span className={styles.highlightText}>3+ Years Experience</span>
          </div>
          <div className={styles.highlightBadge}>
            <span className={styles.highlightIcon}>⚛️</span>
            <span className={styles.highlightText}>MERN Stack Developer</span>
          </div>
          <div className={styles.highlightBadge}>
            <span className={styles.highlightIcon}>⚡</span>
            <span className={styles.highlightText}>Immediate Joiner</span>
          </div>
          <div className={styles.highlightBadge}>
            <span className={styles.highlightIcon}>🌍</span>
            <span className={styles.highlightText}>Open to Relocation</span>
          </div>
        </div>

        {/* Compact Stats Row - matching About section card style with hover */}
        <div className={styles.statsRow}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isHovered = hoveredStat === index;
            return (
              <div
                key={index}
                className={styles.statItem}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 6px 20px rgba(20, 157, 221, 0.15)'
                    : 'none',
                }}
              >
                <Icon className={styles.statIcon} />
                <span className={styles.statLabel}>
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Resume Access & Contact - using shared infoCard style */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              Resume Available Upon Request
            </h3>
            <p className={styles.infoText}>
              I prefer to share my detailed resume directly with recruiters and
              hiring managers for a personalized discussion about my experience.
              Feel free to reach out via email or phone to receive it.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              Get In Touch
            </h3>
            <div className={styles.contactLinks}>
              <a href='mailto:vaishnavigkaril@gmail.com' className={styles.contactLink}>
                <FiMail className={styles.contactIcon} />
                <span>vaishnavigkaril@gmail.com</span>
              </a>
              <a href='tel:+919111706639' className={styles.contactLink}>
                <FiPhone className={styles.contactIcon} />
                <span>+91 9111706639</span>
              </a>
              <a
                href='https://wa.me/919111706639'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contactLink}
              >
                <FiMessageSquare className={styles.contactIcon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;