

import { useEffect, useState } from "react";

import {
  Code2,
  BrainCircuit,
  Database,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import styles from "./TechnicalExpertise.module.css";

const expertiseCards = [
  {
    icon: <Code2 size={20} />,
    title: "Full-Stack Web Development",
    description:
      "Engineering robust applications using MongoDB, Express, React, and Node.js. Optimized for speed, security, and enterprise scalability.",
    tags: ["MERN", "TYPESCRIPT"],
    iconClass: styles.cyanIcon,
  },

  {
    icon: <BrainCircuit size={20} />,
    title: "AI-Powered Solutions",
    description:
      "Integrating LLMs and generative AI into production environments. Building intelligent automation workflows and custom RAG pipelines.",
    tags: ["OPENAI", "LANGCHAIN"],
    iconClass: styles.greenIcon,
  },

  {
    icon: <Database size={20} />,
    title: "Architecture & Performance",
    description:
      "Cloud-native system design with AWS. Focusing on microservices, database optimization, and high-concurrency performance tuning.",
    tags: ["AWS", "K8S"],
    iconClass: styles.blueIcon,
  },
];

const pipelineSteps = [
  {
    number: "01",
    title: "PLAN",
    description:
      "Requirements & Tech Stack Strategy",
  },

  {
    number: "02",
    title: "DESIGN",
    description:
      "System Architecture & UX Blueprint",
  },

  {
    number: "03",
    title: "DEVELOP",
    description:
      "Iterative Coding & Unit Testing",
  },

  {
    number: "04",
    title: "DEPLOY",
    description:
      "CI/CD, Monitoring & Launch",
  },
];

export default function TechnicalExpertise() {
  const [activeStep, setActiveStep] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === pipelineSteps.length - 1
          ? 0
          : prev + 1
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      {/* Header */}

      <div className={styles.header}>
        <h2 className={styles.heading}>
          Technical <span>Expertise</span>
        </h2>

        <p className={styles.subText}>
          Architecting high-performance
          digital ecosystems with MERN and
          cutting-edge AI integrations.
        </p>
      </div>

      {/* Cards */}

      <div className={styles.cardGrid}>
        {expertiseCards.map(
          (card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div
                className={styles.gradientGlow}
              />

              <div
                className={`${styles.iconBox} ${card.iconClass}`}
              >
                {card.icon}
              </div>

              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>

              <p
                className={
                  styles.cardDescription
                }
              >
                {card.description}
              </p>

              <div className={styles.tags}>
                {card.tags.map(
                  (tag, idx) => (
                    <span
                      key={idx}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Pipeline */}

      <motion.div
        className={styles.pipelineContainer}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
      >
        {/* Header */}

        <div className={styles.pipelineHeader}>
          <h3>Development Pipeline</h3>

          <div className={styles.workflow}>
            <Sparkles size={14} />

            <span>AGILE WORKFLOW</span>
          </div>
        </div>

        {/* Steps */}

        <div className={styles.pipelineWrapper}>
          {/* Line */}

          <div className={styles.pipelineLine}>
            <motion.div
              className={styles.activeLine}
              animate={{
                width: `${
                  (activeStep + 1) * 25
                }%`,
              }}
              transition={{
                duration: 0.7,
              }}
            />
          </div>

          {/* Step Map */}

          {pipelineSteps.map(
            (step, index) => (
              <div
                key={index}
                className={
                  styles.pipelineStep
                }
              >
                {/* Node */}

                <motion.div
                  className={`${styles.node} ${
                    index <= activeStep
                      ? styles.activeNode
                      : ""
                  }`}
                  animate={
                    index === activeStep
                      ? {
                          scale: [
                            1,
                            1.12,
                            1,
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                  }}
                >
                  {/* Ring */}

                  {index === activeStep && (
                    <motion.div
                      className={
                        styles.progressRing
                      }
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                    />
                  )}

                  {step.number}
                </motion.div>

                <h4>{step.title}</h4>

                <p>{step.description}</p>
              </div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}