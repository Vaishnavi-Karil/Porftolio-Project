// ExperienceHeroCard.jsx

import {
  MapPin,
  CircleCheckBig,
  Globe,
} from "lucide-react";

import styles from "./ExperienceHeroCard.module.css";

export default function ExperienceHeroCard() {
  return (
    <section className={styles.wrapper}>
      {/* Heading */}
      <div className={styles.headingContainer}>
        <p className={styles.subTitle}>
          {/* PROFESSION */}
          Professional
        </p>

        <h2 className={styles.heading}>
          Experience
        </h2>
      </div>

      {/* Card */}
      <div className={styles.card}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Senior MERN Stack Developer
          </h3>

          <p className={styles.description}>
            I build scalable, high-performance web
            applications that users love and
            businesses rely on.
            <br />
            <br />
            With expertise spanning React.js,
            Next.js, Node.js, PostgreSQL, and AWS,
            I bridge the gap between elegant
            frontend experiences and resilient
            backend systems — delivering solutions
            that are fast, maintainable, and built
            for growth.
          </p>

          {/* Tags */}
          <div className={styles.tags}>
            <div
              className={`${styles.tag} ${styles.blueTag}`}
            >
              <MapPin size={12} />

              <span>PUNE, INDIA</span>
            </div>

            <div
              className={`${styles.tag} ${styles.greenTag}`}
            >
              <CircleCheckBig size={12} />

              <span>IMMEDIATE JOINER</span>
            </div>

            <div
              className={`${styles.tag} ${styles.blueTag}`}
            >
              <Globe size={12} />

              <span>OPEN TO RELOCATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}