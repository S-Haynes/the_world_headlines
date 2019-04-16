import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Layout from "./components/Layout/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Router>
    );
  }
}

export default App;
