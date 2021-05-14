//Packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainControl from "./MainControl";
import MusicGrid from "./MusicGrid";
// import MusicBar from "./MusicBar";
import { API_CONNECTION } from "../../constants/BE_CONNECTION";
import { useSelector } from "react-redux";
import UploadForm from "../../components/UploadForm";
import { API_LOCAL_CONNECTION } from "../../constants/BE_CONNECTION";
import { _getAllSongs } from "../../api/Song";

//Styles
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import "./styles/DashBoard.css";
import "./styles/compressed/DashBoard.min.css";

const useStyles = makeStyles(() => ({
  waiting: {
    marginLeft: "2%",
  },
}));

const DashBoard = (props) => {
  const classes = useStyles();
  const [dataSong, setDataSong] = useState([]);
  const [viewOption, setViewOption] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const isOpenModal = useSelector((state) => state.modal.modal);
  const [userData, setUserData] = useState([]);
  const userName = props.location.userName;
  const password = props.location.password;

  const getUserInfo = async () => {
    let response = await axios.get(
      `${API_CONNECTION}/userForm/getUser?userName=${userName}&password=${password}`
    );
    let data = response.data.data.typeName;
    setUserData(data);
  };
  const getAllSongs = React.useCallback(() => _getAllSongs());
  useEffect(() => {
    getUserInfo();
    getAllSongs().then((res) => {
      let newSongData = [].concat(res.data.data);
      setDataSong(newSongData);
      setIsLoaded(false);
    });
  }, []);

  /**
   * @param option which user want to show
   * @return the view of the option
   */
  const viewOptionMusic = (viewOption) => {
    setViewOption(viewOption);
  };
  return isLoaded === true ? (
    <Typography className={classes.waiting} variant="h6" noWrap>
      Waiting...
    </Typography>
  ) : (
    <div className="dash-board">
      <div className="dash-board__screen">
        {isOpenModal === true ? <UploadForm /> : null}
        <MainControl
          userData={userData}
          viewOptionMusic={(viewOption) => viewOptionMusic(viewOption)}
        />

        <MusicGrid
          userName={userName}
          dataSong={dataSong}
          viewOption={viewOption}
        />
      </div>
      {/* <MusicBar musicBar={dataSong} /> */}
    </div>
  );
};
export default DashBoard;
