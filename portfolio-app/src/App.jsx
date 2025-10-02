import React, { useState, useEffect } from "react";

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

  const skills = [
    { name: "React.js & Next.js", value: 90 },
    { name: "Node.js & Express", value: 85 },
    { name: "MongoDB & Mongoose", value: 80 },
    { name: "Redux Toolkit", value: 85 },
    { name: "PostgreSQL & MySQL", value: 80 },
    { name: "AWS (Amplify, S3, RDS)", value: 70 },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "App 1",
      category: "app",
      description: "Mobile application design",
    },
    {
      id: 2,
      title: "Product 1",
      category: "product",
      description: "Product photography",
    },
    {
      id: 3,
      title: "Branding 1",
      category: "branding",
      description: "Brand identity design",
    },
    {
      id: 4,
      title: "Books 1",
      category: "books",
      description: "Book cover design",
    },
    {
      id: 5,
      title: "App 2",
      category: "app",
      description: "Web application UI",
    },
    {
      id: 6,
      title: "Product 2",
      category: "product",
      description: "E-commerce product",
    },
  ];

  const services = [
    {
      title: "Web Design",
      description: "Creating beautiful and functional websites",
    },
    {
      title: "Development",
      description: "Full-stack MERN development services",
    },
    { title: "UI/UX Design", description: "User-centered design approaches" },
    {
      title: "Consulting",
      description: "Technical consulting and architecture",
    },
    { title: "Branding", description: "Complete brand identity solutions" },
    { title: "SEO", description: "Search engine optimization services" },
  ];

  const stats = [
    { value: 3, label: "Years of Experience", icon: "💼" },
    { value: 15, label: "Completed Projects", icon: "📊" },
    { value: 12, label: "Technologies Mastered", icon: "🎧" },
    { value: 5, label: "Certifications", icon: "👥" },
  ];

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
            {[
              { text: "Home", icon: "🏠", id: "hero" },
              { text: "About", icon: "👤", id: "about" },
              { text: "Resume", icon: "📄", id: "resume" },
              { text: "Portfolio", icon: "💼", id: "portfolio" },
              { text: "Services", icon: "🔧", id: "services" },
              { text: "Contact", icon: "✉️", id: "contact" },
            ].map((item) => (
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
        <section id="hero" style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Vaishnavi Karil</h1>
            <p style={styles.heroSubtitle}>
              I'm a{" "}
              <span style={styles.highlight}>Frontend React JS Developer</span>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>About</h2>
            <div style={styles.aboutGrid}>
              <div style={styles.aboutImage}>Profile Photo</div>
              <div style={styles.aboutContent}>
                <h3 style={styles.aboutSubtitle}>
                  Fullstack MERN Developer & Web Application Developer
                </h3>
                <p style={styles.italic}>
                  Fullstack MERN Developer with 3+ years of experience in
                  building scalable, responsive web applications using React.js,
                  Next.js, Node.js, and MongoDB. Currently based in Dubai and
                  actively looking for opportunities in the UAE.
                </p>
                <div style={styles.infoGrid}>
                  <div>
                    <p style={styles.infoText}>
                      <strong>Phone:</strong> +971 528008661
                    </p>
                    <p style={styles.infoText}>
                      <strong>Location:</strong> Dubai, UAE
                    </p>
                    <p style={styles.infoText}>
                      <strong>Website:</strong> Portfolio
                    </p>
                  </div>
                  <div>
                    <p style={styles.infoText}>
                      <strong>Degree:</strong> M.Sc IT
                    </p>
                    <p style={styles.infoText}>
                      <strong>Email:</strong> vaishnavigkariluae@gmail.com
                    </p>
                    <p style={styles.infoText}>
                      <strong>Status:</strong> Immediate Joiner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        <section style={{ ...styles.section, ...styles.lightBg }}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Skills</h2>
            <div style={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${skill.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Resume</h2>
            <div style={styles.resumeGrid}>
              <div>
                <h3 style={styles.resumeSubtitle}>Education</h3>
                <div style={styles.resumeItem}>
                  <h4>M.Sc IT (Master of Science in Information Technology)</h4>
                  <span style={styles.badge}>2018 - 2020</span>
                  <p style={styles.italic}>
                    DAVV University, Indore, Madhya Pradesh
                  </p>
                  <p style={styles.descText}>
                    Focused on advanced software development, database
                    management, and web technologies.
                  </p>
                </div>
                <div style={styles.resumeItem}>
                  <h4>B.Sc CS (Bachelor of Science in Computer Science)</h4>
                  <span style={styles.badge}>2016 - 2018</span>
                  <p style={styles.italic}>
                    DAVV University, Indore, Madhya Pradesh
                  </p>
                  <p style={styles.descText}>
                    Core studies in programming fundamentals and computer
                    architecture.
                  </p>
                </div>
              </div>
              <div>
                <h3 style={styles.resumeSubtitle}>Professional Experience</h3>
                <div style={styles.resumeItem}>
                  <h4>Senior Software Developer / MERN Stack</h4>
                  <span style={styles.badge}>2025 - Present</span>
                  <p style={styles.italic}>NeoSOFT Private Limited, Pune</p>
                  <ul style={styles.list}>
                    <li>
                      Working with MySQL2, PostgreSQL and MongoDB databases
                    </li>
                    <li>
                      Built secure RBAC systems with permission-based APIs
                    </li>
                    <li>
                      Deployed backend APIs via AWS Elastic Beanstalk and RDS
                    </li>
                  </ul>
                </div>
                <div style={styles.resumeItem}>
                  <h4>Full Stack Developer (React + Node.js)</h4>
                  <span style={styles.badge}>2022 - 2024</span>
                  <p style={styles.italic}>Axonic Health Pvt. Ltd., Pune</p>
                  <ul style={styles.list}>
                    <li>
                      Built interactive dashboards with React.js and Material UI
                    </li>
                    <li>
                      Developed REST APIs using Node.js, Express, and PostgreSQL
                    </li>
                    <li>Managed state with Redux Toolkit and React Query</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          style={{ ...styles.section, ...styles.lightBg }}
        >
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Portfolio</h2>
            <div style={styles.portfolioFilters}>
              {["all", "app", "product", "branding", "books"].map((filter) => (
                <button
                  key={filter}
                  style={
                    portfolioFilter === filter
                      ? styles.filterBtnActive
                      : styles.filterBtn
                  }
                  onClick={() => setPortfolioFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
            <div style={styles.portfolioGrid}>
              {filteredPortfolio.map((item) => (
                <div key={item.id} style={styles.portfolioCard}>
                  <div style={styles.portfolioImg}>Project {item.id}</div>
                  <div style={styles.portfolioInfo}>
                    <h4>{item.title}</h4>
                    <p style={styles.portfolioDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
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

        {/* Contact Section */}
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

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.container}>
            <p>© Copyright iPortfolio. All Rights Reserved</p>
            <p style={styles.credits}>
              Designed & Developed by Vaishnavi Karil | Dubai, UAE | +971 52 800
              8661
            </p>
          </div>
        </footer>
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

const styles = {
  app: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#fff",
    background: "#040b14",
    minHeight: "100vh",
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "280px",
    background: "#1e1e2e",
    borderRight: "1px solid #2a2a3e",
    overflowY: "auto",
    zIndex: 1000,
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease",
  },
  sidebarOpen: {
    transform: "translateX(0)",
  },
  sidebarContent: {
    padding: "30px",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    margin: "0 auto 20px",
    background: "linear-gradient(135deg, #149ddd 0%, #0c7ab5 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    fontWeight: "bold",
  },
  profileName: {
    fontSize: "24px",
    fontWeight: 600,
    margin: 0,
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    background: "#2a2a3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#149ddd",
    textDecoration: "none",
    fontSize: "14px",
  },
  navMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  navButton: {
    background: "transparent",
    border: "none",
    color: "#a8a9b4",
    padding: "12px 15px",
    textAlign: "left",
    fontSize: "15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  mobileMenuBtn: {
    display: "block",
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: 1100,
    background: "#149ddd",
    border: "none",
    color: "#fff",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    fontSize: "20px",
    cursor: "pointer",
  },
  mainContent: {
    marginLeft: 0,
    minHeight: "100vh",
  },
  heroSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), linear-gradient(135deg, #1a1f2e 0%, #040b14 100%)",
    textAlign: "center",
    padding: "20px",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "24px",
    color: "#a8a9b4",
  },
  highlight: {
    color: "#149ddd",
    borderBottom: "3px solid #149ddd",
  },
  section: {
    padding: "80px 20px",
  },
  lightBg: {
    background: "#0d1525",
  },
  container: {
    maxWidth: "1140px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "40px",
    paddingBottom: "20px",
    borderBottom: "2px solid #2a2a3e",
  },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "40px",
    alignItems: "start",
  },
  aboutImage: {
    aspectRatio: "1",
    background: "linear-gradient(135deg, #149ddd 0%, #0c7ab5 100%)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
  },
  aboutContent: {},
  aboutSubtitle: {
    fontSize: "26px",
    marginBottom: "15px",
    marginTop: 0,
  },
  italic: {
    fontStyle: "italic",
    color: "#a8a9b4",
    marginBottom: "20px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  infoText: {
    color: "#a8a9b4",
    marginBottom: "10px",
  },
  statsSection: {
    padding: "60px 20px",
    background: "#0d1525",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  statCard: {
    background: "#1a1f2e",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
  },
  statIcon: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  statValue: {
    fontSize: "48px",
    fontWeight: 700,
    color: "#149ddd",
    marginBottom: "10px",
  },
  statLabel: {
    color: "#a8a9b4",
    fontSize: "14px",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  skillItem: {
    marginBottom: "20px",
  },
  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  progressBar: {
    height: "10px",
    background: "#2a2a3e",
    borderRadius: "5px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #149ddd 0%, #0c7ab5 100%)",
    transition: "width 0.3s ease",
  },
  resumeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "40px",
  },
  resumeSubtitle: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  resumeItem: {
    background: "#1a1f2e",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "20px",
    borderLeft: "3px solid #149ddd",
  },
  badge: {
    display: "inline-block",
    background: "#149ddd",
    color: "#fff",
    padding: "5px 15px",
    borderRadius: "20px",
    fontSize: "13px",
    marginBottom: "10px",
    marginTop: "5px",
  },
  descText: {
    color: "#a8a9b4",
  },
  list: {
    marginTop: "15px",
    paddingLeft: "20px",
    color: "#a8a9b4",
  },
  portfolioFilters: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "10px 25px",
    background: "transparent",
    border: "2px solid #149ddd",
    color: "#149ddd",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  },
  filterBtnActive: {
    padding: "10px 25px",
    background: "#149ddd",
    border: "2px solid #149ddd",
    color: "#fff",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  },
  portfolioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  portfolioCard: {
    background: "#1a1f2e",
    borderRadius: "10px",
    overflow: "hidden",
  },
  portfolioImg: {
    aspectRatio: "4/3",
    background: "linear-gradient(135deg, #149ddd 0%, #0c7ab5 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
  },
  portfolioInfo: {
    padding: "20px",
  },
  portfolioDesc: {
    color: "#a8a9b4",
    fontSize: "14px",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  serviceCard: {
    background: "#1a1f2e",
    padding: "30px",
    borderRadius: "10px",
  },
  serviceIcon: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  serviceTitle: {
    marginBottom: "15px",
  },
  serviceDesc: {
    color: "#a8a9b4",
    fontSize: "14px",
    lineHeight: 1.6,
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
  },
  infoCard: {
    background: "#1a1f2e",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  contactForm: {
    background: "#1a1f2e",
    padding: "30px",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    background: "#0d1525",
    border: "1px solid #2a2a3e",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    resize: "vertical",
    fontFamily: "inherit",
  },
  submitBtn: {
    width: "100%",
    padding: "15px",
    background: "#149ddd",
    border: "none",
    borderRadius: "25px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
  },
  footer: {
    background: "#0d1525",
    padding: "30px 20px",
    textAlign: "center",
    borderTop: "1px solid #2a2a3e",
  },
  credits: {
    fontSize: "13px",
    color: "#a8a9b4",
    marginTop: "5px",
  },
  scrollTop: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "44px",
    height: "44px",
    background: "#149ddd",
    border: "none",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
    zIndex: 999,
  },
};

export default App;
