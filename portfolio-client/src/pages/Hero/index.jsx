// import React from "react";
// import styles from "./Hero.module.css";
// import Typewriter from "../../components/Typewriter";

// const Hero = () => {
//   return (
//     <section id="hero" className={styles.heroSection}>
//       <div className={styles.heroBgOverlay}></div>
//       <div className={styles.heroContent}>
//         <h1 className={styles.heroTitle}>Vaishnavi Karil</h1>
//         <p className={styles.heroSubtitle}>
//           Creative <Typewriter />
//         </p>
//       </div>
//       <div className={styles.heroImageContainer}>
//         <img
//           src="/assets/img/Gemini_profile_photo.png"
//           alt="Vaishnavi Karil - Profile"
//           className={styles.heroImage}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import styles from "./Hero.module.css";
import profileImage from '/assets/img/profile_image.jpg';
// import profileImage from '/assets/img/setting_profile_img.png';
const Hero= () => {
  return (
    <section id="hero" className={styles.homeSection}>
      <div className={styles.blur}></div>

      {/* TOP BAR */}

      {/* <div className={styles.topBar}>
        <div className={styles.logo}>
          NEXUS_TERMINAL_V1.0
        </div>

        <div className={styles.menuIcon}>
          ☰
        </div>
      </div> */}

      {/* MAIN CONTENT */}

      <div className={styles.container}>
       

        {/* RIGHT CONTENT */}

        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>

            AVAILABLE FOR INNOVATION
          </div>

          <h1 className={styles.heading}>
            Senior <span>MERN</span> Developer
          </h1>

          <div className={styles.subTitleWrapper}>
            <h2 className={styles.subTitle}>
              AI-Augmented Engineering
            </h2>

            <div className={styles.line}></div>
          </div>

          <p className={styles.description}>
            Architecting high-performance digital ecosystems
            through modern JavaScript paradigms and integrated
            AI workflows. Specializing in scalable React
            architectures and secure Node.js infrastructures
            optimized by <span>Claude</span>,{" "}
            <span>Copilot</span>, and{" "}
            <span>Stitch</span>.
          </p>

          {/* BUTTONS */}

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Explore Tech Stack
            </button>

            <button className={styles.secondaryBtn}>
              View Portfolio
            </button>
          </div>

          {/* STATS */}

          <div className={styles.stats}>
            <div>
              <h3>50+</h3>
              <p>DEPLOYMENTS</p>
            </div>

            <div>
              <h3>5k+</h3>
              <p>GIT COMMITS</p>
            </div>

            <div>
              <h3>AI+</h3>
              <p>WORKFLOW OPTIMIZED</p>
            </div>
          </div>
        </div>

 {/* LEFT IMAGE CARD */}

        <div className={styles.imageCard}>
          <div className={styles.imageOverlay}></div>

          <img
            src={profileImage}
            alt="profile"
          />

          <div className={styles.tags}>
            <span>Full-Stack</span>

            <span className={styles.activeTag}>
              System Architect
            </span>
          </div>
        </div>

      </div>

      {/* FOOTER */}

      {/* <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <span>STATUS: TERMINAL STABLE</span>

          <span>
            © 2024 NEXUS TERMINAL | AI-AUGMENTED ENGINEERING
          </span>
        </div>

        <div className={styles.footerRight}>
          <a href="/">GitHub</a>
          <a href="/">LinkedIn</a>
          <a href="/">Twitter</a>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;