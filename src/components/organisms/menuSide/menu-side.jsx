import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// Custom Components
import { Icon } from "atoms";

// Styles
import styles from "./styles";

function MenuSide({ handlers, state, classes }) {
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: state.open,
        [classes.drawerClose]: !state.open
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: state.open,
          [classes.drawerClose]: !state.open
        })
      }}
      open={state.open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handlers.handleDrawerClose}>
          <Icon icon="chevron_left" color="primary" />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Icon icon="home" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </Drawer>
  );
}

MenuSide.propTypes = {
  handlers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuSide);
