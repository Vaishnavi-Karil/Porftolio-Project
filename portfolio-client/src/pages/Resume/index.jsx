import { motion } from "framer-motion";

import {
  Terminal,
  Stethoscope,
  Settings,
  Share2,
  GraduationCap,
} from "lucide-react";

import styles from "./Timeline.module.css";
import ExperienceHeroCard from "../../components/Card";
import Divider from "../../components/Divider";

const experiences = [
  {
    company: "NeoSOFT",
    role: "Senior Software Developer",
    period: "2025 - PRESENT",
    description:
      "Architecting scalable Next.js applications, enterprise ERP systems, and optimizing MySQL database performance for high-traffic production environments.",
    icon: Terminal,
    side: "left",
  },
  {
    company: "Axonic Health",
    role: "Software Developer",
    period: "2022 - 2024",
    description:
      "Developed healthcare dashboards, hospital management systems, and real-time patient data workflows using MERN stack technologies.",
    icon: Stethoscope,
    side: "right",
  },
  {
    company: "Phixman Tech",
    role: "Software Developer",
    period: "2021 - 2022",
    description:
      "Built workflow automation systems and optimized repair service management applications with advanced scheduling logic.",
    icon: Settings,
    side: "left",
  },
  {
    company: "Infobyd Solution",
    role: "Software Developer",
    period: "2020 - 2021",
    description:
      "Created real-time bidding and auction systems using WebSocket architecture and dynamic frontend synchronization.",
    icon: Share2,
    side: "right",
  },
];

export default function TimelinePage() {
  return (
    <section className={styles.container}>
      {/* Background Glow */}
      <div className={styles.backgroundGlow} />

      {/* Header */}

      <ExperienceHeroCard/>
      <Divider/>


      {/* Timeline */}
      <div className={styles.timelineWrapper}>
        {/* Vertical Line */}
        <div className={styles.verticalLine}>
          <div className={styles.flowLine} />
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`${styles.row} ${
                exp.side === "left"
                  ? styles.rowLeft
                  : styles.rowRight
              }`}
              initial={{
                opacity: 0,
                y: 120,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              {/* Node */}
              <motion.div
                className={styles.nodeIndicator}
                whileInView={{
                  scale: [0.8, 1.4, 1],
                  opacity: [0.3, 1, 1],
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
              />

              {/* Card */}
              <motion.div
                className={styles.card}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 16,
                }}
              >
                <div className={styles.cardHeader}>
                  <exp.icon
                    size={18}
                    className={styles.cardIcon}
                  />

                  <span className={styles.period}>
                    {exp.period}
                  </span>
                </div>

                <h3 className={styles.companyName}>
                  {exp.company}
                </h3>

                <p className={styles.role}>
                  {exp.role}
                </p>

                <p className={styles.cardDescription}>
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}