import React from "react";
import PropTypes from "prop-types";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Custom Components
import { Label } from "atoms";
import LoginForm from "molecules/loginForm/login-form";

// Styles
import styles from './styles';

function LoginCard({ handlers, state, classes }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.bgLogin}
    >
      <Grid item xs={4}>
        <Label variant="h4" align="center" gutterBottom color='textPrimary'>
          Fazer login
        </Label>
        
        <LoginForm handlers={handlers} state={state} />
      </Grid>
    </Grid>
  );
}

LoginCard.propTypes = {
  handlers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginCard);
