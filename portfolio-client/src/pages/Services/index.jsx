// import React from "react";
// import styles from "./Services.module.css";

// const Services = ({ services }) => {
//   return (
//     <section id="services" className={styles.servicesSection}>
//       <div className={styles.servicesContainer}>
//         <h2 className={styles.sectionTitle}>Services</h2>
//         <div className={styles.servicesGrid}>
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div key={index} className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>
//                   <Icon />
//                 </div>
//                 <h4 className={styles.serviceTitle}>{service.title}</h4>
//                 <p className={styles.serviceDesc}>{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import styles from "./Services.module.css";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

// const services = [
//   {
//     title: "Full Stack Web Dev",
//     description:
//       "Comprehensive MERN solutions accelerated by GitHub Copilot and Cursor for rapid, high-quality development.",
//     icon: <FaCode />,
//   },
//   {
//     title: "Frontend Development",
//     description:
//       "Crafting interactive UI using React & Next.js optimized for pixel-perfect experiences.",
//     icon: <FaLaptopCode />,
//   },
//   {
//     title: "Backend API Dev",
//     description:
//       "Designing secure and high-performance Node.js APIs with scalable architecture.",
//     icon: <FaServer />,
//   },
//   {
//     title: "Responsive Design",
//     description:
//       "Ensuring flawless experiences across devices with mobile-first strategies.",
//     icon: <FaMobileAlt />,
//   },
//   {
//     title: "MERN Applications",
//     description:
//       "End-to-end expertise in MongoDB, Express, React, and Node.js applications.",
//     icon: <FaLayerGroup />,
//   },
//   {
//     title: "UI Optimization",
//     description:
//       "Enhancing interfaces for optimal performance and better core web vitals.",
//     icon: <FaRocket />,
//   },
// ];

const services = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable MERN stack applications with secure backend architecture, optimized APIs, and seamless frontend integration.",
    icon: <FaCode />,
  },
  {
    title: "Frontend Engineering",
    description:
      "Creating modern, responsive, and pixel-perfect interfaces using React.js, Next.js, JavaScript, and advanced UI libraries.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Backend & API Development",
    description:
      "Developing robust Node.js and Express APIs with authentication, database integration, and performance optimization.",
    icon: <FaServer />,
  },
  {
    title: "Responsive Web Design",
    description:
      "Designing mobile-first experiences that adapt perfectly across desktops, tablets, and smartphones.",
    icon: <FaMobileAlt />,
  },
  {
    title: "MERN Stack Applications",
    description:
      "Delivering end-to-end MongoDB, Express, React, and Node.js solutions with clean architecture and reusable components.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving application speed, accessibility, SEO, and Core Web Vitals for better user experience and scalability.",
    icon: <FaRocket />,
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.icon}>
              <FaCode />
            </div>

            <h2 className={styles.heading}>Services & Offerings</h2>
          </div>

          <p className={styles.subHeading}>
            Building scalable, modern, and user-focused digital experiences.
          </p>

          <div className={styles.divider}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.mainCard}>
              <div>
                <h3 className={styles.cardTitle}>
                  End-to-End Development Solutions
                </h3>

                {/* <p className={styles.cardDescription}>
                  I specialize in developing scalable and high-performance web
                  applications using the MERN stack. From intuitive frontend
                  experiences to secure backend systems, I focus on building
                  modern digital products that combine performance, usability,
                  and clean architecture.
                </p> */}

                <p className={styles.cardDescription}>
                  I specialize in developing scalable and high-performance web
                  applications using the MERN stack. From intuitive frontend
                  experiences to secure backend systems, I focus on building
                  modern digital products that combine performance, usability,
                  and clean architecture.

                  <br />
                  <br />

                  My expertise includes responsive frontend development,
                  RESTful API integration, authentication systems, and scalable
                  deployment workflows for modern web applications.
                </p>
              </div>

              <div className={styles.tags}>
                <span>Architecture</span>
                <span className={styles.activeTag}>Performance</span>
                <span>Security</span>
              </div>
            </div>
            {/* <div className={styles.stepperCard}>
              <div className={styles.stepperWrapper}>
                <div className={styles.stepperLine}></div>

                <div className={styles.stepItem}>
                  <div className={styles.activeStep}></div>
                  <span>PLAN</span>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.step}></div>
                  <span>DESIGN</span>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.step}></div>
                  <span>DEVELOP</span>
                </div>

                <div className={styles.stepItem}>
                  <div className={styles.step}></div>
                  <span>DEPLOY</span>
                </div>
              </div>
            </div> */}
          </div>



          <div className={styles.rightSection}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.smallIcon}>
                  {service.icon}
                </div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;