import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import CardFrame from "./cards/cardFrame";

class App extends Component {
  render() {
    return (
      <div className="app">
        <CardFrame />
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
