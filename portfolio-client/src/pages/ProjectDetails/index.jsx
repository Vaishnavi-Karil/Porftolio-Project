import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectDetails } from '../../constants';
import styles from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projectDetails[slug];

  if (!project) {
    return <h2 className={styles.notFound}>Project Not Found</h2>;
  }

  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>

        {/* BACK BUTTON */}
        <Link to="/portfolio" className={styles.backBtn}>
          ← Back to Portfolio
        </Link>

        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{project.title}</h1>

            <span className={styles.badge}>
              Fullstack Web Application
            </span>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.techStack}>
              {project.techStack.map((tech, i) => (
                <span key={i} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className={styles.actions}>
            <a
              href={project.productionLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryBtn}
            >
              Live Demo
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryBtn}
            >
              View Code
            </a>
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className={styles.mainImage}>
          <img src={project.image} alt={project.title} />
        </div>

        {/* CONTENT GRID */}
        <div className={styles.grid}>

          {/* LEFT SIDE */}
          <div className={styles.left}>

            <div className={styles.card}>
              <h3>Project Overview</h3>
              <p>{project.fullDescription}</p>
            </div>

            <div className={styles.card}>
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>

            <div className={styles.infoCard}>
              <h4>Project Info</h4>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </div>

            {/* GALLERY */}
            <div className={styles.gallery}>
              {project.gallery.map((img, i) => (
                <img key={i} src={img} alt="preview" />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;