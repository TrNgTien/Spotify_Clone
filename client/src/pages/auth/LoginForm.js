import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Avatar,
  Typography,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import background from "../../assets/background.jpg";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// import { API_CONNECTION } from "../../constants/BE_CONNECTION";

const PICTURE_LOGIN = background;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${PICTURE_LOGIN})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginMessage: {
    color: "red",
    fontSize: "20px",
    marginTop: "1%",
    marginBottom: "-2%",
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();

  const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        Developed in 2021.
      </Typography>
    );
  };

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginMessage, setLoginMessage] = useState();
  const onChangeUserName = (valueUserName) => {
    setUserName(valueUserName);
  };
  const onChangePassword = (valuePassword) => {
    setPassword(valuePassword);
  };
  const handleLogin = async () => {
    try {
      // axios.post(API_CONNECTION + `/userForm/login`);
      axios
        .post(`http://localhost:8080/userForm/login`, {
          userName: userName,
          password: password,
        })
        .then((result) => {
          if (result.data.message === "Login successfully!") {
            setLoginSuccess(true);
            props.history.push({
              pathname: "/main-page",
              userName,
            });
          } else {
            if ((userName === undefined, password === undefined)) {
              setLoginMessage("Please enter your User Name and Password");
            } else setLoginMessage(result.data.data);
          }
        });
    } catch (e) {
      console.log("Error: ", e);
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
              value={userName}
              autoFocus
              onChange={(e) => onChangeUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => onChangePassword(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Typography
              variant="h5"
              className={classes.loginMessage}
              color="secondary"
            >
              {loginSuccess === false ? loginMessage : null}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleLogin()}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register-form" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default LoginForm;
