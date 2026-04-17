import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { styles } from '../../styles';
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
    <section id='contact' style={{ ...styles.section, ...styles.lightBg }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <div style={styles.contactGrid}>
          <div>
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} style={styles.infoCard}>
                  <h4
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Icon /> {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div style={styles.contactForm}>
            <input
              style={styles.input}
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              style={styles.input}
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              style={styles.input}
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              style={{ ...styles.input, ...styles.textarea }}
              name='message'
              placeholder='Message'
              rows='6'
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
