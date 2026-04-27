import React, { useState, useEffect } from 'react';
import Footer from './pages/Footer';
import Contact from './pages/Contacts';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import About from './pages/About';
import Hero from './pages/Hero';
import appStyles from './App.module.css';
import {
  navbar,
  portfolioItems,
  services,
  skills,
  contact,
} from './contants';
import Education from './pages/Education';
import Certification from './pages/Certification';
import { FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');
  const [hoveredNav, setHoveredNav] = useState(null);
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
      setActiveNav(id);
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
    <div className={appStyles.app}>
      {/* Sidebar Navigation */}
      <aside
        className={`${appStyles.sidebar} ${mobileOpen ? appStyles.sidebarOpen : ''}`}
      >
        <div className={appStyles.sidebarContent}>
          <div className={appStyles.profileSection}>
            <h1 className={appStyles.profileName}>Vaishnavi Karil</h1>
            <p className={appStyles.profileRole}>Full Stack Developer</p>
            <div className={appStyles.profileAccentBar} />
          </div>

          <div className={appStyles.socialLinks}>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              target='_blank'
              title='Call'
              className={appStyles.socialIcon}
            >
              <FiPhone />
            </a>

            <a
              href='https://www.linkedin.com/in/vaishnavi-karil/'
              target='_blank'
              className={appStyles.socialIcon}
            >
              <FiLinkedin />
            </a>

            <a
              href='https://github.com/Vaishnavi-Karil'
              target='_blank'
              className={appStyles.socialIcon}
            >
              <FiGithub />
            </a>
          </div>

          <nav className={appStyles.navMenu}>
            {navbar.map((item) => {
              const isActive = activeNav === item.id;
              const isHovered = hoveredNav === item.id;
              return (
                <button
                  key={item.id}
                  className={isActive ? appStyles.navButtonActive : appStyles.navButton}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {isActive && <span className={appStyles.navActiveBorder} />}
                  <span className={appStyles.navIcon}>{item.icon()}</span>
                  {item.text}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className={appStyles.mobileMenuBtn}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Main Content */}
      <main className={appStyles.mainContent}>
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Career Journey: summary + stats + experience timeline */}
        <Resume />

        {/* Skills Section */}
        <Skills skills={skills} />

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
        <button className={appStyles.scrollTop} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}
export default App;

