import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.Navbar}>
        <Link style={{ height: "100%", margin: "0px" }} to="/">
          <button style={{ marginRight: "10px" }} className={styles.NavButton}>
            <i className="fas fa-home" />
          </button>
        </Link>

        <button onClick={this.props.regionClick} className={styles.NavButton}>
          Regions
          <i
            className="fas fa-bars"
            style={{ fontSize: "15px", marginLeft: "8px" }}
          />
        </button>
        <div className={styles.DesktopOnly}>
          <Link to="/">U.S.</Link>
          <Link to="/region/br">Brazil</Link>
          <Link to="/region/ca">Canada</Link>
          <Link to="/region/au">Australia</Link>
        </div>

        <div className={styles.Auth}>
          <button
            onClick={this.props.subscribeClick}
            className={styles.NavButton}
          >
            Subscribe
            <i
              className="fas fa-user-shield"
              style={{ fontSize: "15px", marginLeft: "8px" }}
            />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
