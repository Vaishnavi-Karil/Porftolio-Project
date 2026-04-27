import React from "react";
import styles from "./Certification.module.css";

const Certification = () => {
  return (
    <section id="certifications" className={styles.certSection}>
      <div className={styles.certContainer}>
        <h2 className={styles.sectionTitle}>Certifications</h2>

        <div className={styles.certGrid}>
          <div>
            <div className={styles.certItem}>
              <h4>Full-Stack Web Development (MERN)</h4>
              <span className={styles.badge}>2023</span>
              <p className={styles.italic}>Udemy</p>
              <p className={styles.descText}>
                Completed hands-on training in MongoDB, Express, React, and
                Node.js, building scalable web applications and REST APIs.
              </p>
            </div>

            <div className={styles.certItem}>
              <h4>AWS Cloud Practitioner Essentials</h4>
              <span className={styles.badge}>2023</span>
              <p className={styles.italic}>Amazon Web Services (AWS)</p>
              <p className={styles.descText}>
                Gained foundational understanding of AWS Cloud concepts,
                deployment, and CI/CD services including Amplify and Elastic
                Beanstalk.
              </p>
            </div>

            <div className={styles.certItem}>
              <h4>JavaScript (Intermediate) Certificate</h4>
              <span className={styles.badge}>2022</span>
              <p className={styles.italic}>HackerRank</p>
              <p className={styles.descText}>
                Demonstrated proficiency in modern JavaScript (ES6+), data
                structures, and asynchronous programming concepts.
              </p>
            </div>

            <div className={styles.certItem}>
              <h4>React Frontend Development</h4>
              <span className={styles.badge}>2022</span>
              <p className={styles.italic}>
                Coursera – Meta Front-End Developer Program
              </p>
              <p className={styles.descText}>
                Built responsive UI components using React, Hooks, and Context
                API, focusing on clean code and performance optimization.
              </p>
            </div>

            <div className={styles.certItem}>
              <h4>Node.js and Express.js for Backend APIs</h4>
              <span className={styles.badge}>2021</span>
              <p className={styles.italic}>Udemy</p>
              <p className={styles.descText}>
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