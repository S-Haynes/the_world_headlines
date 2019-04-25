import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Region from "./components/Region/Region";
import Layout from "./components/Layout/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/region/:region" component={Region} />
        </Layout>
      </Router>
    );
  }
}

export default App;
