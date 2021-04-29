import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./containers";
import Home from "./containers/Home/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dh/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
