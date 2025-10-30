import React from "react";
import { styles } from "../../styles";

const Certification = () => {
  return (
    <section id="certifications" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Certifications</h2>

        <div style={styles.resumeGrid}>
          <div>
            <div style={styles.resumeItem}>
              <h4>Full-Stack Web Development (MERN)</h4>
              <span style={styles.badge}>2023</span>
              <p style={styles.italic}>Udemy</p>
              <p style={styles.descText}>
                Completed hands-on training in MongoDB, Express, React, and
                Node.js, building scalable web applications and REST APIs.
              </p>
            </div>

            <div style={styles.resumeItem}>
              <h4>AWS Cloud Practitioner Essentials</h4>
              <span style={styles.badge}>2023</span>
              <p style={styles.italic}>Amazon Web Services (AWS)</p>
              <p style={styles.descText}>
                Gained foundational understanding of AWS Cloud concepts,
                deployment, and CI/CD services including Amplify and Elastic
                Beanstalk.
              </p>
            </div>

            <div style={styles.resumeItem}>
              <h4>JavaScript (Intermediate) Certificate</h4>
              <span style={styles.badge}>2022</span>
              <p style={styles.italic}>HackerRank</p>
              <p style={styles.descText}>
                Demonstrated proficiency in modern JavaScript (ES6+), data
                structures, and asynchronous programming concepts.
              </p>
            </div>

            <div style={styles.resumeItem}>
              <h4>React Frontend Development</h4>
              <span style={styles.badge}>2022</span>
              <p style={styles.italic}>
                Coursera – Meta Front-End Developer Program
              </p>
              <p style={styles.descText}>
                Built responsive UI components using React, Hooks, and Context
                API, focusing on clean code and performance optimization.
              </p>
            </div>

            <div style={styles.resumeItem}>
              <h4>Node.js and Express.js for Backend APIs</h4>
              <span style={styles.badge}>2021</span>
              <p style={styles.italic}>Udemy</p>
              <p style={styles.descText}>
                Learned how to create RESTful APIs using Express.js and Node.js,
                covering authentication, middleware, and database integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
