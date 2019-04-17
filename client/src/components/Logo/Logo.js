import React from "react";

const Logo = props => {
  return <img alt="logo" src={props.img} style={{ maxWidth: props.width }} />;
};

export default Logo;
