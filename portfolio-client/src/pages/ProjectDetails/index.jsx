// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { projectDetails } from '../../contants';
// import styles from './ProjectDetails.module.css';
// import { FiExternalLink, FiGithub } from 'react-icons/fi';

// const ProjectDetails = () => {
//   const { slug } = useParams();

//   const project = projectDetails[slug];

//   if (!project) {
//     return (
//       <section className={styles.detailsSection}>
//         <div className={styles.container}>
//           <h2 style={{ color: '#fff', textAlign: 'center', padding: '100px' }}>
//             Project Not Found
//           </h2>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className={styles.detailsSection}>
//       <div className={styles.container}>

//         {/* FULL WIDTH HEADER IMAGE */}
//         <div className={styles.headerImage}>
//           <img src={project.headerImage} alt={project.title} />
//           <div className={styles.headerImageOverlay} />
//         </div>

//         {/* TITLE SECTION */}
//         <div className={styles.titleSection}>
//           <div className={styles.titleLeft}>
//             <h1 className={styles.title}>{project.title}</h1>
//             <span className={styles.badge}>Fullstack Web Application</span>

//             <div className={styles.techStack}>
//               {project.techStack.map((tech, i) => (
//                 <span key={i} className={styles.techBadge}>
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className={styles.titleRight}>
//             <a
//               href={project.productionLink}
//               target="_blank"
//               rel="noreferrer"
//               className={styles.primaryBtn}
//             >
//               <FiExternalLink /> View Live Project
//             </a>

//             <a
//               href={project.githubLink}
//               target="_blank"
//               rel="noreferrer"
//               className={styles.secondaryBtn}
//             >
//               <FiGithub /> View Source Code
//             </a>
//           </div>
//         </div>

//         {/* CONTENT SECTION */}
//         <div className={styles.contentSection}>

//           {/* DESCRIPTION */}
//           <div className={styles.sectionCard}>
//             <div className={styles.sectionHeading}>
//               <div className={styles.accentBar} />
//               <h2 className={styles.sectionTitle}>Description</h2>
//             </div>
//             <p className={styles.description}>{project.fullDescription}</p>
//           </div>

//           {/* KEY FEATURES */}
//           <div className={styles.sectionCard}>
//             <div className={styles.sectionHeading}>
//               <div className={styles.accentBar} />
//               <h2 className={styles.sectionTitle}>Key Features</h2>
//             </div>
//             <ul className={styles.featuresList}>
//               {project.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>
//           </div>

//           {/* TECHNICAL DETAILS */}
//           <div className={styles.sectionCard}>
//             <div className={styles.sectionHeading}>
//               <div className={styles.accentBar} />
//               <h2 className={styles.sectionTitle}>Technical Details</h2>
//             </div>
//             <div className={styles.techGrid}>
//               <div className={styles.techItem}>
//                 <div className={styles.techItemLabel}>Duration</div>
//                 <div className={styles.techItemValue}>{project.duration}</div>
//               </div>
//               <div className={styles.techItem}>
//                 <div className={styles.techItemLabel}>Role</div>
//                 <div className={styles.techItemValue}>{project.role}</div>
//               </div>
//               <div className={styles.techItem}>
//                 <div className={styles.techItemLabel}>Status</div>
//                 <div className={styles.techItemValue}>{project.status}</div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* FOOTER */}
//         <div className={styles.footer}>
//           <p className={styles.footerText}>
//             © 2024 Vaishnavi Karil. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';
import { portfolioItems } from '../../contants';
import { FiFolder, FiCalendar, FiUser, FiCheckCircle } from 'react-icons/fi';
// import { portfolioItems } from '../../constants/constants';

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>

        {/* Back Button */}
        <Link to="/#portfolio" className={styles.backBtn} onClick={() => {
          const element = document.getElementById('portfolio');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}>
          ← Back to Portfolio
        </Link>

        <div className={styles.topSection}>

          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <span className={styles.badge}>Fullstack Web Application</span>

            <h1 className={styles.title}>{project.title}</h1>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.actions}>
              <a href={project.productionLink} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                Live Demo
              </a>

              <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
                Source Code
              </a>
            </div>

            {/* INFO GRID */}
            <div className={styles.infoGrid}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><FiFolder /></span>
                <span className={styles.infoLabel}>Category</span>
                <span className={styles.infoValue}>Fullstack</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><FiCalendar /></span>
                <span className={styles.infoLabel}>Duration</span>
                <span className={styles.infoValue}>{project.duration || 'Jan 2024 – Apr 2024'}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><FiUser /></span>
                <span className={styles.infoLabel}>Role</span>
                <span className={styles.infoValue}>Full Stack Developer</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}><FiCheckCircle /></span>
                <span className={styles.infoLabel}>Status</span>
                <span className={styles.infoValue}>Completed</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.imageWrapper}>
            <img src={project.image} alt={project.title} />
          </div>

        </div>

        {/* TECH STACK */}
        <div className={styles.section}>
          <h3>Tech Stack</h3>
          <div className={styles.techStack}>
            {project.techStack.map((tech, i) => (
              <span key={i} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className={styles.section}>
          <h3>Key Features</h3>
          <ul className={styles.features}>
            {project.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <div className={styles.section}>
          <h3>About This Project</h3>
          <p>{project.fullDescription}</p>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;