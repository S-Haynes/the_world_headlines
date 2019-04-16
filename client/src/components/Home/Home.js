import React, { Component, Fragment } from "react";
import Logo from "../Logo/Logo";
import BlackLogo from "../../assets/img/newslogo.png";
import styles from "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container text-center mt-4">
          <Logo img={BlackLogo} width="450px" />
        </div>
        <div className="container">
          <hr style={{ width: "100%", margin: "0 auto" }} />
        </div>
      </Fragment>
    );
  }
}

export default Home;
