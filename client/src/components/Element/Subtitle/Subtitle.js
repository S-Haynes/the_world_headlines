import React from "react";
import styles from "./Subtitle.css";
const Hr = ({ title }) => {
  return (
    <div>
      <hr className={styles.Hr} />
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};

export default Hr;
