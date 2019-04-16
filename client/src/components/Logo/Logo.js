import React from "react";

const Logo = props => {
  return <img src={props.img} style={{ maxWidth: props.width }} />;
};

export default Logo;
