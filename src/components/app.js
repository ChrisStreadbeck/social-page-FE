import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/navBar";
import Footer from "./navigation/footer";
import Home from "./pages/home";
import NoMatch from "./pages/no-match";
import CardFrame from "./cards/cardFrame";
import CardDetail from "./cards/cardDetail";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <CardFrame />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/c/:slug" component={CardDetail} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
