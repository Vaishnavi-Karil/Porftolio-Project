import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './Contacts.module.css';
import { contact } from '../../contants';

const Contact = ({ formData, handleInputChange, handleSubmit }) => {
  const infoItems = [
    {
      icon: FiMapPin,
      title: 'Address',
      text: contact.address,
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      text: contact.phone,
    },
    {
      icon: FiMail,
      title: 'Email Us',
      text: contact.email,
    },
  ];

  return (
    <section id='contact' className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactGrid}>
          <div>
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={styles.infoCard}>
                  <h4 className={styles.infoTitle}>
                    <Icon /> {item.title}
                  </h4>
                  <p className={styles.infoText}>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.contactForm}>
            <input
              className={styles.input}
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className={styles.input}
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className={styles.input}
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name='message'
              placeholder='Message'
              rows='6'
              value={formData.message}
              onChange={handleInputChange}
            />
            <button className={styles.submitBtn} onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;