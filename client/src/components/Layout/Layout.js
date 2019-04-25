import React, { Fragment, Component } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../SideNav/SideNav";

class Layout extends Component {
  state = {
    showSideNav: false
  };
  render() {
    return (
      <Fragment>
        <Navbar />
        <SideNav show={this.state.showSideNav} />
        <div style={{ width: "100%", height: "100%" }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
