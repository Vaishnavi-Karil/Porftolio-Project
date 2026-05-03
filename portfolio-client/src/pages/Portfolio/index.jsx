import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';

const Portfolio = ({ filteredPortfolio }) => {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>

        {filteredPortfolio.map((item) => (
          <div key={item.id} className={styles.featuredCard}>

            {/* LEFT IMAGE */}
            <div className={styles.featuredImage}>
              <img src={item.image} alt={item.title} />
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.featuredContent}>
              <span className={styles.badge}>Fullstack Web Application</span>

              <h2 className={styles.featuredTitle}>{item.title}</h2>

              <p className={styles.featuredDesc}>{item.description}</p>

              <div className={styles.techStack}>
                {item.techStack.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.actions}>
                <Link
                  to={`/project/${item.slug}`}
                  className={styles.primaryBtn}
                >
                  View Project
                </Link>

                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryBtn}
                >
                  View Source Code
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;