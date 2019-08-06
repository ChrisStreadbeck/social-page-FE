import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="nav-links">
            <div className="nav1">
              <h1>nav link</h1>
            </div>
            <div className="nav1">
              <h1>nav link</h1>
            </div>
            <div className="nav1">
              <h1>nav link</h1>
            </div>
            <div className="nav1">
              <h1>nav link</h1>
            </div>
          </div>
        </div>
        <div className="middle">
          <h1>this is where the cards go</h1>
        </div>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </div>
    );
  }
}
