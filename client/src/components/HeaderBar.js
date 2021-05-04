import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: "88%",
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.userName} variant="h6" noWrap>
            User Name
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
