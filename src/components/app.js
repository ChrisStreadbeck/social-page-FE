import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/navBar";
import Footer from "./navigation/footer";
import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
