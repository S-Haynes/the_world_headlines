import React from "react";
import styles from "./Modal.css";

const Modal = props => {
  return props.show ? (
    <div onClick={props.click} className={styles.Modal} />
  ) : null;
};

export default Modal;
