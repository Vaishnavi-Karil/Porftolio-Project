import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section id='education' className={styles.educationSection}>
      <div className={styles.educationContainer}>
        <h2 className={styles.sectionTitle}>Education</h2>

        <div className={styles.educationGrid}>
          <div>
            <div className={styles.resumeItem}>
              <h4>M.Sc IT (Master of Science in Information Technology)</h4>
              <span className={styles.badge}>2018 - 2020</span>
              <p className={styles.italic}>
                DAVV University, Indore, Madhya Pradesh
              </p>
              <p className={styles.descText}>
                Focused on advanced software development, database management,
                and web technologies.
              </p>
            </div>
            <div className={styles.resumeItem}>
              <h4>B.Sc CS (Bachelor of Science in Computer Science)</h4>
              <span className={styles.badge}>2016 - 2018</span>
              <p className={styles.italic}>
                DAVV University, Indore, Madhya Pradesh
              </p>
              <p className={styles.descText}>
                Core studies in programming fundamentals and computer
                architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;