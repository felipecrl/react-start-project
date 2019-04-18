import React, { Component } from "react";

// Routes
import Routes from "../../routes/routes";

// Styles
import "./template.scss";

class Template extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          Header
        </header>
        <main>
          <Routes />
        </main>
        <footer>footer</footer>
      </React.Fragment>
    );
  }
}

export default Template;
