import React from "react";
import PropTypes from "prop-types";

// Material UI
import { withStyles } from "@material-ui/core/styles";

// Custom Components
import { Label } from "atoms/";

// Styles
import styles from "./styles";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Label variant="h1">
        Dashboard
      </Label>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
