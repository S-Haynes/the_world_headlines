import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <h1>hi</h1>
        </Layout>
      </Router>
    );
  }
}

export default App;
