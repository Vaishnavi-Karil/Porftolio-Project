

import React from "react";
import styles from "./Contact.module.css";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.blurOne}></div>
      <div className={styles.blurTwo}></div>

      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.leftSide}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.heading}>Get in Touch</h2>

            <p className={styles.subHeading}>
              Have a project in mind or want to discuss a potential
              partnership? Let’s build something exceptional together.
            </p>
          </div>

          {/* Contact Cards */}

          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>vaishnavigkaril@gmail.com</p>
              <span>Available for inquiries 24/7</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <p>Pune, India / Remote</p>
              <span>IST Timezone (UTC +5:30)</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaClock />
            </div>

            <div>
              <h4>Office Hours</h4>
              <p>Mon — Fri: 09:00 - 19:00</p>
              <span>Sat: 10:00 - 14:00</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className={styles.rightSide}>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>FULL NAME</label>

              <input type="text" placeholder="John Doe" />
            </div>

            <div className={styles.inputGroup}>
              <label>EMAIL ADDRESS</label>

              <input type="email" placeholder="john@example.com" />
            </div>

            <div className={styles.inputGroup}>
              <label>SUBJECT</label>

              <select>
                <option>Project Inquiry</option>
                <option>Freelance Work</option>
                <option>Job Opportunity</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>MESSAGE</label>

              <textarea
                rows="6"
                placeholder="Tell me about your vision..."
              ></textarea>
            </div>

            <button className={styles.submitBtn}>
              Send Message
              <FaPaperPlane />
            </button>

            {/* <p className={styles.protocol}>
              {"<secured_transmission_protocol_active />"}
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;