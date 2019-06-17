import React from "react";
import PropTypes from "prop-types";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// Custom Components
import { Button, Input } from "atoms";

// Styles
import styles from "./styles";

function LoginForm({ handlers, state, classes }) {
  return (
    <Card>
      <form noValidate>
        <CardContent>
          <Grid container direction="row" spacing={16}>
            <Grid item xs={12}>
              <Input
                type="text"
                name="user"
                label="Usuário"
                placeholder="Digite o usuário"
                fullWidth
                value={state.user}
                onChange={handlers.handleChange("user")}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type={state.showPassword ? "text" : "password"}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                fullWidth
                value={state.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Visualizar senha"
                        onClick={handlers.handleClickShowPassword}
                      >
                        {state.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                onChange={handlers.handleChange("password")}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            label="Entrar"
            variant="contained"
            color="primary"
            onClick={() => alert("Entrou")}
          />
        </CardActions>
      </form>
    </Card>
  );
}

LoginForm.propTypes = {
  handlers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
