// import React from 'react';
// import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
// import styles from './Contacts.module.css';
// import { contact } from '../../contants';

// const Contact = ({ formData, handleInputChange, handleSubmit }) => {
//   const infoItems = [
//     {
//       icon: FiMapPin,
//       title: 'Address',
//       text: contact.address,
//     },
//     {
//       icon: FiPhone,
//       title: 'Call Us',
//       text: contact.phone,
//     },
//     {
//       icon: FiMail,
//       title: 'Email Us',
//       text: contact.email,
//     },
//   ];

//   return (
//     <section id='contact' className={styles.contactSection}>
//       <div className={styles.contactContainer}>
//         <h2 className={styles.sectionTitle}>Contact</h2>
//         <div className={styles.contactGrid}>
//           <div>
//             {infoItems.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div key={index} className={styles.infoCard}>
//                   <h4 className={styles.infoTitle}>
//                     <Icon /> {item.title}
//                   </h4>
//                   <p className={styles.infoText}>{item.text}</p>
//                 </div>
//               );
//             })}
//           </div>
//           <div className={styles.contactForm}>
//             <input
//               className={styles.input}
//               type='text'
//               name='name'
//               placeholder='Your Name'
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//             <input
//               className={styles.input}
//               type='email'
//               name='email'
//               placeholder='Your Email'
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <input
//               className={styles.input}
//               type='text'
//               name='subject'
//               placeholder='Subject'
//               value={formData.subject}
//               onChange={handleInputChange}
//             />
//             <textarea
//               className={`${styles.input} ${styles.textarea}`}
//               name='message'
//               placeholder='Message'
//               rows='6'
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//             <button className={styles.submitBtn} onClick={handleSubmit}>
//               Send Message
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import styles from "./Contact.module.css";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
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

          {/* Social Icons */}

          <div className={styles.socialLinks}>
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
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