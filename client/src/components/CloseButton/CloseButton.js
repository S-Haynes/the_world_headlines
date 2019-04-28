import React from "react";
import styles from "./CloseButton.css";
const CloseButton = () => {
  return (
    <div className={styles.CloseButton}>
      <div className={styles.Line1} />
      <div className={styles.Line2} />
    </div>
  );
};

export default CloseButton;
