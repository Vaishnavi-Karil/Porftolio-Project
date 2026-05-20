// ResumeButton.jsx

import React from "react";
import styles from "./button.module.css";
// import { Download } from "lucide-react";
import { FaDownload } from "react-icons/fa";

const Button = ({text}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.resumeButton}>
        {/* <Download size={16} /> */}
     <FaDownload size={14} />
        <span>{text}</span>
      </button>

      {/* <p className={styles.footerText}>
        © 2025 Vaishnavi Karil
      </p> */}
    </div>
  );
};

export default Button;