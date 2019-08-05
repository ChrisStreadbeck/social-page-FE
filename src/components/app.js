import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact to="/" Component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
