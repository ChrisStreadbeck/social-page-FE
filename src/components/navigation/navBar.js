import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-header">
      <div className="logo-wrapper">
        <div className="logo">// LOGO GOES HERE</div>
      </div>
      <div className="grid-row-header">
        <div className="username-display">user name</div>
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
            <NavLink to="/help">Help</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
