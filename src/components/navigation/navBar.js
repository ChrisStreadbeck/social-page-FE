import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-header">
      <div className="logo-wrapper">
        <div className="logo">
          <h1>Socially Unsocial</h1>
        </div>
      </div>
      <div className="grid-row-header">
        <div className="username-display">user name</div>
        <div className="nav-links-wrapper">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-link">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="nav-link">
            <Link to="/help">Help</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
