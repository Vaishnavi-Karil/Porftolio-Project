import React from "react";
import styles from "./PortfolioCard.module.css";
import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const Portfolio = ({ filteredPortfolio }) => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Portfolio
          </h2>

          <div className={styles.line}></div>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {filteredPortfolio.map((project, index) => (
            <motion.div 
              key={project.id || index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glow Effects */}
              <div className={styles.glowOne}></div>
              <div className={styles.glowTwo}></div>

              {/* Left Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </div>

              {/* Right Content */}
              <div className={styles.content}>
                {/* Tag */}
                <div className={styles.projectType}>
                  {project.category === 'fullstack' ? 'Fullstack Web Application' : project.category}
                </div>

                {/* Title */}
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={styles.description}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className={styles.buttonGroup}>
                  <a
                    href={project.productionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryBtn}
                  >
                    <FiExternalLink size={18} />
                    View Project
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                  >
                    <FiGithub size={18} />
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;