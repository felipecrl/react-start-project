import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI
import { withStyles } from "@material-ui/core/styles";

// Custom Components
import LoginCard from "organisms/loginCard/login-card";

// Styles
import styles from './styles';

class Login extends Component {
  state = {
    user: "",
    password: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  get handlers() {
    return {
      handleChange: this.handleChange,
      handleClickShowPassword: this.handleClickShowPassword
    };
  }

  render() {
    return <LoginCard handlers={this.handlers} state={this.state} />;
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
