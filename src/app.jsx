import React, { Component } from "react";

// Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Custom components
// import Login from "templates/login/login";
import Template from "templates/default/template";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Login /> */}
        <Template />
      </MuiThemeProvider>
    );
  }
}

export default App;
