import React from "react";
import { styles } from "../../styles";

const Skills = ({ skills }) => {
  return (
    <section style={{ ...styles.section, ...styles.lightBg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${skill.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
