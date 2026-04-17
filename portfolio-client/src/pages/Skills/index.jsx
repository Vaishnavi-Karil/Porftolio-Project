import React from 'react';
// import { skills } from '../../contants';
import { styles } from '../../styles';
import { skills } from '../../contants';

const Skills = () => {
  return (
    <section id='skills' style={{ ...styles.section, ...styles.lightBg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
                <span style={{ color: '#149ddd' }}>{skill.value}%</span>
              </div>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${skill.value}%`,
                  }}
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
