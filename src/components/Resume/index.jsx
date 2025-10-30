import React from "react";
import { styles } from "../../styles";

const Resume = () => {
  return (
    <section id="resume" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Resume</h2>
        <div style={styles.summaryContainer}>
          <p style={styles.paragraph}>
            Experienced <strong>MERN Stack Developer</strong> with 3 years of
            expertise in building scalable web applications using React.js,
            Node.js, Express, and MongoDB. Proficient in AWS, RESTful APIs, and
            frontend frameworks like Material UI and Tailwind CSS. Passionate
            about clean code, optimized performance, and user-centric design.
          </p>
        </div>
        <div style={styles.resumeGrid}>
          <div>
            <h3 style={styles.resumeSubtitle}>Professional Experience</h3>

            <div style={styles.resumeItem}>
              <h4>Senior Software Developer / MERN Stack Developer</h4>
              <span style={styles.badge}>2025 - Present</span>
              <p style={styles.italic}>NeoSOFT Private Limited, Pune</p>
              <ul style={styles.list}>
                <li>
                  Developed a full-stack Blog Application using Next.js with
                  MySQL database and mysql2 npm package and implemented CRUD
                  operations, user authentication, and responsive UI
                </li>
                <li>
                  Built a Kanban Application using React.js and JSON Server for
                  backend data
                </li>
                <li>
                  Implemented drag-and-drop task management and dynamic task
                  updates in the Kanban app
                </li>
                <li>
                  Managed state efficiently in both applications to ensure
                  smooth UI updates and data consistency
                </li>
                <li>
                  Gained hands-on experience with JSON Server, build backend
                  APIs for frontend development
                </li>
              </ul>
            </div>

            <div style={styles.resumeItem}>
              <h4>Software Developer / Full Stack React & Node Developer </h4>
              <span style={styles.badge}>2022 - 2024</span>
              <p style={styles.italic}>Axonic Health Pvt. Ltd., Pune</p>
              <ul style={styles.list}>
                <li>
                  Developed frontend UI using React.js and Material UI for
                  hospital resource management dashboards
                </li>
                <li>
                  Implemented REST APIs and API integration using Node.js,
                  Express, PostgreSQL, and pg for backend functionality
                </li>
                <li>
                  Built interactive dashboards with ApexCharts to generate
                  reports and visualize hospital resource and business data
                </li>
                <li>
                  Managed application state with Redux Toolkit and React Query
                  and implemented role-based access control for secure data
                  handling
                </li>
                <li>
                  Handled hospital business features: patient records,
                  appointments, doctor availability, and dashboard-based
                  reporting for decision-making.
                </li>
              </ul>
            </div>

            <div style={styles.resumeItem}>
              <h4>Full Stack Developer (React.js & Admin Dashboard)</h4>
              <span style={styles.badge}>2021 - 2022</span>
              <p style={styles.italic}>Phixman Technologies Pvt. Ltd., Pune</p>
              <ul style={styles.list}>
                <li>
                  Developed and maintained Admin Dashboard for Phixman product,
                  managing sub-admins, sub-providers, and customer services
                </li>
                <li>
                  Handled UI development and API integration, implementing
                  features like time scheduling, workflow automation, and
                  real-time notifications
                </li>
                <li>
                  Managed service delivery workflow: Assigning super-providers,
                  handling device sales, second-hand purchases, repairs, and
                  multi-category electronics with 3-month warranty
                </li>
                <li>
                  Implemented invoice management, revenue sharing, and
                  multi-role permissions for sub-providers, customers, and
                  super-providers
                </li>
                <li>
                  Monitored service quality and feedback, enhancing operational
                  efficiency, feature improvements, and overall customer
                  satisfaction
                </li>
              </ul>
            </div>

            <div style={styles.resumeItem}>
              <h4>
                Software Developer / React Native Mobile Application Developer
              </h4>
              <span style={styles.badge}>2020 - 2021</span>

              <p style={styles.italic}>
                Infobyd Software Solution Pvt. Ltd., Indore
              </p>

              <ul style={styles.list}>
                <li>
                  Worked on the Stackholder project, developing two dashboards:
                  Web application for Admin and Mobile application for Users
                </li>
                <li>
                  Designed and implemented complete UI for the mobile
                  application, ensuring responsive and user-friendly layouts
                </li>
                <li>
                  Implemented form handling, validation, authentication, and
                  authorization for login, signup, auctions, bids, and
                  transactions
                </li>
                <li>
                  Developed auction and direct sell features, including bid
                  management, transaction processing, share sales, and real-time
                  notifications
                </li>
                <li>
                  Managed document upload, approval workflows, role-based
                  permissions, and collaborated with stakeholders to ensure
                  smooth workflow across dashboards
                </li>
              </ul>
            </div>

            <div style={styles.resumeItem}>
              <h4>Intern or Trainee Developer / React.js Web Application</h4>
              <span style={styles.badge}>2019 - 2020</span>
              <p style={styles.italic}>Asprarrow Technologies, Indore</p>
              <ul style={styles.list}>
                <li>
                  Assisted in full-stack application development using
                  JavaScript and Node.js
                </li>
                <li>
                  Created basic RESTful APIs and integrated frontend modules
                </li>
                <li>
                  Learned agile development processes and version control with
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
