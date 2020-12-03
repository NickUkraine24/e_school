import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <p className="col-sm" align="center">
        &copy;{new Date().getFullYear()} All rights reserved |
        Terms Of Service | Privacy
      </p>
   </div>
     
  );
}

export default Footer;
