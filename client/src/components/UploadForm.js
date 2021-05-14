import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Grid,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setCloseModal } from "../slices/FormModal";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  uploadButton: {
    marginBottom: "15%",
    width: "45%",
    margin: theme.spacing(3, 0, 2),
    border: "2px solid dodgerblue",
    color: "white",
    marginLeft: "5%",
    backgroundColor: "dodgerblue",
    "&:hover": {
      backgroundColor: "dodgerblue",
    },
  },
  cancelButton: {
    margin: theme.spacing(3, 0, 2),
    border: "2px solid red",
    color: "red",
    marginBottom: "15%",
    width: "45%",
    marginLeft: "5%",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  container: {
    backgroundColor: "white",
    borderRadius: "10%",
    zIndex: "1",
    position: "absolute",
    marginLeft: "37%",
    marginTop: "6%",
  },
}));

export default function UploadForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [songName, setSongName] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [duration, setDuration] = useState();
  const [genreName, setGenreName] = useState();
  const [artistName, setArtistName] = useState();
  const handleCloseModal = () => {
    dispatch(setCloseModal(false));
  };
  const handleSongName = (value) => {
    setSongName(value);
  };
  const handleReleaseDate = (value) => {
    setReleaseDate(value);
  };
  const handleGenre = (value) => {
    setGenreName(value);
  };
  const handleDuration = (value) => {
    setDuration(value);
  };
  const handleArtist = (value) => {
    setArtistName(value);
  };

  const uploadSong = () => {
    try {
      // axios.post(API_CONNECTION + `/userForm/login`);
      if (
        songName !== undefined &&
        releaseDate !== undefined &&
        duration !== undefined &&
        genreName !== undefined &&
        artistName !== undefined
      ) {
        axios
          .post(`http://localhost:8080/songs/postSongs`, {
            songName: songName,
            releaseDate: releaseDate,
            duration: duration,
            genreName: genreName,
            artistName: artistName,
          })
          .then((result) => {
            if (result.data.message === "Insert Successfully!") {
              dispatch(setCloseModal(false));
            } else {
              alert("Upload was had some problems. Please try again!");
            }
          });
      } else {
        alert("Please fill in all the blank!");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };
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
                value={songName}
                onChange={(e) => handleSongName(e.target.value)}
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
                value={releaseDate}
                onChange={(e) => handleReleaseDate(e.target.value)}
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
                value={duration}
                onChange={(e) => handleDuration(e.target.value)}
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
                value={genreName}
                onChange={(e) => handleGenre(e.target.value)}
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
                value={artistName}
                onChange={(e) => handleArtist(e.target.value)}
              />
            </Grid>
          </Grid>
          <Container>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.uploadButton}
              onClick={() => uploadSong()}
            >
              Upload
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.cancelButton}
              onClick={() => handleCloseModal()}
            >
              Cancel
            </Button>
          </Container>
        </form>
      </div>
    </Container>
  );
}
