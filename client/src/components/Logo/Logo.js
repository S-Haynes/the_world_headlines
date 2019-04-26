import React from "react";
import styles from "./Logo.css";
const Logo = props => {
  return <img className={styles.Logo} alt="logo" src={props.img} />;
};

export default Logo;
