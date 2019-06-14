import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

// Material UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

// Styles
import styles from './styles';

function Header({ handlers, state, classes }) {
  const menuOpen = Boolean(state.anchorEl);

  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: state.open,
      })}
    >
      <Toolbar disableGutters>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handlers.handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: state.open,
          })}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className={!state.open ? classes.grow : classes.opened}>
          Title
        </Typography>

        <IconButton
          aria-owns={menuOpen ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={handlers.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        
        <Menu
          id="menu-appbar"
          anchorEl={state.anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={menuOpen}
          onClose={handlers.handleClose}
        >
          <MenuItem onClick={handlers.handleClose}>Profile</MenuItem>
          <MenuItem onClick={handlers.handleClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handlers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
