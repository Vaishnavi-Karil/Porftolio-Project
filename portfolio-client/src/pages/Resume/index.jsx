import React, { useEffect, useRef, useState } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import styles from './Resume.module.css';
import { resumeExperience, resumeStats, resumeSummary } from '../../contants';

const Resume = () => {
  const [hoveredCard, setHoveredCard]   = useState(null);
  const [hoveredStat, setHoveredStat]   = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
            setVisibleItems(prev => new Set([...prev, i]));
        },
        { threshold: 0.1 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.resumeContainer}>

        {/* Section title */}
        <h2 className={styles.sectionTitle}>Professional Experience</h2>

        {/* Summary card + Stats grid */}
        <div className={styles.resumeTopGrid}>

          {/* Summary */}
          <div className={styles.resumeSummaryCard}>
            <div className={styles.summaryAccentBar} />
            <h3 className={styles.summaryTitle}>{resumeSummary.heading}</h3>
            <p className={styles.summaryBody}>{resumeSummary.text}</p>
            <div className={styles.summaryPillRow}>
              {resumeSummary.pills.map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <span
                    key={i}
                    className={pill.type === 'available' ? styles.summaryPillGreen : styles.summaryPill}
                  >
                    <Icon size={11} />
                    {pill.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className={styles.statsQuad}>
            {resumeStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`${styles.statCardNew} ${hoveredStat === i ? 'stat-hovered' : ''}`}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className={styles.statIconBox}>
                    <Icon size={18} />
                  </div>
                  <div className={styles.statNumVal}>{stat.value}</div>
                  <div className={styles.statNumLabel}>{stat.label}</div>
                  <div className={styles.statNumSub}>{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work History divider */}
        <div className={styles.expDividerRow}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerCaption}>Work History</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineRailLine} />

          {resumeExperience.map((job, i) => {
            const isVisible = visibleItems.has(i);
            const isHovered = hoveredCard === i;

            return (
              <div
                key={i}
                ref={el => (itemRefs.current[i] = el)}
                className={styles.timelineJobItem}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {/* Rail dot */}
                <div className={job.current ? styles.timelineDotActive : styles.timelineDotDefault} />

                {/* Experience card */}
                <div
                  className={`${styles.expCard} ${isHovered ? 'exp-card-hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Header row */}
                  <div className={styles.expCardTopRow}>
                    <div>
                      <h3 className={styles.expCompanyName}>{job.company}</h3>
                      <p className={styles.expRoleTitle}>{job.role}</p>
                    </div>
                    <div className={styles.expBadgeGroup}>
                      <span className={job.current ? styles.expPeriodPillActive : styles.expPeriodPill}>
                        <FiCalendar size={10} />
                        {job.period}
                      </span>
                      <span className={styles.expLocationPill}>
                        <FiMapPin size={10} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className={styles.expBulletList}>
                    {job.highlights.map((point, j) => (
                      <li key={j} className={styles.expBulletItem}>
                        <span className={styles.bulletDot} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className={styles.techTagsRow}>
                    {job.tech.map((t, j) => (
                      <span key={j} className={styles.techChip}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Resume;