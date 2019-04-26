import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navbar.css";
import WhiteLogo from "../../assets/img/newslogowhite.png";

class Navbar extends Component {
  state = {
    showLogo: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== "/") {
      return { showLogo: true };
    } else {
      return { showLogo: false };
    }
  }
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
        <div
          className={`${styles.Logo} ${styles.MobileOnly} ${
            this.state.showLogo ? styles.Show : styles.Hide
          } row text-center align-items-center justify-content-center`}
        >
          <div className="col-12">
            <img src={WhiteLogo} alt="brandlogo" />
          </div>
          <div className="col-12">
            <p>
              <em>Democracy Dies In Darkness</em>
            </p>
          </div>
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

export default withRouter(Navbar);
