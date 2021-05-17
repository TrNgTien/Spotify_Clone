import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { API_CONNECTION } from "../../constants/BE_CONNECTION";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  registerMessage: {
    color: "green",
    fontSize: "20px",
    marginTop: "1%",
    marginBottom: "-2%",
  },
}));

export default function RegisterForm(props) {
  const classes = useStyles();
  const [registerMessage, setRegisterMessage] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const progressSuccessful = () => {
    setRegisterMessage("Register successfully, Waiting!");
    setTimeout(
      () =>
        props.history.push({
          pathname: "/",
        }),
      1500
    );
  };

  const onChangeUserName = (valueUserName) => {
    setUserName(valueUserName);
  };
  const onChangePassword = (valuePassword) => {
    setPassword(valuePassword);
  };
  const handleRegister = () => {
    try {
      if (userName !== undefined && password !== undefined) {
        axios
          .post(`${API_CONNECTION}/userForm/register`, {
            userName: userName,
            password: password,
          })
          .then((result) => {
            if (result.data.message === "Register Successfully") {
              progressSuccessful();
            } else {
              setRegisterMessage(result.data.message);
            }
          });
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                value={userName}
                onChange={(e) => onChangeUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onChangePassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            className={classes.registerMessage}
            color="secondary"
          >
            {registerMessage}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleRegister()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
