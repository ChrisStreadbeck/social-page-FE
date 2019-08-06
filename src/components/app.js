import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/navBar";
import Footer from "./navigation/footer";
import Home from "./pages/home";
import SocialForm from "./pages/socialForm";
import NoMatch from "./pages/no-match";
import CardDetail from "./cards/cardDetail";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={SocialForm} />
              <Route path="/c/:slug" component={CardDetail} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
