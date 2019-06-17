import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/home";
import About from "pages/about";
import PageNotFound from "pages/page-not-found";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
