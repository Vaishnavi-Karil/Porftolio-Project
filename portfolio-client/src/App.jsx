import React, { useState, useEffect } from 'react';
import Footer from './pages/Footer';
import Contact from './pages/Contacts';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import About from './pages/About';
import Hero from './pages/Hero';
import { styles } from './styles';
import {
  navbar,
  portfolioItems,
  services,
  skills,
  stats,
  contact,
} from './contants';
import Education from './pages/Education';
import Certification from './pages/Certification';
import { FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          'Message sent successfully! Vaishnavi will get back to you soon.',
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(
          `Failed to send message. Please try again or email directly at ${contact.email}`,
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert(
        `Failed to send message. Please email directly at ${contact.email}`,
      );
    }
  };

  const filteredPortfolio =
    portfolioFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <div style={styles.app}>
      {/* Sidebar Navigation */}
      <aside
        style={{ ...styles.sidebar, ...(mobileOpen ? styles.sidebarOpen : {}) }}
      >
        <div style={styles.sidebarContent}>
          <div style={styles.profileSection}>
            <div style={styles.avatar}></div>
            <h1 style={styles.profileName}>Vaishnavi Karil</h1>
          </div>

          <div style={styles.socialLinks}>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              target='_blank'
              title='Call'
              style={styles.socialIcon}
            >
              <FiPhone />
            </a>

            <a
              href='https://www.linkedin.com/in/vaishnavi-karil/'
              target='_blank'
              // style="width: 36px; height: 36px; background: rgb(42, 42, 62); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: rgb(20, 157, 221); text-decoration: none;"

              style={styles.socialIcon}
            >
              <FiLinkedin />
            </a>

            <a
              href='https://github.com/Vaishnavi-Karil'
              target='_blank'
              // style="width: 36px; height: 36px; background: rgb(42, 42, 62); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: rgb(20, 157, 221); text-decoration: none;"
              style={styles.socialIcon}
            >
              <FiGithub />
            </a>
          </div>

          <nav style={styles.navMenu}>
            {navbar.map((item) => (
              <button
                key={item.id}
                style={styles.navButton}
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon()} {item.text}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        style={styles.mobileMenuBtn}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Professional Overview: stats + resume grouped */}
        <section
          className='stats-bg-pattern'
          style={{ ...styles.groupSection, ...styles.lightBg }}
        >
          <div style={styles.container}>
            <h2 style={styles.groupHeading}>Professional Overview</h2>

            <div style={styles.statsGrid}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    style={{
                      ...styles.statCard,
                      animationDelay: `${index * 120}ms`,
                    }}
                    onMouseEnter={(e) => (
                      (e.currentTarget.style.transform = 'translateY(-6px)'),
                      (e.currentTarget.style.boxShadow =
                        '0 18px 40px rgba(2,6,23,0.6)')
                    )}
                    onMouseLeave={(e) => (
                      (e.currentTarget.style.transform = 'translateY(0)'),
                      (e.currentTarget.style.boxShadow =
                        '0 10px 30px rgba(2,6,23,0.6)')
                    )}
                  >
                    <div style={styles.statIconCircle}>
                      <Icon />
                    </div>
                    <div style={styles.statValue}>{stat.value}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: '28px' }}>
              <Resume />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills skills={skills} />
        {/* Resume moved into Professional Overview above */}

        {/* Portfolio Section */}
        <Portfolio
          portfolioFilter={portfolioFilter}
          filteredPortfolio={filteredPortfolio}
          setPortfolioFilter={setPortfolioFilter}
        />
        <Certification />
        <Education />
        {/* Services Section */}
        <Services services={services} />
        {/* Contact Section */}
        <Contact
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button style={styles.scrollTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
export default App;

// import React from "react";
// import { manageImages } from "./manageImages";
// const App = () => {
//   const { src: heroImg } = manageImages.heroImage;
//   return (
//     <div>
//       <h1>App</h1>
//       <img src={heroImg} alt="" />
//     </div>
//   );
// };

// export default App;
