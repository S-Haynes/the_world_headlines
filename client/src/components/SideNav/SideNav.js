import React, { Component } from "react";
import styles from "./SideNav.css";
import { Link } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <div
        className={`${styles.SideNav} ${
          this.props.show ? styles.Show : styles.Hide
        } row justify-content-center align-items-start`}
      >
        <div className={`${styles.SideNavSection} col-12 row`}>
          <h1 className="col-12">Regions</h1>
          <br />
          <hr
            className="col-6"
            style={{
              background: "#aaa",
              height: "3px"
            }}
          />
          <ul onClick={this.props.click} className={`${styles.Link} col-12`}>
            <Link to="/region/us">United States</Link>
            <Link to="/region/br">Brazil</Link>
            <Link to="/region/ca">Canada</Link>
            <Link to="/region/au">Australia</Link>
            <Link to="/region/fr">France</Link>
            <Link to="/region/it">Italy</Link>
            <Link to="/region/nl">Netherlands</Link>
            <Link to="/region/pl">Poland</Link>
          </ul>

          <h1 className="col-12">Categories</h1>
          <hr
            className="col-6"
            style={{
              background: "#aaa",
              height: "3px"
            }}
          />
          <ul onClick={this.props.click} className={`${styles.Link} col-12`}>
            <Link to="/category/sports">Sports</Link>
            <Link to="/category/business">Business</Link>
            <Link to="/category/entertainment">Entertainment</Link>
            <Link to="/category/health">Health</Link>
            <Link to="/category/science">Science</Link>
            <Link to="/category/technology">Technology</Link>
            <Link to="/category/general">General</Link>
          </ul>
        </div>
        <div />
      </div>
    );
  }
}

export default SideNav;
