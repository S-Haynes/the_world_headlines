import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.Navbar}>
        <button style={{ marginRight: "10px" }} className={styles.NavButton}>
          <i class="fas fa-search" />
        </button>
        <button className={styles.NavButton}>
          Sections
          <i
            className="fas fa-bars"
            style={{ fontSize: "15px", marginLeft: "8px" }}
          />
        </button>
        <Link to="/">World</Link>
        <Link to="/">U.S.</Link>
        <Link to="/">Canada</Link>
        <Link to="/">China</Link>
        <div className={styles.Auth}>
          <Link to="/">
            <i class="fas fa-user-shield" />
            Sign in
          </Link>
          <Link to="/">
            <i class="fas fa-user-shield" />
            Sign out
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
