import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import history from "config/history";

import configureStore from "config/store";
import * as serviceWorker from "./serviceWorker";

import App from "./app";
import './assets/sass/index.scss';

const store = configureStore();

render(
  <Provider store={store} history={history}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
