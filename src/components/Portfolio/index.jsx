import React from "react";
import { styles } from "../../styles";

const Portfolio = ({
  portfolioFilter,
  filteredPortfolio,
  setPortfolioFilter,
}) => {
  return (
    <section id="portfolio" style={{ ...styles.section, ...styles.lightBg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Portfolio</h2>
        <div style={styles.portfolioFilters}>
          {["all", "app", "product", "branding", "books"].map((filter) => (
            <button
              key={filter}
              style={
                portfolioFilter === filter
                  ? styles.filterBtnActive
                  : styles.filterBtn
              }
              onClick={() => setPortfolioFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        <div style={styles.portfolioGrid}>
          {filteredPortfolio.map((item) => (
            <div key={item.id} style={styles.portfolioCard}>
              <div style={styles.portfolioImg}>Project {item.id}</div>
              <div style={styles.portfolioInfo}>
                <h4>{item.title}</h4>
                <p style={styles.portfolioDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
