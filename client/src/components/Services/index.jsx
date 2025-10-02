import React from "react";
import { styles } from "../../styles";

const Services = ({ services }) => {
  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Services</h2>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceIcon}>⚙️</div>
              <h4 style={styles.serviceTitle}>{service.title}</h4>
              <p style={styles.serviceDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
