import React from "react";
import { Switch, Route } from "react-router-dom";
import LazyImport from "../config/lazy-import";

// Pages
const Dashboard = LazyImport({
  loader: () =>
    import("pages/dashboard/dashboard" /* webpackChunkName: 'dashboard' */)
});

const About = LazyImport({
  loader: () =>
    import("pages/about" /* webpackChunkName: 'about' */)
});

const PageNotFound = LazyImport({
  loader: () =>
    import("pages/page-not-found" /* webpackChunkName: 'notfound' */)
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routes;
