

import React from "react";
import styles from "./PortfolioProject.module.css";
const projectImage = "/assets/img/eccomerce-web-app.png";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiClock,
  FiUser,
  FiGrid,
  FiShield,
  FiZap,
  FiDatabase,
  FiSmartphone,
} from "react-icons/fi";

const techStack = [
  "React 18",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Stripe API",
];

const features = [
  {
    icon: <FiShield size={22} />,
    title: "Secure Auth",
    description:
      "JWT-based multi-factor authentication with encrypted sessions.",
  },
  {
    icon: <FiZap size={22} />,
    title: "99.9% Performance",
    description:
      "Sub-200ms API response times via optimized query indexing.",
  },
  {
    icon: <FiDatabase size={22} />,
    title: "Scalable Schema",
    description:
      "Relational architecture designed for million-row datasets.",
  },
  {
    icon: <FiSmartphone size={22} />,
    title: "Fully Responsive",
    description:
      "Adaptive UI layouts for mobile, tablet, and ultra-wide screens.",
  },
];

const PortfolioProject = () => {
  return (
    <section className={styles.projectSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <button className={styles.backBtn}>
              <FiArrowLeft size={14} />
              Back to Gallery
            </button>

            <h1 className={styles.title}>ShopEase E-Commerce</h1>
          </div>

          <div className={styles.badges}>
            <span>FULLSTACK_WEB_APP</span>
            <span>2024_Q1</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* Info Cards */}
            <div className={styles.infoTags}>
              <div className={styles.infoCard}>
                <FiGrid size={16} />
                <span>Fullstack</span>
              </div>

              <div className={styles.infoCard}>
                <FiClock size={16} />
                <span>4 Months</span>
              </div>

              <div className={styles.infoCard}>
                <FiUser size={16} />
                <span>Lead Developer</span>
              </div>
            </div>

            {/* About */}
            <div className={styles.about}>
              <p className={styles.sectionLabel}>
                ABOUT THIS PROJECT
              </p>

              <p>
                ShopEase is an enterprise-grade e-commerce
                solution engineered for peak performance and
                high user concurrency. It bridges the gap
                between complex backend architecture and a
                fluid, intuitive storefront.
              </p>

              <p>
                The platform features a modular React
                frontend integrated with a robust
                Node/Express API, ensuring seamless state
                management across the shopping journey —
                from product discovery to secure payment
                processing.
              </p>

              {/* Tech Stack */}
              <div className={styles.techStack}>
                {techStack.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.actions}>
              <button className={styles.primaryBtn}>
                <FiExternalLink size={18} />
                Live Preview
              </button>

              <button className={styles.secondaryBtn}>
                <FiGithub size={18} />
                View Repo
              </button>
            </div>
          </div>

          {/* Right Preview */}
          <div className={styles.previewCard}>
            <div className={styles.browserHeader}>
              <div className={styles.dots}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.urlBar}>
                https://shopease-prod.app/v2
              </div>
            </div>

            <img
              src={projectImage}
              alt="Project Preview"
              className={styles.previewImage}
            />
          </div>
        </div>

        {/* Features */}
        <div className={styles.featuresGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Blur */}
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>
    </section>
  );
};

export default PortfolioProject;