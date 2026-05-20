import React from "react";
import styles from "./PortfolioCard.module.css";

import {
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

const PortfolioCard = () => {
  const techStack = [
    "REACT",
    "NODE.JS",
    "POSTGRESQL",
    "TAILWIND CSS",
    "PGADMIN",
  ];

  const projectImage =
    "/assets/img/eccomerce-web-app.png";

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

        {/* Card */}
        <div className={styles.card}>
          {/* Glow Effects */}
          <div className={styles.glowOne}></div>
          <div className={styles.glowTwo}></div>

          {/* Left Image */}
          <div className={styles.imageWrapper}>
            <img
              src={projectImage}
              alt="ShopEase"
              className={styles.projectImage}
            />
          </div>

          {/* Right Content */}
          <div className={styles.content}>
            {/* Tag */}
            <div className={styles.projectType}>
              Fullstack Web Application
            </div>

            {/* Title */}
            <h3 className={styles.projectTitle}>
              ShopEase E-Commerce
              <br />
              Web Application
            </h3>

            {/* Description */}
            <p className={styles.description}>
              A full-featured e-commerce platform
              with product listing, cart
              functionality, user authentication,
              and secure checkout. Built with
              modern MERN stack architecture for
              scalability and optimized
              performance.
            </p>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              {techStack.map((tech, index) => (
                <span key={index}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <button
                className={styles.primaryBtn}
              >
                <FiExternalLink size={18} />
                View Project
              </button>

              <button
                className={styles.secondaryBtn}
              >
                <FiGithub size={18} />
                View Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;