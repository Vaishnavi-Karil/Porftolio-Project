import React from 'react';
import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiCloud,
} from 'react-icons/fi';

import styles from './Certifications.module.css';

const certificationStats = [
  {
    value: '3+',
    label: 'Learning Paths',
    icon: FiBookOpen,
    color: '#149DDD',
  },

  {
    value: '500+',
    label: 'Hours Learned',
    icon: FiAward,
    color: '#68F5B8',
  },

  {
    value: '10+',
    label: 'Projects Built',
    icon: FiCode,
    color: '#ADC6FF',
  },

  {
    value: '100%',
    label: 'Practical Skills',
    icon: FiCloud,
    color: '#149DDD',
  },
];

const certifications = [
  {
    title: 'Full-Stack Web Development (MERN)',

    provider: 'Udemy + YouTube + Practice',

    description:
      'Complete journey of building modern full-stack web applications using MongoDB, Express.js, React, and Node.js.',

    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],

    accent: '#149DDD',

    tag: 'SELF-PACED',
  },

  {
    title: 'AWS Cloud Practitioner Essentials',

    provider: 'Coursera + Hands-on',

    description:
      'Fundamentals of AWS cloud services, deployment, security, and scalable infrastructure.',

    skills: ['AWS', 'S3', 'EC2', 'IAM', 'CloudWatch'],

    accent: '#ADC6FF',

    tag: 'CLOUD PATH',
  },

  {
    title: 'JavaScript Mastery (Advanced)',

    provider: 'Advanced Concepts Path',

    description:
      'Advanced JavaScript concepts including ES6+, async programming, promises, closures, and Fetch API.',

    skills: ['ES6+', 'Promises', 'Closures', 'Fetch API'],

    accent: '#68F5B8',

    tag: 'EXPERTISE',
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className={styles.certificationsSection}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Certifications
            <span> & Learning</span>
          </h2>

          <p className={styles.subtitle}>
            My continuous learning journey through
            self-paced courses, hands-on practice,
            and real-world application.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {certificationStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={styles.statCard}
              >
                <div
                  className={styles.statIcon}
                  style={{
                    background: `${item.color}15`,
                  }}
                >
                  <Icon
                    size={22}
                    color={item.color}
                  />
                </div>

                <h3>{item.value}</h3>

                <p>{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          {certifications.map((item, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div
                className={styles.glow}
                style={{
                  background: `${item.accent}20`,
                }}
              />

              <div
                className={styles.tag}
                style={{
                  color: item.accent,
                  borderColor: `${item.accent}40`,
                  background: `${item.accent}10`,
                }}
              >
                {item.tag}
              </div>

              <h3>{item.title}</h3>

              <p
                className={styles.provider}
                style={{
                  color: item.accent,
                }}
              >
                {item.provider}
              </p>

              <p className={styles.description}>
                {item.description}
              </p>

              <div className={styles.skills}>
                {item.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        {/* <div className={styles.bottomBanner}>
          <div>
            <h3>Learning Never Stops 🚀</h3>

            <p>
              I believe in continuous learning and
              applying knowledge through real-world
              projects.
            </p>
          </div>

          <div className={styles.bannerText}>
            Real-world implementation focused
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Certifications;