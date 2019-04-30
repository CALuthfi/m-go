import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import Home from "./container/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
