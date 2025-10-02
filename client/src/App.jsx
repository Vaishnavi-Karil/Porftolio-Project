import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contacts";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import { styles } from "./styles";
import { navbar, portfolioItems, services, skills, stats } from "./contants";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState("all");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          "Message sent successfully! Vaishnavi will get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(
          "Failed to send message. Please try again or email directly at vaishnavigkariluae@gmail.com"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Failed to send message. Please email directly at vaishnavigkariluae@gmail.com"
      );
    }
  };

  const filteredPortfolio =
    portfolioFilter === "all"
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
            <div style={styles.avatar}>VK</div>
            <h1 style={styles.profileName}>Vaishnavi Karil</h1>
          </div>

          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialIcon}>
              X
            </a>
            <a href="#" style={styles.socialIcon}>
              f
            </a>
            <a href="#" style={styles.socialIcon}>
              in
            </a>
            <a href="#" style={styles.socialIcon}>
              ig
            </a>
          </div>

          <nav style={styles.navMenu}>
            {navbar.map((item) => (
              <button
                key={item.id}
                style={styles.navButton}
                onClick={() => scrollToSection(item.id)}
              >
                {item.icon} {item.text}
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
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Stats Section */}
        <section style={styles.statsSection}>
          <div style={styles.container}>
            <div style={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statCard}>
                  <div style={styles.statIcon}>{stat.icon}</div>
                  <div style={styles.statValue}>{stat.value}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills skills={skills} />
        {/* Resume Section */}
        <Resume />
        {/* Portfolio Section */}
        <Portfolio
          portfolioFilter={portfolioFilter}
          filteredPortfolio={filteredPortfolio}
          setPortfolioFilter={setPortfolioFilter}
        />
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
