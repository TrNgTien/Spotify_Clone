//Packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DATA_SONG } from "../../data/testing-data";
import MainControl from "./MainControl";
import MusicGrid from "./MusicGrid";
import MusicBar from "./MusicBar";
import { API_CONNECTION } from "../../constants/BE_CONNECTION";
import { useSelector } from "react-redux";
import UploadForm from "../../components/UploadForm";


import {_getAllSongs} from '../../api/Song'

//Styles
import "./styles/DashBoard.css";

const DashBoard = (props) => {
  const [dataSong, setDataSong] = useState(DATA_SONG);
  const [viewOption, setViewOption] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  const isOpenModal = useSelector((state) => state.modal);

  const getData = async () => {
    const response = await axios.get(`${API_CONNECTION}`);
    const data = response.data;
    setDataSong(data);
    setIsLoaded(true);
  };

  const getAllSongs = React.useCallback(() => _getAllSongs());
  React.useEffect(() => getAllSongs().then(res => {
    let newSongData = [].concat(res.data.data);
    setDataSong(newSongData)
  }),[])

  /**
   * @param option which user want to show
   * @return the view of the option
   */
  const viewOptionMusic = (viewOption) => {
    setViewOption(viewOption);
  };
  return (
    <div className="dash-board">
      <div className="dash-board__screen">
      {isOpenModal === true ? <UploadForm /> : null}
        <MainControl
          viewOptionMusic={(viewOption) => viewOptionMusic(viewOption)}
        />
        {isLoaded === true ? (
          <MusicGrid dataSong={dataSong} viewOption={viewOption} />
        ) : (
          "Waiting..."
        )}
      </div>
      <MusicBar musicBar={dataSong} />
    </div>
  );
};
export default DashBoard;
