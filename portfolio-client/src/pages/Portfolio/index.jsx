import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = ({
  portfolioFilter,
  filteredPortfolio,
  setPortfolioFilter,
}) => {
  return (
    <section id='portfolio' className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>
        <div className={styles.portfolioFilters}>
          {['all', 'web', 'fullstack', 'mobile', 'backend'].map((filter) => (
            <button
              key={filter}
              className={portfolioFilter === filter ? styles.filterBtnActive : styles.filterBtn}
              onClick={() => setPortfolioFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.portfolioGrid}>
          {filteredPortfolio.map((item) => (
            <div key={item.id} className={styles.portfolioCard}>
              <div className={styles.portfolioInfo}>
                <a
                  href={item.productionLink}
                  target='_blank'
                  title='View Live Project'
                  className={styles.portfolioTitle}
                >
                  <h4>{item.title}</h4>
                  <span>
                    <svg
                      data-testid='geist-icon'
                      height='16'
                      strokeLinejoin='round'
                      viewBox='0 0 16 16'
                      width='16'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </span>
                </a>

                <p className={styles.portfolioDesc}>{item.description}</p>

                <a
                  href={item.githubLink}
                  target='_blank'
                  className={styles.githubLink}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.44 7.86 10.98.57.1.78-.25.78-.55v-2.05c-3.2.7-3.88-1.55-3.88-1.55-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.72 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.11 0 4.44-2.69 5.41-5.25 5.7.41.36.77 1.08.77 2.18v3.24c0 .3.2.65.79.54C20.71 21.44 24 17.1 24 12c0-6.27-5.23-11.5-12-11.5z' />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;