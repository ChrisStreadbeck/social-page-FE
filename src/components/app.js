import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/navBar";
import Footer from "./navigation/footer";
import Home from "./pages/home";
import SocialForm from "./pages/socialForm";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={SocialForm} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
