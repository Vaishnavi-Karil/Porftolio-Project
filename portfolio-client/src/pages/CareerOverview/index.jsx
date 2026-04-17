import React from 'react';
import { styles } from '../../styles';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FiCode, FiDatabase, FiLayers, FiGlobe } from 'react-icons/fi';

const highlights = [
  { label: '3+ Years Experience', icon: '💼' },
  { label: 'MERN Stack Developer', icon: '⚛️' },
  { label: 'Immediate Joiner', icon: '⚡' },
  { label: 'Open to Relocation', icon: '🌍' },
];

const stats = [
  { label: '5+ Real Projects Delivered', icon: FiCode },
  { label: 'Production-Level Applications', icon: FiLayers },
  { label: 'Scalable Web Solutions', icon: FiGlobe },
  { label: 'Real-world Business Use Cases', icon: FiDatabase },
];

const CareerOverview = () => {
  return (
    <section id='career' style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Career Overview</h2>

        {/* Professional Summary */}
        <p
          style={{
            color: '#a8a9b4',
            fontSize: '15px',
            lineHeight: '1.7',
            marginBottom: '24px',
          }}
        >
          Building scalable and high-performance web applications using modern
          technologies like React, Node.js, and MongoDB. Focused on delivering
          clean, user-centric solutions that solve real-world business problems.
          Experienced in developing production-ready applications with strong
          attention to performance, usability, and maintainability.
        </p>

        {/* Highlights as Small Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          {/* {highlights.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(20, 157, 221, 0.08)',
                border: '1px solid rgba(20, 157, 221, 0.15)',
                padding: '12px 16px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
          ))} */}
        </div>

        {/* Compact Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginTop: '20px',
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'rgba(20, 157, 221, 0.08)',
                  border: '1px solid rgba(20, 157, 221, 0.15)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon style={{ color: '#149ddd', fontSize: '18px' }} />
                <span
                  style={{
                    color: '#a8a9b4',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Resume Access & Contact */}
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h3
              style={{
                ...styles.heading,
                fontSize: '18px',
                marginBottom: '10px',
              }}
            >
              Resume Available Upon Request
            </h3>
            <p style={styles.infoText}>
              I prefer to share my detailed resume directly with recruiters and
              hiring managers for a personalized discussion about my experience.
              Feel free to reach out via email or phone to receive it.
            </p>
          </div>

          <div style={styles.infoCard}>
            <h3
              style={{
                ...styles.heading,
                fontSize: '18px',
                marginBottom: '15px',
              }}
            >
              Get In Touch
            </h3>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <a
                href='mailto:vaishnavigkaril@gmail.com'
                style={{ ...styles.achortag, gap: '10px' }}
              >
                <FiMail style={{ color: '#149ddd', fontSize: '18px' }} />
                <span style={{ color: '#a8a9b4', fontSize: '14px' }}>
                  vaishnavigkaril@gmail.com
                </span>
              </a>
              <a
                href='tel:+919111706639'
                style={{ ...styles.achortag, gap: '10px' }}
              >
                <FiPhone style={{ color: '#149ddd', fontSize: '18px' }} />
                <span style={{ color: '#a8a9b4', fontSize: '14px' }}>
                  +91 9111706639
                </span>
              </a>
              <a
                href='https://wa.me/919111706639'
                target='_blank'
                rel='noopener noreferrer'
                style={{ ...styles.achortag, gap: '10px' }}
              >
                <FiMessageSquare
                  style={{ color: '#149ddd', fontSize: '18px' }}
                />
                <span style={{ color: '#a8a9b4', fontSize: '14px' }}>
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
