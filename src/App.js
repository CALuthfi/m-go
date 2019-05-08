import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Toko from "./container/toko";
import Menu from "./container/menu/menu";
import End from "./container/End";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/toko" exact component={Toko} />
          <Route path="/toko/:id" component={Menu} />
          <Route path="/bayar" component={End} />
        </Switch>
      </div>
    );
  }
}
export default App;
