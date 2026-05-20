// // SectionDivider.jsx

// import styles from "./Divider.module.css";

// export default function Divider() {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.lineLeft} />

//       <div className={styles.centerContent}>
//         <span className={styles.label}>
//           WORK HISTORY
//         </span>

//         <div className={styles.dot} />
//       </div>

//       <div className={styles.lineRight} />
//     </div>
//   );
// }

import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lineLeft} />

      <div className={styles.centerContent}>
        <span className={styles.label}>
          WORK HISTORY
        </span>
      </div>

      <div className={styles.lineRight} />
    </div>
  );
}