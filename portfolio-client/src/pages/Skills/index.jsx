import React from 'react';
import styles from './Skills.module.css';
import { skills } from '../../contants';

const Skills = () => {
  return (
    <section id='skills' className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillValue}>{skill.value}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;