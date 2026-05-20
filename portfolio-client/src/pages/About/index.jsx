// import React from "react";
// import styles from "./About.module.css";

// const highlights = [
//   { label: "3+ Years Experience", icon: "💼" },
//   { label: "MERN Stack Developer", icon: "⚛️" },
//   { label: "Open to Relocation", icon: "🌍" },
// ];

// const About = () => {
//   return (
//     <section id="about" className={styles.aboutSection}>
//       <div className={styles.aboutContainer}>
//         <h2 className={styles.sectionTitle}>About</h2>
//         <div className={styles.aboutGrid}>
//           <div className={styles.aboutImage}>
//             <img
//               src="/assets/img/Gemini_profile_photo.png"
//               alt="Vaishnavi Karil - Profile"
//               className={styles.aboutProfileImg}
//             />
//           </div>
//           <div className={styles.aboutContent}>
//             {/* Section 1: Heading */}
//             <div className={styles.aboutSectionBlock}>
//               <h3 className={styles.aboutHeading}>
//                 Fullstack MERN Developer & Web Application Developer
//               </h3>
//             </div>

//             {/* Section 2: Description */}
//             <div className={styles.aboutSectionBlock}>
//               <p className={styles.aboutDescription}>
//                 Fullstack MERN Developer with 3+ years of experience in building
//                 scalable, responsive web applications using React.js, Next.js,
//                 Node.js, and MongoDB. Currently based in Pune, Maharashtra and
//                 open to relocate anywhere in India and overseas.
//               </p>
//             </div>

//             {/* Section 3: Key Highlights */}
//             <div className={styles.aboutSectionBlock}>
//               <h4 className={styles.aboutSectionTitle}>Key Highlights</h4>
//               <div className={styles.highlightsGrid}>
//                 {highlights.map((item, index) => (
//                   <div key={index} className={styles.highlightBadge}>
//                     <span className={styles.highlightIcon}>{item.icon}</span>
//                     <span className={styles.highlightText}>{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Section 4: Contact Info */}
//             <div className={styles.aboutSectionBlock}>
//               <h4 className={styles.aboutSectionTitle}>Contact Information</h4>
//               <div className={styles.contactGrid}>
//                 <div>
//                   <p className={styles.contactItem}>
//                     <strong className={styles.contactLabel}>Phone:</strong>{" "}
//                     <span className={styles.contactValue}>+91 9111706639</span>
//                   </p>
//                   <p className={styles.contactItem}>
//                     <strong className={styles.contactLabel}>Email:</strong>{" "}
//                     <span className={styles.contactValue}>vaishnavigkaril@gmail.com</span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className={styles.contactItem}>
//                     <strong className={styles.contactLabel}>Location:</strong>{" "}
//                     <span className={styles.contactValue}>Pune, Maharashtra</span>
//                   </p>
//                   <p className={styles.contactItem}>
//                     <strong className={styles.contactLabel}>Status:</strong>{" "}
//                     <span className={styles.contactValue}>Immediate Joiner</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import styles from "./About.module.css";

import {
  FaMapMarkerAlt,
  FaRocket,
  FaDownload,
  FaArrowRight,
  FaChartLine,
  FaReact,
  FaRobot,
} from "react-icons/fa";
// import profileImage from '/assets/img/setting_profile_img.png';
import profileImage from '/assets/img/image_about.png';
// import profileImage from '/assets/img/profile_image.png';


const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* BACKGROUND EFFECTS */}

      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        {/* LEFT IMAGE SIDE */}

        <div className={styles.imageWrapper}>
          <div className={styles.circleOne}></div>

          <div className={styles.circleTwo}></div>

          <div className={styles.imageCard}>
            {/* <div className={styles.topTag}>
              NEXT_JS.CORE
            </div>

            <div className={styles.bottomTag}>
              MONGODB.DBA
            </div> */}

            <img
              src= {profileImage}
              alt="profile"
            />
          </div>

          {/* FLOAT CARD */}

          {/* <div className={styles.floatCard}>
            <p>BUILD CAPACITY</p>

            <div className={styles.progress}></div>

            <div className={styles.progressBlue}></div>

            <div className={styles.progressGreen}></div>
          </div> */}
        </div>

        {/* RIGHT CONTENT */}

        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>

            AVAILABLE FOR HIRE
          </div>

          <h1 className={styles.heading}>
            Senior MERN Developer
            <br />
            <span>& AI Architect</span>
          </h1>

          <p className={styles.description}>
            3+ years of experience building scalable,
            responsive web applications using
            <span> React.js</span>,
            <span> Next.js</span>,
            <span> Node.js</span>, and
            <span> MongoDB</span>.
            <br />
            Engineering performance-first digital
            ecosystems through an AI-augmented workflow
            with <span>Claude</span>,
            <span> Copilot</span>, and
            <span> Stitch</span>.
          </p>

          {/* FEATURE CARDS */}

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <FaChartLine className={styles.featureIcon} />

              <h4>3+ Years Experience</h4>

              <p>Full-stack mastery</p>
            </div>

            <div className={styles.featureCard}>
              <FaReact className={styles.featureIcon} />

              <h4>MERN Specialist</h4>

              <p>High-perf ecosystems</p>
            </div>

            <div className={styles.featureCard}>
              <FaRobot className={styles.featureIcon} />

              <h4>AI-Workflow Optimized</h4>

              <p>Modern dev velocity</p>
            </div>
          </div>

          {/* INFO */}

          <div className={styles.infoRow}>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt />

              <span>
                Pune,
                <br />
                Maharashtra
              </span>
            </div>

            <div className={styles.infoItem}>
              <FaRocket />

              <span>
                Open to Relocation &
                <br />
                Immediate Joiner
              </span>
            </div>
          </div>

          {/* BUTTONS */}

          {/* <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              VIEW MY WORK

              <FaArrowRight />
            </button>

            <button className={styles.secondaryBtn}>
              DOWNLOAD RESUME

              <FaDownload />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;