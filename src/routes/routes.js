import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Dashboard from "pages/dashboard/dashboard";
import About from "pages/about";
import PageNotFound from "pages/page-not-found";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
