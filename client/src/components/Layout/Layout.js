import React, { Fragment, Component } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../SideNav/SideNav";
import Modal from "../Modal/Modal";

class Layout extends Component {
  state = {
    showSideNav: false,
    showModal: false
  };

  onRegionClickHandler = () => {
    this.setState(prevState => ({
      showSideNav: !prevState.showSideNav,
      showModal: !prevState.showSideNav
    }));
  };

  onModalClickHandler = () => {
    this.setState(prevState => ({
      showSideNav: false,
      showModal: !prevState.showModal
    }));
  };

  onSubscribeClickHandler = () => {
    this.setState(prevState => ({
      showModal: true
    }));
  };

  onSideNavClickHandler = () => {
    this.setState(prevState => ({
      showModal: false,
      showSideNav: false
    }));
  };
  render() {
    return (
      <Fragment>
        <Navbar
          subscribeClick={this.onSubscribeClickHandler}
          regionClick={this.onRegionClickHandler}
        />
        <SideNav
          click={this.onSideNavClickHandler}
          show={this.state.showSideNav}
        />
        <Modal click={this.onModalClickHandler} show={this.state.showModal} />
        <div style={{ width: "100%", height: "100%" }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
