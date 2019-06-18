export default {
  palette: {
    common: { 
      black: "#000", 
      white: "#fff" 
    },
    background: { 
      paper: "#fff", 
      default: "#fafafa"
    },
    primary: {
      light: "rgba(232, 234, 246, 1)",
      main: "rgba(63, 81, 181, 1)",
      dark: "rgba(26, 35, 126, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(207, 216, 220, 1)",
      main: "rgba(96, 125, 139, 1)",
      dark: "rgba(38, 50, 56, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "rgba(255, 235, 238, 1)",
      main: "rgba(244, 67, 54, 1)",
      dark: "rgba(183, 28, 28, 1)",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(51, 51, 51, 1)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32
      },
      h3: {
        fontSize: 26
      },
      h4: {
        fontSize: 22
      },
      h5: {
        fontSize: 18
      },
      h6: {
        fontSize: 16
      }
    }
  }
};
