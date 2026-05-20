// import React from 'react';
// import styles from './Education.module.css';

// const Education = () => {
//   return (
//     <section id='education' className={styles.educationSection}>
//       <div className={styles.educationContainer}>
//         <h2 className={styles.sectionTitle}>Education</h2>

//         <div className={styles.educationGrid}>
//           <div>
//             <div className={styles.resumeItem}>
//               <h4>M.Sc IT (Master of Science in Information Technology)</h4>
//               <span className={styles.badge}>2018 - 2020</span>
//               <p className={styles.italic}>
//                 DAVV University, Indore, Madhya Pradesh
//               </p>
//               <p className={styles.descText}>
//                 Focused on advanced software development, database management,
//                 and web technologies.
//               </p>
//             </div>
//             <div className={styles.resumeItem}>
//               <h4>B.Sc CS (Bachelor of Science in Computer Science)</h4>
//               <span className={styles.badge}>2016 - 2018</span>
//               <p className={styles.italic}>
//                 DAVV University, Indore, Madhya Pradesh
//               </p>
//               <p className={styles.descText}>
//                 Core studies in programming fundamentals and computer
//                 architecture.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from 'react';

import {
  FiBook,
  FiCode,
  FiAward,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi';

import styles from './Education.module.css';

const coursework = [
  'Data Structures',
  'Operating Systems',
  'Database Management',
  'Computer Networks',
  'Theory of Computation',
  'System Design',
];

const highlights = [
  {
    icon: FiTrendingUp,
    title: 'Top Performer',
    description:
      'Maintained strong academic performance with consistent technical growth.',
  },

  {
    icon: FiCode,
    title: 'Hands-on Development',
    description:
      'Built real-world MERN stack applications and scalable frontend systems.',
  },

  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description:
      'Worked on collaborative academic and practical software projects.',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className={styles.educationSection}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleIcon}>
              <FiBook size={22} />
            </div>

            <div>
              <h2 className={styles.title}>
                Education &
                <span> Academic Journey</span>
              </h2>

              <p className={styles.subtitle}>
                Tracing my technical foundation and
                academic achievements.
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
     <div className={styles.educationCard}>
  <div className={styles.glow} />

  <div className={styles.topSection}>
    {/* Left */}
    <div className={styles.leftContent}>
      <div className={styles.yearBadge}>
        2019 — 2021
      </div>

      <h3 className={styles.degree}>
        Master of Computer Applications (MCA)
      </h3>

      <p className={styles.college}>
        Devi Ahilya Vishwavidyalaya, Indore
      </p>
    </div>

    {/* Right */}
    <div className={styles.cgpaCard}>
      <span>CGPA</span>

      <h2>6.5</h2>
    </div>
  </div>

  {/* Content */}
  <div className={styles.contentGrid}>
    {/* Expertise */}
    <div className={styles.infoBlock}>
      <div className={styles.infoIcon}>
        <FiAward />
      </div>

      <div>
        <h4>Core Technical Expertise</h4>

        <p>
          Focused on software engineering,
          full-stack web development,
          database management, cloud
          technologies, and scalable
          application architecture.
        </p>
      </div>
    </div>

    {/* Coursework */}
    <div className={styles.infoBlock}>
      <div className={styles.infoIcon}>
        <FiCode />
      </div>

      <div>
        <h4>Key Coursework</h4>

        <div className={styles.coursework}>
          {[
            "Data Structures",
            "Database Management",
            "Web Development",
            "Software Engineering",
            "Cloud Computing",
            "Computer Networks",
          ].map((item, index) => (
            <span key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

{/* Bachelor Education Card */}

<div className={styles.educationCard}>
  <div className={styles.glow} />

  <div className={styles.topSection}>
    {/* Left */}
    <div className={styles.leftContent}>
      <div className={styles.yearBadge}>
        2016 — 2019
      </div>

      <h3 className={styles.degree}>
        Bachelor of Science in Information Technology
      </h3>

      <p className={styles.college}>
        Devi Ahilya Vishwavidyalaya, Indore
      </p>
    </div>

    {/* Right */}
    <div className={styles.cgpaCard}>
      <span>CGPA</span>

      <h2>6.5</h2>
    </div>
  </div>

  {/* Content */}
  <div className={styles.contentGrid}>
    {/* Expertise */}
    <div className={styles.infoBlock}>
      <div className={styles.infoIcon}>
        <FiAward />
      </div>

      <div>
        <h4>Core Technical Expertise</h4>

        <p>
          Built strong foundations in
          programming, information systems,
          database concepts, networking, and
          modern web technologies.
        </p>
      </div>
    </div>

    {/* Coursework */}
    <div className={styles.infoBlock}>
      <div className={styles.infoIcon}>
        <FiCode />
      </div>

      <div>
        <h4>Key Coursework</h4>

        <div className={styles.coursework}>
          {[
            "Programming Fundamentals",
            "Object-Oriented Programming",
            "Database Systems",
            "Computer Networks",
            "Operating Systems",
            "Web Technologies",
          ].map((item, index) => (
            <span key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Highlights */}
        <div className={styles.highlightsGrid}>
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={styles.highlightCard}
              >
                <div
                  className={styles.highlightIcon}
                >
                  <Icon size={20} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;