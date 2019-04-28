import React, { Fragment, Component } from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../SideNav/SideNav";
import Modal from "../Modal/Modal";
import Subscribe from "../Subscribe/Subscribe";

class Layout extends Component {
  state = {
    showSideNav: false,
    showModal: false,
    showSubscribe: false
  };

  onRegionClickHandler = () => {
    this.setState(prevState => ({
      showSideNav: !prevState.showSideNav,
      showModal: !prevState.showSideNav,
      showSubscribe: false
    }));
  };

  onModalClickHandler = () => {
    this.setState(prevState => ({
      showSideNav: false,
      showModal: !prevState.showModal,
      showSubscribe: false
    }));
  };

  onSubscribeClickHandler = () => {
    this.setState(prevState => ({
      showModal: true,
      showSubscribe: true,
      showSideNav: false
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
        <Subscribe
          closeClick={this.onModalClickHandler}
          show={this.state.showSubscribe}
        />
        <div style={{ width: "100%", height: "100%" }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
