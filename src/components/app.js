import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./navigation/navBar";
import Footer from "./navigation/footer";
import Home from "./pages/home";
import SocialForm from "./pages/socialForm";
import NoMatch from "./pages/no-match";
import CardDetail from "./cards/cardDetail";
import About from "./pages/about";
import Help from "./pages/help";
import RealHelp from "./pages/real-help";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/help" component={Help} />
              <Route path="/real-help" component={RealHelp} />
              <Route path="/form-filler" component={SocialForm} form={true} />
              <Route exact path="/c/:slug" component={CardDetail} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
