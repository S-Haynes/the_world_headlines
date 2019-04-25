import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Region from "./components/Region/Region";
import Layout from "./components/Layout/Layout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/region/:region"
              render={props => <Region key={props.match.params.region} />}
            />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
