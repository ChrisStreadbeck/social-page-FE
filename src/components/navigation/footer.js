import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="nav-links-wrapper">
        <div className="nav-link">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/form-filler" form={true}>
            Form
          </NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/help">Help</NavLink>
        </div>
      </div>
      <div className="copyright-container">
        © 2019 Socialy-Unsocial | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
