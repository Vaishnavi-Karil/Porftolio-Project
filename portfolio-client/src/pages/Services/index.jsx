import React from "react";
import styles from "./Services.module.css";

const Services = ({ services }) => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Icon />
                </div>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;