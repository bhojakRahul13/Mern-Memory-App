import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import UseStyles from "./styles";
import Input from "./Input";
import Icon from "./icon.js";

const Auth = () => {
  const classes = UseStyles();

  const [isSignup, setIsSignup] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {};
  const handleChange = () => {};

  const googlSuccess = () => {
    console.log("Google login Success..");
  };
  const googlFailure = () => {
    console.log("Google login Failed!!");
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((PrevIsSignup) => !PrevIsSignup);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              type="email"
              handleChange={handleChange}
              name="email"
              label="Email address"
            />
            <Input
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              name="password"
              label="Password"
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <GoogleLogin
            clientId="GOOGLE ID"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googlSuccess}
            onFailure={googlFailure}
            cookiePolicy="single_host_origin"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "sign In"}
          </Button>

          <Grid container justify="flex-end">
            <Grid>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
