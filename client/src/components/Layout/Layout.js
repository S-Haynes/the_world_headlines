import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Layout = props => {
  return (
    <Fragment>
      <Navbar />
      <div style={{ width: "100%", height: "100%" }}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
