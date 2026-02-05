import { manageImages } from "./manageImages";

const { src: heroImg } = manageImages.heroImage;
// const images = require("../public/assets/img/hero-img-1.jpg");
// public\assets\img\hero-img-1.jpg

export const styles = {
  app: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: "#fff",
    background: "#040b14",
    minHeight: "100vh",
  },
  sidebar: {
    position: "fixed", // make it always stay visible
    left: 0,
    top: 0,
    bottom: 0,
    width: "280px", // sidebar width
    background: "rgb(30, 30, 46)",
    borderRight: "1px solid rgb(42, 42, 62)",
    overflowY: "auto",
    zIndex: 1000,
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
    // background: "linear-gradient(135deg, #149ddd 0%, #0c7ab5 100%)",
    background: "url('/assets/img/vaishnavi-profile-img.png')",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "48px",
    fontWeight: "bold",
    backgroundSize: "cover",
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
  achortag: {
    textDecoration: "none",
    color: "white",
    display: "flex",

    flexDirection: "row",
    /* justify-content: center; */
    alignItems: "center",
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
    // marginLeft: 0,
    // minHeight: "100vh",
    marginLeft: "280px", // leave space for sidebar
    minHeight: "100vh",
    position: "relative",
  },
  heroSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // left align
    background:
      "url('/assets/img/hero-img-1.jpg') center center / cover no-repeat",
    textAlign: "left", // text ko left align kare
    paddingLeft: "0 50px",
  },
  heroContent: {
    marginLeft: "3rem",
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
    // background: "rgb(13 21 37)",
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
    background: "url('/assets/img/vaishnavi-profile-img.png')",
    // "url('/assets/img/vaishnavi-profile-img.png')"

    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    backgroundSize: "cover",
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
    // gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "40px",
  },
  resumeSubtitle: {
    fontSize: "26px",
    marginBottom: "20px",
  },
  // start change
  summaryContainer: {
    // background: "rgb(26, 31, 46)",
    // padding: "25px",
    borderRadius: "10px",
    marginBottom: "40px",
    // borderLeft: "3px solid rgb(20, 157, 221)",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "15px",
    color: "#fff",
  },
  paragraph: {
    color: "rgb(168, 169, 180)",
    lineHeight: "1.6",
  },
  // end
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
  //dialog css
  paper: {
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#1e1e2f",
    color: "#fff",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  video: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  text: {
    marginBottom: "0.75rem",
    lineHeight: 1.5,
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "underline",
  },
  closeButton: {
    position: "absolute",
    top: "8px",
    right: "8px",
    color: "#fff",
    background: "rgba(0,0,0,0.3)",
  },
};
