import React from "react";
// import { ReactSVG } from "react-svg";
import { Image } from "antd";

// const SvgIcon = (props) => <ReactSVG {...props} src={`/img/svg/${props.src}`} />;
const SvgIcon = (props) => (
  <Image
    style={{ width: props.first ? "100%" : "", height: "auto" }}
    src={`/img/svg/${props.src}`}
  />
);

export default SvgIcon;
