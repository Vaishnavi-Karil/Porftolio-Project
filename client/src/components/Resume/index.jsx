import React from "react";
import { styles } from "../../styles";

const Resume = () => {
  return (
    <section id="resume" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Resume</h2>
        <div style={styles.resumeGrid}>
          <div>
            <h3 style={styles.resumeSubtitle}>Education</h3>
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
          <div>
            <h3 style={styles.resumeSubtitle}>Professional Experience</h3>
            <div style={styles.resumeItem}>
              <h4>Senior Software Developer / MERN Stack</h4>
              <span style={styles.badge}>2025 - Present</span>
              <p style={styles.italic}>NeoSOFT Private Limited, Pune</p>
              <ul style={styles.list}>
                <li>Working with MySQL2, PostgreSQL and MongoDB databases</li>
                <li>Built secure RBAC systems with permission-based APIs</li>
                <li>Deployed backend APIs via AWS Elastic Beanstalk and RDS</li>
              </ul>
            </div>
            <div style={styles.resumeItem}>
              <h4>Full Stack Developer (React + Node.js)</h4>
              <span style={styles.badge}>2022 - 2024</span>
              <p style={styles.italic}>Axonic Health Pvt. Ltd., Pune</p>
              <ul style={styles.list}>
                <li>
                  Built interactive dashboards with React.js and Material UI
                </li>
                <li>
                  Developed REST APIs using Node.js, Express, and PostgreSQL
                </li>
                <li>Managed state with Redux Toolkit and React Query</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
