import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    backgroundColor: "white",
    marginBottom: "2%",
    marginTop: "-3%",
  },
}));

export default function UploadForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <h2 style={{ color: "black" }}>Upload Music</h2>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="songName"
                label="Song Name"
                name="songName"
                autoComplete="songName"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="releaseDate"
                label="Release Date"
                name="releaseDate"
                color="secondary"
                autoComplete="releaseDate"
                placeholder="Release Date Of The Song"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="duration"
                label="Duration"
                name="duration"
                placeholder="Ex: 2:20"
                color="secondary"
                autoComplete="duration"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                color="secondary"
                autoComplete="genre"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="artist"
                label="Artist"
                name="artist"
                color="secondary"
                autoComplete="artist"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Upload
          </Button>
        </form>
      </div>
    </Container>
  );
}
