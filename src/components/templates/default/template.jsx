import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI
import { withStyles } from "@material-ui/core/styles";

// Custom Components
import Header from "organisms/header/header";
import MenuSide from "organisms/menuSide/menu-side";

// Routes
import Routes from "../../../routes/routes";

// Styles
import styles from "./styles";

class Template extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  get handlers() {
    return {
      handleMenu: this.handleMenu,
      handleClose: this.handleClose,
      handleDrawerOpen: this.handleDrawerOpen,
      handleDrawerClose: this.handleDrawerClose
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header state={this.state} handlers={this.handlers} />

        <MenuSide state={this.state} handlers={this.handlers} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes />
        </main>
      </div>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Template);
