import React from "react";
import { useRouteMatch } from "react-router-dom";
const Footer = (props) => {
  const match = useRouteMatch("/dashboard");
  return !match && <div> footer</div>;
};

export default Footer;
