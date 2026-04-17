import React from 'react';
import { styles } from '../../styles';

const Education = () => {
  return (
    <section id='education' style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Education</h2>

        <div style={styles.resumeGrid}>
          <div>
            {/* <h3 style={styles.resumeSubtitle}>Education</h3> */}
            <div style={styles.resumeItem}>
              <h4>M.Sc IT (Master of Science in Information Technology)</h4>
              <span style={styles.badge}>2018 - 2020</span>
              <p style={styles.italic}>
                DAVV University, Indore, Madhya Pradesh
              </p>
              <p style={styles.descText}>
                Focused on advanced software development, database management,
                and web technologies.
              </p>
            </div>
            <div style={styles.resumeItem}>
              <h4>B.Sc CS (Bachelor of Science in Computer Science)</h4>
              <span style={styles.badge}>2016 - 2018</span>
              <p style={styles.italic}>
                DAVV University, Indore, Madhya Pradesh
              </p>
              <p style={styles.descText}>
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
