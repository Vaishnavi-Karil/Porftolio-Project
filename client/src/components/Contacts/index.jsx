import React from "react";
import { styles } from "../../styles";

const Contact = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <section id="contact" style={{ ...styles.section, ...styles.lightBg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <div style={styles.contactGrid}>
          <div>
            <div style={styles.infoCard}>
              <h4>📍 Address</h4>
              <p>Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
            </div>
            <div style={styles.infoCard}>
              <h4>📞 Call Us</h4>
              <p>+971 528008661</p>
            </div>
            <div style={styles.infoCard}>
              <h4>✉️ Email Us</h4>
              <p>vaishnavigkariluae@gmail.com</p>
            </div>
          </div>
          <div style={styles.contactForm}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              style={styles.input}
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              style={{ ...styles.input, ...styles.textarea }}
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button style={styles.submitBtn} onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
