import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ProjectDetails from './pages/ProjectDetails';
import { FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import Button from './components/Button';

// Page wrapper components with IDs for navigation
const HeroPage = () => <section id="hero"><Hero /></section>;
const AboutPage = () => <section id="about"><About /></section>;
const ResumePage = () => <section id="resume"><Resume /></section>;
const SkillsPage = () => <section id="skills"><Skills skills={skills} /></section>;
const PortfolioPage = () => {
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const filteredPortfolio =
    portfolioFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <section id="portfolio">
      <Portfolio
        portfolioFilter={portfolioFilter}
        filteredPortfolio={filteredPortfolio}
        setPortfolioFilter={setPortfolioFilter}
      />
    </section>
  );
};
const CertificationsPage = () => <section id="certifications"><Certification /></section>;
const EducationPage = () => <section id="education"><Education /></section>;
const ServicesPage = () => <section id="services"><Services services={services} /></section>;
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  return (
    <section id="contact">
      <Contact
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [activeNav, setActiveNav] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef({});

  const isProjectPage = location.pathname.startsWith('/project/');

  // Intersection Observer to detect visible section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section elements
    navbar.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        sectionRefs.current[item.id] = element;
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section on nav click
  const handleNavClick = (sectionId) => {
    if (isProjectPage) {
      // On project page, scroll to section or navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveNav(sectionId);
      }
    }
    setMobileOpen(false);
  };

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
                  onClick={() => handleNavClick(item.id)}
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
          <Button text="Download CV" />
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className={appStyles.mobileMenuBtn}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Main Content - Single Page with all sections */}
      <main className={appStyles.mainContent}>
        {isProjectPage ? (
          <Routes>
            <Route path="/project/:slug" element={<ProjectDetails />} />
          </Routes>
        ) : (
          <>
            <HeroPage />
            <AboutPage />
            <ResumePage />
            <SkillsPage />
            <PortfolioPage />
            <CertificationsPage />
            <EducationPage />
            <ServicesPage />
            <ContactPage />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
export default App;

